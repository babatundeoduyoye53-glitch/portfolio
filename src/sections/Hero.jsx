import { useEffect, useState } from 'react'
import { meta, nav, stats } from '../data/content'
import profileImg from '/tunice.png'

function AnimatedName({ name }) {
  const letters = name.split('')
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 150)
    return () => clearTimeout(t)
  }, [])
  return (
    <span aria-label={name} className="inline-flex flex-wrap">
      {letters.map((char, i) => (
        <span
          key={i}
          aria-hidden="true"
          style={{
            display: 'inline-block',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(32px)',
            transition: `opacity 0.5s cubic-bezier(0.22,1,0.36,1) ${i * 38}ms, transform 0.5s cubic-bezier(0.22,1,0.36,1) ${i * 38}ms`,
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  )
}

export default function Hero({ activeSection, theme, toggleTheme }) {
  const handleNav = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  const isDark = theme === 'dark'

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col overflow-hidden"
    >
      {/* Photo — mobile */}
      <div className="absolute inset-0 z-0 block md:hidden"
        style={{ backgroundImage: `url(${profileImg})`, backgroundSize: 'cover', backgroundPosition: '50% 18%', backgroundRepeat: 'no-repeat' }}
      />
      {/* Photo — desktop */}
      <div className="absolute inset-0 z-0 hidden md:block"
        style={{ backgroundImage: `url(${profileImg})`, backgroundSize: '60%', backgroundPosition: 'right center', backgroundRepeat: 'no-repeat' }}
      />

      {/* Desktop: only a soft left-side fade so text stays readable */}
      <div className="absolute inset-0 z-[1] hidden md:block" style={{
        background: isDark
          ? 'linear-gradient(to right, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.85) 30%, rgba(10,10,10,0.4) 50%, transparent 65%)'
          : 'linear-gradient(to right, rgba(247,246,242,0.95) 0%, rgba(247,246,242,0.85) 30%, rgba(247,246,242,0.4) 50%, transparent 65%)',
      }} />

      {/* Mobile: darken so text over photo is readable */}
      <div className="absolute inset-0 z-[1] block md:hidden" style={{
        background: isDark
          ? 'linear-gradient(to bottom, rgba(10,10,10,0.25) 0%, rgba(10,10,10,0.05) 25%, rgba(10,10,10,0.65) 55%, rgba(10,10,10,0.9) 75%)'
          : 'linear-gradient(to bottom, rgba(247,246,242,0.3) 0%, rgba(247,246,242,0.05) 25%, rgba(247,246,242,0.7) 55%, rgba(247,246,242,0.92) 75%)',
      }} />

      {/* ── Top bar ── */}
      <div className="relative z-10 flex items-center justify-between px-6 md:px-10 pt-7">
        {meta.openToWork && (
          <span className="flex items-center gap-2 font-body text-xs font-medium tracking-wide"
            style={{ color: isDark ? 'rgba(255,255,255,0.7)' : 'rgba(17,17,16,0.6)' }}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60"
                style={{ background: 'var(--accent-text)' }} />
              <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: 'var(--accent-text)' }} />
            </span>
            Open to work
          </span>
        )}
        <div className="flex items-center gap-2 ml-auto">
          <button onClick={toggleTheme} aria-label="Toggle theme"
            className="w-8 h-8 flex items-center justify-center rounded-full transition-all duration-200"
            style={{ color: isDark ? 'rgba(255,255,255,0.4)' : 'rgba(17,17,16,0.4)' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-text)'}
            onMouseLeave={e => e.currentTarget.style.color = isDark ? 'rgba(255,255,255,0.4)' : 'rgba(17,17,16,0.4)'}
          >
            {isDark ? (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* ── Hero body ── */}
      <div className="relative z-10 flex-1 flex items-end md:items-center px-6 md:px-10 pt-4 pb-6 md:py-12">
        <div className="w-full md:w-[48%]">

          {/* Role label */}
          <p
            className="font-body font-semibold text-2xs uppercase tracking-widest mb-3 md:mb-4"
            style={{ animation: 'fadeUp 0.5s ease 0.2s both', color: 'var(--accent-text)' }}
          >
            {meta.role}
          </p>

          {/* Name */}
          <h1
            className="font-heading font-extrabold mb-5 md:mb-7"
            style={{
              fontSize: 'clamp(2.6rem, 5.5vw, 4.5rem)',
              letterSpacing: '-0.04em',
              lineHeight: 1.0,
              animation: 'fadeUp 0.5s ease 0.35s both',
              color: isDark ? '#ffffff' : '#111110',
            }}
          >
            <AnimatedName name={meta.name} />
          </h1>

          {/* Contact grid */}
          <div
            className="grid grid-cols-2 md:flex md:flex-wrap gap-x-5 md:gap-x-7 gap-y-2.5 mb-7 md:mb-8"
            style={{ animation: 'fadeUp 0.5s ease 0.65s both' }}
          >
            <ContactItem icon="email" text={meta.email} href={`mailto:${meta.email}`} isDark={isDark} />
            <ContactItem icon="phone" text={meta.phone} href={`tel:${meta.phone}`} isDark={isDark} />
            <ContactItem icon="linkedin" text={meta.linkedin} href={`https://${meta.linkedin}`} isDark={isDark} />
            <ContactItem icon="location" text={meta.location} isDark={isDark} />
          </div>

          {/* CTAs */}
          <div className="flex items-center gap-3" style={{ animation: 'fadeUp 0.5s ease 0.78s both' }}>
            <a href="#projects" onClick={e => handleNav(e, '#projects')}
              className="px-5 py-2.5 rounded-full font-body font-semibold text-xs tracking-wide active:scale-95 transition-all duration-200"
              style={{ background: 'var(--accent-fill)', color: '#0a0a0a' }}
            >
              View Work
            </a>
            <a href="#contact" onClick={e => handleNav(e, '#contact')}
              className="px-5 py-2.5 rounded-full font-body font-medium text-xs active:scale-95 transition-all duration-200"
              style={{
                background: isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.06)',
                border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
                color: isDark ? 'rgba(255,255,255,0.8)' : 'rgba(17,17,16,0.75)',
              }}
            >
              Hire Me
            </a>
          </div>

          {/* Mini stats row */}
          <div
            className="hidden md:flex items-center gap-6 mt-8 pt-6"
            style={{ animation: 'fadeUp 0.5s ease 0.9s both', borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.07)'}` }}
          >
            {stats.map(s => (
              <div key={s.label} className="flex flex-col gap-0.5">
                <span className="font-heading font-extrabold text-lg leading-none"
                  style={{ letterSpacing: '-0.04em', color: isDark ? '#ffffff' : '#111110' }}>
                  {s.value}
                </span>
                <span className="font-body text-[11px] leading-tight" style={{ color: 'var(--text-muted)' }}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom nav bar ── */}
      <div
        className="relative z-10 px-6 md:px-10 pb-7 md:pb-9 flex justify-start"
        style={{ animation: 'fadeUp 0.5s ease 0.85s both' }}
      >
        <nav aria-label="Page sections"
          className="flex items-center gap-0.5 overflow-x-auto scrollbar-hide rounded-full px-1.5 py-1.5"
          style={{
            background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
            border: `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'}`,
            backdropFilter: 'blur(12px)',
          }}
        >
          {nav.map(item => {
            const id = item.href.replace('#', '')
            const isActive = activeSection === id
            return (
              <a key={item.href} href={item.href} onClick={e => handleNav(e, item.href)}
                className="px-4 py-1.5 rounded-full font-body font-medium text-xs whitespace-nowrap flex-shrink-0 transition-all duration-200"
                style={{
                  background: isActive ? (isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.08)') : 'transparent',
                  color: isActive
                    ? (isDark ? '#ffffff' : '#111110')
                    : (isDark ? 'rgba(255,255,255,0.45)' : 'rgba(17,17,16,0.45)'),
                }}
              >
                {item.label}
              </a>
            )
          })}
        </nav>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  )
}

function ContactItem({ icon, text, href, isDark }) {
  const iconColor = isDark ? 'rgba(255,255,255,0.55)' : 'rgba(17,17,16,0.5)'
  const icons = {
    email: (
      <svg className="w-3 h-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    phone: (
      <svg className="w-3 h-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    linkedin: (
      <svg className="w-3 h-3 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    location: (
      <svg className="w-3 h-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  }

  const content = (
    <span className="flex items-center gap-1.5 font-body text-xs truncate transition-colors duration-200"
      style={{ color: iconColor }}>
      {icons[icon]}
      <span className="truncate">{text}</span>
    </span>
  )

  return href
    ? <a href={href} className="min-w-0">{content}</a>
    : <span className="min-w-0">{content}</span>
}


