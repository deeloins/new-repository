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
import { brunoAce, figtree } from "../font";

export default function RecentProjectsPage() {
  const router = useRouter();

  const projects = [
    {
      greyImage: greyImage1,
      coloredImage: coloredImage1,
      greyAlt: "MyQura Client Portal - Wireframe",
      coloredAlt: "MyQura Client Portal - Final Design",
      route: "/case-study",
    },
    {
      greyImage: greyImage2,
      coloredImage: coloredImage2,
      greyAlt: "MQC Professional Portal - Wireframe",
      coloredAlt: "MQC Professional Portal - Final Design",
      route: "/tantalizer",
    },
    {
      greyImage: greyImage3,
      coloredImage: coloredImage3,
      greyAlt: "Rock Realty Website - Wireframe",
      coloredAlt: "Rock Realty Website - Final Design",
      route: "/rocky-realty",
    },
  ];

  const handleAllProjectsClick = () => {
    router.push("/projects");
  };

  const handleProjectClick = (route: string): void => {
    router.push(route);
  };

  return (
    <div
      className={`relative pb-[100px] md:pb-[200px] px-4 lg:px-8 ${figtree.className}`}
    >
      {/* Title */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mt-6 md:mt-8 text-center">
        <span className="font-bold">RECENT</span>{" "}
        <span className="italic font-normal">PROJECTS</span>
      </h1>

      {/* Navigation */}
      <nav
        className={`flex justify-center gap-3 md:gap-4 align-middle my-6 md:my-8 ${brunoAce.className}`}
      >
        <div className="text-[#A4A4A4] text-base md:text-lg">CASE STUDIES</div>
        <div className="w-6 h-px bg-[#A4A4A4] my-auto"></div>
        <div className="text-[#A4A4A4] text-base md:text-lg">LIVE PROJECTS</div>
        <div className="w-6 h-px bg-[#A4A4A4] my-auto"></div>
        <div className="text-[#A4A4A4] text-base md:text-lg">
          DESIGN PROCESS
        </div>
      </nav>

      {/* Projects Grid - Fixed Image Display */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative w-full h-[70vw] sm:h-[60vw] md:h-[35vw] lg:h-[30vw] max-h-[400px] group cursor-pointer"
            onClick={() => handleProjectClick(project.route)}
          >
            <div className="absolute inset-0 flex items-center justify-center p-1">
              <div className="relative w-full h-full">
                <Image
                  src={project.greyImage}
                  fill
                  className="object-contain transition-opacity duration-300 group-hover:opacity-0"
                  alt={project.greyAlt}
                  priority={index === 0}
                  sizes="(max-width: 640px) 90vw, (max-width: 768px) 45vw, 30vw"
                />
                <Image
                  src={project.coloredImage}
                  fill
                  className="object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  alt={project.coloredAlt}
                  sizes="(max-width: 640px) 90vw, (max-width: 768px) 45vw, 30vw"
                />
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Button with Divider */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-[40px] md:bottom-[55px] w-full max-w-md md:max-w-lg lg:max-w-xl flex items-center justify-center mt-12 md:mt-16">
        <div className="w-[80px] md:w-[120px] h-px bg-gray-500"></div>
        <div className="relative mx-3 md:mx-6">
          <button
            onClick={handleAllProjectsClick}
            className="flex items-center justify-center px-5 py-2 md:px-6 md:py-3 bg-[#202020] rounded-[70px] transition-colors duration-300 hover:bg-[#2a2a2a] cursor-pointer"
            style={{
              minWidth: "140px",
              boxShadow: "0px 0px 6px rgba(232, 172, 49, 0.4)",
              fontFamily: "Poppins, sans-serif",
              fontSize: "16px",
              lineHeight: "1.5",
              fontWeight: 300,
              color: "#FFFFFF",
            }}
            aria-label="View all projects"
          >
            all projects
          </button>
        </div>
        <div className="w-[80px] md:w-[120px] h-px bg-gray-500"></div>
      </div>
    </div>
  );
}
