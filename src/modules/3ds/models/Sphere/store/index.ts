import { create } from 'zustand'

type StoreSphere = {
  data: {
    colorCurrent: string
  }
  setColorCurrent: (colorCurrent: string) => void
}

export const useStoreSphere = create<StoreSphere>((set) => ({
  data: {
    colorCurrent: '#fda000',
  },
  setColorCurrent: (colorCurrent: string) =>
    set((state) => ({
      data: {
        ...state.data,
        colorCurrent,
      },
    })),
}))
