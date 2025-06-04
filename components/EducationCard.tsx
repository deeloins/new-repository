import React from "react";

const EducationCard = () => {
  return (
    <div className="relative w-full max-w-[400px] h-auto min-h-[350px] bg-[rgba(174,174,174,0.1)] backdrop-blur-[15px] rounded-[20px] p-5 sm:p-[20px] text-white overflow-hidden mx-auto">
      <h3 className="text-base sm:text-[18px] font-brunoace leading-[22px] tracking-[-0.05em] mb-4 sm:mb-[16px]">
        EDUCATION/CERTIFICATIONS
      </h3>

      <div className="flex flex-col gap-4 sm:gap-[16px]">
        {/* 1st item */}
        <div className="flex gap-4 sm:gap-[24px]">
          <p className="text-[#616161] text-xs sm:text-[13px] leading-[18px] w-20 sm:w-[80px] shrink-0">
            2016 - 2019
          </p>
          <div className="flex flex-col gap-1 sm:gap-[4px]">
            <p className="text-sm sm:text-[15px] leading-[20px] break-words">
              B.Sc (Ed) Computer Science
            </p>
            <p className="text-[#616161] text-xs leading-[14px] break-words">
              University Name
            </p>
          </div>
        </div>

        {/* 2nd item */}
        <div className="flex gap-4 sm:gap-[24px]">
          <p className="text-[#616161] text-xs sm:text-[13px] leading-[18px] w-20 sm:w-[80px] shrink-0">
            2024
          </p>
          <div className="flex flex-col gap-1 sm:gap-[4px]">
            <p className="text-sm sm:text-[15px] leading-[20px] break-words">
              Figma UI UX Design Advanced
            </p>
            <p className="text-[#616161] text-xs leading-[14px] break-words">
              Udemy • Daniel Walter Scott
            </p>
          </div>
        </div>

        {/* 3rd item */}
        <div className="flex gap-4 sm:gap-[24px]">
          <p className="text-[#616161] text-xs sm:text-[13px] leading-[18px] w-20 sm:w-[80px] shrink-0">
            2024
          </p>
          <div className="flex flex-col gap-1 sm:gap-[4px]">
            <p className="text-sm sm:text-[15px] leading-[20px] break-words">
              User Experience Design Fundamentals
            </p>
            <p className="text-[#616161] text-xs leading-[14px] break-words">
              Udemy • Joe Natoli
            </p>
          </div>
        </div>

        {/* 4th item */}
        <div className="flex gap-4 sm:gap-[24px]">
          <p className="text-[#616161] text-xs sm:text-[13px] leading-[18px] w-20 sm:w-[80px] shrink-0">
            2022
          </p>
          <div className="flex flex-col gap-1 sm:gap-[4px]">
            <p className="text-sm sm:text-[15px] leading-[20px] break-words">
              Google UX Design
            </p>
            <p className="text-[#616161] text-xs leading-[14px] break-words">
              Google
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
