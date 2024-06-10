import React from 'react'
import { useGLTF } from '@react-three/drei'

export type PalmsModelProps = {
  glbPath: string
}

export function PalmsModel(
  { glbPath }: PalmsModelProps,
  props: JSX.IntrinsicElements['group']
) {
  const { nodes, materials } = useGLTF(glbPath) as any
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group
          position={[0.00232, -0.0434, -0.33425]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.025, 0.01, 1.5]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FRUNZA_1_0.geometry}
            material={materials.Root}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FRUNZA_1_0_1.geometry}
            material={materials.Root}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/palm_leaf.glb')
