import SectionReveal from '../components/SectionReveal'
import { services } from '../data/content'
import { SectionLabel } from './Summary'

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-24" style={{ borderBottom: '1px solid var(--border)' }}>
      <SectionReveal>
        <SectionLabel>What I Do</SectionLabel>
      </SectionReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {services.map((service, i) => (
          <SectionReveal key={service.title} delay={i * 60}>
            <div
              className="group p-5 rounded-2xl h-full transition-all duration-300 cursor-default"
              style={{ background: 'var(--card-bg)', border: '1px solid var(--border-card)' }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'var(--card-hover-bg)'
                e.currentTarget.style.borderColor = 'var(--accent-border)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'var(--card-bg)'
                e.currentTarget.style.borderColor = 'var(--border-card)'
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span
                  className="w-9 h-9 flex items-center justify-center rounded-xl text-lg leading-none transition-colors duration-300"
                  style={{ background: 'var(--border)' }}
                  role="img" aria-label={service.title}
                >
                  {service.icon}
                </span>
                <h3 className="font-heading font-semibold text-sm transition-colors duration-200"
                  style={{ color: 'var(--text-primary)' }}>
                  {service.title}
                </h3>
              </div>
              <p className="font-body text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                {service.description}
              </p>
            </div>
          </SectionReveal>
        ))}
      </div>
    </section>
  )
}
