# Design Guidelines: Developer Portfolio with IDE Aesthetic

## Design Approach
**Reference-Based**: Inspired by mathiaskunimoto.com and VS Code/IDE interfaces, creating a developer-centric portfolio that merges code editor aesthetics with professional business presentation.

## Core Visual Identity

**Theme**: Dark developer environment
- Primary background: Near-black (#0a0a0a) to dark navy (#0f172a)
- Accent colors: Electric blue (#3b82f6) and cyan (#06b6d4) for AI/tech feel
- Subtle gray tones for secondary elements (#1e293b, #334155)

**Typography**:
- Navigation/Code elements: `'Fira Code'`, `'JetBrains Mono'`, or `monospace`
- Body content: `'Inter'`, `'Nunito Sans'`, or clean sans-serif
- Headings: Sans-serif medium-bold weights (500-600)
- Code-style elements: Monospace regular (400)

## Layout System

**Spacing**: Tailwind units of 4, 6, 8, 12, 16, 20, 24 (p-4, mb-8, py-12, etc.)

**Page Structure** (applies to ALL pages):
- Top: Editor-style tab navigation (40-48px height)
- Main content: Responsive container (max-w-6xl)
- Bottom: Fixed terminal bar (32-40px height)

## Navigation System

**Top Tab Bar**:
- Style as code editor tabs
- Each tab: `index.tsx | about.tsx | portfolio.tsx | experience.tsx | contact.tsx`
- Active tab: brighter background, accent border-bottom
- Inactive tabs: slightly dimmed, hover brightens
- Tab padding: px-6 py-2
- Include close icons (×) on tabs for authenticity (non-functional)

**Terminal Bar** (Fixed Bottom):
- Dark background with slight transparency
- Monospace font displaying rotating messages:
  - "✓ AI workflows running..."
  - "✓ Projects deployed successfully"
  - "✓ Database optimized"
  - "⚡ Automation active"
- Green/cyan status indicators
- Height: py-2, text-sm

## Page-Specific Designs

### index.tsx (Home)
**Hero Section**:
- Full viewport height (min-h-screen minus nav/terminal)
- Centered content layout
- Large name: "LUKAS SALGUERO" (text-5xl to text-6xl, tracking-tight)
- Title with typewriter effect suggestion: "AI & Business Automation | Web Developer"
- Brief value proposition (2-3 lines, text-xl, text-gray-300)
- Primary CTA button with electric blue background
- Subtle grid pattern or code snippet background visual
- NO large hero image - keep it minimal/code-focused

### about.tsx (About)
**Layout**: Two-column on desktop (grid lg:grid-cols-2 gap-12)
- Left column: Profile info, education highlights
- Right column: Skills, interests, focus areas
- Section headers styled as code comments (// About, // Skills)
- Use card containers with subtle borders
- Include key facts in terminal-style boxes

### portfolio.tsx (Portfolio)
**Grid Layout**: Masonry-style or 2-column grid (md:grid-cols-2 gap-6)
- 5 project cards (client landing pages/websites)
- Each card:
  - Project thumbnail/screenshot placeholder
  - Title (text-xl font-medium)
  - Brief description (2-3 lines)
  - Tech stack tags (HTML, CSS, JS, AI tools) - small pills with dark bg
  - Business impact stat/highlight
  - Hover: subtle lift and accent border
- Avoid standard 3-column feature grids

### experience.tsx (Experience)
**Timeline Layout**: Vertical timeline or stacked cards
- 4 experience blocks:
  1. Business Intelligence Intern – BCP
  2. Freelance Web Developer
  3. Data Analytics Intern – InnovaLab
  4. Work and Travel Program
- Each block structure:
  - Role title + company (text-lg font-semibold)
  - Date range (text-sm text-gray-400)
  - 3-4 bullet points max (concise, impact-focused)
  - Tools/skills badges at bottom
- Use code block styling for bullet points (background: #1e293b)

### contact.tsx (Contact)
**Centered Layout**: max-w-2xl mx-auto
- Large heading: "Get In Touch"
- Contact methods in cards:
  - Email: lukasrexsg@gmail.com
  - LinkedIn: linkedin.com/in/lukassalguero/
  - GitHub: (provide link)
- Each method: icon + label + link
- Simple CTA: "Let's build something together"
- No complex forms - direct contact links only

## Component Library

**Buttons**:
- Primary: bg-blue-600, px-6 py-3, rounded-md, font-medium
- Secondary: border border-gray-600, bg-transparent
- Hover: brightness increase, no complex states

**Cards**:
- Background: rgba(30, 41, 59, 0.5)
- Border: 1px solid rgba(100, 116, 139, 0.3)
- Border-radius: rounded-lg
- Padding: p-6

**Badges/Tags**:
- Small pills for tech stack
- Background: rgba(59, 130, 246, 0.1)
- Border: 1px solid rgba(59, 130, 246, 0.3)
- Text: cyan/blue accent
- Size: text-xs px-3 py-1

## Images

**NO large hero images** - maintain code/terminal aesthetic

**Portfolio thumbnails**: 5 project screenshots
- Aspect ratio: 16:9 or 3:2
- Placement: Top of each portfolio card
- Treatment: Slight border, subtle shadow

**Optional decorative**: Subtle code pattern backgrounds, grid overlays, or terminal-style graphics as textures

## Responsive Behavior

- Desktop: Full multi-column layouts
- Tablet (md:): 2 columns where applicable
- Mobile: Single column stack, maintain tab navigation functionality

## Animations

**Minimal, purposeful only**:
- Typewriter effect on home title (optional)
- Terminal message rotation (subtle fade)
- Card hover lifts (transform: translateY(-2px))
- Tab switching transitions (smooth)
- NO scroll animations or heavy effects

## Accessibility

- Ensure tab navigation is keyboard-accessible
- Maintain sufficient color contrast (text on dark backgrounds)
- Focus states visible on all interactive elements
- Semantic HTML structure maintained throughout