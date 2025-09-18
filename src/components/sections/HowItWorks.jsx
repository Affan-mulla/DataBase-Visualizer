import { Database, Code, Zap } from "lucide-react";

const steps = [
  {
    icon: Database,
    title: "1. Quick Setup",
    description: "Initialize VizionDB with a single command. No complex configuration needed.",
    code: "npm install viziondb\nvizion init my-project",
  },
  {
    icon: Code,
    title: "2. Write Queries",
    description: "Use familiar SQL or our simple API. Query your data with ease.",
    code: "db.users.create({\n  name: 'John Doe',\n  email: 'john@example.com'\n})",
  },
  {
    icon: Zap,
    title: "3. Scale Instantly",
    description: "Your database grows with your project. No migration headaches.",
    code: "// Auto-scaling handles\n// traffic spikes for you",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">
            How It <span className="text-indigo-500">Works</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Get up and running in minutes, not hours. VizionDB handles the
            complexity so you can focus on building.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="rounded-2xl p-8 bg-gray-900/60 backdrop-blur-md border border-gray-800 shadow-lg hover:shadow-indigo-500/20 transition transform hover:scale-105"
            >
              {/* Icon + Text */}
              <div className="mb-6">
                <div className="w-16 h-16 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-4">
                  <step.icon className="h-8 w-8 text-indigo-400" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">
                  {step.title}
                </h3>
                <p className="text-gray-400">{step.description}</p>
              </div>

              {/* Code Block */}
              <div className="bg-black/50 rounded-lg p-4 border border-gray-800">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                  <code>{step.code}</code>
                </pre>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
