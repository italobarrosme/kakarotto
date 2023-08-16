'use client'

import { Overlay } from '@/modules/3ds/components'
import { GravityZero } from '@/modules/3ds/scenes'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sanbox 3d',
  description: 'Page for interaction with 3d models',
}

export default function Sandbox() {
  return (
    <main className="relative h-screen overflow-scroll">
      <Overlay className="w-1/2 bg-brand-secondary">
        <div className="flex h-full items-center justify-center">
          <h1 className="text-4xl font-bold text-brand-light">
            CLICK NO MODELO 3D
          </h1>
        </div>
      </Overlay>
      <GravityZero />
    </main>
  )
}
