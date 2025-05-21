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
      <Hero />
      <div style={{ marginBottom: "150px" }}>
        <AnimatedDivider />
      </div>

      <Quote />
      <RecentProjectSection />
      <ProficientAreas />
      <GetConnected />
      <ThankYouFooter />
    </main>
  );
};

export default page;
