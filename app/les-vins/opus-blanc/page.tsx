import { WinePageLuxe } from "@/components/wine-page-luxe"
import { getWineBySlug } from "@/lib/wines-data"
import { notFound } from "next/navigation"

export default function OpusBlancPage() {
  const wine = getWineBySlug("opus-blanc-2022")
  
  if (!wine) {
    notFound()
  }

  return (
    <WinePageLuxe
      wine={wine}
      imagePath="/page/nos-cuvee-ok/gamme-opus/page-cuvee-opus-blanc/blanc-opus.jpg"
      pdfPath="/page/nos-cuvee-ok/gamme-opus/page-cuvee-opus-blanc/ft-blanc-opus-2023.pdf"
    />
  )
}

export async function generateMetadata() {
  const wine = getWineBySlug("opus-blanc-2022")
  
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
      images: ["/page/nos-cuvee-ok/gamme-opus/page-cuvee-opus-blanc/blanc-opus.jpg"],
    },
  }
}
