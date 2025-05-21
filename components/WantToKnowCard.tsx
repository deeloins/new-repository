"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { IoAlertOutline } from "react-icons/io5";
import { Poppins } from "next/font/google";
import { motion } from "framer-motion";
import styles from "./WantToKnow.module.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const WantToKnowCard: React.FC<{ href: string }> = ({ href }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(false);

  // Same reliable click handler from toggle button
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!isLoading) {
      setIsLoading(true);
      console.log("Navigating to:", href);
      router.push(href);
      // Reset after navigation (same as toggle button logic)
      setTimeout(() => setIsLoading(false), 1000);
    }
  };

  return (
    <div className={styles.cardContainer}>
      <motion.div whileHover={{ scale: 1.02 }} className={styles.iconContainer}>
        <IoAlertOutline className={styles.iconText} />
      </motion.div>

      <div className={styles.cardContent}>
        <h3 className={`${styles.title} ${poppins.className}`}>
          Want to know more about this project?
        </h3>

        <p className={`${styles.description} ${poppins.className}`}>
          Use the button below to read the full case study.
        </p>

        <motion.button
          className={`${styles.button} ${poppins.className}`}
          onClick={handleClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={isLoading}
        >
          {isLoading ? (
            <span className={styles.loading}>Loading...</span>
          ) : (
            <>
              Go to Case Study <span className={styles.arrow}>→</span>
            </>
          )}
        </motion.button>
      </div>
    </div>
  );
};

export default WantToKnowCard;
