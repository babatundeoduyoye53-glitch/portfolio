import SectionReveal from '../components/SectionReveal'
import ProjectCard from '../components/ProjectCard'
import { experience } from '../data/content'
import { SectionLabel } from './Summary'

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-24" style={{ borderBottom: '1px solid var(--border)' }}>
      <SectionReveal>
        <SectionLabel>Experience</SectionLabel>
      </SectionReveal>

      <div className="flex flex-col gap-12 md:gap-14">
        {experience.map((job, idx) => (
          <SectionReveal key={job.company} delay={idx * 70}>
            <div className="flex items-start justify-between gap-4 mb-1">
              <div>
                <h3 className="font-heading font-semibold text-base md:text-lg leading-snug"
                  style={{ color: 'var(--text-primary)' }}>
                  {job.role}
                </h3>
                <span className="font-body text-sm mt-0.5 block" style={{ color: 'var(--text-muted)' }}>
                  {job.company}
                </span>
              </div>
              <span className="font-body text-xs whitespace-nowrap mt-1 shrink-0 tabular-nums"
                style={{ color: 'var(--text-muted)' }}>
                {job.period}
              </span>
            </div>

            <div className="w-full h-px my-4" style={{ background: 'var(--border)' }} />

            <ul className="mb-5 flex flex-col gap-2.5">
              {job.bullets.map((b, i) => (
                <li key={i} className="flex gap-3 font-body text-sm leading-relaxed"
                  style={{ color: 'var(--text-secondary)' }}>
                  <span className="mt-[0.45rem] w-1 h-1 rounded-full flex-shrink-0"
                    style={{ background: 'var(--accent-text)', opacity: 0.7 }} />
                  {b}
                </li>
              ))}
            </ul>

            {job.projects.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1">
                {job.projects.map(p => <ProjectCard key={p.name} {...p} />)}
              </div>
            )}
          </SectionReveal>
        ))}
      </div>
    </section>
  )
}
