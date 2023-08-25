'use client'

import { GravityZero } from '@/modules/3ds/scenes'

export default function Sandbox() {
  return (
    <main className="h-screen overflow-auto">
      <div className="flex flex-row items-center justify-center">
        <div className="flex h-96 w-1/2 items-center justify-center bg-brand-primary text-brand-light">
          TESTANDO OUTROS COMPONENTES JUNTOS DO 3D
        </div>
        <div className="relative h-96 w-1/2">
          <GravityZero />
        </div>
      </div>
      {Array.from({ length: 5 }, (_, i) => (
        <>
          <div className="h-32 border bg-brand-dark">div {i}</div>
        </>
      ))}
    </main>
  )
}
