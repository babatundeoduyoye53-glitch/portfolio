import { useEffect, useState } from 'react'
import { meta } from '../data/content'

export default function Preloader({ onDone }) {
  const [phase, setPhase] = useState('enter') // enter → hold → exit

  useEffect(() => {
    const hold = setTimeout(() => setPhase('exit'),  1800)
    const done = setTimeout(() => onDone(),           2600)
    return () => { clearTimeout(hold); clearTimeout(done) }
  }, [onDone])

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
      style={{
        background: '#0a0a0a',
        opacity:    phase === 'exit' ? 0 : 1,
        transition: phase === 'exit' ? 'opacity 0.8s cubic-bezier(0.4,0,0.2,1)' : 'none',
        pointerEvents: phase === 'exit' ? 'none' : 'all',
      }}
    >
      <div
        style={{
          opacity:   phase === 'enter' ? 0 : 1,
          transform: phase === 'enter' ? 'translateY(16px) scale(0.95)' : 'translateY(0) scale(1)',
          transition: 'opacity 0.6s cubic-bezier(0.22,1,0.36,1) 0.1s, transform 0.6s cubic-bezier(0.22,1,0.36,1) 0.1s',
        }}
        className="flex flex-col items-center gap-5"
      >
        {/* Monogram */}
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center"
          style={{ background: 'rgba(200,255,87,0.1)', border: '1px solid rgba(200,255,87,0.2)' }}
        >
          <span
            className="font-heading font-extrabold text-3xl"
            style={{ color: '#c8ff57', letterSpacing: '-0.04em' }}
          >
            T
          </span>
        </div>

        {/* Name + role */}
        <div className="flex flex-col items-center gap-1.5">
          <span
            className="font-heading font-extrabold text-white"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', letterSpacing: '-0.04em', lineHeight: 1 }}
          >
            {meta.name}
          </span>
          <span
            className="font-body font-medium text-xs uppercase tracking-widest"
            style={{ color: '#c8ff57' }}
          >
            {meta.role}
          </span>
        </div>

        {/* Progress bar */}
        <div
          className="w-32 h-px rounded-full overflow-hidden"
          style={{ background: 'rgba(255,255,255,0.08)' }}
        >
          <div
            className="h-full rounded-full"
            style={{
              background: '#c8ff57',
              width: phase === 'enter' ? '0%' : '100%',
              transition: 'width 1.2s cubic-bezier(0.4,0,0.2,1) 0.3s',
            }}
          />
        </div>
      </div>
    </div>
  )
}
