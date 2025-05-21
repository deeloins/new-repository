import { figtree } from "@/app/font";
import React from "react";

const Quote = () => {
  return (
    <section className="relative w-full bg-[#090707]">
      {/* Mobile Layout (only shows below 768px) */}
      <div className="md:hidden w-[393px] h-[692px] mx-auto relative">
        {/* Left Quote Text - Mobile */}
        <div className="absolute left-[20px] top-[73px] w-[220px]">
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
          className={`absolute left-[52px] top-[421px] w-[321px] text-[24px] leading-[36px] text-[#444343] font-medium text-right font-poppins`}
        >
          For me, <span className="text-white">design</span> is more than{" "}
          <span className="text-white">aesthetics</span>; it's about{" "}
          <span className="text-white">creating solutions</span> that seamlessly
          integrate into <span className="text-white">people's</span> lives and
          make a <span className="text-white">positive impact</span>.
        </div>
      </div>

      {/* Original Desktop Layout (unchanged, shows at 768px and above) */}
      <div className="hidden md:block w-full max-w-[1382px] py-10 sm:py-16 lg:py-20 px-6 sm:px-8 lg:px-12 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 sm:gap-12 lg:gap-16">
          {/* Left Quote Text - Desktop (original) */}
          <div
            className={`text-[40px] sm:text-[60px] lg:text-[80px] leading-[1.2] font-black text-[#444343] ${figtree.className} max-w-[100%] md:max-w-[580px] space-y-2`}
          >
            <div className="whitespace-nowrap">GREAT DESIGN</div>
            <div>IS HARD,</div>
            <div className="text-white">I MAKE IT</div>
            <div className="text-white">EASY</div>
          </div>

          {/* Right Quote Text - Desktop (original) */}
          <div className="w-full md:w-[500px] text-left md:text-right text-[20px] sm:text-[30px] lg:text-[42px] leading-[1.5] text-[#444343] font-medium font-poppins">
            For me, <span className="text-white">design</span> is more than{" "}
            <span className="text-white">aesthetics</span>; it's about{" "}
            <span className="text-white">creating solutions</span> that
            seamlessly integrate into{" "}
            <span className="text-white">people's</span> lives and make a{" "}
            <span className="text-white">positive impact</span>.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quote;
