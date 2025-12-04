import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { highlightedActivities } from "../data/activitiesData";
import { useCurrency, CURRENCIES } from "../context/CurrencyContext";

export default function ExclusiveBaliExperiences() {
  const { currency, convertAmount, formatCurrency } = useCurrency();
  
  return (
    <section id="activities" className="py-20 bg-gradient-to-b from-white to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-slate-800 mb-4"
          >
            Exclusive Bali Experiences
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto"
          >
            Discover unforgettable activities that will make your Bali trip truly special.
          </motion.p>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlightedActivities.map((activity, index) => (
            <motion.div
              key={activity.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full group"
            >
              <Link href={`/all-activities/${activity.slug}`} className="block relative h-64 overflow-hidden">
                <Image
                  src={activity.image}
                  alt={activity.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Popular
                </div>
              </Link>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <Link href={`/all-activities/${activity.slug}`} className="block">
                  <h3 className="text-xl font-semibold text-slate-800 mb-2 hover:text-slate-600 transition-colors duration-200">{activity.name}</h3>
                </Link>
                <p className="text-slate-600">{activity.description}</p>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 mt-4">
                  <span className="text-xl sm:text-2xl font-bold text-slate-700">
                    From {formatCurrency(convertAmount(activity.price || 0, CURRENCIES.IDR, currency), currency)}
                  </span>
                  <span className="text-xs text-gray-500 self-end mb-1">per person</span>
                  <Link 
                    href={`/all-activities/${activity.slug}`} 
                    className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors duration-200 w-full sm:w-auto text-center"
                    aria-label={`View details for ${activity.name}`}
                  >
                    View Details
                  </Link>
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
            href="/all-activities" 
            className="inline-block bg-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-200"
          >
            See All Activities
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
