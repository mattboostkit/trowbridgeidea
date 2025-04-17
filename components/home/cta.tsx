import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CTA() {
  return (
    <section className="bg-gradient-to-r from-[#1a5f7a] to-[#3a8f9f] text-white">
      <div className="container py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Luxury Art For Interior Designers
          </h2>
          <p className="text-lg mb-8">
            Our team of experts can help you find the perfect pieces for your home, office, or commercial space. 
            Whether you're looking for a statement piece or a complete collection, we provide tailored advice to match your style and budget.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary" className="bg-white text-[#1a5f7a] hover:bg-gray-100" asChild>
              <Link href="/services/consultation">
                Learn More
              </Link>
            </Button>
            <Button size="lg" className="bg-transparent border-2 border-white hover:bg-white/10" asChild>
              <Link href="/contact">
                Book a Consultation
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}