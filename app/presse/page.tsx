import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { PressKitPlaceholder } from "@/components/common/PressKitPlaceholder"
import { LogoGallery } from "@/components/common/LogoGallery"

export default function PressePage() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        {/* Hero pleine hauteur - entre menu sticky et premier encadré */}
        <section 
          className="relative flex items-center justify-center overflow-hidden"
          style={{ minHeight: "calc(100vh - 80px)" }}
        >
          <div className="absolute inset-0">
            <Image
              src="/page/espace-presse/presse-vignoble-gaillac-chateau-lastours-france.jpg"
              alt="Vignoble du Château Lastours - Espace Presse"
              fill
              className="object-cover"
              priority
              quality={90}
            />
          </div>
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-serif font-light mb-4 tracking-[0.02em]">
              Espace Presse
            </h1>
            <p className="text-xl md:text-2xl opacity-90 font-light">
              Logos, kit média et ressources officielles
            </p>
          </div>
        </section>

        {/* Contenu */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Logos officiels */}
              <LogoGallery />

              {/* Kit média */}
              <PressKitPlaceholder />

              {/* Visuels libres de droit */}
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h2 className="text-2xl font-serif font-light">Visuels libres de droit (presse)</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      "/french-wine-chateau-evening-event.png",
                      "/gamme-confidentielle.jpg",
                      "/gamme-domeni.jpg",
                    ].map((src) => (
                      <div key={src} className="relative aspect-[4/3] bg-slate-100 rounded-lg overflow-hidden">
                        <Image 
                          src={src} 
                          alt="Visuel presse Château Lastours" 
                          fill 
                          className="object-cover" 
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Presse */}
            <aside className="space-y-4">
              <Card>
                <CardContent className="p-6 space-y-2">
                  <h3 className="text-xl font-serif font-light">Contact Presse</h3>
                  <p className="text-slate-600 font-light leading-relaxed">
                    Email: presse@chateaux-lastours.fr
                    <br />
                    Téléphone: +33 5 63 56 32 75
                  </p>
                </CardContent>
              </Card>
            </aside>
          </div>
        </section>
      </main>
    </div>
  )
}

