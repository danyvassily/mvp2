interface Article {
  slug: string
  title: string
  date: string // YYYY-MM-DD
  excerpt: string
  image?: string
  tags?: string[]
  author?: string
  body: string[] // simple paragraph array for now
}

export const articles: Article[] = [
  {
    slug: "petrichor-rouge-2024",
    title: "Petrichor Rouge 2024 : L'Essence Minérale de Gaillac",
    date: "2024-11-15",
    excerpt:
      "Découvrez notre nouvelle cuvée Petrichor Rouge 2024, expression pure de notre terroir argilo-calcaire et de nos cépages autochtones.",
    image: "/page/page-actualite-ok/vin-rose-gastronomique-elevage-barrique-petrichor.jpg",
    tags: ["Nouveauté", "Petrichor", "Terroir"],
    author: "Louis de Faramond",
    body: [
      "Petrichor, mot grec désignant l'odeur caractéristique qui accompagne la première pluie après une période de sécheresse, capture parfaitement l'essence de cette cuvée exceptionnelle.",
      "Issue d'une sélection parcellaire rigoureuse sur nos sols argilo-calcaires, cette cuvée révèle toute la minéralité et la profondeur de notre terroir gaillacois.",
      "L'assemblage subtil de Duras, Braucol et Prunelard offre une palette aromatique complexe, alliant fruits noirs intenses, épices douces et notes minérales caractéristiques.",
      "Un élevage de 18 mois en barriques françaises permet d'affiner les tanins tout en préservant la fraîcheur et l'élégance naturelle du millésime.",
    ],
  },
  {
    slug: "fete-des-vins-gaillac-2025",
    title: "Fête des Vins de Gaillac 2025 : Célébration du Terroir",
    date: "2025-08-10",
    excerpt:
      "Retour sur la Fête des Vins de Gaillac 2025, événement phare de notre région qui met à l'honneur la diversité et l'excellence de nos appellations.",
    image: "/page/page-actualite-ok/fete-des-vins-2025-gaillac-sud-ouest-france.jpeg",
    tags: ["Événement", "Gaillac", "Tradition"],
    author: "Château Lastours",
    body: [
      "La Fête des Vins de Gaillac constitue le rendez-vous incontournable des amateurs de vins du Sud-Ouest, célébrant l'authenticité et la diversité de notre terroir millénaire.",
      "Cette année encore, l'événement a attiré des milliers de visiteurs venus découvrir nos cépages autochtones uniques : Mauzac, Loin-de-l'Œil, Duras, Braucol et Prunelard.",
      "Notre domaine était fier de présenter sa gamme complète, des cuvées traditionnelles aux créations les plus innovantes, témoignant du dynamisme de l'appellation Gaillac.",
      "Les dégustations commentées, ateliers d'assemblage et visites de chai ont permis aux visiteurs de comprendre la richesse de notre patrimoine viticole et nos méthodes de vinification respectueuses de l'environnement.",
      "Cette fête populaire illustre parfaitement l'art de vivre gaillacois, mêlant convivialité, tradition et excellence œnologique dans un cadre authentique.",
      "Les rencontres avec les vignerons, les animations culturelles et les moments de partage ont contribué à faire de cette édition 2025 un succès retentissant.",
    ],
  },
  {
    slug: "fete-des-vins-gaillac-2024",
    title: "Fête des Vins de Gaillac 2024 : Célébration du Terroir",
    date: "2024-08-10",
    excerpt:
      "Retour sur la Fête des Vins de Gaillac 2024, événement phare de notre région qui met à l'honneur la diversité et l'excellence de nos appellations.",
    image: "/page/page-actualite-ok/fete-des-vins-2025-gaillac-sud-ouest-france.jpeg",
    tags: ["Événement", "Gaillac", "Tradition"],
    author: "Château Lastours",
    body: [
      "La Fête des Vins de Gaillac constitue le rendez-vous incontournable des amateurs de vins du Sud-Ouest, célébrant l'authenticité et la diversité de notre terroir millénaire.",
      "Cette année encore, l'événement a attiré des milliers de visiteurs venus découvrir nos cépages autochtones uniques : Mauzac, Loin-de-l'Œil, Duras, Braucol et Prunelard.",
      "Notre domaine était fier de présenter sa gamme complète, des cuvées traditionnelles aux créations les plus innovantes, témoignant du dynamisme de l'appellation Gaillac.",
      "Les dégustations commentées, ateliers d'assemblage et visites de chai ont permis aux visiteurs de comprendre la richesse de notre patrimoine viticole et nos méthodes de vinification respectueuses de l'environnement.",
      "Cette fête populaire illustre parfaitement l'art de vivre gaillacois, mêlant convivialité, tradition et excellence œnologique dans un cadre authentique.",
    ],
  },
  {
    slug: "vendanges-2025-terroir-exception",
    title: "Vendanges 2025 : Un Millésime d'Exception sur Notre Terroir",
    date: "2025-09-20",
    excerpt:
      "Retour sur des vendanges 2025 marquées par des conditions climatiques idéales, offrant des raisins d'une maturité et d'une concentration remarquables.",
    image: "/page/page-actualite-ok/machine-a-vendanger-chateau-lastours-gaillac-2025.jpg",
    tags: ["Vendanges", "Millésime", "Qualité"],
    author: "Louis de Faramond",
    body: [
      "Les vendanges 2025 resteront gravées dans notre mémoire comme un millésime d'exception, marqué par un équilibre climatique parfait entre chaleur estivale et fraîcheur nocturne.",
      "Nos 52 hectares de vignoble ont bénéficié de conditions idéales : un été ensoleillé suivi de nuits fraîches qui ont permis une maturation lente et homogène des raisins.",
      "La récolte manuelle, menée parcelle par parcelle selon la maturité optimale de chaque cépage, s'est déroulée dans d'excellentes conditions sanitaires.",
      "Les premières vinifications révèlent des jus d'une concentration et d'une pureté exceptionnelles, particulièrement sur nos cépages autochtones Duras et Braucol.",
      "Ce millésime 2025 s'annonce comme l'un des plus prometteurs de la décennie, alliant puissance, élégance et potentiel de garde remarquable.",
    ],
  },
  {
    slug: "certification-hve-engagement-durable",
    title: "Certification HVE : Notre Engagement pour une Viticulture Durable",
    date: "2024-06-12",
    excerpt:
      "Le Château Lastours renouvelle sa certification Haute Valeur Environnementale, témoignant de son engagement constant pour une viticulture respectueuse de l'environnement.",
    image: "/page/page-actualite-ok/actualite-evenements-chateau-lastours-gaillac-france.jpg",
    tags: ["HVE", "Durabilité", "Environnement"],
    author: "Château Lastours",
    body: [
      "La certification Haute Valeur Environnementale (HVE) du Château Lastours a été renouvelée avec succès, confirmant notre engagement de longue date pour une viticulture durable et respectueuse.",
      "Cette démarche s'articule autour de quatre piliers fondamentaux : la préservation de la biodiversité, la stratégie phytosanitaire raisonnée, la gestion de la fertilisation et la maîtrise de la ressource en eau.",
      "Nos pratiques incluent l'enherbement naturel des inter-rangs, la plantation de haies et d'arbres fruitiers pour favoriser la biodiversité, ainsi que l'utilisation de méthodes alternatives comme la confusion sexuelle.",
      "La réduction des intrants chimiques de 40% sur les cinq dernières années témoigne de notre volonté d'évoluer vers des méthodes toujours plus naturelles et respectueuses du terroir.",
      "Cette certification HVE s'inscrit dans une démarche globale de développement durable qui guide l'ensemble de nos décisions, de la vigne à la mise en bouteille.",
    ],
  },
  {
    slug: "nouveaux-assemblages-2025",
    title: "Nouveaux Assemblages 2025 : Innovation et Tradition",
    date: "2025-01-20",
    excerpt:
      "Découvrez nos nouveaux assemblages 2025 qui repoussent les limites de l'expression de nos cépages autochtones tout en respectant l'identité unique de Gaillac.",
    image: "/page/la-vigne-ok/travail-dans-la-vigne-palissage.jpg",
    tags: ["Innovation", "Assemblage", "Cépages"],
    author: "Louis de Faramond",
    body: [
      "L'année 2025 marque un tournant dans notre approche de l'assemblage, avec le développement de nouvelles cuvées qui subliment l'expression de nos cépages autochtones.",
      "Nos expérimentations portent sur des micro-vinifications parcellaires, permettant de révéler les nuances subtiles de chaque terroir de notre domaine de 52 hectares.",
      "L'assemblage innovant Mauzac-Loin-de-l'Œil pour nos blancs offre une fraîcheur et une minéralité inédites, tandis que la combinaison Duras-Prunelard révèle une complexité aromatique remarquable.",
      "Ces créations s'appuient sur une compréhension approfondie de notre terroir argilo-calcaire et sur des techniques de vinification à la pointe de l'innovation, tout en respectant l'authenticité gaillacoise.",
      "Chaque nouvel assemblage fait l'objet d'un suivi rigoureux et de dégustations régulières pour garantir l'excellence et la cohérence avec l'identité du Château Lastours.",
    ],
  },
  {
    slug: "salon-vignerons-independants-paris-2025",
    title: "Salon des Vignerons Indépendants Paris 2025",
    date: "2025-02-15",
    excerpt:
      "Le Château Lastours sera présent au Salon des Vignerons Indépendants à Paris pour présenter ses dernières cuvées et rencontrer les amateurs de vin.",
    image: "/page/page-actualite-ok/salon-vignerons-independants-paris-2025-france-1.jpg",
    tags: ["Salon", "Paris", "Dégustation"],
    author: "Château Lastours",
    body: [
      "Le Château Lastours est ravi de participer au Salon des Vignerons Indépendants de Paris en 2025, l'événement incontournable pour découvrir les vins authentiques du terroir français.",
      "Ce salon représente une opportunité unique de rencontrer directement les vignerons, de comprendre leur passion et de découvrir leurs créations dans un cadre convivial.",
      "Notre équipe sera présente pour vous faire découvrir notre gamme complète, des cuvées traditionnelles aux créations les plus innovantes, toutes issues de nos cépages autochtones gaillacois.",
      "Venez déguster nos vins, échanger avec nos vignerons et découvrir l'histoire et les valeurs qui animent le Château Lastours depuis des générations.",
      "Nous vous attendons nombreux pour partager notre passion du vin et vous faire découvrir les trésors cachés de l'appellation Gaillac.",
    ],
  },
  {
    slug: "arnaud-liard-artiste-plasticien",
    title: "Arnaud Liard : L'Art au Service du Vin",
    date: "2024-12-10",
    excerpt:
      "Découvrez la collaboration du Château Lastours avec l'artiste plasticien Arnaud Liard, créant un pont entre l'art contemporain et l'art de la vigne.",
    image: "/page/page-actualite-ok/portrait-artiste-placticien-francais-arnaud-liard.jpeg",
    tags: ["Art", "Collaboration", "Culture"],
    author: "Château Lastours",
    body: [
      "Le Château Lastours est fier de présenter sa collaboration avec l'artiste plasticien français Arnaud Liard, une rencontre entre l'art contemporain et l'art de la vigne.",
      "Cette collaboration unique illustre notre volonté de créer des ponts entre les différents univers artistiques, où le vin devient source d'inspiration et support d'expression.",
      "Les œuvres d'Arnaud Liard, imprégnées de la poésie du terroir gaillacois, viennent enrichir notre vision du vin comme œuvre d'art vivante, évoluant au fil des saisons et des millésimes.",
      "Cette démarche s'inscrit dans notre engagement pour promouvoir la culture et l'art sous toutes ses formes, en créant des synergies entre le patrimoine viticole et la création contemporaine.",
      "Découvrez ces créations exceptionnelles qui célèbrent l'alliance entre l'art et le vin, deux univers qui se nourrissent mutuellement pour offrir une expérience sensorielle unique.",
    ],
  },
]

export function getAllArticles() {
  // newest first
  return [...articles].sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getArticleBySlug(slug: string) {
  return articles.find((a) => a.slug === slug)
}

export function getLatestArticles(n: number) {
  return getAllArticles().slice(0, n)
}

