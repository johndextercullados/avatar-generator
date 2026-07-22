import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ChibiCanvas from '../components/ChibiCanvas';

export default function Download() {
  const navigate = useNavigate();
  const location = useLocation();

  // Retrieve state passed from Editing page - nagpapasa ng data
  const heroData = location.state || {
    selectedTerrain: 'meadow',
    selectedPet: 'axo',
    bgColor: '#e2d5b6',
    hasFrame: false,
  };

  const [heroName, setHeroName] = useState('Brave Adventurer');

  return (
    <div 
      className="min-h-screen flex flex-col justify-between items-center px-4 md:px-8 py-8 border-8 border-[#2c221e] relative"
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

      {/* TOP HEADER */}
      <div className="w-full max-w-4xl flex justify-between items-center bg-[#fbf5e2]/85 backdrop-blur-[3px] p-4 rounded-xl border-2 border-[#2c221e] shadow-lg mb-6 z-10">
        <button 
          onClick={() => navigate('/edit')}
          className="bg-[#2c221e] hover:bg-[#453630] text-[#f4ebd0] text-xs font-bold px-3 py-1.5 rounded border border-[#baa07b] uppercase tracking-wider transition-colors duration-150 shadow-md"
        >
          ⬅ Back to Workshop
        </button>

        <div className="text-center">
          <span className="bg-[#2c221e] text-[#f4ebd0] px-3 py-0.5 rounded text-[10px] font-black tracking-widest uppercase border border-[#baa07b]">
            Quest Step III: Adventure
          </span>
          <h1 className="text-xl md:text-2xl font-black text-[#2c221e] font-serif mt-0.5">
            Hero Guild Registration
          </h1>
        </div>

        <button 
          onClick={() => navigate('/')}
          className="bg-[#2c221e] hover:bg-[#453630] text-[#f4ebd0] text-xs font-bold px-3 py-1.5 rounded border border-[#baa07b] uppercase tracking-wider transition-colors duration-150 shadow-md"
        >
          New Quest 🏰
        </button>
      </div>

      {/* MAIN HERO CARD PREVIEW */}
      <div className="w-full max-w-4xl bg-[#fbf5e2]/90 backdrop-blur-[4px] p-6 md:p-10 rounded-2xl border-4 border-[#2c221e] shadow-2xl z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center my-auto">
        
        {/* LEFT COLUMN: HERO AVATAR DISPLAY */}
        <div className="md:col-span-5 flex flex-col items-center justify-center space-y-4">
          <div className="p-3 bg-[#2c221e] rounded-2xl border-2 border-[#baa07b] shadow-xl">
            <ChibiCanvas 
              terrain={heroData.selectedTerrain}
              pet={heroData.selectedPet}
              bgColor={heroData.bgColor}
              hasFrame={heroData.hasFrame}
              imageSrc={heroData.imageUrl}
            />
          </div>
        </div>

        {/* RIGHT COLUMN: HERO GUILD CARD & DOWNLOAD ACTIONS */}
        <div className="md:col-span-7 space-y-6">
          <div>
            <label className="text-[10px] font-black text-[#2c221e] uppercase tracking-widest block mb-1">
              Hero Name / Alias
            </label>
            <input 
              type="text"
              value={heroName}
              onChange={(e) => setHeroName(e.target.value)}
              className="w-full bg-[#fbf5e2] text-[#2c221e] font-serif font-bold text-xl px-4 py-2 rounded-xl border-2 border-[#2c221e] focus:outline-none focus:ring-2 focus:ring-[#baa07b]"
              placeholder="Enter Hero Name..."
            />
          </div>

          <div className="bg-[#2c221e]/5 p-4 rounded-xl border border-[#2c221e]/20 space-y-2 text-xs font-semibold text-[#2c221e]">
            <div className="flex justify-between">
              <span className="opacity-70">Realm Terrain:</span>
              <span className="font-bold uppercase">{heroData.selectedTerrain}</span>
            </div>
            <div className="flex justify-between">
              <span className="opacity-70">Companion:</span>
              <span className="font-bold uppercase">{heroData.selectedPet}</span>
            </div>
            <div className="flex justify-between">
              <span className="opacity-70">Status:</span>
              <span className="font-bold text-[#b85c38]">Ready for Adventure ⚔️</span>
            </div>
          </div>

          {/* DOWNLOAD BUTTON */}
          <div className="pt-2">
            <button 
              onClick={() => alert(`Hero "${heroName}" exported successfully!`)}
              className="w-full bg-[#b85c38] hover:bg-[#a04e2e] text-[#f4ebd0] text-sm font-black py-3 rounded-xl border-2 border-[#2c221e] uppercase tracking-widest transition-all duration-150 shadow-[0_4px_0_0_#5c2e1c] hover:translate-y-[1px] hover:shadow-[0_2px_0_0_#5c2e1c] active:translate-y-[4px] active:shadow-none flex items-center justify-center space-x-2"
            >
              <span>Download Avatar Portrait</span>
              <span>💾</span>
            </button>
          </div>
        </div>

      </div>

      <div className="h-4 w-full opacity-0"></div>
    </div>
  );
}