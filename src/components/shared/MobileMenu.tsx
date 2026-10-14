import { useEffect, type ReactNode } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/cn";
import { scrollToHash } from "./scroll";

export interface NavItem {
  label: string;
  href: string;
}

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  items: NavItem[];
  /** Pinned to the bottom of the sheet, where thumbs reach easily. */
  footer?: ReactNode;
  /** Screen size where the desktop nav takes over. Must match the header. */
  hideFrom?: "md" | "lg";
}

const hideClass = { md: "md:hidden", lg: "lg:hidden" };

/** Full-screen phone menu. Render it outside the <header> so header effects can't trap it. */
export function MobileMenu({ open, onClose, items, footer, hideFrom = "md" }: MobileMenuProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-[60] flex flex-col bg-bg px-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-4 text-ink transition-[transform,visibility] duration-300 ease-out",
        hideClass[hideFrom],
        open ? "translate-x-0" : "invisible translate-x-full"
      )}
      aria-hidden={!open}
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
    >
      <div className="flex justify-end">
        <button
          type="button"
          onClick={onClose}
          className="-mr-2 flex size-12 items-center justify-center rounded-full"
          aria-label="Close menu"
        >
          <X className="size-7" />
        </button>
      </div>

      <nav className="mt-4 flex flex-col">
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={(e) => {
              e.preventDefault();
              onClose();
              // Wait for the scroll lock to release before scrolling
              setTimeout(() => scrollToHash(item.href), 0);
            }}
            className="border-b border-line py-4 font-display text-3xl tracking-tight"
          >
            {item.label}
          </a>
        ))}
      </nav>

      {footer && (
        <div className="mt-auto pt-8" onClick={onClose}>
          {footer}
        </div>
      )}
    </div>
  );
}
