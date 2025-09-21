import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center dark:bg-transparent text-black dark:text-white transition-colors">

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center rounded-full border border-[#4D96FF]/30 dark:border-white/20 bg-[#4D96FF]/10 dark:bg-white/10 px-4 py-1.5 text-sm text-[#4D96FF] dark:text-white mb-8 [@keyframes_borderMove:{from:{'}}]">
          <span className="mr-2">🚀</span>
          No Login Required
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
          The Tool Built for{" "}
          <span className="bg-gradient-to-r from-[#4D96FF] to-[#4D96FF]/70 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
            Builders
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          A lightweight, developer-friendly database tool that eliminates complexity.
          Build faster, scale easier, ship sooner.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Link to={"/diagram"} className="inline-flex items-center px-6 py-3 rounded-xl bg-[#4D96FF] dark:bg-white text-white dark:text-black font-semibold hover:bg-[#3C7AE0] dark:hover:bg-gray-200 transition shadow-lg shadow-[#4D96FF]/20 dark:shadow-white/10 ">
            Get Started Free
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        
        </div>

        {/* Social proof */}
        <div className="text-sm text-gray-600 dark:text-gray-400">
          Trusted by{" "}
          <span className="text-[#4D96FF] dark:text-white font-semibold">
            2,500+
          </span>{" "}
          developers building the next big thing
        </div>
      </div>
    </section>
  );
};

export default Hero;
