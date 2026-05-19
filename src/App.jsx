import { useEffect, useState, useCallback } from 'react'
import { useTheme } from './hooks/useTheme'
import Preloader from './components/Preloader'
import Hero from './sections/Hero'
import Summary from './sections/Summary'
import Services from './sections/Services'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Skills from './sections/Skills'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'
import Footer from './components/Footer'
import { nav } from './data/content'

import WhatsAppButton from './components/WhatsAppButton'

const SECTION_IDS = nav.map(n => n.href.replace('#', ''))

export default function App() {
  const { theme, toggle } = useTheme()
  const [activeSection, setActiveSection] = useState('hero')
  const [loaded, setLoaded] = useState(false)
  const handlePreloaderDone = useCallback(() => setLoaded(true), [])

  useEffect(() => {
    if (!loaded) return
    const observers = []
    SECTION_IDS.forEach(id => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach(o => o.disconnect())
  }, [])

  return (
    <div className="min-h-screen bg-page font-body antialiased transition-colors duration-300">
      {!loaded && <Preloader onDone={handlePreloaderDone} />}
      <Hero activeSection={activeSection} theme={theme} toggleTheme={toggle} />
      <main className="max-w-4xl mx-auto px-6 md:px-10">
        <Summary />
        <Services />
        <Projects />
        <Experience />
        <Skills />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
      <WhatsAppButton />
    </div>
  )
}
