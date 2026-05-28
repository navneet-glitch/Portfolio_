import { motion } from 'framer-motion'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function Skills() {
  const containerRef = useRef()

  const skills = [
    { emoji: '🤖', name: 'AI/ML', desc: 'Machine Learning, Neural Networks, Deep Learning' },
    { emoji: '⚛️', name: 'React', desc: 'Frontend development, Hooks, State Management' },
    { emoji: '🎨', name: 'Design', desc: 'UI/UX Design, Figma, Animation, Prototyping' },
    { emoji: '📱', name: 'Mobile', desc: 'React Native, Cross-platform Development' },
    { emoji: '🔧', name: 'Backend', desc: 'Node.js, Express, Databases, APIs' },
    { emoji: '🚀', name: 'DevOps', desc: 'Docker, Deployment, CI/CD, Cloud Services' },
    { emoji: '💻', name: 'Python', desc: 'Scripting, Automation, Data Processing' },
    { emoji: '📊', name: 'Data', desc: 'Data Analysis, Visualization, Processing' },
    { emoji: '🎭', name: '3D/VR', desc: 'Three.js, Babylon.js, Immersive Experiences' },
  ]

  useEffect(() => {
    gsap.to('.skill-card', {
      scrollTrigger: { trigger: containerRef.current },
      opacity: 1,
      y: 0,
      stagger: 0.08,
      duration: 0.6,
    })
  }, [])

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
        >
          Skills & Expertise
        </motion.h2>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              className="skill-card rounded-2xl p-6 bg-gradient-to-br from-white/60 to-pink-100/30 backdrop-blur-xl border border-white/30 hover:border-pink-400/60 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(244, 114, 182, 0.15)' }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl mb-4">{skill.emoji}</div>
              <h3 className="font-bold text-lg text-gray-800 mb-2">{skill.name}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
