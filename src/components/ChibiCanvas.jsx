import React from 'react';

export default function ChibiCanvas({ 
  imageSrc, 
  terrain = 'meadow', 
  pet = null, 
  hasFrame = false,
  bgColor = '#e2d5b6' 
}) {
  return (
    <div 
      className={`relative w-64 h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden border-4 border-[#2c221e] shadow-inner flex items-center justify-center transition-all ${
        hasFrame ? 'ring-4 ring-[#baa07b] ring-offset-2 ring-offset-[#2c221e]' : ''
      }`}
      
      /* BG LAYER - FROM COLOR PICKER */
      style={{ backgroundColor: bgColor }}
    >
{/* THE CANVAS IS SEPARATED BY LAYER, PATONG PATONG LANG NG IMAGES:
    1. BG COLOR
    2. TERRAIN LAYER
    3. MAIN AVATAR
    4. PET COMPANION
    5. FRAME OVERLAY
*/}

      {/* TERRAIN LAYER */}
      {terrain && terrain !== 'none' && (
        <img 
          src={`/assets/terrains/${terrain}.png`} 
          alt={terrain}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
      )}

      {/* MAIN AVATAR */}
      {imageSrc ? (
        <img 
          src={imageSrc} 
          alt="Hero Chibi Sprite" 
          className="w-full h-full object-cover z-10 relative"
        />
      ) : (
        <div className="z-10 flex flex-col items-center justify-center p-4 text-center">
          <span className="text-5xl mb-2 animate-bounce">🧙‍♂️</span>
        </div>
      )}

      {/* PET COMPANION */}
      {pet && pet !== 'none' && (
        <img 
          src={`/assets/pets/${pet}.png`} 
          alt={pet}
          className="absolute bottom-2 right-2 w-16 h-16 object-contain z-20 drop-shadow-md"
        />
      )}

      {/* FRAME */}
      {hasFrame && (
        <div className="absolute inset-0 border-8 border-[#baa07b] pointer-events-none z-30 rounded-xl" />
      )}
    </div>
  );
}