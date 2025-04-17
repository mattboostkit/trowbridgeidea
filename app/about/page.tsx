import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"
import { CONTACT_INFO } from "@/lib/constants"

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Trowbridge Gallery's history, mission, and expertise in fine art",
}

export default function AboutPage() {
  return (
    <>
      <div className="bg-muted">
        <div className="container py-12 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight mb-4">About Trowbridge Gallery</h1>
            <p className="text-xl text-muted-foreground">
              A premier destination for fine art, dedicated to showcasing exceptional contemporary works
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
                Founded in 2005, Trowbridge Gallery has established itself as a leading destination for contemporary art in the UK. 
                What began as a small collection of prints has evolved into a comprehensive gallery representing artists from around the world.
              </p>
              <p className="text-muted-foreground mb-4">
                Our passion for art and commitment to excellence drives everything we do. We believe in the transformative power of art 
                to enhance spaces and create meaningful environments.
              </p>
              <p className="text-muted-foreground">
                Today, we offer a curated selection of original paintings, limited edition prints, photography, and sculptures, 
                providing options for every aesthetic preference and budget.
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
              To connect clients with exceptional artworks that inspire, while supporting artists in their creative journey and fostering 
              a deeper appreciation for contemporary art.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-card border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Curatorial Excellence</h3>
              <p className="text-muted-foreground">
                Our team brings years of experience and a discerning eye to our selection process, ensuring that each piece meets our 
                high standards for quality, originality, and artistic merit.
              </p>
            </div>
            <div className="bg-card border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Artist Support</h3>
              <p className="text-muted-foreground">
                We believe in nurturing talent and establishing long-term relationships with our artists, providing them with a platform 
                to showcase their work and connect with appreciative collectors.
              </p>
            </div>
            <div className="bg-card border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Client Service</h3>
              <p className="text-muted-foreground">
                Whether you're an experienced collector or new to the art world, our dedicated team is committed to providing personalized 
                guidance and exceptional service throughout your art journey.
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
                Our expertise extends beyond our curated collections. We offer a range of specialized services to meet the diverse needs of our clients:
              </p>
              <ul className="space-y-3 text-muted-foreground mb-6">
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span> 
                  <span>Art consultancy for residential and commercial spaces</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span> 
                  <span>Custom framing services</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span> 
                  <span>Installation and delivery</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span> 
                  <span>Private viewings</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span> 
                  <span>Art rental for events and photoshoots</span>
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
              We welcome you to experience our collection in person at our gallery space.
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