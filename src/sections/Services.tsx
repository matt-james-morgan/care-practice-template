import { Activity, Bandage, Clock, Footprints, HeartPulse, Home, Pill, type LucideIcon } from "lucide-react";
import { site } from "@/site.config";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "./SectionHeading";

const icons: Record<string, LucideIcon> = {
  foot: Footprints,
  bandage: Bandage,
  pill: Pill,
  activity: Activity,
  heart: HeartPulse,
  home: Home,
};

export function Services() {
  return (
    <section id="services" className="bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <SectionHeading eyebrow="Services" title="Care in your own home" text="Every visit is with a registered nurse. Prices include travel within the service area." />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {site.services.map((s, i) => {
            const Icon = icons[s.icon] ?? HeartPulse;
            return (
              <Reveal key={s.name} delay={(i % 3) * 70} className="h-full">
                <article className="flex h-full flex-col rounded-[var(--radius-card)] border border-line bg-bg p-6">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-mint text-mint-ink">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="mt-5 text-xl">{s.name}</h3>
                  <p className="mt-2 flex-1 leading-relaxed text-muted">{s.text}</p>
                  <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
                    <span className="flex items-center gap-1.5 text-sm text-muted">
                      <Clock className="size-4" />
                      {s.duration}
                    </span>
                    <span className="text-lg font-bold">{s.price}</span>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
