interface SubmitFormOptions {
  /** Form service URL (Formspree, Basin, Getform…). Leave empty to use email instead. */
  endpoint: string;
  /** Where the email fallback goes. */
  email: string;
  subject: string;
  values: Record<string, string>;
  labels: Record<string, string>;
}

/**
 * Sends the form to a form service when an endpoint is configured,
 * otherwise opens the visitor's email app with everything filled in.
 */
export async function submitForm({ endpoint, email, subject, values, labels }: SubmitFormOptions) {
  if (endpoint) {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ _subject: subject, ...values }),
    });
    if (!res.ok) throw new Error(`Form service responded with ${res.status}`);
    return "sent" as const;
  }

  const body = Object.entries(values)
    .filter(([, v]) => v.trim())
    .map(([k, v]) => `${labels[k] ?? k}: ${v}`)
    .join("\n");
  window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  return "mailto" as const;
}
