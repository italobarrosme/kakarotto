import { Canvas } from '@react-three/fiber'
import { Environment, PerformanceMonitor } from '@react-three/drei'
import { FloatingPieces } from '@/modules/3ds/animations/FloatingPieces'
import { Suspense, useState } from 'react'
import { Sphere } from '../../models'

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
          <color attach="background" args={['#030826']} />
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
              model={
                <mesh
                  visible
                  userData={{ hello: 'world' }}
                  position={[1, 2, 3]}
                  rotation={[Math.PI / 2, 0, 0]}
                >
                  <Sphere />
                </mesh>
              }
            />
          ))}
        </PerformanceMonitor>
      </Canvas>
    </Suspense>
  )
}
