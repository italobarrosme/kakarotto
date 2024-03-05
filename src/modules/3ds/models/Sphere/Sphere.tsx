import { useGLTF } from '@react-three/drei'
import { useStoreSphere } from './store'

export function Sphere() {
  const { data } = useStoreSphere()

  return (
    <mesh>
      <sphereGeometry args={[0.4, 16, 32]} attach={'geometry'} />
      <meshStandardMaterial color={data.colorCurrent} attach={'material'} />
    </mesh>
  )
}

useGLTF.preload('')
