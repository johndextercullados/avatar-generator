import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Upload() {
  const navigate = useNavigate();
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center px-4 md:px-6 py-12 border-8 border-[#2c221e] relative"
      style={{
        /* --- SAME BACKGROUNFD NLNG SIGURO SA LAHAT --- */
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

      {/* --- WRAPPER, MAIN HOLDER --- */}
      <div className="w-full max-w-xl flex flex-col items-start space-y-4">

        {/* --- HEADER OF UPLOAD CARDDD --- */}
        <div className="w-full bg-[#fbf5e2]/85 backdrop-blur-[3px] p-8 rounded-2xl border-4 border-[#2c221e] shadow-2xl text-center flex flex-col items-center space-y-6">
          <div>
            <span className="bg-[#2c221e] text-[#f4ebd0] px-4 py-1 rounded-md text-[10px] font-black tracking-widest uppercase border border-[#baa07b]">
              Quest Step I: COVENANT
            </span>
            <h2 className="text-3xl font-black text-[#2c221e] font-serif mt-3">
              Reveal Thy Beauty
            </h2>
            <p className="text-[#453630]/80 text-xs font-semibold mt-1">
              Upload a clear, front-facing portrait to feed the avatar engine.
            </p>
          </div>

          {/* --- THE IMAGE DROPZONEE --- */}
          <div
            onClick={triggerFileInput}
            className="w-full aspect-square max-w-[280px] rounded-xl border-4 border-dashed border-[#2c221e]/40 hover:border-[#b85c38] bg-[#2c221e]/5 hover:bg-[#b85c38]/5 transition-all duration-200 cursor-pointer flex flex-col justify-center items-center p-4 relative overflow-hidden group shadow-inner"
          >
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/*"
              className="hidden"
            />

            {imagePreview ? (
              <img
                src={imagePreview}
                alt="Portrait Preview"
                className="w-full h-full object-cover rounded-md border-2 border-[#2c221e]"
              />
            ) : (
              <div className="flex flex-col items-center space-y-3 text-[#453630]/70 group-hover:text-[#b85c38] transition-colors duration-150">
                
                <span className="text-4xl">🖼️</span> {/* --- WALA mahanap emoji --- */}
                <p className="text-sm font-bold uppercase tracking-wider">Cast Image Here</p>
                <p className="text-[10px] font-medium opacity-60">or click to browse local files</p>
              </div>
            )}
          </div>

          {/* --- ACTION BUTTON --- */}
          <div className="w-full pt-2">
            <button
              onClick={() => navigate('/loading')}
              disabled={!imagePreview}
              className={`w-full font-bold text-base py-3.5 rounded-xl border-2 border-[#2c221e] uppercase tracking-wide transition-all duration-150 shadow-[0_4px_0_0_#5c2e1c] ${imagePreview
                  ? 'bg-[#b85c38] hover:bg-[#a04e2e] text-[#f4ebd0] cursor-pointer hover:translate-y-[2px] hover:shadow-[0_2px_0_0_#5c2e1c] active:translate-y-[4px] active:shadow-none'
                  : 'bg-gray-400/40 text-gray-500 border-gray-400 shadow-none cursor-not-allowed opacity-50'
                }`}
            >
              {imagePreview ? "Analyze Portrait ⚔️" : "Awaiting Portrait..."}
            </button>
          </div>
        </div>

        {/* --- GOING BACK TO 1ST PAGE --- */}
        <button
          onClick={() => navigate('/')}
          className="bg-[#2c221e] hover:bg-[#453630] text-[#f4ebd0] text-[10px] font-bold px-4 py-2 rounded border border-[#baa07b] uppercase tracking-wider transition-colors duration-150 shadow-md transform hover:scale-105 active:scale-95"
        >
          ⬅ Return to Camp
        </button>

      </div>
    </div>
  );
}