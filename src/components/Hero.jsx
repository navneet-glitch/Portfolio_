import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { HeroScene } from './3d/HeroScene'

export function Hero() {
  const containerRef = useRef()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.float-element-1', {
        y: [0, -50, 0],
        x: [0, 30, 0],
        duration: 8,
        repeat: -1,
        ease: 'sine.inOut',
      })
      gsap.to('.float-element-2', {
        y: [0, -40, 0],
        x: [0, -40, 0],
        duration: 9,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 1,
      })
      gsap.to('.float-element-3', {
        y: [0, -60, 0],
        x: [0, 35, 0],
        duration: 10,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 2,
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const textGradient = 'linear-gradient(135deg, #F472B6 0%, #A78BFA 50%, #38BDF8 100%)'

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-12 items-center justify-center pt-40 pb-20 px-6 max-w-7xl mx-auto"
    >
      <motion.div
        className="flex flex-col gap-8 z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-5xl md:text-7xl xl:text-8xl font-bold font-outfit leading-tight"
          style={{
            background: textGradient,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
          variants={itemVariants}
        >
          Mamta
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl font-semibold text-pink-500 font-poppins"
          variants={itemVariants}
        >
          AI Enthusiast • Robotics Mentor • Creative Technologist
        </motion.p>

        <motion.p
          className="text-lg text-gray-600 max-w-lg leading-relaxed font-poppins"
          variants={itemVariants}
        >
          A passionate creator exploring AI, robotics, web technologies, and immersive futuristic experiences through creativity and innovation.
        </motion.p>

        <motion.div
          className="flex gap-6 flex-col sm:flex-row"
          variants={itemVariants}
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-pink-500 to-pink-600 text-white font-semibold rounded-lg font-poppins shadow-lg"
            whileHover={{
              scale: 1.05,
              boxShadow: '0 10px 30px rgba(244, 114, 182, 0.4)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Projects
          </motion.button>

          <motion.button
            className="px-8 py-4 border-2 border-purple-400 text-purple-600 font-semibold rounded-lg font-poppins hover:bg-purple-50 transition-colors"
            whileHover={{
              scale: 1.05,
              backgroundColor: 'rgba(168, 139, 250, 0.1)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div
        className="relative h-96 lg:h-screen hidden lg:flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <HeroScene />
      </motion.div>
    </section>
  )
}
