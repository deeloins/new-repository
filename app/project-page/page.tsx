import HeroSection from "@/components/ProjectHero";
import React from "react";
import ProjectsPage from "../projects/page";
import GetConnected from "@/components/GetConnected";
import ThankYouFooter from "@/components/ThankYouCard";
import AnimatedDivider from "@/components/AnimatedDivider";
import Sidebar from "@/components/SliderBar";

const ProjectPage = () => {
  return (
    <main>
      <Sidebar />
      <HeroSection />
      <div style={{ marginBottom: "150px" }}>
        <AnimatedDivider targetSectionId="projects-page" />
      </div>

      <div id="projects-page" className="space">
        <ProjectsPage />
      </div>
      <GetConnected />
      <ThankYouFooter />
    </main>
  );
};

export default ProjectPage;
