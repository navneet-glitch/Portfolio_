import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export function ParticleBackground() {
  const containerRef = useRef()

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const particles = []
    const colors = ['#F472B6', '#A78BFA', '#38BDF8', '#FBBF24']

    // Create particles
    for (let i = 0; i < 80; i++) {
      const particle = document.createElement('div')
      particle.className = 'absolute w-12 h-12 rounded-full mix-blend-screen pointer-events-none'
      
      const color = colors[Math.floor(Math.random() * colors.length)]
      const size = Math.random() * 60 + 20

      particle.style.width = size + 'px'
      particle.style.height = size + 'px'
      particle.style.background = `radial-gradient(circle, ${color}, transparent)`
      particle.style.filter = 'blur(40px)'
      particle.style.left = Math.random() * window.innerWidth + 'px'
      particle.style.top = Math.random() * window.innerHeight + 'px'
      particle.style.opacity = Math.random() * 0.3 + 0.1

      container.appendChild(particle)

      // Animate particle
      gsap.to(particle, {
        y: -(Math.random() * 400 + 200),
        x: (Math.random() - 0.5) * 300,
        opacity: 0,
        duration: Math.random() * 20 + 15,
        repeat: -1,
        delay: Math.random() * 5,
        ease: 'none',
      })

      particles.push(particle)
    }

    // Handle window resize
    const handleResize = () => {
      particles.forEach((particle) => {
        if (Math.random() > 0.95) {
          gsap.set(particle, {
            left: Math.random() * window.innerWidth,
            top: window.innerHeight + 50,
            opacity: Math.random() * 0.3 + 0.1,
          })
        }
      })
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      particles.forEach((p) => p.remove())
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    />
  )
}

export default ParticleBackground
