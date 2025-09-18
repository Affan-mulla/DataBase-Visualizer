import { ArrowRight, Github, Twitter, Book } from "lucide-react";

const CTAFooter = () => {
  return (
    <section className="py-24 px-6 bg-white dark:bg-black text-black dark:text-white transition-colors relative overflow-hidden">
      {/* Background subtle pattern for light mode */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%234D96FF%22%20fill-opacity=%220.05%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] dark:bg-none" />

      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Build Something{" "}
            <span className="block bg-gradient-to-r from-[#4D96FF] to-[#6BCB77] dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Amazing?
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Join thousands of developers who've chosen VizionDB to power their next big idea. 
            Start building today, scale tomorrow.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="inline-flex items-center px-6 py-3 rounded-xl bg-[#4D96FF] dark:bg-white text-white dark:text-black font-semibold hover:bg-[#6BCB77] dark:hover:bg-gray-200 transition shadow-md">
              Start Building Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="inline-flex items-center px-6 py-3 rounded-xl border border-gray-300 dark:border-gray-700 hover:border-[#4D96FF] dark:hover:border-white text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition">
              <Book className="mr-2 h-4 w-4" />
              Read Documentation
            </button>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-3xl mx-auto">
            <div className="rounded-lg p-6 border border-gray-200 dark:border-gray-800 bg-white dark:bg-zinc-900">
              <div className="text-2xl font-bold text-[#4D96FF] dark:text-white mb-2">Free Tier</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">No credit card required</div>
            </div>
            <div className="rounded-lg p-6 border border-gray-200 dark:border-gray-800 bg-white dark:bg-zinc-900">
              <div className="text-2xl font-bold text-[#4D96FF] dark:text-white mb-2">5-min Setup</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Get started instantly</div>
            </div>
            <div className="rounded-lg p-6 border border-gray-200 dark:border-gray-800 bg-white dark:bg-zinc-900">
              <div className="text-2xl font-bold text-[#4D96FF] dark:text-white mb-2">24/7 Support</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">We're here to help</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 pt-12 mt-16">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Branding */}
            <div className="mb-4 md:mb-0">
              <div className="text-2xl font-bold">VizionDB</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">The database built for builders.</div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-[#4D96FF] dark:hover:text-white transition">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-[#4D96FF] dark:hover:text-white transition">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-[#4D96FF] dark:hover:text-white transition">
                <Book className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-gray-600 dark:text-gray-500 mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
            © 2024 VizionDB. All rights reserved. Built with ❤️ for developers.
          </div>
        </div>
      </footer>
    </section>
  );
};

export default CTAFooter;
