export type FleetVehicle = {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  features: string[];
  passengers: string;
};

export const fleet: FleetVehicle[] = [
  {
    id: "mercedes-e-class",
    name: "Mercedes E-Class",
    category: "Sedan",
    description:
      "Executive sedan comfort for airport transfers, city travel, and discreet business journeys across the UK.",
    image: "/images/fleet/e-class.png",
    features: ["Executive seating", "Climate control", "Airport transfers", "Business travel"],
    passengers: "Up to 3 passengers",
  },
  {
    id: "mercedes-v-class",
    name: "Mercedes V-Class",
    category: "Luxury MPV",
    description:
      "Spacious luxury MPV ideal for families, groups, and clients who need extra room without sacrificing comfort.",
    image: "/images/fleet/v-class.png",
    features: ["Spacious cabin", "Group travel", "Luggage friendly", "Tour ready"],
    passengers: "Up to 6 passengers",
  },
  {
    id: "mercedes-s-class",
    name: "Mercedes S-Class",
    category: "Luxury SUV / Saloon",
    description:
      "Flagship Mercedes luxury for VIP clients seeking the smoothest ride and premium presence.",
    image: "/images/fleet/s-class.png",
    features: ["Flagship luxury", "VIP transfers", "Quiet cabin", "Premium finish"],
    passengers: "Up to 3 passengers",
  },
  {
    id: "vip-corporate",
    name: "VIP Corporate",
    category: "Luxury Corporate",
    description:
      "Bespoke corporate and VIP vehicles for executives, events, and high-profile itineraries.",
    image: "/images/fleet/vip-corporate.png",
    features: ["Corporate events", "Executive protocol", "Discreet service", "Flexible itineraries"],
    passengers: "Configurable",
  },
];
