import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { cn } from "@/lib/cn";
import { submitForm } from "@/lib/submitForm";

export interface Field {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "date" | "textarea" | "select";
  options?: string[];
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
  /** Half width from small tablets up; always full width on phones. */
  half?: boolean;
  hint?: string;
}

interface ContactFormProps {
  fields: Field[];
  endpoint: string;
  email: string;
  subject: string;
  submitLabel: string;
  /** Prefill values, e.g. a product name. */
  defaults?: Record<string, string>;
  note?: string;
  className?: string;
}

export function ContactForm({ fields, endpoint, email, subject, submitLabel, defaults, note, className }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "mailto" | "error">("idle");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const values = Object.fromEntries(fields.map((f) => [f.name, String(data.get(f.name) ?? "")]));
    const labels = Object.fromEntries(fields.map((f) => [f.name, f.label]));
    setStatus("sending");
    try {
      const result = await submitForm({ endpoint, email, subject: `${subject} — ${values.name ?? ""}`.trim(), values, labels });
      setStatus(result);
      if (result === "sent") form.reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className={cn("rounded-[var(--radius-card)] border border-line bg-surface p-8 text-center", className)} role="status">
        <CheckCircle2 className="mx-auto size-10 text-brand" />
        <p className="mt-4 font-display text-2xl">Thanks — message sent.</p>
        <p className="mt-2 text-muted">I'll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className={cn("grid gap-4 sm:grid-cols-2", className)}>
      {fields.map((f) => {
        const id = `field-${f.name}`;
        const common = {
          id,
          name: f.name,
          required: f.required,
          placeholder: f.placeholder,
          autoComplete: f.autoComplete,
          defaultValue: defaults?.[f.name],
          className: "field",
        };
        return (
          <div key={f.name} className={cn("flex flex-col gap-1.5", !f.half && "sm:col-span-2")}>
            <label htmlFor={id} className="text-sm font-medium">
              {f.label}
              {f.required && <span className="text-brand"> *</span>}
            </label>
            {f.type === "textarea" ? (
              <textarea {...common} rows={4} />
            ) : f.type === "select" ? (
              <select {...common} defaultValue={defaults?.[f.name] ?? ""}>
                <option value="" disabled>
                  Choose one…
                </option>
                {f.options?.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            ) : (
              <input {...common} type={f.type ?? "text"} />
            )}
            {f.hint && <p className="text-sm text-muted">{f.hint}</p>}
          </div>
        );
      })}

      <div className="flex flex-col gap-3 sm:col-span-2">
        <button type="submit" className="btn btn-primary w-full sm:w-auto sm:self-start" disabled={status === "sending"}>
          {status === "sending" && <Loader2 className="size-5 animate-spin" />}
          {submitLabel}
        </button>
        <p className="text-sm text-muted" aria-live="polite">
          {status === "mailto" && "Your email app should open with your message ready to send."}
          {status === "error" && (
            <>
              Something went wrong. Please email{" "}
              <a className="underline" href={`mailto:${email}`}>
                {email}
              </a>{" "}
              instead.
            </>
          )}
          {status === "idle" && note}
        </p>
      </div>
    </form>
  );
}
