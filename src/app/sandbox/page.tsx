'use client'

import { Overlay } from '@/modules/3ds/components'
import { GravityZero } from '@/modules/3ds/scenes'

export default function Sandbox() {
  return (
    <main className="relative h-screen overflow-scroll">
      <Overlay>
        <div className="flex h-full items-center justify-center">
          <h1 className="text-4xl font-bold text-brand-primary">
            TESTANDO MODELO IPHONE 12
          </h1>
        </div>
      </Overlay>
      <GravityZero />
    </main>
  )
}
