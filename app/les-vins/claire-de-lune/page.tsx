import { WinePageLuxe } from "@/components/wine-page-luxe"
import { getWineBySlug } from "@/lib/wines-data"
import { notFound } from "next/navigation"

export default function ClaireDeLunePage() {
  const wine = getWineBySlug("claire-de-lune-2022")
  
  if (!wine) {
    notFound()
  }

  return (
    <WinePageLuxe
      wine={wine}
      imagePath="/page/nos-cuvee-ok/gamme-confidentiel/page-cuvee-claire-de-lune/claire-de-lune.jpg"
      pdfPath="/page/nos-cuvee-ok/gamme-confidentiel/page-cuvee-claire-de-lune/FT_blanc_claire_de_lune_2023.pdf"
    />
  )
}

export async function generateMetadata() {
  const wine = getWineBySlug("claire-de-lune-2022")
  
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
      images: ["/page/nos-cuvee-ok/gamme-confidentiel/page-cuvee-claire-de-lune/claire-de-lune.jpg"],
    },
  }
}
