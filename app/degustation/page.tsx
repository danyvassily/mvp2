import { SectionHero } from "@/components/common/SectionHero"
import { CalloutCard } from "@/components/common/CalloutCard"
import { DegustationQuiz } from "@/components/degustation/DegustationQuiz"
import { getPageAssets, getPageFallbacks } from "@/lib/asset-mapping"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Dégustation | Château Lastours",
  description: "Découvrez l'art de la dégustation au Château Lastours. Une expérience sensorielle unique au cœur du vignoble de Gaillac, entre tradition et innovation.",
  keywords: ["dégustation", "château lastours", "vin gaillac", "visite vignoble", "expérience œnologique"],
  openGraph: {
    title: "Dégustation | Château Lastours",
    description: "Une expérience sensorielle unique au cœur du vignoble de Gaillac",
    images: [
      {
        url: "/photos-web-lastours/vinification/capture-ameyric-prod.jpg",
        width: 1200,
        height: 630,
        alt: "Dégustation au Château Lastours"
      }
    ]
  }
}

export default function DegustationPage() {
  const assets = getPageAssets('degustation')
  const fallbacks = getPageFallbacks('degustation')

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <SectionHero
        title="Dégustation"
        subtitle="Une expérience sensorielle entre élégance et authenticité, dans les terres de Lastours."
        imageSrc={assets.hero}
        height="xl"
      />

      {/* Section 1 : Philosophie - Pattern paragraphe + encadré */}
      <section className="py-[calc(var(--rhythm)*2)] lg:py-[calc(var(--rhythm)*3)] bg-white relative scroll-mt-[var(--header-height)]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Paragraphe */}
            <div className="mb-[calc(var(--rhythm)*2)]">
              <p className="text-lg leading-relaxed text-gray-700 overflow-wrap-anywhere">
                Ici, au Château Lastours, la dégustation est avant tout une célébration. Libérée des codes rigides, elle s'inspire d'un principe simple : <strong>le bon vin, c'est celui que vous aimez</strong>. Nul besoin d'être un initié averti pour apprécier pleinement un vin. Il suffit de se laisser guider par ses sens et de savourer l'instant.
              </p>
            </div>
            
            {/* Encadré */}
            <div className="bg-[#F3EEE8] border border-black/5 rounded-2xl p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-gray-900 mb-4 text-balance">
                Le berceau d'une mosaïque de saveurs
              </h2>
              <p className="text-lg leading-relaxed text-gray-700 overflow-wrap-anywhere">
                Implanté au cœur de l'appellation Gaillac, notre domaine s'inscrit dans plus de 2000 ans d'histoire viticole. Grâce à une diversité de cépages autochtones et de savoir-faire transmis, nos cuvées révèlent des profils variés, toujours complémentaires : des <strong>vins blancs frais et fruités</strong>, des <strong>rouges expressifs</strong>, des <strong>rosés délicats</strong>, et des <strong>effervescents ancestraux</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 : Innovation - Pattern paragraphe + encadré */}
      <section className="py-[calc(var(--rhythm)*2)] lg:py-[calc(var(--rhythm)*3)] bg-gray-50 relative scroll-mt-[var(--header-height)]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Paragraphe */}
            <div className="mb-[calc(var(--rhythm)*2)]">
              <p className="text-lg leading-relaxed text-gray-700 overflow-wrap-anywhere">
                La fermentation alcoolique, point de départ de toute vinification, est un processus vivant où le sucre se transforme en alcool, libérant au passage de la chaleur et du gaz.
              </p>
            </div>
            
            {/* Encadré avec image */}
            <div className="bg-white border border-black/5 rounded-2xl p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-gray-900 mb-4 text-balance">
                Le secret de nos vins : la fraîcheur maîtrisée
              </h2>
              <p className="text-lg leading-relaxed text-gray-700 mb-4 overflow-wrap-anywhere">
                <strong>L'innovation majeure ? La maîtrise du froid à deux étapes clés :</strong>
              </p>
              <ul className="space-y-2 text-lg leading-relaxed text-gray-700 list-disc list-inside">
                <li><strong>Pendant les vendanges</strong> – effectuées de nuit, lorsque les températures chutent de plus de 20°C entre le jour et la nuit.</li>
                <li><strong>Pendant la fermentation</strong> – un réseau d'eau froide régule précisément la température, pour préserver fraîcheur et finesse.</li>
              </ul>
              {assets.gallery && assets.gallery.length > 0 && (
                <div className="mt-6 relative h-64 md:h-80 rounded-xl overflow-hidden">
                  <Image
                    src={assets.gallery[0]}
                    alt="Vendanges de nuit et fermentation contrôlée au Château Lastours"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 800px"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 : Cuves - Pattern paragraphe + encadré */}
      <section className="py-[calc(var(--rhythm)*2)] lg:py-[calc(var(--rhythm)*3)] bg-white relative scroll-mt-[var(--header-height)]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Paragraphe */}
            <div className="mb-[calc(var(--rhythm)*2)]">
              <p className="text-lg leading-relaxed text-gray-700 overflow-wrap-anywhere">
                Chaque type de vin trouve sa cuve idéale : <strong>Blancs & rosés</strong> en cuves béton, naturellement isolantes, pour conserver la fraîcheur. <strong>Rouges</strong> en cuves inox, idéales pour maîtriser la chaleur générée par la fermentation.
              </p>
            </div>
            
            {/* Encadré */}
            <div className="bg-[#F3EEE8] border border-black/5 rounded-2xl p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-gray-900 mb-4 text-balance">
                Cuves béton ou inox : la juste alliance de tradition et de technique
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Les trois dimensions du goût</h3>
                  <ul className="space-y-2 text-lg leading-relaxed text-gray-700 list-disc list-inside">
                    <li><strong>Primaire</strong> – arômes floraux et fruités, typiques de chaque cépage</li>
                    <li><strong>Secondaire</strong> – issus des fermentations</li>
                    <li><strong>Tertiaire</strong> – développés lors de l'élevage et du temps passé en bouteille</li>
                  </ul>
                </div>
                {assets.gallery && assets.gallery.length > 1 && (
                  <div className="mt-6 relative h-64 md:h-80 rounded-xl overflow-hidden">
                    <Image
                      src={assets.gallery[1] || "/Page/Degustation - ok/barrique-bois-cuve-beton-chateau-lastours-gaillac-sud-ouest-france.jpg"}
                      alt="Cuves béton et barriques en bois au Château Lastours"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 800px"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quiz intégré */}
      <DegustationQuiz />

      {/* CTA Final */}
      <section className="py-[calc(var(--rhythm)*3)] lg:py-[calc(var(--rhythm)*4)] bg-[#F3EEE8] relative scroll-mt-[var(--header-height)]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-[calc(var(--rhythm)*1.5)]">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-[#221] tracking-wide leading-tight text-balance">
              Réserver votre visite et dégustation
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 text-[#221]">
              <div className="space-y-2">
                <p className="text-lg leading-relaxed">Découvrez nos secrets de vinification</p>
              </div>
              <div className="space-y-2">
                <p className="text-lg leading-relaxed">Dégustez nos cuvées d'exception</p>
              </div>
              <div className="space-y-2">
                <p className="text-lg leading-relaxed">Repartez avec vos coups de cœur</p>
              </div>
            </div>

            <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-accent-600 hover:bg-accent-700 text-white min-h-[44px] px-8 py-4 text-lg font-semibold focus-visible:ring-2 focus-visible:ring-accent-600 focus-visible:outline-none"
              >
                <Link href="/reservation">Réserver votre visite</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-[#221] text-[#221] hover:bg-[#221] hover:text-[#F3EEE8] min-h-[44px] px-8 py-4 text-lg font-semibold focus-visible:ring-2 focus-visible:ring-[#221] focus-visible:outline-none"
              >
                <Link href="/reservation">Réserver votre dégustation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Fallbacks si nécessaire */}
      {fallbacks.missingAssets.length > 0 && (
        <section className="py-8">
          <div className="container mx-auto px-4">
            {fallbacks.missingAssets.map((asset, index) => (
              <CalloutCard
                key={index}
                type="coming-soon"
                title="Contenu à venir"
                message={asset}
                className="mb-4"
              />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
