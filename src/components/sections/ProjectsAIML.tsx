'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Github } from 'lucide-react'

export default function ProjectsAIML() {
  const ref    = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="ai-projects"
      ref={ref}
      className="py-28 md:py-36 px-6 md:px-12"
      style={{ borderTop: '1px solid var(--grid-line)' }}
    >
      <div className="max-w-5xl mx-auto">

        {/* ── Header ──────────────────────────────────────── */}
        <div className="mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="font-mono text-xs tracking-widest mb-3"
            style={{ color: 'var(--accent)' }}
          >
            RA 05h 34m · DEC −05°
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-light leading-[0.92]"
            style={{ fontSize: 'clamp(2.8rem, 6vw, 4.5rem)', color: 'var(--text-primary)' }}
          >
            AI / ML
            <br />
            <em style={{ color: 'var(--accent)' }}>Projects</em>
          </motion.h2>
        </div>

        {/* ── Coming soon card ─────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden p-12 md:p-20 flex flex-col items-center text-center"
          style={{ border: '1px dashed var(--accent)' }}
        >
          {/* Background grid */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)',
              backgroundSize: '48px 48px',
              opacity: 0.4,
            }}
          />

          {/* Corner markers */}
          {['top-4 left-4', 'top-4 right-4', 'bottom-4 left-4', 'bottom-4 right-4'].map((pos, i) => (
            <span
              key={i}
              className={`absolute ${pos} w-2 h-2 rounded-full`}
              style={{ backgroundColor: 'var(--accent)', opacity: 0.5 }}
            />
          ))}

          {/* Orbital animation */}
          <div className="relative w-28 h-28 mb-10">
            {/* Outer ring */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{ border: '1px solid var(--accent)', opacity: 0.25 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            />
            {/* Mid ring */}
            <motion.div
              className="absolute inset-[20%] rounded-full"
              style={{ border: '1px solid var(--accent)', opacity: 0.4 }}
              animate={{ rotate: -360 }}
              transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
            />
            {/* Inner ring */}
            <motion.div
              className="absolute inset-[38%] rounded-full"
              style={{ border: '1px solid var(--accent)', opacity: 0.6 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'linear' }}
            />
            {/* Center pulse */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: 'var(--accent)' }}
                animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </div>

          {/* Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="font-mono text-xs tracking-widest mb-4"
            style={{ color: 'var(--accent)' }}
          >
            ── TRANSMISSION PENDING ──
          </motion.p>

          <h3
            className="font-display text-3xl md:text-4xl font-light mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            Signal detected.
            <br />
            Awaiting transmission.
          </h3>

          <p
            className="font-ui text-sm max-w-sm mb-8 leading-relaxed"
            style={{ color: 'var(--text-muted)' }}
          >
            AI/ML projects are currently being developed and trained. Check back soon —
            or watch the GitHub for early signals.
          </p>

          <a
            href="https://github.com/dkay9"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-ui text-xs tracking-widest uppercase px-6 py-3 transition-all duration-300"
            style={{ border: '1px solid var(--accent)', color: 'var(--accent)' }}
            onMouseEnter={e => {
              ;(e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'var(--accent)'
              ;(e.currentTarget as HTMLAnchorElement).style.color = '#07090F'
            }}
            onMouseLeave={e => {
              ;(e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent'
              ;(e.currentTarget as HTMLAnchorElement).style.color = 'var(--accent)'
            }}
          >
            <Github size={13} strokeWidth={1.5} />
            Watch on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
