import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <div className="bg-muted">
      <div className="container py-16">
        <div className="relative overflow-hidden rounded-xl">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: "url('https://media.licdn.com/dms/image/v2/C4D1BAQHlqc9DLzNJtQ/company-background_10000/company-background_10000/0/1583732054977/trowbridge_art_cover?e=2147483647&v=beta&t=kMQ1-ohWrJ5t-ADMsTzUeSquOohjzfBsXAWXoy8VXF4')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.8,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/50 to-background/30 z-10" />
          <div className="relative z-20 px-8 py-24 md:py-32">
            <div className="max-w-2xl space-y-6 text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Luxury Art For <br />
                Interior Designers
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-md">
                Contemporary art prints, original paintings and photography from renowned and emerging artists.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-start">
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
    </div>
  )
}