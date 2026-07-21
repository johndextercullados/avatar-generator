import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Editing() {
  const navigate = useNavigate();

  return (
    <div
      /* BACKGROUND */
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
      {/* HEADER AND NAVIGATIONNN */}
      <div className="w-full max-w-6xl flex justify-between items-center bg-[#fbf5e2]/85 backdrop-blur-[3px] p-4 rounded-xl border-2 border-[#2c221e] shadow-lg mb-6 z-10">
        <button
          onClick={() => navigate('/upload')}
          className="bg-[#2c221e] hover:bg-[#453630] text-[#f4ebd0] text-xs font-bold px-3 py-1.5 rounded border border-[#baa07b] uppercase tracking-wider transition-colors duration-150 shadow-md"
        >
          ⬅ Retake Covenant
        </button>

        <div className="text-center">
          <span className="bg-[#2c221e] text-[#f4ebd0] px-3 py-0.5 rounded text-[10px] font-black tracking-widest uppercase border border-[#baa07b]">
            Quest Step II: Customization
          </span>
          <h1 className="text-xl md:text-2xl font-black text-[#2c221e] font-serif mt-0.5">
            Avatar Forging Workshop
          </h1>
        </div>

        <button
          onClick={() => navigate('/download')}
          className="bg-[#b85c38] hover:bg-[#a04e2e] text-[#f4ebd0] text-xs font-bold px-4 py-2 rounded-lg border-2 border-[#2c221e] uppercase tracking-wider transition-all duration-150 shadow-[0_3px_0_0_#5c2e1c] hover:translate-y-[1px] hover:shadow-[0_1px_0_0_#5c2e1c] active:translate-y-[3px] active:shadow-none"
        >
          Export Avatar ⚔️
        </button>
      </div>

      {/* MAIN WORKSPACE PLACEHOLDER */}
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto z-10">

        {/* LEFT COLUMN - MAIN SCREEN */}
        <div className="lg:col-span-5 bg-[#fbf5e2]/85 backdrop-blur-[3px] p-6 rounded-2xl border-4 border-[#2c221e] shadow-2xl flex flex-col items-center justify-center min-h-[420px]">
          <h3 className="text-xs font-black text-[#2c221e] uppercase tracking-widest mb-4">
            ✦ Hero Portrait Display ✦
          </h3>
          <div className="w-64 h-64 border-2 border-dashed border-[#2c221e]/40 rounded-xl flex items-center justify-center bg-[#2c221e]/5">
            <span className="text-xs font-bold text-[#453630]">Chibi Canvas Area</span>
          </div>
        </div>

        {/* RIGHT COLUMN - CUSTOMIZATION AREAA */}
        <div className="lg:col-span-7 bg-[#fbf5e2]/85 backdrop-blur-[3px] p-6 md:p-8 rounded-2xl border-4 border-[#2c221e] shadow-2xl space-y-6">
          <h3 className="text-xs font-black text-[#2c221e] uppercase tracking-widest border-b border-[#2c221e]/20 pb-2">
            ✦ Customization Controls ✦
          </h3>
          <p className="text-xs font-semibold text-[#453630]/80">
            Select gear, terrain, and color palettes below once components are populated!
          </p>
        </div>

      </div>

      <div className="h-4 w-full opacity-0"></div>
    </div>
  );
}