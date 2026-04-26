import { useEffect, useRef, useState } from 'react'
import SectionReveal from '../components/SectionReveal'
import { ToolIcons } from '../components/Icons'
import { skills } from '../data/content'
import { SectionLabel } from './Summary'

function ProficiencyBar({ name, level, delay }) {
  const [animated, setAnimated] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setAnimated(true); obs.unobserve(el) } },
      { threshold: 0.3 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} className="flex flex-col gap-1.5">
      <div className="flex items-center justify-between">
        <span className="font-body text-xs" style={{ color: 'var(--text-secondary)' }}>{name}</span>
        <span className="font-body text-xs tabular-nums" style={{ color: 'var(--text-muted)' }}>{level}%</span>
      </div>
      <div className="h-1 w-full rounded-full overflow-hidden" style={{ background: 'var(--border)' }}>
        <div
          className="h-full rounded-full transition-all duration-700 ease-out"
          style={{
            width: animated ? `${level}%` : '0%',
            transitionDelay: `${delay}ms`,
            background: 'var(--accent-text)',
          }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-24" style={{ borderBottom: '1px solid var(--border)' }}>
      <SectionReveal>
        <SectionLabel>Skills</SectionLabel>
      </SectionReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mb-12">
        <SectionReveal delay={60}>
          <p className="font-body font-semibold text-2xs uppercase tracking-widest mb-4"
            style={{ color: 'var(--text-muted)' }}>Technologies</p>
          <div className="flex flex-wrap gap-2">
            {skills.tags.map(tag => (
              <span key={tag}
                className="inline-flex items-center font-body font-medium text-xs px-3 py-1.5 rounded-lg transition-all duration-200 cursor-default"
                style={{ background: 'var(--card-bg)', color: 'var(--text-secondary)', border: '1px solid var(--border-card)' }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = 'var(--accent-text)'
                  e.currentTarget.style.borderColor = 'var(--accent-border)'
                  e.currentTarget.style.background = 'var(--accent-subtle)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = 'var(--text-secondary)'
                  e.currentTarget.style.borderColor = 'var(--border-card)'
                  e.currentTarget.style.background = 'var(--card-bg)'
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal delay={100}>
          <p className="font-body font-semibold text-2xs uppercase tracking-widest mb-4"
            style={{ color: 'var(--text-muted)' }}>Proficiency</p>
          <div className="flex flex-col gap-4">
            {skills.proficiency.map((item, i) => (
              <ProficiencyBar key={item.name} name={item.name} level={item.level} delay={i * 80} />
            ))}
          </div>
        </SectionReveal>
      </div>

      <SectionReveal delay={140}>
        <p className="font-body font-semibold text-2xs uppercase tracking-widest mb-4"
          style={{ color: 'var(--text-muted)' }}>Tools</p>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5">
          {skills.tools.map(tool => (
            <div key={tool.name}
              className="flex flex-col items-center gap-2 p-3.5 rounded-xl transition-all duration-200 cursor-default"
              style={{ background: 'var(--card-bg)', border: '1px solid var(--border-card)' }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--accent-border)'
                e.currentTarget.style.background = 'var(--accent-subtle)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border-card)'
                e.currentTarget.style.background = 'var(--card-bg)'
              }}
            >
              <span className="flex items-center justify-center" style={{ color: 'var(--text-secondary)' }} aria-hidden="true">
                {ToolIcons[tool.icon]}
              </span>
              <span className="font-body text-[11px] text-center leading-tight"
                style={{ color: 'var(--text-muted)' }}>{tool.name}</span>
            </div>
          ))}
        </div>
      </SectionReveal>
    </section>
  )
}
