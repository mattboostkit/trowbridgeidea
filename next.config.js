/** @type {import('next').NextConfig} */
const nextConfig = {
  // For Netlify deployment
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Disable server-side features for static export
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
