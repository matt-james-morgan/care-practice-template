import { cn } from "@/lib/cn";

interface ImgProps {
  /** Base path without size/extension, e.g. "/images/hero" → hero-640.webp + hero-1200.webp */
  src: string;
  alt: string;
  className?: string;
  /** How wide the image renders, so phones download the small file. */
  sizes?: string;
  /** Above-the-fold images load immediately; everything else loads as you scroll. */
  priority?: boolean;
}

export function Img({ src, alt, className, sizes = "100vw", priority = false }: ImgProps) {
  return (
    <img
      src={`${src}-1200.webp`}
      srcSet={`${src}-640.webp 640w, ${src}-1200.webp 1200w`}
      sizes={sizes}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
      decoding="async"
      className={cn("h-full w-full object-cover", className)}
    />
  );
}
