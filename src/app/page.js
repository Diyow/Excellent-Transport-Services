'use client'
import Hero from "./components/Hero";
import TourPackages from "./components/TourPackages";
import TestimonyGallery from "./components/TestimonyGallery";
import WhyChooseUs from "./components/WhyChooseUs";
import PopularDestinations from "./components/PopularDestinations";
import ExclusiveBaliExperiences from "./components/ExclusiveBaliExperiences";
import TransferServices from "./components/TransferServices";
import TravelTips from "./components/TravelTips";
import PhotoGallery from "./components/PhotoGallery";
import FAQ from "./components/FAQ";
import FastBoat from "./components/FastBoat";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-100 flex flex-col">
      <Hero />
      <TourPackages />
      <TestimonyGallery/>
      <WhyChooseUs />
      <FastBoat />
      <TransferServices />
      <ExclusiveBaliExperiences />
      <PopularDestinations />
      <TravelTips />
      {/* <PhotoGallery /> */}
      <FAQ />
    </div>
  );
}
