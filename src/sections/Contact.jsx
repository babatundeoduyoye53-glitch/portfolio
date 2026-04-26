import { useState } from 'react'
import SectionReveal from '../components/SectionReveal'
import { meta, links } from '../data/content'
import { SectionLabel } from './Summary'

const socialIcons = {
  github: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  twitter: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  email: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-4 h-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setStatus('sending')
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
    window.location.href = `mailto:${meta.email}?subject=${subject}&body=${body}`
    setTimeout(() => {
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
    }, 800)
  }

  const inputStyle = {
    background: 'var(--surface)',
    border: '1px solid var(--border-card)',
    color: 'var(--text-primary)',
  }

  return (
    <section id="contact" className="py-20 md:py-24 pb-28 md:pb-36">
      <SectionReveal>
        <SectionLabel>Get In Touch</SectionLabel>
      </SectionReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">

        {/* Left */}
        <SectionReveal delay={60}>
          <div>
            <h2 className="font-heading font-bold text-2xl md:text-3xl mb-4 leading-tight"
              style={{ letterSpacing: '-0.03em', color: 'var(--text-primary)' }}>
              Let's build something<br />
              <span style={{ color: 'var(--accent-text)' }}>great together.</span>
            </h2>
            <p className="font-body text-sm leading-relaxed mb-8 max-w-xs"
              style={{ color: 'var(--text-muted)' }}>
              Open to full-time roles, freelance projects, and interesting collaborations. Drop me a message and I'll get back within 24 hours.
            </p>

            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full mb-8"
              style={{ background: 'var(--accent-subtle)', border: '1px solid var(--accent-border)' }}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60"
                  style={{ background: 'var(--accent-text)' }} />
                <span className="relative inline-flex rounded-full h-2 w-2"
                  style={{ background: 'var(--accent-text)' }} />
              </span>
              <span className="font-body text-xs font-medium" style={{ color: 'var(--accent-text)' }}>
                Available for work
              </span>
            </div>

            <div className="flex items-center gap-2">
              {links.map(link => (
                <a key={link.label} href={link.url}
                  target={link.url.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer" aria-label={link.label}
                  className="w-9 h-9 flex items-center justify-center rounded-xl transition-all duration-200"
                  style={{ background: 'var(--card-bg)', border: '1px solid var(--border-card)', color: 'var(--text-muted)' }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = 'var(--accent-text)'
                    e.currentTarget.style.borderColor = 'var(--accent-border)'
                    e.currentTarget.style.background = 'var(--accent-subtle)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = 'var(--text-muted)'
                    e.currentTarget.style.borderColor = 'var(--border-card)'
                    e.currentTarget.style.background = 'var(--card-bg)'
                  }}
                >
                  {socialIcons[link.icon]}
                </a>
              ))}
            </div>
          </div>
        </SectionReveal>

        {/* Right — form */}
        <SectionReveal delay={120}>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
            <div className="grid grid-cols-2 gap-3.5">
              {[
                { id: 'contact-name', name: 'name', type: 'text', label: 'Name', placeholder: 'Your name' },
                { id: 'contact-email', name: 'email', type: 'email', label: 'Email', placeholder: 'you@example.com' },
              ].map(field => (
                <div key={field.id} className="flex flex-col gap-1.5">
                  <label htmlFor={field.id} className="font-body text-xs"
                    style={{ color: 'var(--text-muted)' }}>{field.label}</label>
                  <input
                    id={field.id} name={field.name} type={field.type} required
                    value={form[field.name]} onChange={handleChange} placeholder={field.placeholder}
                    className="w-full px-3.5 py-2.5 rounded-xl text-sm font-body transition-all duration-200 outline-none"
                    style={inputStyle}
                    onFocus={e => e.currentTarget.style.borderColor = 'var(--accent-border)'}
                    onBlur={e => e.currentTarget.style.borderColor = 'var(--border-card)'}
                  />
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-message" className="font-body text-xs"
                style={{ color: 'var(--text-muted)' }}>Message</label>
              <textarea
                id="contact-message" name="message" required rows={5}
                value={form.message} onChange={handleChange}
                placeholder="Tell me about your project or opportunity..."
                className="w-full px-3.5 py-2.5 rounded-xl text-sm font-body transition-all duration-200 outline-none resize-none"
                style={inputStyle}
                onFocus={e => e.currentTarget.style.borderColor = 'var(--accent-border)'}
                onBlur={e => e.currentTarget.style.borderColor = 'var(--border-card)'}
              />
            </div>

            <button type="submit"
              disabled={status === 'sending' || status === 'sent'}
              className="mt-1 inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full
                font-body font-semibold text-sm active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed
                transition-all duration-200 self-start"
              style={{ background: 'var(--accent-fill)', color: '#0a0a0a', boxShadow: '0 4px 24px var(--accent-subtle)' }}
            >
              {status === 'sending' && (
                <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
              )}
              {status === 'sent' ? '✓ Message sent!' : status === 'sending' ? 'Sending…' : 'Send Message'}
            </button>
          </form>
        </SectionReveal>
      </div>
    </section>
  )
}
