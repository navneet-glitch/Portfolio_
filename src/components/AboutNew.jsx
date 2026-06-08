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
            <p>Hi, I'm Mamta, a passionate technology enthusiast, educator, and creative innovator with a strong interest in Artificial Intelligence, Robotics, Web Design, and emerging technologies.</p>
            <p>I love exploring new ideas and building projects that combine technology, creativity, and problem-solving. My goal is to create meaningful digital experiences that are not only innovative but also useful and inspiring for others.</p>
            <p>I believe in continuous learning and always enjoy discovering new tools, technologies, and ways to improve my skills. Whether I am working on AI projects, robotics solutions, interactive applications, or creative web experiences, I strive to turn ideas into impactful solutions.</p>
            <p>Beyond coding and development, I am passionate about teaching and mentoring students. I enjoy helping young learners explore programming, robotics, and technology through hands-on activities and creative projects.</p>
            <p>My vision is to use technology to build smarter, more engaging, and future-ready experiences that make a positive difference in people's lives. ✨</p>
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

export default About
