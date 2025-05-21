"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { RxPerson, RxHome, RxDesktop, RxCopy } from "react-icons/rx";
import styles from "./SlideBar.module.css";

const Sidebar: React.FC = () => {
  const router = useRouter();

  const navItems = [
    { icon: <RxHome />, label: "Home", path: "./hero-section" },
    { icon: <RxPerson />, label: "About", path: "./about-page" },
    { icon: <RxDesktop />, label: "Projects", path: "./project-page" },
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.line}></div>

      {/* Logo */}
      <div className={styles.logo}>
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
