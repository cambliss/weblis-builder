import { Wand2, Palette, Download, Lock, Zap, Users } from 'lucide-react';

const features = [
	{
		icon: Wand2,
		title: 'AI-Powered Design Assistant',
		description:
			'Smart algorithms create stunning layouts automatically. Professional results in minutes, not hours.',
	},
	{
		icon: Palette,
		title: 'Premium Template Library',
		description:
			'Access 500+ industry-specific templates designed by professionals. Mobile-first and conversion-optimized.',
	},
	{
		icon: Download,
		title: 'Lightning-Fast Publishing',
		description:
			'Deploy instantly to any domain with our global CDN. Automatic SSL, caching, and performance optimization.',
	},
	{
		icon: Lock,
		title: 'Enterprise Security',
		description:
			'Bank-level encryption, automated backups, and role-based permissions. SOC 2 Type II compliant.',
	},
	{
		icon: Zap,
		title: 'Advanced E-commerce',
		description:
			'Built-in payment processing, inventory management, and analytics. Scale from startup to enterprise.',
	},
	{
		icon: Users,
		title: 'Team Collaboration',
		description:
			'Real-time editing, client approval workflows, and project management. Perfect for agencies and teams.',
	},
];

export default function Features() {
	return (
		<section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-16">
					<h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">
						Enterprise Features for Everyone
					</h2>
					<p className="text-xl text-gray-700 max-w-2xl mx-auto">
						Professional-grade tools that help you create websites that convert
						visitors into customers.
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
