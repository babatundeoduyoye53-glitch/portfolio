// ─────────────────────────────────────────────
//  ALL portfolio content lives here.
//  Edit this file to personalise your portfolio.
// ─────────────────────────────────────────────

export const meta = {
  name: 'Tunice',
  role: 'Frontend Developer',
  location: 'Ogun State, Nigeria',
  email: 'babatundeoduyoye53@gmail.com',
  phone: '+2349135575902',
  whatsapp: '2349135575902',
  linkedin: 'linkedin.com/in/babatunde-oduyoye',
  openToWork: true,
  cvUrl: '/cv.pdf', // ← drop your CV here when ready: public/cv.pdf
  photo: '/tunice.png',
}

export const summary = `I build fast, accessible web products — from pixel-perfect UIs to
resilient front-end architectures. Based in Nigeria and open to remote roles worldwide,
with a strong focus on React, performance, and clean system design.`

export const stats = [
  { value: '5+', label: 'Years experience' },
  { value: '20+', label: 'Projects shipped' },
  { value: '4', label: 'Teams served' },
  { value: '98', label: 'Lighthouse score' },
]

export const experience = [
  {
    company: 'Acme Corp',
    role: 'Senior Frontend Engineer',
    period: '2022 – Present',
    bullets: [
      'Led migration from CRA to Vite, cutting cold-start times by 70%.',
      'Designed a component library used across 4 product teams.',
      'Mentored 3 junior engineers through weekly code reviews.',
    ],
    projects: [
      {
        name: 'Design System v2',
        description: 'Headless component library with Radix UI primitives and Tailwind tokens.',
        tags: ['React', 'TypeScript', 'Tailwind'],
        url: 'https://github.com/babatunde-oduyoye',
      },
    ],
  },
  {
    company: 'Startup XYZ',
    role: 'Full-Stack Engineer',
    period: '2020 – 2022',
    bullets: [
      'Built real-time collaboration features using WebSockets and Redis.',
      'Reduced API p95 latency from 800 ms to 120 ms via query optimisation.',
      'Shipped mobile-responsive redesign that lifted conversion by 18%.',
    ],
    projects: [
      {
        name: 'Collab Editor',
        description: 'Real-time document editor with presence indicators and conflict resolution.',
        tags: ['Node.js', 'Redis', 'React'],
        url: 'https://github.com/babatunde-oduyoye',
      },
    ],
  },
  {
    company: 'Freelance',
    role: 'Web Developer',
    period: '2018 – 2020',
    bullets: [
      'Delivered 12+ client projects across e-commerce, SaaS, and marketing.',
      'Established CI/CD pipelines with GitHub Actions for all engagements.',
    ],
    projects: [],
  },
]

export const skills = {
  tags: [
    'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React',
    'Next.js', 'Tailwind CSS', 'Sass/SCSS', 'Framer Motion',
    'Responsive Design', 'Accessibility', 'Git', 'Figma', 'Vite', 'Performance',
  ],
  proficiency: [
    { name: 'React / Next.js', level: 95 },
    { name: 'TypeScript', level: 88 },
    { name: 'CSS / Tailwind', level: 92 },
    { name: 'Node.js', level: 72 },
    { name: 'Figma / Design', level: 78 },
    { name: 'Performance & a11y', level: 85 },
  ],
  tools: [
    { name: 'VS Code', icon: 'vscode' },
    { name: 'Figma', icon: 'figma' },
    { name: 'GitHub', icon: 'github' },
    { name: 'DevTools', icon: 'devtools' },
    { name: 'Vercel', icon: 'vercel' },
    { name: 'Netlify', icon: 'netlify' },
  ],
}

export const projects = [
  {
    name: 'Meridian Education Group',
    description: 'Premium multi-page higher-education website with a fully functional admin dashboard. Built with vanilla HTML, CSS & JS — featuring hero sliders, filterable programme grids, multi-step application forms, analytics charts, and localStorage-powered data management.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Chart.js', 'Responsive'],
    liveUrl: null,
    githubUrl: 'https://github.com/babatunde-oduyoye',
    featured: true,
  },
  {
    name: 'Design System v2',
    description: 'Headless component library built with Radix UI primitives and Tailwind design tokens. Used across 4 product teams.',
    tags: ['React', 'TypeScript', 'Tailwind', 'Radix UI'],
    liveUrl: null,
    githubUrl: 'https://github.com/babatunde-oduyoye',
    featured: true,
  },
  {
    name: 'Collab Editor',
    description: 'Real-time document editor with presence indicators, cursor tracking, and conflict resolution via operational transforms.',
    tags: ['Node.js', 'Redis', 'React', 'WebSockets'],
    liveUrl: null,
    githubUrl: 'https://github.com/babatunde-oduyoye',
    featured: true,
  },
  {
    name: 'E-Commerce Storefront',
    description: 'Performant storefront with SSR, image optimisation, and a custom checkout flow. Achieved 98 Lighthouse score.',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind'],
    liveUrl: null,
    githubUrl: 'https://github.com/babatunde-oduyoye',
    featured: false,
  },
  {
    name: 'Dev CLI Toolkit',
    description: 'A collection of Node.js CLI utilities for scaffolding, linting, and automating repetitive dev workflows.',
    tags: ['Node.js', 'Commander.js', 'Shell'],
    liveUrl: null,
    githubUrl: 'https://github.com/babatunde-oduyoye',
    featured: false,
  },
]

export const services = [
  {
    icon: 'frontend',
    title: 'Frontend Development',
    description: 'Pixel-perfect, performant UIs built with React and Next.js. From landing pages to complex SPAs.',
  },
  {
    icon: 'design',
    title: 'UI / UX Implementation',
    description: 'Translating Figma designs into production-ready code with attention to spacing, motion, and accessibility.',
  },
  {
    icon: 'components',
    title: 'Component Libraries',
    description: 'Scalable design systems and reusable component libraries with Storybook documentation.',
  },
  {
    icon: 'performance',
    title: 'Performance Optimisation',
    description: 'Auditing and improving Core Web Vitals, bundle size, and rendering performance.',
  },
]

export const testimonials = [
  {
    quote: 'Tunice delivered a flawless design system that our entire engineering org adopted within weeks. Exceptional attention to detail.',
    name: 'Sarah Chen',
    role: 'Engineering Manager',
    company: 'Acme Corp',
    avatar: null,
  },
  {
    quote: "One of the best frontend engineers I've worked with. Shipped the real-time editor on time and the code quality was outstanding.",
    name: 'Marcus Webb',
    role: 'CTO',
    company: 'Startup XYZ',
    avatar: null,
  },
  {
    quote: 'Fast, communicative, and the final product exceeded our expectations. Our Lighthouse score went from 62 to 98.',
    name: 'Amara Osei',
    role: 'Product Lead',
    company: 'Freelance Client',
    avatar: null,
  },
]

export const links = [
  { label: 'GitHub', url: 'https://github.com/babatunde-oduyoye', icon: 'github' },
  { label: 'LinkedIn', url: 'https://linkedin.com/in/babatunde-oduyoye', icon: 'linkedin' },
  { label: 'Twitter / X', url: 'https://x.com', icon: 'twitter' },
  { label: 'Email', url: 'mailto:babatundeoduyoye53@gmail.com', icon: 'email' },
]

export const nav = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#summary' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]
