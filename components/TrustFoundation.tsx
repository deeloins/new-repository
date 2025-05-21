"use client";
import React from "react";
import Image from "next/image";
import { Figtree, Poppins } from "next/font/google";

const figtree = Figtree({ subsets: ["latin"], weight: "900" });
const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export default function TrustFoundationSection() {
  return (
    <section className="w-full max-w-[900px] mx-auto my-16 px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <div className="mb-8 sm:mb-12">
        <h2
          className={`${figtree.className} text-white text-[24px] sm:text-[32px] md:text-[40px] lg:text-[56px] leading-[1.2] tracking-tight uppercase text-center sm:text-left`}
        >
          Building a Foundation of Trust: The Rock Realty Homepage Experience
        </h2>
      </div>

      {/* Paragraphs */}
      <div className="max-w-[900px] mx-auto space-y-6">
        <p
          className={`${poppins.className} text-[#BDBDBD] text-[16px] sm:text-[18px] md:text-[22px] lg:text-[28px] leading-[1.6] sm:leading-[1.7]`}
        >
          In a real estate market where trust is paramount, the Rock Realty
          homepage was designed to establish credibility and transparency from
          the first click. Recognizing the prevalence of fraud concerns, we
          prioritized authentic property imagery and clear contact pathways,
          ensuring visitors felt secure and connected.
        </p>

        <p
          className={`${poppins.className} text-[#BDBDBD] text-[16px] sm:text-[18px] md:text-[22px] lg:text-[28px] leading-[1.6] sm:leading-[1.7]`}
        >
          The homepage&apos;s UX writing was carefully crafted with a content
          strategist, portraying Rock Realty as a reliable and accessible
          partner. We aimed to simplify complex real estate concepts, providing
          clear value propositions and guiding users toward their investment
          goals.
        </p>

        <p
          className={`${poppins.className} text-[#BDBDBD] text-[16px] sm:text-[18px] md:text-[22px] lg:text-[28px] leading-[1.6] sm:leading-[1.7]`}
        >
          Through iterative design and stakeholder input, we created a welcoming
          and informative homepage. Clear calls-to-action encourage exploration
          of property listings and direct engagement with Rock Realty&apos;s team,
          laying the groundwork for a successful client relationship.
        </p>
      </div>

      {/* Screenshot */}
      <div className="relative w-full max-w-[900px] mx-auto mt-6 sm:mt-10 h-[500px]">
        <Image
          src="/assets/Frame 131.png"
          alt="Rock Realty homepage screenshot"
          fill
          className="object-contain"
          quality={100}
        />
      </div>
    </section>
  );
}
