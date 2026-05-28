import { useEffect, useRef } from 'react'

export function Cursor() {
  const dotRef = useRef()
  const ringRef = useRef()

  useEffect(() => {
    let cursorX = 0
    let cursorY = 0
    let ringX = 0
    let ringY = 0
    const ringSpeed = 0.12

    const handleMouseMove = (e) => {
      cursorX = e.clientX
      cursorY = e.clientY

      if (dotRef.current) {
        dotRef.current.style.left = cursorX - 6 + 'px'
        dotRef.current.style.top = cursorY - 6 + 'px'
      }

      ringX += (cursorX - ringX) * ringSpeed
      ringY += (cursorY - ringY) * ringSpeed

      if (ringRef.current) {
        ringRef.current.style.left = ringX - 18 + 'px'
        ringRef.current.style.top = ringY - 18 + 'px'
      }
    }

    const handleMouseDown = () => {
      if (dotRef.current) dotRef.current.style.transform = 'scale(0.7)'
      if (ringRef.current) ringRef.current.style.transform = 'scale(1.3)'
    }

    const handleMouseUp = () => {
      if (dotRef.current) dotRef.current.style.transform = 'scale(1)'
      if (ringRef.current) ringRef.current.style.transform = 'scale(1)'
    }

    const handleMouseOver = (e) => {
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
        if (ringRef.current) ringRef.current.style.transform = 'scale(1.8)'
        if (dotRef.current) dotRef.current.style.opacity = '0.5'
      }
    }

    const handleMouseOut = (e) => {
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
        if (ringRef.current) ringRef.current.style.transform = 'scale(1)'
        if (dotRef.current) dotRef.current.style.opacity = '1'
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    window.addEventListener('mouseover', handleMouseOver)
    window.addEventListener('mouseout', handleMouseOut)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('mouseover', handleMouseOver)
      window.removeEventListener('mouseout', handleMouseOut)
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        className="fixed w-3 h-3 bg-pink-500 rounded-full pointer-events-none z-9999 shadow-lg"
        style={{ boxShadow: '0 0 8px rgba(244, 114, 182, 0.6)' }}
      />
      <div
        ref={ringRef}
        className="fixed w-9 h-9 border-2 border-purple-400 rounded-full pointer-events-none z-9998 transition-transform duration-300"
      />
    </>
  )
}

export default Cursor
