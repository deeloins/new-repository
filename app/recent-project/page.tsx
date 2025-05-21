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

export default function RecentProjectsPage() {
  const router = useRouter();

  const projects = [
    {
      greyImage: greyImage1,
      coloredImage: coloredImage1,
      greyAlt: "MyQura Client Portal - Wireframe",
      coloredAlt: "MyQura Client Portal - Final Design",
      width: 400,
      height: 250
    },
    {
      greyImage: greyImage2,
      coloredImage: coloredImage2,
      greyAlt: "MQC Professional Portal - Wireframe",
      coloredAlt: "MQC Professional Portal - Final Design", 
      width: 400,
      height: 250
    },
    {
      greyImage: greyImage3,
      coloredImage: coloredImage3,
      greyAlt: "Rock Realty Website - Wireframe",
      coloredAlt: "Rock Realty Website - Final Design",
      width: 400,
      height: 250
    }
  ];

  const handleAllProjectsClick = () => {
    router.push("/projects");
  };

  return (
    <div className="relative pb-[200px]">
      <h1 className="text-7xl text-white mt-8 recentProjectHeading">
        <span className="font-bold">RECENT</span>{" "}
        <span className="italic">PROJECTS</span>
      </h1>

      <nav className="flex justify-center gap-2.5 align-middle subheader">
        <div className="textSubHead">CASE STUDIES</div>
        <div className="w-2xs h-0.5 flex justify-center mt-3 stroke"></div>
        <div className="textSubHead">LIVE PROJECTS</div>
        <div className="w-2xs h-0.5 flex justify-center mt-2.5 stroke"></div>
        <div className="textSubHead">DESIGN PROCESS</div>
      </nav>

      <section className="flex gap-11 pl-17 pr-14 pt-11 justify-center recentProjects">
        {projects.map((project, index) => (
          <div key={index} className="relative w-64 h-64 group">
            <Image
              src={project.greyImage}
              width={project.width}
              height={project.height}
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
              alt={project.greyAlt}
              priority={index === 0}
            />
            <Image
              src={project.coloredImage}
              width={project.width}
              height={project.height}
              className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              alt={project.coloredAlt}
            />
          </div>
        ))}
      </section>

      <div className="absolute left-1/2 -translate-x-1/2 bottom-[55px] w-full max-w-[1272px] flex items-center justify-center">
        <div className="w-[400px] h-px bg-gray-500"></div>
        <div className="relative mx-8">
          <button
            onClick={handleAllProjectsClick}
            className="flex items-center justify-center px-10 py-5 bg-[#202020] rounded-[70px] transition-colors duration-300 hover:bg-[#2a2a2a] cursor-pointer"
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
            aria-label="View all projects"
          >
            all projects
          </button>
        </div>
        <div className="w-[400px] h-px bg-gray-500"></div>
      </div>
    </div>
  );
}
