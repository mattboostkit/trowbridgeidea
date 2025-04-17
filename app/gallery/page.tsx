import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Gallery",
  description: "Explore our curated collection of exceptional contemporary artworks",
}

export default function GalleryPage() {
  // This would typically come from your API/database
  const galleryImages = [
    {
      id: "1",
      title: "Abstract Composition in Blue",
      artist: "Emily Richards",
      image: "https://images.unsplash.com/photo-1567359781514-3b964e2b04d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "2",
      title: "Urban Landscape #5",
      artist: "David Kim",
      image: "https://images.unsplash.com/photo-1549887552-cb1071d3e5ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "3",
      title: "Convergence Series",
      artist: "Sarah Johnson",
      image: "https://images.unsplash.com/photo-1574182245530-967d9b3831af?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "4",
      title: "Mountain Vista",
      artist: "James Wilson",
      image: "https://images.unsplash.com/photo-1553949345-eb786bb3f7ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "5",
      title: "Digital Dreamscape",
      artist: "Lisa Chen",
      image: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "6",
      title: "Bronze Form #3",
      artist: "Michael Brown",
      image: "https://images.unsplash.com/photo-1544620905-9c10a22760b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "7",
      title: "Coastal Memory",
      artist: "Victoria Adams",
      image: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "8",
      title: "Monochrome Study",
      artist: "Robert Taylor",
      image: "https://images.unsplash.com/photo-1568819646628-dc702ae31307?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "9",
      title: "Reflective Moments",
      artist: "Sophia Garcia",
      image: "https://images.unsplash.com/photo-1571172964276-91faaa704e1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "10",
      title: "Geometric Vibrance",
      artist: "Thomas Lee",
      image: "https://images.unsplash.com/photo-1607869731243-aa5afafbaaa0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "11",
      title: "Natural Forms",
      artist: "Emma Thompson",
      image: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "12",
      title: "Chromatic Exploration",
      artist: "Jonathan Reed",
      image: "https://images.unsplash.com/photo-1546453667-8a8d2d07bc20?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ]

  return (
    <>
      <div className="bg-muted">
        <div className="container py-12 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight mb-4">Our Gallery</h1>
            <p className="text-xl text-muted-foreground">
              Explore our curated collection of exceptional contemporary artworks
            </p>
          </div>
        </div>
      </div>
      
      <div className="container py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
              <div>
                <h2 className="text-2xl font-bold">Featured Works</h2>
                <p className="text-muted-foreground">A selection of exceptional pieces from our collection</p>
              </div>
              <div className="flex items-center space-x-4">
                <Button variant="outline" size="sm">
                  Filter
                </Button>
                <select className="bg-background border rounded h-9 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>Sort by Featured</option>
                  <option>Sort by Newest</option>
                  <option>Sort by Price: Low to High</option>
                  <option>Sort by Price: High to Low</option>
                </select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {galleryImages.map((artwork) => (
                <div key={artwork.id} className="group cursor-pointer">
                  <Link href={`/shop/${artwork.id}`}>
                    <div className="aspect-square overflow-hidden rounded-lg mb-3">
                      <Image
                        src={artwork.image}
                        alt={artwork.title}
                        width={400}
                        height={400}
                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                        unoptimized
                      />
                    </div>
                    <h3 className="font-medium group-hover:text-primary transition-colors">{artwork.title}</h3>
                    <p className="text-sm text-muted-foreground">{artwork.artist}</p>
                  </Link>
                </div>
              ))}
            </div>
            
            <div className="mt-12 flex justify-center">
              <Button asChild>
                <Link href="/shop">View All Artwork</Link>
              </Button>
            </div>
          </div>
          
          <div className="border-t pt-16">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold mb-3">Virtual Gallery Tour</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Experience our current exhibition from anywhere in the world with our immersive virtual tour
              </p>
            </div>
            
            <div className="aspect-video overflow-hidden rounded-lg relative bg-muted flex items-center justify-center mb-8">
              <div className="text-center p-8">
                <h3 className="text-xl font-medium mb-2">Virtual Tour Coming Soon</h3>
                <p className="text-muted-foreground mb-4">
                  We're currently preparing an immersive virtual experience of our latest exhibition.
                </p>
                <Button variant="outline">Get Notified</Button>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                Would you like to visit our gallery in person? We welcome visitors during our opening hours.
              </p>
              <Button variant="outline" asChild>
                <Link href="/contact">Visit Information</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}