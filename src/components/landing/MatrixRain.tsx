
import React from 'react';

const MatrixRain: React.FC = () => {
  return (
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
  );
};

export default MatrixRain;
