import Hero from "../components/sections/Hero";
import UseCases from "../components/sections/UseCases";
import WhyVizionDB from "../components/sections/WhyVizionDB";
import CTAFooter from "../components/sections/CTAFooter";
import Navbar from "../components/sections/Navbar";
import { BackgroundBeams } from "../components/sections/background-beams";

const Landing = () => {
  return (
        <div className="h-screen w-full  dark:bg-neutral-950 bg-neutral-50 relative  antialiased">

    <div className="min-h-screen ">
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
    <BackgroundBeams />
    </div>
  );
};

export default Landing;
