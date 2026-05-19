import { useEffect, useState } from 'react'
import { meta } from '../data/content'

const WORDS = ['Welcome', 'Hello', 'Bienvenue', 'Bienvenido', 'Willkommen']

export default function Preloader({ onDone }) {
  const [phase, setPhase]       = useState('enter')   // enter → hold → exit
  const [wordIdx, setWordIdx]   = useState(0)
  const [wordVisible, setWordVisible] = useState(true)

  useEffect(() => {
    // Cycle through greeting words every 700ms
    const wordInterval = setInterval(() => {
      setWordVisible(false)
      setTimeout(() => {
        setWordIdx(i => (i + 1) % WORDS.length)
        setWordVisible(true)
      }, 200)
    }, 800)

    // After 4s start fade-out, done at 5s
    const exitTimer = setTimeout(() => {
      clearInterval(wordInterval)
      setPhase('exit')
    }, 4000)

    const doneTimer = setTimeout(() => onDone(), 5000)

    return () => {
      clearInterval(wordInterval)
      clearTimeout(exitTimer)
      clearTimeout(doneTimer)
    }
  }, [onDone])

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-10"
      style={{
        background: '#0a0a0a',
        opacity:    phase === 'exit' ? 0 : 1,
        transition: phase === 'exit' ? 'opacity 1s cubic-bezier(0.4,0,0.2,1)' : 'none',
        pointerEvents: phase === 'exit' ? 'none' : 'all',
      }}
    >
      {/* Monogram */}
      <div
        className="w-20 h-20 rounded-2xl flex items-center justify-center"
        style={{
          background: 'rgba(200,255,87,0.08)',
          border: '1px solid rgba(200,255,87,0.2)',
          opacity:   phase === 'enter' ? 0 : 1,
          transform: phase === 'enter' ? 'scale(0.8)' : 'scale(1)',
          transition: 'opacity 0.7s cubic-bezier(0.22,1,0.36,1) 0.1s, transform 0.7s cubic-bezier(0.22,1,0.36,1) 0.1s',
        }}
      >
        <span
          className="font-heading font-extrabold"
          style={{ fontSize: '2rem', color: '#c8ff57', letterSpacing: '-0.04em' }}
        >
          T
        </span>
      </div>

      {/* Cycling greeting word */}
      <div className="flex flex-col items-center gap-3">
        <span
          className="font-heading font-extrabold"
          style={{
            fontSize: 'clamp(2.2rem, 6vw, 3.5rem)',
            letterSpacing: '-0.04em',
            color: '#ffffff',
            opacity:   wordVisible ? 1 : 0,
            transform: wordVisible ? 'translateY(0)' : 'translateY(10px)',
            transition: 'opacity 0.2s ease, transform 0.2s ease',
          }}
        >
          {WORDS[wordIdx]}
        </span>

        {/* Name + role */}
        <div
          className="flex flex-col items-center gap-1"
          style={{
            opacity:   phase === 'enter' ? 0 : 1,
            transform: phase === 'enter' ? 'translateY(8px)' : 'translateY(0)',
            transition: 'opacity 0.6s ease 0.5s, transform 0.6s ease 0.5s',
          }}
        >
          <span
            className="font-body text-sm font-medium uppercase tracking-widest"
            style={{ color: 'rgba(255,255,255,0.4)' }}
          >
            {meta.name} · {meta.role}
          </span>
        </div>
      </div>

      {/* Progress bar */}
      <div
        className="w-40 h-px rounded-full overflow-hidden"
        style={{
          background: 'rgba(255,255,255,0.08)',
          opacity:   phase === 'enter' ? 0 : 1,
          transition: 'opacity 0.4s ease 0.3s',
        }}
      >
        <div
          className="h-full rounded-full"
          style={{
            background: '#c8ff57',
            width: phase === 'enter' ? '0%' : '100%',
            transition: 'width 3.8s cubic-bezier(0.4,0,0.2,1) 0.4s',
          }}
        />
      </div>
    </div>
  )
}
