# Portfolio Updates - Mobile & Web Improvements

## Mobile Applications Section
**File:** `app/components/MobileAppsSection.tsx`

### Requirements:
1. **Scrollable carousel** - Add horizontal scroll with touch support
   - Use CSS `overflow-x: scroll` with smooth scrolling
   - Add scroll snap for better UX
   - Touch-friendly on mobile devices

2. **Add app images inside iPhone frames**
   - DiTA (Healthcare) - Use placeholder healthcare app screenshot
   - AMIA (Healthcare) - Use placeholder medical app screenshot
   - CovidTrace (Healthcare) - Use placeholder contact tracing UI
   - MoveMateMOVEMENT (Fitness) - Use placeholder fitness tracking UI
   - DLSU Green Archers (Sports) - Use placeholder sports app UI

3. **Mobile responsive**
   - Ensure carousel scrolls smoothly on mobile
   - Phone frames scale appropriately on small screens
   - Touch swipe gestures work correctly

## Web Projects Section  
**File:** `app/components/WebProjectsSection.tsx`

### Requirements:
1. **Add website screenshots inside Safari frames**
   - TokenTable - Crypto dashboard placeholder
   - AI/ML Platform - AI interface placeholder
   - M Lhuillier - Financial services placeholder
   - Property Management - Real estate platform placeholder
   - EthSign - Web3 platform placeholder
   - C3 Project - Project showcase placeholder

2. **Mobile responsive**
   - Stack browser frames vertically on mobile (< 768px)
   - Maintain aspect ratios
   - Ensure screenshots are visible and clear

## Technical Notes
- Use Next.js Image component for optimization
- Create placeholder images using gradient backgrounds with app type icons
- Add smooth scroll CSS: `scroll-behavior: smooth; scroll-snap-type: x mandatory;`
- Test on viewport sizes: 375px (mobile), 768px (tablet), 1024px (desktop)

## After Changes
1. Run `npm run build` to verify
2. Test scrolling behavior
3. Commit with message: "Add scrollable carousels and app/website images"
