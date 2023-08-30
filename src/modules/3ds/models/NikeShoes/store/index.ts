import { create } from 'zustand'

type MaterialNikeShoe = {
  body: {
    color: string
  }
  sole: {
    color: string
  }
  laces: {
    color: string
  }
  logo: {
    left: {
      color: string
    }
    right: {
      color: string
    }
  }
  flap: {
    color: string
  }
  tag: {
    color: string
  }
}

type NikeShoesStore = {
  materials: MaterialNikeShoe
  setColor: (key: keyof MaterialNikeShoe, color: string) => void
}

export const useNikeShoesStore = create<NikeShoesStore>((set) => ({
  materials: {
    body: {
      color: '#f9f9f9',
    },
    sole: {
      color: '#f9f9f9',
    },
    laces: {
      color: '#f9f9f9',
    },
    logo: {
      left: {
        color: '#f9f9f9',
      },
      right: {
        color: '#f9f9f9',
      },
    },
    flap: {
      color: '#f9f9f9',
    },
    tag: {
      color: '#f9f9f9',
    },
  },

  setColor: (key, color) =>
    set((state) => ({
      materials: {
        ...state.materials,
        [key]: {
          ...state.materials[key],
          color,
        },
      },
    })),
}))
