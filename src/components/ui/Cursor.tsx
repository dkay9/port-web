'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Cursor() {
  const [pos, setPos]           = useState({ x: 0, y: 0 })
  const [hovering, setHovering] = useState(false)
  const [visible, setVisible]   = useState(false)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
      if (!visible) setVisible(true)
    }

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement
      const isInteractive =
        t.tagName === 'A' ||
        t.tagName === 'BUTTON' ||
        t.closest('a') ||
        t.closest('button')
      setHovering(!!isInteractive)
    }

    const onLeave = () => setVisible(false)
    const onEnter = () => setVisible(true)

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
    }
  }, [visible])

  const size = hovering ? 44 : 28

  return (
    <>
      {/* Outer reticle ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        animate={{
          x: pos.x - size / 2,
          y: pos.y - size / 2,
          width: size,
          height: size,
          opacity: visible ? 1 : 0,
        }}
        transition={{ type: 'spring', stiffness: 180, damping: 18, mass: 0.5 }}
      >
        <div
          className="w-full h-full rounded-full relative"
          style={{ border: '1px solid var(--accent)', opacity: hovering ? 0.9 : 0.6 }}
        >
          {/* Crosshair — top */}
          <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[3px] w-px h-[5px] bg-[var(--accent)]" />
          {/* Crosshair — bottom */}
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[3px] w-px h-[5px] bg-[var(--accent)]" />
          {/* Crosshair — left */}
          <span className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[3px] h-px w-[5px] bg-[var(--accent)]" />
          {/* Crosshair — right */}
          <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[3px] h-px w-[5px] bg-[var(--accent)]" />
        </div>
      </motion.div>

      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] w-[3px] h-[3px] rounded-full"
        style={{ backgroundColor: 'var(--accent)' }}
        animate={{
          x: pos.x - 1.5,
          y: pos.y - 1.5,
          opacity: visible ? 1 : 0,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      />
    </>
  )
}
