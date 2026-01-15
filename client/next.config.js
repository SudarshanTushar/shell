/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Mandates static export
  images: {
    unoptimized: true, // Required for static export
  },
}

module.exports = nextConfig
