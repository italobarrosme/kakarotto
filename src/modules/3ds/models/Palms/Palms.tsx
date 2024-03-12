import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function PalmsModel(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/palms1.glb') as any
  return (
    <group {...props} dispose={null}>
      <group
        position={[9.267, 12.896, 18.141]}
        rotation={[-1.012, 0.072, 2.557]}
        scale={[0.223, 0.853, 0.234]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube059.geometry}
          material={materials['Material.033']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube059_1.geometry}
          material={materials['Material.038']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube059_2.geometry}
          material={materials['Material.034']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube059_3.geometry}
          material={materials['Material.039']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/palms1.glb')
