"use client";

import React from "react";
import Image from "next/image";
import { brunoAce, figtree } from "../font";

interface ProficientCard {
  iconSrc: string;
  title: string;
  description: string;
}

const ProficientAreas = () => {
  const cards: ProficientCard[] = [
    {
      iconSrc: "/images/mobile.png",
      title: "Mobile App Design",
      description:
        "Crafting mobile applications that are user-friendly, visually appealing, and optimized for performance",
    },
    {
      iconSrc: "/images/devices.png",
      title: "Web App Design",
      description:
        "Building web applications that seamlessly blend form and function for a superior online experience",
    },
    {
      iconSrc: "/images/layer.png",
      title: "Product Strategy",
      description:
        "Charting the course for success with well-informed strategies that align product goals with market demands",
    },
    {
      iconSrc: "/images/pen-tool.png",
      title: "User Interface (UI)",
      description:
        "Creating appealing stand-out user interfaces that distinguish your product from competitors and catch the attention of users",
    },
    {
      iconSrc: "/images/3square.png",
      title: "User Experience (UX)",
      description:
        "Elevating user satisfaction through user-centric design, ensuring every interaction is meaningful and delightful",
    },
    {
      iconSrc: "/images/mouse-square.png",
      title: "Design Systems",
      description:
        "Creating cohesive design ecosystems that ensure consistency and brand integrity across all touchpoints",
    },
  ];

  return (
    <div className="w-full bg-[#090707] flex flex-col items-center py-10 px-4 sm:px-6 lg:px-8">
      {/* Section Titles - Adjusted for 1024px+ */}
      <div className="w-full max-w-[1200px] pl-[30px] md:pl-[60px] lg:pl-[80px] flex flex-col md:flex-row justify-between items-center md:items-start px-4 space-y-6 md:space-y-0">
        {/* Left Title */}
        <div className="flex flex-col items-start space-y-2">
          <h2
            className={`${figtree.className} italic text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] xl:text-[80px] leading-[1] text-white uppercase`}
          >
            ProficienT
          </h2>
          <div className="flex items-center space-x-4">
            <p
              className={`text-[16px] sm:text-[18px] md:text-[20px] leading-[1.2] text-[#A4A4A4] ${brunoAce.className}`}
            >
              SKILL NICHE
            </p>
            <div className="w-[40px] sm:w-[60px] md:w-[80px] border-t border-white" />
          </div>
        </div>

        {/* Right Title */}
        <div className="flex flex-col items-end space-y-2">
          <h2
            className={`text-white font-extrabold text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] xl:text-[80px] leading-[1] uppercase ${figtree.className}`}
          >
            AREAs
          </h2>
          <div className="flex items-center space-x-4">
            <div className="w-[40px] sm:w-[60px] md:w-[80px] border-t border-white" />
            <p
              className={`text-[16px] sm:text-[18px] md:text-[20px] leading-[1.2] text-[#A4A4A4] ${brunoAce.className}`}
            >
              SPECIALTIES
            </p>
          </div>
        </div>
      </div>

      {/* Cards Grid - Adjusted spacing */}
      <div className="w-full max-w-[1200px] pl-[30px] md:pl-[60px] lg:pl-[80px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 md:mt-12 lg:mt-16 px-4">
        {cards.map((card, index) => (
          <Card
            key={index}
            iconSrc={card.iconSrc}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

const Card = ({ iconSrc, title, description }: ProficientCard) => (
  <div className="relative w-full h-[280px] sm:h-[300px] flex flex-col justify-start items-start p-6 bg-[rgba(174,174,174,0.1)] backdrop-blur-[15px] rounded-[20px] border border-[#2C2C2C] hover:border-[#3a3a3a] transition-all duration-300">
    <Image
      src={iconSrc}
      alt={title}
      width={64}
      height={64}
      className="mb-4 w-14 h-14 sm:w-16 sm:h-16"
    />
    <h3 className="font-poppins font-bold text-[18px] sm:text-[20px] md:text-[22px] text-white leading-[1.2]">
      {title}
    </h3>
    <p className="font-poppins font-normal text-[14px] sm:text-[15px] md:text-[16px] text-[#A4A4A4] leading-[1.5] mt-2">
      {description}
    </p>
  </div>
);

export default ProficientAreas;
