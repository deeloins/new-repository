import HeroSection from "@/components/ProjectHero";
import React from "react";
import ProjectsPage from "../projects/page";
import GetConnected from "@/components/GetConnected";
import ThankYouFooter from "@/components/ThankYouCard";
import AnimatedDivider from "@/components/AnimatedDivider";

const ProjectPage = () => {
  return (
    <main>
      <HeroSection />
      <div style={{ marginBottom: "150px" }}>
        <AnimatedDivider />
      </div>

      <ProjectsPage />
      <GetConnected />
      <ThankYouFooter />
    </main>
  );
};

export default ProjectPage;
