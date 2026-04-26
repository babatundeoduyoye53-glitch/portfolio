export default function SkillTag({ children, small = false }) {
  return (
    <span
      className={`
        inline-flex items-center font-body font-medium rounded-md
        bg-black/[0.05] dark:bg-white/[0.06]
        text-text-light dark:text-text-dark
        border border-black/[0.06] dark:border-white/[0.06]
        hover:border-accent/40 hover:text-accent transition-colors duration-200
        ${small ? 'text-[11px] px-2 py-0.5' : 'text-xs px-2.5 py-1'}
      `}
    >
      {children}
    </span>
  )
}
