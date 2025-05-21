"use client";

import { brunoAce } from "@/app/font";
import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";

type ProjectCardDefaultProps = {
  title: string;
  description: string;
  highlightedText: string;
  image: string;
  hoverImage: string;
  year: string;
  logo: string;
  hoverLogo: string;
  defaultUpperRectBg: string;
  hoverUpperRectBg: string;
  hoverLowerTextColor: string;
  projectPath: string;
};

const ProjectCardDefault: React.FC<ProjectCardDefaultProps> = ({
  title,
  description,
  highlightedText,
  image,
  hoverImage,
  year,
  logo,
  hoverLogo,
  defaultUpperRectBg,
  hoverUpperRectBg,
  hoverLowerTextColor,
  projectPath,
}) => {
  const defaultLowerTextColor = "#ffffff";
  const [upperBg, setUpperBg] = useState(defaultUpperRectBg);
  const [currentImage, setCurrentImage] = useState(image);
  const [currentLogo, setCurrentLogo] = useState(logo);
  const [lowerTextColor, setLowerTextColor] = useState(defaultLowerTextColor);
  const router = useRouter();

  const handleCardClick = () => {
    router.push(projectPath);
  };

  return (
    <motion.div
      className="w-full max-w-[408px] h-auto border-[#2C2C2C] project-card rounded-[20px] p-[8px] flex flex-col"
      onMouseEnter={() => {
        setCurrentImage(hoverImage);
        setCurrentLogo(hoverLogo);
        setUpperBg(hoverUpperRectBg);
        setLowerTextColor(hoverLowerTextColor);
      }}
      onMouseLeave={() => {
        setCurrentImage(image);
        setCurrentLogo(logo);
        setUpperBg(defaultUpperRectBg);
        setLowerTextColor(defaultLowerTextColor);
      }}
      onClick={handleCardClick}
      style={{ cursor: "pointer" }} // Added cursor pointer here
    >
      {/* Parent container for rectangles with gap - EXACTLY AS YOU HAD IT */}
      <div className="flex flex-col gap-[4px] items-center w-full h-full">
        {/* Upper Rectangle - NO CHANGES */}
        <div
          className="w-full rounded-[12px] flex items-center px-4 justify-between h-[48px] border border-[#2C2C2C]"
          style={{ background: upperBg }}
        >
          <h2 className="font-poppins font-normal text-[16px] text-white">
            {title}
          </h2>
          <span
            className={`w-[43px] h-[17px] ${brunoAce.className} font-normal text-[#A4A4A4] text-[14px] leading-[100%] tracking-[-5%] flex items-center justify-center rounded`}
          >
            {year}
          </span>
        </div>

        {/* Gap between rectangles - NO CHANGES */}
        <div className="h-[4px]"></div>

        {/* Lower Inner Rectangle - NO CHANGES */}
        <div className="w-full aspect-[4/4.5] border border-[#2C2C2C] rounded-[8px] flex flex-col h-full relative">
          <img
            src={currentLogo}
            alt="logo"
            className="w-[32px] h-[32px] logo absolute top-4 left-4"
          />
          <img
            src={currentImage}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover rounded-[8px]"
          />
          <div className="text-center absolute bottom-4 left-0 right-0 px-4">
            <h3
              className="font-poppins font-bold text-[20px] leading-[24px] mb-[8px]"
              style={{ color: lowerTextColor }}
            >
              {description}
            </h3>
            <p
              className="font-poppins font-normal italic text-[20px] leading-[24px]"
              style={{ color: lowerTextColor }}
            >
              {highlightedText}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCardDefault;
