// Client directive removed to allow server-side usage in generateStaticParams

// Export the tour packages data to be used across components
export const tourPackages = [
  {
    name: "Ubud Tour",
    slug: "ubud-tour",
    image: "https://images.unsplash.com/photo-1583248369069-9d91f1640fe6",
    description: "Explore the cultural heart of Bali with visits to iconic temples, markets, and natural attractions.",
    category: "full-day",
    price: "Rp800,000",
    basePriceIDR: 800000,
    baseCurrency: 'IDR',
    duration: "Full Day",
    attractions: [
      "Monkey forest",
      "Ubud Market",
      "Ubud Palace",
      "Tirta Empul Holy Water",
      "Lunch at the Restaurant in Ubud",
      "Tegalalang Rice Terrace"
    ]
  },
  {
    name: "Kintamani Tour",
    slug: "kintamani-tour",
    image: "https://images.unsplash.com/photo-1623042392888-1f87e36a5b64?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Experience the breathtaking views of Mount Batur and Lake Batur in Kintamani.",
    category: "full-day",
    price: "Rp880,000",
    basePriceIDR: 880000,
    baseCurrency: 'IDR',
    duration: "Full Day",
    attractions: [
      "Enjoy coffee in the coffeeshop/cafe",
      "Batur Lake",
      "Tirta Empul",
      "Lunch at Restaurant in kintamani area"
    ],
    // status: "on hold"
  },
  {
    name: "Bedugul Tour",
    slug: "bedugul-tour",
    image: "https://images.unsplash.com/photo-1705364238367-707e71dbad2b?",
    description: "Visit the iconic temples and scenic spots in the highlands of Bali.",
    category: "full-day",
    price: "Rp960,000",
    basePriceIDR: 960000,
    baseCurrency: 'IDR',
    duration: "Full Day",
    attractions: [
      "Tanah Lot/Taman Ayun (optional, choose 1)",
      "Wanagiri Hidden Hill",
      "Ulundanu Beratan",
      "Jatiluwih (optional)",
      "Handara gate"
    ]
  },
  {
    name: "Lempuyang Tour",
    slug: "lempuyang-tour",
    image: "https://images.unsplash.com/photo-1671811805878-a587da969fa7?",
    description: "Visit the famous Gates of Heaven and other eastern Bali attractions.",
    category: "full-day",
    price: "Rp1,040,000",
    basePriceIDR: 1040000,
    baseCurrency: 'IDR',
    duration: "Full Day",
    attractions: [
      "Lempuyang temple (heaven gate)",
      "Lahangan Sweet",
      "Tirta Gangga"
    ]
  },
  {
    name: "Candidasa Tour",
    slug: "candidasa-tour",
    image: "https://images.unsplash.com/photo-1761565899742-0cb666489b51?",
    description: "Explore the eastern coast of Bali with its unique attractions and traditional villages.",
    category: "full-day",
    price: "Rp960,000",
    basePriceIDR: 960000,
    baseCurrency: 'IDR',
    duration: "Full Day",
    attractions: [
      "Taman Ujung",
      "Goa Lawah",
      "Blacksand Beach",
      "Tenganan Village"
    ]
  },
  {
    name: "Uluwatu Tour",
    slug: "uluwatu-tour",
    image: "https://images.unsplash.com/photo-1588625224664-a561c1f5f619?",
    description: "Experience the stunning clifftop temple and cultural performances in southern Bali.",
    category: "full-day",
    price: "Rp880,000",
    basePriceIDR: 880000,
    baseCurrency: 'IDR',
    duration: "Full Day",
    attractions: [
      "Uluwatu Temple",
      "Kecak Dance",
      "Bingin Beach",
      "Dinner at Jimbaran"
    ]
  },
  {
    name: "West Nusa Penida",
    slug: "west-nusa-penida",
    image: "https://images.unsplash.com/photo-1532253240322-146d5987f692?",
    description: "Explore the western part of Nusa Penida island with its stunning coastal views.",
    category: "nusa-penida",
    price: "Rp1,200,000",
    basePriceIDR: 1200000,
    baseCurrency: 'IDR',
    duration: "Full Day",
    attractions: [
      "Kelingking Beach",
      "Angel's Billabong",
      "Broken Beach",
      "Crystal Bay"
    ]
  },
  {
    name: "East Nusa Penida",
    slug: "east-nusa-penida",
    image: "https://images.unsplash.com/photo-1604430289272-0851a606105d?",
    description: "Discover the eastern attractions of Nusa Penida with its unique landscapes.",
    category: "nusa-penida",
    price: "Rp1,200,000",
    basePriceIDR: 1200000,
    baseCurrency: 'IDR',
    duration: "Full Day",
    attractions: [
      "Diamond Beach",
      "Atuh Beach",
      "Tree House",
      "Teletubbies Hill"
    ]
  },
  {
    name: "Snorkeling in West Nusa Penida",
    slug: "snorkeling-west-nusa-penida",
    image: "https://images.unsplash.com/photo-1682652481320-e1448d57824a?",
    description: "Experience the underwater beauty of Nusa Penida with guided snorkeling tours.",
    category: "nusa-penida",
    price: "Rp1,360,000",
    basePriceIDR: 1360000,
    baseCurrency: 'IDR',
    duration: "Full Day",
    attractions: [
      "Manta Point",
      "Gamat Bay",
      "Wall Bay",
      "Crystal Bay"
    ]
  },
  {
    name: "Combination West & East Nusa Penida",
    slug: "combination-nusa-penida",
    image: "https://images.unsplash.com/photo-1604500693431-647f9e76dafc?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "The ultimate Nusa Penida experience combining highlights from both east and west regions.",
    category: "nusa-penida",
    price: "Rp1,520,000",
    basePriceIDR: 1520000,
    baseCurrency: 'IDR',
    duration: "Full Day",
    attractions: [
      "Kelingking Beach",
      "Angel's Billabong",
      "Diamond Beach",
      "Atuh Beach"
    ]
  },
  {
    name: "City Tour",
    slug: "city-tour",
    image: "https://images.unsplash.com/photo-1657970757741-c95fdb7da4d9?",
    description: "Explore the trendy and popular areas of southern Bali.",
    category: "full-day",
    price: "Rp720,000",
    basePriceIDR: 720000,
    baseCurrency: 'IDR',
    duration: "Full Day",
    attractions: [
      "Seminyak",
      "Canggu"
    ]
  }
];

// Helper function to get a package by slug
export function getPackageBySlug(slug) {
  return tourPackages.find(pkg => pkg.slug === slug) || null;
}

// Helper function to get packages by category
export function getPackagesByCategory(category) {
  return category === 'all' 
    ? tourPackages 
    : tourPackages.filter(pkg => pkg.category === category);
}

// Helper function to get related packages (same category, excluding the current one)
export function getRelatedPackages(slug, limit = 3) {
  const currentPackage = getPackageBySlug(slug);
  if (!currentPackage) return [];
  
  return tourPackages
    .filter(pkg => pkg.slug !== slug && pkg.category === currentPackage.category)
    .slice(0, limit);
}
