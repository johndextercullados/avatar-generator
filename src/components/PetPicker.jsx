import React from 'react';

const PETS = [
  { id: 'none', name: 'None', src: null },
  { id: 'axo', name: 'Axolotl', src: '/assets/pets/axo.png' },
  { id: 'dragon', name: 'Dragon', src: '/assets/pets/dragon.png' },
  { id: 'frog', name: 'Frog', src: '/assets/pets/frog.png' },
  { id: 'sheep', name: 'Sheep', src: '/assets/pets/sheep.png' },
  { id: 'slime', name: 'Slime', src: '/assets/pets/slime.png' },
  { id: 'snowman', name: 'Snowman', src: '/assets/pets/snowman.png' },
];

export default function PetPicker({ selectedPet, onSelectPet }) {
  return (
    <div className="space-y-2">
      <h4 className="text-xs font-black text-[#2c221e] uppercase tracking-widest border-b border-[#2c221e]/20 pb-1">
        Select Loyal Companion 🐾 
      </h4>
      <div className="grid grid-cols-6 gap-2">
        {PETS.map((p) => {
          const isSelected = selectedPet === p.id;
          return (
            <button
              key={p.id}
              onClick={() => onSelectPet && onSelectPet(p.id)}
              className={`flex flex-col items-center p-2 rounded-xl border-2 transition-all duration-150 ${
                isSelected
                  ? 'bg-[#2c221e] text-[#f4ebd0] border-[#baa07b] shadow-md scale-105'
                  : 'bg-[#fbf5e2] text-[#2c221e] border-[#2c221e]/30 hover:border-[#2c221e]'
              }`}
            >
              {p.src ? (
                <img src={p.src} alt={p.name} className="w-10 h-10 object-contain mb-1" />
              ) : (
                <div className="w-10 h-10 flex items-center justify-center text-xs font-bold text-[#2c221e]/50">🚫</div>
              )}
              <span className="text-[10px] font-bold uppercase">{p.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}