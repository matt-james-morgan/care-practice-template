import { BadgeCheck } from "lucide-react";
import { site } from "@/site.config";
import { Img } from "@/components/shared/Img";
import { Reveal } from "@/components/shared/Reveal";

export function About() {
  const { about } = site;
  return (
    <section id="about" className="bg-surface">
      <div className="mx-auto grid max-w-6xl items-start gap-10 px-5 py-16 md:grid-cols-[0.9fr_1.1fr] md:gap-16 md:px-8 md:py-24">
        <Reveal>
          <div className="mx-auto aspect-[4/5] max-w-sm overflow-hidden rounded-[var(--radius-card)] md:max-w-none">
            <Img src={about.image} alt={about.imageAlt} sizes="(min-width: 768px) 40vw, 100vw" />
          </div>
        </Reveal>
        <Reveal delay={100}>
          <p className="text-sm font-semibold text-brand">About me</p>
          <h2 className="mt-2 text-3xl md:text-4xl">{about.title}</h2>
          <div className="mt-5 space-y-4 text-lg leading-relaxed text-muted">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <div className="mt-8 rounded-[var(--radius-card)] border border-line bg-bg p-5 sm:p-6">
            <h3 className="text-lg">Qualifications & credentials</h3>
            <ul className="mt-4 space-y-3">
              {about.credentials.map((c) => (
                <li key={c} className="flex gap-3">
                  <BadgeCheck className="mt-0.5 size-5 shrink-0 text-brand" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
