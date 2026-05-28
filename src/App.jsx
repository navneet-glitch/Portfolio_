import { useEffect } from 'react'
import { Navigation } from './components/Navigation'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Experience } from './components/Experience'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Cursor } from './components/Cursor'
import { useLenis } from './hooks/useLenis'
import gsap from 'gsap'

export default function App() {
  useLenis()

  useEffect(() => {
    // Create floating particles
    const particlesContainer = document.createElement('div')
    particlesContainer.className = 'fixed inset-0 pointer-events-none z-0'
    
    for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div')
      particle.className = 'absolute w-1 h-1 rounded-full bg-gradient-to-br from-pink-400/60 to-transparent'
      particle.style.left = Math.random() * 100 + '%'
      particle.style.top = Math.random() * 100 + '%'
      
      gsap.to(particle, {
        y: -(Math.random() * 200 + 100),
        x: (Math.random() - 0.5) * 200,
        opacity: 0,
        duration: Math.random() * 20 + 15,
        repeat: -1,
        delay: Math.random() * 5,
        ease: 'none',
      })
      
      particlesContainer.appendChild(particle)
    }
    
    document.body.appendChild(particlesContainer)

    // Mouse sparkle trail
    const handleMouseMove = (e) => {
      if (Math.random() > 0.95) {
        const sparkle = document.createElement('div')
        sparkle.textContent = '✨'
        sparkle.style.position = 'fixed'
        sparkle.style.left = e.clientX + 'px'
        sparkle.style.top = e.clientY + 'px'
        sparkle.style.pointerEvents = 'none'
        sparkle.style.zIndex = '9999'
        sparkle.style.fontSize = '1.2rem'
        document.body.appendChild(sparkle)

        gsap.to(sparkle, {
          y: -30,
          opacity: 0,
          duration: 1,
          ease: 'power2.out',
          onComplete: () => sparkle.remove(),
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (particlesContainer.parentNode) {
        particlesContainer.remove()
      }
    }
  }, [])

  return (
    <div className="relative">
      {/* Custom Cursor */}
      <Cursor />

      {/* Background orbs */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-5 w-96 h-96 bg-gradient-to-br from-pink-400/30 to-transparent rounded-full filter blur-3xl animate-float" />
        <div className="absolute top-1/3 right-5 w-80 h-80 bg-gradient-to-br from-purple-400/30 to-transparent rounded-full filter blur-3xl animate-float" style={{ animationDelay: '-10s' }} />
        <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-gradient-to-br from-cyan-400/30 to-transparent rounded-full filter blur-3xl animate-float" style={{ animationDelay: '-5s' }} />
      </div>

      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  )
}
