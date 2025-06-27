import React, { useState, useEffect } from 'react';

interface HeroProps {
  onAccessGranted: () => void;
}

const Hero: React.FC<HeroProps> = ({ onAccessGranted }) => {
  const [displayText, setDisplayText] = useState("");
  const [isAccessGranted, setIsAccessGranted] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const fullText = "WELCOME TO HACKER STREET";
  
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

  const handleButtonClick = () => {
    if (!isAccessGranted) {
      setButtonClicked(true);
      
      // Simulate loading/processing time
      setTimeout(() => {
        setIsAccessGranted(true);
        setButtonClicked(false);
        onAccessGranted(); // Trigger showing the features
      }, 1000);
    }
  };

  return (
    <div className="text-center mb-16">
      <div className="mb-8">
        <span className="text-6xl md:text-8xl font-bold terminal-glow glitch" data-text={displayText}>
          {displayText}
        </span>
        <span className="cursor"></span>
      </div>
      
      <p className="text-xl md:text-2xl text-terminal-green/80 mb-8 max-w-3xl mx-auto">
        &gt; Elementary, my dear Watson – witness how I transform ideas into interactive experiences.
      </p>
      
      <div className="flex justify-center">
        <button 
          onClick={handleButtonClick}
          disabled={buttonClicked}
          className={`px-8 py-3 transition-all duration-300 uppercase tracking-wider font-bold transform active:scale-95 ${
            isAccessGranted
              ? 'bg-terminal-green text-cyber-black hover:bg-terminal-bright-green'
              : 'bg-transparent border-2 border-terminal-green text-terminal-green hover:bg-terminal-green hover:text-cyber-black hover:shadow-glow'
          } ${
            buttonClicked ? 'animate-pulse scale-105 shadow-glow-lg opacity-75 cursor-not-allowed' : ''
          }`}
        >
          {buttonClicked ? '[PROCESSING...]' : (isAccessGranted ? '[ACCESS_GRANTED]' : '[ENTER_SYSTEM]')}
        </button>
      </div>
    </div>
  );
};

export default Hero;
