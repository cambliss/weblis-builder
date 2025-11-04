import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-white font-semibold mb-4">Weblis</h3>
            <p className="text-sm text-slate-500 mb-6">
              Open-source website builder for everyone.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-yellow-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-yellow-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-yellow-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Demo</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Documentation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Community</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-yellow-400 transition-colors">GitHub</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Discussions</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Issues</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Contribute</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">License (AGPL-3.0)</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © 2024 Weblis. Licensed under AGPL-3.0.
            </p>
            <div className="flex gap-4">
              <button className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-yellow-400 text-black hover:bg-yellow-300 rounded-lg transition-colors font-medium">
                <Mail className="w-4 h-4" />
                Newsletter
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
