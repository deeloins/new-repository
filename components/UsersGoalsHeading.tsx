"use client";
import React from "react";
import { Figtree, Poppins } from "next/font/google";

const figtree = Figtree({ subsets: ["latin"], weight: "900" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600"] });

export default function UsersAndGoalsSection() {
  return (
    <section className="w-full max-w-[1000px] mx-auto py-12 px-4 sm:px-6">
      {/* Heading */}
      <div className="mb-12 sm:mb-16">
        <h2
          className={`${figtree.className} text-white text-[30px] sm:text-[40px] md:text-[48px] lg:text-[56px] leading-[1.1] tracking-tight whitespace-nowrap`}
        >
          DIFFERENT USERS AND THEIR GOALS
        </h2>
      </div>

      {/* User Rows - Consistent spacing */}
      <div className="space-y-10 sm:space-y-16">
        {/* The Aspiring Homeowner */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-start">
          <div className="w-full sm:w-[300px] flex-shrink-0">
            <h3
              className={`${poppins.className} font-semibold text-white text-[22px] sm:text-[24px] leading-[1.2] whitespace-nowrap`}
            >
              The Aspiring Homeowner
            </h3>
          </div>
          <div className="flex-1">
            <p
              className={`${poppins.className} font-normal text-[#BDBDBD] text-[18px] sm:text-[20px] leading-[1.6]`}
            >
              New to the real estate market, they seek a trusted partner like
              Rock Realty to guide them through the home buying process. They
              aim to find affordable properties, understand financing options,
              and gain confidence in their first major investment.
            </p>
          </div>
        </div>

        {/* The Savvy Investor */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-start">
          <div className="w-full sm:w-[300px] flex-shrink-0">
            <h3
              className={`${poppins.className} font-semibold text-white text-[22px] sm:text-[24px] leading-[1.2] whitespace-nowrap`}
            >
              The Savvy Investor
            </h3>
          </div>
          <div className="flex-1">
            <p
              className={`${poppins.className} font-normal text-[#BDBDBD] text-[18px] sm:text-[20px] leading-[1.6]`}
            >
              Experienced investors looking to expand their portfolio, they rely
              on Rock Realty to identify lucrative opportunities. Their goal is
              to access detailed property information, evaluate potential
              returns, and streamline the acquisition process for optimal
              investment growth.
            </p>
          </div>
        </div>

        {/* The Family Seeker */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-start">
          <div className="w-full sm:w-[300px] flex-shrink-0">
            <h3
              className={`${poppins.className} font-semibold text-white text-[22px] sm:text-[24px] leading-[1.2] whitespace-nowrap`}
            >
              The Family Seeker
            </h3>
          </div>
          <div className="flex-1">
            <p
              className={`${poppins.className} font-normal text-[#BDBDBD] text-[18px] sm:text-[20px] leading-[1.6]`}
            >
              Families looking for a better living situation. They want to find
              family-friendly properties that meet their needs and budget,
              access information about neighborhoods and amenities, and explore
              flexible payment plans to secure a comfortable and secure home.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
