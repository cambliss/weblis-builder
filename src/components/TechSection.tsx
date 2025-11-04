import { Database, Server, Code2 } from 'lucide-react';

export default function TechSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">
            Technology Behind Weblis
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl border border-gray-200 p-8 hover:border-yellow-400 transition-all duration-300 hover:shadow-lg">
            <div className="inline-flex p-3 bg-yellow-100 rounded-lg mb-4">
              <Server className="w-6 h-6 text-yellow-600" />
            </div>
            <h3 className="text-lg font-semibold text-black mb-2">PHP Backend</h3>
            <p className="text-gray-700">Built on PHP 8.1+, ensuring fast performance and excellent compatibility across hosting providers.</p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-8 hover:border-yellow-400 transition-all duration-300 hover:shadow-lg">
            <div className="inline-flex p-3 bg-yellow-100 rounded-lg mb-4">
              <Database className="w-6 h-6 text-yellow-600" />
            </div>
            <h3 className="text-lg font-semibold text-black mb-2">MySQL Database</h3>
            <p className="text-gray-700">Reliable and scalable MySQL/MariaDB storage for all your content, users, and configurations.</p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-8 hover:border-yellow-400 transition-all duration-300 hover:shadow-lg">
            <div className="inline-flex p-3 bg-yellow-100 rounded-lg mb-4">
              <Code2 className="w-6 h-6 text-yellow-600" />
            </div>
            <h3 className="text-lg font-semibold text-black mb-2">Modern Frontend</h3>
            <p className="text-gray-700">HTML5, Bootstrap, and jQuery for responsive, interactive user interfaces everywhere.</p>
          </div>
        </div>

        <div className="bg-black rounded-2xl border border-gray-800 p-12 md:p-16">
          <div className="max-w-3xl">
            <h3 className="text-2xl font-bold text-white mb-4">Why This Stack?</h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Built on PHP and MySQL, Weblis ensures fast performance and complete ownership. This time-tested combination powers millions of websites worldwide and works perfectly on shared hosting, VPS, or dedicated servers. You're never locked into proprietary infrastructure—your data, your server, your rules.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-gray-700">
              <div>
                <div className="text-2xl font-bold text-yellow-400 mb-2">99.9%</div>
                <div className="text-sm text-gray-400">Uptime</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-300 mb-2">AGPL-3.0</div>
                <div className="text-sm text-gray-400">License</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-400 mb-2">Self</div>
                <div className="text-sm text-gray-400">Hosted</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-300 mb-2">Free</div>
                <div className="text-sm text-gray-400">Forever</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
