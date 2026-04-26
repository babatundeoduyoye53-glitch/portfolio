import { useEffect, useState } from 'react'
import { meta } from '../data/content'

function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
      className={`
        fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full
        flex items-center justify-center transition-all duration-300
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}
      `}
      style={{ background: 'var(--card-bg)', border: '1px solid var(--border-card)', color: 'var(--text-muted)' }}
      onMouseEnter={e => {
        e.currentTarget.style.background = 'var(--accent-fill)'
        e.currentTarget.style.borderColor = 'var(--accent-fill)'
        e.currentTarget.style.color = '#0a0a0a'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = 'var(--card-bg)'
        e.currentTarget.style.borderColor = 'var(--border-card)'
        e.currentTarget.style.color = 'var(--text-muted)'
      }}
    >
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  )
}

export default function Footer() {
  return (
    <>
      <footer className="py-7" style={{ borderTop: '1px solid var(--border)' }}>
        <p className="font-body text-xs text-center tracking-wide" style={{ color: 'var(--text-muted)' }}>
          © {new Date().getFullYear()} {meta.name}. Built with React & Tailwind CSS.
        </p>
      </footer>
      <ScrollToTop />
    </>
  )
}
