import { create } from 'zustand'

type StoreIphone12 = {
  data: {
    color: string
  }
  setColor: (color: string) => void
}

export const useStoreIphone12 = create<StoreIphone12>((set) => ({
  data: {
    color: '#191919',
  },
  setColor: (color: string) =>
    set((state) => ({
      data: {
        ...state.data,
        color,
      },
    })),
}))
