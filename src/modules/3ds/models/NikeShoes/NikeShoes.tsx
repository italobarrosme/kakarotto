import React from 'react'
import { useGLTF } from '@react-three/drei'
import { useNikeShoesStore } from './store'

export function NikeShoes() {
  const { nodes, materials } = useGLTF('/Nike.glb') as any
  const { materials: dataMaterial } = useNikeShoesStore()

  return (
    <group dispose={null} scale={5} rotation={[0, 0, 0.45]}>
      <group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane044.geometry}
          material={materials['Main Body Material']}
          material-color={dataMaterial['body'].color}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane044_1.geometry}
          material={materials['Sole Material']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane044_2.geometry}
          material={materials['Main Shoe Inside']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Laces006.geometry}
          material={materials['Laces Material']}
          position={[-0.087, 0.081, -0.001]}
          rotation={[0, 0, 0.45]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Nike_Logo_left005.geometry}
          material={materials['Logo left Material']}
          material-color={dataMaterial['logo'].left.color}
          position={[0.213, 0.065, 0.033]}
          rotation={[0, 0.174, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Nike_Logo_right005.geometry}
          material={materials['Logo right Material']}
          position={[0.213, 0.065, -0.087]}
          rotation={[0, 0.044, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shoe_Flap010.geometry}
          material={materials['Flap Material.002']}
          material-color={dataMaterial['flap'].color}
          position={[0, -0.005, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shoe_Flap011.geometry}
          material={materials['Tag material']}
          position={[0, -0.005, 0]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/Nike.glb')
