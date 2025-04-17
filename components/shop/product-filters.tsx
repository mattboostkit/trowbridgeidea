"use client"

import { useCallback, useState } from "react"
import { useSearchParams, usePathname, useRouter } from "next/navigation"
import { Filter, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Slider } from "@/components/ui/slider"
import { formatPrice } from "@/lib/utils"
import { CATEGORIES } from "@/lib/constants"

export function ProductFilters() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()

  const [priceRange, setPriceRange] = useState([0, 1000])
  const [openFilters, setOpenFilters] = useState(false)

  // Get the current selected filters from the URL
  const selectedCategories = searchParams.get("category")?.split(",") || []
  const selectedArtists = searchParams.get("artist")?.split(",") || []
  const minPrice = searchParams.get("minPrice") || "0"
  const maxPrice = searchParams.get("maxPrice") || "1000"

  // Dummy data for artists - this would come from your API/database
  const artists = [
    { id: "1", name: "Emily Richards" },
    { id: "2", name: "David Kim" },
    { id: "3", name: "Sarah Johnson" },
    { id: "4", name: "James Wilson" },
    { id: "5", name: "Lisa Chen" },
    { id: "6", name: "Michael Brown" },
  ]

  // Create URL with updated search params
  const createQueryString = useCallback(
    (params: Record<string, string | string[] | null>) => {
      const newSearchParams = new URLSearchParams(searchParams.toString())
      
      Object.entries(params).forEach(([name, value]) => {
        if (value === null) {
          newSearchParams.delete(name)
        } else if (Array.isArray(value)) {
          if (value.length === 0) {
            newSearchParams.delete(name)
          } else {
            newSearchParams.set(name, value.join(","))
          }
        } else {
          newSearchParams.set(name, value)
        }
      })
      
      return newSearchParams.toString()
    },
    [searchParams]
  )

  // Toggle category filter
  const toggleCategory = (category: string) => {
    const newCategories = selectedCategories.includes(category)
      ? selectedCategories.filter(c => c !== category)
      : [...selectedCategories, category]
    
    router.push(
      `${pathname}?${createQueryString({ category: newCategories.length ? newCategories : null })}`
    )
  }

  // Toggle artist filter
  const toggleArtist = (artist: string) => {
    const newArtists = selectedArtists.includes(artist)
      ? selectedArtists.filter(a => a !== artist)
      : [...selectedArtists, artist]
    
    router.push(
      `${pathname}?${createQueryString({ artist: newArtists.length ? newArtists : null })}`
    )
  }

  // Update price range filter
  const handlePriceChange = (value: number[]) => {
    setPriceRange(value)
  }

  const applyPriceFilter = () => {
    router.push(
      `${pathname}?${createQueryString({ 
        minPrice: priceRange[0].toString(), 
        maxPrice: priceRange[1].toString() 
      })}`
    )
  }

  // Clear all filters
  const clearFilters = () => {
    router.push(pathname)
    setPriceRange([0, 1000])
  }

  const filterCount = (
    (selectedCategories.length > 0 ? 1 : 0) + 
    (selectedArtists.length > 0 ? 1 : 0) + 
    ((minPrice !== "0" || maxPrice !== "1000") ? 1 : 0)
  )

  const FilterContent = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Filters</h3>
        <Button variant="ghost" size="sm" onClick={clearFilters}>
          Clear all
        </Button>
      </div>
      
      <Separator />
      
      <div>
        <h4 className="font-medium mb-3">Categories</h4>
        <div className="space-y-2">
          {CATEGORIES.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox 
                id={`category-${category}`} 
                checked={selectedCategories.includes(category)}
                onCheckedChange={() => toggleCategory(category)}
              />
              <label 
                htmlFor={`category-${category}`}
                className="text-sm text-muted-foreground cursor-pointer"
              >
                {category}
              </label>
            </div>
          ))}
        </div>
      </div>
      
      <Separator />
      
      <div>
        <h4 className="font-medium mb-3">Artists</h4>
        <div className="space-y-2">
          {artists.map((artist) => (
            <div key={artist.id} className="flex items-center space-x-2">
              <Checkbox 
                id={`artist-${artist.id}`} 
                checked={selectedArtists.includes(artist.name)}
                onCheckedChange={() => toggleArtist(artist.name)}
              />
              <label 
                htmlFor={`artist-${artist.id}`}
                className="text-sm text-muted-foreground cursor-pointer"
              >
                {artist.name}
              </label>
            </div>
          ))}
        </div>
      </div>
      
      <Separator />
      
      <div>
        <div className="flex justify-between items-center mb-3">
          <h4 className="font-medium">Price Range</h4>
          <span className="text-sm text-muted-foreground">
            {formatPrice(priceRange[0])} - {formatPrice(priceRange[1])}
          </span>
        </div>
        <Slider 
          defaultValue={[parseInt(minPrice), parseInt(maxPrice)]}
          max={1000} 
          step={50}
          value={priceRange}
          onValueChange={handlePriceChange}
          className="mb-6"
        />
        <Button size="sm" onClick={applyPriceFilter}>
          Apply Price Filter
        </Button>
      </div>
    </div>
  )

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Shop Artwork</h2>
        <div className="flex items-center gap-2">
          <p className="text-sm text-muted-foreground hidden md:block">
            Showing 1-20 of 567 results
          </p>
          
          <Sheet open={openFilters} onOpenChange={setOpenFilters}>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="md:hidden">
                <Filter className="h-4 w-4 mr-2" />
                Filters
                {filterCount > 0 && (
                  <span className="ml-1 text-xs bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center">
                    {filterCount}
                  </span>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <FilterContent />
            </SheetContent>
          </Sheet>
          
          {filterCount > 0 && (
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={clearFilters}
              className="hidden md:flex"
            >
              <X className="h-4 w-4 mr-2" />
              Clear filters
            </Button>
          )}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        <div className="hidden md:block">
          <FilterContent />
        </div>
        
        <div className="md:col-span-4">
          {/* Product grid will be here */}
          <div className="text-center py-12 text-muted-foreground">
            Product grid will be displayed here
          </div>
        </div>
      </div>
    </div>
  )
}