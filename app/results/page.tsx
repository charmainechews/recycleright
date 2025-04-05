import { searchRecyclableItems } from "@/lib/recycling-data"
import ResultsDisplay from "@/components/results-display"
import SearchForm from "@/components/search-form"
import type { Metadata } from "next"

interface ResultsPageProps {
  searchParams: { q?: string }
}

export async function generateMetadata({ searchParams }: ResultsPageProps): Promise<Metadata> {
  const query = searchParams?.q || ""
  return {
    title: query ? `Results for "${query}" | RecycleRight SG` : "Search Results | RecycleRight SG",
  }
}

export default async function ResultsPage({ searchParams }: ResultsPageProps) {
  const query = searchParams?.q || ""
  const results = query ? searchRecyclableItems(query) : []

  return (
    <div className="container px-4 py-8 md:py-12">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-4">Search Results</h1>
        <SearchForm />
      </div>

      {query ? (
        <>
          {results.length > 0 ? (
            <div className="space-y-8">
              <div className="flex justify-center w-full">
                <div className="w-full max-w-3xl">
                  <p className="text-muted-foreground mb-2">
                    Showing results for <span className="font-medium text-foreground">"{query}"</span>
                  </p>
                </div>
              </div>
              
              {results.map((item) => (
                <div key={item.id} className="flex flex-col">
                  <div className="flex justify-center w-full">
                    <div className="w-full max-w-3xl">
                      <ResultsDisplay item={item} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center border rounded-lg bg-muted/30">
              <h2 className="text-xl font-semibold mb-2">No exact matches found</h2>
              <p className="text-muted-foreground mb-4">
                We couldn't find an exact match for "{query}". Try a different search term or check our recycling guide.
              </p>
              <p className="text-sm text-muted-foreground">
                If you're unsure, it's better to dispose of the item as general waste to avoid contaminating
                recyclables.
              </p>
            </div>
          )}
        </>
      ) : (
        <div className="p-8 text-center border rounded-lg bg-muted/30">
          <h2 className="text-xl font-semibold mb-2">Enter a search term</h2>
          <p className="text-muted-foreground">Search for an item to check if it's recyclable in Singapore.</p>
        </div>
      )}
    </div>
  )
}

