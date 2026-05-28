// SKILLS.JSX - Copy entire file content
import { motion } from 'framer-motion'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { SKILLS } from '../utils/constants'

export function Skills() {
  const containerRef = useRef()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.skill-card', {
        scrollTrigger: { trigger: containerRef.current, start: 'top center' },
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.6,
      })
    }, containerRef)
    return () => ctx.revert()
  }, [])

  const colorMap = {
    0: 'from-pink-500/20 to-pink-500/5 border-pink-300/40',
    1: 'from-purple-500/20 to-purple-500/5 border-purple-300/40',
    2: 'from-cyan-500/20 to-cyan-500/5 border-cyan-300/40',
    3: 'from-yellow-500/20 to-yellow-500/5 border-yellow-300/40',
    4: 'from-pink-500/20 to-pink-500/5 border-pink-300/40',
    5: 'from-purple-500/20 to-purple-500/5 border-purple-300/40',
    6: 'from-cyan-500/20 to-cyan-500/5 border-cyan-300/40',
    7: 'from-yellow-500/20 to-yellow-500/5 border-yellow-300/40',
    8: 'from-pink-500/20 to-pink-500/5 border-pink-300/40',
  }

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          style={{
            background: 'linear-gradient(135deg, #F472B6, #A78BFA)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Technical Proficiencies
        </motion.h2>

        <motion.div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SKILLS.map((skill, i) => (
            <motion.div
              key={i}
              className={`skill-card group rounded-2xl p-8 backdrop-blur-xl border transition-all duration-300 cursor-pointer overflow-hidden bg-gradient-to-br ${colorMap[i]}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -15, scale: 1.02, boxShadow: '0 20px 40px rgba(244, 114, 182, 0.2)' }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
              </div>

              <div className="relative z-10">
                <motion.div className="text-5xl mb-4" animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity }}>
                  {skill.emoji}
                </motion.div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">{skill.name}</h3>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${colorMap[i].split(' ')[0]}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.2 }}
                  />
                </div>
                <p className="text-sm text-gray-600 mt-2">{skill.percentage}% Proficiency</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
