"use client";
import Image from "next/image";
import greyImage1 from "../images/recentCards (3).png";
import greyImage2 from "../images/recentCards (5).png";
import greyImage3 from "../images/recentCards (2).png";
import coloredImage1 from "../images/recentCards (4).png";
import coloredImage2 from "../images/recentCards (6).png";
import coloredImage3 from "../images/recentCards (1).png";
import "../styling/bits.css";
import { useRouter } from "next/navigation";

export default function RecentProjectSection() {
  const router = useRouter(); // Initialize the router

  // Function to handle button click
  const handleAllProjectsClick = () => {
    router.push("./projects");
  };
  return (
    <div className="relative pb-[200px]">
      <div className="text-7xl text-white mt-8 recentProjectHeading">
        <span className="font-bold">RECENT</span>{" "}
        <span className="italic">PROJECTS</span>
      </div>

      <section className="flex justify-center gap-2.5 align-middle subheader">
        <div className="textSubHead">CASE STUDIES</div>
        <div className="w-2xs h-0.5 flex justify-center mt-3 stroke"></div>
        <div className="textSubHead">LIVE PROJECTS</div>
        <div className="w-2xs h-0.5 flex justify-center mt-2.5 stroke"></div>
        <div className="textSubHead">DESIGN PROCESS</div>
      </section>

      <section className="flex gap-11 pl-17 pr-14 pt-11 justify-center recentProjects">
        <div className="relative w-64 h-64">
          <Image
            src={greyImage1}
            className="absolute inset-0 w-max h-[20rem] object-cover transition-opacity duration-300 hover:opacity-0"
            alt="Project 1"
          />
          <Image
            src={coloredImage1}
            className="absolute inset-0 w-max h-[20rem] object-cover opacity-0 transition-opacity duration-300 hover:opacity-100"
            alt="Colored Project 1"
          />
        </div>
        <div className="relative w-64 h-64">
          <Image
            src={greyImage2}
            className="absolute inset-0 w-max h-[20rem] object-cover transition-opacity duration-300 hover:opacity-0"
            alt="Project 2"
          />
          <Image
            src={coloredImage2}
            className="absolute inset-0 w-[30rem] h-[20rem] object-cover opacity-0 transition-opacity duration-300 hover:opacity-100"
            alt="Colored Project 2"
          />
        </div>
        <div className="relative w-64 h-64">
          <Image
            src={greyImage3}
            className="absolute inset-0 w-max h-[20rem] object-cover transition-opacity duration-300 hover:opacity-0"
            alt="Project 3"
          />
          <Image
            src={coloredImage3}
            className="absolute inset-0 w-[25rem] h-[20rem] object-cover opacity-0 transition-opacity duration-300 hover:opacity-100"
            alt="Colored Project 3"
          />
        </div>
      </section>

      <div className="absolute left-1/2 -translate-x-1/2 bottom-[55px] w-full max-w-[1272px] flex items-center justify-center">
        <div className="w-[400px] h-px bg-gray-500"></div>
        <div className="relative mx-8">
          <button
            onClick={handleAllProjectsClick} // Add onClick handler
            className="flex items-center justify-center px-10 py-5 bg-[#202020] rounded-[70px] transition-colors duration-300 hover:bg-[#2a2a2a] cursor-pointer" // Added cursor-pointer
            style={{
              width: "180px",
              height: "60px",
              boxShadow: "0px 0px 6px rgba(232, 172, 49, 0.4)",
              fontFamily: "Poppins, sans-serif",
              fontSize: "20px",
              lineHeight: "48px",
              fontWeight: 300,
              color: "#FFFFFF",
            }}
          >
            all projects
          </button>
        </div>
        <div className="w-[400px] h-px bg-gray-500"></div>
      </div>
    </div>
  );
}

export default RecentProjectSection;
