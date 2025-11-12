import { WinePageLuxe } from "@/components/wine-page-luxe"
import { getWineBySlug } from "@/lib/wines-data"
import { notFound } from "next/navigation"

export default function MethodeBlancPage() {
  const wine = getWineBySlug("methode-blanc-2020")
  
  if (!wine) {
    notFound()
  }

  return (
    <WinePageLuxe
      wine={wine}
      imagePath="/page/nos-cuvee-ok/gamme-methode-ancestral/page-methode-blanche/la-methode-blanc.jpg"
      pdfPath="/page/nos-cuvee-ok/gamme-methode-ancestral/page-methode-blanche/ft-la-methode-blanc.pdf"
    />
  )
}

export async function generateMetadata() {
  const wine = getWineBySlug("methode-blanc-2020")
  
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
      images: ["/page/nos-cuvee-ok/gamme-methode-ancestral/page-methode-blanche/la-methode-blanc.jpg"],
    },
  }
}
