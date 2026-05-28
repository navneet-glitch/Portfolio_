import { motion } from 'framer-motion'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function About() {
  const statsRef = useRef()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.stat-card', {
        scrollTrigger: { trigger: statsRef.current, start: 'top center' },
        y: -20,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
      })
    }, statsRef)
    return () => ctx.revert()
  }, [])

  const stats = [
    { num: '10+', label: 'Projects' },
    { num: '∞', label: 'Possibilities' },
    { num: '🚀', label: 'Innovation' },
    { num: '💡', label: 'Creator' },
  ]

  return (
    <section id="about" className="py-24 px-6 relative">
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
          About Me
        </motion.h2>

        <motion.div
          className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 md:p-12 max-w-4xl mx-auto shadow-xl border border-white/20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center mb-12 pb-12 border-b border-pink-200/20">
            <motion.div
              className="w-40 h-40 flex-shrink-0 rounded-2xl bg-gradient-to-br from-pink-400/30 to-purple-400/30 flex items-center justify-center text-6xl border-2 border-pink-300/30 shadow-xl"
              animate={{ boxShadow: ['0 0 40px rgba(244, 114, 182, 0.2)', '0 0 80px rgba(244, 114, 182, 0.4)', '0 0 40px rgba(244, 114, 182, 0.2)'] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              👩‍💻
            </motion.div>

            <div>
              <motion.h3 className="text-3xl font-bold text-gray-800 mb-2">Mamta</motion.h3>
              <motion.p className="text-xl font-semibold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                Innovator • Learner • Creator
              </motion.p>
            </div>
          </div>

          <motion.div className="text-gray-700 space-y-4 mb-12 leading-relaxed text-lg">
            <p>Mamta is a passionate technology enthusiast, creative innovator, and future-focused learner who explores AI, Robotics, Web Design, and immersive digital experiences.</p>
            <p>With strong interest in futuristic technologies and creativity, she builds modern projects combining innovation, problem-solving, and beautiful design. Her goal is creating technology that feels meaningful and inspiring.</p>
            <p>She believes in continuous learning, creative thinking, and using technology to build smarter experiences for the future.</p>
            <p>Beyond coding, Mamta enjoys teaching, mentoring, and sharing knowledge through workshops and hands-on learning experiences.</p>
          </motion.div>

          <motion.div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                className="stat-card bg-gradient-to-br from-pink-100/40 to-purple-100/40 border border-pink-200/40 rounded-2xl p-6 text-center hover:border-pink-400/60 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.08 }}
              >
                <motion.div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                  {stat.num}
                </motion.div>
                <p className="text-sm text-gray-600 mt-3">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
