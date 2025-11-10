"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LazyImage } from "@/components/common/LazyImage"
import { cn } from "@/lib/utils"
import { Phone } from "lucide-react"

interface HeroEventProps {
  imageSrc: string
  title: string
  phoneHref?: string
  primaryCtaLabel?: string
  primaryCtaHref?: string
  className?: string
}

/**
 * Hero pour la page "Organiser votre événement"
 * - Aligné sous le menu sticky (zéro espace)
 * - Image full-bleed avec Next/Image
 * - CTA principal + bouton téléphone
 */
export function HeroEvent({
  imageSrc,
  title,
  phoneHref = "tel:+33563570709",
  primaryCtaLabel = "Simuler votre devis",
  primaryCtaHref = "/evenements/simuler-votre-devis",
  className
}: HeroEventProps) {
  return (
    <section 
      className={cn(
        "relative overflow-hidden",
        "min-h-[calc(100vh-80px)]", // 80px = hauteur header sticky
        "mt-0", // Zéro espace au-dessus pour alignement sous menu sticky
        className
      )}
      style={{ marginTop: 0 }}
    >
      {/* Image de fond full-bleed */}
      <div className="absolute inset-0 overflow-hidden rounded-b-[11px] lg:rounded-b-[18px]">
        <LazyImage
          src={imageSrc}
          alt={title}
          containerClassName="w-full h-full"
          className="w-full h-full object-cover object-center"
          fallbackSrc="/photos-web-lastours/vinification/capture-ameyric-prod.jpg"
          placeholder={
            <div className="absolute inset-0 bg-gradient-to-br from-muted via-muted/80 to-muted">
              <div className="absolute inset-0 grain-subtle opacity-20" />
            </div>
          }
        />
      </div>

      {/* Grain effect */}
      <div className="absolute inset-0 grain-heavy" />

      {/* Overlay pour la lisibilité */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Contenu */}
      <div className="relative z-20 flex items-center justify-center h-full">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white tracking-wider leading-tight">
              {title}
            </h1>

            {/* Ligne décorative */}
            <div className="flex items-center justify-center space-x-4 pt-6">
              <div className="h-px bg-gradient-to-r from-transparent via-white/50 to-transparent w-24"></div>
              <div className="w-2 h-2 bg-white/50 rounded-full"></div>
              <div className="h-px bg-gradient-to-r from-transparent via-white/50 to-transparent w-24"></div>
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                asChild 
                className="bg-accent hover:bg-accent/90 text-accent-foreground min-h-[44px] focus:ring-2 focus:ring-accent focus:ring-offset-2"
              >
                <Link href={primaryCtaHref}>
                  {primaryCtaLabel}
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                asChild 
                className="border-white text-white hover:bg-white hover:text-black min-h-[44px] focus:ring-2 focus:ring-white focus:ring-offset-2"
              >
                <Link href={phoneHref} aria-label="Appeler le Château Lastours">
                  <Phone className="mr-2 w-5 h-5" />
                  05 63 57 07 09
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

