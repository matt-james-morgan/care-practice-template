import { Receipt } from "lucide-react";
import { site } from "@/site.config";
import { Faq } from "@/components/shared/Faq";
import { SectionHeading } from "./SectionHeading";

export function Fees() {
  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-2 md:gap-16 md:px-8 md:py-24">
      <div id="fees">
        <SectionHeading eyebrow="Fees & insurance" title="Paying for care" text={site.fees.intro} />
        <ul className="mt-8 space-y-4">
          {site.fees.points.map((p) => (
            <li key={p} className="flex gap-3">
              <Receipt className="mt-1 size-5 shrink-0 text-brand" />
              <span className="leading-relaxed">{p}</span>
            </li>
          ))}
        </ul>
      </div>
      <div id="faq">
        <SectionHeading eyebrow="FAQ" title="Common questions" />
        <div className="mt-6">
          <Faq items={site.faq} />
        </div>
      </div>
    </section>
  );
}
