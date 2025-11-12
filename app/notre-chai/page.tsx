import { Metadata } from "next";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { SectionTitle } from "@/components/common/SectionTitle";
import { TransitionLink } from "@/components/gsap/TransitionLink";
import { SPACING } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Notre Chai | Château Lastours",
  description: "Découvrez l'art de la vinification au Château Lastours à Gaillac : authenticité, innovation, terroir d'exception, cépages autochtones, labels AOP et œnotourisme dans le Sud-Ouest de la France.",
  keywords: ["chai", "vinification", "château lastours", "savoir-faire", "tradition", "innovation viticole", "AOP Gaillac"],
  openGraph: {
    title: "Notre Chai | Château Lastours",
    description: "L'art de la vinification haut de gamme au cœur de Gaillac",
    images: ["/page/notre-chai-manque-1-photo/chai-a-barrique-chateau-lastours-gaillac-france.jpg"],
  },
};

// Contenu authentique de la vinification du domaine - avec nouvelles images
const vinificationSections = [
  {
    id: "vendange",
    text: {
      kicker: "De la Vigne à la Bouteille",
      title: "Les Vendanges : Première Sélection",
      body: "Au Château Lastours, la vinification commence dès la nuit tombée, par une sélection minutieuse des plus belles grappes issues de cépages autochtones, reflets vivants du terroir de Gaillac et du Sud-Ouest de la France. Les raisins sont récoltés à la main, à maturité optimale, pour préserver toute la fraîcheur et la pureté aromatique."
    },
    image: {
      src: "/page/notre-chai-manque-1-photo/vendange-raisin-rouge.jpg",
      alt: "Vendange de raisins rouges au Château Lastours",
      ratio: "21/9" as const
    },
    layout: "text-first"
  },
  {
    id: "fermentation",
    text: {
      kicker: "Vinification d'Excellence",
      title: "La Fermentation : Transformation Alchimique",
      body: "Les raisins blancs et rosés sont pressés délicatement puis refroidis à 4°C pour préserver toute la fraîcheur et la pureté aromatique. Cette extraction à froid, signature de notre domaine viticole, sublime les notes d'agrumes, de fleurs blanches et de fruits frais, tout en garantissant une finesse cristalline. Pour les rouges, l'éraflage soigné et la macération pelliculaire révèlent la profondeur, la structure tannique et la couleur intense qui font la renommée des vins de Gaillac."
    },
    image: {
      src: "/page/notre-chai-manque-1-photo/allee-de-cuves-inox-chai-a-vinification.jpeg",
      alt: "Cuves inox pour la vinification au Château Lastours",
      ratio: "16/9" as const
    },
    layout: "image-first"
  },
  {
    id: "fermentation-malo",
    text: {
      kicker: "Savoir-Faire Traditionnel",
      title: "La Fermentation Malolactique : Affinage et Rondeur",
      body: "La fermentation malolactique, systématique pour les rouges et sélective pour les blancs, affine la texture, adoucit les tanins et apporte une rondeur gourmande, tout en maintenant la fraîcheur emblématique du vignoble français. Cette étape cruciale transforme l'acide malique en acide lactique, stabilisant la structure et révélant la complexité aromatique de chaque cuvée."
    },
    image: {
      src: "/page/notre-chai-manque-1-photo/fermentation-malo-lactique-chateau-lastours-france.jpg",
      alt: "Fermentation malolactique au Château Lastours",
      ratio: "21/9" as const
    },
    layout: "text-first"
  },
  {
    id: "decuvage",
    text: {
      kicker: "Art de la Vinification",
      title: "Le Décuvage : Séparation et Précis",
      body: "Après la macération, vient l'écoulage : nous séparons le « vin de goutte », synonyme de finesse, du « vin de presse », plus puissant. Les marcs issus de cette opération sont délicatement pressés afin d'extraire chaque goutte de jus. Chacun de ces jus sera traité selon ses qualités pour composer nos meilleures cuvées."
    },
    image: {
      src: "/page/notre-chai-manque-1-photo/decuvage-cuve-inox-chateau-lastours-gaillac-france.jpeg",
      alt: "Décuvage en cuve inox au Château Lastours",
      ratio: "16/9" as const
    },
    layout: "image-first"
  },
  {
    id: "elevage",
    text: {
      kicker: "Art de l'Élevage",
      title: "L'Élevage : L'Art de la Discrétion",
      body: "Nos vins blancs et rosés reposent en cuves inox pour exalter la minéralité, la pureté du fruit et la tension naturelle du terroir. Les rouges bénéficient d'un élevage soigné en barriques françaises, demi-muids ou pièces, toujours en rotation, pour éviter toute standardisation et privilégier l'authenticité. La micro-oxygénation subtile affine les tanins et révèle la complexité aromatique, sans jamais masquer l'identité du millésime ou du sol."
    },
    image: {
      src: "/page/notre-chai-manque-1-photo/chai-a-barrique-chateau-lastours-gaillac-france.jpg",
      alt: "Élevage en barrique au Château Lastours",
      ratio: "21/9" as const
    },
    layout: "text-first"
  },
  {
    id: "ouillage",
    text: {
      kicker: "Soin Meticuleux",
      title: "L'Ouillage : Gestes Quotidiens",
      body: "Parmi nos gestes quotidiens en cave, l'ouillage tient une place centrale : il s'agit de compléter le niveau des barriques pour compenser les pertes naturelles dues à l'évaporation et éviter toute oxydation. Ce soin méticuleux préserve l'équilibre et la finesse de nos vins durant toute la phase d'élevage."
    },
    image: {
      src: "/page/notre-chai-manque-1-photo/ouillage-vin-rouge-fut-de-chene-francaise.jpeg",
      alt: "Ouillage en barrique au Château Lastours",
      ratio: "16/9" as const
    },
    layout: "image-first"
  },
  {
    id: "assemblage",
    text: {
      kicker: "Signature Lastours",
      title: "L'Assemblage : La Signature Lastours",
      body: "L'assemblage, véritable signature du Château Lastours, est un travail d'orfèvre où chaque cépage – Duras, Braucol, Mauzac – chaque parcelle d'argile, de calcaire ou de boulbène, et chaque type d'élevage, sont harmonieusement mariés pour créer des vins vibrants, élégants et résolument modernes. Nos cuvées expriment la diversité, la richesse et la typicité du vignoble de Gaillac."
    },
    image: {
      src: "/page/notre-chai-manque-1-photo/assemblage-vin-chai-a-barrique-chateau-lastours-gaillac-france.jpeg",
      alt: "Assemblage des vins au Château Lastours",
      ratio: "21/9" as const
    },
    layout: "text-first"
  },
  {
    id: "embouteillage",
    text: {
      kicker: "Finalisation",
      title: "L'Embouteillage : Dernière Étape",
      body: "Toutes les étapes mènent ici ! Nous assurons nous-mêmes la mise en bouteille, sur la propriété, sous atmosphère neutre. Cette attention préserve toute la fraîcheur aromatique de nos vins et garantit leur qualité jusqu'à votre table. Chaque bouteille est une invitation à un voyage sensoriel authentique, qui célèbre la richesse du Sud-Ouest et la finesse des vins de Gaillac."
    },
    image: {
      src: "/page/notre-chai-manque-1-photo/chaine-d-emouteillage-methode-ancestrale-gaillac.jpeg",
      alt: "Embouteillage méthode ancestrale au Château Lastours",
      ratio: "16/9" as const
    },
    layout: "image-first"
  },
];

export default function NotreChai() {
  return (
    <div className="min-h-screen relative bg-premium" data-page="notre-chai">
      {/* Texture grain prononcée - Style premium */}
      <div className="fixed inset-0 opacity-12 pointer-events-none texture-paper">
      </div>
      
      {/* Grain additionnel plus fin */}
      <div className="fixed inset-0 opacity-8 pointer-events-none texture-grain">
      </div>

      {/* Hero Section - Style élégant */}
      <section className="relative py-24 lg:py-40 xl:py-48 overflow-hidden z-10">
        <div className={cn(SPACING.container, "relative z-10")}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Contenu texte hero */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="py-12 lg:py-16">
                <SectionTitle
                  kicker="Vinification d'Excellence"
                  title="Notre Chai"
                  subtitle="De la Grappe à la Bouteille : Le Souffle du Terroir. Découvrez l'art de la vinification haut de gamme au Château Lastours, au cœur de Gaillac, où chaque millésime devient une aventure sensorielle et un hommage à la tradition viticole française."
                  align="left"
                />
              </div>
            </div>

            {/* Image hero */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="relative h-[450px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.01] transition-all duration-700 group">
                <Image
                  src="/page/notre-chai-manque-1-photo/elevage-vin-chai-a-barrique-chateau-lastours.jpg"
                  alt="Notre Chai - Château Lastours"
                  fill
                  priority
                  className="w-full h-full object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-stone-800/20" />
                <div className="absolute inset-0 grain-subtle" />
              </div>
            </div>
          </div>
        </div>

        {/* Espace aéré après le hero */}
        <div className="h-16 lg:h-24"></div>
      </section>

      {/* Sections panoramiques - Style élégant sans icônes */}
      {vinificationSections.map((section, index) => (
        <section 
          key={section.id}
          className="relative z-10 mb-12 lg:mb-16 xl:mb-20"
        >
          {/* Image panoramique pleine largeur */}
          <div className="relative h-[60vh] lg:h-[70vh] xl:h-[80vh] overflow-hidden">
            <Image
              src={section.image.src}
              alt={section.image.alt}
              fill
              className="w-full h-full object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            
            {/* Overlay gradient subtil */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            
            {/* Grain texture */}
            <div className="absolute inset-0 opacity-[0.03] texture-grain-fine">
            </div>

            {/* Texte en overlay - Position selon layout */}
            <div className={`absolute inset-0 flex items-end ${section.layout === "text-first" ? "justify-start" : "justify-end"}`}>
              <div className={`p-8 lg:p-16 xl:p-20 max-w-2xl ${section.layout === "text-first" ? "text-left" : "text-right"}`}>
                {/* Kicker */}
                <div className="mb-6">
                  <span className="inline-block px-6 py-3 bg-white/10 backdrop-blur-md text-white text-xs font-bold tracking-[0.2em] uppercase border border-white/20">
                    {section.text.kicker}
                  </span>
                </div>
                
                {/* Titre */}
                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-serif font-light text-white tracking-[0.02em] leading-[1.1] mb-8">
                  {section.text.title}
                </h2>
                
                {/* Corps de texte */}
                <p className="text-lg lg:text-xl leading-relaxed text-white/90 font-light tracking-wide max-w-xl">
                  {section.text.body}
                </p>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Section galerie des installations */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white relative z-10">
        <div className={cn(SPACING.container)}>
          <div className="max-w-6xl mx-auto">
            <SectionTitle
              kicker="Nos Installations"
              title="Au Cœur de Notre Chai"
              subtitle="Équipements et techniques de vinification d'exception"
              className="text-center mb-16"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {/* Grande image principale */}
              <div className="md:col-span-2 lg:col-span-1">
                <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl group">
                  <Image
                    src="/page/notre-chai-manque-1-photo/chai-a-barrique-chateau-lastours-gaillac-france.jpg"
                    alt="Chai à barriques Château Lastours"
                    fill
                    className="w-full h-full object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-serif font-light text-white mb-2">Élevage en Barriques</h3>
                    <p className="text-white/90 font-light">
                      Nos barriques françaises permettent un élevage délicat qui apporte structure et complexité à nos vins rouges.
                    </p>
                  </div>
                </div>
              </div>

              {/* Deuxième image */}
              <div className="md:col-span-1">
                <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl group">
                  <Image
                    src="/page/notre-chai-manque-1-photo/allee-de-cuves-inox-chai-a-vinification.jpeg"
                    alt="Cuves inox pour vinification"
                    fill
                    className="w-full h-full object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-serif font-light text-white mb-2">Cuves de Fermentation</h3>
                    <p className="text-white/90 font-light">
                      Nos cuves inox thermorégulées permettent un contrôle précis de la fermentation.
                    </p>
                  </div>
                </div>
              </div>

              {/* Troisième image */}
              <div className="md:col-span-1">
                <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl group">
                  <Image
                    src="/page/notre-chai-manque-1-photo/assemblage-vin-chai-a-barrique-chateau-lastours-gaillac-france.jpeg"
                    alt="Assemblage des vins"
                    fill
                    className="w-full h-full object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-serif font-light text-white mb-2">Assemblage Expert</h3>
                    <p className="text-white/90 font-light">
                      L'art de l'assemblage pour créer des cuvées d'exception.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer local - Style élégant */}
      <section className="py-24 lg:py-32 xl:py-40 relative z-10 gradient-footer-premium">
        <div className={SPACING.container}>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
              {/* Texte CTA */}
              <div className="lg:col-span-7 text-center lg:text-left">
                <div className="space-y-8">
                  <div className="w-32 h-px bg-gradient-to-r from-transparent via-slate-500/60 to-transparent mx-auto lg:mx-0" />
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-slate-900 tracking-[0.02em] font-light leading-[1.1]">
                    Vivez l'Alchimie d'une Vinification d'Exception
                  </h3>
                  <p className="text-xl md:text-2xl leading-relaxed text-slate-600 font-light tracking-wide">
                    Plongez dans l'univers du Château Lastours : chaque bouteille raconte une histoire
                  </p>
                </div>
              </div>
              
              {/* CTA button */}
              <div className="lg:col-span-5 text-center lg:text-right">
                <TransitionLink 
                  href="/reservation"
                  className="inline-flex items-center px-16 py-6 bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 text-white font-light text-lg tracking-wide transition-all duration-700 backdrop-blur-sm hover:scale-[1.02] shadow-2xl group"
                >
                  Planifiez votre visite
                </TransitionLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
