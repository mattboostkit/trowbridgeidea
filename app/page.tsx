import { Hero } from "@/components/home/hero"
import { FeaturedCollections } from "@/components/home/featured-collections"
import { FeaturedProducts } from "@/components/home/featured-products"
import { Testimonials } from "@/components/home/testimonials"
import { CTA } from "@/components/home/cta"

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedCollections />
      <FeaturedProducts />
      <Testimonials />
      <CTA />
    </>
  );
}