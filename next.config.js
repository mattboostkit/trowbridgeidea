/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed 'export' output to enable server-side features
  // output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    // Enable image optimization
    domains: [
      'images.unsplash.com',
      'media.licdn.com',
      'ik.imagekit.io',
      'trowbridgegallery.co.uk',
      'trowbridgegallery.com.au',
      'static.trowbridgegallery.com',
      'plus.unsplash.com',
      '14527931.fs1.hubspotusercontent-na1.net'
    ],
  },
};

module.exports = nextConfig;
