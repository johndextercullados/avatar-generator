import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Loading() {
  const navigate = useNavigate();
  const [tickerIndex, setTickerIndex] = useState(0);

  // list ng lalabas na text
  const loadingPhrases = [
    "Analyzing facial geometry...",
    "Extracting heroic attributes...",
    "Weaving retro pixel canvas...",
    "Skibidi toilet rizz",
    "Forging sprite equipment...",
    "Calibrating base stats..."
  ];

  useEffect(() => {
    // Cycle through loading phrases every 1.2 seconds
    const phraseInterval = setInterval(() => {
      setTickerIndex((prevIndex) => (prevIndex + 1) % loadingPhrases.length);
    }, 1200);

    // Simulate AI processing time and automatically push to customization screen
    const redirectTimeout = setTimeout(() => {
      navigate('/customize'); // This will be Phase 4!
    }, 6000);

    return () => {
      clearInterval(phraseInterval);
      clearTimeout(redirectTimeout);
    };
  }, [navigate]);

  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center px-4 md:px-6 py-12 border-8 border-[#2c221e] relative"
      style={{
        backgroundImage: `
          radial-gradient(#2c221e 1.2px, transparent 1.2px), 
          linear-gradient(to top, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.1) 15%, transparent 35%),
          url('/assets/design/bg-castle.png')
        `,
        backgroundSize: '24px 24px, 100% 100%, cover',
        backgroundPosition: 'center, center, center',
        backgroundRepeat: 'repeat, no-repeat, no-repeat'
      }}
    >
      {/* MAIN LOADING CARD */}
      <div className="w-full max-w-md bg-[#fbf5e2]/85 backdrop-blur-[3px] p-8 rounded-2xl border-4 border-[#2c221e] shadow-2xl text-center flex flex-col items-center space-y-6">

        {/* THEE MAIN ICON LOADING */}
        <div className="relative flex items-center justify-center my-4">
          {/* PULSATING EFFECT */}
          <div className="absolute w-20 h-20 bg-[#b85c38]/20 rounded-full animate-ping"></div>
          <div className="w-16 h-16 bg-[#2c221e] border-2 border-[#baa07b] rounded-full flex items-center justify-center shadow-lg animate-pulse">
            <span className="text-2xl animate-spin [animation-duration:3s]">🔮</span>
          </div>
        </div>

        {/* LOADING TEXT HEADER */}
        <div>
          <h2 className="text-2xl font-black text-[#2c221e] font-serif uppercase tracking-wide">
            Transmuting Likeness
          </h2>
          <div className="h-6 mt-2 flex items-center justify-center">
            {/* The Dynamic Quest Ticker */}
            <p className="text-[#b85c38] text-xs font-black uppercase tracking-widest transition-all duration-300">
              {loadingPhrases[tickerIndex]}
            </p>
          </div>
        </div>

        {/* PROGRESS BARRR */}
        <div className="w-full bg-[#2c221e]/10 h-3 rounded-full overflow-hidden border border-[#2c221e]/20 p-[2px]">
          <div className="bg-[#b85c38] h-full rounded-full animate-[loading_6s_linear_forwards] border border-[#5c2e1c]"></div>
        </div>
      </div>
    </div>
  );
}