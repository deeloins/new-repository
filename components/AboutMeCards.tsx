import React from "react";
import Image from "next/image";
import { Slider } from "@/app/about-me/page";
import Experience from "./Experience";
import EducationCard from "./EducationCard";
import ToolStackPage from "@/app/tools-stack/page";
import { figtree } from "@/app/font";

const AboutMeCards = () => {
  return (
    <section className="relative w-full min-h-screen bg-transparent px-[5vw] pt-[10vh] flex flex-col lg:flex-row flex-wrap justify-center items-center gap-6">
      {/* Top Left Card */}
      <div className="absolute lg:top-0 lg:left-[56px] w-full max-w-[400px] h-auto lg:h-[336px] bg-[rgba(174,174,174,0.1)] backdrop-blur-[15px] rounded-[20px] p-6 md:p-4">
        <p className="text-white text-lg md:text-xl font-poppins leading-relaxed">
          As an exceptional product designer with three (3) years of experience,
          I thrive on merging creativity and functionality to achieve
          user-centric solutions.
        </p>

        {/* Social Icons */}
        <div className="absolute bottom-[24px] left-[24px] flex items-center gap-4">
          {[
            "/assets/Group 13.png",
            "/assets/Group 14.png",
            "/assets/Group 15.png",
          ].map((icon, i) => (
            <div
              key={i}
              className="w-10 h-10 rounded-full bg-[#191818] flex items-center justify-center"
            >
              <Image src={icon} alt={`social-${i}`} width={16} height={16} />
            </div>
          ))}
        </div>

        {/* Read CV Button */}
        <div className="absolute bottom-[24px] right-[24px] w-32 cursor-pointer h-10 rounded-full bg-gray-700 flex items-center justify-center">
          <span className="text-white text-lg font-poppins">Read CV</span>
        </div>
      </div>

      {/* Profile Image Card */}
      <div className="absolute lg:top-0 lg:left-[491px] w-full max-w-[400px] h-auto lg:h-[509px] rounded-[20px] bg-[radial-gradient(62.48%_62.48%_at_50%_50%,rgba(127,125,125,0)_0%,#191818_100%)] overflow-hidden">
        {/* Background Image */}
        <Image
          src="/assets/Lawal Jimoh.png"
          alt="Profile Visual"
          layout="fill"
          objectFit="contain"
        />

        {/* Text & Overlay Elements */}
        <div className="absolute left-[16px] top-[385px] w-[80px] h-[24px] bg-[rgba(48,48,48,0.6)] rounded-[8px_20px_20px_2px] flex items-center justify-center">
          <span className="text-white font-poppins text-[16px] leading-[12px]">
            Hello 👋🏻
          </span>
        </div>

        <div className="absolute left-[16px] top-[413px] w-[215px] h-[24px] bg-[rgba(48,48,48,0.6)] rounded-[20px] flex items-center justify-center">
          <span className="text-white font-poppins text-[16px] leading-[12px]">
            My name is Lawal Jimoh
          </span>
        </div>

        <div className="absolute left-[16px] top-[441px] w-[221px] h-[24px] bg-[rgba(48,48,48,0.6)] rounded-[20px] flex items-center justify-center">
          <span className="text-white font-poppins text-[16px] leading-[12px]">
            But you can call me LA 😉
          </span>
        </div>

        <div className="absolute left-[16px] top-[469px] w-[253px] h-[24px] bg-[rgba(48,48,48,0.6)] rounded-[2px_20px_20px_8px] flex items-center justify-center">
          <span className="text-white font-poppins text-[16px] leading-[12px]">
            Feel free to grab my{" "}
            <a
              href="mailto:strategy@stringifyts.com"
              className="underline cursor-pointer"
            >
              email
            </a>{" "}
            🤗
          </span>
        </div>
      </div>

      {/* Slider */}
      <div className="absolute lg:top-[541px] lg:left-[488px] w-full max-w-[400px]">
        <div className="w-full h-full">
          <Slider />
        </div>
      </div>

      {/* Bottom Left Card */}
      <div className="absolute lg:top-[368px] lg:left-[56px] w-full max-w-[400px] h-auto lg:h-[673px] bg-[rgba(174,174,174,0.1)] backdrop-blur-[15px] rounded-[20px] p-6">
        <h3
          className={`text-white text-lg ${figtree.className} font-medium mb-4`}
        >
          ABOUT ME
        </h3>
        <p className="text-white text-base leading-relaxed font-poppins">
          Product design is more than a career; it&apos;s the result of a lifelong
          passion for exploration. I started with building WordPress sites and
          blogging as a teen, I&apos;ve always been drawn to creating and
          problem-solving. Post-graduation, I tried data analytics because I
          felt my math skills would come in handy and then affiliate marketing
          drawn by its appeal. Though I found success in them, neither provided
          the meaningful impact I sought. Driven by a strong desire to create
          meaningful impact, I spent considerable time searching for the right
          fit. The turning point came with my mentor, Alex Oyebade, who
          suggested I investigate UX writing. This sparked a profound interest,
          leading me to discover the powerful potential of product design in
          solving complex user and business problems.
        </p>
      </div>

      {/* Experience & Education */}
      <div className="absolute lg:top-0 lg:left-[920px]">
        <Experience />
      </div>

      <EducationCard />

      {/* Tool Stack */}
      <div className="absolute lg:top-[750px] lg:right-[82px] w-full max-w-[400px]">
        <ToolStackPage />
      </div>
    </section>
  );
};

export default AboutMeCards;
