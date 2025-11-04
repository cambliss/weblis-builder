import { ArrowRight, Zap } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Launch Your Website in Minutes
          </h2>

          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join thousands of creators, agencies, and entrepreneurs building with Weblis. Start free today—no credit card required.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-yellow-400 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-yellow-400/50 transition-all duration-300 transform hover:scale-105">
              Get Started
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
              View Documentation
            </button>
          </div>

          <div className="bg-white/10 border border-white/20 rounded-lg p-6 inline-block">
            <div className="flex items-center gap-3 text-gray-300">
              <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0" />
              <span>Self-hosted with zero fees. Full source code included.</span>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 pt-20 border-t border-white/10">
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">50K+</div>
            <p className="text-gray-400">Downloads</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-300 mb-2">1000+</div>
            <p className="text-gray-400">Active Users</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
            <p className="text-gray-400">Community Support</p>
          </div>
        </div>
      </div>
    </section>
  );
}
