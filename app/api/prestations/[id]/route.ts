import { NextRequest, NextResponse } from 'next/server'
import type { Prestation } from '../route'

// Stockage en mémoire (à synchroniser avec route.ts en production via DB)
// En production, utiliser une vraie base de données
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

// GET /api/prestations/[id] - Récupérer une prestation par ID
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const prestation = prestations.find(p => p.id === id)

    if (!prestation) {
      return NextResponse.json(
        { error: 'Prestation non trouvée' },
        { status: 404 }
      )
    }

    return NextResponse.json(prestation, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Erreur lors de la récupération de la prestation' },
      { status: 500 }
    )
  }
}

// PATCH /api/prestations/[id] - Modifier une prestation
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const body = await request.json()

    const index = prestations.findIndex(p => p.id === id)

    if (index === -1) {
      return NextResponse.json(
        { error: 'Prestation non trouvée' },
        { status: 404 }
      )
    }

    // Mettre à jour uniquement les champs fournis
    prestations[index] = {
      ...prestations[index],
      ...body,
      id: prestations[index].id // Conserver l'ID original
    }

    return NextResponse.json(prestations[index], { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Erreur lors de la modification de la prestation' },
      { status: 500 }
    )
  }
}

// DELETE /api/prestations/[id] - Supprimer une prestation
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const index = prestations.findIndex(p => p.id === id)

    if (index === -1) {
      return NextResponse.json(
        { error: 'Prestation non trouvée' },
        { status: 404 }
      )
    }

    prestations.splice(index, 1)

    return NextResponse.json(
      { message: 'Prestation supprimée avec succès' },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { error: 'Erreur lors de la suppression de la prestation' },
      { status: 500 }
    )
  }
}

