import { useGLTF } from '@react-three/drei'

export function Sun() {
  const { nodes, materials } = useGLTF('/uploads_files_4395783_Sun.glb') as any

  return (
    <group dispose={null} position={[2, 0, 0]}>
      <group scale={37.466}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.sun1.geometry}
          material={materials.sun}
          scale={0.267}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/uploads_files_4395783_Sun.glb')
