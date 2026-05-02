# Polar HVAC Services — Next.js Project

## Stack
- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (Apple-style scroll animations)

## Setup

```bash
npx create-next-app@latest polar-hvac --typescript --tailwind --app
cd polar-hvac
npm install framer-motion
```

## Folder Structure

```
polar-hvac/
├── app/
│   ├── layout.tsx          ← Root layout (nav + footer)
│   ├── page.tsx            ← Home page (all sections)
│   └── globals.css         ← CSS variables + base styles
├── components/
│   ├── Nav.tsx
│   ├── Hero.tsx
│   ├── WhyPolar.tsx        ← Sticky scroll / Apple-style panels
│   ├── Services.tsx
│   ├── Gallery.tsx
│   ├── FAQ.tsx
│   ├── Contact.tsx
│   ├── CtaStrip.tsx
│   └── Footer.tsx
├── lib/
│   └── data.ts             ← Services, FAQ data
└── public/
    └── logo.png
```

## Copy all component files from this folder into your Next.js project.
