/**
 * Mapping automatique des assets depuis /public/Page
 */

import { toSlug, namesMatch } from './slug'

export interface PageAssets {
  hero?: string
  gallery: string[]
  documents: string[]
}

// Mapping statique des assets disponibles (généré à partir de l'analyse du dossier)
export const ASSETS_MAP: Record<string, string[]> = {
  // Dégustation
  'degustation': [
    '/Page/Asset page dégustation/Degustation.html',
    '/Page/Degustation - ok/aromes-primaires-vin-chateau-lastours-gaillac-sud-ouest-france.jpg',
    '/Page/Degustation - ok/barrique-bois-cuve-beton-chateau-lastours-gaillac-sud-ouest-france.jpg',
    '/Page/Degustation - ok/caveau-degustation-cuvees-chateau-lastours-gaillac-france.jpeg',
    '/Page/Degustation - ok/degustation-vin-rouge-petrichor-chateau-lastours-gaillac-france.jpeg',
    '/Page/Degustation - ok/verre-de-vin-brut-de-cuve-chateau-lastours-aop-aoc-gaillac-france.jpg'
  ],
  
  // La vigne
  'la-vigne': [
    '/Page/Asset page la vigne/La vigne.docx',
    '/Page/Asset page la vigne/Page la vigne EN.docx',
    '/Page/La vigne - ok/[images-si-présentes]'
  ],
  
  // Notre Chai
  'notre-chai': [
    '/Page/Asset page Notre Chai/Le chai.docx',
    '/Page/Asset page Notre Chai/Notre chai En.docx',
    '/Page/Asset page Notre Chai/Notre chai.html',
    '/Page/Notre Chai - manque 1 photo/[images-si-présentes]'
  ],
  
  // Notre vignoble
  'notre-vignoble': [
    '/Page/Asset page Notre vignoble/Notre vignoble En.docx',
    '/Page/Asset page Notre vignoble/Notre vignoble Fr.html',
    '/Page/Notre vignoble - manque 1 photo/[images-si-présentes]'
  ],
  
  // Club
  'club': [
    '/Page/Page Club/Page présentation club FR EN.html',
    '/Page/Club - ok/[images-si-présentes]'
  ],
  
  // Nos engagements
  'nos-engagements': [
    '/photos/bulle-de-jazz-2021-chazo-087.jpg',
    '/PHOTOS-WEB-LASTOURS/VIGNES/1682596442650.jpg',
    '/Page/Nos Engagement - ok/nos-engagements-agriculture-raisonnee-chateau-lastours-aop-aoc-gaillac-france.jpg',
    '/Page/Nos Engagement - ok/libellule-rouge-vigne-grappe-de-raisin.jpg',
    '/Page/Nos Engagement - ok/fleurs-roses-tronc-de-vigne.jpg',
    '/Page/Nos Engagement - ok/mobilier-upcycle-chateau-lastours-gaillac.jpg',
    '/Page/Nos Engagement - ok/logo-HVE3.png'
  ],
  
  // Nos événements
  'nos-evenements': [
    '/Page/Nos événements - ok/UAG-LASTOURS-infinitygraphic-16.jpg',
    '/Page/Nos événements - ok/bulle-de-jazz-2021-chazo-087.jpg',
    '/Page/Nos événements - ok/PIANO JARDINS.jpg',
    '/Page/Nos événements - ok/007.jpg',
    '/Page/Page Nos événement/Page Nos Evénement En.docx',
    '/Page/Page Nos événement/Page nos evenement Fr.docx'
  ],
  
  // Notre histoire
  'notre-histoire': [
    '/Page/Notre histoire - ok/[images-si-présentes]',
    '/Page/Page Notre histoire/Notre Histoire En.docx',
    '/Page/Page Notre histoire/Notre histoire Fr.docx'
  ],
  
  // Organiser événement
  'organiser-evenement': [
    '/Page/Organiser notre évenement - ok/[images-si-présentes]',
    '/Page/Page organiser votre événement/Page Organiser votre événement FREN.html'
  ],
  
  // Visite
  'visite': [
    '/Page/Visite - ok/[images-si-présentes]',
    '/Page/Page visite/Page visite.html'
  ],
  
  // Actualités
  'actualites': [
    '/Page/Page Actualité - ok/Article Petrichor En.docx',
    '/Page/Page Actualité - ok/Article Petrichor Fr.docx',
    '/Page/Page Actualité - ok/Article fête des vins de Gaillac En.docx',
    '/Page/Page Actualité - ok/Article fête des vins de Gaillac Fr.docx',
    '/Page/Page Actualité - ok/Page Actualité En.docx',
    '/Page/Page Actualité - ok/Page Actualité Fr.docx',
    '/Page/Page Actualité - ok/Article Arnaud Liard.docx',
    '/Page/Page Actualité - ok/Article sur vendanges 2025.docx',
    '/Page/Page Actualité - ok/actualites-chateau-lastours-gaillac-france.jpeg',
    '/Page/Page Actualité - ok/portrait-artiste-placticien-francais-arnaud-liard.jpeg',
    '/Page/Page Actualité - ok/actualite-evenements-chateau-lastours-gaillac-france.jpg',
    '/Page/Page Actualité - ok/Salon-Vignerons-Independants-Paris-2025-france.jpg',
    '/Page/Page Actualité - ok/machine-a-vendanger-chateau-lastours-gaillac-2025.jpg',
    '/Page/Page Actualité - ok/fete-des-vins-2025-gaillac-sud-ouest-france.jpeg',
    '/Page/Page Actualité - ok/vin-rose-gastronomique-elevage-barrique-petrichor.jpg'
  ],
  
  // Méthode Blanche
  'methode-blanche': [
    '/Page/Nos Cuvée-ok/Gamme Méthode Ancestral/Page Méthode Blanche/FT_la_méthode_blanc.pdf',
    '/Page/Nos Cuvée-ok/Gamme Méthode Ancestral/Page Méthode Blanche/LA METHODE BLANC.jpg'
  ],
  
  // Méthode Rosé
  'methode-rose': [
    '/Page/Nos Cuvée-ok/Gamme Méthode Ancestral/Page Méthode Rosé/FT_la_méthode_rosée_23.pdf',
    '/Page/Nos Cuvée-ok/Gamme Méthode Ancestral/Page Méthode Rosé/LA METHODE ROSE.jpg'
  ]
}

// Pages qui manquent des photos selon la spécification
export const MISSING_ASSETS: Record<string, string[]> = {
  'notre-chai': ['Une photo supplémentaire du chai'],
  'notre-vignoble': ['Une photo supplémentaire du vignoble']
}

/**
 * Récupère les assets d'une page
 * @param pageId - L'ID de la page (slug)
 * @returns Les assets de la page
 */
export function getPageAssets(pageId: string): PageAssets {
  const assets = ASSETS_MAP[pageId] || []
  
  // Sépare les images, documents et autres
  const images = assets.filter(asset => 
    asset.match(/\.(jpg|jpeg|png|webp)$/i) && !asset.includes('[images-si-présentes]')
  )
  
  const documents = assets.filter(asset => 
    asset.match(/\.(pdf|docx|html)$/i)
  )
  
  // Détermine l'image hero (priorité : contient "hero", "cover", "art de la table", ou première image)
  let hero: string | undefined
  
  // Recherche d'une image hero prioritaire
  const heroImage = images.find(img => 
    img.toLowerCase().includes('hero') || 
    img.toLowerCase().includes('cover') ||
    img.toLowerCase().includes('art de la table')
  )
  
  if (heroImage) {
    hero = heroImage
  } else if (images.length > 0) {
    // Prend la première image comme hero
    hero = images[0]
  }
  
  // Galerie = toutes les images sauf le hero
  const gallery = hero ? images.filter(img => img !== hero) : images
  
  return {
    hero,
    gallery,
    documents
  }
}

/**
 * Récupère les fallbacks pour une page
 * @param pageId - L'ID de la page
 * @returns Les fallbacks nécessaires
 */
export function getPageFallbacks(pageId: string): {
  missingAssets: string[]
  needsHeroFallback: boolean
} {
  const assets = getPageAssets(pageId)
  const missingAssets = MISSING_ASSETS[pageId] || []
  
  return {
    missingAssets,
    needsHeroFallback: !assets.hero
  }
}

/**
 * Vérifie si une page a tous ses assets
 * @param pageId - L'ID de la page
 * @returns true si la page a tous ses assets
 */
export function hasCompleteAssets(pageId: string): boolean {
  const assets = getPageAssets(pageId)
  const missingAssets = MISSING_ASSETS[pageId] || []
  
  return assets.hero !== undefined && missingAssets.length === 0
}
