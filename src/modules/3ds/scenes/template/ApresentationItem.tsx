import { ContactShadows, Environment, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { ReactNode } from 'react'
import { FloatItem } from '../../animations'

type ApresentationItemPorps = {
  props?: any
  model: ReactNode
}

export const ApresentationItem = ({ model, props }: ApresentationItemPorps) => {
  return (
    <Canvas
      shadows
      gl={{ antialias: false }}
      camera={{ position: [0, 0, 4], fov: 45 }}
    >
      <spotLight
        intensity={0.5}
        angle={0.1}
        penumbra={1}
        position={[10, 15, 3]}
        castShadow
      />
      <ambientLight intensity={0.7} />

      <FloatItem model={model} props={props} />
      <Environment preset="city" />
      <ContactShadows
        position={[0, -0.8, 0]}
        opacity={0.25}
        scale={10}
        blur={1.5}
        far={0.8}
      />

      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  )
}
