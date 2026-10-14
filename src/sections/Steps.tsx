import { site } from "@/site.config";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "./SectionHeading";

export function Steps() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
      <SectionHeading eyebrow="How it works" title="Getting started is simple" />
      <ol className="mt-10 grid gap-4 md:grid-cols-3 md:gap-6">
        {site.steps.map((step, i) => (
          <Reveal key={step.title} delay={i * 80}>
            <li className="flex gap-4 md:flex-col">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-brand text-lg font-bold text-brand-ink">{i + 1}</span>
              <div>
                <h3 className="text-xl">{step.title}</h3>
                <p className="mt-1.5 leading-relaxed text-muted">{step.text}</p>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
