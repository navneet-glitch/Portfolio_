import { motion } from 'framer-motion'

export function Experience() {
  const experiences = [
    { title: 'AI Developer & Innovator', year: '2023-Present', desc: 'Leading AI and ML projects for real-world solutions', icon: '🤖' },
    { title: 'Robotics Workshop Leader', year: '2022-Present', desc: 'Conducting workshops on robotics and automation', icon: '⚙️' },
    { title: 'VR & 3D Specialist', year: '2021-2023', desc: 'Creating immersive VR and 3D visualization experiences', icon: '🥽' },
    { title: 'Teaching & Mentoring', year: '2020-Present', desc: 'Sharing knowledge and helping others explore technology', icon: '📚' },
    { title: 'Continuous Learning', year: 'Ongoing', desc: 'Exploring cutting-edge technologies and AI innovations', icon: '🚀' },
  ]

  return (
    <section id="experience" className="py-24 px-6">
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
          My Journey
        </motion.h2>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-pink-100/30 to-purple-100/30 rounded-2xl p-8 border border-pink-200/40">
                  <div className="text-4xl mb-4">{exp.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{exp.title}</h3>
                  <p className="text-pink-600 font-semibold text-sm mb-3">{exp.year}</p>
                  <p className="text-gray-700 text-sm">{exp.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
