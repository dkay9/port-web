'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

type Category = { name: string; items: string[] }

const STACK: Category[] = [
  {
    name: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    name: 'Backend',
    items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'GraphQL', 'REST APIs'],
  },
  {
    name: 'DevOps & Tools',
    items: ['Git', 'Docker', 'CI/CD', 'Vercel', 'AWS', 'Linux'],
  },
  {
    name: 'AI / ML',
    items: ['Python *', 'NumPy *', 'Pandas *', 'scikit-learn *', 'TensorFlow *'],
  },
]

export default function Skills() {
  const ref    = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="skills"
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
            RA 16h 41m · DEC +36°
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-light"
            style={{ fontSize: 'clamp(2.8rem, 6vw, 4.5rem)', color: 'var(--text-primary)' }}
          >
            The Stack
          </motion.h2>
        </div>

        {/* ── Grid ────────────────────────────────────────── */}
        <div
          className="grid md:grid-cols-2 gap-px"
          style={{ backgroundColor: 'var(--grid-line)' }}
        >
          {STACK.map((cat, catIdx) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: catIdx * 0.1 }}
              className="p-7 md:p-9"
              style={{ backgroundColor: 'var(--bg-primary)' }}
            >
              {/* Category label */}
              <div className="flex items-center gap-2 mb-6">
                <span className="w-4 h-px" style={{ backgroundColor: 'var(--accent)' }} />
                <p
                  className="font-mono text-xs tracking-widest uppercase"
                  style={{ color: 'var(--accent)' }}
                >
                  {cat.name}
                </p>
              </div>

              {/* Skill chips */}
              <div className="flex flex-wrap gap-2">
                {cat.items.map((skill, skillIdx) => {
                  const isLearning = skill.endsWith(' *')
                  const label      = isLearning ? skill.slice(0, -2) : skill

                  return (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.4,
                        delay: catIdx * 0.1 + skillIdx * 0.055,
                      }}
                      className="font-ui text-sm px-3.5 py-1.5 transition-all duration-300"
                      style={
                        isLearning
                          ? {
                              border: '1px dashed var(--accent)',
                              color: 'var(--accent)',
                            }
                          : {
                              border: '1px solid var(--grid-line)',
                              color: 'var(--text-primary)',
                            }
                      }
                    >
                      {label}
                    </motion.span>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Legend */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="font-mono text-xs tracking-widest mt-4"
          style={{ color: 'var(--text-muted)' }}
        >
          * currently learning
        </motion.p>
      </div>
    </section>
  )
}
