"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Mail, Phone, Users, Award, Heart } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

// Composant Image simple pour les chemins avec espaces
function TeamImage({ 
  src, 
  alt, 
  className = "",
  containerClassName = "",
  fill = false,
  objectFit = "cover",
  objectPosition = "center center",
  overflow = "hidden"
}: {
  src: string
  alt: string
  className?: string
  containerClassName?: string
  fill?: boolean
  objectFit?: "cover" | "contain"
  objectPosition?: string
  overflow?: "hidden" | "visible"
}) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  return (
    <div className={cn("relative", overflow === "hidden" ? "overflow-hidden" : "overflow-visible", containerClassName)}>
      {isLoading && (
        <div className="absolute inset-0 bg-muted animate-pulse" />
      )}
      <img
        src={src}
        alt={alt}
        style={{
          objectFit: objectFit,
          objectPosition: objectPosition
        }}
        className={cn(
          fill ? "w-full h-full" : "",
          "transition-opacity duration-300",
          isLoading ? "opacity-0" : "opacity-100",
          hasError && "grayscale",
          className
        )}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setHasError(true)
          setIsLoading(false)
        }}
        loading={fill ? "eager" : "lazy"}
        decoding="async"
      />
    </div>
  )
}

export default function TeamPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[700px] md:min-h-[900px] lg:min-h-[1000px] flex items-center justify-center">
        <div className="absolute inset-0 flex items-center justify-center">
          <TeamImage
            src="/page/page-team/photos-page-team/photo-de-groupe.jpeg"
            alt="Équipe du Château Lastours"
            fill
            objectFit="contain"
            overflow="visible"
            containerClassName="w-full h-full"
            className="w-full h-full"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-display mb-4 text-balance">Notre Équipe</h1>
          <p className="text-xl md:text-2xl text-pretty opacity-90">Passion et expertise au service de l'excellence</p>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display mb-6">Direction</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              La famille de Faramond perpétue la tradition avec Louis, qui représente la nouvelle génération passionnée du domaine
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl p-8 md:p-12 overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-xl">
                    <TeamImage
                      src="/page/page-team/photos-page-team/louis.jpeg"
                      alt="Louis de Faramond"
                      fill
                      objectFit="contain"
                      objectPosition="center 30%"
                      containerClassName="absolute inset-0"
                      className="w-full h-full"
                    />
                  </div>
                </div>
                <div className="order-1 md:order-2 text-center md:text-left">
                  <h3 className="text-3xl md:text-4xl font-display mb-4">Louis de Faramond</h3>
                  <p className="text-xl text-accent font-medium mb-6">Vigneron & Nouvelle Génération</p>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p className="text-lg">
                      Louis représente la nouvelle génération de la famille de Faramond. Il fait preuve de courage et 
                      d'abnégation pour le succès que connaît aujourd'hui le château.
                    </p>
                    <p className="text-lg">
                      Louis apporte un regard moderne sur la viticulture tout en respectant les traditions familiales. Il
                      participe activement à la transformation de l'espace de production en espace d'accueil agréable et au
                      développement de l'œnotourisme.
                    </p>
                  </div>
                  <div className="mt-8">
                    <Button variant="outline" size="lg">
                      <Mail className="w-5 h-5 mr-2" />
                      louis@chateau-lastours.com
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display mb-6">L'Équipe</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Des professionnels passionnés qui contribuent chaque jour à l'excellence de nos vins
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Adrien */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-border/50 hover:shadow-lg transition-shadow duration-300">
              <div className="relative aspect-[3/4]">
                <TeamImage
                  src="/page/page-team/photos-page-team/adrien.jpeg"
                  alt="Adrien"
                  fill
                  objectFit="contain"
                  objectPosition="center 30%"
                  containerClassName="absolute inset-0"
                  className="w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-display mb-2">Adrien</h3>
                <p className="text-accent font-semibold mb-3">Membre de l'Équipe</p>
                <p className="text-muted-foreground leading-relaxed">
                  Passionné par la viticulture et le savoir-faire traditionnel, Adrien contribue à l'excellence de nos vins au quotidien.
                </p>
              </div>
            </div>

            {/* Caroline */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-border/50 hover:shadow-lg transition-shadow duration-300">
              <div className="relative aspect-[3/4]">
                <TeamImage
                  src="/page/page-team/photos-page-team/caroline.jpeg"
                  alt="Caroline"
                  fill
                  objectFit="contain"
                  objectPosition="center 30%"
                  containerClassName="absolute inset-0"
                  className="w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-display mb-2">Caroline</h3>
                <p className="text-accent font-semibold mb-3">Membre de l'Équipe</p>
                <p className="text-muted-foreground leading-relaxed">
                  Caroline apporte son expertise et sa passion pour offrir la meilleure expérience à nos visiteurs et clients.
                </p>
              </div>
            </div>

            {/* Eva */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-border/50 hover:shadow-lg transition-shadow duration-300">
              <div className="relative aspect-[3/4]">
                <TeamImage
                  src="/page/page-team/photos-page-team/eva.jpeg"
                  alt="Eva"
                  fill
                  objectFit="contain"
                  objectPosition="center 30%"
                  containerClassName="absolute inset-0"
                  className="w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-display mb-2">Eva</h3>
                <p className="text-accent font-semibold mb-3">Membre de l'Équipe</p>
                <p className="text-muted-foreground leading-relaxed">
                  Eva met son savoir-faire et son enthousiasme au service de la qualité et de l'innovation viticole.
                </p>
              </div>
            </div>

            {/* François */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-border/50 hover:shadow-lg transition-shadow duration-300">
              <div className="relative aspect-[3/4]">
                <TeamImage
                  src="/page/page-team/photos-page-team/francois.jpeg"
                  alt="François"
                  fill
                  objectFit="contain"
                  objectPosition="center 30%"
                  containerClassName="absolute inset-0"
                  className="w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-display mb-2">François</h3>
                <p className="text-accent font-semibold mb-3">Membre de l'Équipe</p>
                <p className="text-muted-foreground leading-relaxed">
                  Avec son expérience et sa passion, François participe activement à l'élaboration de nos cuvées d'exception.
                </p>
              </div>
            </div>

            {/* Nicolas */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-border/50 hover:shadow-lg transition-shadow duration-300">
              <div className="relative aspect-[3/4]">
                <TeamImage
                  src="/page/page-team/photos-page-team/nicolas.jpeg"
                  alt="Nicolas"
                  fill
                  objectFit="contain"
                  objectPosition="center 30%"
                  containerClassName="absolute inset-0"
                  className="w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-display mb-2">Nicolas</h3>
                <p className="text-accent font-semibold mb-3">Membre de l'Équipe</p>
                <p className="text-muted-foreground leading-relaxed">
                  Nicolas apporte son expertise technique et son dévouement pour garantir l'excellence de chaque étape de production.
                </p>
              </div>
            </div>

            {/* Pauline */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-border/50 hover:shadow-lg transition-shadow duration-300">
              <div className="relative aspect-[3/4]">
                <TeamImage
                  src="/page/page-team/photos-page-team/pauline.jpeg"
                  alt="Pauline"
                  fill
                  objectFit="contain"
                  objectPosition="center 30%"
                  containerClassName="absolute inset-0"
                  className="w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-display mb-2">Pauline</h3>
                <p className="text-accent font-semibold mb-3">Membre de l'Équipe</p>
                <p className="text-muted-foreground leading-relaxed">
                  Pauline contribue avec passion et professionnalisme à la renommée et au développement du domaine.
                </p>
              </div>
            </div>

            {/* Stéphane */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-border/50 hover:shadow-lg transition-shadow duration-300 md:col-span-2 lg:col-span-1">
              <div className="relative aspect-[3/4]">
                <TeamImage
                  src="/page/page-team/photos-page-team/stephane.jpeg"
                  alt="Stéphane"
                  fill
                  objectFit="contain"
                  objectPosition="center 30%"
                  containerClassName="absolute inset-0"
                  className="w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-display mb-2">Stéphane</h3>
                <p className="text-accent font-semibold mb-3">Membre de l'Équipe</p>
                <p className="text-muted-foreground leading-relaxed">
                  Stéphane met son savoir-faire et son expertise au service de la tradition et de l'innovation viticole.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display mb-6">Notre Philosophie</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              L'accueil simple et chaleureux du Château Lastours, marqué par la convivialité
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <blockquote className="text-2xl md:text-3xl font-display text-center italic text-balance mb-8">
              "Notre accueil simple et chaleureux est avant tout marqué par la convivialité et la volonté de concilier
              modernité et tradition dans ce lieu riche d'histoire."
            </blockquote>
            <cite className="block text-center text-lg text-muted-foreground">— Famille de Faramond</cite>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-display mb-6">Rencontrez Notre Équipe</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
              Venez découvrir notre passion et notre savoir-faire lors d'une visite personnalisée du domaine
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/reservation">
                  Réserver une Visite
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline">
                <Phone className="mr-2 w-5 h-5" />
                +33 4 67 89 12 34
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
