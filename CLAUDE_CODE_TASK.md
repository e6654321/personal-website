# Portfolio Rebuild Task - Claude Code

## Mission
Rebuild Ram Elram Espra's portfolio website to match approved mockups and incorporate updated CV content.

## Context Files to Read First

1. **HANDOFF_TO_CLAUDE_CODE.md** - Complete technical handoff document
2. **DESIGN_SPEC.md** - Design specifications from mockup approval
3. **Master CV** - `/home/ram/.openclaw/workspace/cv/ELRAM_CV_MASTER.md`

## Mockup Images (Reference These)

All located in `/home/ram/.openclaw/workspace/portfolio-mockups/`:
- `mockup-full-page.png` - PRIMARY REFERENCE (complete layout)
- `mockup-hero.png` - Hero section details
- `mockup-full-with-projects.png` - Projects showcase layout
- `mockup-blockchain-section.png` - Blockchain/Web3 section
- `mockup-web-projects.png` - Web projects cards
- `mockup-mobile-apps.png` - Mobile apps section
- `mockup-mobile-apps-detailed.png` - Mobile view details

## Working Directory
`/home/ram/.openclaw/workspace/repos/personal-website/`

## Key Constraints

### DO NOT MODIFY (CRITICAL)
1. Next.js version: **15.5.13** (not 16.x)
2. `.env.production` file (contains `NEXT_TURBOPACK=0`)
3. Build system: Webpack only
4. `package.json` core dependencies (next, react, react-dom versions)

### Required Tools
- **21st.dev CLI** for component scaffolding:
  ```bash
  npx 21st search "glassmorphic card"
  npx 21st add hero-section
  ```
  Reference: https://21st.dev/s/shadcn-ui

## Development Workflow

### Phase 1: Setup & Planning
1. Read all context documents
2. Analyze current `app/page.tsx` structure
3. Review mockups to understand layout
4. Create component breakdown plan

### Phase 2: Component Architecture
1. Create `/app/components/` directory
2. Build components in order:
   - `Hero.tsx` - Main hero section
   - `About.tsx` - About section with skills grid
   - `Projects.tsx` - Filterable projects showcase
   - `Experience.tsx` - Timeline with work history
   - `Contact.tsx` - Contact section
   - `Footer.tsx` - Footer with links

### Phase 3: Content Migration
Extract from CV (`/home/ram/.openclaw/workspace/cv/ELRAM_CV_MASTER.md`):
- Work experience: Symph (2025-Present), EthSign (2022-2025)
- Projects: Ray Media, TokenTable, MCash, RentCircle, AquaCue, etc.
- Tech stack: Mobile, Blockchain, Full-Stack
- Contact info

### Phase 4: Styling & Polish
- Match mockup colors exactly
- Implement framer-motion animations
- Test responsive layouts (mobile, tablet, desktop)
- Dark mode verification

### Phase 5: Build & Deploy
```bash
npm run build  # Must succeed without errors
git add .
git commit -m "Portfolio redesign - component architecture"
git push origin main  # Auto-deploys to staging
```

## Content Highlights from CV

### Professional Experience
1. **Symph (2025-Present)** - Full-Stack Developer
   - Ray Media App: 10,000+ users, TestFlight + Play Store
   - MCash/ML Money: React Native wallet for M Lhuillier
   - RentCircle: Tenant management app
   - AquaCue: CI/CD pipeline setup
   - NCC Hub 2.0: Backend microservices

2. **EthSign (2022-2025)** - Full-Stack & Blockchain Developer
   - TokenTable: Lead smart contract developer (TON blockchain)
   - C3 Platform: ETHGlobal hackathon winner
   - Smart contracts: TON FunC, Solidity
   - Web3 integration: Ethers.js, Web3 React

### Tech Stack Showcase
- **Mobile:** React Native (2+ years), iOS, Android, Firebase
- **Blockchain:** TON FunC, Solidity, Web3, Go-Ethereum
- **Frontend:** React, Next.js, TypeScript, Tailwind CSS
- **Backend:** Node.js, NestJS, Python, RabbitMQ, Microservices
- **Cloud:** GCP, AWS, Docker, CI/CD, Fastlane

## Design Requirements

### Visual Style (from mockups)
- Dark theme with blue/purple gradients
- Glassmorphic cards (backdrop-blur)
- Smooth animations (framer-motion)
- Gradient text for headings
- Hover effects on cards

### Layout Structure
```
┌─────────────────────────────────────┐
│ Hero - Name, title, CTA buttons     │
├─────────────────────────────────────┤
│ About - Brief intro, skills grid    │
├─────────────────────────────────────┤
│ Projects - Filterable cards         │
│  - Professional Work                │
│  - Blockchain/Web3                  │
│  - Mobile Apps                      │
│  - Web Projects                     │
├─────────────────────────────────────┤
│ Experience - Timeline               │
│  - Symph (current)                  │
│  - EthSign (blockchain)             │
├─────────────────────────────────────┤
│ Skills - Icon grid                  │
│  - Frontend, Backend,               │
│    Blockchain, Cloud                │
├─────────────────────────────────────┤
│ Contact - Email, links              │
├─────────────────────────────────────┤
│ Footer - © 2026                     │
└─────────────────────────────────────┘
```

## Success Criteria

- [ ] Visual match to `mockup-full-page.png`
- [ ] All CV content included
- [ ] Responsive (tested on mobile, tablet, desktop)
- [ ] Animations smooth and performant
- [ ] Build passes (`npm run build`)
- [ ] Deployed to staging successfully
- [ ] Dark mode works correctly
- [ ] No console errors
- [ ] Links working (GitHub, LinkedIn, email)

## Testing Checklist

### Functional
- [ ] All navigation links work
- [ ] Project filter buttons toggle correctly
- [ ] Contact form/links open correctly
- [ ] External links open in new tab

### Visual
- [ ] Matches mockup design
- [ ] Responsive breakpoints work
- [ ] Animations trigger correctly
- [ ] Dark mode consistent
- [ ] Images load properly

### Technical
- [ ] Build completes without errors
- [ ] No TypeScript errors
- [ ] No console warnings
- [ ] Lighthouse score > 90
- [ ] Page loads < 2 seconds

## Notes

- Focus on getting the layout and structure right first
- Styling can be refined after structure is approved
- Use 21st.dev components as starting points, customize as needed
- Reference existing framer-motion animations in current `page.tsx`
- Preserve all existing meta tags for SEO

## Questions?
Post in Discord thread if you need clarification on design or content decisions.

---

**Start Date:** 2026-03-18
**Target Completion:** Single focused session
**Staging URL:** https://mockup-preview-ten.vercel.app
**Production URL:** https://elram-portfolio.vercel.app
