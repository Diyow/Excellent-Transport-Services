'use client'

// Export the activities data to be used across components
export const activities = [
  {
    name: "Quadbike Adventure",
    slug: "quadbike-adventure",
    image: "https://images.unsplash.com/photo-1729730626277-8cd7a78d0dc3?",
    description: "Experience the thrill of riding quadbikes through Bali's scenic landscapes, from rice fields to jungle trails.",
    longDescription: "Embark on an exhilarating quadbike adventure through Bali's diverse terrains. Navigate through lush rice paddies, dense jungles, and traditional villages as you experience the island's natural beauty from a unique perspective. Our experienced guides will ensure your safety while leading you through the most scenic routes. This activity is perfect for adventure seekers and suitable for both beginners and experienced riders.",
    duration: "2-3 hours",
    price: 500000,
    location: "Ubud and surrounding areas",
    highlights: [
      "Ride through scenic rice fields and jungle paths",
      "Experience Bali's natural beauty on an off-road adventure",
      "Professional guides and safety equipment provided",
      "Suitable for beginners - no prior experience needed",
      "Photo stops at the most picturesque locations"
    ],
    inclusions: [
      "Hotel pickup and drop-off (selected areas)",
      "Professional guide",
      "Safety equipment",
      "Bottled water",
      "Insurance"
    ],
    category: "adventure",
    isHighlighted: true
  },
  {
    name: "Rafting",
    slug: "rafting",
    image: "https://images.unsplash.com/photo-1624646580989-9f059e25eb78?",
    description: "Navigate through exciting rapids while enjoying the lush jungle scenery of Bali's rivers.",
    longDescription: "Experience the thrill of white water rafting on Bali's most scenic rivers. Our professional guides will lead you through various levels of rapids, surrounded by pristine rainforest and dramatic gorges. This adventure combines excitement with natural beauty, making it one of Bali's most popular activities for adventure seekers.",
    duration: "5-6 hours (including transfers)",
    price: 450000,
    location: "Ayung River or Telaga Waja River",
    highlights: [
      "Navigate through class II and III rapids",
      "Enjoy stunning jungle and river gorge scenery",
      "Cool off with a swim in pristine river waters",
      "Suitable for beginners with good swimming ability",
      "Professional guides and top-quality equipment"
    ],
    inclusions: [
      "Hotel pickup and drop-off",
      "Professional river guide",
      "Safety equipment",
      "Shower facilities",
      "Buffet lunch",
      "Insurance"
    ],
    category: "water",
    isHighlighted: false
  },
  {
    name: "Snorkeling",
    slug: "snorkeling",
    image: "https://images.unsplash.com/photo-1542566728-d98f08439016?",
    description: "Discover Bali's vibrant underwater world with colorful coral reefs and tropical fish.",
    longDescription: "Explore the underwater paradise surrounding Bali with our guided snorkeling tours. Dive into crystal-clear waters to discover vibrant coral gardens and an abundance of tropical marine life. Our experienced guides will take you to the best snorkeling spots and ensure your safety while you enjoy this magical underwater experience.",
    duration: "4-5 hours",
    price: 400000,
    location: "Blue Lagoon, Padang Bai, or Nusa Penida",
    highlights: [
      "Explore vibrant coral reefs teeming with marine life",
      "Swim alongside colorful tropical fish",
      "Visit multiple snorkeling spots in one trip",
      "Suitable for all swimming abilities",
      "Professional guides and quality equipment provided"
    ],
    inclusions: [
      "Hotel pickup and drop-off (selected areas)",
      "Professional guide",
      "Snorkeling equipment",
      "Bottled water",
      "Light refreshments",
      "Insurance"
    ],
    category: "water",
    isHighlighted: false
  },
  {
    name: "Dolphin Watching",
    slug: "dolphin-watching",
    image: "https://images.unsplash.com/photo-1606634688902-e4ddfa878570?",
    description: "Witness playful dolphins in their natural habitat during a magical sunrise boat trip off Bali's northern coast.",
    longDescription: "Experience the magic of watching dolphins play in their natural habitat during a breathtaking sunrise boat trip off Bali's northern coast. Set out before dawn on a traditional outrigger boat to witness pods of dolphins jumping and swimming alongside your boat as the sun rises over the ocean. This unforgettable experience combines natural beauty with the joy of seeing these intelligent marine mammals in the wild.",
    duration: "3-4 hours (early morning)",
    price: 350000,
    location: "Lovina Beach, North Bali",
    highlights: [
      "Watch dolphins playing in their natural habitat",
      "Experience a stunning sunrise over the ocean",
      "Traditional outrigger boat experience",
      "Peaceful morning on the water",
      "Great photo opportunities"
    ],
    inclusions: [
      "Hotel pickup and drop-off (North Bali area)",
      "Experienced boat captain",
      "Traditional outrigger boat ride",
      "Light breakfast",
      "Bottled water"
    ],
    category: "nature",
    isHighlighted: true
  },
  {
    name: "Sunrise Jeep Adventure",
    slug: "sunrise-jeep-adventure",
    image: "https://images.unsplash.com/photo-1727335333476-8aa180978ff6?",
    description: "Explore Bali's rugged terrain and breathtaking viewpoints in a 4x4 jeep during the golden hours of sunrise.",
    longDescription: "Embark on an unforgettable journey through Bali's diverse landscapes in a rugged 4x4 jeep. This early morning adventure takes you off the beaten path to witness a spectacular sunrise from elevated viewpoints. Navigate through rural villages, coffee plantations, and volcanic terrain as the island awakens. Your experienced driver and guide will share insights about local culture and nature along the way.",
    duration: "6-7 hours",
    price: 650000,
    location: "Mount Batur area and surroundings",
    highlights: [
      "Witness a spectacular sunrise from prime viewpoints",
      "Off-road adventure through diverse terrains",
      "Visit to coffee plantation with tasting",
      "Explore hidden waterfalls and natural attractions",
      "Learn about local culture from experienced guides"
    ],
    inclusions: [
      "Hotel pickup and drop-off",
      "Professional driver and guide",
      "4x4 jeep transportation",
      "Breakfast",
      "Coffee and tea tasting",
      "Bottled water",
      "Insurance"
    ],
    category: "adventure",
    isHighlighted: true
  },
  {
    name: "Sunrise Trekking",
    slug: "sunrise-trekking",
    image: "https://images.unsplash.com/photo-1544644181-737b99761c09?",
    description: "Embark on an early morning trek to witness the spectacular sunrise from Bali's volcanic mountains.",
    longDescription: "Challenge yourself with an early morning trek up Mount Batur, one of Bali's sacred volcanoes, to witness a breathtaking sunrise from the summit. Begin your journey in the dark with headlamps lighting your way as you ascend through volcanic landscapes. Reach the top just in time to see the sun emerge over Mount Agung and Lake Batur, creating an unforgettable panorama. Your experienced guide will share stories about the volcano and prepare a simple breakfast cooked using the volcano's natural steam.",
    duration: "8-10 hours (including transfers)",
    price: 550000,
    location: "Mount Batur, Kintamani",
    highlights: [
      "Witness spectacular sunrise from a volcano summit",
      "Guided trek with experienced local guides",
      "Breakfast cooked with volcanic steam",
      "Panoramic views of mountains and lakes",
      "Opportunity to see active volcanic features"
    ],
    inclusions: [
      "Hotel pickup and drop-off",
      "Professional trekking guide",
      "Flashlight/headlamp",
      "Breakfast at the summit",
      "Bottled water",
      "Insurance"
    ],
    category: "adventure",
    isHighlighted: true
  },
  // {
  //   name: "Tubing",
  //   slug: "tubing",
  //   image: "https://images.unsplash.com/photo-1583321500900-82807e458f3c?auto=format&fit=crop&q=80",
  //   description: "Float down Bali's scenic rivers on inflatable tubes for a relaxing water adventure.",
  //   longDescription: "Experience a unique river adventure as you float down Bali's scenic waterways on an inflatable tube. This relaxing activity allows you to enjoy the lush jungle scenery and gentle rapids at a leisurely pace. Navigate through stunning river gorges surrounded by pristine rainforest, with occasional gentle rapids adding a touch of excitement to your journey.",
  //   duration: "3-4 hours",
  //   price: 21.88,
  //   location: "Siap River, Payangan",
  //   highlights: [
  //     "Relaxing float through scenic river gorges",
  //     "Enjoy pristine jungle surroundings",
  //     "Gentle rapids for mild excitement",
  //     "Suitable for all ages and swimming abilities",
  //     "Less strenuous alternative to rafting"
  //   ],
  //   inclusions: [
  //     "Hotel pickup and drop-off (selected areas)",
  //     "Professional river guide",
  //     "Tubing equipment",
  //     "Safety gear",
  //     "Bottled water",
  //     "Light refreshments",
  //     "Insurance"
  //   ],
  //   category: "water",
  //   isHighlighted: false
  // },
  {
    name: "Parasailing",
    slug: "parasailing",
    image: "https://images.unsplash.com/photo-1590068330654-7dae865968e0?",
    description: "Soar high above Bali's coastline for breathtaking aerial views of the island and ocean.",
    longDescription: "Experience the thrill of parasailing as you soar high above Bali's stunning coastline. Attached to a specially designed parachute and towed by a speedboat, you'll gradually ascend to heights of up to 100 meters, offering spectacular panoramic views of Bali's beaches, ocean, and landscape. This exhilarating activity combines the excitement of flight with the beauty of Bali's coastal scenery.",
    duration: "15-20 minutes (activity time)",
    price: 300000,
    location: "Tanjung Benoa Beach",
    highlights: [
      "Soar up to 100 meters above the ocean",
      "Panoramic views of Bali's coastline",
      "Exhilarating yet peaceful flying experience",
      "No experience necessary",
      "Professional operators with safety focus"
    ],
    inclusions: [
      "Safety briefing",
      "All parasailing equipment",
      "Professional operators",
      "Insurance"
    ],
    category: "water",
    isHighlighted: false
  },
  {
    name: "Watersport Activity",
    slug: "watersport-activity",
    image: "https://images.unsplash.com/photo-1521289594125-e8e32a214a2b?",
    description: "Enjoy an exciting watersport ride along Bali's beautiful beaches for a fun-filled water adventure.",
    longDescription: "Hold on tight for a thrilling ride by a speedboat along Bali's beautiful coastline. This fun-filled water activity is perfect for groups and families looking for laughs and excitement on the water. Bounce over waves and try to stay on as the boat makes sharp turns and maneuvers designed to add to the fun.",
    duration: "15-20 minutes (activity time)",
    price: 300000,
    location: "Tanjung Benoa Beach",
    highlights: [
      "Exciting high-speed ride along the coastline",
      "Fun group activity for friends and family",
      "No experience necessary",
      "Great laughs as riders try to stay on",
      "Refreshing ocean splash"
    ],
    inclusions: [
      "Safety briefing",
      "Life jacket",
      "Professional operators",
      "Insurance"
    ],
    category: "water",
    isHighlighted: true
  },
  {
    name: "Rolling Donut",
    slug: "rolling-donut",
    image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80",
    description: "Experience the thrill of spinning around on an inflatable donut tube pulled by a speedboat.",
    longDescription: "Hold tight and prepare to spin! The Rolling Donut is an exhilarating water activity where you sit on an inflatable donut-shaped tube that's pulled by a speedboat. Unlike the banana boat, the donut is designed to spin and roll as it's pulled across the water, creating a thrilling ride full of twists, turns, and splashes. This activity guarantees laughs and excitement for participants of all ages.",
    duration: "15-20 minutes (activity time)",
    price: 150000,
    location: "Tanjung Benoa Beach",
    highlights: [
      "Exciting spinning ride across the water",
      "More thrilling than traditional banana boat",
      "Fun activity for friends and families",
      "Guaranteed laughs and splashes",
      "No experience necessary"
    ],
    inclusions: [
      "Safety briefing",
      "Life jacket",
      "Donut tube equipment",
      "Professional operators",
      "Insurance"
    ],
    category: "water",
    isHighlighted: false
  },
  {
    name: "Cycling Tour",
    slug: "cycling-tour",
    image: "https://images.unsplash.com/photo-1594473527234-d4dc19039a61?",
    description: "Pedal through Bali's picturesque villages, rice fields, and countryside on a guided cycling tour.",
    longDescription: "Explore the real Bali on two wheels with our guided cycling tours through the island's most scenic landscapes. Pedal at a leisurely pace through traditional villages, verdant rice terraces, and peaceful countryside while learning about local culture and daily life from your knowledgeable guide. This eco-friendly activity offers an intimate way to experience Bali's natural beauty and rural charm away from the tourist crowds.",
    duration: "4-5 hours",
    price: 400000,
    location: "Ubud and surrounding villages",
    highlights: [
      "Cycle through stunning rice terraces and villages",
      "Visit traditional Balinese homes and temples",
      "Learn about local farming and crafts",
      "Mostly downhill routes suitable for all fitness levels",
      "Small group experience with personalized attention"
    ],
    inclusions: [
      "Hotel pickup and drop-off",
      "Professional cycling guide",
      "Mountain bike and helmet",
      "Bottled water",
      "Fresh fruit refreshments",
      "Traditional Balinese lunch",
      "Insurance"
    ],
    category: "adventure",
    isHighlighted: false
  },
  {
    name: "Buggy Adventure",
    slug: "buggy-adventure",
    image: "https://images.unsplash.com/photo-1564842831100-a4b91b8d7d4f?auto=format&fit=crop&q=80",
    description: "Drive off-road buggies through Bali's challenging terrains for an adrenaline-pumping experience.",
    longDescription: "Take control of your own off-road buggy for an adrenaline-pumping adventure through Bali's diverse terrains. Navigate through muddy tracks, jungle paths, rice fields, and river crossings in these powerful all-terrain vehicles. This self-drive experience offers the perfect combination of excitement and exploration as you discover hidden parts of Bali not accessible by regular vehicles.",
    duration: "2-3 hours",
    price: 750000,
    location: "Payangan area, north of Ubud",
    highlights: [
      "Self-drive experience in powerful off-road buggies",
      "Navigate through mud, jungle, and river crossings",
      "Explore off-the-beaten-path areas of Bali",
      "Suitable for beginners with basic driving knowledge",
      "Exciting alternative to traditional ATV riding"
    ],
    inclusions: [
      "Hotel pickup and drop-off (selected areas)",
      "Safety briefing and driving instruction",
      "Buggy rental with fuel",
      "Safety equipment (helmet, goggles, boots)",
      "Professional guide",
      "Shower facilities",
      "Bottled water",
      "Insurance"
    ],
    category: "adventure",
    isHighlighted: false
  },
  {
    name: "Bali Swing",
    slug: "bali-swing",
    image: "https://images.unsplash.com/photo-1554481924-0eecea3f21de?",
    description: "Swing high above the jungle canopy for incredible views and Instagram-worthy photos.",
    longDescription: "Experience the thrill of swinging high above Bali's lush jungle canopy on giant swings that have become iconic Instagram spots. Secured with a harness, you'll soar through the air with breathtaking views of rainforest, rivers, and distant mountains. Choose from different swing heights ranging from 10 to 78 meters above the ground, depending on your courage level. This activity combines adventure with stunning photo opportunities in a beautiful natural setting.",
    duration: "2-3 hours",
    price: 300000,
    location: "Ubud area",
    highlights: [
      "Swing over dramatic jungle valleys and rivers",
      "Multiple swing heights to choose from",
      "Incredible photo opportunities",
      "Additional activities like nests and ziplines available",
      "Professional safety systems and staff"
    ],
    inclusions: [
      "Entrance fee",
      "Swing activity with safety equipment",
      "Professional operators",
      "Access to photo spots",
      "Welcome drink",
      "Insurance"
    ],
    category: "adventure",
    isHighlighted: false
  },
  {
    name: "Bali Zoo Experience",
    slug: "bali-zoo-experience",
    image: "https://images.unsplash.com/photo-1756695449231-65214fd1c2e7?",
    description: "Get up close with exotic animals and participate in interactive wildlife experiences.",
    longDescription: "Discover the fascinating world of wildlife at Bali Zoo, where you can observe and interact with a variety of exotic animals in naturalistic habitats. This family-friendly attraction offers more than just animal viewing, with opportunities for close encounters, feeding sessions, and educational presentations. Learn about conservation efforts while enjoying a day surrounded by some of the world's most interesting creatures.",
    duration: "Full day",
    price: 350000,
    location: "Singapadu, near Ubud",
    highlights: [
      "See over 500 animals from 100 different species",
      "Participate in animal feeding sessions",
      "Watch educational wildlife presentations",
      "Enjoy breakfast with orangutans (optional extra)",
      "Night zoo experience available (optional extra)"
    ],
    inclusions: [
      "Entrance ticket",
      "Access to all regular exhibits and shows",
      "Map and guide",
      "Some animal food for feeding zones"
    ],
    category: "nature",
    isHighlighted: false
  },
  {
    name: "Bali Safari Adventure",
    slug: "bali-safari-adventure",
    image: "https://images.unsplash.com/photo-1513863525216-babdb36af01c?",
    description: "Embark on a safari journey to see hundreds of animals from Indonesia and beyond.",
    longDescription: "Experience an African-style safari right in Bali at the Bali Safari & Marine Park. Board specially designed safari buses that take you through large enclosures where animals roam freely in naturalistic habitats. See exotic species from Indonesia, India, and Africa including elephants, rhinos, zebras, lions, and tigers. Beyond the safari, enjoy cultural performances, animal shows, and a water park, making this a full day of entertainment for the whole family.",
    duration: "Full day",
    price: 570000,
    location: "Gianyar",
    highlights: [
      "Safari journey through open animal habitats",
      "See over 100 species including rare Indonesian wildlife",
      "Watch the Bali Agung cultural show",
      "Animal educational presentations and feedings",
      "Water park and amusement rides"
    ],
    inclusions: [
      "Entrance ticket",
      "Safari journey",
      "Access to animal exhibits and shows",
      "Water park access (depending on package)",
      "Park map and guide"
    ],
    category: "nature",
    isHighlighted: false
  },
  {
    name: "Night Safari",
    slug: "night-safari",
    image: "https://tamansafari.com/taman-safari-bali/wp-content/uploads/sites/7/2024/11/NS.jpg",
    description: "Experience the magic of wildlife after dark with a guided night safari adventure.",
    longDescription: "Discover the fascinating world of nocturnal animals on this unique night safari experience. As darkness falls, embark on a guided journey through specially lit habitats where you can observe animals during their most active hours. Learn about nocturnal behavior and adaptations as you spot creatures that are rarely seen during daylight hours. This educational adventure offers a completely different perspective on wildlife and their natural behaviors.",
    duration: "3-4 hours (evening)",
    price: 450000,
    location: "Bali Safari & Marine Park, Gianyar",
    highlights: [
      "Observe nocturnal animals in their active hours",
      "Guided tour with knowledgeable wildlife experts",
      "Specially designed lighting to view animals without disturbing them",
      "Learn about nocturnal adaptations and behaviors",
      "Smaller crowds than daytime visits"
    ],
    inclusions: [
      "Night safari entrance ticket",
      "Guided tour",
      "Safari bus transportation",
      "Welcome drink",
      "Dinner (depending on package)",
      "Souvenir photo (depending on package)"
    ],
    category: "nature",
    isHighlighted: false
  }
];

// Export highlighted activities for homepage
export const highlightedActivities = activities.filter(activity => activity.isHighlighted);

// Export activities by category
export const getActivitiesByCategory = (category) => {
  if (category === 'all') return activities;
  if (category === 'highlighted') return highlightedActivities;
  return activities.filter(activity => activity.category === category);
};

// Export function to get activity by slug
export const getActivityBySlug = (slug) => {
  return activities.find(activity => activity.slug === slug);
};

// Export function to get related activities
export const getRelatedActivities = (currentSlug, category, limit = 3) => {
  return activities
    .filter(activity => activity.category === category && activity.slug !== currentSlug)
    .slice(0, limit);
};

// Helper: extract numeric IDR amount from activity.price string
// Example: "IDR 500,000 per person" -> 500000
export const getActivityBasePriceIDR = (activity) => {
  if (!activity || !activity.price) return null;
  const match = activity.price.match(/IDR\s*([0-9.,]+)/i);
  if (!match) return null;
  const number = match[1].replace(/\./g, '').replace(/,/g, '');
  const value = parseInt(number, 10);
  return Number.isFinite(value) ? value : null;
};
