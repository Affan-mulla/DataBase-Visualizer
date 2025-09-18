import { Smartphone, ShoppingCart, BarChart3, Layers } from "lucide-react";

const useCases = [
  {
    icon: Smartphone,
    title: "SaaS Applications",
    description: "Perfect for user management, subscriptions, and application data.",
    features: ["User authentication", "Subscription tracking", "Feature flags", "Analytics data"],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Stores",
    description: "Handle products, orders, and customer data with ease.",
    features: ["Product catalogs", "Order processing", "Customer profiles", "Inventory tracking"],
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboards",
    description: "Store and query metrics, events, and business intelligence data.",
    features: ["Event tracking", "Real-time metrics", "Custom reports", "Data visualization"],
  },
  {
    icon: Layers,
    title: "Side Projects",
    description: "The perfect companion for your next big idea or weekend project.",
    features: ["Rapid prototyping", "No setup complexity", "Cost-effective", "Easy iteration"],
  },
];

const UseCases = () => {
  return (
    <section className="py-24 px-6 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#4D96FF] dark:text-white">
            Built for Every <span className="bg-gradient-to-r from-[#4D96FF] to-[#4D96FF]/70 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
            Builders
          </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            From side projects to production applications, VizionDB adapts to your needs.
          </p>
        </div>

        {/* Use case cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="rounded-xl p-8 border border-gray-200 dark:border-gray-800 bg-white dark:bg-zinc-900 shadow-sm hover:shadow-lg transition"
            >
              <div className="mb-4">
                <div className="w-12 h-12 rounded-lg bg-[#4D96FF]/10 dark:bg-white/10 flex items-center justify-center mb-4">
                  <useCase.icon className="h-6 w-6 text-[#4D96FF] dark:text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{useCase.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{useCase.description}</p>
              </div>

              <ul className="space-y-2">
                {useCase.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="text-sm text-gray-700 dark:text-gray-300 flex items-center"
                  >
                    <div className="w-1.5 h-1.5 bg-[#4D96FF] dark:bg-white rounded-full mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
