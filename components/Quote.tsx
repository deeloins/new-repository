import { figtree } from "@/app/font";
import React from "react";

const Quote = () => {
  return (
    <section className="relative w-full overflow-x-hidden">
      {/* Mobile Layout (below 768px) */}
      <div className="md:hidden w-full h-[692px] px-5 relative">
        {/* Left Quote Text - Mobile */}
        <div className="absolute left-5 top-[73px] w-[220px]">
          <div
            className={`text-[40px] leading-[48px] font-black text-[#444343] ${figtree.className}`}
          >
            <div>GREAT DESIGN</div>
            <div>IS HARD,</div>
            <div className="text-white">I MAKE IT</div>
            <div className="text-white">EASY</div>
          </div>
        </div>

        {/* Right Quote Text - Mobile */}
        <div
          className={`absolute left-[52px] top-[421px] w-[calc(100%-104px)] text-[24px] leading-[36px] text-[#444343] font-medium text-right font-poppins`}
        >
          For me, <span className="text-white">design</span> is more than{" "}
          <span className="text-white">aesthetics</span>; it&apos;s about{" "}
          <span className="text-white">creating solutions</span> that seamlessly
          integrate into <span className="text-white">people&apos;s</span> lives
          and make a <span className="text-white">positive impact</span>.
        </div>
      </div>

      {/* Tablet Layout (768px - 1023px) */}
      <div className="hidden md:block lg:hidden w-full py-16 px-8 mx-auto">
        <div className="flex justify-between items-start gap-8">
          {/* Left Quote Text - Tablet */}
          <div className={`max-w-[45%] ${figtree.className}`}>
            <div className="text-[48px] leading-[56px] font-black text-[#444343] whitespace-nowrap">
              GREAT DESIGN
            </div>
            <div className="text-[48px] leading-[56px] font-black text-[#444343]">
              IS HARD,
            </div>
            <div className="text-[48px] leading-[56px] font-black text-white">
              I MAKE IT
            </div>
            <div className="text-[48px] leading-[56px] font-black text-white">
              EASY
            </div>
          </div>

          {/* Right Quote Text - Tablet */}
          <div className="max-w-[45%] text-right text-[24px] leading-[36px] text-[#444343] font-medium font-poppins">
            For me, <span className="text-white">design</span> is more than{" "}
            <span className="text-white">aesthetics</span>; it&apos;s about{" "}
            <span className="text-white">creating solutions</span> that
            seamlessly integrate into{" "}
            <span className="text-white">people&apos;s</span> lives and make a{" "}
            <span className="text-white">positive impact</span>.
          </div>
        </div>
      </div>

      {/* Desktop Layout (1024px and above) with 1024px-specific adjustments */}
      <div className="hidden lg:block w-full py-20">
        <div className="max-w-[1382px] mx-auto px-12">
          <div className="flex justify-between items-start gap-8">
            {/* Left Quote Text - Desktop with 1024px adjustment */}
            <div className={`max-w-[580px] ${figtree.className}`}>
              <div className="lg:text-[60px] xl:text-[70px] 2xl:text-[80px] leading-[1.2] font-black text-[#444343] whitespace-nowrap">
                GREAT DESIGN
              </div>
              <div className="lg:text-[60px] xl:text-[70px] 2xl:text-[80px] leading-[1.2] font-black text-[#444343]">
                IS HARD,
              </div>
              <div className="lg:text-[60px] xl:text-[70px] 2xl:text-[80px] leading-[1.2] font-black text-white">
                I MAKE IT
              </div>
              <div className="lg:text-[60px] xl:text-[70px] 2xl:text-[80px] leading-[1.2] font-black text-white">
                EASY
              </div>
            </div>

            {/* Right Quote Text - Desktop with 1024px adjustment */}
            <div className="max-w-[500px] text-right lg:text-[26px] xl:text-[32px] 2xl:text-[42px] leading-[1.5] text-[#444343] font-medium font-poppins">
              For me, <span className="text-white">design</span> is more than{" "}
              <span className="text-white">aesthetics</span>; it&apos;s about{" "}
              <span className="text-white">creating solutions</span> that
              seamlessly integrate into{" "}
              <span className="text-white">people&apos;s</span> lives and make a{" "}
              <span className="text-white">positive impact</span>.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quote;
