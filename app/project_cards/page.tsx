"use client";

import ProjectCard from "@/components/ProjectCardDefault";

export default function ProjectCardsPage() {
  return (
    <div className="project-grid h-screen p-5 justify-center items-center">
      <div className="font-poppins">
        {/* Example Project Card */}
        <ProjectCard
          title="MyCare Assistant"
          description="Care Service App"
          highlightedText="for Professionals & Patients" // Added the missing prop
          image="/assets/myCare_black"
          hoverImage="/assets/myCare_hover"
          year="2024"
          logo="/assets/mca-logo-dark"
          hoverLogo="/assets/mca-logo-light.png" // Added hoverLogo prop
          defaultUpperRectBg="#202020"
          hoverUpperRectBg="radial-gradient(100% 100% at 50% 0%, #092A71 0%, #6294FF 100%)"
          hoverLowerTextColor="#3437D0"
          projectPath="/projects/mycare-assistant"
        />
      </div>
    </div>
  );
}
