"use client";
import React from "react";
import Image from "next/image";
import { Figtree, Poppins } from "next/font/google";

const figtree = Figtree({ subsets: ["latin"], weight: "900" });
const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export default function ShowcaseAndProductsSection() {
  return (
    <section className="w-full max-w-[1024px] mx-auto my-12 px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <div className="mb-8 sm:mb-10 text-center">
        <h2
          className={`${figtree.className} text-white text-[28px] sm:text-[36px] md:text-[48px] lg:text-[60px] leading-[1.2] uppercase`}
        >
          Showcasing products and services with relevant details
        </h2>
      </div>

      {/* Products and Services Information */}
      <div
        className={`${poppins.className} w-full max-w-[996px] mx-auto text-[#BDBDBD] text-[18px] sm:text-[22px] md:text-[28px] lg:text-[32px] leading-[1.7] text-center sm:text-left`}
      >
        <p>
          The Rock Realty products and services page was designed to deliver
          clear, concise information. We prioritized detailed property listings
          and service descriptions, ensuring users could easily understand
          offerings and make informed decisions. A user-friendly interface and
          intuitive navigation allowed for seamless exploration, enhancing
          accessibility and driving engagement.
        </p>
      </div>

      {/* Image Section - Responsive Layout */}
      <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-8 mt-10 sm:mt-12">
        {/* First Image */}
        <div className="w-full sm:w-[48%] bg-[#1B1B1B] rounded-[16px] overflow-hidden">
          <Image
            src="/assets/Frame 114.png"
            alt="Showcasing Image 1"
            width={608}
            height={906}
            className="object-cover w-full h-auto"
          />
        </div>

        {/* Second Image */}
        <div className="w-full sm:w-[48%] bg-[#1B1B1B] rounded-[16px] overflow-hidden">
          <Image
            src="/assets/Frame 115.png"
            alt="Showcasing Image 2"
            width={608}
            height={906}
            className="object-cover w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
