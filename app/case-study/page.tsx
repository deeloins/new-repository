"use client";

import React from "react";
import HeroSection from "../../components/HeroSection";
import Image from "next/image";
import styles from "./page.module.css";
import ProblemSolution from "../../components/ProblemSolution";
import ClientOverview from "../../components/ClientOverview";
import Storyboarding from "../../components/StoryBoarding";
import TargetAudience from "../../components/TargetAudience";
import MyQuraClient from "../../components/MyQuraClient";
import MyQuraCareProfessional from "../../components/MqcProfessional";
import AdminPortal from "../../components/AdminPortal";
import NextProjectButton from "@/components/ArrowButton";
import Sidebar from "@/components/SliderBar";
import ToggleButton from "@/components/ToggleButton";
import ThankYouFooter from "@/components/ThankYouCard";
import ProjectCard from "@/components/ProductCard";

export default function CaseStudyPage() {
  const [currentSection, setCurrentSection] = React.useState<
    "caseStudy" | "design"
  >("caseStudy");
  return (
    <div
      className={styles.pageContainer}
      style={{
        width: "100vw",
        minHeight: "100vh",
        margin: "0",
        padding: "40px 16px",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Image
        src="/assets/image.png"
        alt="Background"
        fill
        className={styles.bgImage}
        priority
      />
      {/* Sidebar */}
      <Sidebar />
      <div className={styles.rowContainer}>
        <div className={styles.leftspace}></div>

        <div className={styles.centerToggle}>
          <ToggleButton
            caseStudyPath="/case-study"
            designPath="/my-care-assistants-design"
            currentSection={currentSection}
            setCurrentSection={setCurrentSection}
          />
        </div>

        <div>
          <NextProjectButton nextPath="./tantalizer" />
        </div>
      </div>

      <HeroSection />
      <ClientOverview />
      <ProblemSolution />
      <Storyboarding />
      <TargetAudience />
      <MyQuraClient />
      <MyQuraCareProfessional />
      <AdminPortal />
      <div className={styles.projectCardContainer}>
        <ProjectCard
          title="Next Project"
          projectTitle="Tantalizer"
          description="Restaurant Website Redesign"
          imageSrc="/assets/Scene 12 1.png"
          nextPath="/tantalizer"
        />
      </div>
      <ThankYouFooter />
    </div>
  );
}
