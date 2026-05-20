import { useState, useEffect, useRef, useCallback } from 'react'
import { meta } from '../data/content'

const SLIDES = [
  { top: 'Clean code.', bottom: 'Beautiful interfaces.' },
  { top: 'Fast loads.', bottom: 'Zero compromises.' },
  { top: 'Pixel-perfect.', bottom: 'Every time.' },
  { top: 'Built for', bottom: 'real users.' },
]

const SLIDE_DURATION = 2200 // ms each slide stays

export default function Preloader({ onDone }) {
  const [idx, setIdx]           = useState(0)
  const [visible, setVisible]   = useState(true)
  const [showLogo, setShowLogo] = useState(false)
  const [exit, setExit]         = useState(false)
  const [paused, setPaused]     = useState(false)
  const [progress, setProgress] = useState(0)

  const pausedRef      = useRef(false)
  const progressRef    = useRef(0)
  const rafRef         = useRef(null)
  const startTimeRef   = useRef(null)
  const pausedAtRef    = useRef(null)

  // ── Advance to next slide ──────────────────
  const goNext = useCallback((currentIdx) => {
    setVisible(false)
    setTimeout(() => {
      const next = currentIdx + 1
      if (next >= SLIDES.length) {
        setShowLogo(true)
      } else {
        setIdx(next)
      }
      setVisible(true)
      setProgress(0)
      progressRef.current = 0
    }, 260)
  }, [])

  // ── RAF progress ticker ────────────────────
  const tick = useCallback((currentIdx) => {
    const run = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp

      if (pausedRef.current) {
        // Paused — remember when we paused
        if (!pausedAtRef.current) pausedAtRef.current = timestamp
        rafRef.current = requestAnimationFrame(run)
        return
      }

      // If we just resumed, shift start time forward
      if (pausedAtRef.current) {
        startTimeRef.current += timestamp - pausedAtRef.current
        pausedAtRef.current = null
      }

      const elapsed = timestamp - startTimeRef.current
      const pct = Math.min(elapsed / SLIDE_DURATION, 1)
      progressRef.current = pct
      setProgress(pct)

      if (pct < 1) {
        rafRef.current = requestAnimationFrame(run)
      } else {
        goNext(currentIdx)
      }
    }
    rafRef.current = requestAnimationFrame(run)
  }, [goNext])

  // Start ticker whenever idx changes (and not on logo screen)
  useEffect(() => {
    if (showLogo) return
    startTimeRef.current = null
    pausedAtRef.current  = null
    tick(idx)
    return () => cancelAnimationFrame(rafRef.current)
  }, [idx, showLogo, tick])

  // Logo screen — auto-enter after 1.5s (also pauseable)
  useEffect(() => {
    if (!showLogo) return
    const t = setTimeout(() => {
      setExit(true)
      setTimeout(() => onDone(), 900)
    }, 1500)
    return () => clearTimeout(t)
  }, [showLogo, onDone])

  // ── Hold to pause handlers ─────────────────
  const handleHoldStart = () => {
    pausedRef.current = true
    setPaused(true)
  }
  const handleHoldEnd = () => {
    pausedRef.current = false
    setPaused(false)
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col select-none"
      style={{
        background: '#0a0a0a',
        opacity:    exit ? 0 : 1,
        transition: exit ? 'opacity 0.9s cubic-bezier(0.4,0,0.2,1)' : 'none',
        pointerEvents: exit ? 'none' : 'all',
        cursor: 'default',
      }}
      onMouseDown={handleHoldStart}
      onMouseUp={handleHoldEnd}
      onMouseLeave={handleHoldEnd}
      onTouchStart={handleHoldStart}
      onTouchEnd={handleHoldEnd}
      onTouchCancel={handleHoldEnd}
    >
      {!showLogo ? (
        /* ── Text slides ── */
        <div className="flex-1 flex flex-col items-center justify-center px-8">
          <div
            className="flex flex-col items-center gap-2 text-center"
            style={{
              opacity:   visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(14px)',
              transition: 'opacity 0.26s ease, transform 0.26s ease',
            }}
          >
            <span
              className="font-heading font-extrabold"
              style={{
                fontSize: 'clamp(2.2rem, 7vw, 4.2rem)',
                letterSpacing: '-0.04em',
                lineHeight: 1.05,
                color: 'rgba(255,255,255,0.22)',
              }}
            >
              {SLIDES[idx].top}
            </span>
            <span
              className="font-heading font-extrabold"
              style={{
                fontSize: 'clamp(2.2rem, 7vw, 4.2rem)',
                letterSpacing: '-0.04em',
                lineHeight: 1.05,
                color: '#ffffff',
              }}
            >
              {SLIDES[idx].bottom}
            </span>
          </div>

          {/* Hold hint */}
          <div
            className="absolute bottom-16 flex flex-col items-center gap-1.5"
            style={{ opacity: paused ? 0.9 : 0.35, transition: 'opacity 0.3s ease' }}
          >
            <span className="font-body text-xs tracking-widest uppercase"
              style={{ color: paused ? '#c8ff57' : 'rgba(255,255,255,0.4)' }}>
              {paused ? 'Paused — release to continue' : 'Hold to pause'}
            </span>
          </div>

          {/* Progress bar + dots */}
          <div className="absolute bottom-8 flex flex-col items-center gap-3 w-full px-8">
            {/* Thin progress bar for current slide */}
            <div className="w-full max-w-xs h-px rounded-full overflow-hidden"
              style={{ background: 'rgba(255,255,255,0.08)' }}>
              <div
                className="h-full rounded-full"
                style={{
                  width: `${progress * 100}%`,
                  background: '#c8ff57',
                  transition: paused ? 'none' : 'none', // driven by RAF, no CSS transition
                }}
              />
            </div>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {SLIDES.map((_, i) => (
                <span key={i} className="rounded-full transition-all duration-300"
                  style={{
                    width:  i === idx ? '20px' : '6px',
                    height: '6px',
                    background: i < idx
                      ? 'rgba(200,255,87,0.5)'
                      : i === idx ? '#c8ff57'
                      : 'rgba(255,255,255,0.15)',
                  }}
                />
              ))}
              {/* Logo dot */}
              <span className="rounded-full" style={{ width: '6px', height: '6px', background: 'rgba(255,255,255,0.15)' }} />
            </div>
          </div>
        </div>
      ) : (
        /* ── Logo / Enter screen ── */
        <div
          className="flex-1 flex flex-col items-center justify-center gap-8 px-8"
          style={{
            opacity:   visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(14px)',
            transition: 'opacity 0.4s ease, transform 0.4s ease',
          }}
        >
          <div className="w-20 h-20 rounded-2xl flex items-center justify-center"
            style={{ background: 'rgba(200,255,87,0.1)', border: '1px solid rgba(200,255,87,0.25)' }}>
            <span className="font-heading font-extrabold"
              style={{ fontSize: '2.2rem', color: '#c8ff57', letterSpacing: '-0.04em' }}>
              T
            </span>
          </div>

          <div className="flex flex-col items-center gap-1.5 text-center">
            <span className="font-heading font-extrabold text-white"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', letterSpacing: '-0.04em', lineHeight: 1 }}>
              {meta.name}
            </span>
            <span className="font-body text-xs font-medium uppercase tracking-widest"
              style={{ color: '#c8ff57' }}>
              {meta.role}
            </span>
          </div>

          {/* All dots filled */}
          <div className="flex items-center gap-2">
            {SLIDES.map((_, i) => (
              <span key={i} className="rounded-full" style={{ width: '6px', height: '6px', background: 'rgba(200,255,87,0.5)' }} />
            ))}
            <span className="rounded-full" style={{ width: '20px', height: '6px', background: '#c8ff57' }} />
          </div>
        </div>
      )}
    </div>
  )
}
