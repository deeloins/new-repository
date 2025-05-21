"use client";

import React from "react";
import WorkTogether from "./LetsWorkTogetherCard";
import { brunoAce, figtree } from "@/app/font";

const GetConnected = () => {
  return (
    <section
      className="relative w-full flex flex-col items-center py-[40px] pt-[100px] md:pt-40 px-4 lg:pl-[40px] overflow-hidden"
      aria-label="Get connected section"
    >
      <div className="w-full max-w-[1383px] flex flex-col items-center space-y-6">
        {/* Titles */}
        <header className="flex flex-col items-center text-center space-y-6 w-full">
          {/* Main Title - Responsive scaling */}
          <div className="flex flex-col items-center w-full">
            <div className="flex flex-col md:flex-row items-center md:items-end justify-center space-y-2 md:space-y-0 md:space-x-4 lg:space-x-6">
              <h2
                className={`text-white ${figtree.className} italic text-[48px] sm:text-[64px] md:text-[80px] lg:text-[100px] xl:text-[125px] leading-[1.1] uppercase`}
              >
                GET
              </h2>
              <h2
                className={`text-white ${figtree.className} font-extrabold text-[48px] sm:text-[64px] md:text-[80px] lg:text-[100px] xl:text-[125px] leading-[1.1] uppercase tracking-[0.06em]`}
              >
                CONNECTED
              </h2>
            </div>
          </div>

          {/* Subtitles with Line - Responsive but layout preserved */}
          <div className="flex items-center justify-center w-full space-x-2 sm:space-x-4">
            <p
              className={`text-[12px] sm:text-[14px] md:text-[16px] lg:text-[20px] leading-[1.2] tracking-[-0.04em] text-[#A4A4A4] ${brunoAce.className} whitespace-nowrap`}
            >
              OPEN TO NEW OPPORTUNITIES
            </p>
            <div className="w-[40px] sm:w-[100px] md:w-[200px] lg:w-[300px] xl:w-[500px] border-t border-white" />
            <p
              className={`text-[12px] sm:text-[14px] md:text-[16px] lg:text-[20px] leading-[1.2] tracking-[-0.04em] text-[#A4A4A4] ${brunoAce.className} whitespace-nowrap`}
            >
              HIRE ME
            </p>
          </div>
        </header>

        {/* Main Card - Unchanged except for top margin */}
        <div className="mt-[30px] sm:mt-[40px] lg:mt-[60px] w-full flex justify-center">
          <WorkTogether />
        </div>
      </div>
    </section>
  );
};

export default GetConnected;
