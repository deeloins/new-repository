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
    <div className="relative w-[400px] h-[353px] bg-[rgba(174,174,174,0.1)] backdrop-blur-[15px] rounded-[20px] p-[24px]">
      {/* Heading */}
      <h3
        className={`text-white text-[18px] ${figtree.className} leading-[22px] tracking-[-0.05em] mb-[24px]`}
      >
        EXPERIENCE
      </h3>

      {/* First Experience */}
      <div className="flex items-start gap-[32px] mb-[32px]">
        <p className="text-[#616161] text-[14px] leading-[21px] w-[90px]">
          2024 - Now
        </p>
        <div className="flex flex-col gap-[8px] w-[216px]">
          <p className="text-white text-[16px] leading-[24px]">
            Product Designer
          </p>
          <div className="flex items-center gap-[9px]">
            <div className="flex items-center gap-[2px]">
              <p className="text-[#616161] text-[14px] leading-[16px]">
                Stringify Consulting
              </p>
              <div className="w-[10px] h-[10px] rotate-45 bg-[#616161]" />
            </div>
            <div className="flex items-center justify-center px-[8px] py-[2px] bg-[#313131] rounded-[24px]">
              <p className="text-[#A4A4A4] text-[10px] leading-[15px]">
                Remote
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Second Experience */}
      <div className="flex items-start gap-[32px] mb-[32px]">
        <p className="text-[#616161] text-[14px] leading-[21px] w-[90px]">
          2023 - 2024
        </p>
        <div className="flex flex-col gap-[8px] w-[217px]">
          <p className="text-white text-[16px] leading-[24px]">
            Intern Product Designer
          </p>
          <div className="flex items-center gap-[9px]">
            <div className="flex items-center gap-[2px]">
              <p className="text-[#616161] text-[14px] leading-[16px]">
                Stringify Consulting
              </p>
              <div className="w-[10px] h-[10px] rotate-45 bg-[#616161]" />
            </div>
            <div className="flex items-center justify-center px-[8px] py-[2px] bg-[#313131] rounded-[24px]">
              <p className="text-[#A4A4A4] text-[10px] leading-[15px]">
                Hybrid
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-[247px] w-[352px] border-t border-[#343434]" />

      {/* Companies collaborated */}
      <section className="absolute top-[267px] left-1/2 transform -translate-x-1/2 flex flex-col items-center companyDiv">
        <span className="text-[#645d5d] text-[12px] leading-[12px]">
          Companies I&apos;ve collaborated with
        </span>
        <div className="flex gap-9 justify-center mt-3.5">
          <Image
            src={Lty}
            alt="logo"
            className="w-auto h-[40px] object-contain"
          />
          <Image
            src={kawts}
            alt="logo"
            className="w-[40px] h-[40px] object-contain"
          />
          <Image
            src={thenod}
            alt="logo"
            className="w-[40px] h-[40px] object-contain"
          />
          <Image
            src={tantalizer}
            alt="logo"
            className="w-[40px] h-[40px] object-contain"
          />
        </div>
      </section>
    </div>
  );
};

export default Experience;
