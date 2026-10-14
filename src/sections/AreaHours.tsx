import { Clock, MapPin } from "lucide-react";
import { site } from "@/site.config";
import { Img } from "@/components/shared/Img";

export function AreaHours() {
  return (
    <section className="mx-auto grid max-w-6xl gap-4 px-5 py-16 md:grid-cols-3 md:gap-6 md:px-8 md:py-24">
      <div className="rounded-[var(--radius-card)] border border-line bg-surface p-6">
        <MapPin className="size-6 text-brand" />
        <h2 className="mt-4 text-2xl">Where I visit</h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {site.areas.map((a) => (
            <li key={a} className="rounded-full bg-mint px-3 py-1.5 text-sm font-medium text-mint-ink">
              {a}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-muted">Not sure if you're in the area? Just ask.</p>
      </div>

      <div className="rounded-[var(--radius-card)] border border-line bg-surface p-6">
        <Clock className="size-6 text-brand" />
        <h2 className="mt-4 text-2xl">Visit hours</h2>
        <dl className="mt-4 divide-y divide-line">
          {site.hours.map((h) => (
            <div key={h.days} className="flex justify-between gap-4 py-2.5">
              <dt className="text-muted">{h.days}</dt>
              <dd className="text-right font-semibold">{h.time}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="hidden overflow-hidden rounded-[var(--radius-card)] md:block">
        <Img src="/images/checkup" alt="A nurse checking a client's blood pressure" sizes="33vw" />
      </div>
    </section>
  );
}
