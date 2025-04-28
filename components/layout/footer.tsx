import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, Twitter, Mail, Phone } from "lucide-react"
import { toast } from "sonner"

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
                quality={100}
              />
            </Link>
            <p className="text-sm text-muted-foreground">
              A premier destination for fine art prints and original artwork
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Trowbridge Gallery on Instagram"
                >
                  <Instagram className="h-5 w-5" aria-hidden="true" />
                  <span className="sr-only">Instagram</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href={SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Trowbridge Gallery on Facebook"
                >
                  <Facebook className="h-5 w-5" aria-hidden="true" />
                  <span className="sr-only">Facebook</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href={SOCIAL_LINKS.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Trowbridge Gallery on Twitter"
                >
                  <Twitter className="h-5 w-5" aria-hidden="true" />
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
            <h3 className="text-lg font-medium mb-4" id="newsletter-heading">Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to receive updates on new arrivals, exhibitions and special offers.
            </p>
            <form
              className="flex flex-col sm:flex-row gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                // This would be replaced with actual newsletter subscription logic
                const form = e.currentTarget;
                const email = form.email.value;
                if (email) {
                  // Show success message using Sonner toast
                  toast.success("Thank you for subscribing!", {
                    description: `We've sent a confirmation email to ${email}.`,
                    duration: 5000,
                  });
                  form.reset();
                }
              }}
              aria-labelledby="newsletter-heading"
            >
              <Input
                placeholder="Your email"
                type="email"
                name="email"
                id="footer-email"
                aria-label="Your email address"
                required
                className="flex-1"
              />
              <Button type="submit">Subscribe</Button>
            </form>
            <div className="mt-6 space-y-2">
              <div className="flex items-center text-sm text-muted-foreground">
                <Mail className="h-4 w-4 mr-2" aria-hidden="true" />
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  aria-label={`Email us at ${CONTACT_INFO.email}`}
                >
                  {CONTACT_INFO.email}
                </a>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Phone className="h-4 w-4 mr-2" aria-hidden="true" />
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  aria-label={`Call us at ${CONTACT_INFO.phone}`}
                >
                  {CONTACT_INFO.phone}
                </a>
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