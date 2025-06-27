import { useState, useEffect } from "react";
import { Terminal, Code, Shield, Zap, ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/landing/Header";
import Footer from "../components/landing/Footer";

const About = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "ABOUT.EXE";
  
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
            <span className="text-6xl md:text-8xl font-bold terminal-glow glitch" data-text={displayText}>
              {displayText}
            </span>
            <span className="cursor"></span>
          </div>
        </div>

        {/* Mission Statement and Philosophy */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-cyber-dark/50 border border-terminal-green/30 p-6 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-4 text-terminal-bright-green">[MISSION_STATEMENT]</h3>
            <p className="text-terminal-green/80 leading-relaxed">
            Building the next generation of web experiences—clean code, clean interfaces, and a cleaner future powered by ethical AI.
            </p>
          </div>
          
          <div className="bg-cyber-dark/50 border border-terminal-green/30 p-6 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-4 text-terminal-bright-green">[PHILOSOPHY]</h3>
            <p className="text-terminal-green/80 leading-relaxed">
              "Technology is my toolkit, not my identity. I build so that thoughts escape notebooks and thrive online."
            </p>
          </div>
        </div>

        {/* Terminal Window */}
        <div className="bg-cyber-dark border border-terminal-green/30 max-w-4xl mx-auto mb-12">
          <div className="bg-cyber-grey px-4 py-2 border-b border-terminal-green/30 flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-terminal-green"></div>
            <span className="text-terminal-green/70 text-sm ml-4">about@221B:~$</span>
          </div>
          <div className="p-6 font-mono text-terminal-green">
            <div className="mb-2">
              <span className="text-terminal-bright-green">client@221B</span>
              <span className="text-white">:</span>
              <span className="text-blue-400">~</span>
              <span className="text-white">$ </span>
              <span>cat profile.txt</span>
            </div>
            <div className="mb-4 text-terminal-green/80 space-y-2">
              <div>NAME: Anthahkarana</div>
              <div>STATUS: Software Developer</div>
              <div>SPECIALIZATION: Artificial Intelligence</div>
              <div>SECURITY_CLEARANCE: Level 0</div>
              <div>YEARS_ACTIVE: 2+</div>
            </div>
            <div className="mb-2">
              <span className="text-terminal-bright-green">client@221B</span>
              <span className="text-white">:</span>
              <span className="text-blue-400">~</span>
              <span className="text-white">$ </span>
              <span>cat skills.json</span>
            </div>
            <div className="mb-4 text-terminal-green/80 space-y-1">
              <div>{'{'}</div>
              <div>&nbsp;&nbsp;"languages": ["JavaScript", "TypeScript", "Python"],</div>
              <div>&nbsp;&nbsp;"frameworks": ["React", "Node.js", "Express", "Flutter", "Next.js"],</div>
              <div>&nbsp;&nbsp;"databases": ["PostgreSQL", "MongoDB"],</div>
              <div>&nbsp;&nbsp;"tools": ["Docker", "Git", "Cursor"],</div>
              <div>&nbsp;&nbsp;"expertise": ["AI", "Web Development", "Data Science"]</div>
              <div>{'}'}</div>
            </div>
            <div className="mb-2">
              <span className="text-terminal-bright-green">client@221B</span>
              <span className="text-white">:</span>
              <span className="text-blue-400">~</span>
              <span className="text-white">$ </span>
              <span>cat achievements.log</span>
            </div>
            <div className="mb-4 text-terminal-green/80 space-y-2">
              <div className="text-terminal-bright-green font-bold">[ACHIEVEMENT_UNLOCKED]</div>
              <div className="border-l-4 border-terminal-green/50 pl-4 space-y-1">
                <div className="text-yellow-400 font-bold">COMPETITION: CISCO FORECAST LEAGUE 2025</div>
                <div className="text-terminal-bright-green">STATUS: CHAMPIONS</div>
                                  <div className="text-terminal-green/90">ASSOCIATES: <a href="https://www.linkedin.com/in/aaryan-m-64410325a/" target="_blank" rel="noopener noreferrer" className="text-terminal-green/90 hover:text-terminal-bright-green transition-all duration-300 no-underline" style={{textDecoration: 'none', background: 'none', textShadow: 'none'}} onMouseEnter={(e) => (e.target as HTMLElement).style.textShadow = '0 0 10px #00ff41'} onMouseLeave={(e) => (e.target as HTMLElement).style.textShadow = 'none'}>Aaryan M</a>, <a href="https://smithas-canvas.netlify.app" target="_blank" rel="noopener noreferrer" className="text-terminal-green/90 hover:text-terminal-bright-green transition-all duration-300 no-underline" style={{textDecoration: 'none', background: 'none', textShadow: 'none'}} onMouseEnter={(e) => (e.target as HTMLElement).style.textShadow = '0 0 10px #00ff41'} onMouseLeave={(e) => (e.target as HTMLElement).style.textShadow = 'none'}>Smitha N</a></div>
                <div className="text-terminal-green/80 mt-2 leading-relaxed">
                  MISSION_LOG: Developed an ensemble ML forecasting system for 30 Cisco products.
                  <br />
                  Phase 1 and 2: College-level competition - VICTORY achieved with highest accuracy.
                  <br />
                  Phase 3: Inter-college championship - Presented our innovative methodology to global Cisco leadership.
                  <br />
                  FINAL_STATUS: Competition champions - Mission accomplished.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Button */}
        <div className="text-center mb-20">
          <Link 
            to="/projects" 
            className="inline-flex items-center bg-transparent border-2 border-terminal-green text-terminal-green px-8 py-4 hover:bg-terminal-green hover:text-cyber-black transition-all duration-300 uppercase tracking-wider font-bold hover:shadow-glow text-lg"
          >
            <span>[VIEW_PROJECTS]</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>

        <Footer />
      </main>
    </div>
  );
};

export default About;
