# Portfolio Rebuild Task - Claude Code (21st.dev Components Required)

## Mission
Rebuild Ram Elram Espra's portfolio website using **21st.dev components** to match approved mockups with phone frames, browser frames, and glassmorphic effects.

## CRITICAL: Use 21st.dev Components

**DO NOT use custom CSS components.** Install and use actual 21st.dev components via shadcn CLI.

### Installation Pattern
```bash
npx shadcn@latest add "https://21st.dev/r/[component-path]"
```

### Required Components (Browse 21st.dev to find these)

1. **Hero Section** ✅ FOUND
   - Component: Hero Section 6 from Tailark
   - Install: `npx shadcn@latest add https://21st.dev/r/meschacirung/hero-section-6`
   - Use for: Main hero with name, title, CTA buttons

2. **Glassmorphic Cards** (Search: "glass", "card", "blur")
   - Browse: https://21st.dev/community/components/s/shadcn-ui?search=glass
   - Use for: Blockchain projects section, tech stack section

3. **Phone Frame / Mobile Showcase** (Search: "phone", "mobile", "device")
   - Browse: https://21st.dev/community/components/s/shadcn-ui?search=phone
   - Use for: Mobile apps section (RentCircle, MCash, Ray Media, mWell, Paysme)
   - **MUST show phone frames with screenshots inside** as seen in `mockup-mobile-apps.png`

4. **Browser Frame / Web Showcase** (Search: "browser", "window", "web")
   - Browse: https://21st.dev/community/components/s/shadcn-ui?search=browser
   - Use for: Web projects section (TokenTable, EthSign, ML Shop, Watch My Back)
   - **MUST show browser chrome with address bar** as seen in `mockup-web-projects.png`

5. **Project Cards** (Search: "card", "project", "portfolio")
   - Browse: https://21st.dev/community/components/s/shadcn-ui?search=project
   - Use for: Blockchain/Web3 projects with hover effects

6. **Contact Section** (Search: "contact", "footer")
   - Browse: https://21st.dev/community/components/s/shadcn-ui?search=contact

## Workflow

### Phase 1: Component Discovery
1. Browse https://21st.dev/community/components/s/shadcn-ui
2. Search for each component type listed above
3. Click on promising components to see installation commands
4. Document the exact installation URLs

### Phase 2: Component Installation
```bash
cd /home/ram/.openclaw/workspace/repos/personal-website
npx shadcn@latest add "https://21st.dev/r/[component-1]"
npx shadcn@latest add "https://21st.dev/r/[component-2]"
# ... install all required components
```

### Phase 3: Implementation
1. Import installed 21st.dev components
2. Customize with Ram's content from CV
3. Match mockup styling (colors, spacing, animations)
4. Implement phone frames and browser frames exactly as shown in mockups

### Phase 4: Build & Deploy
```bash
npm run build  # Must succeed
git add .
git commit -m "Portfolio rebuild - 21st.dev components"
git push origin main
```

## Mockup References

Located in `/home/ram/.openclaw/workspace/portfolio-mockups/`:
- `mockup-mobile-apps.png` - **CRITICAL:** Shows phone frames with screenshots
- `mockup-web-projects.png` - **CRITICAL:** Shows browser frames with chrome
- `mockup-blockchain-section.png` - Shows glassmorphic cards layout
- `mockup-hero.png` - Dark navy hero with gradient text
- `mockup-full-with-projects.png` - Complete layout overview

## Content Source
`/home/ram/.openclaw/workspace/cv/ELRAM_CV_MASTER.md` - All professional experience, projects, tech stack

## Constraints
- Next.js: **15.5.13** (DO NOT change)
- `.env.production` must contain `NEXT_TURBOPACK=0`
- Build system: Webpack only
- Keep existing framer-motion animations

## Success Criteria

- [ ] ALL components installed from 21st.dev (not custom CSS)
- [ ] Phone frames visible in mobile apps section
- [ ] Browser frames visible in web projects section
- [ ] Glassmorphic effects on cards
- [ ] Visual match to mockups
- [ ] Build passes without errors
- [ ] Dark theme consistent throughout

## DO NOT

- ❌ Use custom CSS for frames/cards
- ❌ Skip browsing 21st.dev for components
- ❌ Assume component names - verify by browsing
- ❌ Change Next.js version
- ❌ Use Turbopack (use Webpack only)

## Start Here

1. Open browser to https://21st.dev/community/components/s/shadcn-ui
2. Search for each required component type
3. Document installation URLs
4. Install all components
5. Build the portfolio using installed components
6. Deploy and verify

---

**Priority:** USE 21ST.DEV COMPONENTS - This is mandatory, not optional.
**Working Directory:** `/home/ram/.openclaw/workspace/repos/personal-website/`
**Staging URL:** https://mockup-preview-ten.vercel.app
