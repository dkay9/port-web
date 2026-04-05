'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { fullStackProjects } from '@/data/projects'
import GithubIcon from '../ui/GithubIcon'

export default function ProjectsFullStack() {
  const ref    = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="projects"
      ref={ref}
      className="py-28 md:py-36 px-6 md:px-12"
      style={{ borderTop: '1px solid var(--grid-line)' }}
    >
      <div className="max-w-5xl mx-auto">

        {/* ── Header ──────────────────────────────────────── */}
        <div className="flex items-end justify-between mb-14">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="font-mono text-xs tracking-widest mb-3"
              style={{ color: 'var(--accent)' }}
            >
              RA 22h 57m · DEC +20°
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-light leading-[0.92]"
              style={{ fontSize: 'clamp(2.8rem, 6vw, 4.5rem)', color: 'var(--text-primary)' }}
            >
              Full-Stack
              <br />
              <em style={{ color: 'var(--accent)' }}>Projects</em>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-mono text-xs hidden md:block text-right"
            style={{ color: 'var(--text-muted)' }}
          >
            {fullStackProjects.length} objects catalogued
          </motion.p>
        </div>

        {/* ── Projects list ────────────────────────────────── */}
        <div style={{ borderTop: '1px solid var(--grid-line)' }}>
          {fullStackProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: i * 0.12 }}
              className="group relative p-6 md:p-8 transition-all duration-500"
              style={{
                borderBottom: '1px solid var(--grid-line)',
                backgroundColor: 'transparent',
              }}
              onMouseEnter={e => {
                ;(e.currentTarget as HTMLDivElement).style.backgroundColor = 'var(--accent-soft)'
                ;(e.currentTarget as HTMLDivElement).style.borderColor = 'var(--accent)'
              }}
              onMouseLeave={e => {
                ;(e.currentTarget as HTMLDivElement).style.backgroundColor = 'transparent'
                ;(e.currentTarget as HTMLDivElement).style.borderColor = 'var(--grid-line)'
              }}
            >
              <div className="flex items-start gap-6">
                {/* Index */}
                <span
                  className="font-mono text-xs tracking-widest mt-1 hidden md:block shrink-0 w-16"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {project.id}
                </span>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3
                      className="font-display text-2xl md:text-3xl font-light transition-colors duration-300"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {project.title}
                    </h3>
                    <span
                      className="font-mono text-xs tracking-widest shrink-0 mt-1"
                      style={{ color: 'var(--accent)' }}
                    >
                      {project.year}
                    </span>
                  </div>

                  <p
                    className="font-ui text-sm leading-relaxed mb-5 max-w-2xl"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {project.description}
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-4">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[11px] px-2.5 py-1 tracking-wide"
                          style={{
                            border: '1px solid var(--grid-line)',
                            color: 'var(--text-muted)',
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 flex items-center justify-center transition-all duration-300"
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
                          <GithubIcon size={13} /> {/*<GithubIcon size={13} strokeWidth={1.5} /> */}
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 flex items-center justify-center transition-all duration-300"
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
                          <ExternalLink size={13} strokeWidth={1.5} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
