import { useGLTF } from '@react-three/drei'
import { useRef } from 'react'
import { useSunStore } from './store/SunStore'
import { useFrame } from '@react-three/fiber'
import { Group } from 'three'

export function Sun() {
  const ref = useRef<Group>(null)
  const { sun } = useSunStore()

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (ref.current) {
      ref.current.rotation.set(
        Math.cos(t / 4) / 8,
        Math.sin(t / 4) / 8,
        -0.2 - (1 + Math.sin(t / 1.5)) / 20
      )
      ref.current.position.y = (8 + Math.sin(t / 1.5)) / 10
    }
  })

  const { nodes, materials } = useGLTF('/uploads_files_4395783_Sun.glb') as any

  return (
    <group dispose={null} position={[0, 0, 0]} ref={ref} scale={37.466}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.sun1.geometry}
        material={materials.sun}
        material-color={sun.color}
        material-emissive={sun.color}
        scale={0.267}
      />
    </group>
  )
}

useGLTF.preload('/uploads_files_4395783_Sun.glb')
