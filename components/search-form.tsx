"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export default function SearchForm() {
  const [query, setQuery] = useState("")
  const router = useRouter()
  const [typingText, setTypingText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(50) // 3x faster (was 150)

  const exampleItems = [
    "plastic bottle",
    "newspaper",
    "glass jar",
    "aluminum can",
    "cardboard box",
    "light bulb",
    "battery",
    "electronic device",
  ]

  const typingRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleTyping = () => {
      const current = loopNum % exampleItems.length
      const fullText = exampleItems[current]

      setTypingText(
        isDeleting ? fullText.substring(0, typingText.length - 1) : fullText.substring(0, typingText.length + 1),
      )

      setTypingSpeed(isDeleting ? 27 : 50) // 3x faster (was 80 and 150)

      if (!isDeleting && typingText === fullText) {
        // Keep completed word for 2 seconds
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && typingText === "") {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
        // Pause before starting to type the next word
        setTypingSpeed(500)
      }
    }

    typingRef.current = setTimeout(handleTyping, typingSpeed)

    return () => {
      if (typingRef.current) clearTimeout(typingRef.current)
    }
  }, [typingText, isDeleting, loopNum, typingSpeed, exampleItems])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/results?q=${encodeURIComponent(query.trim())}`)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search for an item (e.g., plastic bottle, battery, newspaper)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-12 h-14 text-lg rounded-full shadow-md focus:shadow-lg transition-shadow"
        />
        <Button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 h-10 rounded-full px-6"
          disabled={!query.trim()}
        >
          Search
        </Button>
      </div>

      {/* Typing Animation */}
      <div className="mt-3 h-6 overflow-hidden text-left pl-12">
        <p className="text-sm text-muted-foreground">
          Try searching for: <span className="typing-text text-primary font-medium">{typingText}</span>
          <span className="typing-cursor">|</span>
        </p>
      </div>

      <style jsx>{`
        .typing-cursor {
          display: inline-block;
          width: 2px;
          animation: blink 1s infinite;
          margin-left: 2px;
        }
        
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </form>
  )
}

