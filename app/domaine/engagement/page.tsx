import { Metadata } from "next";
import { cn } from "@/lib/utils";
import { TransitionLink } from "@/components/gsap/TransitionLink";
import { SPACING } from "@/lib/constants";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Nos Engagements Écoresponsables | Château Lastours",
  description: "Découvrez les engagements écoresponsables du Château Lastours, domaine viticole certifié HVE en Gaillac, engagé pour une viticulture durable et respectueuse de l'environnement.",
  openGraph: {
    title: "Nos Engagements Écoresponsables | Château Lastours",
    description: "Une viticulture durable en plein cœur du Sud-Ouest français.",
    images: ["/page/notre-vignoble-manque-1-photo/vignes-allee-de-platane-gaillac-france.jpg"],
  },
};

// Contenu des sections d'engagement
const engagementSections = [
  {
    id: "certification-hve",
    text: {
      kicker: "Certification HVE",
      title: "Certification HVE - Haute Valeur Environnementale",
      body: "La Certification HVE3 (Haute Valeur Environnementale niveau 3) est une démarche engagée par les viticulteurs soucieux de leur impact écologique. En obtenant cette certification, nous mettons en avant notre volonté d'adopter une viticulture durable, tout en garantissant la qualité de nos vins à travers des pratiques agricoles respectueuses de la biodiversité, de la gestion de l'eau, de la réduction de l'usage de produits phytosanitaires, et de la maintenance d'un espace naturel équilibré.",
    },
    image: {
      src: "/photos-web-lastours/vignes/1682596442650.jpg",
      alt: "Certification HVE au Château Lastours",
    },
    layout: "text-first",
    logo: "/page/nos-engagement-ok/logo-hve3.png",
  },
  {
    id: "zero-insecticides",
    text: {
      kicker: "Zéro Insecticides",
      title: "Zero Insecticides",
      body: "La confusion sexuelle est une méthode de lutte biologique contre certains ravageurs de la grappe que nous avons mis en place au domaine. Nous diffusons des phéromones femelles pour désorienter les mâles afin d'empêcher leur reproduction. Cette approche écologique nous permet de réduire considérablement l'usage de pesticides tout en préservant l'équilibre naturel de nos vignes.",
    },
    image: {
      src: "/page/nos-engagement-ok/nos-engagements-agriculture-raisonnee-chateau-lastours-aop-aoc-gaillac-france.jpg",
      alt: "Confusion sexuelle dans les vignes du Château Lastours",
    },
    layout: "image-first",
  },
  {
    id: "terre-preservee",
    text: {
      kicker: "Patrimoine Naturel",
      title: "Une Terre préservée, un patrimoine valorisé",
      body: "Notre domaine s'étend sur des terres cultivées dans le respect des équilibres naturels. Nous favorisons les pratiques douces : travail mécanique des sols, enherbement naturel, traitements alternatifs et limitation des intrants chimiques. L'objectif : laisser à la nature toute sa place et produire des vins authentiques, reflet de notre terroir.",
    },
    image: {
      src: "/photos-web-lastours/vignes/vignes.jpg",
      alt: "Vignoble durable du Château Lastours",
    },
    layout: "text-first",
  },
  {
    id: "evenements-responsables",
    text: {
      kicker: "Événements Durables",
      title: "Des Événements Responsables",
      body: "Organisez vos mariages, séminaires ou événements d'entreprise dans un cadre exceptionnel et engagé. Nous mettons un point d'honneur à proposer des services écoresponsables : partenariats avec traiteurs locaux, valorisation des circuits courts, recyclage et limitation des déchets. Offrez à vos invités une expérience aussi mémorable que durable.",
    },
    image: {
      src: "/photos/bulle-de-jazz-2021-chazo-087.jpg",
      alt: "Événement écoresponsable au Château Lastours",
    },
    layout: "image-first",
  },
];

export default function EngagementPage() {
  return (
    <div className="min-h-screen relative bg-premium" data-page="engagement">
      {/* Texture grain prononcée - Style premium */}
      <div className="fixed inset-0 opacity-12 pointer-events-none texture-paper"></div>
      <div className="fixed inset-0 opacity-8 pointer-events-none texture-grain"></div>
      <div className="fixed inset-0 opacity-30 pointer-events-none gradient-depth"></div>

      {/* Hero Section - Style Ruinart */}
      <section className="relative h-[70vh] lg:h-[85vh] overflow-hidden z-10 mt-6 lg:mt-8 mb-6 lg:mb-8">
        <div className="absolute inset-0">
          <Image
            src="/page/notre-vignoble-manque-1-photo/vignes-allee-de-platane-gaillac-france.jpg"
            alt="Coucher de soleil avec allée de platane et vignes - Château Lastours"
            fill
            className="object-cover hover:scale-105 transition-transform duration-700"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
          <div className="absolute inset-0 opacity-[0.12] pointer-events-none grain"></div>
        </div>

        {/* Texte superposé - Position CENTRÉE */}
        <div className="relative h-full flex items-center justify-center text-center z-10">
          <div className={cn(SPACING.container, "max-w-4xl")}>
            <div className="inline-block mb-6">
              <span className="inline-block px-6 py-3 bg-white/10 backdrop-blur-md text-white text-xs font-bold tracking-[0.2em] uppercase border border-white/20">
                Nos Engagements
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-light leading-[1.05] tracking-tight text-white mb-6 lg:mb-8">
              Un Domaine Durable, Une Terre d'Avenir
            </h1>
            <p className="text-lg lg:text-xl xl:text-2xl leading-relaxed text-white/90 font-light tracking-wide max-w-3xl mx-auto">
              Engagés pour la nature, enracinés dans l'excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Sections d'engagement - Style panoramique pleine largeur */}
      {engagementSections.map((section, index) => {
        // Pour la section "zero-insecticides", afficher juste le texte sans image
        const isTextOnly = section.id === "zero-insecticides";
        
        if (isTextOnly) {
          return (
            <section 
              key={section.id}
              className="relative z-10 mt-6 lg:mt-8 bg-white py-16 lg:py-24"
            >
              {/* Pleine largeur */}
              <div className="w-full">
                <div className={`max-w-full px-4 lg:px-8 xl:px-16 2xl:px-24 ${section.layout === "text-first" ? "text-left" : "text-right"}`}>
                  {/* Kicker */}
                  <div className="mb-6">
                    <span className="inline-block px-6 py-3 bg-slate-100 text-slate-800 text-xs font-bold tracking-[0.2em] uppercase border border-slate-200">
                      {section.text.kicker}
                    </span>
                  </div>
                  
                  {/* Titre */}
                  <h2 className="text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-serif font-light text-slate-900 tracking-[0.02em] leading-[1.1] mb-8 max-w-5xl">
                    {section.text.title}
                  </h2>
                  
                  {/* Corps de texte */}
                  <p className="text-base lg:text-lg xl:text-xl leading-relaxed text-slate-700 font-light tracking-wide max-w-5xl">
                    {section.text.body}
                  </p>
                </div>
              </div>
            </section>
          );
        }
        
        // Pour les autres sections, afficher avec image panoramique pleine largeur
        return (
          <section 
            key={section.id}
            className="relative z-10 mt-6 lg:mt-8"
          >
            {/* Image panoramique pleine largeur */}
            <div className="relative w-full h-[60vh] lg:h-[70vh] xl:h-[80vh] 2xl:h-[85vh] overflow-hidden">
              <Image
                src={section.image.src}
                alt={section.image.alt}
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-500"
              />
              
              {/* Overlay gradient subtil */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              
              {/* Grain texture */}
              <div className="absolute inset-0 opacity-[0.03] texture-grain-fine"></div>

              {/* Texte en overlay - Position selon layout - Pleine largeur */}
              <div className={`absolute inset-0 flex items-end ${section.layout === "text-first" ? "justify-start" : "justify-end"}`}>
                <div className={`w-full px-4 lg:px-8 xl:px-16 2xl:px-24 pb-8 lg:pb-16 xl:pb-20 ${section.layout === "text-first" ? "text-left" : "text-right"}`}>
                  <div className={`max-w-5xl ${section.layout === "text-first" ? "ml-0" : "ml-auto"}`}>
                    {/* Kicker */}
                    <div className="mb-6">
                      <span className="inline-block px-6 py-3 bg-white/10 backdrop-blur-md text-white text-xs font-bold tracking-[0.2em] uppercase border border-white/20">
                        {section.text.kicker}
                      </span>
                    </div>
                    
                    {/* Logo HVE si présent */}
                    {section.logo && (
                      <div className="mb-6">
                        <Image
                          src={section.logo}
                          alt="Logo Certification HVE"
                          width={150}
                          height={150}
                          className="object-contain"
                        />
                      </div>
                    )}
                    
                    {/* Titre */}
                    <h2 className="text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-serif font-light text-white tracking-[0.02em] leading-[1.1] mb-8">
                      {section.text.title}
                    </h2>
                    
                    {/* Corps de texte */}
                    <p className="text-base lg:text-lg xl:text-xl leading-relaxed text-white/90 font-light tracking-wide max-w-3xl">
                      {section.text.body}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Section CTA - Réserver une visite - Style plein écran */}
      <section className="relative py-24 lg:py-32 xl:py-40 z-10 bg-gradient-to-b from-slate-50 to-white mt-6 lg:mt-8">
        {/* Pleine largeur */}
        <div className="w-full">
          <div className="max-w-full px-4 lg:px-8 xl:px-16 2xl:px-24">
            <div className="max-w-6xl mx-auto text-center">
              <div className="space-y-8">
                <h3 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif text-slate-900 tracking-[0.02em] font-light leading-[1.1]">
                  Envie d'en savoir plus ?
                </h3>
                <p className="text-xl md:text-2xl xl:text-3xl leading-relaxed text-slate-600 font-light tracking-wide max-w-4xl mx-auto mb-8">
                  Réservez une visite du domaine et découvrez notre philosophie durable de l'intérieur.
                </p>
                <div className="pt-4">
                  <TransitionLink 
                    href="/reservation"
                    className="inline-flex items-center px-12 lg:px-16 py-5 lg:py-6 bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 text-white font-light text-lg lg:text-xl tracking-wide transition-all duration-700 backdrop-blur-sm hover:scale-[1.02] shadow-2xl group"
                  >
                    Réserver une visite
                  </TransitionLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
