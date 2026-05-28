import { Canvas } from '@react-three/fiber'
import { Stars, Sphere, PerspectiveCamera } from '@react-three/drei'
import { useRef, useEffect } from 'react'
import * as THREE from 'three'

function HoloSphere() {
  const meshRef = useRef()

  useEffect(() => {
    if (meshRef.current) {
      const animate = () => {
        meshRef.current.rotation.x += 0.001
        meshRef.current.rotation.y += 0.002
        requestAnimationFrame(animate)
      }
      animate()
    }
  }, [])

  return (
    <mesh ref={meshRef} scale={2}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshPhongMaterial
        color="#FFD6E7"
        wireframe={false}
        emissive="#E5D9FF"
        emissiveIntensity={0.2}
      />
      <pointLight position={[10, 10, 10]} intensity={1} color="#FFD6E7" />
      <pointLight position={[-10, -10, 10]} intensity={0.5} color="#E5D9FF" />
    </mesh>
  )
}

export function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <Stars radius={300} depth={60} count={1000} factor={4} saturation={0.8} fade={true} />
      <HoloSphere />
      <ambientLight intensity={0.5} />
    </Canvas>
  )
}
