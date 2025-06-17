"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { RxPerson, RxHome, RxDesktop, RxCopy } from "react-icons/rx";
import styles from "./SlideBar.module.css";

const Sidebar: React.FC = () => {
  const router = useRouter();

  const navItems = [
    { icon: "/assets/home.svg", label: "Home", path: "./hero-section" },
    { icon: "/assets/about.svg", label: "About", path: "./about-page" },
    { icon: "/assets/projects.svg", label: "Projects", path: "./project-page" },
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  // Find the home path
  const homePath =
    navItems.find((item) => item.label === "Home")?.path || "./hero-section";

  return (
    <div className={styles.sidebar}>
      <div className={styles.line}></div>

      {/* Clickable Logo */}
      <div
        className={styles.logo}
        onClick={() => router.push(homePath)}
        style={{ cursor: "pointer" }}
      >
        <Image src="/images/LAJ logo 3.png" alt="Logo" width={24} height={24} />
      </div>

      {/* Navigation icons */}
      <div className={styles.icons}>
        {navItems.map((item) => (
          <div
            key={item.path}
            className={styles.iconWrapper}
            onClick={() => router.push(item.path)}
            style={{ cursor: "pointer" }}
          >
            <span className={styles.icon}>{item.icon}</span>
            <span className={styles.tooltip}>{item.label}</span>
          </div>
        ))}
      </div>

      {/* Copy button */}
      <div className={`${styles.icons} ${styles.copyContainer}`}>
        <div
          className={styles.iconWrapper}
          onClick={handleCopy}
          style={{ cursor: "pointer" }}
        >
          <RxCopy className={styles.icon} />
          <span className={styles.tooltip}>Copy URL</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
