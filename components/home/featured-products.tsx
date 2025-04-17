import Link from "next/link"
import Image from "next/image"
import { formatPrice } from "@/lib/utils"

// Placeholder data - this would come from your API/database
const featuredProducts = [
  {
    id: "1",
    title: "Oceanic Perspectives",
    artist: "Emily Richards",
    price: 289,
    image: "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    slug: "oceanic-perspectives"
  },
  {
    id: "2",
    title: "Urban Reflections",
    artist: "David Kim",
    price: 345,
    image: "https://images.unsplash.com/photo-1512482170774-d19aa2390114?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXJiYW4lMjBhcnR8ZW58MHx8MHx8fDA%3D",
    slug: "urban-reflections"
  },
  {
    id: "3",
    title: "Abstract Harmony",
    artist: "Sarah Johnson",
    price: 420,
    image: "https://images.unsplash.com/photo-1574182245530-967d9b3831af?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    slug: "abstract-harmony"
  },
  {
    id: "4",
    title: "Mountain Serenity",
    artist: "James Wilson",
    price: 275,
    image: "https://media.istockphoto.com/id/2165594608/photo/red-pink-planet-on-the-horizon-of-a-mountainous-rocky-area-at-night-sci-fi-landscape-sci-fi.webp?a=1&b=1&s=612x612&w=0&k=20&c=croVHNAXJtQVXUD0fYuodm1xBWoOwK9eYQzRdgBr3UY=",
    slug: "mountain-serenity"
  }
]

export function FeaturedProducts() {
  return (
    <section className="py-16 bg-accent/50">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">Featured Artwork</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Discover our selection of exceptional pieces chosen for their unique beauty and artistic merit
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {featuredProducts.map((product) => (
            <Link 
              key={product.id} 
              href={`/shop/${product.slug}`}
              className="group"
            >
              <div className="aspect-square overflow-hidden rounded-md bg-muted mb-4">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={500}
                  height={500}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  unoptimized
                />
              </div>
              <div>
                <h3 className="font-medium">{product.title}</h3>
                <p className="text-sm text-muted-foreground">{product.artist}</p>
                <p className="mt-1 font-medium">{formatPrice(product.price)}</p>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            href="/shop" 
            className="inline-flex items-center text-primary font-medium hover:underline"
          >
            View all artwork
          </Link>
        </div>
      </div>
    </section>
  )
}