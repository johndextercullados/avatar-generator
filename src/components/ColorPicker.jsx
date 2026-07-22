import React from 'react';

// example lang, defined colors for now
const PALETTES = [
  { id: '#e2d5b6', name: 'Parchment', color: '#e2d5b6' },
  { id: '#d8e2dc', name: 'Sage', color: '#d8e2dc' },
  { id: '#ffe5ec', name: 'Blush', color: '#ffe5ec' },
  { id: '#d8f3dc', name: 'Forest', color: '#d8f3dc' },
  { id: '#e0aaff', name: 'Arcane', color: '#e0aaff' },
  { id: '#9bf6ff', name: 'Sky', color: '#9bf6ff' },
  { id: '#ffc6ff', name: 'Sunset', color: '#ffc6ff' },
  { id: '#2c221e', name: 'Obsidian', color: '#2c221e' },
];

export default function ColorPicker({ selectedColor, onSelectColor }) {
  return (
    <div className="space-y-2">
      <h4 className="text-xs font-black text-[#2c221e] uppercase tracking-widest border-b border-[#2c221e]/20 pb-1">
        Background Color 🎨
      </h4>
      <div className="flex flex-wrap gap-2">
        {PALETTES.map((p) => {
          const isSelected = selectedColor === p.color;
          return (
            <button
              key={p.id}
              onClick={() => onSelectColor && onSelectColor(p.color)}
              title={p.name}
              className={`w-9 h-9 rounded-full border-2 transition-all duration-150 flex items-center justify-center ${
                isSelected
                  ? 'border-[#baa07b] scale-110 shadow-lg ring-2 ring-[#2c221e]'
                  : 'border-[#2c221e]/30 hover:scale-105'
              }`}
              style={{ backgroundColor: p.color }}
            >
              {isSelected && (
                <span className={`text-xs ${p.color === '#2c221e' ? 'text-white' : 'text-[#2c221e]'}`}>
                  ✓
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}