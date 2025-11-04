import { Play } from 'lucide-react';

export default function DemoSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="bg-yellow-50 rounded-2xl border border-yellow-200 p-12 md:p-16">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">
                Try the Builder Now
              </h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Experience the power of Weblis firsthand. Launch our interactive demo and start building your first website in minutes. No sign-up required.
              </p>

              <button className="inline-flex items-center gap-3 px-8 py-4 bg-yellow-400 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-yellow-400/50 transition-all duration-300 transform hover:scale-105">
                <Play className="w-5 h-5" />
                Launch Weblis Demo
              </button>
            </div>

            <div className="flex-1">
              <div className="relative">
                <div className="absolute inset-0 bg-yellow-300 rounded-xl blur-2xl opacity-20"></div>
                <div className="relative bg-black rounded-xl overflow-hidden border border-gray-800">
                  <div className="aspect-video flex items-center justify-center">
                    <div className="text-center">
                      <div className="inline-flex p-4 bg-yellow-400/20 rounded-full mb-4">
                        <Play className="w-8 h-8 text-yellow-400" />
                      </div>
                      <p className="text-gray-400 font-medium">Demo Interface Preview</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
