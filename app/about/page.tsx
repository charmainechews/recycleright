import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Recycle, Leaf, Globe, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "About | RecycleRight SG",
  description: "Learn about RecycleRight SG and our mission to help Singapore recycle correctly",
}

export default function AboutPage() {
  return (
    <div className="container px-4 py-8 md:py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold tracking-tight mb-6">About RecycleRight SG</h1>

        <div className="prose prose-green max-w-none">
          <p className="text-lg text-muted-foreground mb-8">
            RecycleRight SG is a web application designed to help the general public in Singapore determine if an item
            is recyclable, how to prepare it properly, and where to recycle it.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
          <p>
            Our mission is to empower Singaporeans to recycle correctly and confidently, reduce contamination in blue
            bins, and make recycling more convenient by showing nearby relevant drop-off points.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Why RecycleRight SG?</h2>
          <div className="grid gap-4 md:grid-cols-2 my-6">
            <Card>
              <CardHeader className="pb-2">
                <Recycle className="h-6 w-6 text-recycling-green mb-2" />
                <CardTitle>Clear Information</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We provide straightforward answers about what can and cannot be recycled in Singapore, based on
                  official guidelines.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <Leaf className="h-6 w-6 text-recycling-green mb-2" />
                <CardTitle>Proper Preparation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Learn how to properly prepare items for recycling to avoid contamination and ensure they can be
                  processed effectively.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <MapPin className="h-6 w-6 text-recycling-green mb-2" />
                <CardTitle>Convenient Locations</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Find the nearest recycling points for your items, whether they're blue bins or special collection
                  facilities.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <Globe className="h-6 w-6 text-recycling-green mb-2" />
                <CardTitle>Environmental Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  By recycling correctly, you're helping to reduce waste, conserve resources, and protect the
                  environment.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Data Sources</h2>
          <p>
            The information provided on RecycleRight SG is sourced from the National Environment Agency (NEA) of
            Singapore and other official guidelines. We strive to keep our data accurate and up-to-date.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
          <p>
            If you have any questions, suggestions, or feedback, please don't hesitate to contact us. We're always
            looking to improve and provide better information to help Singapore recycle right.
          </p>
        </div>
      </div>
    </div>
  )
}

