// src/data/homeData.js

export const statsData = [
  { id: 1, value: 64, suffix: "+", label: "Districts Covered", icon: "MapPin" },
  { id: 2, value: 500, suffix: "k+", label: "Completed Trips", icon: "Route" },
  { id: 3, value: 10, suffix: "k+", label: "Verified Drivers", icon: "Users" },
  { id: 4, value: 4.9, decimals: 1, suffix: "", label: "User Rating", icon: "Star" },
];

export const servicesData = [
  {
    id: "intercity",
    title: "Intercity Car Rental",
    description: "Travel between cities comfortably with transparent pricing and experienced drivers.",
    icon: "Car",
    tag: "Popular",
  },
  {
    id: "hourly",
    title: "Hourly & Daily Rental",
    description: "Rent a vehicle with a driver on an hourly basis for business meetings or family errands.",
    icon: "Clock",
  },
  {
    id: "airport",
    title: "Airport Transfer",
    description: "Punctual pick-ups and drop-offs to ensure you never miss a flight.",
    icon: "Plane",
  },
  {
    id: "wedding",
    title: "Event & Wedding Cars",
    description: "Premium and luxury vehicles to make your special occasions memorable.",
    icon: "Sparkles",
  },
];

// Add to src/data/homeData.js

export const promoSectionsData = [
  {
    id: "business",
    badge: "For Corporate",
    title: "Modern Car Rentals for Business",
    description: "Streamline executive travel, employee commutes, and client pickups with custom billing, dedicated account managers, and automated ride reporting.",
    bullets: [
      "Centralized corporate dashboard & invoice management",
      "Flexible monthly or per-ride payment models",
      "Priority customer support 24/7",
    ],
    ctaText: "Explore Business Solutions",
    ctaHref: "#business",
    // Live CDN asset link with Unsplash fallback for corporate fleet
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1000&q=80",
    imagePosition: "right",
  },
  {
    id: "club",
    badge: "For Vehicle Owners",
    title: "Turn Your Car into Earnings with Garibook Club",
    description: "Partner your vehicle with Garibook to earn consistent passive income. We manage trip bookings, safety protocols, and monthly payouts.",
    bullets: [
      "Guaranteed monthly returns on registered vehicles",
      "Real-time GPS tracking and vehicle monitoring",
      "Regular driver background checks & maintenance logs",
    ],
    ctaText: "Join Garibook Club",
    ctaHref: "#club",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1000&q=80",
    imagePosition: "left",
  },
  {
    id: "vms",
    badge: "Fleet Management",
    title: "Vehicle Management System (VMS)",
    description: "Gain complete oversight of your fleet operations. Monitor fuel consumption, driver performance, maintenance schedules, and real-time routes from a unified dashboard.",
    bullets: [
      "Live GPS tracking with route history playback",
      "Automated maintenance & service reminders",
      "Comprehensive trip expense and earnings analytics",
    ],
    ctaText: "Request VMS Demo",
    ctaHref: "#vms",
    image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=1000&q=80",
    imagePosition: "right",
  },
];

// Add to src/data/homeData.js

export const journeyStepsData = [
  {
    step: "01",
    title: "Choose Your Vehicle",
    description: "Select from sedan, microbus, SUV, or luxury vehicles based on your passenger capacity and budget.",
    icon: "Car",
  },
  {
    step: "02",
    title: "Select Pickup & Time",
    description: "Specify your pickup point, trip destination, date, and preferred departure time.",
    icon: "MapPin",
  },
  {
    step: "03",
    title: "Confirm & Travel",
    description: "Get instant driver details, track your ride in real-time, and enjoy a safe journey.",
    icon: "CheckCircle",
  },
];

export const useCasesData = [
  {
    id: "airport",
    title: "Airport Rides",
    subtitle: "Punctual & Stress-Free",
    description: "Never worry about missing a flight. On-time pickups and terminal drop-offs available 24/7.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80",
    tag: "24/7 Available",
  },
  {
    id: "family",
    title: "Family Outings",
    subtitle: "Spacious & Comfortable",
    description: "Rent spacious microbuses or SUVs to travel together comfortably on family vacations.",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
    tag: "Spacious",
  },
  {
    id: "long-tours",
    title: "Cross-District Tours",
    subtitle: "Explore All 64 Districts",
    description: "Plan long-distance trips with verified local drivers who know the safest highway routes.",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
    tag: "Popular",
  },
];
