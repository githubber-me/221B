// 404 Not Found page with terminal/cyber theme styling
// Displays error message in terminal format with matrix rain background
import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Terminal, ArrowLeft, AlertTriangle } from "lucide-react";
import Header from "../components/landing/Header";
import Footer from "../components/landing/Footer";

const NotFound = () => {
  const location = useLocation();
  const [displayText, setDisplayText] = useState("");
  const fullText = "NOT SO FAST!";

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

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
      <main className="relative z-10 container mx-auto px-6 py-14 flex items-center justify-center min-h-[calc(100vh-200px)]">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold terminal-glow glitch text-red-500" data-text={displayText}>
              {displayText}
            </span>
            <span className="cursor"></span>
          </div>

          {/* Terminal Window */}
          <div className="bg-cyber-dark border border-red-500/30 max-w-3xl mx-auto mb-12">
            <div className="bg-cyber-grey px-4 py-2 border-b border-red-500/30 flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-terminal-green"></div>
              <span className="text-terminal-green/70 text-sm ml-4">error@221B:~$</span>
            </div>
            <div className="p-6 font-mono text-terminal-green">
              
              <div className="mb-2">
                <span className="text-terminal-bright-green">client@221B</span>
                <span className="text-white">:</span>
                <span className="text-blue-400">~</span>
                <span className="text-white">$ </span>
                <span>cat /var/log/access.log | grep "{location.pathname}"</span>
              </div>
              
              <div className="mb-4 text-red-400 space-y-1">
                <div>ERROR: Sherlock doesn't want you seeing this yet.</div>
                <div>TIMESTAMP: {new Date().toISOString()}</div>
                <div>STATUS: UNAUTHORIZED ACCESS ATTEMPT</div>
              </div>
            </div>
          </div>

          {/* Error message and navigation */}
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-red-500 mb-2">[ACCESS_DENIED]</h2>
              <p className="text-terminal-green/80 mb-4">
                The requested terminal path '{location.pathname}' isn't available for your security level.
              </p>
              <p className="text-terminal-green/60 text-sm">
                This incident has been logged and reported to Mrs. Hudson.
              </p>
            </div>

                          <div className="flex justify-center">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center bg-transparent border-2 border-red-500 text-red-500 px-6 py-3 hover:bg-red-500 hover:text-cyber-black transition-all duration-300 uppercase tracking-wider font-bold hover:shadow-glow"
                >
                  <Terminal className="w-4 h-4 mr-2" />
                  [REPORT_ERROR]
                </Link>
              </div>
          </div>
        </div>

        <Footer />
      </main>
    </div>
  );
};

export default NotFound;
