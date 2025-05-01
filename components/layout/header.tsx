"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { 
  ShoppingCart, 
  User, 
  Search, 
  Menu, 
  X, 
  Heart, 
  Paintbrush 
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { NAVIGATION } from "@/lib/constants"

export function Header() {
  const pathname = usePathname()
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <header className="border-b bg-background sticky top-0 z-40">
      <div className="container flex h-16 items-center justify-between">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4 mt-8">
              {NAVIGATION.main.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-lg font-medium transition-colors hover:text-primary"
                >
                  {item.name}
                </Link>
              ))}
              <div className="border-t pt-4 mt-4">
                <Link
                  href="/account"
                  className="flex items-center text-lg font-medium transition-colors hover:text-primary"
                >
                  <User className="mr-2 h-5 w-5" />
                  Account
                </Link>
                <Link
                  href="/trade"
                  className="flex items-center mt-4 text-lg font-medium transition-colors hover:text-primary"
                >
                  <Paintbrush className="mr-2 h-5 w-5" />
                  Trade Portal
                </Link>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
        
        <Link href="/" className="flex items-center">
          <Image
            src="https://ik.imagekit.io/boostkit/Trowbridge/Logo.png?updatedAt=1744830655788"
            alt="Trowbridge Gallery Logo"
            width={160}
            height={40}
            className="h-8 w-auto"
            unoptimized
          />
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          {NAVIGATION.main.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === item.href ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center gap-2">
          {isSearchOpen ? (
            <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <div className="bg-background border rounded-lg shadow-lg w-full max-w-lg p-4">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-medium">Search Gallery</h2>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => setIsSearchOpen(false)}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Search for art, artists, collections..." 
                    className="w-full border rounded-md h-10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Button size="icon" className="absolute right-1 top-1">
                    <Search className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          )}
          
          <Button variant="ghost" size="icon" asChild>
            <Link href="/wishlist">
              <Heart className="h-5 w-5" />
              <span className="sr-only">Wishlist</span>
            </Link>
          </Button>
          
          <Button variant="ghost" size="icon" asChild>
            <Link href="/account">
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Link>
          </Button>
          
          <Button variant="ghost" size="icon" asChild>
            <Link href="/cart">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Cart</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}