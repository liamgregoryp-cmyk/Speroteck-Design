import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import Services from "@/components/Services";
import StatsBanner from "@/components/StatsBanner";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <TrustedBy />
      <Services />
      <StatsBanner />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default Index;
