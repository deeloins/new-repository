"use client";
import React from "react";
import Image from "next/image";
import { Bruno_Ace, Poppins } from "next/font/google";
import styles from "./ProductCard.module.css";
import NextProjectButton from "@/components/ArrowButton";

// Font imports
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });
const brunoAce = Bruno_Ace({ subsets: ["latin"], weight: "400" });

// Define props interface
interface ProjectCardProps {
  title: string;
  projectTitle: string;
  description: string;
  imageSrc: string;
  button?: boolean;
  nextPath?: string; // ✅ Dynamic nextPath
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  projectTitle,
  description,
  imageSrc,
  button = true,
  nextPath, // ✅ Receive dynamic nextPath
}) => {
  return (
    <div className={styles.container}>
      {/* Left section with text */}
      <div className={styles.textContainer}>
        <h2 className={`${styles.title} ${brunoAce.className}`}>{title}</h2>
        <h3 className={`${styles.projectTitle} ${poppins.className}`}>
          {projectTitle}
        </h3>
        <p className={`${styles.description} ${poppins.className}`}>
          {description}
        </p>
        {button &&
          nextPath && ( // ✅ Only render button when valid path exists
            <NextProjectButton disableMobile={true} nextPath={nextPath} />
          )}
      </div>

      {/* Right section with image */}
      <div className={styles.imageContainer}>
        <Image
          src={imageSrc}
          alt="Project Image"
          width={350}
          height={80}
          className={styles.image}
        />
      </div>
    </div>
  );
};

export default ProjectCard;
