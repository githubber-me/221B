import { useState } from "react";
import InteractiveTerminal from "../components/InteractiveTerminal";
import MatrixRain from "../components/landing/MatrixRain";
import Header from "../components/landing/Header";
import Hero from "../components/landing/Hero";
import Features from "../components/landing/Features";
import Footer from "../components/landing/Footer";

const Index = () => {
  const [showFeatures, setShowFeatures] = useState(false);

  const handleAccessGranted = () => {
    setShowFeatures(true);
  };

  return (
    <div className="min-h-screen bg-cyber-black text-terminal-green font-terminal overflow-hidden relative">
      <MatrixRain />
      
      <Header />

      <main className="relative z-10 container mx-auto px-6 py-14">
        <Hero onAccessGranted={handleAccessGranted} />
        
        {showFeatures && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Features />
          </div>
        )}

        <InteractiveTerminal />

        <Footer />
      </main>
    </div>
  );
};

export default Index;
