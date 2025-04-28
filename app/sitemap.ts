import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://trowbridgegallery.co.uk'
  const currentDate = new Date()

  // Core pages
  const routes = [
    { route: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { route: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
    { route: '/artists', priority: 0.8, changeFrequency: 'weekly' as const },
    { route: '/blog', priority: 0.8, changeFrequency: 'weekly' as const },
    { route: '/contact', priority: 0.7, changeFrequency: 'monthly' as const },
    { route: '/exhibitions', priority: 0.9, changeFrequency: 'weekly' as const },
    { route: '/gallery', priority: 0.9, changeFrequency: 'weekly' as const },
    { route: '/shop', priority: 0.9, changeFrequency: 'daily' as const },
    { route: '/shipping-returns', priority: 0.6, changeFrequency: 'monthly' as const },
    { route: '/privacy-policy', priority: 0.5, changeFrequency: 'yearly' as const },
    { route: '/terms-conditions', priority: 0.5, changeFrequency: 'yearly' as const },
  ].map(({ route, priority, changeFrequency }) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency,
    priority,
  }))

  // Blog posts - in a real app, these would be fetched from a database or CMS
  const blogPosts = [
    { slug: 'emerging-artists-2025', date: new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 10) },
    { slug: 'art-of-curation', date: new Date(currentDate.getFullYear(), currentDate.getMonth() - 2, 15) },
    { slug: 'print-studio-tour', date: new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 5) },
    { slug: 'textile-art-evolution', date: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1) },
    { slug: 'collecting-art-guide', date: new Date(currentDate.getFullYear(), currentDate.getMonth() - 3, 20) },
    { slug: 'artist-spotlight-emma-thompson', date: new Date(currentDate.getFullYear(), currentDate.getMonth() - 2, 5) },
  ].map(({ slug, date }) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: date,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // Exhibition pages - in a real app, these would be fetched from a database or CMS
  const exhibitions = [
    { slug: 'high-point-market', date: new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 15) },
    { slug: 'urban-abstractions', date: new Date(currentDate.getFullYear(), currentDate.getMonth() - 2, 10) },
    { slug: 'light-and-form', date: new Date(currentDate.getFullYear(), currentDate.getMonth() - 3, 5) },
    { slug: 'textile-narratives', date: new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 20) },
    { slug: 'emerging-voices', date: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1) },
  ].map(({ slug, date }) => ({
    url: `${baseUrl}/exhibitions/${slug}`,
    lastModified: date,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Product pages - in a real app, these would be fetched from a database or CMS
  const products = [
    { slug: 'oceanic-perspectives', date: new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 5) },
    { slug: 'urban-reflections', date: new Date(currentDate.getFullYear(), currentDate.getMonth() - 2, 15) },
    { slug: 'abstract-composition-7', date: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1) },
    { slug: 'mountain-vista', date: new Date(currentDate.getFullYear(), currentDate.getMonth() - 3, 10) },
  ].map(({ slug, date }) => ({
    url: `${baseUrl}/shop/${slug}`,
    lastModified: date,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // Artist pages - in a real app, these would be fetched from a database or CMS
  const artists = [
    { slug: 'emily-richards', date: new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1) },
    { slug: 'david-kim', date: new Date(currentDate.getFullYear(), currentDate.getMonth() - 2, 1) },
    { slug: 'sarah-johnson', date: new Date(currentDate.getFullYear(), currentDate.getMonth() - 3, 1) },
    { slug: 'james-wilson', date: new Date(currentDate.getFullYear(), currentDate.getMonth() - 4, 1) },
  ].map(({ slug, date }) => ({
    url: `${baseUrl}/artists/${slug}`,
    lastModified: date,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...routes, ...blogPosts, ...exhibitions, ...products, ...artists]
}
