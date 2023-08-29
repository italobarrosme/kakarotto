import { ContactShadows, Environment, OrbitControls } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sun } from '../../models'

export const ApresentationItem = () => {
  return (
    <Canvas shadows camera={{ position: [0, 0, 10], fov: 45 }}>
      <spotLight
        intensity={0.5}
        angle={0.1}
        penumbra={1}
        position={[10, 15, 10]}
        castShadow
      />
      <ambientLight intensity={0.7} />
      <Sun />
      <Environment preset="city" />
      <ContactShadows
        position={[0, -0.8, 0]}
        opacity={0.25}
        scale={10}
        blur={1.5}
        far={0.8}
      />

      <OrbitControls
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
        enableZoom={false}
        enablePan={false}
      />
    </Canvas>
  )
}
