import BackgroundGrid from "@/components/BackgroundGrid";
import ScrollProgress from "@/components/ScrollProgress";
import IntroTransition from "@/components/IntroTransition";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ChatWidget from "@/components/ChatWidget";
import TrustStrip from "@/components/TrustStrip";
import Services from "@/components/Services";
import ManualToAutomated from "@/components/ManualToAutomated";
import AutomationLab from "@/components/AutomationLab";
import Projects from "@/components/Projects";
import HowItWorks from "@/components/HowItWorks";
import TechEcosystem from "@/components/TechEcosystem";
import About from "@/components/About";
import Estimator from "@/components/Estimator";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <IntroTransition />
      <ScrollProgress />
      <BackgroundGrid />
      <Navbar />
      <Hero />
      <TrustStrip />
      <Services />
      <ManualToAutomated />
      <AutomationLab />
      <Projects />
      <HowItWorks />
      <TechEcosystem />
      <About />
      <Estimator />
      <Contact />
      <Footer />
      <ChatWidget />
    </main>
  );
}
