export const navItems = [
  { label: "Explore", href: "#essence" },
  { label: "Attractions", href: "#attractions" },
  { label: "Gallery", href: "#gallery" },
  { label: "Seasons", href: "#seasons" },
  { label: "Plan", href: "#plan" },
];

export const heroStats = [
  { value: "8", label: "Unions" },
  { value: "100+", label: "Bird Species" },
  { value: "∞", label: "Haor Beauty" },
];

export const essenceCards = [
  {
    title: "Endless Haor",
    description: "A vast inland sea that transforms with every season.",
  },
  {
    title: "Morning Mist",
    description: "Ethereal fog that rises at dawn above still waters.",
  },
  {
    title: "Golden Hours",
    description: "Spectacular sunrises and sunsets painted across the haor.",
  },
  {
    title: "Pure Solitude",
    description: "Untouched nature far from the noise of the modern world.",
  },
];

export const attractions = [
  {
    title: "Austagram Haor",
    label: "Natural Wonder",
    subtitle: "The Inland Sea",
    image: "/images/haor1.jpg",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Abdul Hamid Bridge",
    label: "Landmark",
    subtitle: "Engineering Meets Nature",
    image: "/images/ahbridge.jpg",
  },
  {
    title: "Haor Villages",
    label: "Cultural",
    subtitle: "Island Communities",
    image: "/images/haorvillage.jpg",
  },
  {
    title: "Sunrise on the Haor",
    label: "Experience",
    subtitle: "Golden Morning",
    image: "/images/sunset1.jpg",
  },
  {
    title: "Bird Watching",
    label: "Wildlife",
    subtitle: "Winter Arrivals",
    image:
      "https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=900&q=80",
    description:
      "Thousands of migratory birds arrive every winter, making Austagram a paradise for wildlife photographers.",
  },
];

export const experiences = [
  {
    title: "Haor Boat Journey",
    description: "Navigate endless waters on a traditional wooden kosha boat.",
    image: "/images/boatride.jpg",
  },
  {
    title: "Village Exploration",
    description: "Walk the raised earthen paths between floating communities.",
    image: "/images/villagefromtop.jpg",
  },
  {
    title: "Haor Cuisine",
    description: "Fresh fishes, seasonal vegetables, and handmade pithas.",
    image: "/images/fishes.jpg",
  },
  {
    title: "Sunrise Photography",
    description: "Capture the haor as it glows gold at first light.",
    image: "/images/haorroad.jpg",
  },
  {
    title: "Culture & Festivals",
    description: "Experience the vibrant soul of haor celebrations.",
    image:
      "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=900&q=80",
  },
];

export const seasons = [
  {
    id: "monsoon",
    label: "Monsoon",
    bangla: "বর্ষা",
    period: "June - September",
    title: "The Great Flood",
    description:
      "The haor becomes a vast inland sea. Villages turn to islands, boats become roads, and the landscape feels cinematic and immense.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
    tags: ["Boat festivals", "Dramatic skies", "Flooded landscapes", "Night fishing"],
  },
  {
    id: "winter",
    label: "Winter",
    bangla: "শীত",
    period: "October - March",
    title: "Migratory Calm",
    description:
      "Cool air, clear light, and thousands of winter birds create the best season for first-time visitors and photographers.",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1600&q=80",
    tags: ["Bird watching", "Clear skies", "Cool breeze", "Long golden hours"],
  },
  {
    id: "summer",
    label: "Summer",
    bangla: "গ্রীষ্ম",
    period: "April - May",
    title: "Amber Horizons",
    description:
      "The waters recede, textures emerge, and the evenings glow with warm tones across open fields and village edges.",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1600&q=80",
    tags: ["Fiery sunsets", "Open shorelines", "Dry pathways", "Village life"],
  },
  {
    id: "spring",
    label: "Spring",
    bangla: "বসন্ত",
    period: "February - March",
    title: "Bloom & Breeze",
    description:
      "A softer transition with floral wetlands, gentle winds, and a quieter rhythm ideal for slow travel.",
    image:
      "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=1600&q=80",
    tags: ["Lotus fields", "Soft weather", "Slow journeys", "Peaceful mornings"],
  },
];

export const galleryFilters = ["All", "Haor", "Boats", "Nature", "People", "Seasons"] as const;

export const galleryItems = [
  {
    title: "Aerial Wetlands",
    category: "Haor",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Still Boats",
    category: "Boats",
    image:
      "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Lotus Morning",
    category: "Nature",
    image:
      "https://images.unsplash.com/photo-1473773508845-188df298d2d1?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Bird Migration",
    category: "Nature",
    image:
      "https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=1200&q=80",
    className: "md:col-span-2",
  },
  {
    title: "Fishing Hands",
    category: "People",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Pink Waterscape",
    category: "Seasons",
    image:
      "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Sunset Drift",
    category: "Boats",
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80",
    className: "md:col-span-2",
  },
  {
    title: "Island Village",
    category: "People",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Sail Reflection",
    category: "Boats",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Quiet Water",
    category: "Haor",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "River Mosaic",
    category: "Haor",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    className: "md:col-span-2",
  },
];

export const visitCards = [
  {
    title: "Best Time",
    badge: "Oct - Mar",
    description:
      "Autumn and winter offer mild weather, abundant migratory birds, and the clearest skies for photography.",
  },
  {
    title: "How to Reach",
    badge: "4 - 5 hrs from Dhaka",
    description:
      "Travel via Kishoreganj by bus or private car. Local boats navigate the haor from the main ghat.",
  },
  {
    title: "Where to Stay",
    badge: "Eco Guesthouses",
    description:
      "Local guesthouses and small eco-lodges offer authentic haor-side stays with traditional hospitality.",
  },
  {
    title: "What to Eat",
    badge: "Fresh Haor Fish",
    description:
      "Freshly caught hilsa, traditional pithas, mustard fish curry, and seasonal haor vegetables.",
  },
  {
    title: "Travel Tips",
    badge: "Know Before You Go",
    description:
      "Carry waterproof gear in monsoon, carry cash for remote areas, and respect local traditions.",
  },
];

export const unions = [
  "Deoghar",
  "Kastul",
  "Austagram Sadar",
  "Bangalpara",
  "Kalma",
  "Adampur",
  "Khayerpur-Abdullapur",
  "Purba Austagram",
];
