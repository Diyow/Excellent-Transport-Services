'use client'

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { getActivityBySlug, getRelatedActivities, getActivityBasePriceIDR } from '../../data/activitiesData';
import { useCurrency, CURRENCIES } from '../../context/CurrencyContext';

export default function ActivityDetail() {
  const { currency, convertAmount, formatCurrency } = useCurrency();
  const [activityData, setActivityData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [relatedActivities, setRelatedActivities] = useState([]);
  const params = useParams();

  useEffect(() => {
    if (params.slug) {
      const activity = getActivityBySlug(params.slug);
      if (activity) {
        setActivityData(activity);
        setRelatedActivities(getRelatedActivities(params.slug, activity.category));
        setLoading(false);
      } else {
        setError(true);
        setLoading(false);
      }
    }
  }, [params.slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="animate-pulse text-slate-700 text-xl">Loading...</div>
      </div>
    );
  }

  if (error || !activityData) {
    return (
      <div className="min-h-screen py-20 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-slate-800 mb-4">Activity Not Found</h1>
          <p className="text-slate-600 mb-8">The activity you&apos;re looking for doesn&apos;t exist.</p>
          <Link 
            href="/all-activities"
            className="inline-block bg-slate-600 text-white px-6 py-3 rounded-full font-medium hover:bg-slate-700 transition-colors duration-200"
          >
            Back to All Activities
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 sm:py-20 bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link href="/" className="text-sm text-slate-700 hover:text-slate-900">
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <svg className="w-3 h-3 text-blue-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                </svg>
                <Link href="/all-activities" className="text-sm text-slate-700 hover:text-slate-900 ml-1 md:ml-2">
                  Activities
                </Link>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg className="w-3 h-3 text-blue-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                </svg>
                <span className="text-sm text-blue-500 ml-1 md:ml-2">{activityData.name}</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="relative rounded-3xl overflow-hidden shadow-xl h-96 sm:h-[500px] group">
          <Image
            src={activityData.image}
            alt={activityData.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:scale-105 transition-transform duration-700" />
          
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 text-white">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-5xl font-bold mb-4"
            >
              {activityData.name}
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex flex-wrap gap-4 items-center text-sm sm:text-base"
            >
              {activityData.duration && (
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span>{activityData.duration}</span>
                </div>
              )}
              {activityData.location && (
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <span>{activityData.location}</span>
                </div>
              )}
              {activityData.price != null && (
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span>
                    {(() => {
                      if (typeof activityData.price === 'number') {
                        return formatCurrency(convertAmount(activityData.price, CURRENCIES.IDR, currency), currency);
                      }
                      const baseIDR = getActivityBasePriceIDR(activityData);
                      const formatted = baseIDR != null ? formatCurrency(convertAmount(baseIDR, CURRENCIES.IDR, currency), currency) : activityData.price;
                      const note = activityData.price.replace(/IDR\s*[0-9.,]+\s*/i, '').trim();
                      return `${formatted}${note ? ` ${note}` : ''}`;
                    })()}
                  </span>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-8"
            >
              <h2 className="text-2xl font-bold text-slate-800 mb-4">About This Activity</h2>
              <p className="text-slate-700 mb-6">{activityData.longDescription || activityData.description}</p>
              
              {activityData.highlights && activityData.highlights.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">Highlights</h3>
                  <ul className="space-y-2 text-slate-700">
                    {activityData.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-500 mr-2 text-xl">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl shadow-lg p-6 sm:p-8"
            >
              <h2 className="text-2xl font-bold text-slate-800 mb-4">What to Expect</h2>
              
              {activityData.inclusions && activityData.inclusions.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-slate-700 mb-2">Inclusions</h3>
                  <ul className="space-y-1 text-slate-600">
                    {activityData.inclusions.map((item, index) => (
                      <li key={index} className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="bg-white rounded-2xl shadow-lg p-6 sticky top-24"
            >
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Book This Activity</h2>
              
              <div className="flex justify-between items-center mb-6 pb-6 border-b border-gray-200">
                <span className="text-slate-700">Price</span>
                <span className="text-2xl font-bold text-slate-800">
                  {(() => {
                    if (typeof activityData.price === 'number') {
                      return formatCurrency(convertAmount(activityData.price, CURRENCIES.IDR, currency), currency);
                    }
                    const baseIDR = getActivityBasePriceIDR(activityData);
                    const formatted = baseIDR != null ? formatCurrency(convertAmount(baseIDR, CURRENCIES.IDR, currency), currency) : activityData.price;
                    const note = activityData.price.replace(/IDR\s*[0-9.,]+\s*/i, '').trim();
                    return `${formatted}${note ? ` ${note}` : ''}`;
                  })()}
                </span>
              </div>
              
              <Link 
                href={`https://wa.me/62895421657803?text=Hi,%20I'm%20interested%20in%20booking%20the%20${encodeURIComponent(activityData.name)}%20activity.%20Could%20you%20provide%20more%20information?`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-green-500 text-white text-center py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-200 mb-6"
              >
                Book via WhatsApp
              </Link>
              
              <div className="text-center">
                <h3 className="text-lg font-semibold text-slate-800 mb-3">Need Help?</h3>
                <p className="text-slate-600 text-sm mb-4">
                  Have questions about this activity? Contact us for more information.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Related Activities */}
        {relatedActivities.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-6 sm:mb-8 text-center">You Might Also Like</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedActivities.map((activity, index) => (
                <motion.div
                  key={activity.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full group"
                >
                  <Link href={`/all-activities/${activity.slug}`} className="block relative h-48 overflow-hidden">
                    <Image
                      src={activity.image}
                      alt={activity.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                  <div className="p-6 flex-grow">
                    <Link href={`/all-activities/${activity.slug}`}>
                      <h3 className="text-lg font-semibold text-slate-800 mb-2 hover:text-slate-600 transition-colors duration-200">{activity.name}</h3>
                    </Link>
                    <p className="text-slate-600 text-sm mb-4 line-clamp-2">{activity.description}</p>
                    <Link 
                      href={`/all-activities/${activity.slug}`}
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                    >
                      View details →
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
