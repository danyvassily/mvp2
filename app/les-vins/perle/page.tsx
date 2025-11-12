import { WinePageLuxe } from "@/components/wine-page-luxe"
import { getWineBySlug } from "@/lib/wines-data"
import { notFound } from "next/navigation"

export default function PerlePage() {
  const wine = getWineBySlug("perle-blanc-2023")
  
  if (!wine) {
    notFound()
  }

  return (
    <WinePageLuxe
      wine={wine}
      imagePath="/page/nos-cuvee-ok/gamme-perle/page-cuvee-perle/blanc-perle.jpg"
      pdfPath="/page/nos-cuvee-ok/gamme-perle/page-cuvee-perle/ft-perle-2023.pdf"
    />
  )
}

export async function generateMetadata() {
  const wine = getWineBySlug("perle-blanc-2023")
  
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
      images: ["/page/nos-cuvee-ok/gamme-perle/page-cuvee-perle/blanc-perle.jpg"],
    },
  }
}
