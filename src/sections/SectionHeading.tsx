import { cn } from "@/lib/cn";

export function SectionHeading({ eyebrow, title, text, className }: { eyebrow: string; title: string; text?: string; className?: string }) {
  return (
    <div className={cn("max-w-2xl", className)}>
      <p className="text-sm font-semibold text-brand">{eyebrow}</p>
      <h2 className="mt-2 text-3xl leading-tight md:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-lg leading-relaxed text-muted">{text}</p>}
    </div>
  );
}
