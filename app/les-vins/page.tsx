import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ScrollAnimation, PremiumCardAnimation, CinematicTextAnimation } from "@/components/gsap/ScrollAnimations";
import { SectionReveal, ParallaxImage } from "@/components/gsap/CinematicEffects";
import { HeroBarrelsAnimation } from "@/components/gsap/HeroBarrelsAnimation";
import { gammes } from "@/lib/wines";

export const metadata: Metadata = {
  title: "Nos Cuvées | Collections d'Exception - Château Lastours",
  description: "Découvrez toutes nos cuvées de vins d'exception : Doméni, Opus, Méthode Traditionnelle, Poussin, Petrichor et Signatures."
};

export default function WinesPageSimple() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-amber-50 to-stone-100 text-slate-900 relative">
      {/* Grain overlay for cinematic effect */}
      <div 
        className="fixed inset-0 opacity-20 pointer-events-none texture-noise">
      </div>
      {/* Overlay subtil vin & terroir */}
      <div className="fixed inset-0 bg-gradient-to-r from-rose-100/10 via-amber-100/5 to-rose-100/10 pointer-events-none"></div>

      {/* Hero Section avec image header */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/page/nos-cuvee-ok/photo-entete-de-page-cuvees-blanc/vin-blanc-rouge-rose-bulles-gaillac-sud-ouest-france.jpg"
            alt="Vins du Château Lastours - Collections d'Exception"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        <div className="relative z-20 h-full flex items-center justify-center">
          <div className="text-center text-white px-4 lg:px-8 max-w-5xl mx-auto">
            <CinematicTextAnimation className="space-y-6" staggerDelay={0.15}>
              <div className="text-line">
                <p className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed opacity-95 text-shadow drop-shadow-lg">
                  Vivez l'émotion Lastours : des arômes captivants, des instants à partager, l'expression pure de notre art du vin
                </p>
              </div>
              <div className="text-line pt-6">
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto opacity-60"></div>
              </div>
            </CinematicTextAnimation>
          </div>
        </div>
      </section>

      {/* Gammes Section - Style chic sans encadrés blancs */}
      <section className="pt-0 pb-16 relative z-10">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Titre principal */}
          <ScrollAnimation animation="fadeIn" delay={0.1}>
            <div className="text-center mb-8 lg:mb-12">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-stone-900 tracking-wider mb-4">
                Toutes nos cuvées
              </h2>
              <div className="w-32 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent mx-auto"></div>
            </div>
          </ScrollAnimation>

          <div className="space-y-16 lg:space-y-24">
            {gammes.map((gamme, index) => {
              return (
                <div 
                  key={gamme.id} 
                  className="w-full flex flex-col items-center justify-center"
                >
                  {/* Titre de la gamme */}
                  <ScrollAnimation animation="slideUp" delay={0.2}>
                    <div className="text-center mb-8 lg:mb-12 w-full">
                      <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-stone-900 tracking-wider mb-3">
                        {gamme.title}
                      </h3>
                      <div className="w-24 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent mx-auto mb-4"></div>
                      <p className="text-sm md:text-base text-stone-700 leading-relaxed max-w-3xl mx-auto font-light italic">
                        {gamme.description}
                      </p>
                    </div>
                  </ScrollAnimation>
                  
                  {/* Cuvées - Centrées avec flexbox */}
                  <div className="w-full flex flex-wrap items-center justify-center gap-8 md:gap-10 lg:gap-12">
                    {gamme.cuvees.map((cuvee, cuveeIndex) => {
                      const isPoussinGamme = gamme.id === "poussin";
                      const isDomeniRose = cuvee.slug === "domeni-rose";
                      const shouldReduceSize = isPoussinGamme || isDomeniRose;
                      
                      return (
                        <PremiumCardAnimation key={cuvee.slug} index={index * 10 + cuveeIndex}>
                          <Link 
                            href={cuvee.route}
                            className="group/card flex flex-col items-center justify-center space-y-4 transition-all duration-500 hover:scale-105"
                          >
                            {cuvee.image && (
                              <div className="relative w-full flex items-center justify-center bg-transparent" style={{ minHeight: shouldReduceSize ? 'clamp(180px, 30vh, 240px)' : 'clamp(200px, 35vh, 280px)' }}>
                                <Image
                                  src={cuvee.image}
                                  alt={cuvee.title}
                                  width={shouldReduceSize ? 140 : 160}
                                  height={shouldReduceSize ? 315 : 360}
                                  className="object-contain object-center transition-all duration-500 group-hover/card:scale-110 group-hover/card:drop-shadow-2xl"
                                  style={{ 
                                    maxHeight: shouldReduceSize ? '88%' : '100%', 
                                    maxWidth: shouldReduceSize ? '88%' : '100%', 
                                    width: 'auto', 
                                    height: 'auto',
                                    filter: 'drop-shadow(0 10px 25px rgba(0,0,0,0.1))'
                                  }}
                                  unoptimized={true}
                                />
                              </div>
                            )}
                            <div className="text-center space-y-2">
                              <h4 className="text-lg md:text-xl lg:text-2xl font-serif font-semibold text-stone-900 group-hover/card:text-rose-900 transition-colors duration-300">
                                {cuvee.title}
                              </h4>
                              <span className="text-xs md:text-sm text-stone-600 font-light tracking-widest uppercase group-hover/card:text-rose-800 transition-colors duration-300 inline-flex items-center gap-2">
                                Découvrir
                                <svg className="w-4 h-4 transform group-hover/card:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                                </svg>
                              </span>
                            </div>
                          </Link>
                        </PremiumCardAnimation>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
     </div>
   );
 }
