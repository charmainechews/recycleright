import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { recyclableItems } from "@/lib/recycling-data"

export const metadata: Metadata = {
  title: "Recycling Guide | RecycleRight SG",
  description: "Comprehensive guide to recycling in Singapore - what can be recycled and how to do it properly",
}

export default function GuidePage() {
  // Group items by recyclability status
  const recyclableGroups = {
    Yes: recyclableItems.filter((item) => item.status === "Yes"),
    No: recyclableItems.filter((item) => item.status === "No"),
    Depends: recyclableItems.filter((item) => item.status === "Depends"),
  }

  return (
    <div className="container px-4 py-8 md:py-12">
      <h1 className="text-3xl font-bold tracking-tight mb-6">Recycling Guide</h1>

      <div className="prose prose-green max-w-none mb-8">
        <p className="text-lg text-muted-foreground">
          This guide provides information on what can and cannot be recycled in Singapore, and how to prepare items
          properly for recycling.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3 mb-12">
        <Card className="border-green-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-green-700">Recyclable</CardTitle>
            <CardDescription>Items that can be recycled in blue bins</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-2">
              These items can be placed in Singapore's blue recycling bins when clean and properly prepared.
            </p>
            <ul className="list-disc pl-5 space-y-1">
              {recyclableGroups["Yes"].map((item) => (
                <li key={item.id}>
                  <Link href={`/results?q=${encodeURIComponent(item.name)}`} className="text-primary hover:underline">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="border-amber-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-amber-700">Depends on Condition</CardTitle>
            <CardDescription>Items that may be recyclable under certain conditions</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-2">
              These items can be recycled only if they meet specific conditions. Check details for each item.
            </p>
            <ul className="list-disc pl-5 space-y-1">
              {recyclableGroups["Depends"].map((item) => (
                <li key={item.id}>
                  <Link href={`/results?q=${encodeURIComponent(item.name)}`} className="text-primary hover:underline">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="border-red-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-red-700">Not Recyclable</CardTitle>
            <CardDescription>Items that cannot be recycled in Singapore</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-2">
              These items should not be placed in recycling bins as they can contaminate other recyclables.
            </p>
            <ul className="list-disc pl-5 space-y-1">
              {recyclableGroups["No"].map((item) => (
                <li key={item.id}>
                  <Link href={`/results?q=${encodeURIComponent(item.name)}`} className="text-primary hover:underline">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Recycling FAQs</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Do I need to wash recyclables before putting them in the blue bin?</AccordionTrigger>
            <AccordionContent>
              Yes, recyclables should be rinsed to remove food residue and contaminants. Contaminated items can affect
              the entire batch of recyclables and may cause them to be rejected at the recycling facility.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Can I recycle plastic bags in Singapore?</AccordionTrigger>
            <AccordionContent>
              Generally, plastic bags are not accepted in Singapore's blue bins as they can jam sorting machinery.
              However, some supermarkets have dedicated plastic bag recycling points. It's best to reduce usage of
              plastic bags or reuse them whenever possible.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>What should I do with e-waste?</AccordionTrigger>
            <AccordionContent>
              E-waste should not be disposed of in blue bins. Instead, bring them to designated e-waste collection
              points located at selected community centers, schools, and retail stores. These ensure proper handling of
              potentially hazardous components.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Are takeaway food containers recyclable?</AccordionTrigger>
            <AccordionContent>
              It depends on the material and cleanliness. Plastic containers can be recycled if they're clean and free
              of food residue. Styrofoam containers are not recyclable in Singapore. Paper containers with food stains
              or plastic coating should go in general waste.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>What happens to the items I place in blue bins?</AccordionTrigger>
            <AccordionContent>
              Items collected from blue bins are sent to materials recovery facilities where they are sorted, processed,
              and then sent to recycling plants. There, they are transformed into raw materials that can be used to make
              new products.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Recycling Tips</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Reduce Contamination</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>Rinse containers to remove food residue</li>
                <li>Keep recyclables dry and clean</li>
                <li>Remove non-recyclable components (e.g., plastic windows from envelopes)</li>
                <li>When in doubt, throw it out - contamination can affect entire batches</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Maximize Efficiency</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>Flatten cardboard boxes to save space</li>
                <li>Remove caps from bottles (but both can be recycled)</li>
                <li>Don't bag recyclables - place them loose in the bin</li>
                <li>Separate different materials when possible</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

