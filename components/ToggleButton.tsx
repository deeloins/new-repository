"use client";

import { useRouter } from "next/navigation";
import React from "react";
import styles from "./ToggleButton.module.css";

type Props = {
  caseStudyPath: string;
  designPath: string;
  currentSection: "caseStudy" | "design";
  setCurrentSection: React.Dispatch<
    React.SetStateAction<"caseStudy" | "design">
  >;
};

const ToggleButton = ({
  caseStudyPath,
  designPath,
  currentSection,
  setCurrentSection,
}: Props) => {
  const router = useRouter();
  const isCaseStudy = currentSection === "caseStudy";

  return (
    <div className={styles.container}>
      <div
        className={styles.option}
        style={{ color: isCaseStudy ? "#fff" : "#bbb" }}
        onClick={() => {
          setCurrentSection("caseStudy");
          router.push(caseStudyPath);
        }}
      >
        <span className={styles.label}>Full</span>
      </div>

      <div
        className={styles.option}
        style={{ color: !isCaseStudy ? "#fff" : "#bbb" }}
        onClick={() => {
          setCurrentSection("design");
          router.push(designPath);
        }}
      >
        <span className={styles.label}>Design</span>
      </div>

      <div
        className={styles.innerCircle}
        style={{ left: isCaseStudy ? "0" : "47%" }}
      />
    </div>
  );
};

export default ToggleButton;
