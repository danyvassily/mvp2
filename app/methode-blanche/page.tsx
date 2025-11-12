import { SectionHero } from "@/components/common/SectionHero"
import { RichSection } from "@/components/common/RichSection"
import { getPageAssets } from "@/lib/asset-mapping"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export const metadata: Metadata = {
  title: "Méthode Blanche | Château Lastours",
  description: "Découvrez notre Méthode Blanche, un effervescent ancestral 100% Mauzac aux arômes croquants de pomme verte. Tradition et finesse de l'appellation Gaillac.",
  keywords: ["méthode blanche", "effervescent", "mauzac", "gaillac", "château lastours", "vin pétillant"],
  openGraph: {
    title: "Méthode Blanche | Château Lastours",
    description: "Un effervescent ancestral 100% Mauzac aux arômes croquants de pomme verte",
    images: [
      {
        url: "/page/nos-cuvee-ok/gamme-methode-ancestral/page-methode-blanche/la-methode-blanc.jpg",
        width: 1200,
        height: 630,
        alt: "Méthode Blanche - Château Lastours"
      }
    ]
  }
}

export default function MethodeBlanchePage() {
  const assets = getPageAssets('methode-blanche')

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <SectionHero
        title="Méthode Blanche"
        subtitle="Un effervescent ancestral 100% Mauzac aux arômes croquants de pomme verte"
        imageSrc="/page/nos-cuvee-ok/gamme-methode-ancestral/page-methode-blanche/la-methode-blanc.jpg"
        height="xl"
      />

      {/* Section principale : Présentation */}
      <RichSection
        title="L'expression pure du Mauzac"
        kicker="Tradition"
        content={`
          <p>Notre Méthode Blanche incarne l'authenticité de l'appellation Gaillac et la tradition séculaire de la méthode ancestrale. Élaborée exclusivement à partir du cépage Mauzac, cette cuvée révèle toute la finesse et la complexité de ce cépage autochtone emblématique.</p>
          
          <p>Les arômes croquants de pomme verte, caractéristiques du Mauzac, s'épanouissent dans une bulle fine et persistante, créant une expérience de dégustation unique et rafraîchissante.</p>
          
          <p>Cette méthode ancestrale, transmise de génération en génération, permet au vin de développer naturellement sa prise de mousse en bouteille, sans ajout de sucre ni de levures externes.</p>
        `}
        imageSrc="/page/nos-cuvee-ok/gamme-methode-ancestral/page-methode-blanche/la-methode-blanc.jpg"
        variant="light"
      />

      {/* Section : La méthode ancestrale */}
      <RichSection
        title="La méthode ancestrale gaillacoise"
        kicker="Savoir-faire"
        content={`
          <p>La méthode ancestrale est la plus ancienne technique d'élaboration des vins effervescents, antérieure même à la méthode champenoise. Elle consiste à capturer les bulles naturelles produites lors de la fermentation.</p>
          
          <h3>Le processus en détail</h3>
          <ul>
            <li><strong>Fermentation unique</strong> : Une seule fermentation, débutée en cuve et terminée en bouteille</li>
            <li><strong>Prise de mousse naturelle</strong> : Les bulles se forment spontanément grâce aux sucres résiduels</li>
            <li><strong>Dégorgement</strong> : Élimination du dépôt de levures pour clarifier le vin</li>
            <li><strong>Aucun ajout</strong> : Ni sucre, ni levures, ni soufre lors de la prise de mousse</li>
          </ul>
          
          <p>Cette technique respectueuse révèle l'expression la plus pure du terroir et du cépage Mauzac.</p>
        `}
        imageFirst
        variant="dark"
      />

      {/* Section : Dégustation */}
      <RichSection
        title="Notes de dégustation"
        kicker="Dégustation"
        content={`
          <h3>Aspect visuel</h3>
          <p>Robe dorée aux reflets verts, bulle fine et persistante qui témoigne de la qualité de la prise de mousse ancestrale.</p>
          
          <h3>Bouquet aromatique</h3>
          <p>Nez frais et expressif dominé par les arômes de pomme verte croquante, complétés par des notes florales délicates et une pointe de brioche liée à l'élevage sur lies.</p>
          
          <h3>En bouche</h3>
          <p>Attaque vive et rafraîchissante, belle tension acidulée qui souligne la fraîcheur du Mauzac. La bulle fine et crémeuse apporte une texture soyeuse en finale.</p>
          
          <h3>Accords recommandés</h3>
          <p>Parfait à l'apéritif, excellent avec des fruits de mer, fromages de chèvre frais, ou desserts aux fruits blancs.</p>
        `}
        variant="light"
      />

      {/* Section : Fiche technique */}
      <section className="py-16 bg-gray-50 grain-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8 text-center">
            <div className="space-y-4">
              <span className="text-sm font-medium tracking-widest uppercase text-accent-500 bg-accent-50 px-3 py-1 rounded-full">
                Documentation
              </span>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-serif font-bold text-gray-900 tracking-wide">
                Fiche technique complète
              </h2>
            </div>

            <p className="text-xl text-gray-600 leading-relaxed">
              Retrouvez toutes les informations détaillées sur notre Méthode Blanche dans notre fiche technique officielle.
            </p>

            <div className="pt-6">
              <Button asChild size="lg" className="text-lg px-8 py-3">
                <a 
                  href="/page/nos-cuvee-ok/gamme-methode-ancestral/page-methode-blanche/ft-la-methode-blanc.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Télécharger la fiche technique
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black grain-heavy">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white tracking-wider">
              Dégustez notre Méthode Blanche
            </h2>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              Découvrez l'authenticité de la méthode ancestrale gaillacoise
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/reservation"
                className="inline-block bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-xl"
              >
                Réserver une dégustation
              </a>
              <a
                href="/les-vins"
                className="inline-block border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-gray-900 transition-colors duration-300"
              >
                Voir toutes nos cuvées
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
