import { site } from "@/site.config";
import { telHref } from "./links";

const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-12 md:flex-row md:items-start md:justify-between md:px-8">
        <div>
          <p className="text-xl font-bold">{site.name}</p>
          <p className="mt-1 text-muted">
            {site.practice} · {site.location}
          </p>
        </div>
        <div className="flex flex-col gap-1 md:items-end">
          <a href={telHref} className="py-2.5 font-semibold">
            {site.phone}
          </a>
          <a href={`mailto:${site.email}`} className="py-2.5 break-all text-muted hover:text-ink">
            {site.email}
          </a>
        </div>
      </div>
      <p className="mx-auto max-w-6xl px-5 pb-8 text-sm text-muted md:px-8">
        © {year} {site.name}. Information on this site is general and not a substitute for medical advice.
      </p>
    </footer>
  );
}
