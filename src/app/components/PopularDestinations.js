import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function PopularDestinations() {
  // Only including the highlighted destinations for the main page
  const destinations = [
    {
      name: "Ubud",
      image: "https://images.unsplash.com/photo-1583248369069-9d91f1640fe6",
      description: "Cultural heart of Bali, known for its traditional arts and natural beauty.",
      highlights: [
        "Yoga class",
        "Tegalalang Rice Terrace",
        "Ubud Palace",
        "Ubud Market",
        "Monkey Forest"
      ]
    },
    {
      name: "Uluwatu",
      image: "https://images.unsplash.com/photo-1588625224664-a561c1f5f619?",
      description: "Famous for its stunning cliff-top temple and world-class surf breaks.",
      highlights: [
        "Uluwatu Temple",
        "Kecak Dance",
        "Pandawa Beach",
        "Sunday Beach Club",
        "Bingin Beach"
      ]
    },
    {
      name: "Lahangan",
      image: "https://images.unsplash.com/photo-1671811805878-a587da969fa7?",
      description: "Home to some of Bali's most iconic temples and breathtaking views.",
      highlights: [
        "Lempuyang Temple",
        "Lahangan Sweet",
        "Tirta Gangga Temple"
      ]
    },
    {
      name: "Kintamani",
      image: "https://images.unsplash.com/photo-1623042392888-1f87e36a5b64?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Volcanic region with stunning mountain views and natural hot springs.",
      highlights: [
        "Pinggan Village",
        "Mount Batur",
        "Hot Spring",
        "Batur Lake",
        "The Most Beautiful Sunrise in the Mountains"
      ]
    }
  ];

  return (
    <section id="destinations" className="py-20 bg-white bg-gradient-to-b from-white to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-slate-800 mb-4"
          >
            Popular Destinations
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto"
          >
            Discover the most beautiful and iconic places in Bali that you shouldn&apos;t miss.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
                  {destination.name}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-slate-600 mb-4">{destination.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-slate-800">Highlights:</h4>
                  <ul className="list-disc list-inside text-slate-600">
                    {destination.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* See More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Link 
            href="/all-destinations" 
            className="inline-block bg-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-200"
          >
            See More Destinations
          </Link>
        </motion.div>

      </div>
    </section>
  );
}