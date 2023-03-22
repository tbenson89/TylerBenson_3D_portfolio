import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'

const Computers = () => {
  const computer = useGLTF('../desktop_pc/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={0.05} groundColor='black' />
      <pointLight intensity={1} />
      <spotLight position={[-20, 50, 10]} angle={0.12} penumbra={1} intensity={1} shadow-mapSize={1024} castShadow />
      <primitive object={computer.scene} scale={0.75} position={[0, -3.25, -1.5]} rotation={[-0.01, -0.2, -0.1]} />
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Under construction:
  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => setIsMobile(event.matches);

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  return (
    // position: X, Y, Z axis
    // fov: (field of view)
    <Canvas frameloop='demand' shadows camera={{ position: [20, 3, 5], fov: 25 }} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Computers isMobile={ isMobile } />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas



// Note: below is for the spaceship!
// TODO: Create it's own compoinent and canvas elements etc copy computers 
// const Computers = () => {
//   const computer = useGLTF('../Intergalactic_Spaceships_Version_2/Intergalactic_Spaceships_Version_2.gltf')

//   return (
//     <mesh>
//       <hemisphereLight intensity={0.05} groundColor='black' />
//       <pointLight intensity={0.25} />
//       <spotLight position={[-20, 50, -50]} angle={0.5} penumbra={2} intensity={2} shadow-mapSize={1024} castShadow />
//       <primitive object={computer.scene} scale={0.75} position={[2, -0.5, 3]} rotation={[0.01, 0, -1]} />
//     </mesh>
//   )
// }

// https://sketchfab.com/3d-models/smol-ame-in-an-upcycled-terrarium-hololiveen-490cecc249d242188fda5ad3160a4b24
// https://sketchfab.com/3d-models/mech-drone-8d06874aac5246c59edb4adbe3606e0e
// https://sketchfab.com/3d-models/cyberpunk-laptop-concept-design-fddc4e68cc6c498b88b19af1a05bd420 <!-----!
// https://sketchfab.com/3d-models/hologram-console-bfbbb481e98e4be38774b1d0204c192c <!-----!
// https://sketchfab.com/3d-models/mercenary-hideout-spot-5c8edf1cba5c465492e15a5f1d840ec2
// https://sketchfab.com/3d-models/destroyed-car-07-raw-scan-916b51c7e5644eb2a6c9b3797ebb08cf
// https://sketchfab.com/3d-models/office-building-af9782245c134c21ae0c8df7f57077e6
