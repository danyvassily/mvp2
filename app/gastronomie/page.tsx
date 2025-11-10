import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Gastronomie & Accords Mets-Vins | Château Lastours",
  description: "Découvrez l'art des accords mets-vins au Château Lastours. Nos cépages gaillacois révèlent toute leur personnalité avec la gastronomie du terroir.",
  keywords: ["gastronomie", "accords mets-vins", "cépages gaillacois", "château lastours", "terroir", "dégustation"],
  openGraph: {
    title: "Gastronomie & Accords Mets-Vins | Château Lastours",
    description: "L'art de marier nos vins gaillacois avec la gastronomie du terroir",
    images: [
      {
        url: "/PHOTOS-WEB-LASTOURS/Photos-GENERAL/repas-vins-lastours.jpg",
        width: 1200,
        height: 630,
        alt: "Gastronomie et accords mets-vins au Château Lastours"
      }
    ]
  }
}

const accordsData = [
  {
    type: "Vins Blancs",
    image: "/Page/Gastronomie art de table - manque eventuel photo chambrage/verres-sur-tonneau-en-bois-blason-chateau-lastours-gaillac-france.jpg",
    alt: "Verres de vin blanc sur tonneau en bois au Château Lastours",
    description: "Nos blancs secs révèlent leur fraîcheur et leur minéralité",
    accords: [
      "Poissons grillés et fruits de mer",
      "Fromages de chèvre du terroir",
      "Cuisine asiatique délicate",
      "Apéritifs raffinés"
    ],
    link: "/les-vins?type=blanc"
  },
  {
    type: "Vins Rosés",
    image: "/Page/Gastronomie art de table - manque eventuel photo chambrage/verre-de-vin-effervescent-methode-lastours-sur-table-decoree.jpg",
    alt: "Verre de vin rosé effervescent méthode Lastours sur table décorée",
    description: "Nos rosés accompagnent les plaisirs estivaux",
    accords: [
      "Salades estivales et légumes grillés",
      "Cuisine méditerranéenne",
      "Barbecues et grillades",
      "Desserts aux fruits rouges"
    ],
    link: "/les-vins?type=rose"
  },
  {
    type: "Méthode Gaillacoise",
    image: "/Page/Gastronomie art de table - manque eventuel photo chambrage/bouteilles-effervescent-methode-rose-chateau-lastours-glacons.jpg",
    alt: "Bouteilles effervescent méthode rose Château Lastours avec glaçons",
    description: "Nos bulles subliment les moments festifs",
    accords: [
      "Apéritifs et amuse-bouches",
      "Poissons en sauce",
      "Desserts aux fruits",
      "Célébrations et toasts"
    ],
    link: "/les-vins?type=bulles"
  }
]

// Étapes du service selon l'ordre ASSET
const serviceSteps = [
  {
    number: "1",
    title: "Le débouchage",
    description: "Geste précis qui préserve l'intégrité du bouchon et du vin"
  },
  {
    number: "2",
    title: "Le carafage",
    description: "Aération du vin pour révéler ses arômes complexes"
  },
  {
    number: "3",
    title: "Le chambrage",
    description: "Respect de la température de service idéale pour chaque vin"
  },
  {
    number: "4",
    title: "Le service",
    description: "Ordre et présentation parfaite pour sublimer la dégustation"
  }
]

export default function GastronomiePage() {
  return (
    <div className="min-h-screen relative bg-premium" data-page="gastronomie">
      {/* Texture grain prononcée - Style premium */}
      <div className="fixed inset-0 opacity-12 pointer-events-none texture-paper"></div>
      
      {/* Grain additionnel plus fin */}
      <div className="fixed inset-0 opacity-8 pointer-events-none texture-grain"></div>
      
      {/* Gradient subtil pour la profondeur */}
      <div className="fixed inset-0 opacity-30 pointer-events-none gradient-depth"></div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Image de fond */}
          <div className="absolute inset-0">
            <Image
              src="/PHOTOS-WEB-LASTOURS/Photos-GENERAL/repas-vins-lastours.jpg"
              alt="Gastronomie et accords mets-vins au Château Lastours"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
            {/* Overlay léger pour lisibilité */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/40" />
          </div>
          
          <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4 space-y-8">
            {/* Titre principal */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light text-white tracking-[0.02em] leading-[0.9] mb-8 text-balance">
              L'Art des
              <span className="block italic font-normal">Accords</span>
            </h1>
            
            {/* Sous-titre */}
            <p className="text-xl md:text-2xl lg:text-3xl text-white/90 font-light leading-relaxed max-w-4xl mx-auto tracking-wide text-balance">
              Découvre comment nos cépages subliment la gastronomie
            </p>

            {/* Ligne décorative */}
            <div className="flex items-center justify-center space-x-4 pt-8">
              <div className="h-px bg-gradient-to-r from-transparent via-white/50 to-transparent w-24"></div>
              <div className="w-2 h-2 bg-white/50 rounded-full"></div>
              <div className="h-px bg-gradient-to-r from-transparent via-white/50 to-transparent w-24"></div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </section>

        {/* Section L'Harmonie des Saveurs */}
        <section className="py-[calc(var(--rhythm)*2)] lg:py-[calc(var(--rhythm)*3)] bg-gradient-to-b from-white via-gray-50 to-white relative scroll-mt-[var(--header-height)]" id="harmonie-saveurs">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-[calc(var(--rhythm)*1.5)]">
              {/* Titre */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-gray-900 tracking-wide leading-tight text-balance">
                L'Harmonie des
                <span className="block text-accent-600 italic">Saveurs</span>
              </h2>
              
              {/* Contenu */}
              <div className="prose prose-xl max-w-none text-gray-700 space-y-6">
                <p className="leading-relaxed break-words">
                  Nos vins révèlent toute leur personnalité lorsqu'ils sont associés aux saveurs authentiques de notre région. 
                  Chaque cépage gaillacois possède sa propre signature gustative, créant des accords uniques avec la gastronomie locale.
                </p>
                <p className="leading-relaxed break-words">
                  Du Mauzac perlé aux rouges de Duras et Braucol, découvrez comment nos 13 cépages autochtones subliment 
                  les spécialités du terroir dans une symphonie de goûts et d'arômes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section Accords Mets & Vins */}
        <section className="py-[calc(var(--rhythm)*2)] lg:py-[calc(var(--rhythm)*3)] bg-gray-50 relative scroll-mt-[var(--header-height)]" id="accords-mets-vins">
          <div className="container mx-auto px-4 lg:px-8">
            {/* En-tête de section */}
            <div className="text-center space-y-6 mb-[calc(var(--rhythm)*2.5)]">
              <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-900 tracking-wide text-balance">
                Accord Mets & Vins
              </h2>
            </div>

            {/* Grille des accords */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {accordsData.map((accord, index) => (
                <div 
                  key={index} 
                  className="group relative bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] transition-all duration-500 ease-out"
                >
                  {/* Image */}
                  <div className="relative h-[280px] overflow-hidden rounded-t-3xl">
                    <Image
                      src={accord.image}
                      alt={accord.alt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  </div>
                  
                  {/* Contenu */}
                  <div className="p-8 space-y-6">
                    <div className="space-y-3">
                      <h3 className="text-2xl font-serif font-semibold text-gray-900 group-hover:text-accent-600 transition-colors duration-300">
                        {accord.type}
                      </h3>
                      <p className="text-gray-600 leading-relaxed break-words text-[15px]">
                        {accord.description}
                      </p>
                    </div>
                    
                    {/* Liste des accords */}
                    <ul className="space-y-3">
                      {accord.accords.map((item, i) => (
                        <li key={i} className="flex items-start space-x-3 text-gray-700">
                          <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2.5 flex-shrink-0"></span>
                          <span className="leading-relaxed break-words text-[15px]">{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Bouton */}
                    <Button 
                      variant="outline" 
                      size="lg" 
                      asChild 
                      className="w-full group-hover:bg-accent-600 group-hover:text-white group-hover:border-accent-600 transition-all duration-300 min-h-[44px] focus-visible:ring-2 focus-visible:ring-accent-600 focus-visible:outline-none rounded-xl border-2"
                    >
                      <Link href={accord.link}>
                        Découvrir nos {accord.type.split(' ')[1]}
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section L'Art du Service */}
        <section className="py-[calc(var(--rhythm)*2)] lg:py-[calc(var(--rhythm)*3)] bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden scroll-mt-[var(--header-height)]" id="art-du-service">
          {/* Texture overlay */}
          <div className="absolute inset-0 opacity-10 texture-grain"></div>
          
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-7xl mx-auto">
              {/* Titre de section */}
              <div className="text-center mb-[calc(var(--rhythm)*2)]">
                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-serif font-light leading-tight tracking-wide text-balance">
                  L'Art du
                  <span className="block text-accent-400 italic">Service</span>
                </h2>
              </div>

              {/* Layout : Timeline verticale avec étapes à gauche, photo à droite */}
              <div className="grid lg:grid-cols-2 gap-[calc(var(--rhythm)*2)] items-start">
                {/* Colonne gauche : Étapes numérotées */}
                <div className="space-y-[calc(var(--rhythm)*1.5)]">
                  {serviceSteps.map((step, index) => (
                    <div key={index} className="flex gap-6">
                      {/* Numéro */}
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 rounded-2xl bg-accent-600 flex items-center justify-center text-white font-serif text-xl font-semibold shadow-[0_4px_12px_rgba(0,0,0,0.15)]">
                          {step.number}
                        </div>
                      </div>
                      
                      {/* Contenu */}
                      <div className="flex-1 space-y-2">
                        <h3 className="text-2xl font-serif text-white">{step.title}</h3>
                        <p className="text-gray-300 leading-relaxed break-words">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Colonne droite : Photo */}
                <div className="relative lg:sticky lg:top-[calc(var(--header-height)+var(--rhythm))]">
                  <div className="relative h-[400px] lg:h-[600px] rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
                    <Image
                      src="/Page/Gastronomie art de table - manque eventuel photo chambrage/debouchage-avec-limonadier-bouteille-de-vin.jpg"
                      alt="Débouchage avec limonadier d'une bouteille de vin au Château Lastours"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section L'Art de la Table - Placeholder */}
        <section className="py-[calc(var(--rhythm)*2)] lg:py-[calc(var(--rhythm)*3)] bg-white relative scroll-mt-[var(--header-height)]" id="art-de-la-table">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-[calc(var(--rhythm)*1.5)]">
              <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-900 tracking-wide text-balance">
                L'Art de la Table
              </h2>
              
              <div className="py-[calc(var(--rhythm)*2)] text-gray-500">
                <p className="text-lg leading-relaxed break-words">
                  Contenu à venir
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Final */}
        <section className="relative py-[calc(var(--rhythm)*3)] lg:py-[calc(var(--rhythm)*4)] text-white overflow-hidden scroll-mt-[var(--header-height)]" id="decouvrez-accords">
          {/* Image de fond */}
          <div className="absolute inset-0">
            <Image
              src="/Page/Gastronomie art de table - manque eventuel photo chambrage/table-dressee-reception-chateau-lastours-gaillac-france.jpg"
              alt="Table dressée pour réception au Château Lastours"
              fill
              className="object-cover"
              sizes="100vw"
            />
            {/* Overlay léger pour lisibilité */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/40 to-black/50"></div>
          </div>
          
          {/* Texture overlay */}
          <div className="absolute inset-0 opacity-10 texture-grain"></div>
          
          <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
            <div className="max-w-4xl mx-auto space-y-[calc(var(--rhythm)*1.5)]">
              <div className="space-y-6">
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light tracking-wide leading-tight text-balance">
                  Découvrez nos
                  <span className="block italic font-normal text-accent-200">Accords</span>
                </h2>
                
                <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto text-balance break-words">
                  Réservez une dégustation commentée pour explorer nos accords mets et vins dans l'ambiance 
                  chaleureuse de notre domaine
                </p>
              </div>

              {/* Boutons d'action */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                <Button 
                  size="lg" 
                  asChild 
                  className="bg-white text-accent-900 hover:bg-accent-50 px-8 py-4 text-lg font-semibold shadow-xl min-h-[44px] focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
                >
                  <Link href="/reservation">
                    Réserver une visite
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  asChild 
                  className="border-2 border-white text-white hover:bg-white hover:text-accent-900 px-8 py-4 text-lg font-semibold min-h-[44px] focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
                >
                  <Link href="/degustation">
                    Découvrir la dégustation
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
