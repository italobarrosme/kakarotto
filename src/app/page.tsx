'use client'

import { Overlay } from '@/modules/3ds/components'
import { GravityZero } from '@/modules/3ds/scenes/template'
import { BudgetTemplate } from '@/modules/budget/template'
import { Hero } from '@/shared/components/Hero'

export default function Home() {
  return (
    <main>
      <Hero>
        <Overlay>
          <div className="flex h-full flex-col items-center justify-center">
            <h1 className="text-5xl font-bold text-white sm:text-6xl">
              OrangeScreen
            </h1>
            <p className="text-base text-white sm:text-2xl">
              Transformando Ideias em Soluções Web
            </p>
            <BudgetTemplate />
          </div>
        </Overlay>
        <GravityZero />
      </Hero>
    </main>
  )
}
