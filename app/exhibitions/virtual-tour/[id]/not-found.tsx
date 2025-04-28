import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="container py-16 px-4">
      <div className="max-w-md mx-auto text-center">
        <h1 className="text-3xl font-bold mb-4">Exhibition Not Found</h1>
        <p className="text-muted-foreground mb-8">
          Sorry, we couldn't find the virtual tour you're looking for. It may have been removed or is not yet available.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link href="/exhibitions">
              Browse Exhibitions
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/">
              Return Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
