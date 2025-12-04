'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { activities, getActivitiesByCategory } from '../data/activitiesData';
import { useCurrency, CURRENCIES } from '../context/CurrencyContext';

export default function AllActivities() {
  const [activeFilter, setActiveFilter] = useState('all');
  const { currency, convertAmount, formatCurrency } = useCurrency();

  // Filter categories
  const categories = [
    { id: 'all', name: 'All Activities' },
    { id: 'adventure', name: 'Adventure' },
    { id: 'water', name: 'Water Activities' },
    { id: 'nature', name: 'Nature & Wildlife' },
    { id: 'highlighted', name: 'Popular Activities' }
  ];

  // Filter activities based on active filter
  const filteredActivities = getActivitiesByCategory(activeFilter);
  
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
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl mt-12 font-bold text-slate-800 mb-4">Exclusive Bali Experiences</h1>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Discover the most exciting and memorable activities Bali has to offer. From thrilling adventures to serene nature experiences, there&apos;s something for everyone.
        </p>
      </motion.div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveFilter(category.id)}
            className={`px-6 py-2 rounded-full transition-colors duration-200 ${
              activeFilter === category.id
                ? 'bg-blue-600 text-white'
                : 'bg-white text-slate-600 hover:bg-slate-50'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Activities Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filteredActivities.map((activity) => (
          <motion.div
            key={activity.name}
            variants={itemVariants}
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
              {activity.isHighlighted && (
                <div className="absolute top-4 right-4 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Popular
                </div>
              )}
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
      </motion.div>
    </div>
  );
}
