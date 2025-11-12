"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, MoveRight } from "lucide-react"
import { useRef } from "react"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { getLatestArticles } from "@/lib/news-data"
import { getUpcomingEvents } from "@/lib/events-data"

gsap.registerPlugin(ScrollTrigger)

export default function HomePage() {
  const container = useRef(null)
  const heroImage = useRef(null)
  const latestArticles = getLatestArticles(3)
  const upcomingEvents = getUpcomingEvents()
    .sort((a, b) => (a.date < b.date ? -1 : 1))
    .slice(0, 3)

  useGSAP(
    () => {
      // Hero Section Animations
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })
      tl.from(".hero-title", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
      })
        .from(
          ".hero-button",
          { y: 50, opacity: 0, duration: 1 },
          "-=0.8"
        )
        .fromTo(
          heroImage.current,
          { scale: 1.2, y: "-10%" },
          {
            scale: 1,
            y: "0%",
            duration: 2,
            ease: "power2.inOut",
          },
          "<"
        )

      // Parallax effect for Hero Image
      gsap.to(heroImage.current, {
        y: "20%",
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })

      // Animation élégante pour la section Vins
      const wineTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".section-wines",
          start: "top 75%",
          toggleActions: "play none none none",
        },
      })

      wineTimeline
        // Image fade in depuis la gauche
        .from(".wine-image", {
          x: -80,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
        })
        // Badge apparaît en douceur
        .from(
          ".wine-badge",
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.6"
        )
        // Titre glisse élégamment
        .from(
          ".wine-title",
          {
            y: 40,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
          },
          "-=0.4"
        )
        // Textes apparaissent l'un après l'autre
        .from(
          ".wine-text-1",
          {
            y: 30,
            opacity: 0,
            duration: 0.9,
            ease: "power2.out",
          },
          "-=0.5"
        )
        .from(
          ".wine-text-2",
          {
            y: 30,
            opacity: 0,
            duration: 0.9,
            ease: "power2.out",
          },
          "-=0.6"
        )
        // Bouton final
        .from(
          ".wine-button",
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.4"
        )

      // Section Animations on Scroll (pour les autres sections)
      const sections = gsap.utils.toArray("section:not(:first-child):not(.section-wines)")
      sections.forEach((section) => {
        gsap.from(section as gsap.DOMTarget, {
          opacity: 0,
          y: 100,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section as gsap.DOMTarget,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        })
      })
    },
    { scope: container }
  )

  return (
    <div ref={container} className="min-h-screen">
      {/* Hero Section - Commence directement en haut sans espace grâce à la marge négative */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden" style={{ marginTop: '-80px', paddingTop: '80px' }}>
        <div
          ref={heroImage}
          className="absolute inset-0 will-change-transform"
        >
          <Image
            src="/chateau-lastours-hero.jpg"
            alt="Vignoble du Château Lastours au coucher du soleil"
            fill
            priority
            className="object-cover object-center sm:object-[center_center] lg:object-[center_40%]"
            sizes="100vw"
          />
        </div>
        {/* Overlay sombre léger pour lisibilité */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        
        {/* Texture grain subtile */}
        <div className="absolute inset-0 opacity-[0.15] pointer-events-none grain"></div>

        {/* Contenu Hero - Responsive optimisé pour tous les écrans */}
        <div className="absolute bottom-[15vh] sm:bottom-[20vh] left-4 sm:left-8 lg:left-16 right-4 sm:right-8 z-10 text-left text-white">
          <div className="max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-[10rem] 2xl:text-[12rem] font-serif font-light mb-4 sm:mb-6 hero-title leading-[0.85] sm:leading-[0.8] tracking-tight">
              Vin d'aujourd'hui
            </h1>
            <p className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-serif font-light italic mb-8 sm:mb-12 lg:mb-16 hero-title opacity-90 tracking-tight leading-[0.9]">
              depuis 1579
            </p>
            <div className="hero-button">
              <Button
                size="default"
                variant="outline"
                asChild
                className="group bg-transparent text-white border-white hover:bg-white hover:text-black transition-all duration-300 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 text-xs sm:text-sm lg:text-base font-light tracking-[0.2em] sm:tracking-[0.25em] uppercase w-full sm:w-auto sm:min-w-[200px] lg:min-w-[280px]"
              >
                <Link href="/savoir-faire" aria-label="Découvrez notre savoir-faire">
                  <span className="hidden sm:inline">Découvrez notre savoir-faire</span>
                  <span className="sm:hidden">Découvrez</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator - Responsive */}
        <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 z-10">
          <div className="w-10 h-10 sm:w-12 sm:h-12 border border-white/40 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/10 transition-all duration-300">
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white rotate-90" />
          </div>
        </div>
      </section>


      {/* 1. NOS VINS - Image à gauche, Texte à droite avec animation */}
      <section className="relative py-8 lg:py-12 mt-6 lg:mt-8 bg-white overflow-hidden section-wines">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none grain"></div>
        
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Image à gauche - Taille réduite */}
            <div className="relative wine-image">
              <div className="relative h-[400px] lg:h-[550px] rounded-sm overflow-hidden shadow-2xl">
                <Image
                  src="/page/home-page-ok/bouteille-de-vin-rouge-tonneau-en-bois.jpg"
                  alt="Gamme de vins Pétrichor du Château Lastours"
                  fill
                  className="object-cover object-center sm:object-[center_center] lg:object-[center_30%] hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute inset-0 opacity-[0.12] pointer-events-none grain"></div>
              </div>
              {/* Ornement décoratif */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-[#D4AF37]/20 rounded-sm -z-10"></div>
            </div>

            {/* Texte à droite avec animations */}
            <div className="space-y-8 wine-content">
              <div className="inline-block wine-badge">
                <span className="text-xs sm:text-sm font-light tracking-[0.3em] uppercase text-[#8B7355] border border-[#8B7355]/30 px-4 py-2 rounded-sm bg-white/50 backdrop-blur-sm">
                  Collection
                </span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-light leading-[1.05] tracking-tight text-gray-900 wine-title">
                Nos Vins
              </h2>
              
              <div className="space-y-6">
                <p className="text-base lg:text-lg xl:text-xl leading-relaxed font-light text-gray-700 wine-text wine-text-1">
                  De notre gamme <span className="italic font-serif text-[#8B7355] font-light">Pétrichor</span>, 
                  signature de notre savoir-faire, à nos cuvées confidentielles, chaque vin exprime 
                  avec élégance la quintessence de notre terroir.
                </p>
                <p className="text-base lg:text-lg xl:text-xl leading-relaxed font-light text-gray-700 wine-text wine-text-2">
                  Rouges puissants et structurés, blancs fins et minéraux, rosés délicats et aromatiques : 
                  notre palette de vins reflète la diversité et la richesse de nos parcelles d'exception.
                </p>
              </div>
              
              <div className="pt-4 wine-button">
                <Button
                  variant="outline"
                  asChild
                  className="group border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 px-8 py-6 text-sm tracking-[0.25em] uppercase font-light"
                >
                  <Link href="/les-vins">
                    Découvrir nos vins
                    <MoveRight className="ml-3 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. VISITER LE CHÂTEAU - PANORAMIQUE */}
      <section className="relative h-[75vh] lg:h-[90vh] overflow-hidden mt-6 lg:mt-8">
        <div className="absolute inset-0">
          <Image
            src="/page/visite-ok/jardins-a-la-francaise-buis-chateau-lastours-gaillac-france.jpg"
            alt="Château Lastours côté jardin"
            fill
            className="object-cover object-center sm:object-[center_center] lg:object-[center_40%] hover:scale-105 transition-transform duration-700"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
          <div className="absolute inset-0 opacity-[0.12] pointer-events-none grain"></div>
        </div>

        {/* Texte superposé - Position CENTRÉE */}
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <div className="inline-block mb-6">
                <span className="text-xs sm:text-sm font-light tracking-[0.3em] uppercase text-[#D4AF37] border border-[#D4AF37]/40 px-4 py-2 rounded-sm bg-black/30 backdrop-blur-sm">
                  Découvrir
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-8xl font-serif font-light leading-[1.05] tracking-tight text-white mb-6 lg:mb-8">
                Visiter le Château
              </h2>
              <div className="space-y-5 text-white/90 mb-10 max-w-3xl mx-auto">
                <p className="text-base lg:text-lg xl:text-xl leading-relaxed font-light">
                  Niché au cœur de l'appellation <span className="italic font-serif text-[#D4AF37]">Corbières Boutenac</span>, 
                  le Château Lastours se dévoile dans toute sa splendeur. Architecture du XVIe siècle et jardins 
                  à la française composent un écrin de sérénité où le temps semble suspendu.
                </p>
                <p className="text-base lg:text-lg xl:text-xl leading-relaxed font-light">
                  Venez découvrir nos chais, notre domaine et nos jardins lors d'une visite guidée qui vous 
                  plongera au cœur de notre patrimoine viticole et architectural.
                </p>
              </div>
              <div>
                <Button
                  variant="outline"
                  asChild
                  className="group bg-white/10 backdrop-blur-md border-white hover:bg-white hover:text-gray-900 transition-all duration-300 px-8 py-6 text-sm tracking-[0.25em] uppercase font-light text-white"
                >
                  <Link href="/reservation">
                    Réserver une visite
                    <MoveRight className="ml-3 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. UNE HISTOIRE À PARTAGER - PANORAMIQUE */}
      <section className="relative h-[70vh] lg:h-[85vh] overflow-hidden mt-6 lg:mt-8">
        <div className="absolute inset-0">
          <Image
            src="/page/la-vigne-ok/vignes-hiver-chapelle-saint-vincent-d-avens-gaillac-france.jpeg"
            alt="Chapelle et vignes du Château Lastours"
            fill
            className="object-cover object-center sm:object-[center_center] lg:object-[center_50%] hover:scale-105 transition-transform duration-700"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/40 to-transparent"></div>
          <div className="absolute inset-0 opacity-[0.12] pointer-events-none grain"></div>
        </div>

        {/* Texte superposé - Position DROITE */}
        <div className="relative h-full flex items-center justify-end">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-2xl ml-auto">
              <div className="inline-block mb-6">
                <span className="text-xs sm:text-sm font-light tracking-[0.3em] uppercase text-[#D4AF37] border border-[#D4AF37]/40 px-4 py-2 rounded-sm bg-black/30 backdrop-blur-sm">
                  Patrimoine
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-light leading-[1.05] tracking-tight text-white mb-6 lg:mb-8">
                Une Histoire à Partager
              </h2>
              <div className="space-y-5 text-white/90 mb-8">
                <p className="text-base lg:text-lg xl:text-xl leading-relaxed font-light">
                  Depuis 1579, chaque pierre raconte une histoire, celle d'un terroir exceptionnel cultivé 
                  avec passion, celle d'un patrimoine vivant où tradition et excellence se rencontrent.
                </p>
                <p className="text-base lg:text-lg xl:text-xl leading-relaxed font-light">
                  De la chapelle ancestrale dominant le vignoble aux rangées de vignes méticuleusement 
                  entretenues, chaque parcelle témoigne de notre engagement pour un vin d'exception.
                </p>
              </div>
              <div>
                <Button
                  variant="outline"
                  asChild
                  className="group bg-white/10 backdrop-blur-md border-white hover:bg-white hover:text-gray-900 transition-all duration-300 px-8 py-6 text-sm tracking-[0.25em] uppercase font-light text-white"
                >
                  <Link href="/domaine/histoire">
                    Découvrir notre histoire
                    <MoveRight className="ml-3 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. L'ÉLÉGANCE D'UN ART DE VIVRE - PANORAMIQUE */}
      <section className="relative h-[70vh] lg:h-[85vh] overflow-hidden mt-6 lg:mt-8 mb-6 lg:mb-8">
        <div className="absolute inset-0">
          <Image
            src="/page/home-page-ok/repas-mariage-longue-table-en-bois-chateau-lastours.jpg"
            alt="Mariage au Château Lastours"
            fill
            className="object-cover object-center sm:object-[center_center] lg:object-[center_45%] hover:scale-105 transition-transform duration-700"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>
          <div className="absolute inset-0 opacity-[0.12] pointer-events-none grain"></div>
        </div>

        {/* Texte superposé - Position BAS */}
        <div className="relative h-full flex items-end pb-12 lg:pb-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl">
              <div className="inline-block mb-6">
                <span className="text-xs sm:text-sm font-light tracking-[0.3em] uppercase text-[#D4AF37] border border-[#D4AF37]/40 px-4 py-2 rounded-sm bg-black/30 backdrop-blur-sm">
                  Événements
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-light leading-[1.05] tracking-tight text-white mb-6 lg:mb-8">
                L'Élégance d'un Art de Vivre
              </h2>
              <div className="grid lg:grid-cols-2 gap-8 mb-8">
                <p className="text-base lg:text-lg xl:text-xl leading-relaxed font-light text-white/90">
                  Le Château Lastours ouvre ses portes pour célébrer vos instants précieux. 
                  Mariages, réceptions privées, séminaires d'entreprise : notre domaine se transforme 
                  en écrin pour vos événements les plus mémorables.
                </p>
                <p className="text-base lg:text-lg xl:text-xl leading-relaxed font-light text-white/90">
                  Dans un cadre enchanteur alliant patrimoine historique et nature préservée, 
                  notre équipe vous accompagne pour créer une expérience sur mesure, 
                  où chaque détail révèle l'art de vivre à la française.
                </p>
              </div>
              <div>
                <Button
                  variant="outline"
                  asChild
                  className="group bg-white/10 backdrop-blur-md border-white hover:bg-white hover:text-gray-900 transition-all duration-300 px-8 py-6 text-sm tracking-[0.25em] uppercase font-light text-white"
                >
                  <Link href="/evenements/organiser">
                    Organiser votre événement
                    <MoveRight className="ml-3 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
