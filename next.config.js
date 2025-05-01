/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  // Added for Next.js 14 compatibility
  swcMinify: true,
};

module.exports = nextConfig;
