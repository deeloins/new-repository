"use client";
import Image from "next/image";
import ButtonWithIcon from "./Buttons";
import styles from "./LetWorkTogetherCard.module.css";

const WorkTogether: React.FC = () => {
  return (
    <div className={styles.container}>
      {/* Image Section */}
      <div className={styles.imageSection}>
        <Image
          className={styles.profileImage}
          src="/images/image.png"
          alt="Profile"
          width={376}
          height={439}
        />
      </div>

      {/* Text and Button Section */}
      <div className={styles.textSection}>
        <p className={styles.mainText}>
          Let’s <span className={styles.highlightText}>work</span> together on
          your
        </p>
        <p>
          <span className={styles.subText}>next project</span>
        </p>
        <div className={styles.buttonContainer}>
          <ButtonWithIcon email="lajimohofficial@gmail.com" />
        </div>
      </div>
    </div>
  );
};

export default WorkTogether;
