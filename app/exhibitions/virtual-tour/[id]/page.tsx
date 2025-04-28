import { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { VirtualTour } from "@/components/gallery/virtual-tour"
import { ChevronLeft } from "lucide-react"

// Add revalidation for ISR
export const revalidate = 3600 // revalidate every hour

interface VirtualTourPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: VirtualTourPageProps): Promise<Metadata> {
  // This would typically fetch data from an API
  const exhibition = getExhibitionData(params.id)
  
  if (!exhibition) {
    return {
      title: "Exhibition Not Found | Trowbridge Gallery",
      description: "The requested exhibition could not be found.",
    }
  }
  
  return {
    title: `Virtual Tour: ${exhibition.title} | Trowbridge Gallery`,
    description: `Experience our ${exhibition.title} exhibition through an immersive virtual tour. Explore the artwork and gallery space from anywhere in the world.`,
    openGraph: {
      images: [{ url: exhibition.coverImage, width: 1200, height: 630, alt: exhibition.title }],
    },
  }
}

export default function VirtualTourPage({ params }: VirtualTourPageProps) {
  const exhibition = getExhibitionData(params.id)
  
  if (!exhibition || !exhibition.virtualTourImages) {
    notFound()
  }
  
  return (
    <div className="container py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <Button variant="ghost" size="sm" asChild className="mb-4">
            <Link href={`/exhibitions/${params.id}`}>
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Exhibition
            </Link>
          </Button>
          
          <h1 className="text-3xl font-bold mb-2">{exhibition.title}: Virtual Tour</h1>
          <p className="text-muted-foreground">{exhibition.description}</p>
        </div>
        
        <VirtualTour 
          images={exhibition.virtualTourImages} 
          title={exhibition.title}
        />
        
        <div className="mt-12 border-t pt-8">
          <h2 className="text-xl font-semibold mb-4">About This Exhibition</h2>
          <p className="text-muted-foreground mb-6">
            {exhibition.longDescription || exhibition.description}
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <Link href={`/exhibitions/${params.id}`}>
                View Exhibition Details
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/contact">
                Contact for Inquiries
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

// Mock data function - would be replaced with actual API call
function getExhibitionData(id: string) {
  const exhibitions = {
    "1": {
      id: "1",
      title: "High Point Market",
      description: "It's Market : A Designer's Perspective. High Point Market is the ultimate destination for all things design, offering endless product options and the unexpected.",
      longDescription: "High Point Market is the largest home furnishings industry trade show in the world, bringing together more than 75,000 attendees and 2000 exhibitors. Our exhibition showcases how Trowbridge Gallery's artwork complements and enhances the finest furniture and interior design elements on display at this prestigious event.",
      startDate: new Date(2025, 3, 26),
      endDate: new Date(2025, 3, 30),
      location: "High Point, NC 27260",
      coverImage: "https://14527931.fs1.hubspotusercontent-na1.net/hubfs/14527931/2.13.24_Press%20Release%20HP_Kickoff.jpg",
      featured: true,
      virtualTourImages: [
        {
          id: "1-1",
          src: "https://images.unsplash.com/photo-1577083288073-40892c0860a4?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "High Point Market - Gallery View 1",
          description: "Main gallery space featuring our signature collection"
        },
        {
          id: "1-2",
          src: "https://images.unsplash.com/photo-1580974852861-c381510bc98e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "High Point Market - Gallery View 2",
          description: "Contemporary abstract works in conversation with modern furniture"
        },
        {
          id: "1-3",
          src: "https://images.unsplash.com/photo-1572947650440-e8a97ef053b2?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "High Point Market - Gallery View 3",
          description: "Textile art installation featuring works by emerging artists"
        },
        {
          id: "1-4",
          src: "https://images.unsplash.com/photo-1594760467013-64ac2b80b7d3?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "High Point Market - Gallery View 4",
          description: "Minimalist photography collection in the east wing"
        }
      ]
    },
    "3": {
      id: "3",
      title: "Light & Form: A Photography Exhibition",
      description: "Celebrating the work of six photographers who explore the relationship between light and form in their captivating images.",
      longDescription: "Light & Form brings together six visionary photographers whose work explores the fundamental relationship between light and physical form. Through diverse approaches ranging from architectural studies to abstract compositions, these artists reveal how light shapes our perception of the world around us. This exhibition invites viewers to reconsider everyday objects and spaces through the transformative lens of photography.",
      startDate: new Date(2023, 10, 20),
      endDate: new Date(2024, 0, 1),
      location: "West Gallery",
      coverImage: "https://media.licdn.com/dms/image/v2/D5610AQFOFXlmTwuU8Q/image-shrink_1280/B56ZY.sNVlHoAU-/0/1744808499760?e=1745438400&v=beta&t=1iKWOWpRh-bBFlrHmpA3ak_jeUSxKkn6deAQJJeQ8xw",
      featured: false,
      virtualTourImages: [
        {
          id: "3-1",
          src: "https://images.unsplash.com/photo-1617552944335-b7b0b336d9ac?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Light & Form - Gallery View 1",
          description: "Entrance to the Light & Form exhibition featuring works by Maria Chen"
        },
        {
          id: "3-2",
          src: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Light & Form - Gallery View 2",
          description: "Architectural studies by James Wilson exploring urban geometries"
        },
        {
          id: "3-3",
          src: "https://images.unsplash.com/photo-1553292218-4892c9d44c4e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Light & Form - Gallery View 3",
          description: "Abstract light compositions by Sarah Johnson"
        },
        {
          id: "3-4",
          src: "https://images.unsplash.com/photo-1577083288073-40892c0860a4?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Light & Form - Gallery View 4",
          description: "Natural light studies featuring landscape photography"
        },
        {
          id: "3-5",
          src: "https://images.unsplash.com/photo-1594760467013-64ac2b80b7d3?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Light & Form - Gallery View 5",
          description: "Experimental photography techniques exploring light refraction"
        }
      ]
    },
    "5": {
      id: "5",
      title: "Textile Narratives: Woven Stories",
      description: "An immersive exhibition showcasing innovative textile art that explores cultural heritage, personal narratives, and contemporary social themes through fiber and fabric.",
      longDescription: "Textile Narratives: Woven Stories celebrates the rich tradition and contemporary innovation in textile art. This exhibition brings together artists who use fabric, fiber, and thread to create works that tell stories, preserve cultural heritage, and address contemporary social issues. From large-scale installations to intricate handcrafted pieces, these works demonstrate the expressive potential of textiles as both medium and message.",
      startDate: new Date(2023, 11, 15),
      endDate: new Date(2024, 1, 15),
      location: "North Gallery",
      coverImage: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      featured: true,
      virtualTourImages: [
        {
          id: "5-1",
          src: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
          alt: "Textile Narratives - Gallery View 1",
          description: "Main exhibition space featuring large-scale textile installations"
        },
        {
          id: "5-2",
          src: "https://images.unsplash.com/photo-1579762593175-20226054cad0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
          alt: "Textile Narratives - Gallery View 2",
          description: "Traditional weaving techniques reimagined by contemporary artists"
        },
        {
          id: "5-3",
          src: "https://images.unsplash.com/photo-1615529328331-f8917597711f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
          alt: "Textile Narratives - Gallery View 3",
          description: "Textile works exploring themes of identity and cultural heritage"
        },
        {
          id: "5-4",
          src: "https://images.unsplash.com/photo-1629385701021-fcd568a743e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
          alt: "Textile Narratives - Gallery View 4",
          description: "Interactive textile installation inviting visitor participation"
        }
      ]
    }
  }
  
  return exhibitions[id as keyof typeof exhibitions]
}

// Generate static paths for known exhibition IDs
export async function generateStaticParams() {
  // This would typically fetch data from an API
  return [
    { id: "1" },
    { id: "3" },
    { id: "5" }
  ]
}
