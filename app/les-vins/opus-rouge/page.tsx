import { WinePageLuxe } from "@/components/wine-page-luxe"
import { getWineBySlug } from "@/lib/wines-data"
import { notFound } from "next/navigation"

export default function OpusRougePage() {
  const wine = getWineBySlug("opus-rouge-2020")
  
  if (!wine) {
    notFound()
  }

  return (
    <WinePageLuxe
      wine={wine}
      imagePath="/page/nos-cuvee-ok/gamme-opus/page-cuvee-opus-rouge/rouge-opus.jpg"
      pdfPath="/Page/Nos Cuvée-ok/Gamme Opus/Page Cuvée Opus Rouge/FT_rouge_opus_2021.pdf"
    />
  )
}

export async function generateMetadata() {
  const wine = getWineBySlug("opus-rouge-2020")
  
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
      images: ["/page/nos-cuvee-ok/gamme-opus/page-cuvee-opus-rouge/rouge-opus.jpg"],
    },
  }
}
