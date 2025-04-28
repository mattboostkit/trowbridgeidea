import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronLeft, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { formatPrice } from '@/lib/utils';

// Add revalidation for ISR
export const revalidate = 3600; // revalidate every hour

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  // This would typically fetch data from an API
  const product = getProductData(params.slug);

  if (!product) {
    return {
      title: 'Product Not Found | Trowbridge Gallery',
      description: 'The requested product could not be found.',
    };
  }

  return {
    title: `${product.title} by ${product.artist} | Trowbridge Gallery`,
    description: `${product.title} - ${product.description}. Original artwork by ${product.artist}, available at Trowbridge Gallery. ${product.category} - ${formatPrice(product.price)}.`,
    openGraph: {
      title: `${product.title} by ${product.artist}`,
      description: product.description,
      images: [{ url: product.image, width: 1200, height: 630, alt: product.title }],
    },
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductData(params.slug);

  if (!product) {
    notFound();
  }

  // Create structured data for product
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': product.title,
    'image': product.image,
    'description': product.description,
    'brand': {
      '@type': 'Brand',
      'name': 'Trowbridge Gallery',
    },
    'offers': {
      '@type': 'Offer',
      'priceCurrency': 'GBP',
      'price': product.price,
      'availability': 'https://schema.org/InStock',
      'seller': {
        '@type': 'Organization',
        'name': 'Trowbridge Gallery',
      },
    },
    'creator': {
      '@type': 'Person',
      'name': product.artist,
    },
  };

  return (
    <div className="container py-10 px-4">
      {/* Add structured data for product */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Button variant="ghost" size="sm" asChild className="mb-8">
        <Link href="/shop">
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to Shop
        </Link>
      </Button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div className="aspect-square overflow-hidden rounded-lg bg-muted">
              <Image
                src={product.image}
                alt={product.title}
                width={800}
                height={800}
                className="h-full w-full object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div className="grid grid-cols-4 gap-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="aspect-square overflow-hidden rounded-md bg-muted">
                  <Image
                    src={product.image}
                    alt={`${product.title} - View ${i + 1}`}
                    width={200}
                    height={200}
                    className="h-full w-full object-cover"
                    sizes="25vw"
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-6">
              <h1 className="text-3xl font-bold tracking-tight">{product.title}</h1>
              <p className="text-lg text-muted-foreground mt-1">{product.artist}</p>
            </div>

            <div className="mb-6">
              <h2 className="text-2xl font-semibold">{formatPrice(product.price)}</h2>
              <p className="text-sm text-muted-foreground mt-1">
                Price includes VAT. Shipping calculated at checkout.
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <p className="text-muted-foreground">{product.description}</p>

              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Category:</span>
                <Link
                  href={`/shop?category=${encodeURIComponent(product.category)}`}
                  className="text-sm text-primary hover:underline"
                >
                  {product.category}
                </Link>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Artist:</span>
                <Link
                  href={`/artists/${product.artistSlug}`}
                  className="text-sm text-primary hover:underline"
                >
                  {product.artist}
                </Link>
              </div>

              {product.dimensions && (
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">Dimensions:</span>
                  <span className="text-sm text-muted-foreground">{product.dimensions}</span>
                </div>
              )}

              {product.medium && (
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">Medium:</span>
                  <span className="text-sm text-muted-foreground">{product.medium}</span>
                </div>
              )}
            </div>

            <div className="space-y-4 mb-8">
              <Button size="lg" className="w-full">Add to Cart</Button>

              <div className="flex gap-4">
                <Button variant="outline" size="lg" className="flex-1">
                  Add to Wishlist
                </Button>
                <Button variant="outline" size="icon">
                  <Share2 className="h-5 w-5" />
                  <span className="sr-only">Share</span>
                </Button>
              </div>
            </div>

            <Separator className="my-8" />

            <div className="space-y-4">
              <h3 className="text-lg font-medium">Shipping & Returns</h3>
              <p className="text-sm text-muted-foreground">
                Free shipping on all UK orders over £500. International shipping available.
                Returns accepted within 14 days of delivery. See our{' '}
                <Link href="/shipping-returns" className="text-primary hover:underline">
                  shipping policy
                </Link>{' '}
                for more details.
              </p>
            </div>
          </div>
        </div>

        <Separator className="my-16" />

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {getRelatedProducts(params.slug).map((relatedProduct) => (
              <div key={relatedProduct.id} className="group">
                <Link href={`/shop/${relatedProduct.slug}`}>
                  <div className="aspect-square overflow-hidden rounded-md bg-muted mb-3">
                    <Image
                      src={relatedProduct.image}
                      alt={relatedProduct.title}
                      width={300}
                      height={300}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  <h3 className="font-medium group-hover:text-primary transition-colors">
                    {relatedProduct.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{relatedProduct.artist}</p>
                  <p className="mt-1 font-medium">{formatPrice(relatedProduct.price)}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Mock data function - would be replaced with actual API call
function getProductData(slug: string) {
  const products = {
    'oceanic-perspectives': {
      id: '1',
      title: 'Oceanic Perspectives',
      artist: 'Emily Richards',
      artistSlug: 'emily-richards',
      price: 289,
      category: 'Prints',
      image: 'https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      slug: 'oceanic-perspectives',
      description: 'A serene exploration of ocean waves and light, capturing the ever-changing moods of the sea. This limited edition print brings the calming presence of water into any space.',
      dimensions: '60 x 80 cm',
      medium: 'Archival pigment print on fine art paper',
    },
    'urban-reflections': {
      id: '2',
      title: 'Urban Reflections',
      artist: 'David Kim',
      artistSlug: 'david-kim',
      price: 345,
      category: 'Photography',
      image: 'https://images.unsplash.com/photo-1512482170774-d19aa2390114?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXJiYW4lMjBhcnR8ZW58MHx8MHx8fDA%3D',
      slug: 'urban-reflections',
      description: 'A striking photographic study of urban architecture and reflections, capturing the interplay of glass, steel, and light in modern cityscapes.',
      dimensions: '70 x 50 cm',
      medium: 'Chromogenic print on metallic paper',
    },
    'abstract-composition-7': {
      id: '3',
      title: 'Abstract Composition #7',
      artist: 'Sarah Johnson',
      artistSlug: 'sarah-johnson',
      price: 520,
      category: 'Paintings',
      image: 'https://images.unsplash.com/photo-1615184697985-c9bde1b07da7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      slug: 'abstract-composition-7',
      description: 'Part of Johnson\'s acclaimed series exploring color relationships and spatial tension. Bold brushstrokes and a vibrant palette create a dynamic visual experience.',
      dimensions: '90 x 120 cm',
      medium: 'Acrylic on canvas',
    },
    'mountain-vista': {
      id: '4',
      title: 'Mountain Vista',
      artist: 'James Wilson',
      artistSlug: 'james-wilson',
      price: 410,
      category: 'Photography',
      image: 'https://images.unsplash.com/photo-1553949345-eb786bb3f7ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      slug: 'mountain-vista',
      description: 'A breathtaking panoramic view of mountain ranges at dawn, capturing the majestic scale and serene beauty of untouched wilderness.',
      dimensions: '100 x 50 cm',
      medium: 'Fine art photography print on cotton rag paper',
    },
  };

  return products[slug as keyof typeof products];
}

// Get related products
function getRelatedProducts(currentSlug: string) {
  const allProducts = [
    {
      id: '1',
      title: 'Oceanic Perspectives',
      artist: 'Emily Richards',
      price: 289,
      image: 'https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      slug: 'oceanic-perspectives',
    },
    {
      id: '2',
      title: 'Urban Reflections',
      artist: 'David Kim',
      price: 345,
      image: 'https://images.unsplash.com/photo-1512482170774-d19aa2390114?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXJiYW4lMjBhcnR8ZW58MHx8MHx8fDA%3D',
      slug: 'urban-reflections',
    },
    {
      id: '3',
      title: 'Abstract Composition #7',
      artist: 'Sarah Johnson',
      price: 520,
      image: 'https://images.unsplash.com/photo-1615184697985-c9bde1b07da7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      slug: 'abstract-composition-7',
    },
    {
      id: '4',
      title: 'Mountain Vista',
      artist: 'James Wilson',
      price: 410,
      image: 'https://images.unsplash.com/photo-1553949345-eb786bb3f7ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      slug: 'mountain-vista',
    },
  ];

  // Filter out the current product and return up to 4 related products
  return allProducts.filter(product => product.slug !== currentSlug).slice(0, 4);
}

// Generate static paths for known product slugs
export async function generateStaticParams() {
  // This would typically fetch data from an API
  return [
    { slug: 'oceanic-perspectives' },
    { slug: 'urban-reflections' },
    { slug: 'abstract-composition-7' },
    { slug: 'mountain-vista' },
  ];
}
