import { CalendarCheck, Phone } from "lucide-react";
import { site } from "@/site.config";
import { StickyBar } from "@/components/shared/StickyBar";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { Services } from "@/sections/Services";
import { Steps } from "@/sections/Steps";
import { About } from "@/sections/About";
import { AreaHours } from "@/sections/AreaHours";
import { Testimonials } from "@/sections/Testimonials";
import { Fees } from "@/sections/Fees";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { bookHref, telHref } from "@/sections/links";

// Helps Google show the practice in local search results
const structuredData = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: `${site.name} — ${site.practice}`,
  telephone: site.phone,
  email: site.email,
  areaServed: site.areas,
  address: { "@type": "PostalAddress", addressLocality: site.location },
};

export default function App() {
  return (
    <>
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      <div id="top" />
      <Header />
      <main>
        <Hero />
        <Services />
        <Steps />
        <About />
        <AreaHours />
        <Testimonials />
        <Fees />
        <Contact />
      </main>
      <Footer />
      <StickyBar
        actions={[
          { label: "Call", href: telHref, icon: <Phone className="size-5" /> },
          { label: "Book a visit", href: bookHref, icon: <CalendarCheck className="size-5" />, primary: true },
        ]}
      />
    </>
  );
}
