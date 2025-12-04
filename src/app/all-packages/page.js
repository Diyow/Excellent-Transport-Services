'use client'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { tourPackages, getPackagesByCategory } from '../data/packagesData';
import { useCurrency, CURRENCIES } from '../context/CurrencyContext';

export default function AllPackages() {
  const { currency, convertAmount, formatCurrency } = useCurrency();
  const [activeFilter, setActiveFilter] = useState('all');
  const [isScrolled, setIsScrolled] = useState(false);
  const [filteredPackages, setFilteredPackages] = useState(tourPackages);

  // Handle scroll for sticky filter bar on mobile
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update filtered packages when filter changes
  useEffect(() => {
    setFilteredPackages(getPackagesByCategory(activeFilter));
  }, [activeFilter]);

  return (
    <div className="min-h-screen py-12 sm:py-20 bg-gradient-to-br from-slate-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-4xl font-bold text-center text-slate-800 mb-3 sm:mb-4"
        >
          Our Bali Tour Packages
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-base sm:text-lg text-center text-slate-600 max-w-3xl mx-auto mb-8 sm:mb-12 px-4 sm:px-0"
        >
          Explore our full range of tour packages designed to showcase the best of Bali&apos;s culture, nature, and attractions.
        </motion.p>

        {/* Filter buttons - sticky on mobile */}
        <div
          className={`${isScrolled ? 'sticky top-0 z-10 py-3 bg-slate-50/90 backdrop-blur-sm shadow-md' : ''} 
          flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 transition-all duration-300 -mx-4 px-4 sm:mx-0 sm:px-0`}
        >
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 sm:px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${activeFilter === 'all' ? 'bg-blue-500 text-white' : 'bg-white text-slate-700 hover:bg-blue-50'}`}
            aria-label="Show all packages"
          >
            All Packages
          </button>
          <button
            onClick={() => setActiveFilter('full-day')}
            className={`px-4 sm:px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${activeFilter === 'full-day' ? 'bg-blue-500 text-white' : 'bg-white text-slate-700 hover:bg-blue-50'}`}
            aria-label="Show full day tours only"
          >
            Full Day Tours
          </button>
          <button
            onClick={() => setActiveFilter('nusa-penida')}
            className={`px-4 sm:px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${activeFilter === 'nusa-penida' ? 'bg-blue-500 text-white' : 'bg-white text-slate-700 hover:bg-blue-50'}`}
            aria-label="Show Nusa Penida tours only"
          >
            Nusa Penida Tours
          </button>
        </div>

        {/* Results count */}
        <div className="mb-6 text-center sm:text-left">
          <p className="text-sm text-blue-700">
            Showing <span className="font-semibold">{filteredPackages.length}</span> packages
          </p>
        </div>

        {/* Packages grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPackages.map((pkg, idx) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: Math.min(idx * 0.05, 0.5), duration: 0.5 }}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden group h-full flex flex-col ${pkg.status === 'on hold' ? 'opacity-70' : ''}`}
            >
              <Link href={`/all-packages/${pkg.slug}`} className="block h-52 sm:h-64 w-full relative">
                <Image
                  src={pkg.image}
                  alt={pkg.name}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                  {pkg.status === 'on hold' && (
                    <span className="inline-block bg-yellow-500 text-white text-xs px-2 py-1 rounded">
                      On Hold
                    </span>
                  )}
                </div>
              </Link>
              <div className="p-4 sm:p-6 flex-grow flex flex-col">
                <p className="text-slate-600 mb-4 text-sm sm:text-base">{pkg.description}</p>
                
                {/* Attractions preview */}
                {pkg.attractions && pkg.attractions.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-blue-400 mb-2">Highlights:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {pkg.attractions.slice(0, 3).map((attraction, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-blue-400 mr-2">•</span>
                          <span>{attraction}</span>
                        </li>
                      ))}
                      {pkg.attractions.length > 3 && (
                        <li className="text-blue-400 text-xs italic">+{pkg.attractions.length - 3} more</li>
                      )}
                    </ul>
                  </div>
                )}
                
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0 mt-auto pt-3 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <span className="text-xl sm:text-2xl font-bold text-slate-700">
                      From {formatCurrency(convertAmount(pkg.basePriceIDR || parseInt((pkg.price||'').replace(/[^0-9]/g,''))||0, CURRENCIES.IDR, currency), currency)}
                    </span>
                    <span className="text-xs text-gray-500 self-end mb-1">per package</span>
                  </div>
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
        
        {/* No results message */}
        {filteredPackages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-slate-700">No packages found for the selected filter.</p>
            <button 
              onClick={() => setActiveFilter('all')} 
              className="mt-4 text-slate-600 underline hover:text-slate-800"
            >
              View all packages
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
