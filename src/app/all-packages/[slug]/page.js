'use client'

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { getPackageBySlug, getRelatedPackages } from '../../data/packagesData';
import { getTransportationByCategory, calculateAdjustedPrice } from '../../data/transportationData';
import { useCurrency, CURRENCIES } from '../../context/CurrencyContext';

export default function PackageDetail() {
  const params = useParams();
  const [packageData, setPackageData] = useState(null);
  const [relatedPackages, setRelatedPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTransportation, setSelectedTransportation] = useState('');
  const [adjustedPrice, setAdjustedPrice] = useState(0);
  const [transportationOptions, setTransportationOptions] = useState([]);
  const { currency, convertAmount, formatCurrency } = useCurrency();

  useEffect(() => {
    if (params.slug) {
      const foundPackage = getPackageBySlug(params.slug);
      setPackageData(foundPackage);
      
      if (foundPackage) {
        setRelatedPackages(getRelatedPackages(params.slug));
        setAdjustedPrice(Number(foundPackage.basePriceIDR || 0)); // Initialize with numeric base price (IDR)
        
        // Get transportation options
        setTransportationOptions(getTransportationByCategory('all'));
      }
      
      setLoading(false);
    }
  }, [params.slug]);

  // Update price when transportation selection changes
  useEffect(() => {
    if (packageData) {
      const newPrice = calculateAdjustedPrice(Number(packageData.basePriceIDR || 0), selectedTransportation);
      setAdjustedPrice(newPrice);
    }
  }, [selectedTransportation, packageData]);

  // Handle WhatsApp booking
  const handleBookNow = () => {
    if (!packageData) return;
    
    const phoneNumber = "62895421657803";
    const transportationInfo = selectedTransportation ? `with ${selectedTransportation} transportation` : "";
    const formattedTotal = formatCurrency(
      convertAmount(Number(adjustedPrice || 0), CURRENCIES.IDR, currency),
      currency
    );
    const message = `Hi, I'm interested in booking the ${packageData.name} package ${transportationInfo}. The total price is ${formattedTotal}. Can you help me with more information?`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-100">
        <div className="animate-pulse text-slate-700 text-xl">Loading...</div>
      </div>
    );
  }

  if (!packageData) {
    return (
      <div className="min-h-screen py-20 bg-gradient-to-br from-slate-50 to-blue-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-slate-800 mb-4">Package Not Found</h1>
          <p className="text-slate-600 mb-8">The tour package you&apos;re looking for doesn&apos;t exist.</p>
          <Link 
            href="/all-packages" 
            className="inline-block bg-blue-500 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors duration-200"
          >
            Browse All Packages
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 sm:py-20 bg-gradient-to-br from-slate-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-6 sm:mb-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link href="/" className="text-sm text-blue-500 hover:text-blue-900">
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-3 h-3 text-blue-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <Link href="/all-packages" className="text-sm text-blue-500 hover:text-blue-900 ml-1 md:ml-2">
                    All Packages
                  </Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg className="w-3 h-3 text-blue-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <span className="text-sm text-blue-400 ml-1 md:ml-2">{packageData.name}</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>

        {/* Package Hero Section */}
        <div className="relative rounded-3xl overflow-hidden mb-10 sm:mb-16 shadow-xl">
          <div className="relative h-64 sm:h-96 w-full">
            <Image
              src={packageData.image}
              alt={packageData.name}
              fill
              priority
              style={{ objectFit: "cover" }}
              className="group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:scale-110 transition-transform duration-500" />
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl sm:text-5xl font-bold text-white mb-2 sm:mb-4"
            >
              {packageData.name}
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap items-center gap-4 text-white"
            >
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{packageData.duration}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
                <span>
                  From {formatCurrency(
                    convertAmount(Number(packageData.basePriceIDR || 0), CURRENCIES.IDR, currency),
                    currency
                  )} per package
                </span>
              </div>
              
              {packageData.status === 'on hold' && (
                <span className="inline-block bg-yellow-500 text-white text-xs px-2 py-1 rounded">
                  On Hold
                </span>
              )}
            </motion.div>
          </div>
        </div>

        {/* Package Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-8"
            >
              <h2 className="text-2xl font-bold text-slate-800 mb-4">About This Tour</h2>
              <p className="text-slate-700 mb-6">{packageData.description}</p>
              
              {packageData.attractions && packageData.attractions.length > 0 && (
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">Tour Highlights</h3>
                  <ul className="space-y-2 text-slate-600">
                    {packageData.attractions.map((attraction, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-blue-400 mr-2 text-xl">•</span>
                        <span>{attraction}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-6 sm:p-8"
            >
              <h2 className="text-2xl font-bold text-slate-800 mb-4">What to Expect</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-slate-700 mb-2">Inclusions</h3>
                  <ul className="space-y-1 text-blue-500">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Private air-conditioned car</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>English-speaking driver</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Parking fees</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Mineral water</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-slate-700 mb-2">Exclusions</h3>
                  <ul className="space-y-1 text-blue-500">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-red-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span>Ticket fees</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 sticky top-8"
            >
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Book This Tour</h2>
              
              {/* Transportation Selection */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-slate-700 mb-3">Select Transportation</h3>
                <div className="space-y-3">
                  {transportationOptions.map((option) => (
                    <div 
                      key={option.name}
                      onClick={() => setSelectedTransportation(option.name)}
                      className={`flex items-center p-3 border rounded-lg cursor-pointer transition-colors ${selectedTransportation === option.name ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:bg-gray-50'}`}
                    >
                      <div className="relative h-12 w-12 rounded-md overflow-hidden mr-3">
                        <Image
                          src={option.image}
                          alt={option.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-medium text-slate-800">{option.name}</h4>
                        <p className="text-xs text-blue-400">{option.specs[0]}</p>
                      </div>
                      <div className="text-right">
                        {option.priceAdjustment > 0 ? (
                          <span className="text-xs text-slate-600">
                            +{formatCurrency(
                              convertAmount(option.priceAdjustment, CURRENCIES.IDR, currency),
                              currency
                            )}
                          </span>
                        ) : (
                          <span className="text-xs text-slate-600">Base price</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-2 text-right">
                  <button 
                    onClick={() => setSelectedTransportation('')}
                    className="text-xs text-blue-600 hover:text-blue-800"
                  >
                    Reset selection
                  </button>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-slate-700">Price</span>
                  <span className="text-2xl font-bold text-blue-500">
                    {formatCurrency(
                      convertAmount(Number(adjustedPrice || 0), CURRENCIES.IDR, currency),
                      currency
                    )}
                  </span>
                </div>
                {selectedTransportation && (
                  <p className="text-xs text-blue-400 text-right">
                    Includes {selectedTransportation} transportation
                  </p>
                )}
              </div>
              
              <button
                onClick={handleBookNow}
                disabled={packageData.status === 'on hold'}
                className={`w-full py-3 px-4 rounded-full font-medium text-white flex items-center justify-center gap-2 ${packageData.status === 'on hold' ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600 transition-colors duration-200'}`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                {packageData.status === 'on hold' ? 'Currently Unavailable' : 'Book via WhatsApp'}
              </button>
              
              {packageData.status === 'on hold' && (
                <p className="mt-3 text-sm text-center text-yellow-600">
                  This tour is temporarily unavailable. Please check back later or explore our other packages.
                </p>
              )}
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-slate-800 mb-3">Need Help?</h3>
                <p className="text-slate-600 text-sm mb-4">
                  Have questions about this tour? Contact us for more information.
                </p>
                <Link 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    const phoneNumber = "62895421657803";
                    const message = `Hi, I have a question about the ${packageData.name} package.`;
                    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                    window.open(whatsappUrl, '_blank');
                  }}
                  className="text-blue-500 hover:text-blue-800 text-sm flex items-center gap-1"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Ask a question
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Related Packages */}
        <div className="mt-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-6 sm:mb-8 text-center">You Might Also Like</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {relatedPackages
              .map((pkg, idx) => (
                <motion.div
                  key={pkg.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className={`bg-white rounded-2xl shadow-lg overflow-hidden group h-full flex flex-col ${pkg.status === 'on hold' ? 'opacity-70' : ''}`}
                >
                  <Link href={`/all-packages/${pkg.slug}`} className="block h-48 w-full relative">
                    <Image
                      src={pkg.image}
                      alt={pkg.name}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-lg font-bold text-white">{pkg.name}</h3>
                    </div>
                  </Link>
                  <div className="p-4 flex-grow flex flex-col justify-between">
                    <p className="text-slate-600 text-sm mb-4 line-clamp-2">{pkg.description}</p>
                    <div className="flex justify-between items-center mb-auto">
                      <span className="text-lg font-bold text-slate-700">
                        From {formatCurrency(
                          convertAmount(Number(pkg.basePriceIDR || 0), CURRENCIES.IDR, currency),
                          currency
                        )}
                      </span>
                      <Link 
                        href={`/all-packages/${pkg.slug}`} 
                        className="text-blue-500 hover:text-blue-800 text-sm font-medium"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
          
          {relatedPackages.length === 0 && (
            <div className="text-center py-8">
              <p className="text-teal-600">No related packages found.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );}
