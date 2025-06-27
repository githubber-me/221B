
import React from 'react';
import { Code, Shield, Zap } from 'lucide-react';

const features = [
  {
    icon: <Code className="w-8 h-8" />,
    title: "LEARNING_BUILDER",
    description: "Technology as toolkit, not identity - building clean futures with responsible AI"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "IDEA_TRANSLATOR",
    description: "Transforming ideas from notebooks into thriving online experiences"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "COLLABORATOR",
    description: "Methodology-driven problem solving with brilliant associates and global impact"
  }
];

const Features: React.FC = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8 mb-20">
      {features.map((feature, index) => (
        <div
          key={index}
          className="bg-cyber-dark/50 border border-terminal-green/30 p-6 hover:border-terminal-bright-green hover:shadow-glow transition-all duration-300 backdrop-blur-sm"
        >
          <div className="text-terminal-bright-green mb-4">{feature.icon}</div>
          <h3 className="text-xl font-bold mb-3 text-terminal-green">{feature.title}</h3>
          <p className="text-terminal-green/70">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;
