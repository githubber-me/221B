// Footer component for the cyberpunk portfolio website
// Contains social media links and copyright information
// Includes themed styling consistent with the 221B aesthetic

import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
  { icon: <Github className="w-6 h-6" />, label: "GitHub", href: "https://github.com/githubber-me" },
  { icon: <Linkedin className="w-6 h-6" />, label: "LinkedIn", href: "https://linkedin.com/in/anthahkarana" },
  { icon: <Mail className="w-6 h-6" />, label: "Contact", href: "mailto:karanaonmail@gmail.com" }
];

const Footer: React.FC = () => {
  return (
    <footer className="text-center border-t border-terminal-green/20 pt-12">
      <div className="flex justify-center space-x-8 mb-8">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.href}
            className="text-terminal-green hover:text-terminal-bright-green transition-colors duration-300 hover:drop-shadow-[0_0_8px_rgba(57,255,20,0.8)]"
            aria-label={social.label}
          >
            {social.icon}
          </a>
        ))}
      </div>
      <p className="text-terminal-green/60 text-sm">
        © 2025 <a 
          href="https://anthahkarana.tech" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-terminal-green hover:text-terminal-bright-green transition-colors duration-300 hover:drop-shadow-[0_0_8px_rgba(57,255,20,0.8)]"
        >
          Anthahkarana
        </a>. All rights reserved. 
        <span className="text-terminal-green"> [SYSTEM_SECURED]</span>
      </p>
    </footer>
  );
};

export default Footer;
