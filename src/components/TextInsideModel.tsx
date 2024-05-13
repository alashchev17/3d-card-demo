import * as THREE from 'three'
import { useEffect, useState } from 'react'
import { TextGeometry } from 'three/examples/jsm/Addons.js'
import { FontLoader, Font } from 'three/examples/jsm/Addons.js'
import { useThree } from '@react-three/fiber'

interface TextInsideModelProps {
  text: string
  position: THREE.Vector3
}

const TextInsideModel = ({ text, position }: TextInsideModelProps) => {
  const { scene } = useThree()
  const [font, setFont] = useState<Font | null>(null)

  useEffect(() => {
    const fontLoader = new FontLoader()
    fontLoader.load('/assets/fonts/Space_Grotesk_Regular.json', (loadedFont: Font) => {
      setFont(loadedFont)
    })
  }, [])

  useEffect(() => {
    if (font) {
      const textGeometry = new TextGeometry(text, {
        font: font,
        size: 5,
        height: 1,
        depth: 0.2,
        curveSegments: 12,
        bevelEnabled: false,
      })
      const textMaterial = new THREE.MeshStandardMaterial({ color: 0x000000 })
      const textMesh = new THREE.Mesh(textGeometry, textMaterial)
      const textWidth = new THREE.Box3().setFromObject(textMesh).getSize(new THREE.Vector3()).x
      textMesh.position.copy(position).add(new THREE.Vector3(-textWidth / 2, 0, 0))
      scene.add(textMesh)
      return () => {
        scene.remove(textMesh)
      }
    }
  }, [font, text])

  return null
}

export default TextInsideModel
