import { Zap, UserX, DollarSign, Wrench, Clock, Rocket } from "lucide-react";

const benefits = [
  {
    icon: UserX,
    title: "No Login Needed",
    description: "Start instantly. No sign-ups, no credentials, no friction.",
  },
  {
    icon: Zap,
    title: "Blazing Fast",
    description: "Simple queries that return results in milliseconds.",
  },
  {
    icon: DollarSign,
    title: "Completely Free",
    description: "Zero cost. Perfect for students, hobby projects, and indie devs.",
  },
  {
    icon: Wrench,
    title: "Less Complexity",
    description: "Easy to use. No need for complex setup or configuration.",
  },
  {
    icon: Clock,
    title: "Focus on Building",
    description: "Forget about database headaches. Just code and ship.",
  },
  {
    icon: Rocket,
    title: "Perfect for Prototypes",
    description: "From quick ideas to side projects, get moving without overhead.",
  },
];

const WhyVizionDB = () => {
  return (
    <section className="py-24 px-6 bg-neutral-50 dark:bg-neutral-950 text-black dark:text-white transition-colors">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose{" "}
            <span className="text-[#4D96FF] dark:text-white">VizionDB</span>?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A lightweight, no-login database designed for speed, simplicity, and
            hassle-free development.
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
              0
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Logins Required</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#4D96FF] dark:text-white mb-2">
              &lt;10ms
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Avg Query Time</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#4D96FF] dark:text-white mb-2">
              100%
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Free Forever</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#4D96FF] dark:text-white mb-2">
              1
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Minute Setup</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyVizionDB;
