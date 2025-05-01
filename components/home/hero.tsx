import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <div className="relative h-[600px] md:h-[700px] lg:h-[800px] w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://ik.imagekit.io/boostkit/Trowbridge/Trowbridge_BG.jpg?updatedAt=1746105772417')",
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
          opacity: 1,
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-background/30 z-10" />

      {/* Content */}
      <div className="container relative h-full z-20 flex items-center">
        <div className="max-w-2xl space-y-8 text-left px-4 md:px-6">
          <div className="bg-background/10 backdrop-blur-sm p-6 md:p-8 rounded-lg border border-white/10 shadow-lg">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Luxury Art For <br />
              Interior Designers
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-md mt-6">
              Beautifully crafted handmade art from carefully curated collections, to inspire, engage and excite.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-start pt-6">
              <Button size="lg" asChild>
                <Link href="/shop">
                  Shop Best Sellers <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/gallery">
                  Explore Our Gallery
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}