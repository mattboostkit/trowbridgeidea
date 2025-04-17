import { ProductFilters } from "@/components/shop/product-filters"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Shop Fine Art | Original Paintings & Limited Edition Prints | Trowbridge Gallery",
  description: "Shop Trowbridge Gallery's curated collection of fine art, including original paintings, limited edition prints, photography, and sculptures. Filter by category, artist, and price range to find the perfect piece for your space.",
  keywords: "buy fine art, original paintings for sale, limited edition prints, contemporary art for sale, art gallery shop, luxury art prints, interior design artwork, Trowbridge Gallery collection, art for collectors",
}

export default function ShopPage() {
  return (
    <div className="container py-10 px-4">
      <ProductFilters />
    </div>
  )
}