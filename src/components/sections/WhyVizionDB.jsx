import { Zap, Shield, DollarSign, Wrench, Clock, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized for performance with sub-millisecond query times.",
  },
  {
    icon: Shield,
    title: "Secure by Default",
    description: "Built-in encryption, authentication, and access controls.",
  },
  {
    icon: DollarSign,
    title: "Cost Effective",
    description: "Pay only for what you use. No hidden fees or surprise bills.",
  },
  {
    icon: Wrench,
    title: "Developer First",
    description: "Intuitive APIs, great docs, and tools developers actually want to use.",
  },
  {
    icon: Clock,
    title: "Zero Maintenance",
    description: "Automatic backups, updates, and scaling. Focus on building.",
  },
  {
    icon: TrendingUp,
    title: "Scales With You",
    description: "From prototype to production, VizionDB grows with your success.",
  },
];

const WhyVizionDB = () => {
  return (
    <section className="py-24 px-6 bg-white dark:bg-black text-black dark:text-white transition-colors">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose{" "}
            <span className="text-[#4D96FF] dark:text-white">VizionDB</span>?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We've eliminated the pain points that slow down development, so you can ship faster and build better.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group cursor-pointer animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="rounded-xl p-8 border border-gray-200 dark:border-gray-800 bg-white dark:bg-zinc-900 shadow-sm hover:shadow-lg transition">
                <div className="w-14 h-14 rounded-xl bg-[#4D96FF]/10 dark:bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition">
                  <benefit.icon className="h-7 w-7 text-[#4D96FF] dark:text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-[#4D96FF] dark:group-hover:text-white transition">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#4D96FF] dark:text-white mb-2">
              99.9%
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Uptime SLA</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#4D96FF] dark:text-white mb-2">
              &lt;5ms
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Avg Query Time</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#4D96FF] dark:text-white mb-2">
              2.5k+
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Happy Developers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#4D96FF] dark:text-white mb-2">
              24/7
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Expert Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyVizionDB;
