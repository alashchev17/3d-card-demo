import React, { useRef } from 'react'
import Lights from './Lights'
import { OrbitControls, useTexture } from '@react-three/drei'
import { useThree, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import TextInsideModel from './TextInsideModel'
import { useSettings } from '../context/SettingsContext'

const ModelView = () => {
  const meshRef = useRef<THREE.Mesh>(null!)
  const { currentTexture } = useSettings()
  const texture = useTexture(currentTexture)
  const { scene } = useThree()
  scene.background = new THREE.Color('#e3e3e3')

  useFrame(({ clock }) => {
    if (meshRef.current) {
      const material = meshRef.current.material as THREE.ShaderMaterial
      if (material instanceof THREE.ShaderMaterial) {
        material.uniforms.time.value = clock.elapsedTime
      }
    }
  })
  return (
    <>
      <Lights />
      <OrbitControls makeDefault enableZoom={false} enablePan={false} />
      <gridHelper args={[10000, 1000]} />
      <group>
        <mesh ref={meshRef}>
          <boxGeometry args={[85, 55, 0.36]} />
          <meshStandardMaterial map={texture} roughness={1} metalness={0} />
          <TextInsideModel text="Andrii Lashchov" position={new THREE.Vector3(0, 0, 0)} />
        </mesh>
      </group>
    </>
  )
}

export default ModelView
