'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const INFO = [
  { label: 'Based in',    value: 'Nigeria' },
  { label: 'Focus',       value: 'Full-Stack + AI/ML' },
  { label: 'Availability', value: 'Open to opportunities' },
  { label: 'Currently',   value: 'Learning ML Engineering' },
]

export default function About() {
  const ref      = useRef<HTMLElement>(null)
  const inView   = useInView(ref, { once: true, margin: '-80px' })

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 22 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { 
        duration: 0.85, 
        delay, 
        ease: [0.16, 1, 0.3, 1] as const,
    },
  })

  return (
    <section
      id="about"
      ref={ref}
      className="py-28 md:py-36 px-6 md:px-12"
      style={{ borderTop: '1px solid var(--grid-line)' }}
    >
      <div className="max-w-5xl mx-auto grid md:grid-cols-[220px_1fr] gap-12 md:gap-20 items-start">

        {/* ── Left label (sticky on desktop) ──────────────── */}
        <motion.div
          {...fadeUp(0.05)}
          className="md:sticky md:top-28"
        >
          <p className="font-mono text-xs tracking-widest mb-3" style={{ color: 'var(--accent)' }}>
            RA 07h 45m · DEC −28°
          </p>
          <h2 className="font-display text-5xl md:text-6xl font-light" style={{ color: 'var(--text-primary)' }}>
            About
          </h2>
          <div className="mt-4 w-10 h-px" style={{ backgroundColor: 'var(--accent)' }} />
        </motion.div>

        {/* ── Right content ────────────────────────────────── */}
        <div className="space-y-7">
          <motion.p {...fadeUp(0.15)} className="font-display text-2xl md:text-[1.75rem] font-light leading-relaxed" style={{ color: 'var(--text-primary)' }}>
            I build things that live on the web — and I&apos;m learning to build things that think.
          </motion.p>

          <motion.p {...fadeUp(0.28)} className="font-ui text-sm leading-[1.9]" style={{ color: 'var(--text-muted)' }}>
            Full-stack engineering is my foundation — architecting scalable APIs, shipping polished UIs,
            and delivering products end-to-end. But the pull toward AI/ML has become impossible to ignore.
            I&apos;m now deep in that transition: training models, building pipelines, and weaving
            intelligence into everything I create.
          </motion.p>

          <motion.p {...fadeUp(0.38)} className="font-ui text-sm leading-[1.9]" style={{ color: 'var(--text-muted)' }}>
            This portfolio is a live artifact of that journey — part engineer, part explorer.
            Every project here represents a problem solved and a skill sharpened.
          </motion.p>

          {/* Info grid */}
          <motion.div {...fadeUp(0.5)} className="grid grid-cols-2 gap-px" style={{ backgroundColor: 'var(--grid-line)' }}>
            {INFO.map(({ label, value }) => (
              <div
                key={label}
                className="p-4"
                style={{ backgroundColor: 'var(--bg-primary)' }}
              >
                <p className="font-mono text-[10px] tracking-widest mb-1 uppercase" style={{ color: 'var(--text-muted)' }}>
                  {label}
                </p>
                <p className="font-ui text-sm" style={{ color: 'var(--text-primary)' }}>
                  {value}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
