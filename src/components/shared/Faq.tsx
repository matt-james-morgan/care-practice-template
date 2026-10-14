import { Plus } from "lucide-react";

export interface FaqItem {
  q: string;
  a: string;
}

/** Accessible accordion built on native <details>; opening one closes the others. */
export function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item) => (
        <details key={item.q} name="faq" className="group">
          <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 py-4 text-lg font-medium [&::-webkit-details-marker]:hidden">
            {item.q}
            <Plus className="size-5 shrink-0 text-muted transition-transform duration-200 group-open:rotate-45" />
          </summary>
          <p className="max-w-prose pb-6 pr-8 leading-relaxed text-muted">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
