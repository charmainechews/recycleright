"use client"

import { useState } from "react"
import type { RecyclableItem } from "@/lib/recycling-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle, XCircle, AlertCircle, Info, Trash2, Recycle, Cpu, Building } from "lucide-react"
import RecyclingMap from "@/components/recycling-map"

interface ResultsDisplayProps {
  item: RecyclableItem
}

export default function ResultsDisplay({ item }: ResultsDisplayProps) {
  const [activeTab, setActiveTab] = useState("info")

  // Status configuration
  const statusConfig = {
    Yes: {
      icon: <CheckCircle className="h-8 w-8" />,
      color: "bg-green-100 text-green-700 border-green-200",
      textColor: "text-green-700",
    },
    No: {
      icon: <XCircle className="h-8 w-8" />,
      color: "bg-red-100 text-red-700 border-red-200",
      textColor: "text-red-700",
    },
    Depends: {
      icon: <AlertCircle className="h-8 w-8" />,
      color: "bg-amber-100 text-amber-700 border-amber-200",
      textColor: "text-amber-700",
    },
  }[item.status]

  // Facility icons mapping
  const facilityIcons = {
    "Blue Bin": <Recycle className="h-5 w-5 text-blue-600" />,
    "E-Waste Bin": <Cpu className="h-5 w-5 text-purple-600" />,
    "Special Collection": <Building className="h-5 w-5 text-amber-600" />,
    "General Waste": <Trash2 className="h-5 w-5 text-gray-600" />,
  }

  return (
    <div className="flex justify-center w-full">
      <Card className="overflow-hidden w-full max-w-3xl">
        <CardHeader className={`pb-4 ${statusConfig.color}`}>
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl md:text-2xl flex items-center gap-3">{item.name}</CardTitle>
            <div className="flex items-center gap-2">
              <span className={`text-lg font-bold ${statusConfig.textColor}`}>{item.status}</span>
              {statusConfig.icon}
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <Tabs defaultValue="info" className="w-full" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-4 w-full justify-start">
              <TabsTrigger value="info" className="flex-1">
                Information & Preparation
              </TabsTrigger>
              <TabsTrigger value="locations" className="flex-1">
                Recycling Locations
              </TabsTrigger>
            </TabsList>

            <TabsContent value="info" className="space-y-6">
              {/* Main explanation */}
              <div>
                <h3 className="font-medium text-lg mb-2">About this item</h3>
                <p>{item.explanation}</p>
              </div>

              {/* Preparation instructions */}
              <div>
                <h3 className="font-medium text-lg mb-2">How to prepare for recycling</h3>
                <ul className="list-disc pl-5 space-y-2">
                  {item.preparation.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ul>
              </div>

              {/* Important callouts */}
              {item.callouts && item.callouts.length > 0 && (
                <Alert className="mt-4">
                  <Info className="h-4 w-4" />
                  <AlertDescription>
                    <h3 className="font-medium mb-1">Important notes</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      {item.callouts.map((callout, index) => (
                        <li key={index}>{callout}</li>
                      ))}
                    </ul>
                  </AlertDescription>
                </Alert>
              )}

              {/* Disposal options with icons */}
              <div>
                <h3 className="font-medium text-lg mb-3">Where to dispose</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  {item.disposalOptions.map((option, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 border rounded-md">
                      <div className="shrink-0 mt-0.5">
                        {facilityIcons[option.type] || <Trash2 className="h-5 w-5 text-gray-600" />}
                      </div>
                      <div>
                        <h4 className="font-medium">{option.type}</h4>
                        <p className="text-sm text-muted-foreground">{option.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="locations" className="space-y-4">
              <div className="flex flex-col gap-4">
                {/* Interactive Location List - Always visible when locations tab is active */}
                <div className="h-[400px] rounded-md border overflow-hidden">
                  <RecyclingMap itemName={item.name} />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

