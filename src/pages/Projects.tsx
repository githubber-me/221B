import { useState, useEffect } from "react";
import { Terminal, Code, Shield, Zap, ArrowLeft, Github, ExternalLink, Award } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/landing/Header";
import Footer from "../components/landing/Footer";

const Projects = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "PROJECTS.SYS";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const projects = [
    {
      id: "001",
      name: "CISCO_FORECASTER",
      description: "An Ensemble ML method to predict the sales of Cisco Products. Winner of Cisco Forecast League 2025.",
      tech: ["Python", "Streamlit"],
      status: "CLASSIFIED",
      threat_level: "RED",
      links: {
        certificate: "https://credsverse.com/credentials/23e80815-b969-489b-88cb-5c08e55bc877?preview=1",
      }
    },
    {
      id: "002", 
      name: "LEARN_KANNADA",
      description: "An AI Powered Full Stack Kannada Learning Application for English Speakers.",
      tech: ["TypeScript", "React", "Next.js"],
      status: "ACTIVE",
      threat_level: "YELLOW",
      links: {
        demo: "learnkannada.app",
      }
    },
    {
      id: "003",
      name: "TRASH_TRACK",
      description: "An End-To-End Waste Management Application for Metropolitan Cities.",
      tech: ["Flutter", "Python", "Firebase", "Arduino"],
      status: "CLASSIFIED",
      threat_level: "RED"
    },
    {
      id: "004", 
      name: "MONOLETTER",
      description: "A Very Minimal Typewriter themed Portfolio website Template. Open Source.",
      tech: ["TypeScript", "React"],
      status: "ACTIVE",
      threat_level: "GREEN",
      links: {
        demo: "monoletter.vercel.app",
        source: "https://github.com/githubber-me/monoletter"
      }
    },
    {
      id: "005", 
      name: "221B",
      description: "A Matrix Themed Portfolio Website with Supabase Integration. Open Source.",
      tech: ["TypeScript", "React", "Supabase"],
      status: "ACTIVE",
      threat_level: "GREEN",
      links: {
        demo: "221B.vercel.app",
        source: "https://github.com/githubber-me/221B"
      }
    }
    
  ];

  return (
    <div className="min-h-screen bg-cyber-black text-terminal-green font-terminal overflow-hidden relative">
      {/* Matrix rain background effect */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-terminal-green text-sm animate-matrix-rain"
            style={{
              left: `${i * 5}%`,
              animationDelay: `${i * 0.1}s`,
              animationDuration: `${3 + (i % 3)}s`
            }}
          >
            {Array.from({ length: 20 }, (_, j) => (
              <div key={j} className="opacity-60">
                {String.fromCharCode(65 + Math.random() * 26)}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Navigation */}
      <Header />

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-6 py-14">

        <div className="text-center mb-16">
          <div className="mb-8">
            <span className="text-5xl sm:text-4xl md:text-6xl lg:text-8xl font-bold terminal-glow glitch" data-text={displayText}>
              {displayText}
            </span>
            <span className="cursor"></span>
          </div>
        </div>

        {/* Terminal Window */}
        <div className="bg-cyber-dark border border-terminal-green/30 max-w-6xl mx-auto mb-12">
          <div className="bg-cyber-grey px-4 py-2 border-b border-terminal-green/30 flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-terminal-green"></div>
            <span className="text-terminal-green/70 text-sm ml-4">projects@221B:~$</span>
          </div>
          <div className="p-6 font-mono text-terminal-green">
            <div className="mb-2">
              <span className="text-terminal-bright-green">client@221B</span>
              <span className="text-white">:</span>
              <span className="text-blue-400">~</span>
              <span className="text-white">$ </span>
              <span>ls -la projects/</span>
            </div>
            <div className="mb-4 text-terminal-green/80 space-y-1">
              <div>total {projects.length}</div>
              <div>drwxr-xr-x 3 root root 4096 {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} ./</div>
              <div>drwxr-xr-x 3 root root 4096 {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} ../</div>
              {projects.map((project) => (
                <div key={project.id}>
                  -rwxr-xr-x 1 root root 2048 {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} {project.name.toLowerCase()}/
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-cyber-dark/50 border border-terminal-green/30 p-6 hover:border-terminal-bright-green hover:shadow-glow transition-all duration-300 backdrop-blur-sm"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="text-terminal-bright-green font-bold">
                  [{project.id}]
                </div>
                <div className={`px-2 py-1 text-xs border rounded ${
                  project.threat_level === "GREEN" ? "border-green-500 text-green-500" :
                  project.threat_level === "YELLOW" ? "border-yellow-500 text-yellow-500" :
                  project.threat_level === "RED" ? "border-red-500 text-red-500" :
                  project.threat_level === "PINK" ? "border-pink-500 text-pink-500" :
                  "border-gray-500 text-gray-500"
                }`}>
                  {project.threat_level}
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-terminal-green">{project.name}</h3>
              <p className="text-terminal-green/70 mb-4 text-sm">{project.description}</p>
              
              <div className="mb-4">
                <div className="text-terminal-bright-green text-xs mb-2">TECH_STACK:</div>
                <div className="flex flex-wrap gap-1">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-terminal-green/10 border border-terminal-green/30 px-2 py-1 text-xs text-terminal-green"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mb-4">
                <span className="text-terminal-bright-green text-xs">STATUS: </span>
                <span className="text-terminal-green/80 text-xs">{project.status}</span>
              </div>
              
              {project.links && Object.keys(project.links).length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {Object.entries(project.links).map(([linkType, url]) => {
                    const getLinkConfig = (type: string) => {
                      switch (type.toLowerCase()) {
                        case 'source':
                        case 'github':
                          return { icon: <Github className="w-4 h-4" />, label: '[SOURCE]' };
                        case 'demo':
                        case 'live':
                          return { icon: <ExternalLink className="w-4 h-4" />, label: '[DEMO]' };
                        case 'certificate':
                        case 'cert':
                          return { icon: <Award className="w-4 h-4" />, label: '[CERTIFICATE]' };
                        default:
                          return { icon: <ExternalLink className="w-4 h-4" />, label: `[${type.toUpperCase()}]` };
                      }
                    };
                    
                    const { icon, label } = getLinkConfig(linkType);
                    const fullUrl = url.startsWith('http') ? url : `https://${url}`;
                    
                    return (
                      <a
                        key={linkType}
                        href={fullUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 text-terminal-green hover:text-terminal-bright-green transition-colors text-sm hover:drop-shadow-[0_0_5px_rgba(57,255,20,0.8)]"
                      >
                        {icon}
                        <span>{label}</span>
                      </a>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>

        <Footer />
      </main>
    </div>
  );
};

export default Projects;
