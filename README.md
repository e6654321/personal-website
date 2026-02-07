# Personal Website

A modern personal portfolio website built with Next.js 14, React 18, and Tailwind CSS.

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **UI Library**: React 18+
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Ready for Vercel

## Getting Started

### Installation

```bash
npm install
# or
yarn install
```

### Development

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build & Deploy

```bash
npm run build
npm start
```

## Project Structure

```
app/
├── components/       # Reusable components
├── styles/          # Global styles
├── layout.tsx       # Root layout
├── page.tsx         # Home page
└── globals.css      # Global CSS

public/
├── images/          # Image assets
└── icons/           # Icon assets
```

## Customization

1. Update `app/layout.tsx` metadata for SEO
2. Customize colors in `tailwind.config.js`
3. Add your projects in the Projects section
4. Replace placeholder links and content

## Deployment

This project is optimized for Vercel. Connect your GitHub repo to Vercel for automatic deployments on push.

```bash
vercel
```

## License

MIT

