/**
 * Mapping automatique des assets depuis /public/Page
 */

import { toSlug, namesMatch } from './slug'

interface PageAssets {
  hero?: string
  gallery: string[]
  documents: string[]
}

// Mapping statique des assets disponibles (généré à partir de l'analyse du dossier)
const ASSETS_MAP: Record<string, string[]> = {
  // Dégustation
  'degustation': [
    '/page/asset-page-degustation/degustation.html',
    '/page/degustation-ok/aromes-primaires-vin-chateau-lastours-gaillac-sud-ouest-france.jpg',
    '/page/degustation-ok/barrique-bois-cuve-beton-chateau-lastours-gaillac-sud-ouest-france.jpg',
    '/page/degustation-ok/caveau-degustation-cuvees-chateau-lastours-gaillac-france.jpeg',
    '/page/degustation-ok/degustation-vin-rouge-petrichor-chateau-lastours-gaillac-france.jpeg',
    '/page/degustation-ok/verre-de-vin-brut-de-cuve-chateau-lastours-aop-aoc-gaillac-france.jpg'
  ],
  
  // La vigne
  'la-vigne': [
    '/page/asset-page-la-vigne/la-vigne.docx',
    '/page/asset-page-la-vigne/page-la-vigne-en.docx',
    '/page/la-vigne-ok/images-si-presentes'
  ],
  
  // Notre Chai
  'notre-chai': [
    '/page/asset-page-notre-chai/le-chai.docx',
    '/page/asset-page-notre-chai/notre-chai-en.docx',
    '/page/asset-page-notre-chai/notre-chai.html',
    '/page/notre-chai-manque-1-photo/images-si-presentes'
  ],
  
  // Notre vignoble
  'notre-vignoble': [
    '/page/asset-page-notre-vignoble/notre-vignoble-en.docx',
    '/page/asset-page-notre-vignoble/notre-vignoble-fr.html',
    '/page/notre-vignoble-manque-1-photo/images-si-presentes'
  ],
  
  // Club
  'club': [
    '/page/page-club/page-presentation-club-fr-en.html',
    '/page/club-ok/images-si-presentes'
  ],
  
  // Nos engagements
  'nos-engagements': [
    '/photos/bulle-de-jazz-2021-chazo-087.jpg',
    '/photos-web-lastours/vignes/1682596442650.jpg',
    '/page/nos-engagement-ok/nos-engagements-agriculture-raisonnee-chateau-lastours-aop-aoc-gaillac-france.jpg',
    '/page/nos-engagement-ok/libellule-rouge-vigne-grappe-de-raisin.jpg',
    '/page/nos-engagement-ok/fleurs-roses-tronc-de-vigne.jpg',
    '/page/nos-engagement-ok/mobilier-upcycle-chateau-lastours-gaillac.jpg',
    '/page/nos-engagement-ok/logo-hve3-1.png'
  ],
  
  // Nos événements
  'nos-evenements': [
    '/page/nos-evenements-ok/uag-lastours-infinitygraphic-16.jpg',
    '/page/nos-evenements-ok/bulle-de-jazz-2021-chazo-087.jpg',
    '/page/nos-evenements-ok/piano-jardins.jpg',
    '/page/nos-evenements-ok/007.jpg',
    '/page/page-nos-evenement/page-nos-evenement-en.docx',
    '/page/page-nos-evenement/page-nos-evenement-fr.docx'
  ],
  
  // Notre histoire
  'notre-histoire': [
    '/page/notre-histoire-ok/images-si-presentes',
    '/page/page-notre-histoire/notre-histoire-en.docx',
    '/page/page-notre-histoire/notre-histoire-fr.docx'
  ],
  
  // Organiser événement
  'organiser-evenement': [
    '/page/organiser-notre-evenement-ok/images-si-presentes',
    '/page/page-organiser-votre-evenement/page-organiser-votre-evenement-fren.html'
  ],
  
  // Visite
  'visite': [
    '/page/visite-ok/images-si-presentes',
    '/page/page-visite/page-visite.html'
  ],
  
  // Actualités
  'actualites': [
    '/page/page-actualite-ok/article-petrichor-en.docx',
    '/page/page-actualite-ok/article-petrichor-fr.docx',
    '/page/page-actualite-ok/article-fete-des-vins-de-gaillac-en.docx',
    '/page/page-actualite-ok/article-fete-des-vins-de-gaillac-fr.docx',
    '/page/page-actualite-ok/page-actualite-en.docx',
    '/page/page-actualite-ok/page-actualite-fr.docx',
    '/page/page-actualite-ok/article-arnaud-liard.docx',
    '/page/page-actualite-ok/article-sur-vendanges-2025.docx',
    '/page/page-actualite-ok/actualites-chateau-lastours-gaillac-france.jpeg',
    '/page/page-actualite-ok/portrait-artiste-placticien-francais-arnaud-liard.jpeg',
    '/page/page-actualite-ok/actualite-evenements-chateau-lastours-gaillac-france.jpg',
    '/page/page-actualite-ok/salon-vignerons-independants-paris-2025-france-1.jpg',
    '/page/page-actualite-ok/machine-a-vendanger-chateau-lastours-gaillac-2025.jpg',
    '/page/page-actualite-ok/fete-des-vins-2025-gaillac-sud-ouest-france.jpeg',
    '/page/page-actualite-ok/vin-rose-gastronomique-elevage-barrique-petrichor.jpg'
  ],
  
  // Méthode Blanche
  'methode-blanche': [
    '/page/nos-cuvee-ok/gamme-methode-ancestral/page-methode-blanche/ft-la-methode-blanc.pdf',
    '/page/nos-cuvee-ok/gamme-methode-ancestral/page-methode-blanche/la-methode-blanc.jpg'
  ],
  
  // Méthode Rosé
  'methode-rose': [
    '/page/nos-cuvee-ok/gamme-methode-ancestral/page-methode-rose/ft-la-methode-rosee-23.pdf',
    '/page/nos-cuvee-ok/gamme-methode-ancestral/page-methode-rose/la-methode-rose.jpg'
  ]
}

// Pages qui manquent des photos selon la spécification
const MISSING_ASSETS: Record<string, string[]> = {
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
