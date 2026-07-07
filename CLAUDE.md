# Lukas Salguero — Personal Portfolio

## Who this is for
This is Lukas Salguero's personal portfolio website. Lukas is an Industrial Engineer (PUCP, Lima, Perú) currently working as Project Management Office at Siemens Energy. Prior experience: SDR internship at BCP (Peru's largest bank) and freelance digital-solutions consulting.

## Purpose
The site exists to help Lukas land junior roles at American and international startups in Project Management, Sales, and Business Development (BDR/SDR) and adjacent roles. Every page should present him as a strong, capable candidate for fast-moving startup teams.

## Audience
English-speaking recruiters and hiring managers at fast-paced tech startups. They read quickly and value clarity, impact, and evidence over buzzwords.

## Language & copy rules
- **All visible content must be in English** — no exceptions, regardless of the language used in the conversation with Claude.
- Keep copy concise, natural, and impact-oriented. Lead with results and metrics whenever possible.
- Avoid generic, inflated, or "AI-sounding" phrasing. No filler, no clichés, no corporate buzzwords.
- Prefer a clean, professional, modern feel that reads as credible to a startup audience — follow the existing UI patterns already established in the codebase rather than introducing new visual styles.

## Stack
- React 18 + TypeScript, Vite build, Wouter for routing
- Tailwind CSS + shadcn/ui (Radix primitives) for components
- Express server (`server/`) mainly serving the static build / dev middleware — no real backend logic beyond that
- Framer Motion for animations

## Structure
```
client/src/
├── App.tsx              # Routing
├── components/
│   ├── EditorTabs.tsx    # VS Code-style tab navigation
│   ├── TerminalBar.tsx   # Bottom terminal status bar
│   └── ui/               # shadcn components
└── pages/
    ├── Home.tsx          # Landing, typewriter animation
    ├── About.tsx         # Bio, education, skills
    ├── Portfolio.tsx     # Project showcase
    ├── Experience.tsx    # Work experience timeline
    └── Contact.tsx       # Contact info
```

## Design identity
The site uses a code-editor aesthetic (VS Code-style tabs, terminal status bar) with a dark theme and electric blue/cyan accents. Keep new UI consistent with this identity rather than introducing a different visual language.

## Running the app
```bash
npm run dev
```
Runs on port 5000.
