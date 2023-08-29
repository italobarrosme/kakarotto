import { create } from 'zustand'

type SunStore = {
  sun: {
    color: string
  }
  setColor: (color: string) => void
}

export const useSunStore = create<SunStore>((set) => ({
  sun: {
    color: '#ffffff',
  },
  setColor: (color) => set({ sun: { color } }),
}))
