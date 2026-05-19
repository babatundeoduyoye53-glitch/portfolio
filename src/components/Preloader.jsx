import { useEffect, useState } from 'react'
import { meta } from '../data/content'

// Punchy statements — each shows for ~900ms
const LINES = [
  { top: 'Clean code.', bottom: 'Beautiful interfaces.' },
  { top: 'Fast loads.', bottom: 'Zero compromises.' },
  { top: 'Pixel-perfect.', bottom: 'Every time.' },
  { top: 'Built for', bottom: 'real users.' },
]

export default function Preloader({ onDone }) {
  const [lineIdx, setLineIdx]     = useState(0)
  const [lineVisible, setLineVisible] = useState(true)
  const [showLogo, setShowLogo]   = useState(false)  // final logo frame
  const [exit, setExit]           = useState(false)

  useEffect(() => {
    let idx = 0
    const total = LINES.length

    // Cycle through lines every 900ms
    const cycle = setInterval(() => {
      // Fade out current line
      setLineVisible(false)

      setTimeout(() => {
        idx += 1
        if (idx >= total) {
          // All lines done — show logo frame
          clearInterval(cycle)
          setShowLogo(true)

          // Hold logo for 1s then fade out
          setTimeout(() => setExit(true),  1000)
          setTimeout(() => onDone(),        1900)
        } else {
          setLineIdx(idx)
          setLineVisible(true)
        }
      }, 250)
    }, 950)

    // Fade first line in immediately
    setLineVisible(true)

    return () => clearInterval(cycle)
  }, [onDone])

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
      style={{
        background: '#0a0a0a',
        opacity:    exit ? 0 : 1,
        transition: exit ? 'opacity 0.9s cubic-bezier(0.4,0,0.2,1)' : 'none',
        pointerEvents: exit ? 'none' : 'all',
      }}
    >
      {/* ── Text lines phase ── */}
      {!showLogo && (
        <div className="flex flex-col items-center gap-2 select-none">
          <span
            className="font-heading font-extrabold text-center"
            style={{
              fontSize: 'clamp(2rem, 6vw, 3.8rem)',
              letterSpacing: '-0.04em',
              lineHeight: 1.05,
              color: 'rgba(255,255,255,0.25)',
              opacity: lineVisible ? 1 : 0,
              transform: lineVisible ? 'translateY(0)' : 'translateY(12px)',
              transition: 'opacity 0.25s ease, transform 0.25s ease',
            }}
          >
            {LINES[lineIdx].top}
          </span>
          <span
            className="font-heading font-extrabold text-center"
            style={{
              fontSize: 'clamp(2rem, 6vw, 3.8rem)',
              letterSpacing: '-0.04em',
              lineHeight: 1.05,
              color: '#ffffff',
              opacity: lineVisible ? 1 : 0,
              transform: lineVisible ? 'translateY(0)' : 'translateY(12px)',
              transition: 'opacity 0.25s ease 0.05s, transform 0.25s ease 0.05s',
            }}
          >
            {LINES[lineIdx].bottom}
          </span>

          {/* Subtle progress dots */}
          <div className="flex items-center gap-1.5 mt-8">
            {LINES.map((_, i) => (
              <span
                key={i}
                className="rounded-full transition-all duration-300"
                style={{
                  width:  i === lineIdx ? '20px' : '6px',
                  height: '6px',
                  background: i === lineIdx ? '#c8ff57' : 'rgba(255,255,255,0.15)',
                }}
              />
            ))}
          </div>
        </div>
      )}

      {/* ── Logo frame (final 1s) ── */}
      {showLogo && (
        <div
          className="flex flex-col items-center gap-4"
          style={{
            animation: 'logoIn 0.5s cubic-bezier(0.22,1,0.36,1) both',
          }}
        >
          <div
            className="w-20 h-20 rounded-2xl flex items-center justify-center"
            style={{
              background: 'rgba(200,255,87,0.1)',
              border: '1px solid rgba(200,255,87,0.25)',
            }}
          >
            <span
              className="font-heading font-extrabold"
              style={{ fontSize: '2.2rem', color: '#c8ff57', letterSpacing: '-0.04em' }}
            >
              T
            </span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span
              className="font-heading font-extrabold text-white"
              style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', letterSpacing: '-0.04em', lineHeight: 1 }}
            >
              {meta.name}
            </span>
            <span
              className="font-body text-xs font-medium uppercase tracking-widest"
              style={{ color: '#c8ff57' }}
            >
              {meta.role}
            </span>
          </div>
        </div>
      )}

      <style>{`
        @keyframes logoIn {
          from { opacity: 0; transform: scale(0.9) translateY(10px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </div>
  )
}
