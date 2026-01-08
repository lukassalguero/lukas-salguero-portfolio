# Lukas Salguero Portfolio Website

## Overview
A personal portfolio website for Lukas Salguero, an AI & Business Automation professional and Web Developer. The site features a unique code editor aesthetic with VS Code-style tabs navigation and a terminal status bar.

## Project Structure
```
client/
├── src/
│   ├── components/
│   │   ├── ui/           # shadcn components
│   │   ├── EditorTabs.tsx    # VS Code-style tab navigation
│   │   └── TerminalBar.tsx   # Bottom terminal status bar
│   ├── pages/
│   │   ├── Home.tsx          # Landing page with typewriter animation
│   │   ├── About.tsx         # Bio, education, skills
│   │   ├── Portfolio.tsx     # Project showcase
│   │   ├── Experience.tsx    # Work experience timeline
│   │   └── Contact.tsx       # Contact information
│   ├── App.tsx           # Main app with routing
│   └── index.css         # Global styles and CSS variables
```

## Key Features
- **Multi-page navigation** with code editor tab styling
- **Typewriter animation** on home page cycling through titles
- **Terminal status bar** with rotating messages
- **Dark theme** with electric blue/cyan accents
- **Responsive design** for all screen sizes
- **No backend required** - static portfolio site

## Design System
- **Primary color**: Electric blue (hsl 199 89% 48%)
- **Accent color**: Cyan (hsl 187 85% 43%)
- **Background**: Dark navy (hsl 222 47% 5%)
- **Fonts**: Inter (sans), Fira Code (mono)

## Running the App
```bash
npm run dev
```
Runs on port 5000.

## Recent Changes
- January 2026: Initial portfolio implementation
  - Created 5-page portfolio with editor aesthetic
  - Implemented EditorTabs and TerminalBar components
  - Added typewriter animation effect
  - Configured dark theme with AI-focused color scheme
