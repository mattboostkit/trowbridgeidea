import { Suspense } from "react"
import { ProductFilters } from "@/components/shop/product-filters"
import { ProductGrid } from "@/components/shop/product-grid"
import { ProductLoadingSkeleton } from "@/components/ui/loading-skeleton"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Shop Fine Art | Original Paintings & Limited Edition Prints | Trowbridge Gallery",
  description: "Shop Trowbridge Gallery's curated collection of fine art, including original paintings, limited edition prints, photography, and sculptures. Filter by category, artist, and price range to find the perfect piece for your space.",
  keywords: "buy fine art, original paintings for sale, limited edition prints, contemporary art for sale, art gallery shop, luxury art prints, interior design artwork, Trowbridge Gallery collection, art for collectors",
  openGraph: {
    title: "Shop Fine Art | Trowbridge Gallery",
    description: "Shop our curated collection of fine art, including original paintings, limited edition prints, photography, and sculptures.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1577720580479-7d839d829c73?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3",
        width: 1200,
        height: 630,
        alt: "Trowbridge Gallery Shop",
      },
    ],
  },
}

// Add revalidation for ISR
export const revalidate = 3600 // revalidate every hour

export default function ShopPage() {
  // Create structured data for product listing
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Trowbridge Gallery Shop",
    "description": "Shop our curated collection of fine art, including original paintings, limited edition prints, photography, and sculptures.",
    "url": "https://trowbridgegallery.co.uk/shop",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "GBP",
      "lowPrice": "245",
      "highPrice": "890",
      "offerCount": "12"
    }
  };

  return (
    <div className="container py-10 px-4">
      {/* Add structured data for product listing */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="mb-8">
        <ProductFilters />
      </div>
      <Suspense fallback={<ProductLoadingSkeleton />}>
        <ProductGrid />
      </Suspense>
    </div>
  )
}