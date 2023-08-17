import { create } from 'zustand'

type StoreIphone12 = {
  data: {
    color: string
  }
  setColor: (color: string) => void
}

export const storeIphone12 = create<StoreIphone12>((set) => ({
  data: {
    color: 'black',
  },
  setColor: (color: string) =>
    set((state) => ({
      data: {
        ...state.data,
        color,
      },
    })),
}))
