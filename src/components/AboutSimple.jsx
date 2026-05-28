import { motion } from 'framer-motion'

export function About() {
  return (
    <section id="about" className="py-24 px-6 relative bg-gradient-to-br from-pink-100 to-purple-100">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        <div className="text-center text-lg text-gray-700">
          <p>Hi! I'm Mamta, an AI enthusiast and creative technologist.</p>
        </div>
      </div>
    </section>
  )
}
