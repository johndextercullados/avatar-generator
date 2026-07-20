import { create } from 'zustand';

export const useAvatarStore = create((set) => ({
  uploadedImage: null,       
  chibiCandidates: [],      
  selectedChibi: null,       
  
  frameRatio: '1:1',         
  backgroundColor: '#ffffff', 
  selectedTerrain: null,    
  selectedPet: null,        

  setUploadedImage: (image) => set({ uploadedImage: image }),
  setChibiCandidates: (candidates) => set({ chibiCandidates: candidates }),
  setSelectedChibi: (chibi) => set({ selectedChibi: chibi }),
  
  setFrameRatio: (ratio) => set({ frameRatio: ratio }),
  setBackgroundColor: (color) => set({ backgroundColor: color }),
  setSelectedTerrain: (terrain) => set({ selectedTerrain: terrain }),
  setSelectedPet: (pet) => set({ selectedPet: pet }),

  resetStore: () => set({
    uploadedImage: null,
    chibiCandidates: [],
    selectedChibi: null,
    frameRatio: '1:1',
    backgroundColor: '#ffffff',
    selectedTerrain: null,
    selectedPet: null,
  }),
}));