export const services = [
  {
    id: "airport",
    title: "Airport Transfer",
    description:
      "Meet-and-greet and door-to-door transfers to and from major UK airports with tracked, efficient routing.",
    icon: "plane",
  },
  {
    id: "business",
    title: "Business Transport",
    description:
      "Punctual corporate chauffeur service for meetings, conferences, and executive travel schedules.",
    icon: "briefcase",
  },
  {
    id: "city",
    title: "City Transport",
    description:
      "Comfortable city-to-city and London travel with chauffeurs trained on UK roads and routes.",
    icon: "city",
  },
  {
    id: "tours",
    title: "Chauffeur Tours",
    description:
      "Bespoke sightseeing and tour itineraries tailored around your time, comfort, and destinations.",
    icon: "map",
  },
  {
    id: "online",
    title: "Easy Booking",
    description:
      "Order your luxury ride by phone, WeChat, or our online enquiry form — we respond quickly.",
    icon: "booking",
  },
  {
    id: "vip",
    title: "VIP Corporate",
    description:
      "Discreet VIP and corporate vehicle options for clients who expect polished, private service.",
    icon: "vip",
  },
] as const;

export const aboutHighlights = [
  "Fully trained chauffeurs educated on UK roads",
  "We take the most efficient route every journey",
  "Luxury Mercedes and VIP corporate vehicles",
  "24/7 booking for bespoke chauffeur service",
] as const;

export const testimonials = [
  {
    name: "John Jue",
    role: "Client",
    quote:
      "Professional chauffeurs who know the UK roads inside out. Every transfer felt smooth, efficient, and genuinely premium.",
  },
  {
    name: "Eloise Smith",
    role: "Client",
    quote:
      "From booking on WeChat to arrival, A2B made luxury travel simple. Punctual, courteous, and perfectly organised.",
  },
] as const;

export const stats = [
  { label: "Luxury Vehicles", value: "4+" },
  { label: "Coverage", value: "UK-Wide" },
  { label: "Availability", value: "24/7" },
  { label: "Booking Channels", value: "Phone & WeChat" },
] as const;

export const faqs = [
  {
    q: "How do I book a chauffeur?",
    a: "Call +44 7938 994070, message us on WeChat (kp61pke), or send an enquiry through the contact form.",
  },
  {
    q: "Which vehicles are available?",
    a: "Our fleet includes Mercedes E-Class, Mercedes V-Class, Mercedes S-Class, and VIP corporate vehicles.",
  },
  {
    q: "Do you cover the whole United Kingdom?",
    a: "Yes. Our chauffeurs are trained on UK roads and plan the most efficient routes for your journey.",
  },
  {
    q: "Is the service available 24/7?",
    a: "Yes. Call us anytime to book your bespoke chauffeur or tour service.",
  },
] as const;
