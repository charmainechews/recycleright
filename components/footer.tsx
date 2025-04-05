import Link from "next/link"
import { Recycle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background py-6">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center gap-2">
          <Recycle className="h-5 w-5 text-recycling-green" />
          <span className="text-sm font-medium">RecycleRight SG</span>
        </div>
        <nav className="flex gap-4 text-sm text-muted-foreground">
          <Link href="/about" className="hover:text-foreground">
            About
          </Link>
          <Link href="/privacy" className="hover:text-foreground">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-foreground">
            Terms
          </Link>
          <Link href="/contact" className="hover:text-foreground">
            Contact
          </Link>
        </nav>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} RecycleRight SG. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

