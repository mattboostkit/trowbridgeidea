import { Metadata } from "next"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CONTACT_INFO } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Trowbridge Gallery for inquiries, consultations, or to visit our space",
}

export default function ContactPage() {
  return (
    <>
      <div className="bg-muted">
        <div className="container py-12 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight mb-4">Contact Us</h1>
            <p className="text-xl text-muted-foreground">
              We'd love to hear from you. Reach out with any questions, inquiries, or to schedule a consultation.
            </p>
          </div>
        </div>
      </div>
      
      <div className="container py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="Your email" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input id="subject" placeholder="Subject of your message" required />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="How can we help you?" 
                    rows={5}
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="flex items-center space-x-2">
                    <input 
                      type="checkbox" 
                      className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <span className="text-sm text-muted-foreground">
                      I would like to receive newsletters about exhibitions and special events
                    </span>
                  </label>
                </div>
                
                <Button type="submit" className="w-full">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="bg-card border rounded-lg p-8 mb-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 mr-4 text-primary mt-1" />
                    <div>
                      <h3 className="font-medium mb-1">Address</h3>
                      <address className="not-italic text-muted-foreground">
                        {CONTACT_INFO.address.line1}<br />
                        {CONTACT_INFO.address.line2}<br />
                        {CONTACT_INFO.address.city}, {CONTACT_INFO.address.postcode}<br />
                        {CONTACT_INFO.address.country}
                      </address>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 mr-4 text-primary mt-1" />
                    <div>
                      <h3 className="font-medium mb-1">Email</h3>
                      <p className="text-muted-foreground">
                        <a href={`mailto:${CONTACT_INFO.email}`} className="hover:underline">
                          {CONTACT_INFO.email}
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 mr-4 text-primary mt-1" />
                    <div>
                      <h3 className="font-medium mb-1">Phone</h3>
                      <p className="text-muted-foreground">
                        <a href={`tel:${CONTACT_INFO.phone}`} className="hover:underline">
                          {CONTACT_INFO.phone}
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 mr-4 text-primary mt-1" />
                    <div>
                      <h3 className="font-medium mb-1">Opening Hours</h3>
                      <p className="text-muted-foreground">Monday-Friday: 10am-6pm</p>
                      <p className="text-muted-foreground">Saturday: 11am-5pm</p>
                      <p className="text-muted-foreground">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-4">Departments</h3>
                <div className="space-y-4">
                  <div className="border-b pb-3">
                    <h4 className="font-medium">Sales & General Inquiries</h4>
                    <p className="text-sm text-muted-foreground">
                      <a href="mailto:info@trowbridgegallery.co.uk" className="hover:underline">
                        info@trowbridgegallery.co.uk
                      </a>
                    </p>
                  </div>
                  <div className="border-b pb-3">
                    <h4 className="font-medium">Trade & Interior Design</h4>
                    <p className="text-sm text-muted-foreground">
                      <a href="mailto:trade@trowbridgegallery.co.uk" className="hover:underline">
                        trade@trowbridgegallery.co.uk
                      </a>
                    </p>
                  </div>
                  <div className="border-b pb-3">
                    <h4 className="font-medium">Artist Submissions</h4>
                    <p className="text-sm text-muted-foreground">
                      <a href="mailto:artists@trowbridgegallery.co.uk" className="hover:underline">
                        artists@trowbridgegallery.co.uk
                      </a>
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium">Press & Media</h4>
                    <p className="text-sm text-muted-foreground">
                      <a href="mailto:press@trowbridgegallery.co.uk" className="hover:underline">
                        press@trowbridgegallery.co.uk
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="w-full">
        <div className="container max-w-[1400px] mx-auto py-12">
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
      
      <div className="py-12 bg-muted">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Looking for a Private Consultation?</h2>
            <p className="text-muted-foreground mb-6">
              Our expert team can help you find the perfect artwork for your space. Schedule a consultation with our art advisors.
            </p>
            <Button size="lg" variant="default" asChild>
              <a href="/services/consultation">Book a Consultation</a>
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}