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
import { SearchDialog } from "@/components/layout/search-dialog"

export function Header() {
  const pathname = usePathname()

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
            priority
            quality={100}
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
          <SearchDialog />

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