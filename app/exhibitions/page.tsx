import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Suspense } from "react"
import { Calendar, MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { formatDate } from "@/lib/utils"
import { GalleryLoadingSkeleton } from "@/components/ui/loading-skeleton"

export const metadata: Metadata = {
  title: "Art Exhibitions | Current & Upcoming Shows | Trowbridge Gallery London",
  description: "Explore current and upcoming art exhibitions at Trowbridge Gallery London. From contemporary photography and textile art to urban abstractions and emerging artist showcases. Visit our Kings Road gallery or experience our virtual exhibition tours online.",
  keywords: "art exhibitions London, contemporary art shows, gallery exhibitions, textile art exhibition, photography exhibition, virtual art tours, emerging artists showcase, London art events, Kings Road gallery",
  openGraph: {
    title: "Art Exhibitions | Trowbridge Gallery London",
    description: "Explore current and upcoming art exhibitions at Trowbridge Gallery London. Experience our virtual exhibition tours online.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1577083288073-40892c0860a4?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3",
        width: 1200,
        height: 630,
        alt: "Trowbridge Gallery Exhibitions",
      },
    ],
  },
}

// Add revalidation for ISR
export const revalidate = 3600 // revalidate every hour

export default function ExhibitionsPage() {
  const currentDate = new Date()

  const exhibitions = [
    {
      id: "1",
      title: "High Point Market",
      description: "It's Market : A Designer's Perspective. High Point Market is the ultimate destination for all things design, offering endless product options and the unexpected.",
      startDate: new Date(2025, 3, 26),
      endDate: new Date(2025, 3, 30),
      location: "High Point, NC 27260",
      coverImage: "https://14527931.fs1.hubspotusercontent-na1.net/hubfs/14527931/2.13.24_Press%20Release%20HP_Kickoff.jpg",
      featured: true,
      virtualTourUrl: "/exhibitions/virtual-tour/1",
    },
    {
      id: "2",
      title: "Urban Abstractions: The City Reimagined",
      description: "A group exhibition featuring artists who transform urban landscapes into abstract compositions, finding beauty in the chaos of city life.",
      startDate: new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 5),
      endDate: new Date(currentDate.getFullYear(), currentDate.getMonth() + 2, 10),
      location: "East Wing",
      coverImage: "https://images.unsplash.com/photo-1561488111-5d800fd56b8a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      featured: true,
      virtualTourUrl: null,
    },
    {
      id: "3",
      title: "Light & Form: A Photography Exhibition",
      description: "Celebrating the work of six photographers who explore the relationship between light and form in their captivating images.",
      startDate: new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 20),
      endDate: new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1),
      location: "West Gallery",
      coverImage: "https://media.licdn.com/dms/image/v2/D5610AQFOFXlmTwuU8Q/image-shrink_1280/B56ZY.sNVlHoAU-/0/1744808499760?e=1745438400&v=beta&t=1iKWOWpRh-bBFlrHmpA3ak_jeUSxKkn6deAQJJeQ8xw",
      featured: false,
      virtualTourUrl: "/exhibitions/virtual-tour/3",
    },
    {
      id: "5",
      title: "Textile Narratives: Woven Stories",
      description: "An immersive exhibition showcasing innovative textile art that explores cultural heritage, personal narratives, and contemporary social themes through fiber and fabric.",
      startDate: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
      endDate: new Date(currentDate.getFullYear(), currentDate.getMonth() + 2, 15),
      location: "North Gallery",
      coverImage: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      featured: true,
      virtualTourUrl: "/exhibitions/virtual-tour/5",
    },
    {
      id: "4",
      title: "Emerging Voices: New Talent Showcase",
      description: "Discover the work of rising artists pushing boundaries and bringing fresh perspectives to contemporary art.",
      startDate: new Date(currentDate.getFullYear(), currentDate.getMonth() + 2, 1),
      endDate: new Date(currentDate.getFullYear(), currentDate.getMonth() + 3, 15),
      location: "Project Space",
      coverImage: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      featured: false,
      virtualTourUrl: null,
    },
  ]

  const currentExhibitions = exhibitions.filter(
    (exhibition) =>
      currentDate >= exhibition.startDate &&
      currentDate <= exhibition.endDate
  )

  const upcomingExhibitions = exhibitions.filter(
    (exhibition) => currentDate < exhibition.startDate
  )

  const pastExhibitions = exhibitions.filter(
    (exhibition) => currentDate > exhibition.endDate
  )

  function formatDateRange(startDate: Date, endDate: Date) {
    const options: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }

    return `${startDate.toLocaleDateString('en-GB', options)} - ${endDate.toLocaleDateString('en-GB', options)}`
  }

  // Create structured data for exhibitions
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Trowbridge Gallery Exhibitions",
    "description": "Current and upcoming art exhibitions at Trowbridge Gallery London",
    "url": "https://trowbridgegallery.co.uk/exhibitions",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": currentExhibitions.map((exhibition, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "ExhibitionEvent",
          "name": exhibition.title,
          "description": exhibition.description,
          "startDate": exhibition.startDate.toISOString(),
          "endDate": exhibition.endDate.toISOString(),
          "location": {
            "@type": "Place",
            "name": "Trowbridge Gallery",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "555 Kings Road",
              "addressLocality": "London",
              "postalCode": "SW6 2EB",
              "addressCountry": "GB"
            }
          },
          "image": exhibition.coverImage,
          "url": `https://trowbridgegallery.co.uk/exhibitions/${exhibition.id}`
        }
      }))
    }
  };

  return (
    <div className="container py-12 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight mb-4">Exhibitions</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our current and upcoming exhibitions featuring exceptional contemporary art
            </p>
          </div>

        {currentExhibitions.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-8">Current Exhibitions</h2>
            <Suspense fallback={<GalleryLoadingSkeleton />}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {currentExhibitions.map((exhibition) => (
                  <div key={exhibition.id} className="flex flex-col">
                    <div className="aspect-[16/9] overflow-hidden rounded-lg mb-4">
                      <Image
                        src={exhibition.coverImage}
                        alt={exhibition.title}
                        width={800}
                        height={450}
                        className="object-cover w-full h-full"
                        quality={85}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={exhibition.featured}
                      />
                    </div>
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-xl font-medium mb-2">{exhibition.title}</h3>
                    <div className="flex items-center text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm">{formatDateRange(exhibition.startDate, exhibition.endDate)}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground mb-4">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span className="text-sm">{exhibition.location}</span>
                    </div>
                    <p className="text-muted-foreground mb-4 flex-1">{exhibition.description}</p>
                    <div className="flex gap-3">
                      <Button asChild>
                        <Link href={`/exhibitions/${exhibition.id}`}>
                          View Details
                        </Link>
                      </Button>
                      {exhibition.virtualTourUrl && (
                        <Button variant="outline" asChild>
                          <Link href={exhibition.virtualTourUrl}>
                            Virtual Tour
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            </Suspense>
          </section>
        )}

        {upcomingExhibitions.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-8">Upcoming Exhibitions</h2>
            <Suspense fallback={<GalleryLoadingSkeleton />}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {upcomingExhibitions.map((exhibition) => (
                  <div key={exhibition.id} className="border rounded-lg overflow-hidden group">
                    <div className="aspect-[3/2] overflow-hidden">
                      <Image
                        src={exhibition.coverImage}
                        alt={exhibition.title}
                        width={600}
                        height={400}
                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                        quality={80}
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                  <div className="p-5">
                    <h3 className="font-medium mb-2">{exhibition.title}</h3>
                    <div className="flex items-center text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm">{formatDateRange(exhibition.startDate, exhibition.endDate)}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground mb-3">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span className="text-sm">{exhibition.location}</span>
                    </div>
                    <Link
                      href={`/exhibitions/${exhibition.id}`}
                      className="inline-flex items-center text-primary text-sm font-medium hover:underline"
                    >
                      More details <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            </Suspense>
          </section>
        )}

        {pastExhibitions.length > 0 && (
          <section>
            <h2 className="text-2xl font-semibold mb-8">Past Exhibitions</h2>
            <div className="space-y-4">
              {pastExhibitions.map((exhibition) => (
                <div key={exhibition.id} className="border rounded-lg p-5">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="md:w-1/4">
                      <h3 className="font-medium">{exhibition.title}</h3>
                    </div>
                    <div className="md:w-1/4 text-muted-foreground text-sm">
                      {formatDateRange(exhibition.startDate, exhibition.endDate)}
                    </div>
                    <div className="md:w-1/4 text-muted-foreground text-sm">
                      {exhibition.location}
                    </div>
                    <div className="md:w-1/4 text-right">
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/exhibitions/${exhibition.id}`}>
                          View Archive
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}