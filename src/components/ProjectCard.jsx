export default function ProjectCard({ name, description, tags = [], url }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer"
      className="group block p-4 rounded-xl transition-all duration-300"
      style={{ background: 'var(--card-bg)', border: '1px solid var(--border-card)' }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'var(--accent-border)'
        e.currentTarget.style.background = 'var(--card-hover-bg)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--border-card)'
        e.currentTarget.style.background = 'var(--card-bg)'
      }}
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        <h4 className="font-heading font-semibold text-sm leading-snug transition-colors duration-200"
          style={{ color: 'var(--text-primary)' }}>
          {name}
        </h4>
        <svg className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 transition-all duration-200"
          style={{ color: 'var(--text-muted)' }}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </div>
      <p className="font-body text-xs leading-relaxed mb-3" style={{ color: 'var(--text-muted)' }}>
        {description}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {tags.map(tag => (
          <span key={tag}
            className="font-body text-[11px] px-2 py-0.5 rounded-md"
            style={{ background: 'var(--border)', color: 'var(--text-muted)', border: '1px solid var(--border-card)' }}
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  )
}
