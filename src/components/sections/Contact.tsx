'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, ArrowUpRight } from 'lucide-react'
import GithubIcon from '../ui/GithubIcon'
import LinkedinIcon from '../ui/LinkedinIcon'

const LINKS = [
  {
    label: 'Email',
    display: 'kaludavid411@gmail.com',
    href: 'mailto:kaludavid411@gmail.com',
    icon: Mail,
  },
  {
    label: 'GitHub',
    display: 'github.com/dkay9',
    href: 'https://github.com/dkay9',
    icon: GithubIcon,
  },
  {
    label: 'LinkedIn',
    display: 'linkedin.com/in/kalu-david',
    href: 'https://www.linkedin.com/in/kalu-david/',
    icon: LinkedinIcon,
  },
]

export default function Contact() {
  const ref    = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="contact"
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
            RA 23h 17m · DEC −45°
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-light leading-[0.92]"
            style={{ fontSize: 'clamp(2.8rem, 6vw, 4.5rem)', color: 'var(--text-primary)' }}
          >
            Make
            <br />
            <em style={{ color: 'var(--accent)' }}>Contact</em>
          </motion.h2>
        </div>

        {/* ── Body ────────────────────────────────────────── */}
        <div className="grid md:grid-cols-[1fr_360px] gap-12 md:gap-20 items-start">

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.15 }}
            className="font-display text-2xl md:text-[1.8rem] font-light leading-relaxed"
            style={{ color: 'var(--text-primary)' }}
          >
            Open to new roles, collaborations, and
            conversations about the future of software.
          </motion.p>

          {/* Links */}
          <div className="space-y-3">
            {LINKS.map(({ label, display, href, icon: Icon }, i) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.65, delay: 0.25 + i * 0.1 }}
                className="flex items-center justify-between p-4 transition-all duration-300"
                style={{ border: '1px solid var(--grid-line)' }}
                onMouseEnter={e => {
                  ;(e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--accent)'
                  ;(e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'var(--accent-soft)'
                }}
                onMouseLeave={e => {
                  ;(e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--grid-line)'
                  ;(e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent'
                }}
              >
                <div className="flex items-center gap-3">
                  <Icon size={13} strokeWidth={1.5} style={{ color: 'var(--accent)' }} />
                  <div>
                    <p className="font-mono text-[10px] tracking-widest uppercase" style={{ color: 'var(--text-muted)' }}>
                      {label}
                    </p>
                    <p className="font-ui text-sm" style={{ color: 'var(--text-primary)' }}>
                      {display}
                    </p>
                  </div>
                </div>
                <ArrowUpRight size={13} strokeWidth={1.5} style={{ color: 'var(--text-muted)' }} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Footer*/}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-24 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-3"
          style={{ borderTop: '1px solid var(--grid-line)' }}
        >
          <p className="font-mono text-xs tracking-widest" style={{ color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} David Kalu
          </p>
          <p className="font-mono text-xs tracking-widest" style={{ color: 'var(--text-muted)', opacity: 0.5 }}>
            DEAD STAR UI · BUILT WITH NEXT.JS + TYPESCRIPT
          </p>
        </motion.div>
      </div>
    </section>
  )
}
