import { WinePageLuxe } from "@/components/wine-page-luxe"
import { getWineBySlug } from "@/lib/wines-data"
import { notFound } from "next/navigation"

export default function PigeonnierPage() {
  const wine = getWineBySlug("pigeonnier-rouge-2021")
  
  if (!wine) {
    notFound()
  }

  return (
    <WinePageLuxe
      wine={wine}
      imagePath="/page/nos-cuvee-ok/gamme-confidentiel/page-cuvee-pigeonnier/pigeonnier.jpg"
      pdfPath="/page/nos-cuvee-ok/gamme-confidentiel/page-cuvee-pigeonnier/ft-rouge-cuvee-du-pigeonnier-2022.pdf"
    />
  )
}

export async function generateMetadata() {
  const wine = getWineBySlug("pigeonnier-rouge-2021")
  
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
      images: ["/page/nos-cuvee-ok/gamme-confidentiel/page-cuvee-pigeonnier/pigeonnier.jpg"],
    },
  }
}
