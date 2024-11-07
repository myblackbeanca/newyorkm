import React from 'react';
import { Sparkles, Globe2, Users, Share2, BarChart } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <Sparkles className="w-6 h-6 text-purple-400" />,
      title: "Create Digital Collectibles",
      description: "Design and mint unique digital collectibles that your fans can own and trade."
    },
    {
      icon: <Globe2 className="w-6 h-6 text-purple-400" />,
      title: "Global Reach, NYC Focus",
      description: "Connect with NYC's diverse music scene while expanding your global presence."
    },
    {
      icon: <Users className="w-6 h-6 text-purple-400" />,
      title: "Exclusive Artist Network",
      description: "Join a community of world-class artists and share insights and opportunities."
    },
    {
      icon: <Share2 className="w-6 h-6 text-purple-400" />,
      title: "Social Integration",
      description: "Seamlessly promote your collectibles across all social media platforms."
    },
    {
      icon: <BarChart className="w-6 h-6 text-purple-400" />,
      title: "Fan Analytics",
      description: "Access detailed insights about your fan engagement and collectible performance."
    }
  ];

  return (
    <div className="space-y-8">
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80"
          alt="Music Performance"
          className="rounded-2xl h-48 w-full object-cover mb-8"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl" />
      </div>

      <div className="space-y-6">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-200"
          >
            <div className="p-2 bg-purple-900/50 rounded-lg">
              {benefit.icon}
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-1">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;