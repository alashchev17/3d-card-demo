import { Canvas } from '@react-three/fiber'
import ModelView from './ModelView'

const Model = () => {
  return (
    <div id="canvas-container" className="w-[100dvw] h-[100dvh] relative">
      <Canvas
        camera={{
          fov: 75,
          near: 0.1,
          far: 1000,
          position: [0, 0, 100],
        }}
      >
        <ModelView />
      </Canvas>
    </div>
  )
}

export default Model
