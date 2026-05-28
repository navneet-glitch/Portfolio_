import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'

export function Navigation() {
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'Contact', id: 'contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      navItems.forEach(({ id }) => {
        const section = document.getElementById(id)
        if (section) {
          const rect = section.getBoundingClientRect()
          if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
            setActiveSection(id)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navVariants = {
    hidden: { y: -100 },
    visible: { y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  }

  const linkVariants = {
    initial: { opacity: 0.6 },
    hover: { 
      opacity: 1,
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    active: { 
      opacity: 1,
      color: '#F472B6',
      transition: { duration: 0.3 }
    }
  }

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-[1000] py-5 px-5 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/70 backdrop-blur-xl border-b border-pink-300/20 shadow-lg'
          : 'bg-transparent'
      }`}
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div
          className="text-2xl font-bold font-outfit cursor-pointer"
          style={{
            background: 'linear-gradient(135deg, #F472B6, #A78BFA)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          ✦ Mamta
        </motion.div>

        <ul className="hidden md:flex gap-8 list-none">
          {navItems.map(({ label, id }) => (
            <motion.li key={id}>
              <motion.a
                href={`#${id}`}
                className="text-gray-700 font-poppins font-medium text-sm relative"
                variants={linkVariants}
                initial="initial"
                whileHover="hover"
                animate={activeSection === id ? 'active' : 'initial'}
              >
                {label}
                {activeSection === id && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"
                    layoutId="activeUnderline"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.a>
            </motion.li>
          ))}
        </ul>

        <motion.button
          className="md:hidden flex flex-col gap-1 cursor-pointer"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          {[0, 1, 2].map((line) => (
            <motion.div
              key={line}
              className="w-6 h-1 bg-pink-500 rounded-full"
              animate={{
                rotate: isMobileOpen ? [0, 45][line === 1 ? 1 : 0] : 0,
                opacity: line === 1 && isMobileOpen ? 0 : 1,
              }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </motion.button>
      </div>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.ul
            className="md:hidden flex flex-col gap-4 mt-6 list-none"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {navItems.map(({ label, id }, index) => (
              <motion.li
                key={id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <a
                  href={`#${id}`}
                  className="text-gray-700 font-poppins font-medium block py-2"
                  onClick={() => setIsMobileOpen(false)}
                >
                  {label}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
