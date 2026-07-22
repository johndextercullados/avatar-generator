import React from 'react';

const TERRAINS = [
  { id: 'none', name: 'None', src: null },
  { id: 'deck', name: 'Deck', src: '/assets/terrains/deck.png' },
  { id: 'meadow', name: 'Meadow', src: '/assets/terrains/meadow.png' },
  { id: 'plains', name: 'Plains', src: '/assets/terrains/plains.png' },
  { id: 'pond', name: 'Pond', src: '/assets/terrains/pond.png' },
  { id: 'rocky', name: 'Rocky', src: '/assets/terrains/rocky.png' },
];

export default function TerrainPicker({ selectedTerrain, onSelectTerrain }) {
  return (
    <div className="space-y-2">
      <h4 className="text-xs font-black text-[#2c221e] uppercase tracking-widest border-b border-[#2c221e]/20 pb-1">
        Select Realm Terrain ⛰️
      </h4>
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
        {TERRAINS.map((t) => {
          const isSelected = selectedTerrain === t.id;
          return (
            <button
              key={t.id}
              onClick={() => onSelectTerrain && onSelectTerrain(t.id)}
              className={`flex flex-col items-center justify-center p-2 rounded-xl border-2 transition-all duration-150 min-h-[64px] ${
                isSelected
                  ? 'bg-[#2c221e] text-[#f4ebd0] border-[#baa07b] shadow-md scale-105'
                  : 'bg-[#fbf5e2] text-[#2c221e] border-[#2c221e]/30 hover:border-[#2c221e]'
              }`}
            >
              {t.src ? (
                <img src={t.src} alt={t.name} className="w-8 h-8 object-contain mb-1" />
              ) : (
                <div className="w-8 h-8 flex items-center justify-center text-sm font-bold text-[#2c221e]/60 mb-1">
                  🚫
                </div>
              )}
              <span className="text-[10px] font-bold uppercase">{t.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}