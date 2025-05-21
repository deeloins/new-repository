"use client";

import React from "react";
import ToggleButton from "@/components/ToggleButton";
import NextProjectButton from "@/components/ArrowButton";
import ProjectCard from "@/components/ProductCard";
import Sidebar from "@/components/SliderBar";
import ComingSoonComponent from "@/components/ComingSoon";
import Image from "next/image";
import styles from "./KwatsPageDesign.module.css";
import ThankYouFooter from "@/components/ThankYouCard";
import { Bruno_Ace, Poppins } from "next/font/google";

// Fonts
const brunoAce = Bruno_Ace({ subsets: ["latin"], weight: "400" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

const MyCareAssistants: React.FC = () => {
  const [currentSection, setCurrentSection] = React.useState<
    "caseStudy" | "design"
  >("design");
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          {/* Background Image */}
          <Image
            src="/images/shin.png"
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
                caseStudyPath=""
                designPath="/kwats-page-design"
                currentSection={currentSection}
                setCurrentSection={setCurrentSection}
              />
            </div>

            <div>
              <NextProjectButton nextPath="./case-study" />
            </div>
          </div>

          {/* Logo */}
          <div className={styles.logoContainer}>
            <Image
              src="/images/Asset 3.png"
              alt="Logo"
              width={304}
              height={96}
              className={styles.logo}
            />
          </div>

          {/* Project Year */}
          <div className={`${brunoAce.className} ${styles.projectYear}`}>
            KWATS - 2024
          </div>

          {/* Main Headings */}
          <h2 className={`${poppins.className} ${styles.mainHeading}`}>
            Courier Service App for{" "}
          </h2>
          <span className={`${poppins.className} ${styles.subHeading}`}>
            Delivery Service
          </span>

          <ComingSoonComponent />

          {/* Logo */}
          <div className={styles.imageContainer}>
            <Image
              src="/images/Vector 10.png"
              alt="Logo"
              width={204}
              height={96}
              className={styles.image}
            />
          </div>

          <div className={styles.projectCardContainer}>
            <ProjectCard
              title="NEXT PROJECT"
              projectTitle="Courier Service App"
              description="for Delivery Service"
              imageSrc="/images/Scene 12 1 (3).png"
              nextPath="./case-study"
            />
          </div>

          {/* Thank You Footer */}
          <ThankYouFooter />
        </div>
      </div>
    </>
  );
};

export default MyCareAssistants;
