export default function ProblemSolution() {
  return (
    <section style={styles.container}>
      {/* Problem Section */}
      <h2 style={styles.heading}>THE PROBLEM</h2>
      <p style={styles.description}>
        The relative of the founder of MyCare Assistant suffered a major health challenge, and the inadequate and costly support services led to her death. This led to the birth of MyCare Assistant, the company grew and handled all their operations manually.{" "}
        <span style={styles.highlight}>
          However, as the business grew and the volume of Clients and Care Professionals increased, this manual approach became unsustainable. To address the challenges with the manual approach, MyCare Assistant recognised the necessity of transitioning from manual operations to a digital platform.
        </span>
      </p>

      {/* Solution Section */}
      <h2 style={styles.heading}>THE SOLUTION</h2>
      <p style={styles.description}>
        After thoroughly understanding MyCare Assistant's business processes, we determined that a mobile application for both clients and care professionals was the ideal solution.{" "}
        <span style={styles.highlight}>
          This app empowers clients to monitor care professional activities, including clock-in and clock-out times, providing transparency and peace of mind. Care professionals, in turn, can use the app to manage their schedules, accepting or declining care service requests based on their availability and preferences. Furthermore, the Care Professional app provides access to affordable courses designed to enhance their skill sets and professional development.
        </span>
      </p>
    </section>
  );
}

const styles = {
  container: {
    maxWidth: "1272px",
    margin: "0 auto",
    padding: "clamp(40px, 5vw, 60px) clamp(16px, 4vw, 30px)", // ✅ Adaptive padding
    backgroundColor: "#1B1B1B",
    color: "#BDBDBD",
  },
  heading: {
    fontSize: "clamp(24px, 5vw, 48px)", // ✅ Responsive heading size
    fontWeight: "900",
    marginBottom: "16px",
    color: "white",
    textAlign: "center" as const,
  },
  description: {
    fontSize: "clamp(16px, 2vw, 28px)", // ✅ Slightly smaller for better wrapping
    fontFamily: "Poppins, sans-serif",
    fontWeight: "400",
    lineHeight: "clamp(26px, 4vw, 46px)", // ✅ Adjusted for better spacing
    letterSpacing: "0%",
    color: "#A2A2A2",
    marginBottom: "32px",
    textAlign: "left" as const, // ✅ No more weird spaces
    maxWidth: "90%", // ✅ Prevents text from stretching too wide
    marginLeft: "auto",
    marginRight: "auto",
  },
  highlight: {
    fontWeight: "600",
    color: "white",
  },
};
