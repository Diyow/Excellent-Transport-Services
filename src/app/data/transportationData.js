'use client'

// Export the transportation data to be used across components
export const transportationOptions = [
  {
    name: "Toyota Avanza",
    image: "/transportation/toyota-avanza.avif",
    category: "medium",
    priceAdjustment: 0, // Base price, no adjustment
    specs: [
      "Max 4 persons with luggage for airport transfer",
      "Max 6 persons for tour"
    ]
  },
  {
    name: "Suzuki APV",
    image: "/transportation/suzuki-apv.avif",
    category: "medium",
    priceAdjustment: 80000, // Rp80,000 more than base price
    specs: [
      "Max 4 persons with luggage for airport transfer",
      "Max 6 persons for tour"
    ]
  },
  {
    name: "Toyota Innova",
    image: "/transportation/toyota-innova.avif",
    category: "medium",
    priceAdjustment: 160000, // Rp160,000 more than base price
    specs: [
      "Max 4 persons with luggage for airport transfer",
      "Max 6 persons for tour"
    ]
  },
  {
    name: "Isuzu ELF",
    image: "/transportation/isuzu-elf.jpg",
    category: "large",
    priceAdjustment: 320000, // Rp320,000 more than base price
    specs: [
      "Max 9 persons with luggage for airport transfer",
      "Max 12 persons for tour"
    ]
  },
  {
    name: "Toyota Hiace",
    image: "/transportation/toyota-hiace.jpg",
    category: "large",
    priceAdjustment: 400000, // Rp400,000 more than base price
    specs: [
      "Max 10 persons with luggage for airport transfer",
      "Max 15 persons for tour"
    ]
  }
];

// Helper function to get transportation options by category
export function getTransportationByCategory(category) {
  return category === 'all' 
    ? transportationOptions 
    : transportationOptions.filter(option => option.category === category);
}

// Helper function to calculate the adjusted price based on base price and transportation
export function calculateAdjustedPrice(basePriceIDR, transportationName) {
  // If no transportation selected, return the base price (number in IDR)
  if (!transportationName) return basePriceIDR;

  // Find the selected transportation option
  const selectedTransportation = transportationOptions.find(option => option.name === transportationName);

  // If not found, return the base price
  if (!selectedTransportation) return basePriceIDR;

  // Calculate the adjusted price in IDR (number)
  const adjustedPrice = Number(basePriceIDR) + Number(selectedTransportation.priceAdjustment || 0);

  return adjustedPrice;
}
