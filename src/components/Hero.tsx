import { Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-400/10 border border-yellow-400/30 mb-8">
          <Zap className="w-4 h-4 text-yellow-400" />
          <span className="text-sm font-medium text-yellow-300">Open-Source Website Builder</span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Build Websites Instantly with{' '}
          <span className="text-yellow-400">
            Weblis
          </span>
        </h1>

        <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          A powerful open-source, drag-and-drop website builder—hosted on your domain. No coding required.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-yellow-400 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-yellow-400/50 transition-all duration-300 transform hover:scale-105">
            Launch Weblis Demo
          </button>
          <button className="px-8 py-4 bg-white/10 text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
            Learn More
          </button>
        </div>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 gap-6 text-left max-w-2xl mx-auto">
          <div className="bg-white/5 border border-white/10 rounded-lg p-4">
            <div className="text-2xl font-bold text-yellow-400 mb-1">100%</div>
            <div className="text-sm text-gray-400">Open Source</div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-lg p-4">
            <div className="text-2xl font-bold text-yellow-300 mb-1">Self-Hosted</div>
            <div className="text-sm text-gray-400">Full Control</div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-lg p-4">
            <div className="text-2xl font-bold text-yellow-400 mb-1">PHP & MySQL</div>
            <div className="text-sm text-gray-400">Fast & Secure</div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}
