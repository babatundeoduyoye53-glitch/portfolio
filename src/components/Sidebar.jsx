import NavLink from './NavLink'
import ThemeToggle from './ThemeToggle'
import { meta, nav } from '../data/content'

export default function Sidebar({ activeSection, theme, toggleTheme }) {
  const handleNavClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <aside className="
      fixed top-0 left-0 h-screen w-[220px]
      bg-surface-light dark:bg-surface-dark
      border-r border-black/[0.08] dark:border-white/[0.08]
      flex flex-col z-40
    ">
      {/* Logo / Name */}
      <div className="px-5 pt-8 pb-6 border-b border-black/[0.06] dark:border-white/[0.06]">
        <a
          href="#hero"
          onClick={e => handleNavClick(e, '#hero')}
          className="block"
        >
          <span className="font-heading font-bold text-base text-text-light dark:text-text-dark leading-tight block">
            {meta.name}
          </span>
          <span className="font-body text-xs text-muted-light dark:text-muted-dark mt-0.5 block">
            {meta.role}
          </span>
        </a>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-5 flex flex-col gap-0.5">
        {nav.map(item => (
          <NavLink
            key={item.href}
            href={item.href}
            label={item.label}
            active={activeSection === item.href.replace('#', '')}
            onClick={e => handleNavClick(e, item.href)}
          />
        ))}
      </nav>

      {/* Open to work */}
      {meta.openToWork && (
        <div className="px-5 py-3 border-t border-black/[0.06] dark:border-white/[0.06]">
          <span className="flex items-center gap-2 text-xs font-body text-muted-light dark:text-muted-dark">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            Open to work
          </span>
        </div>
      )}

      {/* Theme toggle */}
      <div className="px-5 py-4 border-t border-black/[0.06] dark:border-white/[0.06]">
        <ThemeToggle theme={theme} toggle={toggleTheme} />
      </div>
    </aside>
  )
}
