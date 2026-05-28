import gsap from 'gsap'

export const animateOnScroll = (element, options = {}) => {
  const defaults = {
    duration: 0.8,
    opacity: 1,
    y: 0,
    ease: 'power3.out',
    delay: 0,
    ...options,
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        gsap.to(entry.target, {
          opacity: defaults.opacity,
          y: defaults.y,
          duration: defaults.duration,
          ease: defaults.ease,
          delay: defaults.delay,
        })
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.2, rootMargin: '0px 0px -100px 0px' })

  if (element) {
    observer.observe(element)
  }

  return observer
}

export const floatingAnimation = (element) => {
  if (!element) return

  gsap.to(element, {
    y: -10,
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
  })
}

export const pulseAnimation = (element) => {
  if (!element) return

  gsap.to(element, {
    scale: 1.05,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
  })
}

export const rotateAnimation = (element, duration = 10) => {
  if (!element) return

  gsap.to(element, {
    rotation: 360,
    duration,
    repeat: -1,
    ease: 'none',
  })
}

export const tiltAnimation = (element, e) => {
  if (!element) return

  const rect = element.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top

  const centerX = rect.width / 2
  const centerY = rect.height / 2

  const rotateX = ((y - centerY) / centerY) * 18
  const rotateY = ((centerX - x) / centerX) * 18

  gsap.to(element, {
    rotationX: rotateX,
    rotationY: rotateY,
    duration: 0.3,
  })
}

export const resetTilt = (element) => {
  if (!element) return

  gsap.to(element, {
    rotationX: 0,
    rotationY: 0,
    duration: 0.3,
  })
}
