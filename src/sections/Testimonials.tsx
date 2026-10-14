import { Quote } from "lucide-react";
import { site } from "@/site.config";
import { Img } from "@/components/shared/Img";
import { SectionHeading } from "./SectionHeading";

export function Testimonials() {
  return (
    <section className="bg-brand text-brand-ink">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid items-end gap-8 md:grid-cols-[1fr_auto]">
          <SectionHeading eyebrow="Kind words" title="What clients and families say" className="[&_p]:text-mint" />
          <div className="hidden size-28 overflow-hidden rounded-full border-4 border-brand-ink/20 md:block">
            <Img src="/images/visit" alt="" sizes="112px" />
          </div>
        </div>
        {/* Swipe on phones, three columns on desktop */}
        <div className="snap-row mt-10 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0">
          {site.testimonials.map((t) => (
            <figure key={t.name} className="flex w-[85%] flex-col rounded-[var(--radius-card)] bg-brand-ink/10 p-6 sm:w-[60%] md:w-auto">
              <Quote className="size-7 text-mint" />
              <blockquote className="mt-4 flex-1 text-lg leading-relaxed">{t.quote}</blockquote>
              <figcaption className="mt-6">
                <span className="block font-semibold">{t.name}</span>
                <span className="text-sm text-mint">{t.context}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
