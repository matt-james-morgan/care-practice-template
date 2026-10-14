import { CalendarCheck, CheckCircle2, Phone } from "lucide-react";
import { site } from "@/site.config";
import { Img } from "@/components/shared/Img";
import { bookExternal, bookHref, telHref } from "./links";

export function Hero() {
  const { hero } = site;
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 pt-6 pb-16 md:grid-cols-[1.1fr_1fr] md:gap-14 md:px-8 md:pt-12 md:pb-24">
      <div>
        <p className="inline-flex items-center gap-2 rounded-full bg-mint px-3 py-1.5 text-sm font-semibold text-mint-ink">
          <span className="size-2 rounded-full bg-brand" />
          {hero.availability}
        </p>
        <h1 className="mt-5 text-[2.35rem] leading-[1.1] sm:text-5xl lg:text-[3.4rem]">{hero.title}</h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">{hero.text}</p>

        {/* Both actions are full-width on phones: big, obvious, easy to tap */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href={bookHref} target={bookExternal ? "_blank" : undefined} rel="noopener noreferrer" className="btn btn-primary">
            <CalendarCheck className="size-5" />
            Book a visit
          </a>
          <a href={telHref} className="btn btn-secondary">
            <Phone className="size-5" />
            Call {site.phone}
          </a>
        </div>

        <ul className="mt-8 grid gap-2.5 sm:grid-cols-2">
          {hero.trust.map((t) => (
            <li key={t} className="flex items-center gap-2.5 font-medium">
              <CheckCircle2 className="size-5 shrink-0 text-brand" />
              {t}
            </li>
          ))}
          <li className="flex items-center gap-2.5 font-medium">
            <CheckCircle2 className="size-5 shrink-0 text-brand" />
            Home visits in {site.location.split(" &")[0]}
          </li>
        </ul>
      </div>

      <div className="relative">
        <div className="aspect-[4/3] overflow-hidden rounded-[var(--radius-card)] md:aspect-[4/5]">
          <Img src={hero.image} alt={hero.imageAlt} priority sizes="(min-width: 768px) 45vw, 100vw" />
        </div>
      </div>
    </section>
  );
}
