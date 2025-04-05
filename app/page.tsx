"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import SearchForm from "@/components/search-form"
import {
  Leaf,
  MapPin,
  Info,
  BoxIcon as Bottle,
  Newspaper,
  Wine,
  Sandwich,
  Cpu,
  Battery,
  Package,
  Lightbulb,
} from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section with Softer Gradient Background */}
      <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden bg-soft-gradient">
        {/* Content with centered search */}
        <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6 md:mb-8">
            Recycle with Confidence in Singapore
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mb-10 md:mb-12">
            Find out if an item is recyclable, how to prepare it properly, and where to recycle it in Singapore.
          </p>

          {/* Prominent Search Box */}
          <div className="w-full max-w-2xl mx-auto mb-16">
            <SearchForm />
          </div>

          <div className="w-full max-w-4xl mx-auto pt-6 backdrop-blur-sm bg-white/50 p-4 rounded-xl">
            <h2 className="text-lg font-medium mb-4">After you search, you'll discover:</h2>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 max-w-3xl mx-auto">
              <div className="flex items-start gap-3">
                <div className="shrink-0 p-1.5 rounded-full bg-recycling-green/10">
                  <Info className="h-4 w-4 text-recycling-green" />
                </div>
                <div className="text-left">
                  <h3 className="text-sm font-semibold">Recyclability Status</h3>
                  <p className="text-xs text-muted-foreground">Whether your item can be recycled in Singapore</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="shrink-0 p-1.5 rounded-full bg-recycling-blue/10">
                  <Leaf className="h-4 w-4 text-recycling-blue" />
                </div>
                <div className="text-left">
                  <h3 className="text-sm font-semibold">Preparation Steps</h3>
                  <p className="text-xs text-muted-foreground">How to prepare your item for proper recycling</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="shrink-0 p-1.5 rounded-full bg-recycling-earth/10">
                  <MapPin className="h-4 w-4 text-recycling-earth" />
                </div>
                <div className="text-left">
                  <h3 className="text-sm font-semibold">Nearby Locations</h3>
                  <p className="text-xs text-muted-foreground">Where to drop off your recyclable items</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Items Section with Modern 3D-style Icons */}
      <section className="w-full py-12 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-8">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Common Items</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              Quick access to information about frequently recycled items in Singapore.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {commonItems.map((item) => (
              <Link key={item.name} href={`/results?q=${encodeURIComponent(item.name)}`} className="group">
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center h-full">
                  <div className="modern-icon-wrapper mb-4">
                    <div
                      className="modern-icon"
                      style={{
                        backgroundColor: item.bgColor,
                        boxShadow: `0 10px 15px -3px ${item.shadowColor}40, 0 4px 6px -4px ${item.shadowColor}30`,
                      }}
                    >
                      <item.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-4">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Ready to Recycle Right?</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground">
            Start your recycling journey today and contribute to a more sustainable Singapore.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button asChild size="lg">
              <Link href="/guide">View Recycling Guide</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      <style jsx global>{`
        /* Modern Icon Styles */
        .modern-icon-wrapper {
          perspective: 1000px;
          width: 80px;
          height: 80px;
          position: relative;
        }
        
        .modern-icon {
          width: 100%;
          height: 100%;
          border-radius: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          transform-style: preserve-3d;
          transform: translateZ(0);
          transition: all 0.3s ease;
          background-image: linear-gradient(135deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0) 60%);
          overflow: hidden;
        }
        
        .modern-icon::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 24px;
          padding: 2px;
          background: linear-gradient(135deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.1) 50%, transparent 100%);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }
        
        .modern-icon::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 40%;
          background: linear-gradient(to top, rgba(0,0,0,0.15), transparent);
          border-radius: 0 0 24px 24px;
          z-index: -1;
        }
        
        .group:hover .modern-icon {
          transform: translateY(-8px) rotateY(10deg);
          box-shadow: 0 15px 25px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.1);
        }
        
        /* Softer Hero Gradient Background */
        .bg-soft-gradient {
          background: radial-gradient(
            circle at center,
            #e6f7ec 0%,
            #e2f5fa 35%,
            #f9f3e6 70%,
            #e8f5ed 100%
          );
        }
      `}</style>
    </div>
  )
}

const commonItems = [
  {
    name: "Plastic Bottles",
    icon: Bottle,
    bgColor: "#8BC34A",
    shadowColor: "#8BC34A",
  },
  {
    name: "Paper",
    icon: Newspaper,
    bgColor: "#42A5F5",
    shadowColor: "#42A5F5",
  },
  {
    name: "Glass Containers",
    icon: Wine,
    bgColor: "#AB47BC",
    shadowColor: "#AB47BC",
  },
  {
    name: "Metal Cans",
    icon: Sandwich,
    bgColor: "#FF9800",
    shadowColor: "#FF9800",
  },
  {
    name: "E-Waste",
    icon: Cpu,
    bgColor: "#F44336",
    shadowColor: "#F44336",
  },
  {
    name: "Batteries",
    icon: Battery,
    bgColor: "#78909C",
    shadowColor: "#78909C",
  },
  {
    name: "Cardboard",
    icon: Package,
    bgColor: "#8D6E63",
    shadowColor: "#8D6E63",
  },
  {
    name: "Light Bulbs",
    icon: Lightbulb,
    bgColor: "#FFCA28",
    shadowColor: "#FFCA28",
  },
]

