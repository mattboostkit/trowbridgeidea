import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, Twitter, Mail, Phone } from "lucide-react"

import { NAVIGATION, SOCIAL_LINKS, CONTACT_INFO } from "@/lib/constants"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/">
              <Image
                src="https://ik.imagekit.io/boostkit/Trowbridge/Logo.png?updatedAt=1744830655788"
                alt="Trowbridge Gallery Logo"
                width={150}
                height={38}
                className="h-8 w-auto mb-4"
                unoptimized
              />
            </Link>
            <p className="text-sm text-muted-foreground">
              A premier destination for fine art prints and original artwork
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </a>
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {NAVIGATION.footer.slice(0, 4).map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Information</h3>
            <ul className="space-y-2">
              {NAVIGATION.footer.slice(4).map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to receive updates on new arrivals, exhibitions and special offers.
            </p>
            <div className="flex space-x-2">
              <Input placeholder="Your email" type="email" />
              <Button>Subscribe</Button>
            </div>
            <div className="mt-6 space-y-2">
              <div className="flex items-center text-sm text-muted-foreground">
                <Mail className="h-4 w-4 mr-2" />
                <a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Phone className="h-4 w-4 mr-2" />
                <a href={`tel:${CONTACT_INFO.phone}`}>{CONTACT_INFO.phone}</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Trowbridge Gallery. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <p className="text-xs text-muted-foreground">
              Designed and developed with care in the UK
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}