type EventType = "Festival" | "Dégustation" | "Formation" | "Dîner romantique" | "Événement familial"

interface EventItem {
  id: string
  slug: string
  title: string
  date: string // YYYY-MM-DD
  time: string
  type: EventType
  price: string
  description: string
  image: string
  featured: boolean
  spots: string
  location?: {
    name: string
    address?: string
    city?: string
    lat?: number
    lng?: number
  }
  tags?: string[]
  content?: string[]
}

export const events: EventItem[] = [
  {
    id: "vendanges-2024",
    slug: "vendanges-2024",
    title: "Fête des Vendanges 2024",
    date: "2024-09-15",
    time: "10:00 - 18:00",
    type: "Festival",
    price: "Gratuit",
    description:
      "Participez à notre traditionnelle fête des vendanges ! Au programme : participation aux vendanges, dégustation, repas convivial et animations musicales.",
    image: "/harvest-festival-event.png",
    featured: true,
    spots: "Illimité",
    location: { name: "Châteaux Lastours, Gaillac" },
    tags: ["vendanges", "famille", "domaine"],
    content: [
      "Rejoignez-nous pour célébrer la récolte annuelle et découvrir le travail de la vigne au plus près.",
      "Une journée conviviale rythmée par la cueillette, les ateliers et la dégustation de nos cuvées.",
    ],
  },
  {
    id: "degustation-prestige",
    slug: "degustation-prestige",
    title: "Soirée Dégustation Prestige",
    date: "2024-10-12",
    time: "19:00 - 22:00",
    type: "Dégustation",
    price: "85€",
    description:
      "Une soirée exclusive pour découvrir nos cuvées les plus prestigieuses accompagnées d'un menu gastronomique conçu par le chef étoilé Laurent Dubois.",
    image: "/wine-tasting-event.png",
    featured: true,
    spots: "24 places",
    location: { name: "Chais historiques" },
    tags: ["prestige", "gastronomie"],
    content: [
      "Dégustation commentée par notre œnologue.",
      "Accords mets-vins élaborés par un chef étoilé.",
    ],
  },
  {
    id: "masterclass-assemblage",
    slug: "masterclass-assemblage",
    title: "Masterclass Assemblage",
    date: "2024-11-08",
    time: "14:00 - 17:00",
    type: "Formation",
    price: "120€",
    description:
      "Apprenez l'art de l'assemblage avec notre œnologue Marie Lastours. Créez votre propre cuvée et repartez avec votre bouteille personnalisée.",
    image: "/wine-education-workshop.png",
    featured: false,
    spots: "12 places",
    location: { name: "Salle de dégustation privée" },
    tags: ["atelier", "assemblage"],
  },
  {
    id: "noel-au-domaine",
    slug: "noel-au-domaine",
    title: "Noël au Domaine",
    date: "2024-12-14",
    time: "16:00 - 20:00",
    type: "Événement familial",
    price: "45€ adulte, 15€ enfant",
    description:
      "Célébrez Noël dans la magie de notre domaine. Visite féerique, dégustation de vins chauds épicés, ateliers pour enfants et marché de Noël.",
    image: "/harvest-festival-event.png",
    featured: false,
    spots: "50 places",
    tags: ["noel", "famille"],
  },
  {
    id: "saint-valentin",
    slug: "saint-valentin",
    title: "Dîner de la Saint-Valentin",
    date: "2025-02-14",
    time: "19:30 - 23:00",
    type: "Dîner romantique",
    price: "150€ par couple",
    description:
      "Un dîner romantique aux chandelles dans nos chais historiques, avec menu 5 services et accords mets-vins exceptionnels.",
    image: "/private-dinner-event.png",
    featured: true,
    spots: "20 couples",
    tags: ["romantique", "dîner"],
  },
  {
    id: "printemps-des-vins",
    slug: "printemps-des-vins",
    title: "Printemps des Vins Nouveaux",
    date: "2025-03-21",
    time: "11:00 - 17:00",
    type: "Dégustation",
    price: "35€",
    description:
      "Découvrez en avant-première nos nouveaux millésimes dans l'ambiance printanière de notre domaine fleuri.",
    image: "/wine-tasting-event.png",
    featured: false,
    spots: "40 places",
    tags: ["millésimes", "printemps"],
  },
]

export function getAllEvents() {
  return events
}

export function getEventBySlug(slug: string) {
  return events.find((e) => e.slug === slug)
}

export function getUpcomingEvents(after: Date = new Date()) {
  return events.filter((e) => new Date(e.date) >= after)
}

