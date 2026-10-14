/** Smooth-scroll to an in-page anchor like "#shop" (scroll-padding-top keeps it clear of the header). */
export function scrollToHash(href: string) {
  if (!href.startsWith("#")) return;
  const el = href === "#top" ? document.body : document.querySelector(href);
  el?.scrollIntoView({ behavior: "smooth" });
  history.replaceState(null, "", href === "#top" ? " " : href);
}
