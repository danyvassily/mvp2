import { Metadata } from "next";
import { cn } from "@/lib/utils";
import { SectionTitle } from "@/components/common/SectionTitle";
import { TextBlock } from "@/components/common/TextBlock";
import { TransitionLink } from "@/components/gsap/TransitionLink";
import { SPACING } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Notre Vignoble | Château Lastours",
  description: "Découvrez le terroir exceptionnel du Château Lastours : 52 hectares de vignoble dans l'appellation Gaillac, des cépages traditionnels et un savoir-faire ancestral.",
  openGraph: {
    title: "Notre Vignoble | Château Lastours", 
    description: "Un terroir d'exception au cœur de l'appellation Gaillac",
    images: ["/photos-web-lastours/vignes/vignes.jpg"],
  },
};

// Données du terroir - Contenu authentique du Château Lastours
const terroirData = {
  hero: {
    title: "Le Vignoble de Gaillac",
    subtitle: "Un Voyage Millénaire au Cœur du Sud-Ouest",
    description: "Aux confins du Sud-Ouest de la France, entre Toulouse et Albi, s'étend un vignoble ancestral, vibrant d'histoire et de mémoire : le terroir de Gaillac. Ici, la vigne pousse depuis plus de deux millénaires.",
    image: "/photos-web-lastours/vignes/vignes.jpg"
  },
  stats: [
    {
      label: "Surface",
      value: "52ha",
      description: "Vignoble total"
    },
    {
      label: "Âge Moyen",
      value: "35 ans",
      description: "Des vignes"
    },
    {
      label: "Répartition",
      value: "1/3",
      description: "Blanc - 2/3 Rouge"
    },
    {
      label: "Appellation",
      value: "AOC",
      description: "Gaillac"
    }
  ],
  cepages: {
    title: "Des Cépages Autochtones Uniques",
    description: "Ce terroir vivant, vibrant, offre une expression rare de cépages autochtones : Mauzac, frais, évoquant la pomme verte et les fleurs blanches ; Loin de l'œil, un raisin blanc rare, quasi uniquement cultivé à Gaillac, connu pour produire des vins frais et fruités ; Duras, puissant, épicé et fruité ; Braucol, intense et sauvage, aux arômes de fruits noirs et d'épices ; Prunelard, puissant aux notes de fruits noirs, de pruneaux et de violettes.",
    description2: "Des variétés que l'on ne trouve nulle part ailleurs, et qui font toute l'identité unique des vins de Gaillac. Chaque cépage révèle le caractère authentique de notre terroir millénaire.",
    image: "/photos/image00002.jpeg"
  },
  climat: {
    title: "Un Terroir d'Exception, Entre Ciel et Terre",
    description: "Le climat de Gaillac se situe à la croisée des influences atlantiques et méditerranéennes, offrant des étés ensoleillés et des nuits rafraîchies par les brumes du Tarn. Les sols argilo-calcaires, riches en minéraux, donnent profondeur et caractère aux raisins.",
    description2: "Ici, la nature est généreuse et contrastée. Cette région où l'on cultive l'art de vivre aussi bien que celui du vin offre un terroir vivant et vibrant.",
    description3: "Dans cette harmonie entre tradition et nature, chaque parcelle révèle son caractère unique et contribue à l'identité authentique des vins de Gaillac.",
    image: "/photos-web-lastours/vignes/img-20230809-124834.jpg"
  },
  parcelles: [
    {
      id: "rive-droite",
      title: "La Rive Droite",
      description: "Nos parcelles historiques s'étendent sur la rive droite du Tarn, bénéficiant d'une exposition sud exceptionnelle. Ces vignes anciennes, cultivées selon les méthodes traditionnelles, produisent nos cuvées les plus authentiques.",
      image: "/photos-web-lastours/vignes/vieille-vigne.jpg",
      superficie: "18 hectares",
      cepages: "Braucol, Duras",
      age: "35 ans"
    },
    {
      id: "rive-gauche",
      title: "La Rive Gauche",
      description: "Sur la rive gauche, nos parcelles bénéficient des brumes matinales du Tarn qui préservent la fraîcheur des raisins. Terroir privilégié pour nos cépages blancs autochtones.",
      image: "/photos/image00005.jpeg",
      superficie: "17 hectares",
      cepages: "Mauzac, Loin-de-l'œil",
      age: "30 ans"
    },
    {
      id: "plateau-cordais",
      title: "Le Plateau Cordais",
      description: "Le plateau cordais, avec ses sols argilo-calcaires, offre des conditions uniques pour l'expression de nos cépages. Cette diversité de terroirs contribue à la richesse de notre gamme.",
      image: "/photos/image00036.jpeg",
      superficie: "17 hectares",
      cepages: "Prunelard, Mauzac",
      age: "25 ans"
    }
  ]
};

export default function TerroirPage() {
  return (
    <div className="min-h-screen relative bg-premium" data-page="terroir">
      {/* Texture grain prononcée - Style premium */}
      <div className="fixed inset-0 opacity-12 pointer-events-none texture-paper">
      </div>
      
      {/* Grain additionnel plus fin */}
      <div className="fixed inset-0 opacity-8 pointer-events-none texture-grain">
      </div>
      
      {/* Gradient subtil pour la profondeur */}
      <div 
        className="fixed inset-0 opacity-30 pointer-events-none gradient-depth">
      </div>

      {/* Hero Section Amélioré */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Image de fond avec parallax subtil */}
        <div className="absolute inset-0">
          <img
            src="/page/la-vigne-ok/grappe-de-raisins-en-veraison-chateau-lastours-gaillac-france.jpg"
            alt="Notre Terroir - Vignoble Château Lastours"
            className="absolute inset-0 w-full h-full object-cover scale-105 transition-transform duration-700 hover:scale-100"
          />
          {/* Overlay gradients multiples pour plus de profondeur */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
          {/* Vignette subtile */}
          <div className="absolute inset-0 vignette-radial" />
        </div>
        
        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4 space-y-8">
          {/* Badges de certification en haut */}
          <div className="flex flex-wrap justify-center gap-3 mb-8 opacity-90">
            <span className="inline-block bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 text-sm font-medium">
              AOC Gaillac
            </span>
            <span className="inline-block bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 text-sm font-medium">
              52 Hectares
            </span>
            <span className="inline-block bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 text-sm font-medium">
              HVE
            </span>
            <span className="inline-block bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 text-sm font-medium">
              Cépages Autochtones
            </span>
          </div>

          {/* Titre principal amélioré */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-lg md:text-xl font-light tracking-wider uppercase opacity-80 text-green-200">
                Le Domaine
              </p>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight">
                Notre{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-200 to-lime-400">
                  Terroir
                </span>
              </h1>
            </div>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light italic opacity-90 max-w-4xl mx-auto leading-relaxed">
              Un Voyage Millénaire au Cœur du Sud-Ouest
            </h2>
          </div>

          {/* Description enrichie */}
          <div className="space-y-6 max-w-5xl mx-auto">
            <p className="text-xl md:text-2xl font-light leading-relaxed opacity-95">
              <span className="text-green-200 font-semibold">Aux confins du Sud-Ouest : Terroir d'Exception</span>
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed opacity-90">
              Entre Toulouse et Albi s'étend un vignoble ancestral, vibrant d'histoire et de mémoire : 
              le terroir de Gaillac. Ici, la vigne pousse depuis plus de deux millénaires.
            </p>

            {/* Points clés en highlight */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 max-w-4xl mx-auto">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 mx-auto bg-green-400/20 rounded-full flex items-center justify-center mb-3">
                  <span className="text-2xl">🌿</span>
                </div>
                <h3 className="font-semibold text-green-200">Cépages Autochtones</h3>
                <p className="text-sm opacity-80">Mauzac, Duras, Braucol</p>
              </div>
              
              <div className="text-center space-y-2">
                <div className="w-12 h-12 mx-auto bg-green-400/20 rounded-full flex items-center justify-center mb-3">
                  <span className="text-2xl">🏔️</span>
                </div>
                <h3 className="font-semibold text-green-200">Sols Argilo-Calcaires</h3>
                <p className="text-sm opacity-80">Profondeur et caractère</p>
              </div>
              
              <div className="text-center space-y-2">
                <div className="w-12 h-12 mx-auto bg-green-400/20 rounded-full flex items-center justify-center mb-3">
                  <span className="text-2xl">🌞</span>
                </div>
                <h3 className="font-semibold text-green-200">Climat Idéal</h3>
                <p className="text-sm opacity-80">Influence atlantique et méditerranéenne</p>
              </div>
            </div>
          </div>

          {/* Call-to-action avec flèche de défilement */}
          <div className="mt-12 space-y-6">
            <TransitionLink
              href="/reservation"
              className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-2xl hover:shadow-green-500/20 hover:scale-105"
            >
              Découvrir le Vignoble
              <span className="text-xl">→</span>
            </TransitionLink>
            
            {/* Flèche de défilement animée */}
            <div className="flex justify-center pt-8">
              <div className="animate-bounce">
                <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Indicateur de progression visuel */}
        <div className="absolute bottom-8 left-8 hidden lg:block">
          <div className="flex items-center space-x-4 text-white/60 text-sm">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>Explorez nos trois terroirs</span>
          </div>
        </div>
      </section>

      {/* Statistiques du terroir */}
      <section className="py-24 lg:py-36 xl:py-44 relative z-10">
        <div className={SPACING.container}>
          <div className="text-center mb-16">
            <SectionTitle
              kicker="Héritage Millénaire"
              title="Château Lastours : la Mémoire des Siècles"
              subtitle="Notre domaine, guidé par la passion et le respect de la nature, cultive ces cépages rares en viticulture durable et certifiée HVE"
              align="center"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-20">
            {terroirData.stats.map((stat, index) => {
              return (
                <div key={index} className="text-center group">
                  <h3 className="text-lg font-light mb-6 text-slate-600 tracking-[0.1em] uppercase">{stat.label}</h3>
                  <p className="text-6xl lg:text-7xl xl:text-8xl font-serif text-slate-900 mb-6 font-light tracking-tight leading-none">{stat.value}</p>
                  <p className="text-base text-slate-700 font-light leading-relaxed">{stat.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section Cépages - Style panoramique */}
      <section className="relative z-10 mb-24 lg:mb-36 xl:mb-44">
        {/* Image panoramique pleine largeur */}
        <div className="relative h-[60vh] lg:h-[70vh] xl:h-[80vh] overflow-hidden">
          <img
            src={terroirData.cepages.image}
            alt="Cépages traditionnels gaillacois"
            className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-[3000ms]"
          />
          
          {/* Overlay gradient subtil */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          
          {/* Grain texture */}
          <div className="absolute inset-0 opacity-[0.03] texture-grain-fine">
          </div>

          {/* Texte en overlay - À droite */}
          <div className="absolute inset-0 flex items-end justify-end">
            <div className="p-8 lg:p-16 xl:p-20 max-w-2xl text-right">
              {/* Kicker */}
              <div className="mb-6">
                <span className="inline-block px-6 py-3 bg-white/10 backdrop-blur-md text-white text-xs font-bold tracking-[0.2em] uppercase border border-white/20">
                  Tradition
                </span>
              </div>
              
              {/* Titre */}
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-serif font-light text-white tracking-[0.02em] leading-[1.1] mb-8">
                {terroirData.cepages.title}
              </h2>
              
              {/* Corps de texte */}
              <p className="text-lg lg:text-xl leading-relaxed text-white/90 font-light tracking-wide max-w-xl">
                {terroirData.cepages.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Climat - Style panoramique */}
      <section className="relative z-10 mb-24 lg:mb-36 xl:mb-44">
        {/* Image panoramique pleine largeur */}
        <div className="relative h-[60vh] lg:h-[70vh] xl:h-[80vh] overflow-hidden">
          <img
            src={terroirData.climat.image}
            alt="Vignoble à l'heure bleue"
            className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-[3000ms]"
          />
          
          {/* Overlay gradient subtil */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          
          {/* Grain texture */}
          <div className="absolute inset-0 opacity-[0.03] texture-grain-fine">
          </div>

          {/* Texte en overlay - À gauche */}
          <div className="absolute inset-0 flex items-end justify-start">
            <div className="p-8 lg:p-16 xl:p-20 max-w-2xl text-left">
              {/* Kicker */}
              <div className="mb-6">
                <span className="inline-block px-6 py-3 bg-white/10 backdrop-blur-md text-white text-xs font-bold tracking-[0.2em] uppercase border border-white/20">
                  Climat
                </span>
              </div>
              
              {/* Titre */}
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-serif font-light text-white tracking-[0.02em] leading-[1.1] mb-8">
                {terroirData.climat.title}
              </h2>
              
              {/* Corps de texte */}
              <p className="text-lg lg:text-xl leading-relaxed text-white/90 font-light tracking-wide max-w-xl">
                {terroirData.climat.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Parcelles */}
      <section className="py-24 lg:py-36 xl:py-44 relative z-10">
        <div className={SPACING.container}>
          <div className="text-center mb-16">
            <SectionTitle
              kicker="Trois Terroirs"
              title="La Richesse de Nos Parcelles"
              subtitle="Sur nos trois terroirs - la rive droite, la rive gauche et le plateau cordais - chaque parcelle révèle son caractère unique"
              align="center"
            />
          </div>

          {/* Parcelles en format panoramique - Style Ruinart */}
          <div className="space-y-24 lg:space-y-36">
            {terroirData.parcelles.map((parcelle, index) => (
              <div key={parcelle.id} className="relative">
                {/* Image panoramique */}
                <div className="relative h-[50vh] lg:h-[60vh] overflow-hidden">
                  <img
                    src={parcelle.image}
                    alt={parcelle.title}
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-[3000ms]"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  
                  {/* Texte en overlay - Alternance gauche/droite */}
                  <div className={`absolute inset-0 flex items-end ${index % 2 === 0 ? "justify-start" : "justify-end"}`}>
                    <div className={`p-8 lg:p-12 xl:p-16 max-w-lg ${index % 2 === 0 ? "text-left" : "text-right"}`}>
                      <h3 className="text-3xl lg:text-4xl xl:text-5xl font-serif font-light text-white tracking-[0.02em] leading-[1.1] mb-6">
                        {parcelle.title}
                      </h3>
                      <p className="text-lg lg:text-xl leading-relaxed text-white/90 font-light tracking-wide mb-8">
                        {parcelle.description}
                      </p>
                      
                      {/* Détails en overlay */}
                      <div className="space-y-3 text-white/80">
                        <div className={`flex ${index % 2 === 0 ? "justify-start" : "justify-end"} gap-2`}>
                          <span className="text-sm font-light tracking-wide">Superficie:</span>
                          <span className="text-sm font-medium">{parcelle.superficie}</span>
                        </div>
                        <div className={`flex ${index % 2 === 0 ? "justify-start" : "justify-end"} gap-2`}>
                          <span className="text-sm font-light tracking-wide">Cépages:</span>
                          <span className="text-sm font-medium">{parcelle.cepages}</span>
                        </div>
                        <div className={`flex ${index % 2 === 0 ? "justify-start" : "justify-end"} gap-2`}>
                          <span className="text-sm font-light tracking-wide">Âge moyen:</span>
                          <span className="text-sm font-medium">{parcelle.age}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer local - Style Ruinart */}
      <section className="py-40 lg:py-52 xl:py-60 relative z-10 gradient-footer-premium">
        <div className={SPACING.container}>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
              {/* Texte CTA */}
              <div className="lg:col-span-7 text-center lg:text-left">
                <div className="space-y-8">
                  <div className="w-32 h-px bg-gradient-to-r from-transparent via-slate-500/60 to-transparent mx-auto lg:mx-0" />
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-slate-900 tracking-[0.02em] font-light leading-[1.1]">
                    Explorez Notre Terroir
                  </h3>
                  <p className="text-xl md:text-2xl leading-relaxed text-slate-600 font-light tracking-wide">
                    Découvrez par vous-même la richesse de notre terroir lors d'une visite guidée de nos parcelles.
                  </p>
                </div>
              </div>
              
              {/* CTA buttons */}
              <div className="lg:col-span-5 text-center lg:text-right space-y-4">
                <TransitionLink 
                  href="/reservation"
                  className="inline-flex items-center px-16 py-6 bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 text-white font-light text-lg tracking-wide transition-all duration-700 backdrop-blur-sm hover:scale-[1.02] shadow-2xl group w-full lg:w-auto justify-center lg:justify-start"
                >
                  Réserver une Visite
                </TransitionLink>
                <br />
                <TransitionLink 
                  href="/savoir-faire/vigne"
                  className="inline-flex items-center px-16 py-6 bg-transparent hover:bg-slate-100 border border-slate-400 hover:border-slate-600 text-slate-900 font-light text-lg tracking-wide transition-all duration-700 backdrop-blur-sm hover:scale-[1.02] shadow-2xl group w-full lg:w-auto justify-center lg:justify-start"
                >
                  Découvrir la Vigne
                </TransitionLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}