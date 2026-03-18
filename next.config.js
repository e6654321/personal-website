/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Force Webpack (Turbopack has styling issues)
  turbopack: false,
}

module.exports = nextConfig
