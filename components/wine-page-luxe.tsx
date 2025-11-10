"use client"

import { useState } from "react"
import { ArrowLeft, Award, Wine as WineIcon, Grape, UtensilsCrossed, Thermometer } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { getWineColorTheme, createWineStyles } from "@/lib/wine-colors"
import type { Wine } from "@/lib/wines-data"
import Link from "next/link"
import { ScrollAnimation, PremiumCardAnimation } from "@/components/gsap/ScrollAnimations"
import { SectionReveal, ZoomReveal } from "@/components/gsap/CinematicEffects"
import { useWineModal } from "@/hooks/use-wine-modal"

interface WinePageLuxeProps {
  wine: Wine
  imagePath: string
  pdfPath?: string
}

export function WinePageLuxe({ wine, imagePath, pdfPath }: WinePageLuxeProps) {
  const colorTheme = getWineColorTheme(wine)
  const wineStyles = createWineStyles(colorTheme)
  const { openModal } = useWineModal()
  
  const [activeTab, setActiveTab] = useState<"tasting" | "technical" | "pairing" | "composition">("tasting")

  // Créer un grain unique basé sur l'ID du vin
  const wineIdNum = parseInt(wine.id) || 1 // Fallback sur 1 si parseInt échoue
  const grainIntensity = 0.85 + (wineIdNum % 5) * 0.03 // 0.85 à 0.97
  const grainScale = 80 + (wineIdNum % 8) * 10 // 80px à 150px
  const grainOpacity = 0.15 + (wineIdNum % 3) * 0.05 // 0.15 à 0.25

  const uniqueGrain = `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='${grainIntensity}' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`


  const collectionLabels = {
    classique: "Classique",
    methode: "Méthode",
    fruitees: "Fruitées", 
    poussin: "Poussin",
    domeni: "Doméni",
    confidentielle: "Confidentielle",
    opus: "Opus",
  }

  const typeLabels = {
    rouge: "Rouge",
    blanc: "Blanc", 
    rose: "Rosé",
    effervescent: "Effervescent",
  }

  return (
    <div className={`min-h-screen bg-gradient-to-b ${colorTheme.gradient} relative`}>
      {/* Grain overlay unique pour cette cuvée avec couleur */}
      <div 
        className="fixed inset-0 pointer-events-none z-10 mix-blend-soft-light" 
        style={{
          backgroundImage: uniqueGrain,
          backgroundSize: `${grainScale}px ${grainScale}px`,
          opacity: grainOpacity,
          backgroundColor: colorTheme.primary + '20' // Ajoute 20% d'opacité
        }}>
      </div>

      {/* Hero Section avec image et informations principales */}
      <section className={`relative overflow-hidden ${wineStyles.heroBackground} backdrop-blur-md border-b ${colorTheme.border}`}>
        <div className={`absolute inset-0 ${colorTheme.overlay}`}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent"></div>
        
        {/* Navigation */}
        <div className="relative z-20 container mx-auto px-4 py-6">
          <Button 
            variant="ghost" 
            size="sm" 
            asChild
            className={`mb-6 text-white hover:bg-white/10 border ${colorTheme.border}`}
          >
            <Link href="/les-vins">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour aux vins
            </Link>
          </Button>
        </div>

        {/* Contenu Hero */}
        <div className="relative z-20 container mx-auto px-4 py-8 sm:py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            
            {/* Image de la bouteille avec hover et modal */}
            <div className="flex justify-center order-2 lg:order-1">
              <ZoomReveal scale={1.05} duration={2.0}>
                <div className="relative p-4 sm:p-6 md:p-8 rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden w-full max-w-full">
                  <div 
                    className="relative overflow-hidden cursor-pointer group wine-bottle-container flex items-center justify-center min-h-[250px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[450px]"
                    onClick={() => openModal(imagePath, wine.name)}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={imagePath}
                      alt={wine.name}
                      className="max-h-[240px] sm:max-h-[340px] md:max-h-[400px] lg:max-h-[450px] xl:max-h-[500px] h-auto w-auto object-contain drop-shadow-2xl filter brightness-110 transition-transform duration-300 ease-out hover:scale-105"
                      style={{
                        transformOrigin: 'center center',
                        maxWidth: '100%'
                      }}
                    />
                    
                    {/* Indicateur de clic */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 sm:p-3 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </ZoomReveal>
            </div>

            {/* Informations principales */}
            <div className="text-center lg:text-left space-y-4 sm:space-y-6 order-1 lg:order-2">
              <div className="space-y-4">
                <ScrollAnimation animation="fadeIn" delay={0.3}>
                  <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                    <Badge 
                      variant="secondary"
                      className="bg-white/10 text-gray-300 border border-white/20"
                    >
                      {collectionLabels[wine.collection]}
                    </Badge>
                    <Badge 
                      variant="outline"
                      className="border-white/30 text-gray-400 hover:text-white transition-colors"
                    >
                      {typeLabels[wine.type]}
                    </Badge>
                    {wine.featured && (
                      <Badge className={colorTheme.badge}>
                        <Award className="w-3 h-3 mr-1" />
                        Sélection
                      </Badge>
                    )}
                  </div>
                </ScrollAnimation>

                <ScrollAnimation animation="slideUp" delay={0.5}>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight text-white tracking-wider">
                    {wine.name}
                  </h1>
                </ScrollAnimation>
                
                <ScrollAnimation animation="fadeIn" delay={0.7}>
                  <p className="text-base sm:text-lg lg:text-xl text-gray-400">
                    Millésime {wine.vintage}
                  </p>
                </ScrollAnimation>

                <ScrollAnimation animation="fadeIn" delay={0.9}>
                  <p className="text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0 text-gray-300">
                    {wine.longDescription}
                  </p>
                </ScrollAnimation>
              </div>

              {/* Prix et actions */}
              <div className="space-y-4 sm:space-y-6">
                {/* Sélecteur de millésime */}
                <div className="flex flex-col gap-3 sm:gap-4">
                  <label className="text-sm font-medium text-gray-300">Millésime</label>
                  <select 
                    className="w-full sm:w-auto bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/30"
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section détaillée avec onglets */}
      <section className="py-12 sm:py-16 relative z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Navigation des onglets */}
          <div className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-12">
            {[
              { key: "tasting", label: "Dégustation", icon: WineIcon },
              { key: "technical", label: "Informations techniques", icon: Grape },
              { key: "pairing", label: "Accords mets-vins", icon: UtensilsCrossed },
              { key: "composition", label: "Composition", icon: Thermometer },
            ].map(({ key, label, icon: Icon }) => (
              <Button
                key={key}
                variant={activeTab === key ? "default" : "outline"}
                onClick={() => setActiveTab(key as typeof activeTab)}
                className={`px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base transition-all duration-300`}
                style={activeTab === key 
                  ? { backgroundColor: colorTheme.primary, borderColor: colorTheme.primary, color: 'white' }
                  : { borderColor: colorTheme.secondary + '60', color: colorTheme.text.replace('text-', '').replace('-200', '') }
                }
              >
                <Icon className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                {label}
              </Button>
            ))}
          </div>

          {/* Contenu des onglets */}
          <div className="max-w-6xl mx-auto">
            {activeTab === "tasting" && (
              <Card className={`p-4 sm:p-6 md:p-8 bg-gray-900/90 backdrop-blur-md border ${colorTheme.border} shadow-2xl`}>
                <CardContent className="space-y-6 sm:space-y-8">
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-center mb-6 sm:mb-8 text-white tracking-wide">
                    Notes de Dégustation
                  </h2>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    {[
                      { label: "Apparence", content: wine.tastingNotes.appearance },
                      { label: "Nez", content: wine.tastingNotes.nose },
                      { label: "Bouche", content: wine.tastingNotes.palate },
                      { label: "Finale", content: wine.tastingNotes.finish },
                    ].map((note, index) => (
                      <div key={index} className={`text-center space-y-3 p-4 rounded-xl bg-white/5 border ${colorTheme.border} hover:bg-white/10 transition-all duration-300`}>
                        <h3 className="text-xl font-semibold text-white">
                          {note.label}
                        </h3>
                        <p className="leading-relaxed text-gray-300">
                          {note.content}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {activeTab === "technical" && (
              <Card className={`p-4 sm:p-6 md:p-8 bg-gray-900/90 backdrop-blur-md border ${colorTheme.border} shadow-2xl`}>
                <CardContent className="space-y-6 sm:space-y-8">
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-center mb-6 sm:mb-8 text-white tracking-wide">
                    Informations Techniques
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    <div className="space-y-4 p-6 rounded-xl bg-white/5 border border-white/10">
                      <h3 className="text-xl font-semibold mb-4 text-white">Caractéristiques</h3>
                      {[
                        { label: "Degré d'alcool", value: wine.technicalInfo.alcohol },
                        { label: "Cépages", value: wine.technicalInfo.grapes.join(", ") },
                        { label: "Élevage", value: wine.technicalInfo.aging },
                        { label: "Production", value: wine.technicalInfo.production },
                      ].map((info, index) => (
                        <div key={index} className="flex justify-between items-center py-3 border-b border-white/10 last:border-b-0">
                          <span className="font-semibold text-gray-300">
                            {info.label}
                          </span>
                          <span className="text-white font-medium">
                            {info.value}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="space-y-4 p-6 rounded-xl bg-white/5 border border-white/10">
                      <h3 className="text-xl font-semibold mb-4 text-white">Conservation</h3>
                      {[
                        { label: "Température", value: wine.conservation.temperature },
                        { label: "Durée de garde", value: wine.conservation.duration },
                        { label: "Conditions", value: wine.conservation.conditions },
                      ].map((info, index) => (
                        <div key={index} className="flex justify-between items-start py-3 border-b border-white/10 last:border-b-0">
                          <span className="font-semibold text-gray-300">
                            {info.label}
                          </span>
                          <span className="text-right max-w-xs text-white font-medium">
                            {info.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {activeTab === "pairing" && (
              <Card className={`p-4 sm:p-6 md:p-8 bg-gray-900/90 backdrop-blur-md border ${colorTheme.border} shadow-2xl`}>
                <CardContent className="space-y-6 sm:space-y-8">
                  <div className="text-center space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white tracking-wide">
                      Accords Mets & Vins
                    </h2>
                    <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
                      Découvrez les meilleures associations pour sublimer cette cuvée d'exception
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {[
                      { label: "Apéritifs", items: wine.foodPairing.appetizers, icon: "🍾" },
                      { label: "Plats principaux", items: wine.foodPairing.mainCourses, icon: "🍽️" },
                      { label: "Fromages", items: wine.foodPairing.cheeses, icon: "🧀" },
                      ...(wine.foodPairing.desserts ? [{ label: "Desserts", items: wine.foodPairing.desserts, icon: "🍰" }] : [])
                    ].map((category, index) => (
                      <div 
                        key={index} 
                        className={`space-y-4 p-6 rounded-xl bg-white/5 border ${colorTheme.border} hover:bg-white/10 transition-all duration-300`}
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-2xl">{category.icon}</span>
                          <h3 className="text-xl font-semibold text-white">
                            {category.label}
                          </h3>
                        </div>
                        <ul className="space-y-3">
                          {category.items.map((item, itemIndex) => (
                            <li 
                              key={itemIndex}
                              className="flex items-start text-gray-300 group"
                            >
                              <span className={`w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 ${colorTheme.bullet || 'bg-white/60'} group-hover:scale-125 transition-transform duration-200`}></span>
                              <span className="group-hover:text-white transition-colors">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <Separator className={`bg-white/20`} />

                  <div className="text-center space-y-6">
                    <h3 className="text-2xl lg:text-3xl font-serif font-bold text-white">
                      Conseils de Service
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      {[
                        { label: "Température", value: wine.servingAdvice.temperature, icon: "🌡️" },
                        { label: "Verrerie", value: wine.servingAdvice.glassware, icon: "🍷" },
                        { label: "Moment idéal", value: wine.servingAdvice.timing, icon: "⏰" },
                      ].map((advice, index) => (
                        <div 
                          key={index} 
                          className={`space-y-2 p-6 rounded-xl bg-white/5 border ${colorTheme.border} hover:bg-white/10 transition-all duration-300`}
                        >
                          <div className="flex items-center justify-center gap-2 mb-2">
                            <span className="text-xl">{advice.icon}</span>
                            <h4 className="font-semibold text-white">
                              {advice.label}
                            </h4>
                          </div>
                          <p className="text-gray-300 font-medium">
                            {advice.value}
                          </p>
                        </div>
                      ))}
                    </div>
                    {wine.servingAdvice.decanting && (
                      <div className={`mt-6 p-6 rounded-xl bg-white/5 border ${colorTheme.border}`}>
                        <p className="font-medium text-gray-300">
                          <span className="text-white font-semibold text-lg">Carafage :</span> {wine.servingAdvice.decanting}
                        </p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}

            {activeTab === "composition" && (
              <Card className={`p-4 sm:p-6 md:p-8 bg-gray-900/90 backdrop-blur-md border ${colorTheme.border} shadow-2xl`}>
                <CardContent className="space-y-6 sm:space-y-8">
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-center mb-6 sm:mb-8 text-white tracking-wide">
                    Composition & Terroir
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    {[
                      { label: "Terroir", content: wine.composition.terroir },
                      { label: "Vendanges", content: wine.composition.harvest },
                      { label: "Vinification", content: wine.composition.vinification },
                      { label: "Philosophie", content: wine.composition.philosophy },
                    ].map((comp, index) => (
                      <div key={index} className="space-y-3 p-6 rounded-xl bg-white/5 border border-white/10">
                        <h3 className="text-xl font-semibold text-white">
                          {comp.label}
                        </h3>
                        <p className="leading-relaxed text-gray-300">
                          {comp.content}
                        </p>
                      </div>
                    ))}
                  </div>

                  {wine.awards.length > 0 && (
                    <>
                      <Separator className="bg-white/20" />
                      <div className="text-center space-y-4">
                        <h3 className="text-2xl font-semibold text-white">
                          Récompenses
                        </h3>
                        <div className="flex flex-wrap justify-center gap-3">
                          {wine.awards.map((award, index) => (
                            <Badge 
                              key={index}
                              variant="outline"
                              className="px-4 py-2 text-sm border-white/30 text-gray-300 hover:bg-white/10 hover:text-white transition-colors"
                            >
                              <Award className="w-4 h-4 mr-2" />
                              {award}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
