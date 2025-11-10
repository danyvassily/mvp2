import { WinePageLuxe } from "@/components/wine-page-luxe"
import { getWineBySlug } from "@/lib/wines-data"
import { notFound } from "next/navigation"

export default function DomeniRosePage() {
  const wine = getWineBySlug("domeni-rose-2023")
  
  if (!wine) {
    notFound()
  }

  return (
    <WinePageLuxe
      wine={wine}
      imagePath="/page/nos-cuvee-ok/gamme-domeni/page-cuvee-domeni-rose/rose-domeni.jpg"
      pdfPath="/page/nos-cuvee-ok/gamme-domeni/page-cuvee-domeni-rose/FT_rosé_Domeni_2024 (1).pdf"
    />
  )
}

export async function generateMetadata() {
  const wine = getWineBySlug("domeni-rose-2023")
  
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
      images: ["/page/nos-cuvee-ok/gamme-domeni/page-cuvee-domeni-rose/rose-domeni.jpg"],
    },
  }
}
