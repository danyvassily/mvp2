import { WinePageLuxe } from "@/components/wine-page-luxe"
import { getWineBySlug } from "@/lib/wines-data"
import { notFound } from "next/navigation"

export default function PetrichorRosePage() {
  const wine = getWineBySlug("petrichor-rose-2023")
  
  if (!wine) {
    notFound()
  }

  return (
    <WinePageLuxe
      wine={wine}
      imagePath="/page/nos-cuvee-ok/gamme-petrichor/page-cuvee-petrichor-rose/petrichor-rose.jpg"
      pdfPath="/page/nos-cuvee-ok/gamme-petrichor/page-cuvee-petrichor-rose/FT_Rosé_Petrichor_2024.pdf"
    />
  )
}

export async function generateMetadata() {
  const wine = getWineBySlug("petrichor-rose-2023")
  
  if (!wine) {
    return {
      title: "Vin non trouvé",
    }
  }

  return {
    title: `${wine.name} ${wine.vintage} - Château Lastours`,
    description: wine.longDescription,
    openGraph: {
      title: `${wine.name} ${wine.vintage} - Château Lastours`,
      description: wine.longDescription,
      images: ["/page/nos-cuvee-ok/gamme-petrichor/page-cuvee-petrichor-rose/petrichor-rose.jpg"],
    },
  }
}

