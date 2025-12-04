'use client'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { destinations, getDestinationsByCategory } from '../data/destinationsData';

export default function AllDestinations() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredDestinations, setFilteredDestinations] = useState(destinations);

  // Update filtered destinations when filter changes
  useEffect(() => {
    setFilteredDestinations(getDestinationsByCategory(activeFilter));
  }, [activeFilter]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl mt-12 font-bold text-slate-800 mb-4">Explore Bali Destinations</h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Discover the beauty and diversity of Bali&apos;s most enchanting locations, from pristine beaches to cultural landmarks and natural wonders.
          </p>
        </motion.div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['all', 'highlight', 'beach', 'culture', 'nature'].map((filter) => (
            <motion.button
              key={filter}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                activeFilter === filter
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-slate-600 hover:bg-blue-50'
              }`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </motion.button>
          ))}
        </div>

        {/* Destinations Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredDestinations.map((destination) => (
            <motion.div
              key={destination.name}
              variants={itemVariants}
              className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${
                destination.category === 'highlight' ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              <Link href={`/all-destinations/${destination.name.toLowerCase().replace(/\s+/g, '-')}`}>
                <div className="relative h-64 cursor-pointer">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-1">{destination.name}</h3>
                    {destination.category === 'highlight' && (
                      <span className="inline-block bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                        Highlight
                      </span>
                    )}
                  </div>
                </div>
              </Link>
              <div className="p-6">
                <p className="text-slate-600 mb-4">{destination.description}</p>
                {destination.attractions.length > 0 ? (
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">Top Attractions:</h4>
                    <ul className="space-y-1">
                      {destination.attractions.slice(0, 3).map((attraction, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-5 h-5 text-teal-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-slate-600">{attraction.name}</span>
                        </li>
                      ))}
                      {destination.attractions.length > 3 && (
                        <li className="text-blue-500 font-medium mt-1">
                          +{destination.attractions.length - 3} more attractions
                        </li>
                      )}
                    </ul>
                  </div>
                ) : (
                  <p className="text-slate-500 italic">Coming soon...</p>
                )}
                <Link href={`/all-destinations/${destination.name.toLowerCase().replace(/\s+/g, '-')}`}>
                  <div className="mt-6 flex justify-end">
                    <button className="text-blue-600 font-medium hover:text-blue-800 transition-colors duration-200 flex items-center">
                      Explore More
                      <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Back to Home */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
        </motion.div>
      </div>
    </div>
  );
}