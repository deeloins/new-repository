import React from "react";
import Image from "next/image";
import { figtree } from "@/app/font";

const HeroSection = () => {
  return (
    <>
      {/* Desktop Version (unchanged) */}
      <section className="hidden md:block relative w-full h-[1024px] overflow-hidden">
        {/* Ellipse Shadow at Bottom */}
        <div className="absolute w-[calc(100%-240px)] h-[1200px] left-[148px] top-[-103px] bg-gradient-to-t from-[#090707] to-transparent z-[2]" />

        {/* Headshot */}
        <div className="absolute top-[10px] left-[218px] right-[162px] h-[1004px] z-[1]">
          <Image
            src="/assets/headshot.png"
            alt="Lawal Jimoh Headshot"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

        {/* About Text */}
        <h1
          className={`absolute w-[800px] text-[#F4F4F4] ${figtree.className} font-black text-[200px] leading-[220px] text-center top-[320px] left-[calc(50%-470px+25px)] z-[3]`}
        >
          PROJECTS
        </h1>

        {/* Subtitle */}
        <p className="absolute w-[1100px] capitalize text-[#444343] font-figtree font-black text-[60px] leading-[80px] top-[560px] left-[112px] z-[3]">
          CRAFTED DESIGNS THAT{" "}
          <span className="text-white">
            SEAMLESSLY INTEGRATES AND POSITIVELY IMPACTS
          </span>
        </p>

        {/* Reserved Space for Side Nav */}
        <div className="absolute w-[40px] h-full left-[16px] top-0 z-[0]" />
      </section>

      {/* Mobile Version (only appears on smaller screens) */}
      <section className="md:hidden relative w-full h-screen min-h-[600px] overflow-hidden">
        {/* Mobile-optimized background */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#090707] to-transparent z-[2]" />

        {/* Headshot (centered and scaled) */}
        <div className="absolute inset-0 z-[1]">
          <Image
            src="/assets/headshot.png"
            alt="Lawal Jimoh Headshot"
            layout="fill"
            objectFit="cover"
            priority
            className="object-top"
          />
        </div>

        {/* Scaled-down text */}
        <h1
          className={`absolute w-full px-4 text-[#F4F4F4] ${figtree.className} font-black text-[72px] leading-[1.1] text-center top-1/2 transform -translate-y-1/2 z-[3]`}
        >
          PROJECTS
        </h1>

        {/* Adjusted subtitle */}
        <p className="absolute w-full px-4 capitalize text-[#444343] font-figtree font-black text-[24px] leading-[1.3] bottom-[15%] left-0 text-center z-[3]">
          CRAFTED DESIGNS THAT{" "}
          <span className="text-white block">
            SEAMLESSLY INTEGRATES AND POSITIVELY IMPACTS
          </span>
        </p>
      </section>
    </>
  );
};

export default HeroSection;
