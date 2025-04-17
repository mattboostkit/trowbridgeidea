import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://trowbridgegallery.co.uk'
  
  // Core pages
  const routes = [
    '',
    '/about',
    '/artists',
    '/blog',
    '/contact',
    '/exhibitions',
    '/gallery',
    '/shop',
    '/shipping-returns',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Blog posts would typically be dynamically generated
  // This is a placeholder for demonstration
  const blogPosts = [
    '/blog/emerging-artists-2025',
    '/blog/art-of-curation',
    '/blog/print-studio-tour',
    '/blog/textile-art-evolution',
    '/blog/collecting-art-guide',
    '/blog/artist-spotlight-emma-thompson',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // Exhibition pages would typically be dynamically generated
  // This is a placeholder for demonstration
  const exhibitions = [
    '/exhibitions/high-point-market',
    '/exhibitions/urban-abstractions',
    '/exhibitions/light-and-form',
    '/exhibitions/textile-narratives',
    '/exhibitions/emerging-voices',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...routes, ...blogPosts, ...exhibitions]
}
