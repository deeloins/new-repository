// components/Experience.tsx
import React from "react";
import Image from "next/image";
import Lty from "../app/images/companiesLogo (1).png";
import kawts from "../app/images/companiesLogo (3).png";
import thenod from "../app/images/companiesLogo (2).png";
import tantalizer from "../app/images/companiesLogo (4).png";
import { figtree } from "@/app/font";

const Experience = () => {
  return (
    <div className="relative w-full max-w-[400px] h-auto min-h-[353px] bg-[rgba(174,174,174,0.1)] backdrop-blur-[15px] rounded-[20px] p-6 sm:p-[24px] mx-auto">
      {/* Heading */}
      <h3
        className={`text-white text-lg sm:text-[18px] ${figtree.className} leading-[22px] tracking-[-0.05em] mb-6 sm:mb-[24px]`}
      >
        EXPERIENCE
      </h3>
      {/* First Experience */}
      <div className="flex items-start gap-4 sm:gap-[32px] mb-6 sm:mb-[32px]">
        <p className="text-[#616161] text-sm sm:text-[14px] leading-[21px] w-[70px] sm:w-[90px]">
          2024 - Now
        </p>
        <div className="flex flex-col gap-2 sm:gap-[8px] w-full max-w-[216px]">
          <p className="text-white text-base sm:text-[16px] leading-[24px]">
            Product Designer
          </p>
          <div className="flex items-center gap-2 sm:gap-[9px] flex-wrap">
            <div className="flex items-center gap-1 sm:gap-[2px]">
              <p className="text-[#616161] text-sm sm:text-[14px] leading-[16px]">
                Stringify Consulting
              </p>
              <div className="w-[8px] sm:w-[10px] h-[8px] sm:h-[10px] rotate-45 bg-[#616161]" />
            </div>
            <div className="flex items-center justify-center px-2 sm:px-[8px] py-0.5 sm:py-[2px] bg-[#313131] rounded-[24px]">
              <p className="text-[#A4A4A4] text-xs sm:text-[10px] leading-[15px]">
                Remote
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Second Experience */}
      <div className="flex items-start gap-4 sm:gap-[32px] mb-6 sm:mb-[32px]">
        <p className="text-[#616161] text-sm sm:text-[14px] leading-[21px] w-[70px] sm:w-[90px]">
          2023 - 2024
        </p>
        <div className="flex flex-col gap-2 sm:gap-[8px] w-full max-w-[216px]">
          <p className="text-white text-base sm:text-[16px] leading-[24px]">
            Intern Product Designer
          </p>
          <div className="flex items-center gap-2 sm:gap-[9px] flex-wrap">
            <div className="flex items-center gap-1 sm:gap-[2px]">
              <p className="text-[#616161] text-sm sm:text-[14px] leading-[16px]">
                Stringify Consulting
              </p>
              <div className="w-[8px] sm:w-[10px] h-[8px] sm:h-[10px] rotate-45 bg-[#616161]" />
            </div>
            <div className="flex items-center justify-center px-2 sm:px-[8px] py-0.5 sm:py-[2px] bg-[#313131] rounded-[24px]">
              <p className="text-[#A4A4A4] text-xs sm:text-[10px] leading-[15px]">
                Hybrid
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Divider */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-[75%] sm:top-[247px] w-[90%] sm:w-[352px] border-t border-[#343434]" />
      {/* Companies collaborated */}
      <section className="absolute top-[80%] sm:top-[267px] left-1/2 transform -translate-x-1/2 w-full flex flex-col items-center companyDiv px-4">
        <span className="text-[#645d5d] text-xs sm:text-[12px] leading-[12px]">
          Companies I&apos;ve collaborated with
        </span>
        <div className="flex gap-4 sm:gap-9 justify-center mt-3 sm:mt-3.5 flex-wrap">
          <Image
            src={Lty}
            alt="logo"
            className="w-auto h-8 sm:h-[40px] object-contain"
          />
          <Image
            src={kawts}
            alt="logo"
            className="w-8 sm:w-[40px] h-8 sm:h-[40px] object-contain"
          />
          <Image
            src={thenod}
            alt="logo"
            className="w-8 sm:w-[40px] h-8 sm:h-[40px] object-contain"
          />
          <Image
            src={tantalizer}
            alt="logo"
            className="w-8 sm:w-[40px] h-8 sm:h-[40px] object-contain"
          />
        </div>
      </section>{" "}
    </div>
  );
};

export default Experience;
