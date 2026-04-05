'use client'

import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()

  // resolvedTheme is undefined during SSR — render placeholder until hydrated
  if (!resolvedTheme) return <div className="w-8 h-8" />

  return (
    <button
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      aria-label="Toggle theme"
      className="w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300"
      style={{
        border: '1px solid var(--border)',
        color: 'var(--text-muted)',
      }}
      onMouseEnter={e => {
        ;(e.currentTarget as HTMLButtonElement).style.color = 'var(--accent)'
        ;(e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--accent)'
      }}
      onMouseLeave={e => {
        ;(e.currentTarget as HTMLButtonElement).style.color = 'var(--text-muted)'
        ;(e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--border)'
      }}
    >
      {resolvedTheme === 'dark'
        ? <Sun size={12} strokeWidth={1.5} />
        : <Moon size={12} strokeWidth={1.5} />
      }
    </button>
  )
}