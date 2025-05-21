"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Slider() {
  // Portfolio images with proper dimensions
  const images = [
    {
      src: "@/app/images/mrLawal_(1).png",
      alt: "Lawal Jimoh portfolio image 1",
      width: 800,
      height: 1000
    },
    {
      src: "@/app/images/mrLawal_(2).png", 
      alt: "Lawal Jimoh portfolio image 2",
      width: 800,
      height: 1000
    },
    {
      src: "@/app/images/mrLawal_(4).png",
      alt: "Lawal Jimoh portfolio image 4", 
      width: 800,
      height: 1000
    },
    {
      src: "@/app/images/mrLawal_(5).png",
      alt: "Lawal Jimoh portfolio image 5",
      width: 800,
      height: 1000
    },
    {
      src: "@/app/images/mrLawal_(6).png",
      alt: "Lawal Jimoh portfolio image 6",
      width: 800, 
      height: 1000
    },
    {
      src: "@/app/images/mrLawal_(7).png",
      alt: "Lawal Jimoh portfolio image 7",
      width: 800,
      height: 1000
    },
    {
      src: "@/app/images/mrLawal_(8).png",
      alt: "Lawal Jimoh portfolio image 8",
      width: 800,
      height: 1000
    },
    {
      src: "@/app/images/mrLawal_(9).png", 
      alt: "Lawal Jimoh portfolio image 9",
      width: 800,
      height: 1000
    },
    {
      src: "@/app/images/mrLawal_(10).png",
      alt: "Lawal Jimoh portfolio image 10",
      width: 800,
      height: 1000
    },
    {
      src: "@/app/images/mrLawal_(11).png",
      alt: "Lawal Jimoh portfolio image 11",
      width: 800,
      height: 1000
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, images.length]);

  const goToNext = () => {
    setCurrentIndex(prev => (prev + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex(prev => (prev - 1 + images.length) % images.length);
  };

  return (
    <div 
      className="relative w-full h-[500px] md:h-[700px] overflow-hidden rounded-lg shadow-xl"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Main Image */}
      <Image
        src={images[currentIndex].src}
        alt={images[currentIndex].alt}
        fill
        className="object-cover transition-opacity duration-500"
        priority
        quality={90}
        sizes="(max-width: 768px) 100vw, 50vw"
      />

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${currentIndex === index ? 'bg-white' : 'bg-white/50'}`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
