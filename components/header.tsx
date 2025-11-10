"use client"

import { useEffect, useRef, useState } from "react"
import type { FocusEvent, MouseEvent } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"
import { useIsMobile, useDeviceType } from "@/hooks/use-mobile"
import Image from "next/image"
import { getCuveesByColor } from "@/lib/wines"
import { UserMenu } from "@/components/user-menu"
import { useAuth } from "@/lib/auth-context"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null)
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null)
  const headerRef = useRef<HTMLElement | null>(null)
  const navRef = useRef<HTMLDivElement | null>(null)
  const megaMenuRef = useRef<HTMLDivElement | null>(null)
  const mobileMenuRef = useRef<HTMLDivElement | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const isMobile = useIsMobile()
  const deviceType = useDeviceType()
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const pathname = usePathname()
  const isHomePage = pathname === "/"
  
  // Obtenir l'état d'authentification
  const { state: authState } = useAuth()
  
  // Obtenir les cuvées groupées par couleur
  const { byColor, specialites } = getCuveesByColor()
  
  // Ne pas afficher le mega menu sur mobile/tablette
  const isDesktop = deviceType === 'desktop'
  
  // Couleur du texte de navigation - Toujours noir pour visibilité constante
  const navTextColor = "text-slate-800"
  
  // Couleur pour les icônes - Toujours sombre pour visibilité constante
  const iconColor = "text-slate-800"
  
  const mobileMenuBg = "bg-white/98 backdrop-blur-md"

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Calculer et mettre à jour la hauteur du header pour scroll-padding
  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        const height = headerRef.current.offsetHeight
        document.documentElement.style.setProperty('--header-height', `${height}px`)
      }
    }
    
    // Mise à jour initiale
    updateHeaderHeight()
    
    // Mise à jour au resize
    window.addEventListener('resize', updateHeaderHeight)
    
    // Observer les changements de taille (si le menu mobile s'ouvre/ferme)
    const resizeObserver = new ResizeObserver(updateHeaderHeight)
    if (headerRef.current) {
      resizeObserver.observe(headerRef.current)
    }
    
    return () => {
      window.removeEventListener('resize', updateHeaderHeight)
      resizeObserver.disconnect()
    }
  }, [isMenuOpen])

  // Nettoyage des timeouts au démontage du composant
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current)
      }
    }
  }, [])

  // Fermer le menu mobile automatiquement
  useEffect(() => {
    // Fermer le menu quand on passe en desktop
    if (isDesktop && isMenuOpen) {
      setIsMenuOpen(false)
      setMobileSubmenu(null)
    }
    // Fermer le mega menu quand on passe en mobile/tablette
    if (!isDesktop && hoveredMenu) {
      setHoveredMenu(null)
    }
  }, [isDesktop, isMenuOpen, hoveredMenu])

  // Gestion des événements pour fermer le menu
  useEffect(() => {
    if (!isMenuOpen) return

    // Bloquer le scroll du body
    document.body.style.overflow = 'hidden'

    // Fonction pour fermer le menu
    const closeMenu = () => {
      setIsMenuOpen(false)
      setMobileSubmenu(null)
    }

    // Fermer avec Escape
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMenu()
      }
    }

    // Fermer au clic extérieur
    const handleClickOutside = (event: Event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        closeMenu()
      }
    }

    // Ajouter les événements
    document.addEventListener('keydown', handleEscape)
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('touchstart', handleClickOutside)

    // Cleanup
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleEscape)
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }
  }, [isMenuOpen])

  const openMenu = (key: string) => {
    // Annuler tout timeout de fermeture en cours
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
      hoverTimeoutRef.current = null
    }
    setHoveredMenu(key)
  }

  const closeMenuWithDelay = (delay: number = 150) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
    }
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredMenu(null)
      hoverTimeoutRef.current = null
    }, delay)
  }

  const closeMenuImmediately = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
      hoverTimeoutRef.current = null
    }
    setHoveredMenu(null)
  }

  // Fonction helper pour fermer le menu mobile
  const closeMobileMenu = () => {
    setIsMenuOpen(false)
    setMobileSubmenu(null)
  }

  const handleNavMouseLeave = (event: MouseEvent<HTMLDivElement>) => {
    try {
      const nextTarget = event.relatedTarget as Node | null
      // Vérifier que nextTarget est un Node valide et que les refs existent avant d'utiliser contains
      if (nextTarget && 
          nextTarget.nodeType === Node.ELEMENT_NODE && 
          megaMenuRef.current && 
          megaMenuRef.current.contains(nextTarget)) {
        return
      }
    } catch (error) {
      // Ignorer les erreurs si relatedTarget n'est pas valide
      console.debug('handleNavMouseLeave error:', error)
    }
    // Fermer avec un délai pour permettre la transition vers le mega-menu
    closeMenuWithDelay(100)
  }

  const handleMegaMenuMouseLeave = (event: MouseEvent<HTMLDivElement>) => {
    try {
      const nextTarget = event.relatedTarget as Node | null
      // Vérifier que nextTarget est un Node valide et que les refs existent avant d'utiliser contains
      if (nextTarget && 
          nextTarget.nodeType === Node.ELEMENT_NODE && 
          navRef.current && 
          navRef.current.contains(nextTarget)) {
        return
      }
    } catch (error) {
      // Ignorer les erreurs si relatedTarget n'est pas valide
      console.debug('handleMegaMenuMouseLeave error:', error)
    }
    // Fermer immédiatement si on quitte complètement la zone
    closeMenuWithDelay(50)
  }

  const handleMenuMouseEnter = () => {
    // Annuler la fermeture si on revient sur le menu
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
      hoverTimeoutRef.current = null
    }
  }

  const handleTriggerBlur = (event: FocusEvent<HTMLButtonElement>) => {
    const nextTarget = event.relatedTarget as Node | null
    if (!nextTarget) {
      closeMenuWithDelay(200)
      return
    }

    // Vérifier que nextTarget est un Node valide et que les refs existent avant d'utiliser contains
    if (nextTarget.nodeType === Node.ELEMENT_NODE && 
        navRef.current && 
        megaMenuRef.current &&
        (navRef.current.contains(nextTarget) || megaMenuRef.current.contains(nextTarget))) {
      return
    }

    closeMenuWithDelay(200)
  }

  const handleMegaMenuBlur = (event: FocusEvent<HTMLDivElement>) => {
    const nextTarget = event.relatedTarget as Node | null

    // Vérifier que nextTarget est un Node valide et que les refs existent avant d'utiliser contains
    if (nextTarget && 
        nextTarget.nodeType === Node.ELEMENT_NODE && 
        megaMenuRef.current && 
        navRef.current &&
        (megaMenuRef.current.contains(nextTarget) || navRef.current.contains(nextTarget))) {
      return
    }

    closeMenuWithDelay(200)
  }

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-700 ${
          scrolled 
            ? "bg-white/98 backdrop-blur-md border-b border-gray-200/50 shadow-lg" 
            : "bg-white/95 backdrop-blur-sm border-b border-gray-200/30 shadow-sm"
        }`}
      >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20 relative">
          {/* Left Navigation - Desktop uniquement */}
          <nav 
            ref={navRef}
            className="hidden xl:flex items-center space-x-6 flex-1"
            onMouseLeave={handleNavMouseLeave}
          >
            <div className="relative">
              <button 
                className={`flex items-center space-x-1 transition-all duration-300 text-sm xl:text-base font-medium tracking-wide ${navTextColor} hover:text-wine-gold group py-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-wine-gold focus:ring-offset-2 rounded`}
                type="button"
                aria-haspopup="true"
                {...(hoveredMenu === 'domaine' ? { "aria-expanded": "true" } : { "aria-expanded": "false" })}
                onMouseEnter={() => openMenu('domaine')}
                onFocus={() => openMenu('domaine')}
                onClick={() => hoveredMenu === 'domaine' ? closeMenuImmediately() : openMenu('domaine')}
                onBlur={handleTriggerBlur}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    hoveredMenu === 'domaine' ? closeMenuImmediately() : openMenu('domaine')
                  }
                  if (e.key === 'Escape') {
                    closeMenuImmediately()
                  }
                }}
              >
                <span>Notre Domaine</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${iconColor} ${hoveredMenu === 'domaine' ? 'rotate-180' : ''}`} />
              </button>
            </div>

            <div className="relative">
              <button 
                className={`flex items-center space-x-1 transition-all duration-300 text-sm xl:text-base font-medium tracking-wide ${navTextColor} hover:text-wine-gold group py-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-wine-gold focus:ring-offset-2 rounded`}
                type="button"
                aria-haspopup="true"
                {...(hoveredMenu === 'savoir-faire' ? { "aria-expanded": "true" } : { "aria-expanded": "false" })}
                onMouseEnter={() => openMenu('savoir-faire')}
                onFocus={() => openMenu('savoir-faire')}
                onClick={() => hoveredMenu === 'savoir-faire' ? closeMenuImmediately() : openMenu('savoir-faire')}
                onBlur={handleTriggerBlur}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    hoveredMenu === 'savoir-faire' ? closeMenuImmediately() : openMenu('savoir-faire')
                  }
                  if (e.key === 'Escape') {
                    closeMenuImmediately()
                  }
                }}
              >
                <span>Notre savoir-faire</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${iconColor} ${hoveredMenu === 'savoir-faire' ? 'rotate-180' : ''}`} />
              </button>
            </div>

            <div className="relative">
              <button 
                className={`flex items-center space-x-1 transition-all duration-300 text-sm xl:text-base font-medium tracking-wide ${navTextColor} hover:text-wine-gold group py-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-wine-gold focus:ring-offset-2 rounded`}
                type="button"
                aria-haspopup="true"
                {...(hoveredMenu === 'vins' ? { "aria-expanded": "true" } : { "aria-expanded": "false" })}
                onMouseEnter={() => openMenu('vins')}
                onFocus={() => openMenu('vins')}
                onClick={() => hoveredMenu === 'vins' ? closeMenuImmediately() : openMenu('vins')}
                onBlur={handleTriggerBlur}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    hoveredMenu === 'vins' ? closeMenuImmediately() : openMenu('vins')
                  }
                  if (e.key === 'Escape') {
                    closeMenuImmediately()
                  }
                }}
              >
                <span>Nos vins</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${iconColor} ${hoveredMenu === 'vins' ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </nav>
          
          {/* Logo centré */}
          <div className="flex-shrink-0 mx-4 lg:mx-6">
            <Link href="/" className="flex items-center">
              <Image
                src="/PHOTOS-WEB-LASTOURS/LOGO/logo-chateau-lastours.jpg"
                alt="Château Lastours"
                width={60}
                height={50}
                priority
                className="transition-all duration-300 opacity-100 hover:scale-105 object-contain lg:w-[70px] lg:h-[58px]"
              />
            </Link>
          </div>

          {/* Right Navigation & Actions - Desktop uniquement */}
          <div className="hidden xl:flex items-center space-x-6 flex-1 justify-end">
            <div className="relative">
              <button 
                className={`flex items-center space-x-1 transition-all duration-300 text-sm xl:text-base font-medium tracking-wide ${navTextColor} hover:text-wine-gold group py-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-wine-gold focus:ring-offset-2 rounded`}
                type="button"
                aria-haspopup="true"
                {...(hoveredMenu === 'experiences' ? { "aria-expanded": "true" } : { "aria-expanded": "false" })}
                onMouseEnter={() => openMenu('experiences')}
                onFocus={() => openMenu('experiences')}
                onClick={() => hoveredMenu === 'experiences' ? closeMenuImmediately() : openMenu('experiences')}
                onBlur={handleTriggerBlur}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    hoveredMenu === 'experiences' ? closeMenuImmediately() : openMenu('experiences')
                  }
                  if (e.key === 'Escape') {
                    closeMenuImmediately()
                  }
                }}
              >
                <span>Expériences</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${iconColor} ${hoveredMenu === 'experiences' ? 'rotate-180' : ''}`} />
              </button>
            </div>

            <div className="relative">
              <button 
                className={`flex items-center space-x-1 transition-all duration-300 text-sm xl:text-base font-medium tracking-wide ${navTextColor} hover:text-wine-gold group py-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-wine-gold focus:ring-offset-2 rounded`}
                type="button"
                aria-haspopup="true"
                {...(hoveredMenu === 'partagez' ? { "aria-expanded": "true" } : { "aria-expanded": "false" })}
                onMouseEnter={() => openMenu('partagez')}
                onFocus={() => openMenu('partagez')}
                onClick={() => hoveredMenu === 'partagez' ? closeMenuImmediately() : openMenu('partagez')}
                onBlur={handleTriggerBlur}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    hoveredMenu === 'partagez' ? closeMenuImmediately() : openMenu('partagez')
                  }
                  if (e.key === 'Escape') {
                    closeMenuImmediately()
                  }
                }}
              >
                <span>Partagez notre passion</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${iconColor} ${hoveredMenu === 'partagez' ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {/* Lien Nous contacter - Desktop */}
            <Link 
              href="/contact"
              className={`transition-all duration-300 text-sm xl:text-base font-medium tracking-wide ${navTextColor} hover:text-wine-gold py-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-wine-gold focus:ring-offset-2 rounded`}
            >
              Nous contacter
            </Link>

            {/* Menu utilisateur - visible quand connecté */}
            {authState.isAuthenticated && (
              <div className="flex items-center">
                <UserMenu />
              </div>
            )}
          </div>

          {/* Burger Menu Button - Mobile et Tablette */}
          <div className="xl:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 ${navTextColor} hover:bg-black/10 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-wine-gold focus:ring-offset-2`}
              aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              {...(isMenuOpen ? { "aria-expanded": "true" } : { "aria-expanded": "false" })}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? <X className={`w-6 h-6 ${iconColor}`} /> : <Menu className={`w-6 h-6 ${iconColor}`} />}
            </button>
          </div>
        </div>

        {/* Mobile/Tablette Menu */}
        {isMenuOpen && (
          <div 
            id="mobile-menu"
            ref={mobileMenuRef}
            className="xl:hidden py-4 border-t border-gray-200 bg-white/98 backdrop-blur-md max-h-[85vh] overflow-y-auto animate-in slide-in-from-top-2 duration-300"
            role="navigation"
            aria-label="Menu de navigation mobile"
          >
            <nav className="flex flex-col space-y-2">
              {/* Le Domaine */}
              <div>
                <button
                  onClick={() => setMobileSubmenu(mobileSubmenu === 'domaine' ? null : 'domaine')}
                  className="flex items-center justify-between w-full px-4 py-3 text-left font-medium text-slate-800 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <span>Notre Domaine</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileSubmenu === 'domaine' ? 'rotate-180' : ''}`} />
                </button>
                {mobileSubmenu === 'domaine' && (
                  <div className="ml-4 mt-2 space-y-1">
                    <div className="px-4 py-2 text-xs font-semibold text-slate-500 uppercase tracking-wide">Notre héritage</div>
                    <Link href="/domaine/histoire" className="block px-6 py-2 text-sm text-slate-600 hover:text-wine-gold hover:bg-gray-50 rounded-md transition-colors min-h-[44px] flex items-center" onClick={closeMobileMenu}>
                      Notre histoire
                    </Link>
                    <Link href="/domaine/team" className="block px-6 py-2 text-sm text-slate-600 hover:text-wine-gold hover:bg-gray-50 rounded-md transition-colors min-h-[44px] flex items-center" onClick={closeMobileMenu}>
                      Notre équipe
                    </Link>
                    <Link href="/domaine/engagement" className="block px-6 py-2 text-sm text-slate-600 hover:text-wine-gold hover:bg-gray-50 rounded-md transition-colors min-h-[44px] flex items-center" onClick={closeMobileMenu}>
                      Nos engagements
                    </Link>
                    <div className="px-4 py-2 text-xs font-semibold text-slate-500 uppercase tracking-wide mt-2">Notre terroir</div>
                    <Link href="/notre-vignoble" className="block px-6 py-2 text-sm text-slate-600 hover:text-wine-gold hover:bg-gray-50 rounded-md transition-colors min-h-[44px] flex items-center" onClick={closeMobileMenu}>
                      Notre vignoble
                    </Link>
                    <div className="px-4 py-2 text-xs font-semibold text-slate-500 uppercase tracking-wide mt-2">Notre actualité</div>
                    <Link href="/actualites" className="block px-6 py-2 text-sm text-slate-600 hover:text-wine-gold hover:bg-gray-50 rounded-md transition-colors min-h-[44px] flex items-center" onClick={closeMobileMenu}>
                      Nos actualités
                    </Link>
                    <Link href="/presse" className="block px-6 py-2 text-sm text-slate-600 hover:text-wine-gold hover:bg-gray-50 rounded-md transition-colors min-h-[44px] flex items-center" onClick={closeMobileMenu}>
                      Espace presse
                    </Link>
                  </div>
                )}
              </div>

              {/* Savoir-Faire */}
              <div>
                <button
                  onClick={() => setMobileSubmenu(mobileSubmenu === 'savoir-faire' ? null : 'savoir-faire')}
                  className="flex items-center justify-between w-full px-4 py-3 text-left font-medium text-slate-800 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <span>Notre savoir-faire</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileSubmenu === 'savoir-faire' ? 'rotate-180' : ''}`} />
                </button>
                {mobileSubmenu === 'savoir-faire' && (
                  <div className="ml-4 mt-2 space-y-1">
                    <Link href="/le-cycle-de-la-vigne" className="block px-4 py-2 text-sm text-slate-600 hover:text-wine-gold hover:bg-gray-50 rounded-md transition-colors min-h-[44px] flex items-center" onClick={closeMobileMenu}>
                      Le cycle de la vigne
                    </Link>
                    <Link href="/de-la-vigne-a-la-bouteille" className="block px-4 py-2 text-sm text-slate-600 hover:text-wine-gold hover:bg-gray-50 rounded-md transition-colors min-h-[44px] flex items-center" onClick={closeMobileMenu}>
                      De la vigne à la bouteille
                    </Link>
                  </div>
                )}
              </div>

              {/* Nos Vins */}
              <div>
                <button
                  onClick={() => setMobileSubmenu(mobileSubmenu === 'vins' ? null : 'vins')}
                  className="flex items-center justify-between w-full px-4 py-3 text-left font-medium text-slate-800 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <span>Nos Vins</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileSubmenu === 'vins' ? 'rotate-180' : ''}`} />
                </button>
                {mobileSubmenu === 'vins' && (
                  <div className="ml-4 mt-2 space-y-1">
                    <Link href="/les-vins" className="block px-4 py-2 text-sm text-slate-600 hover:text-wine-gold hover:bg-gray-50 rounded-md transition-colors font-medium" onClick={closeMobileMenu}>
                      Toutes les cuvées
                    </Link>
                    <div className="ml-2 space-y-1 border-l border-gray-200 pl-3">
                      {/* Blancs */}
                      {byColor["Blanc"].length > 0 && (
                        <>
                          <p className="px-4 py-1 text-xs font-medium text-slate-500 uppercase tracking-wide">Blancs</p>
                          {byColor["Blanc"].map((cuvee) => (
                            <Link key={cuvee.slug} href={cuvee.route} className="block px-4 py-1 text-sm text-slate-600 hover:text-wine-gold transition-colors" onClick={closeMobileMenu}>
                              {cuvee.title}
                            </Link>
                          ))}
                        </>
                      )}
                      
                      {/* Rosés */}
                      {byColor["Rosé"].length > 0 && (
                        <>
                          <p className="px-4 py-1 text-xs font-medium text-slate-500 uppercase tracking-wide mt-3">Rosés</p>
                          {byColor["Rosé"].map((cuvee) => (
                            <Link key={cuvee.slug} href={cuvee.route} className="block px-4 py-1 text-sm text-slate-600 hover:text-wine-gold transition-colors" onClick={closeMobileMenu}>
                              {cuvee.title}
                            </Link>
                          ))}
                        </>
                      )}
                      
                      {/* Rouges */}
                      {byColor["Rouge"].length > 0 && (
                        <>
                          <p className="px-4 py-1 text-xs font-medium text-slate-500 uppercase tracking-wide mt-3">Rouges</p>
                          {byColor["Rouge"].map((cuvee) => (
                            <Link key={cuvee.slug} href={cuvee.route} className="block px-4 py-1 text-sm text-slate-600 hover:text-wine-gold transition-colors" onClick={closeMobileMenu}>
                              {cuvee.title}
                            </Link>
                          ))}
                        </>
                      )}
                      
                      {/* Effervescents */}
                      {byColor["Effervescent"].length > 0 && (
                        <>
                          <p className="px-4 py-1 text-xs font-medium text-slate-500 uppercase tracking-wide mt-3">Effervescents</p>
                          {byColor["Effervescent"].map((cuvee) => (
                            <Link key={cuvee.slug} href={cuvee.route} className="block px-4 py-1 text-sm text-slate-600 hover:text-wine-gold transition-colors" onClick={closeMobileMenu}>
                              {cuvee.title}
                            </Link>
                          ))}
                        </>
                      )}
                      
                      {/* Spécialités */}
                      {specialites.length > 0 && (
                        <>
                          <p className="px-4 py-1 text-xs font-medium text-slate-500 uppercase tracking-wide mt-3">Spécialités</p>
                          {specialites.map((cuvee) => (
                            <Link key={cuvee.slug} href={cuvee.route} className="block px-4 py-1 text-sm text-slate-600 hover:text-wine-gold transition-colors" onClick={closeMobileMenu}>
                              {cuvee.title}
                            </Link>
                          ))}
                        </>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Expériences */}
              <div>
                <button
                  onClick={() => setMobileSubmenu(mobileSubmenu === 'experiences' ? null : 'experiences')}
                  className="flex items-center justify-between w-full px-4 py-3 text-left font-medium text-slate-800 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <span>Expériences</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileSubmenu === 'experiences' ? 'rotate-180' : ''}`} />
                </button>
                {mobileSubmenu === 'experiences' && (
                  <div className="ml-4 mt-2 space-y-1">
                    <div className="px-4 py-2 text-xs font-semibold text-slate-500 uppercase tracking-wide">Visites</div>
                    <Link href="/reservation" className="block px-6 py-2 text-sm text-slate-600 hover:text-wine-gold hover:bg-gray-50 rounded-md transition-colors min-h-[44px] flex items-center" onClick={closeMobileMenu}>
                      Réservez votre instant
                    </Link>
                    <div className="px-4 py-2 text-xs font-semibold text-slate-500 uppercase tracking-wide mt-2">Evènements</div>
                    <Link href="/evenements" className="block px-6 py-2 text-sm text-slate-600 hover:text-wine-gold hover:bg-gray-50 rounded-md transition-colors min-h-[44px] flex items-center" onClick={closeMobileMenu}>
                      Nos évènements
                    </Link>
                    <Link href="/evenements/organiser" className="block px-6 py-2 text-sm text-slate-600 hover:text-wine-gold hover:bg-gray-50 rounded-md transition-colors min-h-[44px] flex items-center" onClick={closeMobileMenu}>
                      Organisez votre évènement
                    </Link>
                  </div>
                )}
              </div>

              {/* Partagez notre passion */}
              <div>
                <button
                  onClick={() => setMobileSubmenu(mobileSubmenu === 'partagez' ? null : 'partagez')}
                  className="flex items-center justify-between w-full px-4 py-3 text-left font-medium text-slate-800 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <span>Partagez notre passion</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileSubmenu === 'partagez' ? 'rotate-180' : ''}`} />
                </button>
                {mobileSubmenu === 'partagez' && (
                  <div className="ml-4 mt-2 space-y-1">
                    <Link href="/club" className="block px-4 py-2 text-sm text-slate-600 hover:text-wine-gold hover:bg-gray-50 rounded-md transition-colors min-h-[44px] flex items-center" onClick={closeMobileMenu}>
                      Rejoignez notre club
                    </Link>
                    <Link href="/mecenat" className="block px-4 py-2 text-sm text-slate-600 hover:text-wine-gold hover:bg-gray-50 rounded-md transition-colors min-h-[44px] flex items-center" onClick={closeMobileMenu}>
                      Mécénat
                    </Link>
                    <div className="px-4 py-2 text-xs font-semibold text-slate-500 uppercase tracking-wide mt-2">Gastronomie</div>
                    <Link href="/gastronomie" className="block px-6 py-2 text-sm text-slate-600 hover:text-wine-gold hover:bg-gray-50 rounded-md transition-colors min-h-[44px] flex items-center" onClick={closeMobileMenu}>
                      Art de la table
                    </Link>
                    <Link href="/degustation" className="block px-6 py-2 text-sm text-slate-600 hover:text-wine-gold hover:bg-gray-50 rounded-md transition-colors min-h-[44px] flex items-center" onClick={closeMobileMenu}>
                      Degustation
                    </Link>
                  </div>
                )}
              </div>

              {/* Pages directes */}
              <div className="border-t border-gray-200 pt-4 mt-4">
                <Link href="/gastronomie" className="block px-4 py-3 font-medium text-slate-800 hover:text-wine-gold hover:bg-gray-50 rounded-lg transition-colors min-h-[44px] flex items-center" onClick={closeMobileMenu}>
                  Gastronomie
                </Link>
                {authState.isAuthenticated && (
                  <>
                    <Link href="/compte" className="block px-4 py-3 font-medium text-slate-800 hover:text-wine-gold hover:bg-gray-50 rounded-lg transition-colors min-h-[44px] flex items-center" onClick={closeMobileMenu}>
                      Mon compte
                    </Link>
                  </>
                )}
                <Link href="/contact" className="block px-4 py-3 font-medium text-slate-800 hover:text-wine-gold hover:bg-gray-50 rounded-lg transition-colors min-h-[44px] flex items-center" onClick={closeMobileMenu}>
                  Nous contacter
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>

    {/* Méga-menus - Desktop uniquement */}
    {hoveredMenu && isDesktop && (
      <div 
        ref={megaMenuRef}
        className="fixed top-20 left-0 right-0 z-50 transition-all duration-300 bg-white/98 backdrop-blur-lg border-b border-gray-200/30 shadow-lg"
        onMouseEnter={handleMenuMouseEnter}
        onMouseLeave={handleMegaMenuMouseLeave}
        onBlurCapture={handleMegaMenuBlur}
      >
        <div className="container mx-auto px-4 xl:px-8 py-4">
          {hoveredMenu === 'domaine' && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Notre héritage - Max 3 sous-sections */}
              <div className="space-y-2">
                <h3 className="text-sm font-semibold tracking-wide mb-3 text-slate-900 font-heading">
                  Notre héritage
                </h3>
                <div className="space-y-1">
                  <Link 
                    href="/domaine/histoire" 
                    className="block text-sm font-medium tracking-wide transition-colors text-slate-600 hover:text-slate-900 py-2 px-2 rounded focus:outline-none focus:ring-2 focus:ring-wine-gold focus:text-wine-gold min-h-[44px] flex items-center"
                    onClick={() => closeMenuImmediately()}
                  >
                    Notre histoire
                  </Link>
                  <Link 
                    href="/domaine/team" 
                    className="block text-sm font-medium tracking-wide transition-colors text-slate-600 hover:text-slate-900 py-2 px-2 rounded focus:outline-none focus:ring-2 focus:ring-wine-gold focus:text-wine-gold min-h-[44px] flex items-center"
                    onClick={() => closeMenuImmediately()}
                  >
                    Notre équipe
                  </Link>
                  <Link 
                    href="/domaine/engagement" 
                    className="block text-sm font-medium tracking-wide transition-colors text-slate-600 hover:text-slate-900 py-2 px-2 rounded focus:outline-none focus:ring-2 focus:ring-wine-gold focus:text-wine-gold min-h-[44px] flex items-center"
                    onClick={() => closeMenuImmediately()}
                  >
                    Nos engagements
                  </Link>
                </div>
              </div>

              {/* Notre terroir - Max 2 sous-sections */}
              <div className="space-y-2">
                <h3 className="text-sm font-semibold tracking-wide mb-3 text-slate-900 font-heading">
                  Notre terroir
                </h3>
                <div className="space-y-1">
                  <Link 
                    href="/notre-vignoble" 
                    className="block text-sm font-medium tracking-wide transition-colors text-slate-600 hover:text-slate-900 py-2 px-2 rounded focus:outline-none focus:ring-2 focus:ring-wine-gold focus:text-wine-gold min-h-[44px] flex items-center"
                    onClick={() => closeMenuImmediately()}
                  >
                    Notre vignoble
                  </Link>
                </div>
              </div>

              {/* Notre actualité - Max 2 sous-sections */}
              <div className="space-y-2">
                <h3 className="text-sm font-semibold tracking-wide mb-3 text-slate-900 font-heading">
                  Notre actualité
                </h3>
                <div className="space-y-1">
                  <Link 
                    href="/actualites" 
                    className="block text-sm font-medium tracking-wide transition-colors text-slate-600 hover:text-slate-900 py-2 px-2 rounded focus:outline-none focus:ring-2 focus:ring-wine-gold focus:text-wine-gold min-h-[44px] flex items-center"
                    onClick={() => closeMenuImmediately()}
                  >
                    Nos actualités
                  </Link>
                  <Link 
                    href="/presse" 
                    className="block text-sm font-medium tracking-wide transition-colors text-slate-600 hover:text-slate-900 py-2 px-2 rounded focus:outline-none focus:ring-2 focus:ring-wine-gold focus:text-wine-gold min-h-[44px] flex items-center"
                    onClick={() => closeMenuImmediately()}
                  >
                    Espace presse
                  </Link>
                </div>
              </div>

              {/* Photo de fin de section - SANS transparence */}
              <div className="relative h-32 md:h-40 lg:h-44 rounded-lg overflow-hidden opacity-100" style={{ mixBlendMode: 'normal', backdropFilter: 'none' }}>
                <Image
                  src="/Page/Photo Menu/Domaine/jardins-a-la-francaise-chateau-lastours-gaillac-france.JPG"
                  alt="Château Lastours"
                  fill
                  quality={95}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover opacity-100"
                  style={{ opacity: 1, mixBlendMode: 'normal' }}
                />
              </div>
            </div>
          )}

          {hoveredMenu === 'vins' && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Nos Blancs */}
              <div className="space-y-2">
                <h3 className="text-sm font-semibold tracking-wide mb-3 text-slate-900 font-heading">
                  Nos Blancs
                </h3>
                <div className="space-y-1">
                  <Link 
                    href="/les-vins/methode-blanc" 
                    className="block text-sm font-medium tracking-wide transition-colors text-slate-600 hover:text-slate-900 py-2 px-2 rounded focus:outline-none focus:ring-2 focus:ring-wine-gold focus:text-wine-gold min-h-[44px] flex items-center"
                    onClick={() => closeMenuImmediately()}
                  >
                    Méthode Blanche
                  </Link>
                  <Link 
                    href="/les-vins/claire-de-lune" 
                    className="block text-sm font-medium tracking-wide transition-colors text-slate-600 hover:text-slate-900 py-2 px-2 rounded focus:outline-none focus:ring-2 focus:ring-wine-gold focus:text-wine-gold min-h-[44px] flex items-center"
                    onClick={() => closeMenuImmediately()}
                  >
                    Claire de Lune
                  </Link>
                  <Link 
                    href="/les-vins" 
                    className="block text-sm font-medium tracking-wide transition-colors text-slate-600 hover:text-slate-900 py-2 px-2 rounded focus:outline-none focus:ring-2 focus:ring-wine-gold focus:text-wine-gold min-h-[44px] flex items-center"
                    onClick={() => closeMenuImmediately()}
                  >
                    Toutes nos cuvées
                  </Link>
                </div>
              </div>

              {/* Nos Rosés */}
              <div className="space-y-2">
                <h3 className="text-sm font-semibold tracking-wide mb-3 text-slate-900 font-heading">
                  Nos Rosés
                </h3>
                <div className="space-y-1">
                  <Link 
                    href="/les-vins/poussin-rose" 
                    className="block text-sm font-medium tracking-wide transition-colors text-slate-600 hover:text-slate-900 py-2 px-2 rounded focus:outline-none focus:ring-2 focus:ring-wine-gold focus:text-wine-gold min-h-[44px] flex items-center"
                    onClick={() => closeMenuImmediately()}
                  >
                    Poussin
                  </Link>
                  <Link 
                    href="/les-vins/petrichor-rose" 
                    className="block text-sm font-medium tracking-wide transition-colors text-slate-600 hover:text-slate-900 py-2 px-2 rounded focus:outline-none focus:ring-2 focus:ring-wine-gold focus:text-wine-gold min-h-[44px] flex items-center"
                    onClick={() => closeMenuImmediately()}
                  >
                    Petrichor
                  </Link>
                  <Link 
                    href="/les-vins" 
                    className="block text-sm font-medium tracking-wide transition-colors text-slate-600 hover:text-slate-900 py-2 px-2 rounded focus:outline-none focus:ring-2 focus:ring-wine-gold focus:text-wine-gold min-h-[44px] flex items-center"
                    onClick={() => closeMenuImmediately()}
                  >
                    Toutes nos cuvées
                  </Link>
                </div>
              </div>

              {/* Nos Rouges */}
              <div className="space-y-2">
                <h3 className="text-sm font-semibold tracking-wide mb-3 text-slate-900 font-heading">
                  Nos Rouges
                </h3>
                <div className="space-y-1">
                  <Link 
                    href="/les-vins/opus-rouge" 
                    className="block text-sm font-medium tracking-wide transition-colors text-slate-600 hover:text-slate-900 py-2 px-2 rounded focus:outline-none focus:ring-2 focus:ring-wine-gold focus:text-wine-gold min-h-[44px] flex items-center"
                    onClick={() => closeMenuImmediately()}
                  >
                    Opus
                  </Link>
                  <Link 
                    href="/les-vins/petrichor-rouge" 
                    className="block text-sm font-medium tracking-wide transition-colors text-slate-600 hover:text-slate-900 py-2 px-2 rounded focus:outline-none focus:ring-2 focus:ring-wine-gold focus:text-wine-gold min-h-[44px] flex items-center"
                    onClick={() => closeMenuImmediately()}
                  >
                    Petrichor
                  </Link>
                  <Link 
                    href="/les-vins" 
                    className="block text-sm font-medium tracking-wide transition-colors text-slate-600 hover:text-slate-900 py-2 px-2 rounded focus:outline-none focus:ring-2 focus:ring-wine-gold focus:text-wine-gold min-h-[44px] flex items-center"
                    onClick={() => closeMenuImmediately()}
                  >
                    Toutes nos cuvées
                  </Link>
                </div>
              </div>

              {/* Photo de fin de section - SANS transparence */}
              <div className="relative h-32 md:h-40 lg:h-44 rounded-lg overflow-hidden opacity-100" style={{ mixBlendMode: 'normal', backdropFilter: 'none' }}>
                <Image
                  src="/Page/Photo Menu/Nos vins/IMG_20210102_150820 (1).jpg"
                  alt="Nos vins"
                  fill
                  quality={95}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover opacity-100"
                  style={{ opacity: 1, mixBlendMode: 'normal' }}
                />
              </div>
            </div>
          )}

          {hoveredMenu === 'savoir-faire' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Le cycle de la vigne */}
              <div className="space-y-2">
                <h3 className="text-sm font-semibold tracking-wide mb-3 text-slate-900 font-heading">
                  Le cycle de la vigne
                </h3>
                <div className="space-y-1">
                  <Link 
                    href="/le-cycle-de-la-vigne" 
                    className="block text-sm font-medium tracking-wide transition-colors text-slate-600 hover:text-slate-900 py-2 px-2 rounded focus:outline-none focus:ring-2 focus:ring-wine-gold focus:text-wine-gold min-h-[44px] flex items-center"
                    onClick={() => closeMenuImmediately()}
                  >
                    Le cycle de la vigne
                  </Link>
                </div>
              </div>

              {/* De la vigne à la bouteille */}
              <div className="space-y-2">
                <h3 className="text-sm font-semibold tracking-wide mb-3 text-slate-900 font-heading">
                  De la vigne à la bouteille
                </h3>
                <div className="space-y-1">
                  <Link 
                    href="/de-la-vigne-a-la-bouteille" 
                    className="block text-sm font-medium tracking-wide transition-colors text-slate-600 hover:text-slate-900 py-2 px-2 rounded focus:outline-none focus:ring-2 focus:ring-wine-gold focus:text-wine-gold min-h-[44px] flex items-center"
                    onClick={() => closeMenuImmediately()}
                  >
                    De la vigne à la bouteille
                  </Link>
                </div>
              </div>

              {/* Photo de fin de section - SANS transparence */}
              <div className="relative h-32 md:h-40 lg:h-44 rounded-lg overflow-hidden opacity-100" style={{ mixBlendMode: 'normal', backdropFilter: 'none' }}>
                <Image
                  src="/Page/Photo Menu/Savoir-faire/coucher-de-soleil-vignes-chateau-lastours-aop-aoc-gaillac-france.jpeg"
                  alt="Savoir-faire"
                  fill
                  quality={95}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover opacity-100"
                  style={{ opacity: 1, mixBlendMode: 'normal' }}
                />
              </div>
            </div>
          )}

          {hoveredMenu === 'experiences' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Visites */}
              <div className="space-y-2">
                <h3 className="text-sm font-semibold tracking-wide mb-3 text-slate-900 font-heading">
                  Visites
                </h3>
                <div className="space-y-1">
                  <Link 
                    href="/reservation" 
                    className="block text-sm font-medium tracking-wide transition-colors text-slate-600 hover:text-slate-900 py-2 px-2 rounded focus:outline-none focus:ring-2 focus:ring-wine-gold focus:text-wine-gold min-h-[44px] flex items-center"
                    onClick={() => closeMenuImmediately()}
                  >
                    Réservez votre instant
                  </Link>
                </div>
              </div>

              {/* Evènements */}
              <div className="space-y-2">
                <h3 className="text-sm font-semibold tracking-wide mb-3 text-slate-900 font-heading">
                  Evènements
                </h3>
                <div className="space-y-1">
                  <Link 
                    href="/evenements" 
                    className="block text-sm font-medium tracking-wide transition-colors text-slate-600 hover:text-slate-900 py-2 px-2 rounded focus:outline-none focus:ring-2 focus:ring-wine-gold focus:text-wine-gold min-h-[44px] flex items-center"
                    onClick={() => closeMenuImmediately()}
                  >
                    Nos évènements
                  </Link>
                  <Link 
                    href="/evenements/organiser" 
                    className="block text-sm font-medium tracking-wide transition-colors text-slate-600 hover:text-slate-900 py-2 px-2 rounded focus:outline-none focus:ring-2 focus:ring-wine-gold focus:text-wine-gold min-h-[44px] flex items-center"
                    onClick={() => closeMenuImmediately()}
                  >
                    Organisez votre évènement
                  </Link>
                </div>
              </div>

              {/* Photo de fin de section - SANS transparence */}
              <div className="relative h-32 md:h-40 lg:h-44 rounded-lg overflow-hidden opacity-100" style={{ mixBlendMode: 'normal', backdropFilter: 'none' }}>
                <Image
                  src="/Page/Photo Menu/experience/club-dinner-evenements-chateau-lastours-gaillac-sud-ouest-france.jpg"
                  alt="Expériences"
                  fill
                  quality={95}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover opacity-100"
                  style={{ opacity: 1, mixBlendMode: 'normal' }}
                />
              </div>
            </div>
          )}

          {hoveredMenu === 'partagez' && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Partagez notre passion */}
              <div className="space-y-2">
                <h3 className="text-sm font-semibold tracking-wide mb-3 text-slate-900 font-heading">
                  Partagez notre passion
                </h3>
                <div className="space-y-1">
                  <Link 
                    href="/club" 
                    className="block text-sm font-medium tracking-wide transition-colors text-slate-600 hover:text-slate-900 py-2 px-2 rounded focus:outline-none focus:ring-2 focus:ring-wine-gold focus:text-wine-gold min-h-[44px] flex items-center"
                    onClick={() => closeMenuImmediately()}
                  >
                    Rejoignez notre club
                  </Link>
                  <Link 
                    href="/mecenat" 
                    className="block text-sm font-medium tracking-wide transition-colors text-slate-600 hover:text-slate-900 py-2 px-2 rounded focus:outline-none focus:ring-2 focus:ring-wine-gold focus:text-wine-gold min-h-[44px] flex items-center"
                    onClick={() => closeMenuImmediately()}
                  >
                    Mécénat
                  </Link>
                </div>
              </div>

              {/* Gastronomie */}
              <div className="space-y-2">
                <h3 className="text-sm font-semibold tracking-wide mb-3 text-slate-900 font-heading">
                  Gastronomie
                </h3>
                <div className="space-y-1">
                  <Link 
                    href="/gastronomie" 
                    className="block text-sm font-medium tracking-wide transition-colors text-slate-600 hover:text-slate-900 py-2 px-2 rounded focus:outline-none focus:ring-2 focus:ring-wine-gold focus:text-wine-gold min-h-[44px] flex items-center"
                    onClick={() => closeMenuImmediately()}
                  >
                    Art de la table
                  </Link>
                  <Link 
                    href="/degustation" 
                    className="block text-sm font-medium tracking-wide transition-colors text-slate-600 hover:text-slate-900 py-2 px-2 rounded focus:outline-none focus:ring-2 focus:ring-wine-gold focus:text-wine-gold min-h-[44px] flex items-center"
                    onClick={() => closeMenuImmediately()}
                  >
                    Degustation
                  </Link>
                </div>
              </div>

              {/* Colonnes vides pour l'espacement */}
              <div className="hidden md:block"></div>

              {/* Photo de fin de section - SANS transparence */}
              <div className="relative h-32 md:h-40 lg:h-44 rounded-lg overflow-hidden opacity-100" style={{ mixBlendMode: 'normal', backdropFilter: 'none' }}>
                <Image
                  src="/Page/Photo Menu/experience/club-dinner-evenements-chateau-lastours-gaillac-sud-ouest-france.jpg"
                  alt="Partagez notre passion"
                  fill
                  quality={95}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover opacity-100"
                  style={{ opacity: 1, mixBlendMode: 'normal' }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    )}
  </>
  )
}
