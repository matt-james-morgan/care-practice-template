// ─────────────────────────────────────────────
//  Care Practice Template — for nurses, foot care, physio, doulas,
//  massage therapists, counsellors… Everything you edit lives here.
//  Page title & link-preview text are in index.html.
//  Photos go in /public/images as name-640.webp + name-1200.webp (see README).
//  Check your regulator's advertising rules before publishing — avoid
//  guarantees, superlatives and unverifiable claims.
// ─────────────────────────────────────────────

export const site = {
  name: "Jordan Ellis, RN",
  practice: "Home & Foot Care Nursing",
  location: "Guelph & Wellington County",
  phone: "(519) 555-0142",
  email: "care@jordanellis.example",
  // Online booking link (Jane, Cal.com, Calendly, Acuity…). Leave "" to send people to the contact form.
  bookingUrl: "",
  // Form service endpoint (e.g. https://formspree.io/f/xxxx). Leave "" and the form opens the visitor's email app.
  formEndpoint: "",

  nav: [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Fees", href: "#fees" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],

  hero: {
    title: "Nursing care at home, from a nurse you'll get to know.",
    text: "Foot care, wound care and health check-ins in the comfort of your own home — unhurried visits with the same registered nurse every time.",
    image: "/images/hero",
    imageAlt: "A nurse in green scrubs talking warmly with an older client",
    trust: ["Registered Nurse", "Fully insured", "Receipts for health benefits"],
    availability: "New clients welcome this month",
  },

  // icon: one of "foot" | "bandage" | "pill" | "heart" | "activity" | "home"
  services: [
    { icon: "foot", name: "Advanced foot care", text: "Nail trimming, corns, calluses and diabetic foot checks.", duration: "45 min", price: "$70" },
    { icon: "bandage", name: "Wound care", text: "Dressing changes and monitoring after injury or surgery.", duration: "30–60 min", price: "from $75" },
    { icon: "pill", name: "Medication support", text: "Blister-pack reviews, reminders and help understanding prescriptions.", duration: "30 min", price: "$55" },
    { icon: "activity", name: "Health check-ins", text: "Blood pressure, blood sugar and general wellness visits.", duration: "30 min", price: "$55" },
    { icon: "heart", name: "Post-hospital support", text: "A smoother first few weeks home after a hospital stay.", duration: "60 min", price: "$95" },
    { icon: "home", name: "Respite visits", text: "A few hours of skilled care so family caregivers can rest.", duration: "2–4 hrs", price: "$60/hr" },
  ],

  steps: [
    { title: "Get in touch", text: "Call, book online or send a message. I'll answer any questions first." },
    { title: "First home visit", text: "We talk through your health, goals and what kind of support would help." },
    { title: "Care that fits", text: "Regular visits on a schedule that works for you, with the same nurse each time." },
  ],

  about: {
    title: "Hi, I'm Jordan.",
    paragraphs: [
      "I've been a registered nurse for 14 years, most of them in community and long-term care. I started this practice so I could give people the time that busy clinics rarely can.",
      "My visits are calm and unhurried. I'll explain what I'm doing, answer your questions, and keep family members in the loop if you'd like me to.",
    ],
    image: "/images/about",
    imageAlt: "Portrait of a smiling nurse in teal scrubs",
    credentials: [
      "Registered Nurse — College of Nurses, Reg. #0000000",
      "BScN, University of Example",
      "Certified Advanced Foot Care Nurse",
      "CPR / BLS certified",
      "Professional liability insurance",
      "Current vulnerable sector police check",
    ],
  },

  areas: ["Guelph", "Fergus", "Elora", "Rockwood", "Puslinch", "Guelph/Eramosa"],
  hours: [
    { days: "Mon – Fri", time: "8:30am – 5:00pm" },
    { days: "Sat", time: "9:00am – 1:00pm" },
    { days: "Sun", time: "Closed" },
  ],

  testimonials: [
    { quote: "Jordan is gentle, patient and always on time. Mum looks forward to every visit.", name: "Karen M.", context: "Daughter of a client" },
    { quote: "After my surgery I was nervous about the dressings. Jordan made it easy and explained everything.", name: "Tom B.", context: "Wound care client" },
    { quote: "My feet haven't felt this good in years. Worth every penny.", name: "Lorraine P.", context: "Foot care client" },
  ],

  fees: {
    intro: "Clear prices, no surprises. Travel within the service area is included.",
    points: [
      "Many extended health plans cover nursing or foot care — I'll give you a receipt with my registration number.",
      "Pay by e-transfer, debit or credit card at the end of each visit.",
      "Please give 24 hours' notice to cancel, or a $30 fee may apply.",
    ],
  },

  faq: [
    { q: "Do I need a doctor's referral?", a: "No. You can book directly. Some insurance plans ask for a referral before they'll reimburse, so check your plan if you'll be claiming." },
    { q: "Is this covered by OHIP?", a: "Private nursing isn't covered by OHIP, but many workplace and private health plans reimburse part or all of the cost." },
    { q: "What should I have ready for a visit?", a: "A comfortable chair with good light, a list of your current medications, and any questions you'd like to ask." },
    { q: "Can family members be there?", a: "Of course. With your permission I'm also happy to send updates to a family member after each visit." },
    { q: "Is this an emergency service?", a: "No. If you're having a medical emergency, call 911 right away." },
  ],
};
