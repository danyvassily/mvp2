import { Metadata } from "next";
import { HeroHistory } from "@/components/common/HeroHistory";
import { EncadreHistoire } from "@/components/common/EncadreHistoire";
import { TransitionLink } from "@/components/gsap/TransitionLink";

export const metadata: Metadata = {
  title: "Notre Histoire | Château Lastours",
  description:
    "Château Lastours, l'Art du Vin entre Héritage et Modernité. Découvrez un domaine viticole du XVIIe siècle, un patrimoine vivant et une expérience immersive au cœur du vignoble gaillacois.",
  openGraph: {
    title: "Notre Histoire | Château Lastours",
    description:
      "Entrez dans un univers où chaque pierre raconte une passion séculaire, où le raffinement d'hier s'unit à l'audace d'aujourd'hui.",
    images: [
      "/asset/histoire-du-domaine/domaine-chateau-lastours-gaillac-france-vue-de-haut.jpg",
    ],
  },
};

// Contenu authentique depuis ASSET/histoire-du-domaine
const histoireSections = [
  {
    id: "chateau-noblesse",
    title: "Un château empreint de noblesse et de caractère",
    content:
      "Fondé au XVIIe siècle par la famille de Calmels, le château rayonne par son architecture emblématique : façades majestueuses, tours élégantes et fenêtres à meneaux sculptent la silhouette d'une demeure d'exception. Passer sous son porche, c'est comme franchir un portail vers une autre époque : les façades séculaires portent la mémoire des siècles et l'air porte une odeur subtile de pierres anciennes. Restauré avec passion par Jean André Bourdès à l'aube du XIXe siècle, ce joyau historique incarne l'élégance et la générosité du Sud-Ouest, et offre à chaque visiteur un véritable voyage dans le temps.",
    imageSrc:
      "/asset/histoire-du-domaine/domaine-chateau-lastours-gaillac-france-vue-de-haut.jpg",
    imageAlt: "Vue aérienne du Château Lastours",
    imagePosition: "left" as const,
  },
  {
    id: "terroir-innovation",
    title: "Un terroir unique, source d'innovation",
    content:
      "Précurseur dès 1800, Château Lastours s'impose comme pionnier du vignoble tarnais : 12 hectares consacrés à la vigne, des crus déjà salués sur les marchés animés de la région. Sous l'impulsion de Virginie de Belfortès, le XIXe siècle marque un tournant : agrandissement du vignoble, cuverie en chêne, diversification des cultures qui façonnent un paysage agricole foisonnant et avant-gardiste. Aujourd'hui, chaque cuvée traduit cette quête d'excellence : pentes dorées au soleil, grappes gorgées de lumière et vendanges où se mêlent rires, gestes précis et parfum sucré des raisins fraîchement coupés.",
    imageSrc:
      "/asset/histoire-du-domaine/allee-platanes-feuilles-automne-campagne.jpg",
    imageAlt: "Allée de platanes en automne au Château Lastours",
    imagePosition: "right" as const,
  },
  {
    id: "domaine-vibrant",
    title: "Un domaine vibrant, animé par la passion",
    content:
      "Au fil des saisons, le domaine de Lastours s'éveille, fidèle à l'esprit de ses fondateurs. Sur 81 hectares de terres préservées, le moulin ancestral tourne encore doucement au gré du vent, et les bâtisses chargées d'histoires semblent poser leur ombre protectrice sur les vignes. Ici, la nature dicte le rythme : chants d'oiseaux au printemps, senteur de bois chauffé au chai l'hiver, éclats dorés sur les coteaux à l'automne. De la famille Bourdès à la famille Faramond, une lignée de vignerons dévoués perpétue un engagement : offrir des vins nobles, raffinés et sincères, fruit d'un savoir-faire vivant allié à la modernité.",
    imageSrc:
      "/asset/histoire-du-domaine/pigeonnier-ancien-sud-ouest-france.jpg",
    imageAlt: "Pigeonnier ancestral du domaine Château Lastours",
    imagePosition: "left" as const,
  },
  {
    id: "experience",
    title: "Invitez vos sens au voyage",
    content:
      "Laissez-vous séduire par nos cuvées d'exception, parcourez les allées inspirantes du domaine et vivez une expérience oenotouristique inoubliable : rencontrez la nature au détour d'une balade dans les vignes, partagez un moment privilégié avec nos vignerons autour d'un verre dans le chai, bercés par la douce odeur du bois et du vin en maturation, explorez notre patrimoine à travers les pierres, les récits et les souvenirs transmis, éveillez vos papilles lors d'ateliers de dégustation où accords et histoires se mêlent. Ici, chaque visite est une promesse d'émotions. Nul besoin de presser le temps : on s'y pose, on respire, on savoure. Et derrière chaque millésime, il y a des visages, des mains et des histoires.",
    imageSrc:
      "/asset/histoire-du-domaine/robinet-fontaine-ancienne-mur-pierre.jpg",
    imageAlt: "Fontaine ancienne en pierre du domaine",
    imagePosition: "right" as const,
  },
];

export default function HistoirePage() {
  return (
    <div className="min-h-screen bg-white" data-page="histoire">
      {/* Hero Section - Full width comme la home */}
      <HeroHistory
        imageSrc="/asset/histoire-du-domaine/domaine-chateau-lastours-gaillac-france-vue-de-haut.jpg"
        title="Notre Histoire"
        subtitle="Entrez dans un univers où chaque pierre raconte une passion séculaire, où le raffinement d'hier s'unit à l'audace d'aujourd'hui. À deux pas de Lisle-sur-Tarn, lové dans le creux des vallées verdoyantes et caressé par les brumes délicates du Tarn, le Château Lastours est bien plus qu'un domaine viticole : c'est une expérience immersive, un patrimoine vivant, un écrin de nature et d'excellence."
      />

      {/* Sections encadrés - Un seul titre par encadré */}
      {histoireSections.map((section, index) => (
        <EncadreHistoire
          key={section.id}
          title={section.title}
          content={section.content}
          imageSrc={section.imageSrc}
          imageAlt={section.imageAlt}
          imagePosition={section.imagePosition}
          className={
            index === histoireSections.length - 1
              ? "pb-12 md:pb-16 lg:pb-20"
              : ""
          }
        />
      ))}

      {/* Section Citation */}
      <section 
        className="py-12 md:py-16 lg:py-20 bg-white"
        style={{
          marginBlock: "clamp(16px, 4vw, 48px)",
        }}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote
              className="text-2xl md:text-3xl lg:text-4xl font-serif font-light italic text-slate-800 leading-relaxed"
              style={{ textWrap: "balance" }}
            >
              Le bon vin, c'est celui que vous aimez
            </blockquote>
          </div>
        </div>
      </section>

      {/* Dernier encadré - CTA vers /notre-vignoble */}
      <section 
        className="py-12 md:py-16 lg:py-20 bg-white"
        style={{
          marginBlock: "clamp(16px, 4vw, 48px)",
        }}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Texte CTA */}
              <div className="lg:col-span-7 text-center lg:text-left">
                <div className="space-y-6">
                  <div className="w-32 h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent mx-auto lg:mx-0" />
                  <h2
                    className="text-3xl md:text-4xl lg:text-5xl font-serif text-slate-900 tracking-[0.02em] font-light leading-[1.1]"
                    style={{
                      fontSize: "clamp(22px, 3.8vw, 32px)",
                      textWrap: "balance",
                    }}
                  >
                    Découvrez notre patrimoine viticole
                  </h2>
                  <p className="text-lg md:text-xl leading-relaxed text-slate-600 font-light tracking-wide">
                    Plongez plus profondément dans l'univers de nos terroirs et
                    de nos cuvées d'exception.
                  </p>
                </div>
              </div>

              {/* CTA button */}
              <div className="lg:col-span-5 text-center lg:text-right">
                <TransitionLink
                  href="/notre-vignoble"
                  className="inline-flex items-center min-h-[44px] px-12 py-6 bg-slate-100 hover:bg-slate-200 border border-slate-300 hover:border-slate-400 text-slate-900 font-light text-lg tracking-wide transition-all duration-300 rounded-full focus-visible:outline-2 focus-visible:outline-slate-900 focus-visible:outline-offset-2"
                  aria-label="Découvrir notre vignoble"
                >
                  Découvrir notre vignoble
                </TransitionLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
