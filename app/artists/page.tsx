import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Our Artists | Acclaimed & Emerging Talent | Trowbridge Gallery",
  description: "Discover Trowbridge Gallery's diverse roster of acclaimed and emerging artists. From abstract expressionism and urban photography to mixed media, sculpture, and digital art. Explore artist profiles, specialties, and available works.",
  keywords: "fine art artists, contemporary artists, abstract expressionism, urban photography, mixed media artists, emerging artists, London gallery artists, art collection, Trowbridge Gallery artists",
}

export default function ArtistsPage() {
  const featuredArtists = [
    {
      id: "1",
      name: "Emily Richards",
      specialty: "Abstract Expressionism",
      bio: "Emily Richards is known for her dynamic abstract compositions that explore the relationship between color and emotion. Her work has been exhibited in galleries across Europe and North America.",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: true,
    },
    {
      id: "2",
      name: "David Kim",
      specialty: "Urban Photography",
      bio: "David Kim's photography captures the essence of urban landscapes, finding beauty in the overlooked details of city life. His work has been featured in several international publications.",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: true,
    },
    {
      id: "3",
      name: "Sarah Johnson",
      specialty: "Mixed Media",
      bio: "Sarah Johnson combines traditional painting techniques with digital elements to create unique mixed media pieces that challenge perceptions of reality and fiction.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: true,
    },
  ]

  const otherArtists = [
    {
      id: "4",
      name: "James Wilson",
      specialty: "Landscape Painting",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "5",
      name: "Lisa Chen",
      specialty: "Digital Art",
      image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "6",
      name: "Michael Brown",
      specialty: "Sculpture",
      image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "7",
      name: "Victoria Adams",
      specialty: "Watercolor",
      image: "https://images.unsplash.com/photo-1541823709867-1b206113eafd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "8",
      name: "Robert Taylor",
      specialty: "Printmaking",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "9",
      name: "Sophia Garcia",
      specialty: "Contemporary",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ]

  return (
    <div className="container py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Our Artists</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trowbridge Gallery represents a diverse roster of acclaimed and emerging artists from around the world
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8">Featured Artists</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredArtists.map((artist) => (
              <div key={artist.id} className="group">
                <div className="aspect-square overflow-hidden rounded-lg mb-4 relative">
                  <Image
                    src={artist.image}
                    alt={artist.name}
                    width={500}
                    height={500}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    unoptimized
                  />
                </div>
                <h3 className="text-xl font-medium">{artist.name}</h3>
                <p className="text-muted-foreground mb-3">{artist.specialty}</p>
                <p className="text-sm text-muted-foreground mb-4">{artist.bio}</p>
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/artists/${artist.id}`}>View Profile</Link>
                </Button>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-8">Gallery Artists</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {otherArtists.map((artist) => (
              <div key={artist.id} className="group cursor-pointer">
                <div className="aspect-square overflow-hidden rounded-lg mb-3 relative">
                  <Image
                    src={artist.image}
                    alt={artist.name}
                    width={300}
                    height={300}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    unoptimized
                  />
                </div>
                <h3 className="font-medium">{artist.name}</h3>
                <p className="text-sm text-muted-foreground">{artist.specialty}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}