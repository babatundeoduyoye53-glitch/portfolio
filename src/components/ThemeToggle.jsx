export default function ThemeToggle({ theme, toggle }) {
  const isDark = theme === 'dark'
  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className="flex items-center gap-2 text-sm font-body text-muted-dark dark:text-muted-dark text-muted-light hover:text-accent transition-colors duration-200"
    >
      <span className="w-8 h-4 rounded-full border border-white/10 dark:border-white/10 border-black/10 relative flex items-center px-0.5 transition-colors duration-300"
        style={{ background: isDark ? '#2a2a2a' : '#e0e0d8' }}>
        <span
          className="w-3 h-3 rounded-full transition-transform duration-300"
          style={{
            background: '#c8ff57',
            transform: isDark ? 'translateX(16px)' : 'translateX(0)',
          }}
        />
      </span>
      {isDark ? 'Dark' : 'Light'}
    </button>
  )
}
