# Portfolio Rebuild - Handoff to Claude Code

## Project Overview
Rebuild Ram Elram Espra's portfolio website using approved mockups and updated CV content.

## Current Status
✅ **Staging Environment Ready**
- URL: https://mockup-preview-ten.vercel.app
- Branch: `main` (Next.js 15.5.13 + Webpack)
- Build system verified and working
- Identical to production baseline

## Objective
Transform the current portfolio into a modern, component-based design matching the approved mockups while incorporating content from the updated master CV.

## Key Resources

### 1. Approved Mockups
Location: `/home/ram/.openclaw/workspace/portfolio-mockups/`
- `mockup-full-page.png` - Complete page layout
- `mockup-hero.png` - Hero section design
- `mockup-full-with-projects.png` - Projects showcase
- `mockup-blockchain-section.png` - Blockchain/Web3 projects
- `mockup-web-projects.png` - Web projects section
- `mockup-mobile-apps.png` - Mobile apps section
- `mockup-mobile-apps-detailed.png` - Detailed mobile view

### 2. Content Source
**Master CV:** `/home/ram/.openclaw/workspace/cv/ELRAM_CV_MASTER.md`
- Complete work history (Symph, EthSign)
- Project descriptions
- Tech stack details
- Updated experience through March 2026

### 3. Design System Reference
**21st.dev Components:** `/home/ram/.openclaw/workspace/portfolio-mockups/DESIGN_SPEC.md`
- Component library: https://21st.dev/s/shadcn-ui
- Use `npx 21st` CLI for component scaffolding
- Glassmorphic cards, hero sections, animated backgrounds

### 4. Repository
**Location:** `/home/ram/.openclaw/workspace/repos/personal-website/`
- Current framework: Next.js 15.5.13
- Styling: Tailwind CSS
- Animations: Framer Motion
- Deployment: Vercel (staging auto-deploys from `main`)

## Technical Requirements

### Build System (CRITICAL - DO NOT CHANGE)
```json
{
  "next": "15.5.13",
  "react": "^19.2.4",
  "react-dom": "^19.2.4"
}
```

**Environment:**
- `.env.production`: `NEXT_TURBOPACK=0` (force Webpack)
- Build: Webpack (NOT Turbopack)
- Export mode: Static (`output: 'export'`)

### Styling Stack
- Tailwind CSS v4 syntax (`@import "tailwindcss"`)
- PostCSS config uses `@tailwindcss/postcss`
- Custom colors: ocean-blue, ocean-cyan, ocean-teal, ocean-emerald
- Dark mode: `class` strategy

### Animation
- Framer Motion 12.38.0
- Existing animations working (opacity, translateY, stagger)

## Project Structure

### Current (Monolithic)
```
app/
  page.tsx         # All content in one file
  globals.css      # Tailwind import only
  layout.tsx       # Root layout
```

### Target (Component-Based)
```
app/
  components/
    Hero.tsx
    About.tsx
    Projects.tsx
    Experience.tsx
    Contact.tsx
    Footer.tsx
  page.tsx         # Compose sections
  globals.css
  layout.tsx
```

## Content Migration Checklist

### From ELRAM_CV_MASTER.md

#### Professional Experience
- [x] Current role: Symph (2025-Present)
- [x] Blockchain role: EthSign (2022-2025)
- [ ] Extract key projects:
  - MCash / ML Money (React Native)
  - Ray Media App (10k+ users, TestFlight/Play Store)
  - RentCircle (React Native)
  - AquaCue (CI/CD)
  - NCC Hub 2.0 (Microservices)
  - TokenTable (TON blockchain)
  - C3 (ETHGlobal winner)

#### Tech Stack Highlights
- Mobile: React Native (2+ years)
- Blockchain: TON FunC, Solidity, Web3
- Full-Stack: React, Next.js, TypeScript, Node.js, NestJS
- Cloud: GCP, AWS, Firebase
- Notable: 10,000+ user app deployment, blockchain smart contracts

### Design Implementation

#### Hero Section
- "Building digital experiences" headline
- Emphasis on blockchain, AI platforms, scalable web apps
- CTA buttons: "View My Work", "Get in Touch"
- Glassmorphic "Available for opportunities" badge

#### Projects Showcase
- Categorize: Professional Work, Blockchain, Mobile, Web
- Cards with hover effects
- Tags for tech stack
- Links to live demos (where available)
- "Enterprise Project" badge for confidential work

#### Experience Timeline
- Visual timeline with gradient accents
- Symph (2020-Present)
- EthSign (2022-2025)
- Bullet points with key achievements

#### Skills Section
- Frontend, Backend, Blockchain, Cloud & DevOps
- Icon-based grid layout
- Hover effects

## Development Workflow

### 1. Create New Branch
```bash
git checkout -b redesign-2026
```

### 2. Component Development
For each section:
1. Extract content from `app/page.tsx`
2. Create component in `app/components/`
3. Use 21st.dev CLI for base components:
   ```bash
   npx 21st search "glassmorphic card"
   npx 21st add hero-section
   ```
4. Match mockup design exactly
5. Test responsive (mobile, tablet, desktop)

### 3. Testing
```bash
npm run build  # Must succeed
npm run dev    # Local preview
```

### 4. Deploy to Staging
```bash
git push origin redesign-2026
# Merge to main when ready → auto-deploys to staging
```

### 5. Production Promotion
After Ram's approval:
```bash
# Production is separate project - Ram will handle final deployment
```

## Design Specs from DESIGN_SPEC.md

### Color Palette
- Primary gradient: Blue → Purple → Pink
- Accent colors: Ocean blues/cyans
- Background: Gradient (slate-50 → blue-50/30 → purple-50/30)
- Dark mode: slate-950 base

### Typography
- Headings: Bold, large (5xl-8xl)
- Body: slate-600 (light), slate-300 (dark)
- Gradient text: blue-600 → purple-600 → pink-600

### Components to Use (21st.dev)
- Hero: `mikolajdobrucki/hero-section` or `Codehagen/hero`
- Cards: Glassmorphic with backdrop-blur
- Buttons: Gradient with hover effects
- Animations: Framer Motion fade-in, stagger

### Spacing & Layout
- Max width: 7xl container
- Padding: px-6
- Section spacing: py-28
- Cards: rounded-2xl

## Known Issues to Avoid

### ❌ DO NOT:
1. Change Next.js version or build system
2. Remove `.env.production` or `NEXT_TURBOPACK=0`
3. Use Turbopack (will break CSS)
4. Modify `tailwind.config.js` drastically
5. Remove framer-motion (animations in use)

### ✅ DO:
1. Keep identical Webpack setup
2. Use existing Tailwind config
3. Maintain static export mode
4. Test mobile responsiveness
5. Follow mockup designs precisely

## Success Criteria

- [ ] Matches approved mockups (visual parity)
- [ ] All content from master CV included
- [ ] Responsive (mobile, tablet, desktop)
- [ ] Animations smooth (framer-motion)
- [ ] Build succeeds without errors
- [ ] Staging deployment works
- [ ] Dark mode functional
- [ ] Performance: Fast load, optimized images
- [ ] SEO: Proper meta tags, semantic HTML

## Contact
If you need clarification, ask Ram directly in the Discord thread.

## Timeline
Target: Complete redesign in one focused session.

---

**Created:** 2026-03-18
**Staging URL:** https://mockup-preview-ten.vercel.app
**Production URL:** https://elram.dev
