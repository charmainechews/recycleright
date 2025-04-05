import Link from "next/link"
import { ModeToggle } from "./mode-toggle"
import { Button } from "./ui/button"
import { Recycle } from "lucide-react"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Recycle className="h-6 w-6 text-recycling-green" />
          <span className="text-xl font-bold">RecycleRight SG</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:text-primary">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-primary">
            About
          </Link>
          <Link href="/guide" className="text-sm font-medium hover:text-primary">
            Recycling Guide
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <ModeToggle />
          <Button asChild variant="outline" className="hidden md:flex">
            <Link href="/contact">Contact</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

