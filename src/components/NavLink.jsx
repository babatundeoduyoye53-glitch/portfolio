export default function NavLink({ href, label, active, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`
        flex items-center gap-2 text-sm font-body py-1.5 px-2 rounded-md
        transition-colors duration-200 select-none
        ${active
          ? 'text-accent font-medium'
          : 'text-muted-light dark:text-muted-dark hover:text-text-light dark:hover:text-text-dark'
        }
      `}
    >
      {active && (
        <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
      )}
      {!active && <span className="w-1 h-1 flex-shrink-0" />}
      {label}
    </a>
  )
}
