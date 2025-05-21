import React from "react";
import Image from "next/image";
import { figtree } from "@/app/font";

const AboutMeHero = () => {
  return (
    <>
      {/* Mobile Version (shows on screens < 768px) */}
      <section className="relative w-full h-[712px] overflow-hidden md:hidden">
        {/* Background container */}
        <div className="absolute inset-0 w-full h-full bg-[#090707]">
          {/* Gradient overlay */}
          <div className="absolute w-[150%] h-[600px] -left-[25px] -top-[11px] bg-gradient-to-b from-[#090707] via-[#090707] via-[58.11%] to-transparent" />

          {/* Headshot */}
          <div className="absolute w-[150%] h-[502px] left-[60px] -right-[197px] top-[45.5px]">
            <Image
              src="/assets/headshot.png"
              alt="Lawal Jimoh Headshot"
              fill
              className="object-cover object-left"
              priority
            />
          </div>

          {/* About Text */}
          <h1
            className={`absolute w-full px-4 left-0 top-[294px] text-center text-white ${figtree.className} font-bold text-[64px] leading-[77px]`}
          >
            ABOUT
          </h1>

          {/* Subtitle */}
          <p
            className={`absolute w-full px-4 left-0 top-[379px] text-[#444343] ${figtree.className} font-black text-[32px] leading-[38px]`}
          >
            FROM HOPING ON DIFFERENT SKILLS SET TO LOVING{" "}
            <span className="text-white">PRODUCT DESIGN</span>
          </p>

          {/* Bottom Lines */}
          <div className="absolute w-full h-[32px] left-0 top-[608px] flex justify-between px-4">
            <div className="w-[45%] h-px bg-[#9B9B9B]" />
            <div className="w-[45%] h-px bg-[#9B9B9B]" />
          </div>

          {/* Scroll Circle */}
          <div className="absolute w-[32px] h-[32px] left-1/2 -translate-x-1/2 top-[608px] border border-[#9B9B9B] rounded-full flex items-center justify-center">
            <Image
              src="/assets/Vector.svg"
              alt="Scroll Down"
              width={16}
              height={16}
              className="w-[16px] h-[16px]"
            />
          </div>
        </div>
      </section>

      {/* Tablet Version (768px-1024px) */}
      <section className="hidden md:block lg:hidden relative w-full h-[800px] overflow-hidden">
        <div className="absolute inset-0 bg-[#090707]">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#090707] via-[#090707] via-60% to-transparent" />

          {/* Headshot */}
          <div className="absolute inset-0 top-[10%] left-[10%] right-[10%] h-[60%]">
            <Image
              src="/assets/headshot.png"
              alt="Lawal Jimoh Headshot"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* About Text */}
          <h1
            className={`absolute top-1/3 left-1/2 -translate-x-1/2 text-white ${figtree.className} font-black text-[120px] leading-[140px] text-center`}
          >
            ABOUT
          </h1>

          {/* Subtitle */}
          <p
            className={`absolute bottom-[25%] left-1/2 -translate-x-1/2 w-[80%] text-[#444343] ${figtree.className} font-black text-[48px] leading-[56px] text-center`}
          >
            FROM HOPING ON DIFFERENT SKILLS SET TO LOVING{" "}
            <span className="text-white">PRODUCT DESIGN</span>
          </p>

          {/* Scroll Circle */}
          <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[48px] h-[48px] border-2 border-[#9B9B9B] rounded-full flex items-center justify-center">
            <Image
              src="/assets/Vector.svg"
              alt="Scroll Down"
              width={24}
              height={24}
            />
          </div>
        </div>
      </section>

      {/* Desktop Version (1024px+) - Original Unchanged */}
      <section className="hidden lg:block relative w-full h-[1024px] overflow-hidden">
        {/* Original desktop code unchanged */}
        <div className="absolute w-[calc(100%-240px)] h-[1200px] left-[148px] top-[-103px] bg-gradient-to-t from-[#090707] to-transparent z-[2]" />

        <div className="absolute top-[10px] left-[218px] right-[162px] h-[1004px] z-[1]">
          <Image
            src="/assets/headshot.png"
            alt="Lawal Jimoh Headshot"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

        <h1
          className={`absolute w-[854px] text-[#F4F4F4] ${figtree.className} font-black text-[250px] leading-[300px] text-center top-[341px] left-[calc(50%-427px+28px)] z-[3]`}
        >
          ABOUT
        </h1>

        <p
          className={`absolute w-[1272px] text-[#444343] ${figtree.className} font-black text-[80px] leading-[96px] top-[612px] left-[112px] z-[3]`}
        >
          FROM HOPING ON DIFFERENT SKILLS SET TO LOVING{" "}
          <span className="text-white">PRODUCT DESIGN</span>
        </p>

        <div className="absolute w-[1200px] border-t border-[#9B9B9B] left-[calc(50%-600px+1264px)] top-[968px] transform scale-x-[-1] z-[4]" />
        <div className="absolute w-[1200px] border-t border-[#9B9B9B] left-[calc(50%-600px-8px)] top-[968px] z-[4]" />

        <div className="absolute w-[48px] h-[48px] left-[calc(50%-24px+28px)] top-[944px] border-2 border-[#9B9B9B] rounded-full flex items-center justify-center z-[5]">
          <Image
            src="/assets/Vector.svg"
            alt="Scroll Down"
            width={32}
            height={32}
          />
        </div>

        <div className="absolute w-[40px] h-full left-[16px] top-0 z-[0]" />
      </section>
    </>
  );
};

export default AboutMeHero;
