'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import ThemeToggle from '@/components/ui/ThemeToggle'

const NAV_ITEMS = [
  { label: 'About',   href: '#about' },
  { label: 'Work',    href: '#projects' },
  { label: 'Stack',   href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [scrolled,     setScrolled]     = useState(false)
  const [menuOpen,     setMenuOpen]     = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 h-16 flex items-center justify-between transition-all duration-500"
        style={{
          backgroundColor: scrolled ? 'color-mix(in srgb, var(--bg-primary) 85%, transparent)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--grid-line)' : '1px solid transparent',
        }}
      >
        {/* Logo */}
        <Link href="/" className="font-mono text-xs tracking-widest" style={{ color: 'var(--accent)' }}>
          DK<span style={{ color: 'var(--text-muted)' }}>.dev</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-ui text-xs tracking-widest uppercase transition-colors duration-300"
              style={{ color: 'var(--text-muted)' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              {item.label}
            </a>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile: theme + burger */}
        <div className="flex md:hidden items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-8 h-8 flex flex-col items-center justify-center gap-[5px]"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="block w-4 h-px"
              style={{ backgroundColor: 'var(--text-primary)' }}
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-4 h-px"
              style={{ backgroundColor: 'var(--text-primary)' }}
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="block w-4 h-px"
              style={{ backgroundColor: 'var(--text-primary)' }}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <motion.div
        initial={false}
        animate={menuOpen ? { opacity: 1, pointerEvents: 'all' as const } : { opacity: 0, pointerEvents: 'none' as const }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-40 md:hidden flex flex-col justify-center items-center gap-8"
        style={{ backgroundColor: 'var(--bg-primary)' }}
      >
        {NAV_ITEMS.map((item, i) => (
          <motion.a
            key={item.label}
            href={item.href}
            onClick={() => setMenuOpen(false)}
            initial={{ opacity: 0, y: 20 }}
            animate={menuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: i * 0.07 }}
            className="font-display text-5xl font-light"
            style={{ color: 'var(--text-primary)' }}
          >
            {item.label}
          </motion.a>
        ))}
      </motion.div>
    </>
  )
}
