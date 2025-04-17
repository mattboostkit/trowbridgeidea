import { Hero } from "@/components/home/hero"
import { FeaturedCollections } from "@/components/home/featured-collections"
import { FeaturedProducts } from "@/components/home/featured-products"
import { Testimonials } from "@/components/home/testimonials"
import { CTA } from "@/components/home/cta"
import { Metadata } from "next"
import { SITE_NAME } from "@/lib/constants"

export const metadata: Metadata = {
  title: `${SITE_NAME} | Fine Art & Contemporary Prints | London`,
  description: "Trowbridge Gallery offers luxury art for interior designers, collectors, and art enthusiasts. Explore our curated collection of original paintings, limited edition prints, photography, and sculptures from renowned and emerging artists. Established in 1981, London.",
  keywords: "fine art gallery, contemporary art, luxury art prints, original paintings, interior design art, London art gallery, Trowbridge Gallery, art collection, limited edition prints",
  alternates: {
    canonical: 'https://trowbridgegallery.co.uk',
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://trowbridgegallery.co.uk',
    title: 'Trowbridge Gallery | Fine Art & Contemporary Prints | London',
    description: 'Established in 1981, Trowbridge Gallery offers luxury art for interior designers, collectors, and art enthusiasts. Explore our curated collection of original paintings, limited edition prints, photography, and sculptures.',
    siteName: 'Trowbridge Gallery',
    images: [
      {
        url: 'https://media.licdn.com/dms/image/v2/C4D1BAQHlqc9DLzNJtQ/company-background_10000/company-background_10000/0/1583732054977/trowbridge_art_cover?e=2147483647&v=beta&t=kMQ1-ohWrJ5t-ADMsTzUeSquOohjzfBsXAWXoy8VXF4',
        width: 1200,
        height: 630,
        alt: 'Trowbridge Gallery - Fine Art Collection',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trowbridge Gallery | Fine Art & Contemporary Prints | London',
    description: 'Established in 1981, Trowbridge Gallery offers luxury art for interior designers, collectors, and art enthusiasts.',
    images: ['https://media.licdn.com/dms/image/v2/C4D1BAQHlqc9DLzNJtQ/company-background_10000/company-background_10000/0/1583732054977/trowbridge_art_cover?e=2147483647&v=beta&t=kMQ1-ohWrJ5t-ADMsTzUeSquOohjzfBsXAWXoy8VXF4'],
  },
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ArtGallery",
            "name": "Trowbridge Gallery",
            "url": "https://trowbridgegallery.co.uk",
            "logo": "https://trowbridgegallery.co.uk/logo.png",
            "image": "https://media.licdn.com/dms/image/v2/C4D1BAQHlqc9DLzNJtQ/company-background_10000/company-background_10000/0/1583732054977/trowbridge_art_cover?e=2147483647&v=beta&t=kMQ1-ohWrJ5t-ADMsTzUeSquOohjzfBsXAWXoy8VXF4",
            "description": "Trowbridge Gallery is a premier destination for fine and contemporary art, proudly showcasing an exceptional collection of original works, limited edition prints, photography, textiles, and sculptures – all beautifully presented in handmade frames of the highest quality.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Kings Road",
              "addressLocality": "London",
              "addressRegion": "England",
              "postalCode": "SW3",
              "addressCountry": "UK"
            },
            "telephone": "+442073718733",
            "email": "info@trowbridgegallery.co.uk",
            "openingHours": "Mo,Tu,We,Th,Fr 10:00-18:00 Sa 10:00-17:00",
            "priceRange": "£££",
            "foundingDate": "1981",
            "sameAs": [
              "https://www.facebook.com/trowbridgegallery",
              "https://www.instagram.com/trowbridgegallery",
              "https://www.linkedin.com/company/trowbridge-gallery"
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Art Collection",
              "itemListElement": [
                {
                  "@type": "OfferCatalog",
                  "name": "Original Paintings"
                },
                {
                  "@type": "OfferCatalog",
                  "name": "Limited Edition Prints"
                },
                {
                  "@type": "OfferCatalog",
                  "name": "Photography"
                },
                {
                  "@type": "OfferCatalog",
                  "name": "Sculptures"
                },
                {
                  "@type": "OfferCatalog",
                  "name": "Textile Art"
                }
              ]
            }
          })
        }}
      />
      <Hero />
      <FeaturedCollections />
      <FeaturedProducts />
      <Testimonials />
      <CTA />
    </>
  );
}