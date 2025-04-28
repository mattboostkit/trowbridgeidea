import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section
      className="relative h-[600px] md:h-[700px] lg:h-[800px] w-full overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1577720580479-7d839d829c73?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Gallery interior with artwork displayed on walls"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-background/30 z-10" />

      {/* Content */}
      <div className="container relative h-full z-20 flex items-center">
        <div className="max-w-2xl space-y-8 text-left px-4 md:px-6">
          <div className="bg-background/10 backdrop-blur-sm p-6 md:p-8 rounded-lg border border-white/10 shadow-lg">
            <h1 id="hero-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Luxury Art For <br />
              Interior Designers
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-md mt-6">
              Contemporary art prints, original paintings and photography from renowned and emerging artists.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-start pt-6">
              <Button size="lg" asChild>
                <Link href="/shop" aria-label="Shop our best selling artwork">
                  Shop Best Sellers <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/gallery" aria-label="Explore our gallery collection">
                  Explore Our Gallery
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}