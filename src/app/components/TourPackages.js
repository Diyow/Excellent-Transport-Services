import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { getPackagesByCategory } from "../data/packagesData";
import { useCurrency, CURRENCIES } from "../context/CurrencyContext";

export default function TourPackages() {
  const { currency, convertAmount, formatCurrency } = useCurrency();
  const handleWhatsAppClick = (packageName) => {
    const phoneNumber = "62895421657803";
    const message = `Hi, I'm interested in booking the ${packageName} package. Can you help me with more information?`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  // Use real data and slice the first three highlighted ones
  const allPackages = getPackagesByCategory('full-day');

  // Only show the first 3 packages on the home page
  const highlightedPackages = allPackages.slice(0, 3);

  return (
    <section id="packages" className="py-16 sm:py-20 bg-gradient-to-b from-white to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-slate-600 mb-3 sm:mb-4"
          >
            Bali Tour Packages
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto px-4 sm:px-0"
          >
            Choose from our carefully curated selection of Bali experiences, designed to give you the perfect blend of adventure, culture, and relaxation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {highlightedPackages.map((pkg, idx) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group h-full flex flex-col"
            >
              <Link href={`/all-packages/${pkg.slug}`} className="block h-56 sm:h-64 w-full relative">
                <Image
                  src={pkg.image}
                  alt={pkg.name}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  priority={idx === 0}
                  className="group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                  <div className="flex items-center gap-2 text-white/90">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm sm:text-base">{pkg.duration}</span>
                  </div>
                </div>
              </Link>
              <div className="p-4 sm:p-6 flex-grow flex flex-col justify-between">
                <p className="text-slate-600 mb-4 text-sm sm:text-base">{pkg.description}</p>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 mt-auto">
                  <span className="text-xl sm:text-2xl font-bold text-slate-700">
                    From {formatCurrency(convertAmount(pkg.basePriceIDR || parseInt((pkg.price||'').replace(/[^0-9]/g,''))||0, CURRENCIES.IDR, currency), currency)}
                  </span>
                  <span className="text-xs text-gray-500 self-end mb-1">per package</span>
                  <Link 
                    href={`/all-packages/${pkg.slug}`} 
                    className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors duration-200 w-full sm:w-auto text-center"
                    aria-label={`View details for ${pkg.name}`}
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10 sm:mt-12">
          <Link 
            href="/all-packages" 
            className="inline-block bg-blue-500 text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-base sm:text-lg font-medium hover:bg-blue-700 transition-colors duration-200 shadow-md hover:shadow-lg"
            aria-label="View all tour packages"
          >
            See All Packages
          </Link>
        </div>
      </div>
    </section>
  );
}
