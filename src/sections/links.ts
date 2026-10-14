import { site } from "@/site.config";

export const telHref = `tel:${site.phone.replace(/[^\d+]/g, "")}`;
export const bookHref = site.bookingUrl || "#contact";
export const bookExternal = Boolean(site.bookingUrl);
