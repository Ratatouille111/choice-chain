# Choice Chain

An interactive STS (Science, Technology, and Society) ethical decision-making simulator.

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production

```bash
npm run build
```

---

## Deploy to Vercel

### Option A — GitHub + Vercel (recommended)

1. Push this folder to a new GitHub repository
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your GitHub repo
4. Click **Deploy** — no configuration needed

### Option B — Vercel CLI

```bash
npm install -g vercel
vercel
```

---

## Project Structure

```
choice-chain/
├── app/
│   ├── data/
│   │   └── scenarios.ts       # All 10 STS modules with full content
│   ├── scenarios/
│   │   ├── page.tsx           # Scenario list grid
│   │   └── [id]/
│   │       └── page.tsx       # Individual scenario + result
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx               # Home screen
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## Modules Covered

1. Technology as a Way of Revealing (Heidegger)
2. Human Flourishing in Progress and De-development (Jason Hickel)
3. The Good Life (Aristotle)
4. When Technology and Humanity Cross (UDHR + UN frameworks)
5. Why the Future Doesn't Need Us (Bill Joy)
6. The Information Age (Manuel Castells)
7. Biodiversity and a Healthy Society (IPBES)
8. GMOs and Gene Therapy (Doudna, Charpentier, Boyer, Cohen)
9. Nanotechnology (Feynman, Taniguchi)
10. Climate Change and Environmental Awareness (IPCC, Arrhenius)

## Features

- 10 STS ethical scenarios, each with 3 reflective choices
- Detailed STS theory feedback per choice
- Progress tracker saved in localStorage
- Mobile-first, phone-optimized layout
- No backend or login required
