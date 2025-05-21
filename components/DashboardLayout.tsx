"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Slider } from "@/app/about-me/page";
import Experience from "./Experience";
import EducationCard from "./EducationCard";
import ToolStackPage from "@/app/tools-stack/page";
import { figtree } from "@/app/font";
import styles from "./DashboardLayout.module.css";

const AboutMeCards = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.grid}>
        {/* Top Left - Bio Card */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className={styles.profileCard}
        >
          <div className={styles.cardContent}>
            <p className={styles.bioText}>
              As an exceptional product designer with three (3) years of
              experience, I thrive on merging creativity and functionality to
              achieve user-centric solutions.
            </p>

            <div className={styles.socialIcons}>
              {[
                "/assets/Group 13.png",
                "/assets/Group 14.png",
                "/assets/Group 15.png",
              ].map((icon, i) => (
                <div key={i} className={styles.socialIcon}>
                  <Image
                    src={icon}
                    alt={`social-${i}`}
                    width={16}
                    height={16}
                  />
                </div>
              ))}
            </div>

            <div className={styles.cvButton}>
              <span className={styles.cvText}>read cv</span>
            </div>
          </div>
        </motion.div>

        {/* Center Column */}
        <div className={styles.centerColumn}>
          {/* Profile Image */}
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className={styles.heroCard}
          >
            <div className={styles.profileImageContainer}>
              <div className={styles.profileBackground}></div>
              <div className={styles.profileImageWrapper}>
                <Image
                  src="/assets/Lawal Jimoh.png"
                  alt="Profile Visual"
                  fill
                  className={styles.profileImage}
                  priority
                />
              </div>
              <div className={styles.speechBubble1}>Hello 👋🏻</div>
              <div className={styles.speechBubble2}>My name is Lawal Jimoh</div>
              <div className={styles.speechBubble3}>
                But you can call me LA 😉
              </div>
              <div className={styles.speechBubble4}>
                Feel free to grab my{" "}
                <a
                  href="mailto:strategy@stringifyts.com"
                  className={styles.emailLink}
                >
                  email
                </a>{" "}
                🤗
              </div>
            </div>
          </motion.div>

          {/* Slider - Moved directly below profile */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={styles.photoCard}
          >
            <div className={styles.sliderContainer}>
              <Slider />
            </div>
          </motion.div>
        </div>

        {/* Right Column */}
        <div className={styles.rightColumn}>
          {/* Experience */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className={styles.experienceCard}
          >
            <Experience />
          </motion.div>

          {/* Education & Tools - Now properly visible */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={styles.educationWrapper}
          >
            <div className={styles.educationToolsCard}>
              <EducationCard />
            </div>
          </motion.div>
        </div>
        <div className={styles.toolsWrapper}>
          <ToolStackPage />
        </div>

        {/* Left Bottom - About Me */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={styles.aboutMeCard}
        >
          <div className={styles.aboutMeContent}>
            <h3 className={`${styles.aboutMeTitle} ${figtree.className}`}>
              ABOUT ME
            </h3>
            <p className={styles.aboutMeText}>
              Product design is more than a career; it&apos;s the result of a
              lifelong passion for exploration. I started with building
              WordPress sites and blogging as a teen, I&apos;ve always been drawn to
              creating and problem-solving. Post-graduation, I tried data
              analytics because I felt my math skills would come in handy and
              then affiliate marketing drawn by its appeal. Though I found
              success in them, neither provided the meaningful impact I sought.
              Driven by a strong desire to create meaningful impact, I spent
              considerable time searching for the right fit. The turning point
              came with my mentor, Alex Oyebade, who suggested I investigate UX
              writing. This sparked a profound interest, leading me to discover
              the powerful potential of product design in solving complex user
              and business problems.
            </p>
            <div className={styles.logo}>
              <Image
                src="/images/LAJ logo 3.png"
                alt="Logo"
                width={24}
                height={24}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMeCards;
