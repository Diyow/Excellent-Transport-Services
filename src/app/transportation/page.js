'use client'
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { getTransportationByCategory } from "@/app/data/transportationData";

export default function Transportation() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredVehicles, setFilteredVehicles] = useState([]);
  
  // Use the imported function to get transportation data
  useEffect(() => {
    const vehicles = getTransportationByCategory(selectedCategory);
    setFilteredVehicles(vehicles);
  }, [selectedCategory]);

  const categories = [
    { id: "all", name: "All Vehicles" },
    { id: "medium", name: "medium (4-7 seaters)" },
    { id: "large", name: "Large (10-14 seaters)" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-200 flex flex-col">
      
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80"
            alt="Transportation Hero"
            fill
            className="object-cover brightness-65"
            priority
          />
        </div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
          >
            Our Transportation Fleet
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-white max-w-2xl mx-auto"
          >
            Safe, comfortable, and reliable vehicles for your Bali journey
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Introduction */}
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-slate-800 mb-4"
            >
              Choose Your Perfect Ride
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-600 max-w-3xl mx-auto"
            >
              We offer a variety of well-maintained vehicles to suit your needs, whether you&apos;re traveling solo, with family, or in a large group. All our vehicles come with professional drivers, air conditioning, and complimentary bottled water.
            </motion.p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-5 py-2 rounded-full font-medium transition-colors duration-200 ${
                  selectedCategory === category.id
                    ? "bg-blue-600 text-white"
                    : "bg-white text-slate-600 hover:bg-blue-50"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Vehicles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVehicles.map((vehicle, index) => (
              <motion.div
                key={vehicle.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64">
                  <Image
                    src={vehicle.image}
                    alt={vehicle.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">{vehicle.name}</h3>
                  <ul className="space-y-2 mb-6">
                    {vehicle.specs.map((spec, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-slate-700">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Why Choose Our Transportation Service?</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-1">Professional Drivers</h3>
                    <p className="text-slate-600">Experienced, English-speaking drivers who know Bali inside out</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-1">Punctuality Guaranteed</h3>
                    <p className="text-slate-600">We value your time and ensure on-time pickups and drop-offs</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-1">Transparent Pricing</h3>
                    <p className="text-slate-600">No hidden fees or unexpected charges - pay what you agree to</p>
                  </div>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-slate-800 mb-6">How to Book</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">1</div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-slate-800 mb-1">Choose Your Vehicle</h4>
                    <p className="text-slate-600">Select the vehicle that best suits your group size and travel needs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">2</div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-slate-800 mb-1">Contact Us</h4>
                    <p className="text-slate-600">Reach out via phone, email, or WhatsApp with your travel details</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">3</div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-slate-800 mb-1">Confirm Your Booking</h4>
                    <p className="text-slate-600">We&apos;ll send you a confirmation with all the details of your transportation</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">4</div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-slate-800 mb-1">Enjoy Your Ride</h4>
                    <p className="text-slate-600">Your driver will pick you up at the agreed time and location</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex justify-center space-x-4">
                <a 
                  href="tel:+62895421657803" 
                  className="inline-flex items-center bg-teal-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-teal-700 transition-colors duration-200"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Us
                </a>
                <a 
                  href="https://wa.me/62895421657803" 
                  className="inline-flex items-center bg-green-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-green-600 transition-colors duration-200"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-slate-800 mb-4"
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-600"
            >
              Everything you need to know about our transportation services
            </motion.p>
          </div>

          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-md"
            >
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Do your rates include fuel and driver?</h3>
              <p className="text-slate-600">Yes, all our transportation rates include a professional driver, fuel, and vehicle insurance. There are no hidden costs.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl p-6 shadow-md"
            >
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Can I book a vehicle for multiple days?</h3>
              <p className="text-slate-600">Absolutely! We offer special rates for multi-day bookings. Please contact us for a customized quote.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}