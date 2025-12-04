"use client";
import Image from "next/image";
import React from "react";

const TestimonyGallery = () => {
  const images = [
    "/Testimony/Testimony 1.jpg",
    "/Testimony/Testimony 2.jpg",
    // "/Testimony/Testimony 3.jpg",
    "/Testimony/Testimony 4.jpg",
    "/Testimony/Testimony 5.jpg",
    "/Testimony/Testimony 6.jpg",
  ];
  const trackImages = [...images, ...images];

  return (
    // <div className="w-full overflow-hidden bg-blue-100 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
    <div className="w-full overflow-hidden bg-blue-100">
      <div className="flex w-max items-center gap-8 animate-infinite-scroll" style={{ willChange: "transform" }}>
        {trackImages.map((src, index) => (
          <div key={index} className="flex-none">
            <Image
              src={src}
              width={288}
              height={288}
              alt={`Testimony ${(index % images.length) + 1}`}
              className="rounded-lg object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonyGallery;