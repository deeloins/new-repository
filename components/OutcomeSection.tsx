"use client";
import React from "react";
import { Figtree, Poppins } from "next/font/google";

const figtree = Figtree({ subsets: ["latin"], weight: "900" });
const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export default function LearningOutcomesSection() {
  return (
    <section className="w-full max-w-[1024px] mx-auto bg-[#1B1B1B] rounded-lg px-4 sm:px-6 md:px-8 py-10 sm:py-12 flex flex-col gap-8 sm:gap-10">
      {/* Outcome Title */}
      <div className="text-left">
        <h2
          className={`${figtree.className} text-white text-[28px] sm:text-[36px] md:text-[40px] lg:text-[48px] leading-[1.2] uppercase`}
        >
          The Outcome
        </h2>
      </div>

      {/* Intro Text */}
      <div className="text-center w-full max-w-[900px] mx-auto text-[#A2A2A2] text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] leading-[1.5]">
        <p>So these were my learnings after working on this project:</p>
      </div>

      {/* Learning Cards Section - Responsive Layout */}
      <div className="w-full max-w-[900px] mx-auto flex flex-col sm:flex-row justify-between gap-6">
        {/* First Learning Card */}
        <div className="w-full sm:w-[48%] bg-[#272727] rounded-[20px] p-[16px] sm:p-[20px] flex flex-col gap-4">
          <h3 className="text-[#E8AC31] text-[24px] sm:text-[28px] leading-[32px] font-bold">
            01
          </h3>
          <h4 className="text-white text-[20px] sm:text-[22px] leading-[30px] font-bold">
            Designing for Social Impact
          </h4>
          <p className="text-[#A2A2A2] text-[16px] sm:text-[18px] leading-[28px]">
            A deep dive into the healthcare sector revealed the urgent need for
            user-centered solutions in Nigeria and surrounding regions. This
            project channeled my passion for designing for social impact.
          </p>
        </div>

        {/* Second Learning Card */}
        <div className="w-full sm:w-[48%] bg-[#272727] rounded-[20px] p-[16px] sm:p-[20px] flex flex-col gap-4">
          <h3 className="text-[#E8AC31] text-[24px] sm:text-[28px] leading-[32px] font-bold">
            02
          </h3>
          <h4 className="text-white text-[20px] sm:text-[22px] leading-[30px] font-bold">
            Inclusive Interface Design
          </h4>
          <p className="text-[#A2A2A2] text-[16px] sm:text-[18px] leading-[28px]">
            Designing for a multi-generational audience required a nuanced
            approach to accessibility and usability. I gained valuable
            experience in creating inclusive interfaces.
          </p>
        </div>
      </div>
    </section>
  );
}
