import { Mail, Phone, ShieldAlert } from "lucide-react";
import { site } from "@/site.config";
import { ContactForm, type Field } from "@/components/shared/ContactForm";
import { SectionHeading } from "./SectionHeading";
import { telHref } from "./links";

const fields: Field[] = [
  { name: "name", label: "Your name", required: true, autoComplete: "name", half: true },
  { name: "phone", label: "Phone", type: "tel", required: true, autoComplete: "tel", half: true },
  { name: "email", label: "Email", type: "email", autoComplete: "email", half: true },
  { name: "bestTime", label: "Best time to call", type: "select", options: ["Morning", "Afternoon", "Evening", "Any time"], half: true },
  { name: "service", label: "What can I help with?", type: "select", options: [...site.services.map((s) => s.name), "Something else"] },
  {
    name: "message",
    label: "Anything else I should know?",
    type: "textarea",
    placeholder: "e.g. who the care is for, and which days suit you",
    hint: "Please don't include detailed medical information — we'll go over that privately.",
  },
];

export function Contact() {
  return (
    <section id="contact" className="bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[0.9fr_1.1fr] md:gap-16 md:px-8 md:py-24">
        <div>
          <SectionHeading eyebrow="Contact" title="Let's talk about your care" text="Request a call back and I'll be in touch within one business day." />
          <div className="mt-8 grid gap-3">
            <a href={telHref} className="flex min-h-14 items-center gap-3 rounded-[var(--radius-card)] border border-line px-5 text-lg font-semibold hover:border-brand">
              <Phone className="size-5 text-brand" />
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="flex min-h-14 items-center gap-3 rounded-[var(--radius-card)] border border-line px-5 font-semibold break-all hover:border-brand">
              <Mail className="size-5 shrink-0 text-brand" />
              {site.email}
            </a>
          </div>
          <p className="mt-6 flex gap-3 rounded-[var(--radius-card)] bg-warn p-4 text-sm leading-relaxed">
            <ShieldAlert className="size-5 shrink-0 text-amber-700" />
            <span>
              <strong>This is not an emergency service.</strong> If you need urgent medical help, call 911.
            </span>
          </p>
        </div>

        <div className="rounded-[var(--radius-card)] border border-line bg-bg p-5 sm:p-8">
          <ContactForm
            fields={fields}
            endpoint={site.formEndpoint}
            email={site.email}
            subject="Call back request"
            submitLabel="Request a call back"
            note="Your details are only used to reply to you."
          />
        </div>
      </div>
    </section>
  );
}
