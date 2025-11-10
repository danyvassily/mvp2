import { Metadata } from "next";
import { cn } from "@/lib/utils";
import { HeroStandard } from "@/components/common/HeroStandard";
import { SPACING } from "@/lib/constants";
import { TransitionLink } from "@/components/gsap/TransitionLink";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

// Styles pour garantir le texte blanc sur les boutons
const buttonWhiteTextStyle: React.CSSProperties = {
  color: '#ffffff',
  backgroundColor: '#0f172a',
};

export const metadata: Metadata = {
  title: "De la Vigne à la bouteille | Château Lastours",
  description: "Plongez dans le voyage captivant de nos raisins, qui, de trésors viticoles, deviennent l'expression en bouteille de notre passion et de notre héritage. Au Château Lastours, chaque étape de notre travail de vinification révèle une histoire de dévouement, de respect de la nature et de la magie qui transforme le fruit en un grand vin.",
  keywords: ["vinification", "château lastours", "savoir-faire", "vigne", "bouteille", "tradition", "AOP Gaillac"],
  openGraph: {
    title: "De la Vigne à la bouteille | Château Lastours",
    description: "Bienvenue au cœur du vignoble et de la cave, là où tradition et art se rencontrent.",
    images: ["/asset/de-la-vigne-a-la-bouteille/chai-a-barrique-chateau-lastours-gaillac-france.jpg"],
  },
};

// Contenu strictement depuis ASSET/de-la-vigne-a-la-bouteille
// Source unique de vérité
const sections = [
  {
    id: "pressurage",
    title: "Le Pressurage : Tout commence ici",
    content: "Dès leur arrivée, les raisins fraîchement vendangés sont amenés au pressoir. Cette étape délicate libère les premiers jus de nos cuvées blanches et rosées. Ces jus, que l'on appelle « moûts », sont ensuite clarifiés par débourbage, puis transférés dans des cuves en béton ou en inox. C'est le prélude à toutes les grandes cuvées du domaine.",
    imageSrc: "/asset/de-la-vigne-a-la-bouteille/vendange-raisin-rouge.jpg",
    imageAlt: "Pressurage des raisins au Château Lastours",
    align: "left" as const,
  },
  {
    id: "fermentation-alcoolique",
    title: "La Fermentation Alcoolique : Quand le sucre devient vin",
    content: "La fermentation alcoolique débute : les levures transforment naturellement le sucre du moût en alcool. Ici, chaque détail compte ! Nous veillons scrupuleusement à la température pour préserver la fraîcheur et permettre aux levures de travailler dans les meilleures conditions. Pour nos vins rouges, un savoir-faire unique : les remontages. Cette technique consiste à faire circuler le moût du bas vers le haut de la cuve, favorisant ainsi l'extraction des tanins, de la couleur et des arômes. S'ensuit une période de macération, surveillée et dégustée quotidiennement, pour offrir équilibre et caractère à chaque cuvée.",
    imageSrc: "/asset/de-la-vigne-a-la-bouteille/allee-de-cuves-inox-chai-a-vinification.jpeg",
    imageAlt: "Fermentation alcoolique en cuves inox au Château Lastours",
    align: "right" as const,
  },
  {
    id: "fermentation-malo-lactique",
    title: "La Fermentation Malo-lactique : Douceur et stabilité",
    content: "Après la fermentation alcoolique, une seconde transformation s'opère grâce aux bactéries naturelles. L'acide malique se convertit en acide lactique, adoucissant le vin tout en stabilisant sa structure. Cette fermentation, incontournable pour nos vins rouges, est aussi réalisée sur certaines cuvées de blanc pour en révéler pleinement la personnalité.",
    imageSrc: "/asset/de-la-vigne-a-la-bouteille/fermentation-malo-lactique-chateau-lastours-france.jpg",
    imageAlt: "Fermentation malolactique au Château Lastours",
    align: "left" as const,
  },
  {
    id: "ecoulage-decuvage",
    title: "Écoulage et Décuvage : Sélection et précision",
    content: "Après la macération, vient l'écoulage : nous séparons le « vin de goutte », synonyme de finesse, du « vin de presse », plus puissant. Les marcs issus de cette opération sont délicatement pressés afin d'extraire chaque goutte de jus. Chacun de ces jus sera traité selon ses qualités pour composer nos meilleures cuvées.",
    imageSrc: "/asset/de-la-vigne-a-la-bouteille/décuvage-cuve-inox-chateau-lastours-gaillac-france.jpeg",
    imageAlt: "Écoulage et décuvage au Château Lastours",
    align: "right" as const,
  },
  {
    id: "elevage-barrique",
    title: "L'Élevage en Barrique : L'art du temps",
    content: "Nos vins poursuivent leur évolution en barrique de chêne français, pièce maîtresse pour le développement des arômes et l'affinage de la texture. L'entonnage, entre novembre et décembre, apporte rondeur, complexité et profondeur à chaque cru, grâce à une multitude de transformations naturelles.",
    imageSrc: "/asset/de-la-vigne-a-la-bouteille/chai-a-barrique-chateau-lastours-gaillac-france.jpg",
    imageAlt: "Élevage en barrique au Château Lastours",
    align: "left" as const,
  },
  {
    id: "assemblage",
    title: "L'Assemblage : L'émotion de la création",
    content: "L'assemblage est le cœur de notre créativité. Nous sélectionnons avec soin les différentes parcelles et cépages avant de les déguster un à un. C'est par le jeu subtil des assemblages que naissent les grandes cuvées, reflets authentiques de notre terroir et de nos ambitions.",
    imageSrc: "/asset/de-la-vigne-a-la-bouteille/assemblage-vin-chai-a-barrique-chateau-lastours-gaillac-france.jpeg",
    imageAlt: "Assemblage des vins au Château Lastours",
    align: "right" as const,
  },
  {
    id: "mise-en-bouteille",
    title: "La Mise en Bouteille : La naissance d'un vin",
    content: "Toutes les étapes mènent ici ! Nous assurons nous-mêmes la mise en bouteille, sur la propriété, sous atmosphère neutre. Cette attention préserve toute la fraîcheur aromatique de nos vins et garantit leur qualité jusqu'à votre table.",
    imageSrc: "/asset/de-la-vigne-a-la-bouteille/chaine-d-emouteillage-methode-ancestrale-gaillac.jpeg",
    imageAlt: "Mise en bouteille au Château Lastours",
    align: "left" as const,
  },
  {
    id: "ouillage",
    title: "L'Ouillage : Un soin permanent",
    content: "Parmi nos gestes quotidiens en cave, l'ouillage tient une place centrale : il s'agit de compléter le niveau des barriques pour compenser les pertes naturelles dues à l'évaporation et éviter toute oxydation. Ce soin méticuleux préserve l'équilibre et la finesse de nos vins durant toute la phase d'élevage.",
    imageSrc: "/asset/de-la-vigne-a-la-bouteille/ouillage-vin-rouge-fut-de-chene-francaise.jpeg",
    imageAlt: "Ouillage en barrique au Château Lastours",
    align: "right" as const,
  },
];

export default function DeLaVigneALaBouteillePage() {
  return (
    <div className="min-h-screen relative bg-white" data-page="de-la-vigne-a-la-bouteille">
      {/* Hero Section - Image d'en-tête avec texte adossé */}
      <HeroStandard
        imageSrc="/asset/de-la-vigne-a-la-bouteille/elevage-vin-chai-a-barrique-chateau-lastours.JPG"
        title="De la Vigne à la bouteille"
        subtitle="Plongez dans le voyage captivant de nos raisins, qui, de trésors viticoles, deviennent l'expression en bouteille de notre passion et de notre héritage. Au Château Lastours, chaque étape de notre travail de vinification révèle une histoire de dévouement, de respect de la nature et de la magie qui transforme le fruit en un grand vin. Bienvenue au cœur du vignoble et de la cave, là où tradition et art se rencontrent."
      />

      {/* Espace aéré après le hero */}
      <div className="h-16 lg:h-24"></div>

      {/* Sections panoramiques - Style cohérent avec les autres pages */}
      {sections.map((section, index) => (
        <section 
          key={section.id}
          className="relative z-10 mb-12 lg:mb-16 xl:mb-20"
        >
          {/* Image panoramique pleine largeur */}
          <div className="relative h-[60vh] lg:h-[70vh] xl:h-[80vh] overflow-hidden">
            <Image
              src={section.imageSrc}
              alt={section.imageAlt}
              fill
              className="object-cover object-center hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 100vw"
            />
            
            {/* Overlay gradient subtil */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            
            {/* Grain texture */}
            <div className="absolute inset-0 opacity-[0.03] texture-grain-fine" />

            {/* Texte en overlay - Position selon align */}
            <div className={`absolute inset-0 flex items-end ${section.align === "left" ? "justify-start" : "justify-end"}`}>
              <div className={`p-8 lg:p-16 xl:p-20 max-w-2xl ${section.align === "left" ? "text-left" : "text-right"}`}>
                {/* Titre */}
                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-serif font-light text-white tracking-[0.02em] leading-[1.1] mb-8">
                  {section.title}
                </h2>
                
                {/* Corps de texte */}
                <p className="text-lg lg:text-xl leading-relaxed text-white/90 font-light tracking-wide max-w-xl">
                  {section.content}
                </p>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Encadré CTA "Le saviez-vous" */}
      <section className="py-16 lg:py-24 bg-slate-50 scroll-mt-20">
        <div className={cn(SPACING.container)}>
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-slate-900 tracking-[0.02em] leading-[1.1]">
              Le saviez-vous ?
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-slate-700 font-light">
              De la récolte à l'assemblage, chaque opération conjugue tradition et innovation. Notre équipe veille, jour après jour, à l'excellence et à l'authenticité de chaque bouteille, dans le respect de l'environnement et des valeurs du domaine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link 
                href="/reservation"
                className="inline-flex items-center justify-center min-h-[44px] px-8 py-6 text-base rounded-md !bg-slate-900 hover:!bg-slate-800 !text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
                style={buttonWhiteTextStyle}
              >
                <span style={{ color: '#ffffff' }}>Visiter le Domaine</span>
                <ArrowRight className="ml-2 w-5 h-5" style={{ color: '#ffffff' }} />
              </Link>
              <Link 
                href="/les-vins"
                className="inline-flex items-center justify-center min-h-[44px] px-8 py-6 text-base rounded-md !bg-slate-900 hover:!bg-slate-800 !text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
                style={buttonWhiteTextStyle}
              >
                <span style={{ color: '#ffffff' }}>Découvrir nos Cuvées</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer local - Style élégant */}
      <section className="py-24 lg:py-32 xl:py-40 relative z-10 bg-white">
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
                  className="inline-flex items-center px-16 py-6 !bg-slate-900 hover:!bg-slate-800 border border-slate-900 hover:border-slate-800 !text-white font-light text-lg tracking-wide transition-all duration-700 backdrop-blur-sm hover:scale-[1.02] shadow-2xl group focus:outline-none focus:ring-2 focus:ring-wine-gold focus:ring-offset-2 min-h-[44px] rounded-md"
                  style={buttonWhiteTextStyle}
                >
                  <span style={{ color: '#ffffff' }}>Planifiez votre visite</span>
                </TransitionLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

