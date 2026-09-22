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

// Add to src/data/homeData.js

export const appPromoData = {
  title: "Get the Garibook App",
  description: "Book rides, track your driver in real-time, and manage all your trips right from your pocket. Available on iOS and Android.",
  image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80", // Mobile app mockup
};

export const driverPromoData = {
  title: "Be a Smart Driver",
  description: "Join our network of professional drivers. Enjoy flexible hours, consistent rides, and maximize your earnings with our 0% commission model on select trips.",
  image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80", // Driver image
};
// Add to src/data/homeData.js

export const testimonialsData = [
  {
    id: 1,
    name: "Tanvir Hossain",
    role: "Corporate Executive",
    comment: "Garibook makes intercity travel seamless. The driver was punctual, clean vehicle, and zero hidden costs.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 2,
    name: "Nusrat Jahan",
    role: "Frequent Traveler",
    comment: "Booked a microbus for a family trip to Sylhet. Excellent experience and very supportive customer care team.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 3,
    name: "Rafiqul Islam",
    role: "Business Owner",
    comment: "We rely on Garibook's corporate service for all guest transfers. Reliable and professional every single time.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
  },
];

export const blogsData = [
  {
    id: 1,
    title: "Top 10 Road Trip Routes Across Bangladesh",
    excerpt: "Discover breathtaking highway routes and essential safety tips for your next weekend getaway.",
    date: "Sep 15, 2026",
    category: "Travel Guide",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    title: "How to Choose the Right Vehicle for Group Trips",
    excerpt: "Comparing Sedans, SUVs, and Microbuses based on luggage capacity and passenger comfort.",
    date: "Sep 10, 2026",
    category: "Car Rental Tips",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    title: "Understanding Corporate Fleet Management Benefits",
    excerpt: "How automated ride tracking and single-invoice billing optimize corporate transit budgets.",
    date: "Sep 02, 2026",
    category: "Business",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=600&q=80",
  },
];

