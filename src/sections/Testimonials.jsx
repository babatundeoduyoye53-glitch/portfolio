import SectionReveal from '../components/SectionReveal'
import { testimonials } from '../data/content'
import { SectionLabel } from './Summary'

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-24" style={{ borderBottom: '1px solid var(--border)' }}>
      <SectionReveal>
        <SectionLabel>Testimonials</SectionLabel>
      </SectionReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {testimonials.map((t, i) => (
          <SectionReveal key={t.name} delay={i * 70}>
            <figure
              className="flex flex-col h-full p-5 rounded-2xl transition-all duration-300"
              style={{ background: 'var(--card-bg)', border: '1px solid var(--border-card)' }}
            >
              <span className="font-heading font-extrabold text-4xl leading-none mb-3 select-none"
                aria-hidden="true" style={{ color: 'var(--accent-text)', opacity: 0.35 }}>
                "
              </span>

              <blockquote className="font-body text-sm leading-relaxed flex-1 mb-5"
                style={{ color: 'var(--text-secondary)' }}>
                {t.quote}
              </blockquote>

              <figcaption className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: 'var(--accent-subtle)', border: '1px solid var(--accent-border)' }}>
                  <span className="font-heading font-bold text-xs" style={{ color: 'var(--accent-text)' }}>
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-body font-semibold text-xs" style={{ color: 'var(--text-primary)' }}>{t.name}</p>
                  <p className="font-body text-[11px]" style={{ color: 'var(--text-muted)' }}>{t.role} · {t.company}</p>
                </div>
              </figcaption>
            </figure>
          </SectionReveal>
        ))}
      </div>
    </section>
  )
}
