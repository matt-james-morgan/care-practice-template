import { useEffect, useState, type ReactNode } from "react";
import { cn } from "@/lib/cn";

export interface StickyAction {
  label: string;
  href: string;
  icon?: ReactNode;
  primary?: boolean;
}

/**
 * Phone-only action bar pinned to the bottom of the screen (the easiest place to reach with a thumb).
 * It appears once the visitor scrolls past the hero, where the same buttons first show.
 */
export function StickyBar({ actions }: { actions: StickyAction[] }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div
        className={cn(
          "fixed inset-x-0 bottom-0 z-40 border-t border-line bg-bg/90 px-3 pt-3 backdrop-blur-lg transition-transform duration-300 md:hidden",
          "pb-[max(0.75rem,env(safe-area-inset-bottom))]",
          visible ? "translate-y-0" : "translate-y-full"
        )}
      >
        <div className={cn("grid gap-2", actions.length > 1 ? "grid-cols-2" : "grid-cols-1")}>
          {actions.map((a) => (
            <a key={a.label} href={a.href} className={cn("btn w-full", a.primary ? "btn-primary" : "btn-secondary")}>
              {a.icon}
              {a.label}
            </a>
          ))}
        </div>
      </div>
      {/* Keeps the bar from covering the bottom of the footer */}
      <div className="h-24 md:hidden" aria-hidden />
    </>
  );
}
