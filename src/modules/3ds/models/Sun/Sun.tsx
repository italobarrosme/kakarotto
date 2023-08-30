import { useGLTF } from '@react-three/drei'
import { useRef } from 'react'
import { useSunStore } from './store/SunStore'
import { Group } from 'three'

export function Sun() {
  const ref = useRef<Group>(null)
  const { sun } = useSunStore()

  const { nodes, materials } = useGLTF('/uploads_files_4395783_Sun.glb') as any

  return (
    <group dispose={null} position={[0, 0, 0]} ref={ref} scale={25}>
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
