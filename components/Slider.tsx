"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import img1 from "@/app/images/mrLawal_(1).png";
import img2 from "@/app/images/mrLawal_(2).png";
import img3 from "@/app/images/mrLawal_(4).png";
import img4 from "@/app/images/mrLawal_(5).png";
import img5 from "@/app/images/mrLawal_(6).png";
import img6 from "@/app/images/mrLawal_(7).png";
import img7 from "@/app/images/mrLawal_(8).png";
import img8 from "@/app/images/mrLawal_(9).png";
import img9 from "@/app/images/mrLawal_(10).png";
import img10 from "@/app/images/mrLawal_(11).png";

export default function Slider() {
  // Portfolio images with proper dimensions
  const images = [
    {
      src: img1,
      alt: "Lawal Jimoh portfolio image 1",
      width: 800,
      height: 1000,
    },
    {
      src: img2,
      alt: "Lawal Jimoh portfolio image 2",
      width: 800,
      height: 1000,
    },
    {
      src: img3,
      alt: "Lawal Jimoh portfolio image 4",
      width: 800,
      height: 1000,
    },
    {
      src: img4,
      alt: "Lawal Jimoh portfolio image 5",
      width: 800,
      height: 1000,
    },
    {
      src: img5,
      alt: "Lawal Jimoh portfolio image 6",
      width: 800,
      height: 1000,
    },
    {
      src: img6,
      alt: "Lawal Jimoh portfolio image 7",
      width: 800,
      height: 1000,
    },
    {
      src: img7,
      alt: "Lawal Jimoh portfolio image 8",
      width: 800,
      height: 1000,
    },
    {
      src: img8,
      alt: "Lawal Jimoh portfolio image 9",
      width: 800,
      height: 1000,
    },
    {
      src: img9,
      alt: "Lawal Jimoh portfolio image 10",
      width: 800,
      height: 1000,
    },
    {
      src: img10,
      alt: "Lawal Jimoh portfolio image 11",
      width: 800,
      height: 1000,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, images.length]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div
      className="relative w-full h-[500px] md:h-[700px] overflow-hidden rounded-lg shadow-xl"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <Image
        src={images[currentIndex].src}
        alt={images[currentIndex].alt}
        fill
        className="object-cover h-full w-full transition-opacity duration-500"
        style={{
          objectPosition: "center center", // Adjust as needed: 'top center', 'bottom center', etc
        }}
        priority
        quality={90}
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  );
}
