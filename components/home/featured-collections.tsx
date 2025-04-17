import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

const collections = [
  {
    name: "Abstract Expressionism",
    href: "/shop?category=abstract-expressionism",
    image: "https://images.unsplash.com/photo-1615184697985-c9bde1b07da7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Bold, dynamic works exploring emotion and spontaneity"
  },
  {
    name: "Contemporary Photography",
    href: "/shop?category=contemporary-photography",
    image: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Captivating images from visionary photographers"
  },
  {
    name: "Limited Edition Prints",
    href: "/shop?category=limited-edition-prints",
    image: "https://plus.unsplash.com/premium_photo-1706561252292-a468453e49bb?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Exclusive art prints from established and emerging artists"
  },
  {
    name: "Minimalist Art",
    href: "/shop?category=minimalist-art",
    image: "https://images.unsplash.com/photo-1605513524006-063ed6ed31e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Clean, refined works celebrating simplicity and space"
  },
  {
    name: "Textile Art",
    href: "/shop?category=textile-art",
    image: "https://images.unsplash.com/photo-1579762593175-20226054cad0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Innovative works exploring texture, pattern and fiber"
  },
  {
    name: "Sculptural Pieces",
    href: "/shop?category=sculptural-pieces",
    image: "https://images.unsplash.com/photo-1576020799627-aeac74d58064?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Three-dimensional works that transform spaces"
  }
]

export function FeaturedCollections() {
  return (
    <section className="py-16 bg-background">
      <div className="container px-4">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Featured Collections</h2>
            <p className="text-muted-foreground mt-1">Curated selections from our gallery</p>
          </div>
          <Link href="/shop" className="text-primary font-medium hover:underline hidden md:block">
            View all collections
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {collections.map((collection, i) => (
            <Link
              key={collection.name}
              href={collection.href}
              className={cn(
                "group relative overflow-hidden rounded-lg transition-all hover:shadow-lg",
                "h-[300px] md:h-[400px]"
              )}
            >
              <div className="absolute inset-0 z-0">
                <Image
                  src={collection.image}
                  alt={collection.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  unoptimized
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent z-10" />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <h3 className="text-xl font-semibold mb-2">{collection.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{collection.description}</p>
                <span className="text-primary text-sm font-medium underline-offset-4 group-hover:underline">
                  Explore Collection
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link href="/shop" className="text-primary font-medium hover:underline">
            View all collections
          </Link>
        </div>
      </div>
    </section>
  )
}