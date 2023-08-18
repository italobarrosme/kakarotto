import { Canvas } from '@react-three/fiber'
import {
  Edges,
  CameraControls,
  Environment,
  PerformanceMonitor,
} from '@react-three/drei'
import { EffectComposer, DepthOfField } from '@react-three/postprocessing'
import { FloatingPieces } from '@/modules/3ds/animations/FloatingPieces'
import { Sun, Iphone12 } from '@/modules/3ds/models/'
import { Suspense, useState } from 'react'

export const GravityZero = () => {
  const easing = (x: any) => Math.sqrt(1 - Math.pow(x - 1, 2))
  const [dpr, setDpr] = useState(1.5)

  return (
    <Suspense fallback={<span></span>}>
      <Canvas
        gl={{ antialias: false }}
        dpr={dpr}
        camera={{ position: [0, 0, 10], fov: 20, near: 0.01, far: 80 + 15 }}
      >
        <PerformanceMonitor
          onIncline={() => setDpr(3)}
          onDecline={() => setDpr(1)}
        >
          <color attach="background" args={['#F27141']} />
          <spotLight
            position={[1, 10, 1]}
            penumbra={1}
            intensity={3}
            color="orange"
          />
          <Environment preset="sunset" />
          {Array.from({ length: 35 }, (_, i) => (
            <FloatingPieces
              key={i}
              index={i}
              z={Math.round(easing(i / 90) * 70)}
              speed={1.5}
              model={<Iphone12 />}
            />
          ))}
          {/* <EffectComposer multisampling={0}>
          <DepthOfField target={[0, 0, 60]} focalLength={0.9} bokehScale={10} />
        </EffectComposer> */}
          {/* <CameraControls makeDefault /> */}
        </PerformanceMonitor>
      </Canvas>
    </Suspense>
  )
}
