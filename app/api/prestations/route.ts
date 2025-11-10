import { NextRequest, NextResponse } from 'next/server'

// Type pour une prestation
export interface Prestation {
  id: string
  titre: string
  description: string
  image: string
  duree?: string
  personnesMax?: number
  slug?: string
  actif: boolean
  highlights?: string[]
  popular?: boolean
}

// Stockage en mémoire (à remplacer par une vraie base de données en production)
let prestations: Prestation[] = [
  {
    id: '1',
    titre: 'Réservation Visite + Dégustation',
    description: 'Visite guidée du domaine avec découverte de nos chais traditionnels, jardins à la française et dégustation commentée de nos vins d\'exception',
    image: '/chateau-lastours-hero.jpg',
    duree: '1h30',
    personnesMax: 20,
    slug: 'visite-degustation',
    actif: true,
    highlights: ['Visite des chais', 'Jardins à la française', 'Dégustation de 5 vins', 'Découverte du terroir'],
    popular: true
  },
  {
    id: '2',
    titre: 'Réservation Groupe privée Visite + Dégustation',
    description: 'Expérience approfondie avec visite privée, dégustation de nos cuvées prestige et rencontre avec notre œnologue',
    image: '/wine-tasting-event.png',
    duree: '2h30',
    personnesMax: 15,
    slug: 'visite-prestige',
    actif: true,
    highlights: ['Visite privée', 'Cuvées prestige', 'Rencontre œnologue', 'Accord mets-vins'],
    popular: false
  },
  {
    id: '3',
    titre: 'Réservation Groupe privée Dégustation',
    description: 'Dégustation exclusive dans notre salon privé avec présentation personnalisée de notre gamme complète',
    image: '/french-chateau-wine-cellar.png',
    duree: '2h',
    personnesMax: 12,
    slug: 'degustation-privee',
    actif: true,
    highlights: ['Salon privé', 'Gamme complète', 'Service personnalisé', 'Ambiance intimiste'],
    popular: false
  }
]

// GET /api/prestations - Récupérer toutes les prestations actives
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const actifOnly = searchParams.get('actif') !== 'false'

    let result = prestations
    if (actifOnly) {
      result = prestations.filter(p => p.actif)
    }

    return NextResponse.json(result, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des prestations' },
      { status: 500 }
    )
  }
}

// POST /api/prestations - Créer une nouvelle prestation
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validation des champs minimum requis
    if (!body.titre || !body.description || !body.image) {
      return NextResponse.json(
        { error: 'Les champs titre, description et image sont requis' },
        { status: 400 }
      )
    }

    // Générer un ID unique
    const newId = String(prestations.length + 1)
    const newPrestation: Prestation = {
      id: newId,
      titre: body.titre,
      description: body.description,
      image: body.image,
      duree: body.duree || undefined,
      personnesMax: body.personnesMax || undefined,
      slug: body.slug || undefined,
      actif: body.actif !== undefined ? body.actif : true,
      highlights: body.highlights || [],
      popular: body.popular || false
    }

    prestations.push(newPrestation)

    return NextResponse.json(newPrestation, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Erreur lors de la création de la prestation' },
      { status: 500 }
    )
  }
}

