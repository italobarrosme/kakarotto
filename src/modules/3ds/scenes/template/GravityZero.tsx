'use client'

import { Canvas } from '@react-three/fiber'
import { Environment, PerformanceMonitor } from '@react-three/drei'
import { FloatingPieces } from '@/modules/3ds/animations/FloatingPieces'
import { Suspense, useState } from 'react'
import { PalmsModel } from '../../models/Palms'

type GravityZeroProps = {
  environment: string
  model: string
}

export const GravityZero = ({ environment, model }: GravityZeroProps) => {
  const easing = (x: any) => Math.sqrt(1 - Math.pow(x - 1, 2))
  const [dpr, setDpr] = useState(1.5)

  return (
    <Suspense fallback={''}>
      <Canvas
        gl={{ antialias: false }}
        dpr={dpr}
        camera={{ position: [0, 0, 10], fov: 20, near: 0.01, far: 80 + 15 }}
      >
        <PerformanceMonitor
          onIncline={() => setDpr(3)}
          onDecline={() => setDpr(1)}
        >
          <color attach="background" args={['#121E1E']} />

          <Environment files={environment} />
          {Array.from({ length: 110 }, (_, i) => (
            <FloatingPieces
              key={i}
              index={i}
              z={Math.round(easing(i / 80) * 70)}
              speed={1.3}
              model={
                <mesh
                  visible
                  userData={{ hello: 'gravityzero' }}
                  position={[1, 2, 3]}
                  rotation={[Math.PI / 2, 0, 0]}
                >
                  {/* <Sphere /> */}
                  <PalmsModel glbPath={model} />
                </mesh>
              }
            />
          ))}
          <spotLight
            intensity={0}
            angle={90}
            penumbra={1}
            position={[10, 30, 10]}
            castShadow
            shadow-mapSize={[512, 512]}
            color={'#ffffff'}
          />
          <ambientLight intensity={0.6} />
        </PerformanceMonitor>
      </Canvas>
    </Suspense>
  )
}
