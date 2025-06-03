"use client";
import { motion } from "framer-motion";
import styles from "./AnimatedDivider.module.css";

const AnimatedDivider = ({ targetSectionId = "next-section" }) => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById(targetSectionId);
    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className={styles.dividerContainer} onClick={scrollToNextSection}>
      <div className={styles.line} />
      <div className={styles.centerIcon}>
        <motion.div
          className={styles.rotatingArc}
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "linear",
          }}
        />
        <div className={styles.arrowDown} />
      </div>
      <div className={styles.line} />
    </div>
  );
};

export default AnimatedDivider;
