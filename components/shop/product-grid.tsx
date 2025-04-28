'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { formatPrice } from '@/lib/utils';
import { ProductLoadingSkeleton } from '@/components/ui/loading-skeleton';
import { toast } from 'sonner';

// Mock product data - would be replaced with API call
const allProducts = [
  {
    id: '1',
    title: 'Oceanic Perspectives',
    artist: 'Emily Richards',
    price: 289,
    category: 'Prints',
    image: 'https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    slug: 'oceanic-perspectives',
  },
  {
    id: '2',
    title: 'Urban Reflections',
    artist: 'David Kim',
    price: 345,
    category: 'Photography',
    image: 'https://images.unsplash.com/photo-1512482170774-d19aa2390114?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXJiYW4lMjBhcnR8ZW58MHx8MHx8fDA%3D',
    slug: 'urban-reflections',
  },
  {
    id: '3',
    title: 'Abstract Composition #7',
    artist: 'Sarah Johnson',
    price: 520,
    category: 'Paintings',
    image: 'https://images.unsplash.com/photo-1615184697985-c9bde1b07da7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    slug: 'abstract-composition-7',
  },
  {
    id: '4',
    title: 'Mountain Vista',
    artist: 'James Wilson',
    price: 410,
    category: 'Photography',
    image: 'https://images.unsplash.com/photo-1553949345-eb786bb3f7ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    slug: 'mountain-vista',
  },
  {
    id: '5',
    title: 'Digital Dreamscape',
    artist: 'Lisa Chen',
    price: 275,
    category: 'Digital Art',
    image: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    slug: 'digital-dreamscape',
  },
  {
    id: '6',
    title: 'Bronze Form #3',
    artist: 'Michael Brown',
    price: 890,
    category: 'Sculpture',
    image: 'https://images.unsplash.com/photo-1544620905-9c10a22760b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    slug: 'bronze-form-3',
  },
  {
    id: '7',
    title: 'Coastal Memory',
    artist: 'Victoria Adams',
    price: 320,
    category: 'Paintings',
    image: 'https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    slug: 'coastal-memory',
  },
  {
    id: '8',
    title: 'Monochrome Study',
    artist: 'Robert Taylor',
    price: 245,
    category: 'Prints',
    image: 'https://images.unsplash.com/photo-1568819646628-dc702ae31307?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    slug: 'monochrome-study',
  },
  {
    id: '9',
    title: 'Reflective Moments',
    artist: 'Sophia Garcia',
    price: 380,
    category: 'Mixed Media',
    image: 'https://images.unsplash.com/photo-1571172964276-91faaa704e1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    slug: 'reflective-moments',
  },
  {
    id: '10',
    title: 'Geometric Vibrance',
    artist: 'Thomas Lee',
    price: 450,
    category: 'Paintings',
    image: 'https://images.unsplash.com/photo-1607869731243-aa5afafbaaa0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    slug: 'geometric-vibrance',
  },
  {
    id: '11',
    title: 'Natural Forms',
    artist: 'Emma Thompson',
    price: 295,
    category: 'Photography',
    image: 'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    slug: 'natural-forms',
  },
  {
    id: '12',
    title: 'Chromatic Exploration',
    artist: 'Jonathan Reed',
    price: 560,
    category: 'Prints',
    image: 'https://images.unsplash.com/photo-1546453667-8a8d2d07bc20?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    slug: 'chromatic-exploration',
  },
];

export function ProductGrid() {
  const searchParams = useSearchParams();
  const [products, setProducts] = useState(allProducts);
  const [loading, setLoading] = useState(true);
  const [wishlist, setWishlist] = useState<string[]>([]);

  // Get filter parameters from URL
  const selectedCategories = searchParams.get('category')?.split(',') || [];
  const selectedArtists = searchParams.get('artist')?.split(',') || [];
  const minPrice = parseInt(searchParams.get('minPrice') || '0');
  const maxPrice = parseInt(searchParams.get('maxPrice') || '1000');

  // Apply filters
  useEffect(() => {
    setLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      let filteredProducts = [...allProducts];
      
      // Filter by category
      if (selectedCategories.length > 0) {
        filteredProducts = filteredProducts.filter(product => 
          selectedCategories.includes(product.category)
        );
      }
      
      // Filter by artist
      if (selectedArtists.length > 0) {
        filteredProducts = filteredProducts.filter(product => 
          selectedArtists.includes(product.artist)
        );
      }
      
      // Filter by price range
      filteredProducts = filteredProducts.filter(product => 
        product.price >= minPrice && product.price <= maxPrice
      );
      
      setProducts(filteredProducts);
      setLoading(false);
    }, 500);
  }, [selectedCategories, selectedArtists, minPrice, maxPrice]);

  const toggleWishlist = (productId: string) => {
    setWishlist(prev => {
      if (prev.includes(productId)) {
        toast.info('Removed from wishlist');
        return prev.filter(id => id !== productId);
      } else {
        toast.success('Added to wishlist');
        return [...prev, productId];
      }
    });
  };

  if (loading) {
    return <ProductLoadingSkeleton />;
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium mb-2">No products found</h3>
        <p className="text-muted-foreground mb-6">
          Try adjusting your filters to find what you're looking for.
        </p>
        <Button variant="outline" onClick={() => window.history.pushState({}, '', window.location.pathname)}>
          Clear all filters
        </Button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
      {products.map((product) => (
        <div key={product.id} className="group">
          <div className="relative aspect-square overflow-hidden rounded-md bg-muted mb-4">
            <Image
              src={product.image}
              alt={product.title}
              width={500}
              height={500}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm hover:bg-background/90"
              onClick={(e) => {
                e.preventDefault();
                toggleWishlist(product.id);
              }}
            >
              <Heart
                className={`h-5 w-5 ${
                  wishlist.includes(product.id) ? 'fill-primary text-primary' : ''
                }`}
              />
              <span className="sr-only">Add to wishlist</span>
            </Button>
          </div>
          <Link href={`/shop/${product.slug}`} className="block">
            <h3 className="font-medium group-hover:text-primary transition-colors">{product.title}</h3>
            <p className="text-sm text-muted-foreground">{product.artist}</p>
            <p className="mt-2 font-medium">{formatPrice(product.price)}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
