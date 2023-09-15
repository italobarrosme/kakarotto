import { useGLTF } from '@react-three/drei'
import { useRef } from 'react'
import { useStoreSphere } from './store'
import { Group } from 'three'

export function Sphere() {
  const ref = useRef<Group>(null)
  const { data } = useStoreSphere()

  return (
    <mesh>
      <sphereGeometry args={[1, 16, 32]} />
      <meshStandardMaterial color={data.colorCurrent} />
    </mesh>
  )
}

useGLTF.preload('/uploads_files_4395783_Sun.glb')
