"use client"

import { useEffect, useRef, ReactNode } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FloatingParticles } from './FloatingParticles'

interface HeroBarrelsAnimationProps {
  children: ReactNode
  className?: string
}

export function HeroBarrelsAnimation({ children, className = '' }: HeroBarrelsAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const container = containerRef.current
    const image = imageRef.current
    const overlay = overlayRef.current

    if (!container || !image || !overlay) return

    gsap.set(container, {
      opacity: 0,
      scale: 1.05,
      filter: 'brightness(0.75)'
    })

    gsap.set(image, {
      scale: 1.08,
      transformOrigin: 'center center'
    })

    gsap.set(overlay, {
      opacity: 0.35
    })

    const introTimeline = gsap.timeline({ defaults: { ease: 'power2.out' } })
      .to(container, {
        opacity: 1,
        scale: 1,
        filter: 'brightness(1)',
        duration: 1.2
      })
      .to(image, {
        scale: 1,
        duration: 1.6
      }, 0)

    const parallaxTween = gsap.to(image, {
      yPercent: -12,
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    })

    // Fonction pour obtenir la hauteur du header
    const getHeaderHeight = () => {
      const headerHeight = getComputedStyle(document.documentElement)
        .getPropertyValue('--header-height')
      return headerHeight ? parseInt(headerHeight) : 80
    }

    const overlayTween = gsap.to(overlay, {
      opacity: 0.95,
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        start: () => `top+=${getHeaderHeight()} top`,
        end: 'bottom top',
        scrub: true
      }
    })

    return () => {
      introTimeline.kill()
      parallaxTween.kill()
      overlayTween.kill()
    }
  }, [])

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Image héroïque avec fallback */}
      <img
        ref={imageRef}
        src="/page/nos-cuvee-ok/photo-entete-de-page-cuvees-blanc/vin-blanc-rouge-rose-bulles-gaillac-sud-ouest-france.jpg"
        alt="Vins du Château Lastours - Collections d'Exception"
        className="w-full h-full object-cover"
        style={{ 
          objectPosition: 'center center',
          filter: 'contrast(1.05) saturate(1.05) brightness(0.7)'
        }}
        onError={(e) => {
          // Fallback vers l'image de la cave si l'image principale n'est pas disponible
          const target = e.target as HTMLImageElement
          if (target.src.includes('Vin-Blanc-Rouge-Rosé-Bulles-Gaillac-Sud-Ouest-France.jpg')) {
            target.src = '/french-chateau-wine-cellar.png'
          }
        }}
      />
      
      {/* Overlay gradient */}
      <div 
        ref={overlayRef}
        className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80"
      />
      
      {/* Grain overlay */}
      <div 
        className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-25"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 600 600' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='headerGrain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.95' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23headerGrain)'/%3E%3C/svg%3E")`,
          backgroundSize: '160px 160px'
        }}
      />
      
      {/* Particules flottantes */}
      <FloatingParticles count={12} className="z-10" />
      
      {/* Contenu superposé */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        {children}
      </div>
    </div>
  )
}
