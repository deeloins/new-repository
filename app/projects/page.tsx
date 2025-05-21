"use client";

import ProjectCard from "../../components/ProjectCardDefault";

const projects = [
  {
    title: "MyCare Assistant",
    description: "Care Service App",
    highlightedText: "for Professionals & Patients",
    image: "/assets/myCare_black.png",
    hoverImage: "/assets/scene3.png",
    year: "2024",
    logo: "/assets/mca-logo-dark.png",
    hoverLogo: "/assets/mca-logo-light.png",
    defaultUpperRectBg: "#202020",
    hoverUpperRectBg:
      "radial-gradient(100% 100% at 50% 0%, #092A71 0%, #6294FF 100%)",
    hoverLowerTextColor: "#3437D0",
    projectPath: "./case-study",
  },
  {
    title: "Tantalizer",
    description: "Restaurant Website",
    highlightedText: "Redesign",
    image: "/assets/tantalizer.png",
    hoverImage: "/assets/tantalizer_hover.png",
    year: "2023",
    logo: "/assets/tant-dark.png",
    hoverLogo: "/assets/image1.png",
    defaultUpperRectBg: "#202020",
    hoverUpperRectBg: "#EA8B1B",
    hoverLowerTextColor: "#FF960B",
    projectPath: "./tantalizer",
  },
  {
    title: "Rock Realty Limited",
    description: "Real Estate Website",
    highlightedText: "Redesign",
    image: "/assets/scene10.png",
    hoverImage: "/assets/scene10_hover.png",
    year: "2024",
    logo: "/assets/image3.png",
    hoverLogo: "/assets/image2.png",
    defaultUpperRectBg: "#2F2F2F",
    hoverUpperRectBg: "#9B6303",
    hoverLowerTextColor: "#FFFFFF",
    projectPath: "./rocky-realty",
  },
  {
    title: "Kawts",
    description: "Courier Service App",
    highlightedText: "for Delivery Service",
    image: "/assets/Kawts_black.png",
    hoverImage: "/assets/Kawts_hover.png",
    year: "2024",
    logo: "/assets/Asset3.png",
    hoverLogo: "/assets/Asset4.png",
    defaultUpperRectBg: "#202020",
    hoverUpperRectBg:
      "linear-gradient(271.21deg, #FFA500 -60.89%, #72DA9C 108.92%)",
    hoverLowerTextColor: "#232323",
    projectPath: "./kwats-page-design",
  },
];

export default function ProjectsPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          highlightedText={project.highlightedText}
          image={project.image}
          hoverImage={project.hoverImage}
          year={project.year}
          logo={project.logo}
          hoverLogo={project.hoverLogo}
          defaultUpperRectBg={project.defaultUpperRectBg}
          hoverUpperRectBg={project.hoverUpperRectBg}
          hoverLowerTextColor={project.hoverLowerTextColor}
          projectPath={project.projectPath}
        />
      ))}
    </div>
  );
}
