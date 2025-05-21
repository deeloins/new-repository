"use client";
import Image from "next/image";
import "../styling/bits.css";
import { useState, useEffect } from "react";

// Import images with better naming
const companyLogos = {
  lty: "/images/companiesLogo (1).png",
  kawts: "/images/companiesLogo (3).png",
  thenod: "/images/companiesLogo (2).png",
  tantalizer: "/images/companiesLogo (4).png",
};

const portfolioImages = Array.from({ length: 11 }, (_, i) => 
  `/images/mrLawal_(${i < 2 ? i + 1 : i + 2}).png` // Skips missing image 3
);

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % portfolioImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
      <Image
        src={portfolioImages[currentIndex]}
        alt={`Portfolio image ${currentIndex + 1}`}
        fill
        className="object-cover transition-opacity duration-500"
        priority
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  );
};

const Experience = () => {
  const experiences = [
    {
      period: "2024 - Now",
      role: "Product Designer",
      company: "Stringify Consulting",
      type: "Remote"
    },
    {
      period: "2023 - 2024",
      role: "Intern Product Designer",
      company: "Fiducia Data Service",
      type: "Hybrid"
    },
    {
      period: "2022 - 2023",
      role: "Intern Product Designer",
      company: "Handiworker Tech",
      type: "Remote"
    }
  ];

  return (
    <div className="w-full max-w-2xl p-6 border border-gray-700 rounded-xl bg-gray-900">
      <h2 className="text-xl font-semibold text-white mb-6">Experience</h2>
      
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="flex gap-6">
            <div className="text-gray-400 min-w-[100px]">{exp.period}</div>
            <div>
              <h3 className="text-lg font-medium text-white">{exp.role}</h3>
              <div className="flex items-center gap-2 text-gray-400">
                {exp.company}
                <span className="px-2 py-1 text-xs rounded-full bg-gray-800 text-gray-300">
                  {exp.type}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="my-6 border-t border-gray-700"></div>

      <div className="space-y-3">
        <p className="text-gray-400">Companies I've collaborated with</p>
        <div className="flex flex-wrap gap-4">
          {Object.entries(companyLogos).map(([name, src]) => (
            <div key={name} className="relative w-12 h-12">
              <Image
                src={src}
                alt={`${name} logo`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Education = () => {
  const educationItems = [
    {
      period: "2016 - 2019",
      degree: "B.Sc (Ed) Computer Science",
      institution: "University of Nigeria, Nsukka"
    },
    {
      period: "2024",
      degree: "Figma UI UX Design Advanced",
      institution: "Udemy (Daniel Walter Scott)"
    },
    {
      period: "2024",
      degree: "User Experience Design Fundamentals",
      institution: "Udemy (Joe Natoli)"
    },
    {
      period: "2024",
      degree: "Google UX Design",
      institution: "Coursera"
    }
  ];

  return (
    <div className="w-full max-w-2xl p-6 border border-gray-700 rounded-xl bg-gray-900">
      <h2 className="text-xl font-semibold text-white mb-6">EDUCATION/CERTIFICATION</h2>
      
      <div className="space-y-6">
        {educationItems.map((item, index) => (
          <div key={index} className="flex gap-6">
            <div className="text-gray-400 min-w-[60px]">{item.period}</div>
            <div>
              <h3 className="text-lg font-medium text-white">{item.degree}</h3>
              <p className="text-gray-400">{item.institution}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function AboutMe() {
  return (
    <main className="min-h-screen py-12 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <Slider />
          <div className="grid md:grid-cols-2 gap-6">
            <Experience />
            <Education />
          </div>
        </div>
      </div>
    </main>
  );
}
