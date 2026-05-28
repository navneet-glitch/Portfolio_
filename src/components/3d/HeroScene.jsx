import React, { useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, Torus } from '@react-three/drei'
import gsap from 'gsap'
import * as THREE from 'three'

function RotatingRing({ radius, color, duration, delay = 0 }) {
  const ref = useRef()

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.z += 0.001 / (duration / 10)
    }
  })

  return (
    <Torus
      ref={ref}
      args={[radius, 0.02, 16, 100]}
      position={[0, 0, 0]}
    >
      <meshStandardMaterial color={color} transparent opacity={0.4} emissive={color} emissiveIntensity={0.3} />
    </Torus>
  )
}

function FloatingOrb({ position, color, scale = 1 }) {
  const ref = useRef()

  useEffect(() => {
    if (ref.current) {
      const tl = gsap.timeline({ repeat: -1 })
      tl.to(ref.current.position, {
        x: position[0] + (Math.random() - 0.5) * 0.5,
        y: position[1] + (Math.random() - 0.5) * 0.5,
        z: position[2] + (Math.random() - 0.5) * 0.5,
        duration: 4 + Math.random() * 2,
        ease: 'sine.inOut',
      })
    }
  }, [])

  return (
    <Sphere ref={ref} args={[scale * 0.5, 32, 32]} position={position} castShadow>
      <meshPhongMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.6}
        shininess={100}
        wireframe={false}
      />
    </Sphere>
  )
}

function ParticleField() {
  const pointsRef = useRef()

  useEffect(() => {
    if (pointsRef.current) {
      const positions = new Float32Array(300)
      for (let i = 0; i < 300; i += 3) {
        positions[i] = (Math.random() - 0.5) * 10
        positions[i + 1] = (Math.random() - 0.5) * 10
        positions[i + 2] = (Math.random() - 0.5) * 10
      }
      pointsRef.current.geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    }
  }, [])

  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x += 0.0001
      pointsRef.current.rotation.y += 0.0002
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={100} array={new Float32Array(300)} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#F472B6" transparent opacity={0.6} />
    </points>
  )
}

export function HeroScene() {
  return (
    <div className="w-full h-96 rounded-3xl overflow-hidden border border-white/20">
      <Canvas camera={{ position: [0, 0, 4], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.8} color="#F472B6" />
        <pointLight position={[-10, -10, 10]} intensity={0.6} color="#A78BFA" />

        <RotatingRing radius={2.5} color="#F472B6" duration={10} />
        <RotatingRing radius={2} color="#A78BFA" duration={15} />
        <RotatingRing radius={1.5} color="#38BDF8" duration={20} />

        <FloatingOrb position={[0, 0, 0]} color="#F472B6" scale={0.3} />
        <FloatingOrb position={[1, -0.5, -1]} color="#A78BFA" scale={0.35} />
        <FloatingOrb position={[-1, 0.5, -1]} color="#38BDF8" scale={0.25} />

        <ParticleField />
      </Canvas>
    </div>
  )
}
