import React, { useEffect, useState } from "react";

// Feature data array - defined before component
const features = [
  {
    number: "01",
    title: "Designing for Social Impact",
    text: "A deep dive into the healthcare sector revealed the urgent need for user-centered solutions in Nigeria and surrounding regions. This project channeled my passion for designing for social impact.",
  },
  {
    number: "02",
    title: "Inclusive Interface Design",
    text: "Designing for a multi-generational audience required a nuanced approach to accessibility and usability. I gained valuable experience in creating inclusive interfaces.",
  },
  {
    number: "03",
    title: "Admin Workflow & UX",
    text: "Understanding the administrator's workflow was paramount. I learned how to design intuitive admin interfaces that directly impact the end-user experience.",
  },
  {
    number: "04",
    title: "Data-Driven Design Rationale",
    text: "Data-driven design is essential. Every UI element must be justified and aligned with user needs and business goals. I honed my ability to articulate design rationale to stakeholders.",
  },
];

const AdminPortal: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Responsive style generator
  const responsive = {
    headerContainer: {
      padding: isMobile ? "40px 16px" : "80px 16px",
      flexDirection: isMobile ? "column" : ("row" as "row" | "column"),
      gap: isMobile ? "24px" : "40px",
    },
    heading: {
      fontSize: isMobile ? "48px" : "80px",
      lineHeight: isMobile ? "56px" : "96px",
      textAlign: isMobile ? "center" : ("left" as React.CSSProperties["textAlign"]),
    },
    description: {
      fontSize: isMobile ? "18px" : "24px",
      lineHeight: isMobile ? "28px" : "40px",
      maxWidth: isMobile ? "100%" : "568px",
    },
    iMacContainer: {
      width: isMobile ? "100%" : "932px",
      height: isMobile ? "auto" : "549px",
      padding: isMobile ? "0 16px" : "0",
    },
    featureList: {
      gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
      gap: isMobile ? "24px" : "40px",
    },
    featureText: {
      fontSize: isMobile ? "16px" : "22px",
      lineHeight: isMobile ? "24px" : "36px",
    },
    subHeading: {
      fontSize: isMobile ? "32px" : "48px",
      lineHeight: isMobile ? "38px" : "58px",
      whiteSpace: isMobile ? "normal" : "nowrap" as const,
    },
    learningIntro: {
      fontSize: isMobile ? "18px" : "24px",
      width: isMobile ? "100%" : "1272px",
    },
  };

  return (
    // Wrap entire content in a container with max-width 1024px and inner padding
    <div style={styles.container}>
      {/* Heading Section */}
      <div style={{ ...styles.headerContainer, ...responsive.headerContainer }}>
        <h2 style={{ ...styles.heading, ...responsive.heading }}>ADMIN PORTAL</h2>
        <p style={{ ...styles.description, ...responsive.description }}>
          The admin portal was designed to manage the requests from the client
          and also the care professional. To ensure proficient services are
          being delivered appropriately.
        </p>
      </div>

      {/* Main Section */}
      <section style={styles.section}>
        {/* iMac Image Section */}
        <div style={{ ...styles.iMacContainer, ...responsive.iMacContainer }}>
          <img
            src="/assets/iMac 24 inch.png"
            alt="Admin Portal Preview"
            style={styles.iMacImage}
          />
        </div>

        {/* Main Content Wrapper */}
        <div style={styles.mainWrapper}>
          <h3 style={{ ...styles.subHeading, ...responsive.subHeading }}>
            Time to retrospect!
          </h3>
          <p style={{ ...styles.learningIntro, ...responsive.learningIntro }}>
            So these were my learnings after working on this project:
          </p>

          {/* Feature Grid */}
          <div style={{ ...styles.featureList, ...responsive.featureList }}>
            {features.map((feature, index) => (
              <div key={index} style={styles.featureCard}>
                <span style={styles.featureNumber}>{feature.number}</span>
                <h4 style={styles.featureTitle}>{feature.title}</h4>
                <p style={{ ...styles.featureText, ...responsive.featureText }}>
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// Base styles
const styles: { [key: string]: React.CSSProperties } = {
  // New container style to constrain the component to 1024px width with padding
  container: {
    maxWidth: "1024px",
    width: "100%",
    margin: "0 auto",
    padding: "20px",
    boxSizing: "border-box",
  },
  headerContainer: {
    maxWidth: "1024px", // Updated to use 1024px to match the container
    maxHeight: "152px",
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  heading: {
    fontFamily: "Figtree, sans-serif",
    fontWeight: 900,
    color: "#FFFFFF",
    textAlign: "left",
    margin: 0,
  },
  description: {
    fontFamily: "Poppins",
    fontWeight: 400,
    color: "#AAAAAA",
    margin: 0,
    textAlign: "left",
  },
  section: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "100px 20px",
  },
  iMacContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  iMacImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  mainWrapper: {
    maxWidth: "1024px", // Constrain main wrapper to 1024px as well
    background: "#1B1B1B",
    padding: "5%",
    borderRadius: "16px",
    marginTop: "50px",
    position: "relative",
    display: "flex",
    flexDirection: "column",
  },
  subHeading: {
    position: "relative",
    maxWidth: "531px",
    fontFamily: "Figtree",
    fontWeight: 900,
    textTransform: "uppercase",
    color: "#FFFFFF",
    textOverflow: "ellipsis",
    margin: 0,
  },
  learningIntro: {
    position: "relative",
    height: "32px",
    marginBottom: "40px",
    fontFamily: "Poppins",
    fontStyle: "normal",
    lineHeight: "32px",
    color: "#A2A2A2",
    margin: "24px 0",
  },
  featureList: {
    display: "grid",
    gap: "40px",
  },
  featureCard: {
    display: "flex",
    flexDirection: "column",
    padding: "24px",
    gap: "20px",
    background: "#272727",
    borderRadius: "24px",
  },
  featureNumber: {
    fontFamily: "Poppins",
    fontWeight: 700,
    fontSize: "32px",
    lineHeight: "32px",
    color: "#E8AC31",
  },
  featureTitle: {
    fontFamily: "Poppins",
    fontWeight: 700,
    fontSize: "24px",
    lineHeight: "32px",
    color: "#FFFFFF",
    margin: 0,
  },
  featureText: {
    fontFamily: "Poppins",
    fontWeight: 400,
    margin: 0,
    color: "#A2A2A2",
  },
};

export default AdminPortal;
