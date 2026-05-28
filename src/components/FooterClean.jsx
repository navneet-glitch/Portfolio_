import { motion } from 'framer-motion'

export function Footer() {
  const socialLinks = [
    { icon: '💼', label: 'LinkedIn' },
    { icon: '🐙', label: 'GitHub' },
    { icon: '𝕏', label: 'Twitter' },
    { icon: '📧', label: 'Email' },
  ]

  return (
    <footer className="bg-gradient-to-b from-white via-white to-pink-50/30 border-t border-pink-200/20 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3
              className="text-2xl font-bold mb-4"
              style={{
                background: 'linear-gradient(135deg, #F472B6, #A78BFA)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              ✨ Mamta
            </h3>
            <p className="text-gray-600 text-sm">AI enthusiast, creative technologist, and passionate innovator exploring the future of technology.</p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-gray-800 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Skills', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-gray-600 hover:text-pink-500 transition-colors text-sm">
                    → {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-gray-800 mb-4">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <motion.button
                  key={link.label}
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-100/50 to-purple-100/50 flex items-center justify-center text-xl border border-pink-200/40 hover:border-pink-500/60 transition-all"
                  whileHover={{ scale: 1.1 }}
                >
                  {link.icon}
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-pink-200/20 pt-8 text-center text-gray-600 text-sm">
          <p>© 2024 Mamta. Designed with 💖 • AI Enthusiast • Creative Technologist</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
