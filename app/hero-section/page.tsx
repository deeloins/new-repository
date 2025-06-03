import Hero from "@/components/Hero";
import Quote from "@/components/Quote";
import GetConnected from "@/components/GetConnected";
import ThankYouFooter from "@/components/ThankYouCard";
import RecentProjectSection from "../recent-project/page";
import ProficientAreas from "../proficient-areas/page";
import Sidebar from "@/components/SliderBar";
import AnimatedDivider from "@/components/AnimatedDivider";

const page = () => {
  return (
    <main className="bg-[#090707] bg-cover bg-no-repeat bg-center">
      <Sidebar />
      <section id="hero">
        <Hero />
      </section>

      <div style={{ marginBottom: "150px" }}>
        <AnimatedDivider targetSectionId="quote" />
      </div>

      <section id="quote">
        <Quote />
      </section>

      <section id="recent-projects">
        <RecentProjectSection />
      </section>

      <section id="proficient-areas">
        <ProficientAreas />
      </section>

      <section id="get-connected">
        <GetConnected />
      </section>

      <section id="thank-you">
        <ThankYouFooter />
      </section>
    </main>
  );
};

export default page;
