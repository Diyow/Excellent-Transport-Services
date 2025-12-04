import Image from "next/image";
import { motion } from "framer-motion";

export default function FastBoat() {
  const phoneNumber = "62895421657803";
  const message = "Halo, saya ingin informasi tiket fastboat.";

  const fastBoatPackages = [
    {
      name: "Bali ↔ Nusa Penida Fast Boat",
      slug: "fast-boat-nusa-penida",
      image:
        "https://images.unsplash.com/photo-1564092566747-4dd00afb59c8?",
      duration: "One-way",
      description:
        "Direct fast boat transfer between Bali and Nusa Penida. Multiple departures daily.",
      basePriceIDR: 350000,
    },
    {
      name: "Bali ↔ Nusa Lembongan Fast Boat",
      slug: "fast-boat-nusa-lembongan",
      image:
        "https://images.unsplash.com/photo-1619681216575-d6b3964fc278?",
      duration: "One-way",
      description:
        "Comfortable and safe transfer between Bali and Nusa Lembongan with free port pickup.",
      basePriceIDR: 450000,
    },
    {
      name: "Bali ↔ Gili Trawangan Fast Boat",
      slug: "fast-boat-gili-trawangan",
      image:
        "https://images.unsplash.com/photo-1579340888456-d50f716d20c2?",
      duration: "One-way",
      description:
        "Premium fast boat service to the Gilis with comfortable seating and safety equipment.",
      basePriceIDR: 800000,
    },
  ];

  const handleWhatsAppClick = (packageName) => {
    const phoneNumber = "62895421657803";
    const message = `Hi, I'm interested in booking the ${packageName} fast boat package. Can you help me with more information?`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="fast-boat" className="py-16 sm:py-20 bg-gradient-to-b from-white to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cover Image */}
        <div className="relative h-52 sm:h-72 lg:h-80 rounded-2xl overflow-hidden shadow-lg mb-10 sm:mb-16">
          <Image
            src="https://images.unsplash.com/photo-1588775729523-87896b63bcb1?"
            alt="Fast Boat Cover"
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="px-6 sm:px-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl font-bold text-white mb-3"
              >
                Fast Boat
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-base sm:text-lg text-white/90 max-w-2xl"
              >
                Get your fast boat tickets to Lembongan, Penida, Gili Trawangan, Gili Air, Lombok, etc.
              </motion.p>
              <a
                href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
                className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 mt-4 rounded-full shadow hover:bg-green-700 transition-colors duration-200"
              >
                More information whatsapp
              </a>
            </div>
          </div>
        </div>

        {/* Current detailed layout commented out for now */}
        {/**
         * Packages Grid (commented out per request)
         *
         * <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
         *   {fastBoatPackages.map((pkg, idx) => (
         *     <motion.div key={pkg.name}>...</motion.div>
         *   ))}
         * </div>
         */}
      </div>
    </section>
  );
}

