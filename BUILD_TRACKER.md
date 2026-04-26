# Portfolio Build Tracker

Read this first. Tick off each task as you complete it. [ ] = todo · [~] = in progress · [x] = done

## Stack
- React 18 + Vite
- Tailwind CSS v3
- No extra dependencies
- Accent color: #c8ff57
- Fonts: Syne (headings) + DM Sans (body) — Google Fonts

## Folder Structure
```
portfolio/
├── BUILD_TRACKER.md
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── index.html
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── data/
    │   └── content.js
    ├── hooks/
    │   └── useTheme.js
    ├── components/
    │   ├── Sidebar.jsx
    │   ├── NavLink.jsx
    │   ├── ThemeToggle.jsx
    │   ├── Badge.jsx
    │   ├── ProjectCard.jsx
    │   ├── SkillTag.jsx
    │   └── SectionReveal.jsx
    └── sections/
        ├── Hero.jsx
        ├── Summary.jsx
        ├── Experience.jsx
        ├── Skills.jsx
        └── Links.jsx
```

## Task Checklist

### Phase 1 — Config & Setup
- [x] package.json
- [x] vite.config.js
- [x] tailwind.config.js
- [x] postcss.config.js
- [x] index.html

### Phase 2 — Data & Hooks
- [x] src/data/content.js ← ALL portfolio text lives here, edit only this to personalise
- [x] src/hooks/useTheme.js ← dark/light toggle, persists to localStorage

### Phase 3 — Components
- [x] src/components/ThemeToggle.jsx
- [x] src/components/NavLink.jsx
- [x] src/components/Badge.jsx
- [x] src/components/ProjectCard.jsx
- [x] src/components/SkillTag.jsx
- [x] src/components/SectionReveal.jsx ← IntersectionObserver scroll animation wrapper
- [x] src/components/Sidebar.jsx

### Phase 4 — Sections
- [x] src/sections/Hero.jsx ← letter-by-letter name animation on load
- [x] src/sections/Summary.jsx
- [x] src/sections/Experience.jsx ← job roles + project cards + bullet points
- [x] src/sections/Skills.jsx ← tag pills + tool icon grid
- [x] src/sections/Links.jsx ← contact links + CV download button

### Phase 5 — Assembly
- [x] src/index.css ← Tailwind directives + base styles
- [x] src/main.jsx
- [x] src/App.jsx ← wires sidebar + scroll spy + all sections

### Phase 6 — Verify
- [ ] npm install runs clean
- [ ] npm run dev loads in browser
- [ ] Dark/light toggle works
- [ ] Scroll animations fire on each section
- [ ] All nav links scroll-spy correctly
