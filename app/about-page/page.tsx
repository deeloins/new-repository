import Head from "next/head";
import styles from "./AboutPage.module.css";
import Sidebar from "@/components/SliderBar";
import AboutSection from "@/components/AboutSection";
import AnimatedDivider from "@/components/AnimatedDivider";
import ThankYouFooter from "@/components/ThankYouCard";
import AboutMeCards from "@/components/DashboardLayout";
import GetConnected from "@/components/GetConnected";

const About = () => {
  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>

      <div className={styles.background}>
        <div className={styles.overlay}>
          {/* SideBar */}
          <Sidebar />
          <div>
            <AboutSection />
          </div>

          <div style={{ marginBottom: "150px" }}>
            <AnimatedDivider targetSectionId="about-me-cards" />
          </div>

          <section id="about-me-cards">
            <div className={styles.space}>
              <AboutMeCards />
            </div>
          </section>

          <div>
            <GetConnected />
          </div>

          <div>
            <ThankYouFooter />
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
