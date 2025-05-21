import Image from "next/image";
import { useEffect, useState } from "react";

export default function Storyboarding() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section>
      {/* Heading & Description */}
      <div
        style={{
          ...styles.headerContainer,
          flexDirection: isMobile ? "column" : "row", // ✅ Stack only on mobile
          textAlign: isMobile ? "center" : "left",
          padding: isMobile ? "80px 16px" : "80px 60px",
          gap: isMobile ? "0" : "100px",
        }}
      >
        <h2 style={styles.heading}>STORY BOARDING</h2>
        <p style={styles.description}>
          In order to seamlessly achieve the business and design goals, the
          illustration below represents the process I went through:
        </p>
      </div>

      {/* Storyboard Grid */}
      <div style={styles.container}>
        <div
          style={{
            ...styles.gridContainer,
            gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", 
          }}
        >
          {storyboardData.map((item, index) => (
            <div key={index} style={styles.gridItem}>
              <Image
                src={item.image}
                alt="Storyboard Image"
                width={350}
                height={350}
                style={styles.image}
              />
              <p style={styles.text}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Storyboard Content Data
const storyboardData = [
  { image: "/assets/Rectangle 17.png", text: "Oluwatobi is living in Canada with her family." },
  { image: "/assets/Rectangle 18.png", text: "Oluwatobi’s Dad has been sick with an ailment. And he has been rushed to the hospital." },
  { image: "/assets/Rectangle 19.png", text: "Oluwatobi’s Dad condition has gotten better. And has been discharged from the hospital." },
  { image: "/assets/Rectangle 20.png", text: "Oluwatobi needs a care professional to look after her Dad. Her friend introduced her to MyQura." },
  { image: "/assets/Rectangle 21.png", text: "Oluwatobi signs up, registers her Dad as a patient, and requests care professionals." },
  { image: "/assets/Rectangle 22.png", text: "Care Professionals log into their app to accept care services suited to their skills and location." },
  { image: "/assets/Rectangle 23.png", text: "Care professionals attend to the patient for the stipulated number of days or months." },
  { image: "/assets/Rectangle 24.png", text: "Oluwatobi is happy that her Dad is well taken care of, even in her absence." },
  { image: "/assets/Rectangle 25.png", text: "The Care Professional is excited to offer her skills and see the positive results." },
];

const styles = {
  container: {
    maxWidth: "1272px",
    margin: "0 auto",
    padding: "80px 60px",
    backgroundColor: "#2E2E2E",
    borderRadius: "40px",
  },
  headerContainer: {
    maxWidth: "1272px",
    margin: "0 auto",
    padding: "80px 16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "100px",
  },
  heading: {
    fontFamily: "Figtree, sans-serif",
    fontSize: "clamp(36px, 6vw, 80px)", 
    fontWeight: "900",
    lineHeight: "clamp(44px, 7vw, 96px)", 
    color: "#FFFFFF",
  },
  description: {
    fontFamily: "Poppins, sans-serif",
    fontSize: "clamp(18px, 2vw, 24px)", 
    fontWeight: "400",
    lineHeight: "clamp(28px, 4vw, 40px)",
    color: "#AAAAAA",
    maxWidth: "568px",
  },
  gridContainer: {
    display: "grid",
    gap: "48px",
    justifyContent: "center",
  },
  gridItem: {
    textAlign: "center" as const,
  },
  image: {
    borderRadius: "16px",
    width: "100%",
    height: "auto",
  },
  text: {
    fontFamily: "Poppins, sans-serif",
    fontSize: "20px",
    fontWeight: "400",
    lineHeight: "32px",
    color: "#FFFFFF",
    marginTop: "16px",
  },
};
