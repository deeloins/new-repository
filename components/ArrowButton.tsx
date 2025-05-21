"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { RxArrowRight } from "react-icons/rx";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "./ArrowButton.module.css";

interface NextProjectButtonProps {
  nextPath: string;
  disableMobile?: boolean;
}

const NextProjectButton: React.FC<NextProjectButtonProps> = ({
  nextPath,
  disableMobile,
}) => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1023);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((open) => !open);
  };

  const handleNavigate = (path: string) => {
    router.push(path);
    setIsMenuOpen(false);
  };

  // If disableMobile is true, always render desktop
  const showMobileMenu = isMobile && !disableMobile;

  return (
    <div className={styles.container}>
      {showMobileMenu ? (
        <>
          <div className={styles.hamburger} onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </div>

          {isMenuOpen && (
            <div className={styles.mobileMenu}>
              {/* example mobile nav items */}
              <div
                className={styles.mobileMenuItem}
                onClick={() => handleNavigate("./hero-section")}
              >
                Home
              </div>
              <div
                className={styles.mobileMenuItem}
                onClick={() => handleNavigate("./about-page")}
              >
                About
              </div>
              <div
                className={styles.mobileMenuItem}
                onClick={() => handleNavigate("./project-page")}
              >
                Projects
              </div>
              <div
                className={styles.mobileMenuItem}
                onClick={() => handleNavigate("/contact")}
              >
                Contact
              </div>
            </div>
          )}
        </>
      ) : (
        <div
          className={`${styles.nextProjectButton} ${
            disableMobile ? styles.forceDesktopMargin : ""
          }`}
          onClick={() => handleNavigate(nextPath)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && handleNavigate(nextPath)}
        >
          <h1 className={styles.nextProjectText}>Next Project</h1>
          <RxArrowRight className={styles.arrowIcon} />
        </div>
      )}
    </div>
  );
};

export default NextProjectButton;
