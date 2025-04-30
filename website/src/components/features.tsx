import { Globe, Zap, Brain, Eye, Shield, TabletSmartphone, Code } from 'lucide-react';

interface Feature {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const features: Feature[] = [
  {
    title: "Secure by Design",
    description: "Runs behind your firewall with only safe, outbound data requests.",
    icon: Shield,
  },
  {
    title: "Fast Query Resolution",
    description: "Resolves complex cohort queries against OMOP databases in seconds.",
    icon: Zap,
  },
  {
    title: "Open Source Always",
    description: "Transparent, inspectable code you can trust and deploy confidently.",
    icon: Code,
  },
  {
    title: "Integrated Disclosure Control",
    description: "Applies built-in result masking to support responsible data sharing.",
    icon: Eye,
  },
];

export const Features = () => {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-2">
          {features.map((feature) => (
            <div key={feature.title} className="relative pl-8 flex items-start">
              <div className="flex-shrink-0 mt-1">
                <feature.icon className="h-5 w-5 text-[#4BA6EE]" aria-hidden="true" />
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-gray-900 dark:text-white">{feature.title}</h3>
                <p className="mt-2 text-gray-600 dark:text-white">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
