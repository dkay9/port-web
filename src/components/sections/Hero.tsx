'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Mail } from 'lucide-react'
import GithubIcon from '../ui/GithubIcon'
import LinkedinIcon from '../ui/LinkedinIcon'

// ── Generated once at module level — never inside the component ──
const STARS = Array.from({ length: 70 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 1.5 + 0.5,
  delay: Math.random() * 4,
  duration: Math.random() * 5 + 3,
}))

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 overflow-hidden">

      {/* ── Stars ───────────────────────────────────────────── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {STARS.map((s) => (
          <motion.div
            key={s.id}
            className="absolute rounded-full"
            style={{
              left: `${s.x}%`,
              top: `${s.y}%`,
              width: s.size,
              height: s.size,
              backgroundColor: 'var(--accent)',
            }}
            animate={{ opacity: [0.05, 0.65, 0.05] }}
            transition={{ duration: s.duration, delay: s.delay, repeat: Infinity }}
          />
        ))}
      </div>

      {/* ── Orbit rings ─────────────────────────────────────── */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[38%] w-[520px] h-[520px] pointer-events-none opacity-[0.07]">
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{ border: '1px solid var(--accent)' }}
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute inset-[18%] rounded-full"
          style={{ border: '1px solid var(--text-muted)' }}
          animate={{ rotate: -360 }}
          transition={{ duration: 75, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute inset-[38%] rounded-full"
          style={{ border: '1px solid var(--accent)' }}
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute w-[3px] h-[3px] rounded-full"
          style={{
            backgroundColor: 'var(--accent)',
            top: '50%',
            left: '50%',
            marginLeft: -1.5,
            marginTop: -1.5,
            transformOrigin: '1.5px 130px',
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* ── Content ─────────────────────────────────────────── */}
      <div className="relative z-10 max-w-5xl pt-24">

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-mono text-xs tracking-widest mb-8 flex items-center gap-3"
          style={{ color: 'var(--text-muted)' }}
        >
          <span className="w-8 h-px" style={{ backgroundColor: 'var(--accent)' }} />
          RA 14h 29m · DEC +02° 44&apos; · NODE_001
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.35, ease: [0.16, 1, 0.3, 1] as const }}
          className="font-display leading-[0.88] mb-6"
          style={{
            fontSize: 'clamp(5rem, 14vw, 11rem)',
            fontWeight: 300,
            color: 'var(--text-primary)',
          }}
        >
          David
          <br />
          <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Kalu</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="font-ui text-xs md:text-sm tracking-[0.2em] uppercase mb-12 max-w-sm"
          style={{ color: 'var(--text-muted)' }}
        >
          Full-Stack Engineer navigating the edge of AI
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="group flex items-center gap-2 px-7 py-3 font-ui text-xs tracking-[0.15em] uppercase font-semibold transition-all duration-300"
            style={{ backgroundColor: 'var(--accent)', color: '#07090F' }}
            onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'var(--text-primary)')}
            onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'var(--accent)')}
          >
            View Work
            <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>

          <div className="flex items-center gap-2">
            {[
              { icon: GithubIcon,   href: 'https://github.com/dkay9',               label: 'GitHub' },
              { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/kalu-david/', label: 'LinkedIn' },
              { icon: Mail,         href: 'mailto:kaludavid411@gmail.com',           label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                className="w-[38px] h-[38px] flex items-center justify-center transition-all duration-300"
                style={{ border: '1px solid var(--border)', color: 'var(--text-muted)' }}
                onMouseEnter={e => {
                  ;(e.currentTarget as HTMLAnchorElement).style.color = 'var(--accent)'
                  ;(e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--accent)'
                }}
                onMouseLeave={e => {
                  ;(e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-muted)'
                  ;(e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--border)'
                }}
              >
                <Icon size={13} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── Scroll indicator ────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 left-6 md:left-12 flex items-center gap-3 font-mono text-xs tracking-widest"
        style={{ color: 'var(--text-muted)' }}
      >
        <motion.div
          className="w-px h-10 origin-top"
          style={{ backgroundColor: 'var(--accent)' }}
          animate={{ scaleY: [1, 0.2, 1] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        />
        scroll to explore
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 right-6 md:right-12 font-mono text-xs tracking-widest text-right hidden md:block"
        style={{ color: 'var(--text-muted)', opacity: 0.4 }}
      >
        DEAD STAR UI · v2
      </motion.div>
    </section>
  )
}