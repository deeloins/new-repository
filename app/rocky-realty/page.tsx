"use client";
import React from "react";
import Image from "next/image";
import { Bruno_Ace } from "next/font/google";
import Sidebar from "@/components/SliderBar";
import ToggleButton from "@/components/ToggleButton";
import NextProjectButton from "@/components/ArrowButton";
import VisitorPainPoints from "@/components/PainPoints";
import UsersAndGoalsHeading from "@/components/UsersGoalsHeading";
import TrustFoundationHeading from "@/components/TrustFoundation";
import ShowcasingSection from "@/components/ShowcasingSection";
import LearningOutcomesSection from "@/components/OutcomeSection";
import ProjectCard from "@/components/ProductCard";
import ThankYouFooter from "@/components/ThankYouCard";

const brunoAce = Bruno_Ace({ subsets: ["latin"], weight: "400" });

export default function RockRealty() {
  const [currentSection, setCurrentSection] = React.useState<
    "caseStudy" | "design"
  >("caseStudy");

  return (
    <div className="bg-black text-white min-h-screen relative overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Navigation Buttons */}
      <div className="absolute top-4 md:top-8 left-1/2 transform -translate-x-1/2 z-50">
        <ToggleButton
          caseStudyPath="/rocky-realty"
          designPath="/rock-realty-limited-design"
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
        />
      </div>
      <div className="absolute top-4 md:top-8 right-4 md:right-8 z-50">
        <NextProjectButton nextPath="./kwats-page-design" />
      </div>

      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] lg:h-[600px] flex flex-col items-center justify-center px-4">
        <div className="absolute top-[100px] md:top-[150px] lg:top-[188px] w-[200px] md:w-[250px] lg:w-[304px] h-[64px] md:h-[80px] lg:h-[96px] left-1/2 transform -translate-x-1/2">
          <Image
            src="/assets/image 2.png"
            alt="Rock Realty Logo"
            width={304}
            height={96}
            className="object-contain w-full h-full"
          />
        </div>
        <h1
          className={`${brunoAce.className} text-[16px] md:text-[20px] lg:text-[24px] leading-[20px] md:leading-[25px] lg:leading-[29px] tracking-[-0.05em] text-[#A4A4A4] mt-[60px] md:mt-[120px] lg:mt-[160px]`}
        >
          ROCK REALTY LIMITED - 2024
        </h1>
        <h2 className="text-white text-center font-poppins font-bold text-[28px] md:text-[60px] lg:text-[80px] leading-[36px] md:leading-[80px] lg:leading-[100px] mt-4 md:mt-8 lg:mt-10 px-4">
          Real Estate Website Redesign
        </h2>
      </section>

      {/* Main Image */}
      <section className="relative flex justify-center px-4 mt-8 md:mt-12">
        <div className="w-full max-w-[1096px]">
          <div className="relative w-full h-0 pb-[75.73%]">
            {" "}
            {/* 830/1096 = 75.73% aspect ratio */}
            <Image
              src="/assets/Rock Realty main.png"
              alt="Rock Realty Main"
              fill
              className="object-cover rounded-[16px] md:rounded-[32px]"
            />
          </div>
        </div>
      </section>

      {/* Client Info */}
      <section className="relative flex flex-col lg:flex-row justify-between items-start gap-8 max-w-[1024px] mx-auto mt-12 md:mt-24 px-4">
        <div className="w-full lg:w-[30%] font-poppins text-[14px] md:text-[18px] leading-[24px] md:leading-[30px] font-normal text-[#BDBDBD]">
          <p>
            <span className="text-white font-bold">Client:</span> Rock Realty
            Limited
          </p>
          <p className="mt-4 md:mt-6">
            <span className="text-white font-bold">My Role:</span> Lead Designer
          </p>
          <p className="mt-4 md:mt-6">
            <span className="text-white font-bold">Timeline:</span> 2 months
          </p>
          <p className="mt-4 md:mt-6 text-white font-bold">Responsibilities:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>User Research</li>
            <li>User flows & Wireframes</li>
            <li>Design Direction</li>
            <li>Storyboarding</li>
            <li>Visual Design</li>
          </ul>
        </div>
        <div className="w-full lg:w-[65%] text-[#BDBDBD] font-poppins text-[14px] md:text-[18px] leading-[24px] md:leading-[32px] font-normal">
          <p>
             <span className="text-white font-bold">Overview:</span>{" "}
            <span className="text-white">Rock Realty Limited</span> is a
            Nigerian real estate firm dedicated to democratizing property
            ownership and investment, focusing on accessibility for
            middle-income earners. They offer a full spectrum of services, from
            development and advisory to investment planning, built on principles
            of transparency, integrity, and client-centricity.
          </p>
          <p className="mt-4 md:mt-6">
            <span className="text-white">
              Recognizing the critical importance of a user-friendly digital
              presence in today's market,
            </span>{" "}
            Rock Realty invested in a website redesign. This redesign aimed to
            enhance user experience, build trust, and simplify the often complex
            process of navigating the Nigerian real estate market online. By
            creating a seamless and informative platform, Rock Realty empowers
            clients to make informed decisions and confidently pursue their real
            estate goals.
          </p>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="bg-[#1B1B1B] max-w-[1024px] mx-auto mt-12 md:mt-24 px-6 py-10 md:py-20">
        <h2 className="font-figtree font-black text-[32px] md:text-[48px] leading-[40px] md:leading-[58px] text-white mb-6">
          THE PROBLEM
        </h2>
        <p className="text-white text-[18px] md:text-[32px] leading-[28px] md:leading-[56px] font-poppins">
          <span className="font-bold">Lack of Clear Digital Presence:</span>{" "}
          Rock Realty faces the need for a "strong digital presence", a
          "user-friendly and informative online platform."
          <br className="hidden md:block" />
          <span className="font-bold block md:inline mt-2 md:mt-0">
            Need for Enhanced User Experience:
          </span>{" "}
          The current website wasn't well structured.
          <br className="hidden md:block" />
          <span className="font-bold block md:inline mt-2 md:mt-0">
            Building Trust:
          </span>{" "}
          The current website hasn't effectively established credibility.
          <br className="hidden md:block" />
          <span className="font-bold block md:inline mt-2 md:mt-0">
            Need to simplify
          </span>{" "}
          the complex process of navigating the Nigerian real estate market.
        </p>

        <h2 className="font-figtree font-black text-[28px] md:text-[40px] leading-[36px] md:leading-[48px] text-white mt-12 md:mt-24 mb-6">
          THE SOLUTION
        </h2>
        <p className="text-[#BDBDBD] text-[18px] md:text-[32px] leading-[28px] md:leading-[56px] font-poppins">
          To address these challenges, I redesigned Rock Realty's website to
          create a seamless and informative platform that simplifies the real
          estate process.
        </p>
      </section>

      {/* Company Logo */}
      {/* Section 5: Company Logo Image - FIXED VERSION */}
      <section className="relative w-full max-w-[996px] mx-auto mt-12 md:mt-24 px-4">
        <div className="relative w-full h-0 pb-[47%] rounded-[12px] md:rounded-[20px] overflow-hidden bg-[#3A4D2A]">
          <Image
            src="/assets/Company Logo.png"
            alt="Company Logo"
            fill
            className="object-contain p-4 md:p-8"
          />
        </div>
      </section>
      {/* UX Audit */}
      <section className="max-w-[1024px] mx-auto mt-12 md:mt-24 px-6">
        <h2 className="font-figtree font-black text-[36px] md:text-[60px] leading-[44px] md:leading-[72px] text-white">
          THE WEBSITE UX AUDIT AND RESEARCH PROCESS
        </h2>
      </section>

      <section className="max-w-[1024px] mx-auto mt-8 md:mt-12 px-6">
        <p className="text-[#BDBDBD] font-poppins text-[16px] md:text-[32px] leading-[24px] md:leading-[40px] font-normal">
          <span className="text-white">
            To kick off the Rock Realty redesign,
          </span>{" "}
          I began with a crucial meeting with their team.
          <br className="hidden md:block" />
          <span className="text-white block mt-4 md:mt-0">
            My process involved:
          </span>
        </p>

        {/* ✅ Moved the div OUTSIDE the paragraph */}
        <div className="space-y-4 pl-4">
          <div>
            <span className="text-white font-bold">
              A thorough review of the existing Rock Realty website:
            </span>{" "}
            To pinpoint areas needing improvement.
          </div>
          <div>
            <span className="text-white font-bold">
              Collaborative design thinking sessions:
            </span>{" "}
            For aligning our design strategy.
          </div>
          <div>
            <span className="text-white font-bold">
              Careful planning of the website's content structure:
            </span>{" "}
            Focusing on user-friendly experience.
          </div>
          <div>
            <span className="text-white font-bold">
              Rigorous testing of our design decisions:
            </span>{" "}
            To ensure smooth, intuitive experience.
          </div>
        </div>
      </section>

      {/* Additional Components */}
      <section className="pt-12 md:pt-20">
        <VisitorPainPoints />
      </section>

      <div className="max-w-[996px] mx-auto">
        <section className="relative w-full aspect-[996/469] mx-auto mt-12 md:mt-24 rounded-[12px] md:rounded-[20px] overflow-hidden">
          <Image
            src="/assets/Company Logo 2.png"
            alt="Company Logo"
            fill
            className="object-cover"
          />
        </section>
      </div>

      <UsersAndGoalsHeading />
      <TrustFoundationHeading />
      <ShowcasingSection />
      <LearningOutcomesSection />

      <ProjectCard
        title="Project Title"
        projectTitle="Courier Service App"
        description="for Delivery Service"
        imageSrc="/images/Scene 12 1 (2).png"
        nextPath="./kwats-page-design"
      />

      <ThankYouFooter />
    </div>
  );
}
