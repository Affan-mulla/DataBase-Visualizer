import Hero from "../components/sections/Hero";
import HowItWorks from "../components/sections/HowItWorks";
import UseCases from "../components/sections/UseCases";
import WhyVizionDB from "../components/sections/WhyVizionDB";
import CTAFooter from "../components/sections/CTAFooter";
import Navbar from "../components/sections/Navbar";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <section id="features">
        <UseCases />
      </section>

      <section id="usecase">
        <WhyVizionDB />
      </section>

      <section id="contact">
        <CTAFooter />
      </section>
    </div>
  );
};

export default Landing;
