import SectionReveal from '../components/SectionReveal'
import { summary, stats } from '../data/content'

export default function Summary() {
  return (
    <section id="summary" className="py-20 md:py-24" style={{ borderBottom: '1px solid var(--border)' }}>
      <SectionReveal>
        <SectionLabel>About</SectionLabel>
      </SectionReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
        <SectionReveal delay={60}>
          <p className="font-body text-base md:text-lg leading-[1.8] text-balance" style={{ color: 'var(--text-secondary)' }}>
            {summary}
          </p>
        </SectionReveal>

        <SectionReveal delay={120}>
          <div className="grid grid-cols-2 gap-3">
            {stats.map(s => (
              <div
                key={s.label}
                className="p-4 rounded-2xl flex flex-col gap-1 transition-colors duration-300"
                style={{ background: 'var(--card-bg)', border: '1px solid var(--border-card)' }}
              >
                <span
                  className="font-heading font-extrabold"
                  style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', letterSpacing: '-0.04em', lineHeight: 1, color: 'var(--accent-text)' }}
                >
                  {s.value}
                </span>
                <span className="font-body text-xs leading-snug" style={{ color: 'var(--text-muted)' }}>{s.label}</span>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}

export function SectionLabel({ children }) {
  return (
    <h2 className="font-body font-semibold text-2xs uppercase tracking-widest mb-7 flex items-center gap-3"
      style={{ color: 'var(--accent-text)' }}>
      <span className="w-5 h-px opacity-70" style={{ background: 'var(--accent-text)' }} />
      {children}
    </h2>
  )
}
