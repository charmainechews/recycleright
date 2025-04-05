export type RecyclabilityStatus = "Yes" | "No" | "Depends"

export interface RecyclableItem {
  id: string
  name: string
  status: RecyclabilityStatus
  explanation: string
  callouts?: string[]
  preparation: string[]
  disposalOptions: DisposalOption[]
}

export interface DisposalOption {
  type: "Blue Bin" | "E-Waste Bin" | "Special Collection" | "General Waste"
  description: string
}

export const recyclableItems: RecyclableItem[] = [
  {
    id: "plastic-bottle",
    name: "Plastic Bottle",
    status: "Yes",
    explanation: "Clean plastic bottles are recyclable in Singapore's blue bins.",
    callouts: ["Remove caps and labels if possible", "Ensure bottle is empty and rinsed"],
    preparation: [
      "Empty all contents",
      "Rinse with water to remove residue",
      "Crush to save space (optional)",
      "Place in blue recycling bin",
    ],
    disposalOptions: [
      {
        type: "Blue Bin",
        description: "Available at all HDB blocks, condominiums, and many public areas",
      },
    ],
  },
  {
    id: "paper",
    name: "Paper",
    status: "Yes",
    explanation: "Clean, dry paper is recyclable in Singapore's blue bins.",
    callouts: ["Shredded paper should be contained in a paper bag", "Avoid recycling tissue paper or paper towels"],
    preparation: [
      "Remove any plastic covers or bindings",
      "Ensure paper is clean and dry",
      "Flatten boxes to save space",
      "Place in blue recycling bin",
    ],
    disposalOptions: [
      {
        type: "Blue Bin",
        description: "Available at all HDB blocks, condominiums, and many public areas",
      },
    ],
  },
  {
    id: "glass-container",
    name: "Glass Container",
    status: "Yes",
    explanation: "Glass bottles and jars are recyclable in Singapore's blue bins.",
    callouts: ["Remove caps and lids", "Broken glass should be wrapped and disposed of as general waste"],
    preparation: [
      "Empty all contents",
      "Rinse with water to remove residue",
      "Remove metal or plastic caps",
      "Place in blue recycling bin",
    ],
    disposalOptions: [
      {
        type: "Blue Bin",
        description: "Available at all HDB blocks, condominiums, and many public areas",
      },
    ],
  },
  {
    id: "metal-can",
    name: "Metal Can",
    status: "Yes",
    explanation: "Aluminum and steel cans are recyclable in Singapore's blue bins.",
    callouts: ["Ensure cans are empty and rinsed", "Crushing cans is optional but saves space"],
    preparation: [
      "Empty all contents",
      "Rinse with water to remove residue",
      "Crush to save space (optional)",
      "Place in blue recycling bin",
    ],
    disposalOptions: [
      {
        type: "Blue Bin",
        description: "Available at all HDB blocks, condominiums, and many public areas",
      },
    ],
  },
  {
    id: "e-waste",
    name: "E-Waste",
    status: "Yes",
    explanation: "Electronic waste should be recycled at designated e-waste collection points.",
    callouts: ["Do not dispose of e-waste in blue bins", "Data should be wiped from devices if possible"],
    preparation: [
      "Remove batteries if applicable",
      "Wipe personal data if possible",
      "Bring to designated e-waste collection point",
    ],
    disposalOptions: [
      {
        type: "E-Waste Bin",
        description: "Located at selected community centers, schools, and retail stores",
      },
      {
        type: "Special Collection",
        description: "E-waste recycling drives or scheduled collection services",
      },
    ],
  },
  {
    id: "battery",
    name: "Battery",
    status: "Yes",
    explanation: "Batteries should be recycled at designated battery recycling points.",
    callouts: [
      "Never dispose of batteries in blue bins or general waste",
      "Leaking batteries should be handled with care",
    ],
    preparation: ["Tape the terminals of lithium batteries for safety", "Bring to designated battery recycling point"],
    disposalOptions: [
      {
        type: "Special Collection",
        description: "Battery recycling boxes at selected retail stores, community centers, and schools",
      },
    ],
  },
  {
    id: "cardboard",
    name: "Cardboard",
    status: "Yes",
    explanation: "Clean cardboard is recyclable in Singapore's blue bins.",
    callouts: [
      "Remove any plastic, styrofoam, or other packaging materials",
      "Wet or soiled cardboard should go in general waste",
    ],
    preparation: ["Remove any non-cardboard materials", "Flatten to save space", "Place in blue recycling bin"],
    disposalOptions: [
      {
        type: "Blue Bin",
        description: "Available at all HDB blocks, condominiums, and many public areas",
      },
    ],
  },
  {
    id: "light-bulb",
    name: "Light Bulb",
    status: "Depends",
    explanation:
      "Incandescent bulbs go in general waste, while fluorescent and LED bulbs should be recycled at special collection points.",
    callouts: [
      "Never dispose of fluorescent bulbs in blue bins or general waste due to mercury content",
      "Handle broken fluorescent bulbs with care",
    ],
    preparation: ["Wrap in newspaper if broken", "Bring fluorescent and LED bulbs to designated recycling points"],
    disposalOptions: [
      {
        type: "Special Collection",
        description: "Light bulb recycling bins at selected retail stores and community centers",
      },
      {
        type: "General Waste",
        description: "For incandescent bulbs only",
      },
    ],
  },
  {
    id: "styrofoam",
    name: "Styrofoam",
    status: "No",
    explanation: "Styrofoam (polystyrene) is not recyclable in Singapore's blue bins.",
    callouts: ["Always dispose of styrofoam in general waste", "Consider using reusable containers instead"],
    preparation: ["Rinse off food residue", "Dispose of in general waste bin"],
    disposalOptions: [
      {
        type: "General Waste",
        description: "Dispose of with regular trash",
      },
    ],
  },
  {
    id: "bubble-tea-cup",
    name: "Bubble Tea Cup",
    status: "Depends",
    explanation: "The plastic cup may be recyclable if clean, but the lid and straw are not recyclable in Singapore.",
    callouts: ["Cups with food residue cannot be recycled", "Different components need to be separated"],
    preparation: [
      "Empty all contents and rinse cup thoroughly",
      "Separate cup from lid and straw",
      "Place clean cup in blue recycling bin",
      "Dispose of lid, straw, and any residue in general waste",
    ],
    disposalOptions: [
      {
        type: "Blue Bin",
        description: "For clean plastic cup only",
      },
      {
        type: "General Waste",
        description: "For lid, straw, and cups with residue",
      },
    ],
  },
  {
    id: "tissue-paper",
    name: "Tissue Paper",
    status: "No",
    explanation: "Used tissue paper is not recyclable and should be disposed of as general waste.",
    callouts: ["Never place used tissue paper in recycling bins", "Tissue paper fibers are too short for recycling"],
    preparation: ["Dispose of in general waste bin"],
    disposalOptions: [
      {
        type: "General Waste",
        description: "Dispose of with regular trash",
      },
    ],
  },
]

// Mock function to search for items
export function searchRecyclableItems(query: string): RecyclableItem[] {
  const normalizedQuery = query.toLowerCase().trim()

  return recyclableItems.filter(
    (item) =>
      item.name.toLowerCase().includes(normalizedQuery) || item.explanation.toLowerCase().includes(normalizedQuery),
  )
}

// Mock function to get item by ID
export function getRecyclableItemById(id: string): RecyclableItem | undefined {
  return recyclableItems.find((item) => item.id === id)
}

// Mock recycling locations
export interface RecyclingLocation {
  id: string
  name: string
  address: string
  postalCode: string
  acceptedItems: string[]
  operatingHours?: string
  coordinates: {
    lat: number
    lng: number
  }
  type: "Blue Bin" | "E-Waste Bin" | "Special Collection"
}

export const recyclingLocations: RecyclingLocation[] = [
  {
    id: "loc-1",
    name: "Tampines Block 123 Recycling Point",
    address: "Block 123, Tampines Street 11",
    postalCode: "520123",
    acceptedItems: ["Plastic Bottle", "Paper", "Glass Container", "Metal Can", "Cardboard"],
    operatingHours: "24 hours",
    coordinates: {
      lat: 1.3521,
      lng: 103.9198,
    },
    type: "Blue Bin",
  },
  {
    id: "loc-2",
    name: "Bedok Mall E-Waste Collection Point",
    address: "311 New Upper Changi Road",
    postalCode: "467360",
    acceptedItems: ["E-Waste", "Battery", "Light Bulb"],
    operatingHours: "10:00 AM - 10:00 PM",
    coordinates: {
      lat: 1.3248,
      lng: 103.93,
    },
    type: "E-Waste Bin",
  },
  {
    id: "loc-3",
    name: "Jurong Point Recycling Corner",
    address: "1 Jurong West Central 2",
    postalCode: "648886",
    acceptedItems: ["Plastic Bottle", "Paper", "Glass Container", "Metal Can", "Cardboard", "E-Waste"],
    operatingHours: "10:00 AM - 10:00 PM",
    coordinates: {
      lat: 1.3397,
      lng: 103.7066,
    },
    type: "Special Collection",
  },
  {
    id: "loc-4",
    name: "Bishan Community Center Recycling Point",
    address: "51 Bishan Street 13",
    postalCode: "579799",
    acceptedItems: ["Plastic Bottle", "Paper", "Glass Container", "Metal Can", "Cardboard"],
    operatingHours: "24 hours",
    coordinates: {
      lat: 1.3526,
      lng: 103.8474,
    },
    type: "Blue Bin",
  },
  {
    id: "loc-5",
    name: "NEX Mall Battery Recycling Point",
    address: "23 Serangoon Central",
    postalCode: "556083",
    acceptedItems: ["Battery"],
    operatingHours: "10:00 AM - 10:00 PM",
    coordinates: {
      lat: 1.3509,
      lng: 103.8726,
    },
    type: "Special Collection",
  },
]

// Mock function to find nearby recycling locations
export function findNearbyRecyclingLocations(
  itemTypes: string[],
  userLocation?: { lat: number; lng: number },
): RecyclingLocation[] {
  // Filter locations that accept at least one of the item types
  const filteredLocations = recyclingLocations.filter((location) =>
    itemTypes.some((itemType) => location.acceptedItems.includes(itemType)),
  )

  // If user location is provided, sort by distance (simplified)
  if (userLocation) {
    return filteredLocations.sort((a, b) => {
      const distA = calculateDistance(userLocation, a.coordinates)
      const distB = calculateDistance(userLocation, b.coordinates)
      return distA - distB
    })
  }

  return filteredLocations
}

// Simple distance calculation (Haversine formula)
function calculateDistance(point1: { lat: number; lng: number }, point2: { lat: number; lng: number }): number {
  const R = 6371 // Earth's radius in km
  const dLat = ((point2.lat - point1.lat) * Math.PI) / 180
  const dLng = ((point2.lng - point1.lng) * Math.PI) / 180
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((point1.lat * Math.PI) / 180) *
      Math.cos((point2.lat * Math.PI) / 180) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return R * c
}

