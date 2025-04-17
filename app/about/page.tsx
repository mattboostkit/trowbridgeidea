import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"
import { CONTACT_INFO } from "@/lib/constants"

export const metadata: Metadata = {
  title: "About Trowbridge Gallery | Our History & Mission | Fine Art Since 1981",
  description: "Founded in 1981, Trowbridge Gallery has grown from a specialist print collection to a leading fine art destination in London. Discover our story, mission, and commitment to artistic excellence, quality framing, and exceptional client service.",
  keywords: "Trowbridge Gallery history, fine art gallery London, Martin Trowbridge, art gallery established 1981, luxury art framing, art consultancy services, contemporary art gallery UK",
}

export default function AboutPage() {
  return (
    <>
      <div className="bg-muted">
        <div className="container py-12 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight mb-4">About Trowbridge Gallery</h1>
            <p className="text-xl text-muted-foreground">
              A premier destination for fine and contemporary art, proudly showcasing an exceptional collection of original works, limited edition prints, photography, textiles, and sculptures – all beautifully presented in handmade frames of the highest quality.
            </p>
          </div>
        </div>
      </div>

      <div className="container py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Founded in England in 1981 by Martin Trowbridge, TROWBRIDGE began with a passion for fine art prints and antique imagery. What started as a small, specialist collection has grown into a global name, trusted by collectors, interior designers, and art lovers for over four decades.
              </p>
              <p className="text-muted-foreground mb-4">
                In 2005, Trowbridge Gallery expanded its focus to embrace contemporary art, establishing itself as a leading gallery in the UK. Today, we represent a carefully curated roster of emerging and established artists from around the world, united by a commitment to quality, originality, and artistic excellence.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://trowbridgegallery.com.au/wp-content/uploads/2018/11/Claremont_11-e1541417736434.jpg"
                alt="Gallery space"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-6">Our Mission</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We believe in the transformative power of art to elevate interiors and enrich lives. Our mission is to connect clients with exceptional artworks that inspire, while supporting artists on their creative journeys and fostering a deeper appreciation for both traditional and contemporary art.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-card border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Curatorial Excellence</h3>
              <p className="text-muted-foreground">
                With decades of experience and a discerning eye, our team ensures that each piece in our collection meets our exacting standards. Whether it's a timeless antique print or a bold contemporary work, every artwork is selected for its integrity, craftsmanship, and aesthetic appeal.
              </p>
              <p className="text-muted-foreground mt-4">
                More than 70% of the artworks we offer are exclusive to TROWBRIDGE – including pieces commissioned directly from artists and photographers. We control every step of the print and framing process to guarantee impeccable quality and consistency.
              </p>
            </div>
            <div className="bg-card border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Artist Support</h3>
              <p className="text-muted-foreground">
                We take pride in nurturing talent and forging lasting partnerships with our artists. By offering a trusted platform for exposure and growth, we help artists reach appreciative audiences and build meaningful careers in the art world.
              </p>
            </div>
            <div className="bg-card border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Client Service</h3>
              <p className="text-muted-foreground">
                Whether you're an experienced collector, a first-time buyer, or a design professional sourcing for a project, our dedicated team provides expert guidance, tailored recommendations, and a seamless, personal service.
              </p>
              <p className="text-muted-foreground mt-4">
                We work with individuals, interior designers, and commercial clients to find the right artworks for every space and style.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1 relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://trowbridgegallery.com.au/wp-content/uploads/2018/11/Claremont_11-e1541417736434.jpg"
                alt="Art consultation"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold tracking-tight mb-6">Expert Services</h2>
              <p className="text-muted-foreground mb-4">
                Our offering goes beyond our curated collection. We provide a comprehensive suite of services designed to support both private and professional clients:
              </p>
              <ul className="space-y-3 text-muted-foreground mb-6">
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  <span>Art consultancy for residential and commercial interiors</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  <span>Custom framing, handmade in the UK</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  <span>Artwork installation and white-glove delivery</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  <span>Private gallery viewings</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  <span>Art rental for events, editorials, and photoshoots</span>
                </li>
              </ul>
              <Button asChild>
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-6">Visit Us</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              We invite you to experience our collection in person at our London gallery, where exceptional art, craftsmanship, and service come together in a welcoming and inspiring space.
            </p>
          </div>

          <div className="w-full max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-1 p-6 bg-card rounded-lg shadow-sm border">
                <h3 className="text-xl font-bold mb-4">Visit Our Gallery</h3>
                <address className="not-italic text-muted-foreground mb-6">
                  <p className="mb-1">{CONTACT_INFO.address.line1}</p>
                  <p className="mb-1">{CONTACT_INFO.address.line2}</p>
                  <p className="mb-1">{CONTACT_INFO.address.city}, {CONTACT_INFO.address.postcode}</p>
                  <p>{CONTACT_INFO.address.country}</p>
                </address>

                <div className="mb-6">
                  <h4 className="font-medium mb-2">Opening Hours</h4>
                  <p className="text-muted-foreground text-sm">Monday-Friday: 10am-6pm</p>
                  <p className="text-muted-foreground text-sm">Saturday: 11am-5pm</p>
                  <p className="text-muted-foreground text-sm">Sunday: Closed</p>
                </div>

                <div className="space-y-3 mb-6">
                  <p className="text-muted-foreground text-sm">
                    Email: <a href={`mailto:${CONTACT_INFO.email}`} className="text-primary hover:underline">
                      {CONTACT_INFO.email}
                    </a>
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Phone: <a href={`tel:${CONTACT_INFO.phone}`} className="text-primary hover:underline">
                      {CONTACT_INFO.phone}
                    </a>
                  </p>
                </div>

                <Button variant="outline" asChild>
                  <a href="https://goo.gl/maps/hjQHjYhUSfJdTp2v7" target="_blank" rel="noopener noreferrer">
                    <MapPin className="mr-2 h-4 w-4" />
                    Get Directions
                  </a>
                </Button>
              </div>

              <div className="md:col-span-2 rounded-lg overflow-hidden h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2485.0732619828947!2d-0.183889!3d51.4856055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760f8c6ae9b81d%3A0x12d01f15bda6c0ef!2s555%20King&#39;s%20Rd%2C%20London%20SW6%202EB!5e0!3m2!1sen!2suk!4v1653312641542!5m2!1sen!2suk"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}