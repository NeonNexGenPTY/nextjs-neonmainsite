
import AboutSection from "@/components/AboutSection";
import Contact from "@/components/Contact";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import { MadeWithFlow } from "@/components/made-with-flow";
import { Pricing } from "@/components/ui/pricing-section-with-comparison";

export default function Home() {
  return (
    <div className="min-h-screen backdrop-blur-md bg-gradient-to-b from-blue-900/30 to-green-900/20 text-white flex flex-col overflow-x-hidden christmas-theme">
     
      <main className="flex-1 pt-16">
        <HeroSection christmasTheme={true}/>
        <div id="pricing">
        <Pricing />
        </div>
        <MissionSection />
        <AboutSection />
        <div id="contact">
        <Contact />
        </div>
      </main>
     
    </div>
  );
}
