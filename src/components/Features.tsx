import { Wand2, Palette, Download, Lock, Github } from 'lucide-react';

const features = [
  {
    icon: Wand2,
    title: 'Visual Drag-Drop Builder',
    description: 'Build pages visually with real-time preview—no coding knowledge needed.'
  },
  {
    icon: Palette,
    title: 'Ready Templates & Themes',
    description: 'Choose from responsive templates and customize colors, fonts, and layouts.'
  },
  {
    icon: Download,
    title: 'One-Click Export & Publishing',
    description: 'Download as HTML/CSS/JS or publish directly under your domain instantly.'
  },
  {
    icon: Lock,
    title: 'Secure Admin Panel',
    description: 'Multi-user structure with role-based access and complete content management.'
  },
  {
    icon: Github,
    title: '100% Open Source',
    description: 'Licensed under AGPL-3.0. Self-hosted on your server with full control.'
  },
  {
    icon: Palette,
    title: 'White-Label Ready',
    description: 'Rebrand as your own—custom logo, domain, and templates for your clients.'
  }
];

export default function Features() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">
            Why Choose Weblis
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Everything you need to build professional websites without complexity or cost.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-xl border border-gray-200 p-8 hover:border-yellow-400 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/20"
              >
                <div className="absolute inset-0 bg-yellow-50/30 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300"></div>

                <div className="relative z-10">
                  <div className="inline-flex p-3 bg-yellow-100 rounded-lg mb-4 group-hover:bg-yellow-200 transition-colors">
                    <Icon className="w-6 h-6 text-yellow-600" />
                  </div>

                  <h3 className="text-xl font-semibold text-black mb-2">
                    {feature.title}
                  </h3>

                  <p className="text-gray-700 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
