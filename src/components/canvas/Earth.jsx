import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader'

const Earth = () => {
  const earth = useGLTF('./planet/scene.gltf')

  return (
    <mesh>
       <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
     </mesh>
  )
}

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true }}
      camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  )
}

export default EarthCanvas

// Note: below is for the spaceship!
// TODO: Create it's own compoinent and canvas elements etc copy computers 
// const Computers = () => {
//   const computer = useGLTF('../Intergalactic_Spaceships_Version_2/Intergalactic_Spaceships_Version_2.gltf')

//   return (
      // <mesh>
      //   <hemisphereLight intensity={0.05} groundColor='black' />
      //   <pointLight intensity={0.25} />
      //   <spotLight position={[-20, 50, -50]} angle={0.5} penumbra={2} intensity={2} shadow-mapSize={1024} castShadow />
      //   <primitive object={computer.scene} scale={0.3} position-y={0} position-x={0} />
      // </mesh>
//   )
// }

// https://sketchfab.com/3d-models/smol-ame-in-an-upcycled-terrarium-hololiveen-490cecc249d242188fda5ad3160a4b24
// https://sketchfab.com/3d-models/mech-drone-8d06874aac5246c59edb4adbe3606e0e
// https://sketchfab.com/3d-models/cyberpunk-laptop-concept-design-fddc4e68cc6c498b88b19af1a05bd420 <!-----!
// https://sketchfab.com/3d-models/hologram-console-bfbbb481e98e4be38774b1d0204c192c <!-----!
// https://sketchfab.com/3d-models/mercenary-hideout-spot-5c8edf1cba5c465492e15a5f1d840ec2
// https://sketchfab.com/3d-models/destroyed-car-07-raw-scan-916b51c7e5644eb2a6c9b3797ebb08cf
// https://sketchfab.com/3d-models/office-building-af9782245c134c21ae0c8df7f57077e6
