'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Edges, CameraControls, Environment } from '@react-three/drei'
import { EffectComposer, DepthOfField } from '@react-three/postprocessing'
import { Eye } from '../3ds/eye'
import { Sun } from '../3ds/sun'

export default function Sandbox() {
  const easing = (x: any) => Math.sqrt(1 - Math.pow(x - 1, 2))

  return (
    <main className="h-screen bg-slate-950">
      <Canvas
        gl={{ antialias: false }}
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 10], fov: 20, near: 0.01, far: 80 + 15 }}
      >
        <spotLight
          position={[10, 20, 10]}
          penumbra={1}
          intensity={3}
          color="orange"
        />
        <Edges></Edges>
        <Environment preset="warehouse" />
        {Array.from({ length: 120 }, (_, i) => (
          <Eye
            key={i}
            index={i}
            z={Math.round(easing(i / 80) * 80)}
            speed={1}
          />
        ))}
      </Canvas>
    </main>
  )
}
