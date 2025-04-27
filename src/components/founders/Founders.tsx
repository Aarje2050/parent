// components/founders/founders.tsx

import React from "react";

const Founders = () => {
  return (
    <section className="py-16 md:py-24" id="founders">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-xl font-medium text-primary-400 mb-2 block">Our Leadership</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Meet the Founders
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Visionaries driven by innovation, committed to transforming businesses for the digital future.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Founder 1 */}
          <div className="bg-gradient-to-br from-dark-700/80 to-dark-800/90 backdrop-blur-sm border border-dark-600/50 rounded-2xl shadow-lg hover:shadow-glow transition-all duration-300 p-6">
            <div className="aspect-square relative rounded-lg overflow-hidden mb-4">
              {/* Placeholder for founder image */}
              <div className="w-full h-full bg-gradient-to-br from-dark-600 to-dark-700 flex items-center justify-center text-gray-400">
                Founder Photo
              </div>
            </div>
            <h4 className="text-xl font-semibold text-white mb-1">
              Rajesh Jat
            </h4>
            <p className="text-primary-400 font-medium text-sm mb-3">
              Co-Founder
            </p>
            <p className="text-gray-300 text-sm">
            Rajesh drives SEO excellence with a sharp focus on content strategies, technical SEO, seamless web development, and strong team leadership — building the digital backbone of client success.
            </p>
          </div>

          {/* Founder 2 */}
          <div className="bg-gradient-to-br from-dark-700/80 to-dark-800/90 backdrop-blur-sm border border-dark-600/50 rounded-2xl shadow-lg hover:shadow-glow transition-all duration-300 p-6">
            <div className="aspect-square relative rounded-lg overflow-hidden mb-4">
              {/* Placeholder for founder image */}
              <div className="w-full h-full bg-gradient-to-br from-dark-600 to-dark-700 flex items-center justify-center text-gray-400">
                Founder Photo
              </div>
            </div>
            <h4 className="text-xl font-semibold text-white mb-1">
              Manish Lamrod
            </h4>
            <p className="text-primary-400 font-medium text-sm mb-3">
              Co-Founder
            </p>
            <p className="text-gray-300 text-sm">
            Manish leads the charge on off-page SEO, client relationship management, and business development — forging powerful partnerships and scaling brands with strategic precision.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founders;
