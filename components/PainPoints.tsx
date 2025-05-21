"use client";
import React from "react";

export default function VisitorPainPoints() {
  return (
    <section className="w-[90%] bg-[#1B1B1B] mx-auto py-12 px-4">
      <div className="max-w-[996px] mx-auto">
        {/* Section Title */}
        <h2 className="font-figtree font-bold text-2xl md:text-[32px] leading-[40px] text-white mb-6 md:mb-8">
          Website Visitor's Painpoint
        </h2>

        <div className="flex flex-col lg:flex-row gap-4">
          {/* User Stats Card - Left Side */}
          <div className="bg-[#272727] rounded-xl p-4 w-full lg:w-[280px] h-[300px] flex items-center justify-center shrink-0">
            <p className="font-poppins font-semibold text-xl md:text-2xl leading-[40px] text-[#BDBDBD] text-center">
              I had 10 users visit the website, 6 were new visitors
            </p>
          </div>

          {/* Pain Points Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 flex-1">
            {/* First Row */}
            <div className="bg-[#272727] rounded-xl p-4 relative h-[180px]">
              <div className="absolute top-3 left-3 bg-[#323232] border border-[#3C3C3C] rounded-sm px-2 py-1">
                <span className="font-poppins text-xs md:text-sm leading-6 text-white">
                  Home Page
                </span>
              </div>
              <p className="font-poppins font-normal text-sm md:text-base leading-6 text-[#BDBDBD] mt-10">
                The calls-to-action are vague, and I don't know where to start
                or what my next step should be.
              </p>
            </div>

            <div className="bg-[#272727] rounded-xl p-4 relative h-[180px]">
              <div className="absolute top-3 left-3 bg-[#323232] border border-[#3C3C3C] rounded-sm px-2 py-1">
                <span className="font-poppins text-xs md:text-sm leading-6 text-white">
                  Property Listings
                </span>
              </div>
              <p className="font-poppins font-normal text-sm md:text-base leading-6 text-[#BDBDBD] mt-10">
                Property listings lack detailed information, such as floor
                plans, virtual tours, or comprehensive descriptions.
              </p>
            </div>

            <div className="bg-[#272727] rounded-xl p-4 relative h-[180px]">
              <div className="absolute top-3 left-3 bg-[#323232] border border-[#3C3C3C] rounded-sm px-2 py-1">
                <span className="font-poppins text-xs md:text-sm leading-6 text-white">
                  General
                </span>
              </div>
              <p className="font-poppins font-normal text-sm md:text-base leading-6 text-[#BDBDBD] mt-10">
                The navigation is confusing and inconsistent, making it
                difficult to find the information I need.
              </p>
            </div>

            {/* Second Row */}
            <div className="bg-[#272727] rounded-xl p-4 relative h-[180px]">
              <div className="absolute top-3 left-3 bg-[#323232] border border-[#3C3C3C] rounded-sm px-2 py-1">
                <span className="font-poppins text-xs md:text-sm leading-6 text-white">
                  Home Page
                </span>
              </div>
              <p className="font-poppins font-normal text-sm md:text-base leading-6 text-[#BDBDBD] mt-10">
                The website lacks a modern and professional design, making me
                question the credibility of the company.
              </p>
            </div>

            <div className="bg-[#272727] rounded-xl p-4 relative h-[180px]">
              <div className="absolute top-3 left-3 bg-[#323232] border border-[#3C3C3C] rounded-sm px-2 py-1">
                <span className="font-poppins text-xs md:text-sm leading-6 text-white">
                  General
                </span>
              </div>
              <p className="font-poppins font-normal text-sm md:text-base leading-6 text-[#BDBDBD] mt-10">
                The website is not mobile-friendly, making it difficult to
                navigate on my phone.
              </p>
            </div>

            <div className="bg-[#272727] rounded-xl p-4 relative h-[180px]">
              <div className="absolute top-3 left-3 bg-[#323232] border border-[#3C3C3C] rounded-sm px-2 py-1">
                <span className="font-poppins text-xs md:text-sm leading-6 text-white">
                  Property Listings
                </span>
              </div>
              <p className="font-poppins font-normal text-sm md:text-base leading-6 text-[#BDBDBD] mt-10">
                It's difficult to filter or search for properties based on
                specific criteria, like location, price range, or property type.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
