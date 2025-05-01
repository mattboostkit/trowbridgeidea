/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  // Added for Next.js 14 compatibility
  swcMinify: true,
};

module.exports = nextConfig;
