import { Canvas } from '@react-three/fiber'
import { Edges, CameraControls, Environment } from '@react-three/drei'
import { EffectComposer, DepthOfField } from '@react-three/postprocessing'
import { FloatingPieces } from '@/modules/3ds/animations/FloatingPieces'
import { Sun, Iphone12 } from '@/modules/3ds/models/'

export const GravityZero = () => {
  const easing = (x: any) => Math.sqrt(1 - Math.pow(x - 1, 2))

  return (
    <>
      <Canvas
        gl={{ antialias: false }}
        dpr={[1, 2.5]}
        camera={{ position: [0, 0, 10], fov: 20, near: 0.01, far: 80 + 15 }}
      >
        <color attach="background" args={['#F27141']} />
        <spotLight
          position={[1, 10, 1]}
          penumbra={1}
          intensity={3}
          color="orange"
        />
        <Environment preset="city" />
        {Array.from({ length: 50 }, (_, i) => (
          <FloatingPieces
            key={i}
            index={i}
            z={Math.round(easing(i / 90) * 70)}
            speed={1.5}
            model={<Iphone12 />}
          />
        ))}
        <EffectComposer multisampling={0}>
          <DepthOfField target={[0, 0, 60]} focalLength={0.9} bokehScale={5} />
        </EffectComposer>
        {/* <CameraControls makeDefault /> */}
      </Canvas>
    </>
  )
}
