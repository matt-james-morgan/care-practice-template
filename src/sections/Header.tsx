import { useCallback, useEffect, useState } from "react";
import { CalendarCheck, Menu, Phone } from "lucide-react";
import { cn } from "@/lib/cn";
import { site } from "@/site.config";
import { MobileMenu } from "@/components/shared/MobileMenu";
import { bookExternal, bookHref, telHref } from "./links";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={cn("sticky top-0 z-50 border-b bg-bg/90 backdrop-blur-lg transition-colors", scrolled ? "border-line" : "border-transparent")}>
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 md:h-20 md:px-8">
          <a href="#top" className="min-w-0 py-2 leading-tight">
            <span className="block truncate font-bold">{site.name}</span>
            <span className="block truncate text-xs text-muted">{site.practice}</span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {site.nav.map((item) => (
              <a key={item.href} href={item.href} className="py-2 text-sm font-medium text-muted hover:text-ink">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <a href={telHref} className="btn btn-secondary min-h-11 px-4 text-sm">
              <Phone className="size-4" />
              {site.phone}
            </a>
            <a href={bookHref} target={bookExternal ? "_blank" : undefined} rel="noopener noreferrer" className="btn btn-primary min-h-11 px-4 text-sm">
              Book a visit
            </a>
          </div>

          <button type="button" onClick={() => setOpen(true)} className="-mr-2 flex size-12 shrink-0 items-center justify-center lg:hidden" aria-label="Open menu" aria-expanded={open}>
            <Menu className="size-6" />
          </button>
        </div>
      </header>

      <MobileMenu
        open={open}
        onClose={close}
        items={site.nav}
        hideFrom="lg"
        footer={
          <div className="grid gap-3">
            <a href={telHref} className="btn btn-secondary w-full">
              <Phone className="size-5" />
              Call {site.phone}
            </a>
            <a href={bookHref} className="btn btn-primary w-full">
              <CalendarCheck className="size-5" />
              Book a visit
            </a>
          </div>
        }
      />
    </>
  );
}
