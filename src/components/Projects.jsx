import { motion } from 'framer-motion'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function Projects() {
  const containerRef = useRef()

  const projects = [
    { icon: '📹', title: 'AI Attendance', desc: 'Facial recognition attendance tracking system', tags: ['Python', 'AI', 'CV'] },
    { icon: '🏛️', title: 'VR Experience', desc: 'Immersive virtual reality temple exploration', tags: ['A-Frame', 'VR', '3D'] },
    { icon: '📡', title: 'Smart IoT', desc: 'Connected IoT system with real-time monitoring', tags: ['Arduino', 'IoT', 'Sensors'] },
    { icon: '💬', title: 'AI Chatbot', desc: 'NLP-powered conversational AI assistant', tags: ['NLP', 'AI', 'ML'] },
    { icon: '🎨', title: 'Portfolio Sites', desc: 'Stunning creative portfolio designs', tags: ['Design', 'Web', 'UI/UX'] },
    { icon: '🚀', title: 'Innovation Lab', desc: 'Experimental cutting-edge tech projects', tags: ['Research', 'Tech', 'Innovation'] },
  ]

  useEffect(() => {
    gsap.to('.project-card', {
      scrollTrigger: { trigger: containerRef.current },
      opacity: 1,
      y: 0,
      stagger: 0.1,
      duration: 0.6,
    })
  }, [])

  return (
    <section id="projects" className="py-24 px-6">
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
          Featured Projects
        </motion.h2>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              className="project-card rounded-2xl overflow-hidden backdrop-blur-xl border border-white/20 bg-gradient-to-br from-pink-500/10 hover:border-white/40 transition-all group"
              initial={{ opacity: 0, y: 40 }}
              whileHover={{ y: -15, scale: 1.02, boxShadow: '0 20px 40px rgba(244, 114, 182, 0.2)' }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="h-40 bg-gradient-to-br from-white/10 flex items-center justify-center text-5xl">
                <motion.span animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }}>
                  {proj.icon}
                </motion.span>
              </div>

              <div className="p-6">
                <h3 className="font-bold text-gray-800 mb-2">{proj.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{proj.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {proj.tags.map((tag, j) => (
                    <span key={j} className="text-xs bg-pink-400/30 text-gray-700 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
