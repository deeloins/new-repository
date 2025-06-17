"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./SlideBar.module.css";

const Sidebar: React.FC = () => {
  const router = useRouter();
  const [copied, setCopied] = useState(false);

  const navItems = [
    { icon: "/assets/home.svg", label: "Home", path: "./hero-section" },
    { icon: "/assets/about.svg", label: "About", path: "./about-page" },
    { icon: "/assets/projects.svg", label: "Projects", path: "./project-page" },
  ];

  const handleCopy = () => {
    const email = "strategy@stringifyts.com";
    navigator.clipboard.writeText(email);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

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

      {/* Navigation Icons */}
      <div className={styles.icons}>
        {navItems.map((item) => (
          <div
            key={item.path}
            className={styles.iconWrapper}
            onClick={() => router.push(item.path)}
            style={{ cursor: "pointer" }}
          >
            <Image
              src={item.icon}
              alt={item.label}
              width={24}
              height={24}
              className={styles.icon}
            />
            <span className={styles.tooltip}>{item.label}</span>
          </div>
        ))}
      </div>

      {/* Copy Button */}
      <div className={`${styles.icons} ${styles.copyContainer}`}>
        <div
          className={styles.iconWrapper}
          onClick={handleCopy}
          style={{ cursor: "pointer" }}
        >
          <Image
            src={copied ? "/assets/copy-success.svg" : "/assets/copy.svg"}
            alt={copied ? "Copied" : "Copy"}
            width={24}
            height={24}
            className={styles.icon}
          />
          <span className={styles.tooltip}>
            {copied ? "Email copied!" : "Copy URL"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
