"use client"

import { useState, useEffect } from "react"
import { findNearbyRecyclingLocations, type RecyclingLocation } from "@/lib/recycling-data"
import { Loader2, MapPin, Navigation } from "lucide-react"
import { Button } from "@/components/ui/button"

interface RecyclingMapProps {
  itemName: string
}

export default function RecyclingMap({ itemName }: RecyclingMapProps) {
  const [locations, setLocations] = useState<RecyclingLocation[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [selectedLocation, setSelectedLocation] = useState<RecyclingLocation | null>(null)

  useEffect(() => {
    // Find locations that accept this item
    const nearbyLocations = findNearbyRecyclingLocations([itemName])
    setLocations(nearbyLocations)
    setIsLoading(false)
  }, [itemName])

  if (isLoading) {
    return (
      <div className="h-full flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    )
  }

  if (locations.length === 0) {
    return (
      <div className="h-full flex items-center justify-center text-center p-4">
        <div>
          <p className="font-medium mb-2">No specific recycling points found for this item.</p>
          <p className="text-sm text-muted-foreground">
            Please check the disposal instructions for alternative options.
          </p>
        </div>
      </div>
    )
  }

  // Determine marker colors based on facility type
  const getMarkerColor = (type: string) => {
    switch (type) {
      case "Blue Bin":
        return "#2196F3"
      case "E-Waste Bin":
        return "#9C27B0"
      case "Special Collection":
        return "#FF9800"
      default:
        return "#757575"
    }
  }

  return (
    <div className="h-full w-full flex flex-col">
      <div className="p-3 bg-muted/50 border-b flex justify-between items-center">
        <h3 className="font-medium">Recycling Locations</h3>
      </div>

      <div className="flex-1 overflow-auto p-2">
        <div className="space-y-3">
          {locations.map((location) => (
            <div
              key={location.id}
              className={`p-3 rounded-md border transition-colors ${
                selectedLocation?.id === location.id ? "bg-primary/5 border-primary/20" : "bg-card hover:bg-muted/30"
              }`}
              onClick={() => setSelectedLocation(selectedLocation?.id === location.id ? null : location)}
            >
              <div className="flex justify-between items-start gap-2">
                <div className="flex gap-2">
                  <div className="shrink-0 mt-0.5" style={{ color: getMarkerColor(location.type) }}>
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">{location.name}</h4>
                    <p className="text-sm text-muted-foreground">{location.address}</p>
                    {location.operatingHours && (
                      <p className="text-xs text-muted-foreground mt-1">Hours: {location.operatingHours}</p>
                    )}
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="shrink-0"
                  onClick={(e) => {
                    e.stopPropagation()
                    window.open(
                      `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                        `${location.address}, Singapore ${location.postalCode}`,
                      )}`,
                      "_blank",
                    )
                  }}
                >
                  <Navigation className="h-4 w-4" />
                  <span className="sr-only">Get directions</span>
                </Button>
              </div>

              {selectedLocation?.id === location.id && (
                <div className="mt-3 pt-3 border-t">
                  <h5 className="text-sm font-medium mb-1">Accepted items:</h5>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {location.acceptedItems.map((item) => (
                      <span
                        key={item}
                        className={`text-xs px-2 py-0.5 rounded-full ${
                          item === itemName
                            ? "bg-primary/10 text-primary border border-primary/20"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <Button
                    variant="default"
                    size="sm"
                    className="mt-3 w-full"
                    onClick={(e) => {
                      e.stopPropagation()
                      window.open(
                        `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                          `${location.address}, Singapore ${location.postalCode}`,
                        )}`,
                        "_blank",
                      )
                    }}
                  >
                    <Navigation className="h-3 w-3 mr-1" />
                    Get Directions
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="p-3 bg-muted/50 border-t text-center text-sm text-muted-foreground">
        <p>Click on a location to see more details</p>
      </div>
    </div>
  )
}

