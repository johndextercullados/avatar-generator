import React from 'react';

export default function FrameToggle({ hasFrame, onToggleFrame }) {
  return (
    <div className="flex items-center justify-between bg-[#fbf5e2] p-3 rounded-xl border-2 border-[#2c221e]/30">
      <div className="flex items-center space-x-2">
        <span className="text-lg">🖼️</span>
        <span className="text-xs font-bold text-[#2c221e] uppercase tracking-wider">
          Add Gold Border
        </span>
        <span className="text-lg">🖼️</span>
      </div>
      <button
        onClick={() => onToggleFrame && onToggleFrame(!hasFrame)}
        className={`px-4 py-1.5 rounded-lg text-xs font-black uppercase transition-all duration-150 border-2 ${
          hasFrame
            ? 'bg-[#2c221e] text-[#f4ebd0] border-[#baa07b] shadow-md'
            : 'bg-transparent text-[#2c221e]/60 border-[#2c221e]/30 hover:border-[#2c221e]'
        }`}
      >
        {hasFrame ? 'Enabled' : 'Disabled'}
      </button>
    </div>
  );
}