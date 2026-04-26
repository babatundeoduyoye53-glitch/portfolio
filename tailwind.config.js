/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        accent: '#c8ff57',
        navy: '#0f1729',
        'navy-light': '#1a2540',
        'navy-card': '#1e2d4a',
        orange: '#e8722a',
        bg: {
          dark: '#0f1729',
          light: '#f5f4f0',
        },
        surface: {
          dark: '#1a2540',
          light: '#ffffff',
        },
        card: {
          dark: '#1e2d4a',
          light: '#fafafa',
        },
        text: {
          dark: '#f0ede8',
          light: '#111110',
        },
        muted: {
          dark: '#8a9bbf',
          light: '#888880',
        },
      },
      fontFamily: {
        heading: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['0.6875rem', { lineHeight: '1rem' }],   // 11px
        xs:   ['0.75rem',   { lineHeight: '1.125rem' }], // 12px
        sm:   ['0.875rem',  { lineHeight: '1.375rem' }], // 14px
        base: ['1rem',      { lineHeight: '1.625rem' }], // 16px
        lg:   ['1.125rem',  { lineHeight: '1.75rem' }],  // 18px
        xl:   ['1.25rem',   { lineHeight: '1.875rem' }], // 20px
        '2xl':['1.5rem',    { lineHeight: '2rem' }],     // 24px
        '3xl':['1.875rem',  { lineHeight: '2.25rem' }],  // 30px
        '4xl':['2.25rem',   { lineHeight: '2.5rem' }],   // 36px
        '5xl':['3rem',      { lineHeight: '1' }],        // 48px
        '6xl':['3.75rem',   { lineHeight: '1' }],        // 60px
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter:  '-0.03em',
        tight:    '-0.02em',
        normal:   '-0.01em',
        wide:     '0.04em',
        wider:    '0.08em',
        widest:   '0.12em',
      },
      maxWidth: {
        content: '680px',
      },
    },
  },
  plugins: [],
}
