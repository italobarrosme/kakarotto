'use client'

import { Overlay } from '@/modules/3ds/components'
import { GravityZero } from '@/modules/3ds/scenes/template'
import { Hero } from '@/shared/components/Hero'

export default function Home() {
  return (
    <main>
      <Hero>
        <Overlay>
          <div className="flex h-full flex-col items-center justify-center">
            <h1 className="text-6xl font-bold text-white">OrangeScreen</h1>
            <p className="text-2xl text-white">
              Transformando Ideias em Soluções Web
            </p>
          </div>
        </Overlay>
        <GravityZero />
      </Hero>
    </main>
  )
}
