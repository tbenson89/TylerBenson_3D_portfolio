import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'

const Laptop = () => {
  const laptop = useGLTF('./cyberpunk_laptop/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={0.05} groundColor='black' />
      <pointLight intensity={0.3} />
      <spotLight position={[-20, 50, -50]} angle={0.5} penumbra={2} intensity={2} shadow-mapSize={1024} castShadow />
      <primitive object={laptop.scene} scale={0.03} position={[2, -2.5, 1]}  />
    </mesh>
  )
}

const LaptopCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia('(max-width: 500px)')

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches)

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => setIsMobile(event.matches)

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange)

    // Remove the listener when the component is unmounted
    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange)
  }, []);

  return (
    // position: X, Y, Z axis
    // fov: (field of view)
    <Canvas frameloop='demand' shadows camera={{ position: [20, 3, 30], fov: 20 }} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Laptop isMobile={ isMobile } />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default LaptopCanvas
