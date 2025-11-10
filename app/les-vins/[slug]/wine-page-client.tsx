"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { wines, type Wine } from "@/lib/wines-data"
import { getWineColorTheme } from "@/lib/wine-colors"
import { ArrowLeft, Award, Grape, BarChart3 } from "lucide-react"
import Link from "next/link"
import { useWineModal } from "@/hooks/use-wine-modal"

interface WinePageClientProps {
  wine: Wine
}

export function WinePageClient({ wine }: WinePageClientProps) {
  const { openModal } = useWineModal()
  const colorTheme = getWineColorTheme(wine)

  const collectionLabels = {
    classique: "Collection Classique",
    methode: "Collection Méthode",
    fruitees: "Collection Fruitées",
    poussin: "Poussin",
    domeni: "Doméni",
    confidentielle: "Confidentielle",
    opus: "Opus",
  }

  const typeLabels = {
    rouge: "Vin Rouge",
    blanc: "Vin Blanc",
    rose: "Vin Rosé",
    effervescent: "Vin Effervescent",
  }

  return (
    <div className={`pt-20 min-h-screen bg-gradient-to-b ${colorTheme.gradient} relative`}>
      {/* Grain overlay unique pour cette cuvée */}
      <div 
        className="fixed inset-0 pointer-events-none z-10 mix-blend-soft-light" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px',
          opacity: 0.2,
          backgroundColor: colorTheme.primary + '20'
        }}>
      </div>
      {/* Breadcrumb */}
      <div className="relative z-20 container mx-auto px-4 lg:px-8 py-8">
        <Button variant="ghost" asChild className={`mb-6 text-white hover:bg-white/10 border ${colorTheme.border}`}>
          <Link href="/les-vins">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux vins
          </Link>
        </Button>
      </div>

      {/* Wine Details */}
      <section className="relative z-20 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            {/* Wine Image avec hover et modal */}
            <div className="bg-muted rounded-lg overflow-hidden flex items-center justify-center p-4 sm:p-6 min-h-[300px] sm:min-h-[400px] md:min-h-[500px]">
              <div 
                className="relative overflow-hidden cursor-pointer group wine-bottle-container w-full h-full flex items-center justify-center"
                onClick={() => openModal(wine.image || "/placeholder.svg", wine.name)}
              >
                <img
                  src={wine.image || "/placeholder.svg"}
                  alt={wine.name}
                  className="max-h-[280px] sm:max-h-[380px] md:max-h-[480px] lg:max-h-[600px] xl:max-h-[720px] h-auto w-auto object-contain mx-auto transition-transform duration-300 ease-out hover:scale-105"
                  style={{
                    transformOrigin: 'center center',
                    maxWidth: '100%'
                  }}
                />
                
                {/* Indicateur de clic */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 sm:p-3 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Wine Information */}
            <div className="space-y-6 md:space-y-8 flex flex-col justify-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="secondary">{collectionLabels[wine.collection]}</Badge>
                  <Badge variant="outline">{typeLabels[wine.type]}</Badge>
                  {wine.featured && (
                    <Badge className="bg-accent text-accent-foreground">
                      <Award className="w-3 h-3 mr-1" />
                      Sélection
                    </Badge>
                  )}
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-display mb-4">{wine.name}</h1>
                <p className="text-lg sm:text-xl text-muted-foreground mb-4 sm:mb-6">Millésime {wine.vintage}</p>

                {/* Prix supprimé selon spécifications */}
                {/* Sélecteur de millésime - structure prête pour données ASSET */}
                <div className="mb-6 sm:mb-8">
                  <label className="text-sm font-medium text-muted-foreground mb-2 block">Millésime</label>
                  <select 
                    className="w-full sm:w-auto bg-background border border-input rounded-lg px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-ring"
                    value={wine.vintage}
                    onChange={(e) => {
                      // TODO: Implémenter le changement de millésime avec données depuis ASSET
                      // Pour l'instant, juste un placeholder
                    }}
                  >
                    <option value={wine.vintage}>{wine.vintage}</option>
                    {/* Ajouter d'autres millésimes disponibles ici depuis ASSET */}
                  </select>
                </div>

                <p className="text-base sm:text-lg leading-relaxed text-muted-foreground mb-6 sm:mb-8">{wine.longDescription}</p>

                <div className="flex justify-center">
                  <Button size="lg" variant="outline">
                    Réserver une dégustation
                  </Button>
                </div>
              </div>

              {/* Awards */}
              {wine.awards.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-accent" />
                      Récompenses
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {wine.awards.map((award, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-accent rounded-full" />
                          {award}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Information */}
      <section className="py-12 sm:py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Tasting Notes */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Grape className="w-5 h-5 text-accent" />
                  Notes de Dégustation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-heading mb-2">Apparence</h4>
                  <p className="text-muted-foreground">{wine.tastingNotes.appearance}</p>
                </div>
                <Separator />
                <div>
                  <h4 className="font-heading mb-2">Nez</h4>
                  <p className="text-muted-foreground">{wine.tastingNotes.nose}</p>
                </div>
                <Separator />
                <div>
                  <h4 className="font-heading mb-2">Bouche</h4>
                  <p className="text-muted-foreground">{wine.tastingNotes.palate}</p>
                </div>
                <Separator />
                <div>
                  <h4 className="font-heading mb-2">Finale</h4>
                  <p className="text-muted-foreground">{wine.tastingNotes.finish}</p>
                </div>
              </CardContent>
            </Card>

            {/* Technical Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-accent" />
                  Informations Techniques
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-heading mb-2">Degré d'alcool</h4>
                  <p className="text-muted-foreground">{wine.technicalInfo.alcohol}</p>
                </div>
                <Separator />
                <div>
                  <h4 className="font-heading mb-2">Cépages</h4>
                  <div className="flex flex-wrap gap-2">
                    {wine.technicalInfo.grapes.map((grape, index) => (
                      <Badge key={index} variant="outline">
                        {grape}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Separator />
                <div>
                  <h4 className="font-heading mb-2">Élevage</h4>
                  <p className="text-muted-foreground">{wine.technicalInfo.aging}</p>
                </div>
                <Separator />
                <div>
                  <h4 className="font-heading mb-2">Production</h4>
                  <p className="text-muted-foreground">{wine.technicalInfo.production}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Wines */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-display mb-6 sm:mb-8 text-center">Vins de la même collection</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {wines
              .filter((w) => w.collection === wine.collection && w.id !== wine.id)
              .slice(0, 3)
              .map((relatedWine) => (
                <Card key={relatedWine.id} className="group hover:shadow-xl transition-all duration-300">
                  <div className="bg-muted overflow-hidden flex items-center justify-center p-4 min-h-[200px] sm:min-h-[250px] md:h-80">
                    <img
                      src={relatedWine.image || "/placeholder.svg"}
                      alt={relatedWine.name}
                      className="max-h-[180px] sm:max-h-[230px] md:max-h-[280px] h-auto w-auto object-contain mx-auto group-hover:scale-105 transition-transform duration-300"
                      style={{ maxWidth: '100%' }}
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-heading mb-2">{relatedWine.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">Millésime {relatedWine.vintage}</p>
                    {/* Prix supprimé selon spécifications */}
                    <div className="flex items-center justify-end">
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/les-vins/${relatedWine.id}`}>Découvrir</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}
