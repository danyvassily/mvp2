export interface Wine {
  id: string
  name: string
  collection: "classique" | "methode" | "fruitees" | "poussin" | "domeni" | "confidentielle" | "opus"
  type: "rouge" | "blanc" | "rose" | "effervescent"
  vintage: number
  price: number
  description: string
  longDescription: string
  tastingNotes: {
    appearance: string
    nose: string
    palate: string
    finish: string
  }
  technicalInfo: {
    alcohol: string
    grapes: string[]
    aging: string
    production: string
  }
  conservation: {
    temperature: string
    duration: string
    conditions: string
  }
  foodPairing: {
    appetizers: string[]
    mainCourses: string[]
    cheeses: string[]
    desserts?: string[]
  }
  servingAdvice: {
    temperature: string
    decanting?: string
    glassware: string
    timing: string
  }
  composition: {
    terroir: string
    harvest: string
    vinification: string
    philosophy: string
  }
  awards: string[]
  image: string
  techSheetPdf?: string
  inStock: boolean
  featured: boolean
}

export const wines: Wine[] = [
  // Collection Doméni
  {
    id: "domeni-blanc-2023",
    name: "Doméni Blanc",
    collection: "domeni",
    type: "blanc",
    vintage: 2023,
    price: 18,
    description:
      "Un blanc sec traditionnel alliant Mauzac et Loin de l'Œil, expression authentique du terroir gaillacois.",
    longDescription:
      "Le Doméni Blanc 2023 célèbre l'authenticité des cépages gaillacois. L'assemblage harmonieux de Mauzac et Loin de l'Œil, cépages autochtones de l'appellation, révèle toute la typicité de notre terroir. Ce vin incarne parfaitement notre philosophie : 'Un bon vin, c'est avant tout celui qu'on aime'.",
    tastingNotes: {
      appearance: "Robe jaune dorée aux reflets brillants",
      nose: "Bouquet expressif de fruits blancs, acacia, miel et notes minérales",
      palate: "Attaque franche, belle rondeur, équilibre parfait entre fraîcheur et richesse",
      finish: "Finale persistante aux arômes de fruits secs et d'épices douces",
    },
    technicalInfo: {
      alcohol: "12.5%",
      grapes: ["Mauzac 60%", "Loin de l'Œil 40%"],
      aging: "8 mois en cuve inox avec bâtonnage",
      production: "20 000 bouteilles",
    },
    conservation: {
      temperature: "12-14°C",
      duration: "3-5 ans",
      conditions: "Cave tempérée, bouteilles couchées, éviter les variations de température",
    },
    foodPairing: {
      appetizers: ["Foie gras", "Escargots", "Charcuterie fine"],
      mainCourses: ["Poissons en sauce", "Volaille fermière", "Plats épicés"],
      cheeses: ["Roquefort", "Bleu des Causses", "Fromages à pâte persillée"],
    },
    servingAdvice: {
      temperature: "10-12°C",
      glassware: "Verre à vin blanc de Bourgogne",
      timing: "Ouvrir 30 minutes avant dégustation",
    },
    composition: {
      terroir: "Coteaux argilo-calcaires exposés sud-ouest",
      harvest: "Vendanges manuelles, maturité optimale",
      vinification: "Pressurage doux, fermentation contrôlée à 16°C",
      philosophy: "Révéler l'authenticité des cépages gaillacois",
    },
    awards: ["Guide Hachette 2024 - 1 étoile"],
    image: "/wine-domeni-blanc.jpg",
    techSheetPdf: "/fiche-technique/ft-blanc-domeni-2024.pdf",
    inStock: true,
    featured: true,
  },
  {
    id: "poussin-blanc-2024",
    name: "Poussin Blanc",
    collection: "poussin",
    type: "blanc",
    vintage: 2024,
    price: 12,
    description: "Blanc moelleux accessible et gourmand, idéal pour initier à la douceur du Gaillacois.",
    longDescription:
      "Poussin Blanc 2024 est un blanc moelleux à la bouche tendre et fruitée. Élaboré pour un plaisir immédiat, il accompagne parfaitement les desserts, les fromages frais ou se savoure seul en fin de repas.",
    tastingNotes: {
      appearance: "Robe jaune pâle brillante",
      nose: "Notes de pêche blanche, poire et miel léger",
      palate: "Bouche douce et équilibrée par une jolie fraîcheur",
      finish: "Finale suave sur les fruits blancs",
    },
    technicalInfo: {
      alcohol: "11%",
      grapes: ["Mauzac", "Loin de l'Œil"],
      aging: "Élevage court en cuve pour préserver le fruit",
      production: "—",
    },
    conservation: {
      temperature: "8-10°C",
      duration: "1-2 ans",
      conditions: "À conserver au frais, à l'abri de la lumière",
    },
    foodPairing: {
      appetizers: ["Foie gras", "Apéritif gourmand"],
      mainCourses: ["Cuisine sucrée-salée", "Volaille aux fruits"],
      cheeses: ["Fromages frais", "Bleu doux"],
      desserts: ["Tarte aux fruits", "Gâteau aux amandes"],
    },
    servingAdvice: {
      temperature: "8-10°C",
      glassware: "Verre à vin blanc",
      timing: "À boire jeune pour sa fraîcheur",
    },
    composition: {
      terroir: "Coteaux doux du Gaillacois",
      harvest: "Vendanges à maturité aromatique",
      vinification: "Arrêt de fermentation pour garder le sucre naturel",
      philosophy: "Offrir un blanc tendre et accessible",
    },
    awards: [],
    image: "/wine-poussin-blanc.jpg",
    techSheetPdf: "/fiche-technique/ft-poussin-moelleux-2024.pdf",
    inStock: true,
    featured: false,
  },
  {
    id: "domeni-rose-2023",
    name: "Doméni Rosé",
    collection: "domeni",
    type: "rose",
    vintage: 2023,
    price: 17,
    description: "Un rosé délicat issu de Duras et Syrah, alliant fraîcheur gaillacoise et élégance méditerranéenne.",
    longDescription:
      "Le Doméni Rosé 2023 marie harmonieusement la typicité gaillacoise du Duras à l'élégance de la Syrah. Cette cuvée exprime notre savoir-faire dans l'art délicat de l'élaboration des rosés, privilégiant la finesse et la fraîcheur pour créer un vin de plaisir immédiat.",
    tastingNotes: {
      appearance: "Robe rose pâle aux reflets saumon",
      nose: "Bouquet délicat de fruits rouges, pêche blanche et notes florales",
      palate: "Attaque fraîche, belle vivacité, saveurs de fraise et d'agrumes",
      finish: "Finale croquante et rafraîchissante",
    },
    technicalInfo: {
      alcohol: "12.5%",
      grapes: ["Duras 70%", "Syrah 30%"],
      aging: "4 mois en cuve inox",
      production: "15 000 bouteilles",
    },
    conservation: {
      temperature: "10-12°C",
      duration: "1-2 ans",
      conditions: "À consommer jeune, cave fraîche",
    },
    foodPairing: {
      appetizers: ["Salade de chèvre chaud", "Tapenade", "Crudités"],
      mainCourses: ["Grillades", "Poissons", "Cuisine méditerranéenne"],
      cheeses: ["Fromages frais", "Mozzarella", "Feta"],
    },
    servingAdvice: {
      temperature: "8-10°C",
      glassware: "Verre à vin blanc ou rosé",
      timing: "Idéal en apéritif ou repas estival",
    },
    composition: {
      terroir: "Coteaux bien exposés, sols drainants",
      harvest: "Vendanges matinales pour préserver la fraîcheur",
      vinification: "Pressurage direct, fermentation à basse température",
      philosophy: "Capturer la fraîcheur et l'élégance du fruit",
    },
    awards: [],
    image: "/wine-domeni-rose.jpg",
    techSheetPdf: "/fiche-technique/ft-rose-domeni-2024-1.pdf",
    inStock: true,
    featured: false,
  },
  {
    id: "domeni-rouge-2021",
    name: "Doméni Rouge",
    collection: "domeni",
    type: "rouge",
    vintage: 2021,
    price: 20,
    description: "Un rouge généreux assemblant Duras et Braucol, cépages emblématiques du vignoble gaillacois.",
    longDescription:
      "Le Doméni Rouge 2021 puise sa force dans l'assemblage de deux cépages autochtones exceptionnels : le Duras et le Braucol. Ces variétés anciennes, parfaitement adaptées à notre terroir, donnent naissance à un vin de caractère qui exprime toute la générosité de notre philosophie familiale.",
    tastingNotes: {
      appearance: "Robe rouge profond aux reflets violacés",
      nose: "Arômes complexes de fruits noirs, épices, garrigue et notes animales subtiles",
      palate: "Structure tannique noble, belle concentration, saveurs de mûre et poivre",
      finish: "Finale longue et épicée, caractéristique du Braucol",
    },
    technicalInfo: {
      alcohol: "13.5%",
      grapes: ["Duras 60%", "Braucol 40%"],
      aging: "12 mois en fûts de chêne français",
      production: "18 000 bouteilles",
    },
    conservation: {
      temperature: "14-16°C",
      duration: "5-8 ans",
      conditions: "Cave fraîche et sombre, bouteilles couchées",
    },
    foodPairing: {
      appetizers: ["Charcuterie du terroir", "Pâtés de campagne", "Fromages affinés"],
      mainCourses: ["Cassoulet", "Confit de canard", "Gibier", "Viandes grillées"],
      cheeses: ["Roquefort", "Cantal", "Fromages du terroir"],
    },
    servingAdvice: {
      temperature: "16-18°C",
      decanting: "Carafage recommandé 1h avant service",
      glassware: "Verre à vin rouge de Bordeaux",
      timing: "Optimal après 2-3 ans de garde",
    },
    composition: {
      terroir: "Sols argilo-calcaires et grès, exposition sud",
      harvest: "Vendanges manuelles, tri parcellaire",
      vinification: "Macération longue 21 jours, pigeage traditionnel",
      philosophy: "Exprimer la typicité des cépages gaillacois anciens",
    },
    awards: ["Médaille d'Or - Concours des Vins de Gaillac 2023"],
    image: "/wine-domeni-rouge.jpg",
    techSheetPdf: "/fiche-technique/ft-rouge-domeni-2022.pdf",
    inStock: true,
    featured: true,
  },
  
  // Collection Opus
  {
    id: "opus-blanc-2022",
    name: "Opus Blanc",
    collection: "opus",
    type: "blanc",
    vintage: 2022,
    price: 35,
    description:
      "Un blanc d'exception, cuvée premium révélant toute la sophistication de notre terroir.",
    longDescription:
      "L'Opus Blanc 2022 représente l'excellence de notre savoir-faire. Cette cuvée premium, élaborée uniquement lors des millésimes exceptionnels, révèle la quintessence de nos plus belles parcelles de Chardonnay et Viognier. Un élevage partiel en fûts de chêne français apporte complexité et finesse à ce blanc d'une rare élégance.",
    tastingNotes: {
      appearance: "Robe dorée brillante aux reflets cuivrés",
      nose: "Bouquet complexe d'agrumes confits, vanille, miel d'acacia et notes minérales",
      palate: "Bouche ample et raffinée, belle tension, saveurs de fruits jaunes et d'épices douces",
      finish: "Finale exceptionnellement longue et persistante",
    },
    technicalInfo: {
      alcohol: "13.5%",
      grapes: ["Chardonnay 70%", "Viognier 30%"],
      aging: "12 mois dont 6 mois en fûts de chêne français",
      production: "8 000 bouteilles",
    },
    conservation: {
      temperature: "12-14°C",
      duration: "8-12 ans",
      conditions: "Cave de vieillissement, potentiel de garde exceptionnel",
    },
    foodPairing: {
      appetizers: ["Foie gras poêlé", "Saint-Jacques", "Caviar"],
      mainCourses: ["Homard thermidor", "Volaille de Bresse aux morilles", "Cuisine gastronomique"],
      cheeses: ["Comté vieux", "Beaufort", "Fromages à pâte dure"],
    },
    servingAdvice: {
      temperature: "12-14°C",
      decanting: "Aération recommandée 1h avant",
      glassware: "Verre à vin blanc de Bourgogne grand cru",
      timing: "Optimal après 3-5 ans de garde",
    },
    composition: {
      terroir: "Parcelles d'exception sur coteaux calcaires",
      harvest: "Vendanges manuelles, tri sélectif grain par grain",
      vinification: "Fermentation en fûts, élevage sur lies avec bâtonnage",
      philosophy: "Révéler la noblesse de notre terroir d'exception",
    },
    awards: ["94/100 - Wine Enthusiast", "Médaille d'Or - Concours Mondial de Bruxelles"],
    image: "/wine-opus-blanc.jpg",
    techSheetPdf: "/fiche-technique/ft-blanc-opus-2023.pdf",
    inStock: true,
    featured: true,
  },
  {
    id: "opus-rouge-2020",
    name: "Opus Rouge",
    collection: "opus",
    type: "rouge",
    vintage: 2020,
    price: 48,
    description:
      "Notre cuvée d'exception, assemblage minutieux de nos plus belles parcelles, élevée 18 mois en fûts neufs.",
    longDescription:
      "L'Opus Rouge 2020 représente l'aboutissement de notre art. Sélectionnée uniquement lors des millésimes exceptionnels, cette cuvée provient de nos parcelles centenaires situées sur les meilleurs coteaux. L'assemblage minutieux de Syrah, Mourvèdre et Grenache, suivi d'un élevage de 18 mois en fûts de chêne français neufs, donne naissance à un vin d'une complexité et d'une élégance rares.",
    tastingNotes: {
      appearance: "Robe pourpre intense, presque noire",
      nose: "Bouquet complexe de fruits noirs, épices, cacao et notes torréfiées",
      palate: "Puissance et élégance, tanins nobles, arômes de cassis, truffe et vanille",
      finish: "Finale exceptionnellement longue et raffinée",
    },
    technicalInfo: {
      alcohol: "15%",
      grapes: ["Syrah 50%", "Mourvèdre 30%", "Grenache 20%"],
      aging: "18 mois en fûts de chêne français neufs",
      production: "3 000 bouteilles",
    },
    conservation: {
      temperature: "14-16°C",
      duration: "15-20 ans",
      conditions: "Cave de vieillissement, potentiel de garde exceptionnel",
    },
    foodPairing: {
      appetizers: ["Charcuterie d'exception", "Truffe noire", "Fromages affinés"],
      mainCourses: ["Gibier noble", "Côte de bœuf", "Agneau de lait"],
      cheeses: ["Roquefort AOP", "Fromages d'exception", "Plateau affiné"],
    },
    servingAdvice: {
      temperature: "18-20°C",
      decanting: "Carafage obligatoire 2h avant service",
      glassware: "Verre à vin rouge de Bourgogne grand cru",
      timing: "Optimal après 5-8 ans de garde",
    },
    composition: {
      terroir: "Parcelles centenaires sur terroir d'exception",
      harvest: "Vendanges manuelles, tri grain par grain",
      vinification: "Macération longue 28 jours, élevage en fûts neufs",
      philosophy: "Révéler l'âme profonde de notre terroir d'exception",
    },
    awards: ["97/100 - Robert Parker", "Médaille d'Or - Concours Mondial de Bruxelles"],
    image: "/wine-opus-rouge.jpg",
    techSheetPdf: "/fiche-technique/ft-rouge-opus-2021.pdf",
    inStock: true,
    featured: true,
  },
  
  // Collection Confidentielle
  {
    id: "claire-de-lune-2022",
    name: "Claire de Lune",
    collection: "confidentielle",
    type: "blanc",
    vintage: 2022,
    price: 75,
    description: "Un blanc d'exception aux arômes lunaires, créé pour les amateurs de sensations rares.",
    longDescription:
      "Claire de Lune 2022 tire son nom de cette lumière argentée qui baigne nos vignobles lors des nuits de vendanges. Cette cuvée confidentielle, élaborée à partir de nos plus belles parcelles de Mauzac et de raisins vendangés exclusivement la nuit, capture l'essence mystique de notre terroir dans un vin d'une pureté absolue.",
    tastingNotes: {
      appearance: "Robe dorée aux reflets argentés, cristalline",
      nose: "Arômes complexes de fruits blancs, miel d'acacia, notes florales et minéralité profonde",
      palate: "Bouche ample et sophistiquée, belle tension minérale, saveurs de poire et d'amande",
      finish: "Finale longue et mystérieuse, évoquant la rosée matinale",
    },
    technicalInfo: {
      alcohol: "13%",
      grapes: ["Mauzac 100%"],
      aging: "18 mois en fûts de chêne français, élevage sur lies",
      production: "1 500 bouteilles",
    },
    conservation: {
      temperature: "12-14°C",
      duration: "10-15 ans",
      conditions: "Cave de vieillissement, potentiel de garde exceptionnel",
    },
    foodPairing: {
      appetizers: ["Caviar", "Huîtres spéciales", "Foie gras d'exception"],
      mainCourses: ["Turbot aux truffes", "Langoustines", "Cuisine étoilée"],
      cheeses: ["Fromages d'exception", "Comté 36 mois", "Roquefort Papillon"],
    },
    servingAdvice: {
      temperature: "12-14°C",
      decanting: "Aération recommandée 2h avant",
      glassware: "Verre à vin blanc de Bourgogne grand cru",
      timing: "Vin de prestige, réservé aux grandes occasions",
    },
    composition: {
      terroir: "Parcelles d'élite, terroir calcaire d'exception",
      harvest: "Vendanges nocturnes manuelles, tri extrême",
      vinification: "Fermentation lente, élevage prolongé en fûts",
      philosophy: "Capturer la magie nocturne de notre terroir",
    },
    awards: ["98/100 - James Suckling", "Grand Prix d'Excellence - Concours Mondial"],
    image: "/wine-claire-de-lune.jpg",
    techSheetPdf: "/fiche-technique/ft-blanc-claire-de-lune-2023.pdf",
    inStock: true,
    featured: true,
  },
  
  // Collection Petrichor
  {
    id: "petrichor-rose-2023",
    name: "Petrichor Rosé",
    collection: "confidentielle",
    type: "rose",
    vintage: 2023,
    price: 32,
    description: "Un rosé d'exception aux arômes complexes, évoquant l'odeur de la terre après la pluie.",
    longDescription:
      "Petrichor Rosé 2023 tire son nom de cette odeur si particulière de la terre après la pluie. Cette cuvée confidentielle, élaborée à partir de nos plus belles parcelles de Grenache et Mourvèdre, capture l'essence même de notre terroir dans un rosé d'une complexité rare et d'une élégance absolue.",
    tastingNotes: {
      appearance: "Robe rose cuivré aux reflets dorés",
      nose: "Arômes complexes de fruits rouges confits, épices douces, garrigue et minéralité",
      palate: "Bouche ample et structurée, belle tension, saveurs de fruits rouges et d'herbes sauvages",
      finish: "Finale longue et saline, évoquant la terre mouillée",
    },
    technicalInfo: {
      alcohol: "14%",
      grapes: ["Grenache 60%", "Mourvèdre 40%"],
      aging: "6 mois en fûts de chêne français",
      production: "5 000 bouteilles",
    },
    conservation: {
      temperature: "12-14°C",
      duration: "3-5 ans",
      conditions: "Cave fraîche, potentiel de garde exceptionnel pour un rosé",
    },
    foodPairing: {
      appetizers: ["Tartare de thon", "Carpaccio de Saint-Jacques", "Caviar d'aubergine"],
      mainCourses: ["Bouillabaisse", "Agneau aux herbes", "Cuisine fusion"],
      cheeses: ["Fromages de brebis", "Pélardon", "Picodon"],
    },
    servingAdvice: {
      temperature: "10-12°C",
      decanting: "Aération recommandée 30 minutes",
      glassware: "Verre à vin rouge pour révéler la complexité",
      timing: "Rosé de gastronomie, parfait pour les grandes occasions",
    },
    composition: {
      terroir: "Parcelles d'exception sur schistes et calcaires",
      harvest: "Vendanges manuelles, sélection parcellaire stricte",
      vinification: "Macération pelliculaire courte, élevage sur lies",
      philosophy: "Créer un rosé de garde aux arômes complexes",
    },
    awards: ["95/100 - Revue du Vin de France", "Coup de Cœur - Guide Bettane & Desseauve"],
    image: "/wine-petrichor-rose.png",
    inStock: true,
    featured: true,
  },
  {
    id: "petrichor-rouge-2020",
    name: "Petrichor Rouge",
    collection: "confidentielle",
    type: "rouge",
    vintage: 2020,
    price: 45,
    description:
      "Un rouge d'exception, cuvée confidentielle révélant toute la complexité de notre terroir d'exception.",
    longDescription:
      "Petrichor Rouge 2020 représente l'aboutissement de notre quête d'excellence. Cette cuvée confidentielle, produite uniquement lors des millésimes exceptionnels, révèle la quintessence de notre terroir. L'assemblage minutieux et l'élevage prolongé donnent naissance à un vin d'une profondeur et d'une complexité remarquables.",
    tastingNotes: {
      appearance: "Robe pourpre intense, presque noire",
      nose: "Bouquet complexe de fruits noirs, truffe, cacao, épices nobles et minéralité",
      palate: "Puissance et finesse, tanins soyeux, concentration exceptionnelle",
      finish: "Finale interminable aux notes de réglisse et de pierre mouillée",
    },
    technicalInfo: {
      alcohol: "15%",
      grapes: ["Syrah 50%", "Mourvèdre 30%", "Grenache 20%"],
      aging: "18 mois en fûts neufs, puis 12 mois en bouteille",
      production: "2 500 bouteilles",
    },
    conservation: {
      temperature: "14-16°C",
      duration: "10-15 ans",
      conditions: "Cave de vieillissement, potentiel de garde exceptionnel",
    },
    foodPairing: {
      appetizers: ["Foie gras poêlé", "Truffe noire", "Charcuterie d'exception"],
      mainCourses: ["Gibier noble", "Bœuf de Aubrac", "Plats en sauce"],
      cheeses: ["Roquefort AOP", "Fromages d'exception", "Plateau de fromages affinés"],
    },
    servingAdvice: {
      temperature: "18-20°C",
      decanting: "Carafage obligatoire 2h avant service",
      glassware: "Verre à vin rouge de Bourgogne grand cru",
      timing: "Vin de garde, optimal après 5 ans",
    },
    composition: {
      terroir: "Parcelles centenaires sur terroir d'exception",
      harvest: "Vendanges manuelles, tri grain par grain",
      vinification: "Macération longue 28 jours, élevage en fûts neufs",
      philosophy: "Révéler l'âme profonde de notre terroir d'exception",
    },
    awards: ["97/100 - Robert Parker", "Médaille d'Or - Concours Mondial de Bruxelles"],
    image: "/wine-petrichor-rouge.jpg",
    techSheetPdf: "/fiche-technique/ft-rouge-petrichor-2020.pdf",
    inStock: true,
    featured: true,
  },
  
  // Collection Pigeonnier
  {
    id: "pigeonnier-rouge-2021",
    name: "Pigeonnier",
    collection: "confidentielle",
    type: "rouge",
    vintage: 2021,
    price: 55,
    description: "Un rouge noble inspiré de notre pigeonnier historique, symbole de notre patrimoine.",
    longDescription:
      "Pigeonnier 2021 rend hommage à notre pigeonnier historique, témoin silencieux de cinq siècles de viticulture. Cette cuvée d'exception, élaborée selon des méthodes ancestrales, incarne l'âme de notre domaine et la transmission de notre savoir-faire familial à travers les générations.",
    tastingNotes: {
      appearance: "Robe grenat profond aux reflets tuilés",
      nose: "Bouquet noble de fruits noirs mûrs, épices anciennes, cuir et notes boisées",
      palate: "Structure majestueuse, tanins veloutés, arômes de cerise noire et de réglisse",
      finish: "Finale aristocratique, longue et harmonieuse",
    },
    technicalInfo: {
      alcohol: "14.5%",
      grapes: ["Duras 40%", "Braucol 35%", "Syrah 25%"],
      aging: "24 mois en fûts de chêne français anciens",
      production: "3 500 bouteilles",
    },
    conservation: {
      temperature: "14-16°C",
      duration: "8-12 ans",
      conditions: "Cave traditionnelle, vieillissement noble",
    },
    foodPairing: {
      appetizers: ["Pâté de foie de volaille", "Charcuterie d'Aveyron", "Fromages patrimoniaux"],
      mainCourses: ["Pigeon aux cèpes", "Bœuf braisé", "Gibier à plume"],
      cheeses: ["Roquefort fermier", "Bleu des Causses", "Fromages de caractère"],
    },
    servingAdvice: {
      temperature: "17-19°C",
      decanting: "Carafage traditionnel 90 minutes avant",
      glassware: "Verre à vin rouge patrimoine",
      timing: "Vin d'héritage, parfait pour les célébrations familiales",
    },
    composition: {
      terroir: "Terroir historique autour du pigeonnier",
      harvest: "Vendanges familiales, méthodes ancestrales",
      vinification: "Vinification traditionnelle, respect des anciens",
      philosophy: "Honorer l'héritage et la tradition familiale",
    },
    awards: ["Médaille de Prestige - Patrimoine Viticole", "96/100 - Wine & Spirits"],
    image: "/wine-pigeonnier.jpg",
    techSheetPdf: "/fiche-technique/ft-rouge-cuvee-du-pigeonnier-2022.pdf",
    inStock: true,
    featured: true,
  },
  
  // Collection Perlé
  
  
  // Collection Poussin
  {
    id: "poussin-rose-2023",
    name: "Poussin Rosé",
    collection: "poussin",
    type: "rose",
    vintage: 2023,
    price: 12,
    description: "Un rosé jeune et frais, plein de vitalité, parfait pour découvrir nos vins.",
    longDescription:
      "Poussin Rosé 2023 incarne la jeunesse et la fraîcheur de notre vignoble. Cette cuvée accessible, élaborée pour séduire les nouveaux amateurs de vin, révèle tout le plaisir immédiat d'un rosé gaillacois authentique. Son caractère friand et sa simplicité en font le compagnon idéal des moments de détente.",
    tastingNotes: {
      appearance: "Robe rose tendre aux reflets brillants",
      nose: "Arômes frais de fraises des bois, bonbon acidulé et notes florales",
      palate: "Bouche croquante et vive, belle fraîcheur, saveurs de fruits rouges",
      finish: "Finale désaltérante et gourmande",
    },
    technicalInfo: {
      alcohol: "12%",
      grapes: ["Grenache 60%", "Cinsault 40%"],
      aging: "2 mois en cuve inox",
      production: "30 000 bouteilles",
    },
    conservation: {
      temperature: "8-10°C",
      duration: "1 an",
      conditions: "À consommer rapidement, cave fraîche",
    },
    foodPairing: {
      appetizers: ["Apéritif", "Tapas", "Salades d'été"],
      mainCourses: ["Barbecue", "Poissons grillés", "Plats légers"],
      cheeses: ["Fromages frais", "Chèvre doux", "Mozzarella"],
    },
    servingAdvice: {
      temperature: "8-10°C",
      glassware: "Verre à vin standard",
      timing: "Parfait pour l'apéritif et les moments décontractés",
    },
    composition: {
      terroir: "Vignes jeunes sur coteaux ensoleillés",
      harvest: "Vendanges mécaniques, tri en cave",
      vinification: "Vinification moderne, préservation du fruit",
      philosophy: "Offrir un premier contact avec nos vins",
    },
    awards: [],
    image: "/wine-poussin-rose.jpg",
    techSheetPdf: "/fiche-technique/ft-poussin-rose-moelleux-2024.pdf",
    inStock: true,
    featured: false,
  },
  
  // Collection Méthode  
  {
    id: "methode-blanc-2020",
    name: "Méthode Blanc",
    collection: "methode",
    type: "effervescent",
    vintage: 2020,
    price: 42,
    description: "Un effervescent élaboré selon la méthode traditionnelle, aux bulles fines et persistantes.",
    longDescription:
      "Notre Méthode Blanc 2020 est élaboré selon la méthode traditionnelle champenoise. Après une première fermentation en cuve, le vin subit une seconde fermentation en bouteille, suivie d'un vieillissement sur lies de 24 mois minimum. Cette méthode ancestrale confère à notre effervescent sa finesse de bulles et sa complexité aromatique exceptionnelle.",
    tastingNotes: {
      appearance: "Robe dorée aux reflets cuivrés, bulles fines et persistantes",
      nose: "Arômes de fruits blancs, brioche et notes de miel",
      palate: "Mousse crémeuse, fraîcheur vive, saveurs de poire et d'amande",
      finish: "Finale élégante et rafraîchissante",
    },
    technicalInfo: {
      alcohol: "12.5%",
      grapes: ["Chardonnay 60%", "Mauzac 40%"],
      aging: "24 mois sur lies en bouteille",
      production: "8 000 bouteilles",
    },
    conservation: {
      temperature: "10-12°C",
      duration: "2-3 ans",
      conditions: "Cave fraîche, à l'abri de la lumière, bouteilles couchées",
    },
    foodPairing: {
      appetizers: ["Huîtres", "Saumon fumé", "Tartines de chèvre frais"],
      mainCourses: ["Poissons grillés", "Volaille aux herbes", "Cuisine asiatique"],
      cheeses: ["Rocamadour", "Crottin de Chavignol", "Fromages de chèvre frais"],
      desserts: ["Tarte aux fruits", "Sorbets", "Pâtisseries légères"],
    },
    servingAdvice: {
      temperature: "8-10°C",
      glassware: "Flûte à champagne ou verre à vin blanc",
      timing: "À consommer dans l'année, idéal en apéritif",
    },
    composition: {
      terroir: "Sols argilo-calcaires des coteaux gaillacois",
      harvest: "Vendanges manuelles en septembre, tri sélectif",
      vinification: "Méthode traditionnelle, fermentation en bouteille",
      philosophy: "Maîtriser l'art de l'effervescence traditionnelle",
    },
    awards: ["Médaille d'Or - Concours des Effervescents 2023"],
    image: "/wine-methode-blanc.jpg",
    techSheetPdf: "/fiche-technique/ft-la-methode-blanc.pdf",
    inStock: true,
    featured: false,
  },
  {
    id: "methode-rose-2020",
    name: "Méthode Rosé",
    collection: "methode",
    type: "effervescent",
    vintage: 2020,
    price: 45,
    description: "Un effervescent rosé d'exception, fusion parfaite entre tradition et modernité.",
    longDescription:
      "Méthode Rosé 2020 représente notre vision moderne de l'effervescence. Élaboré selon la méthode traditionnelle à partir de Pinot Noir et Grenache, ce rosé effervescent allie la finesse des bulles à l'élégance d'un rosé de caractère. Un vieillissement prolongé sur lies lui confère complexité et raffinement.",
    tastingNotes: {
      appearance: "Robe rose saumon aux reflets cuivrés, bulles fines et élégantes",
      nose: "Bouquet complexe de fruits rouges, pâtisserie et notes épicées",
      palate: "Mousse crémeuse, belle structure, arômes de fraise et de brioche",
      finish: "Finale longue et sophistiquée",
    },
    technicalInfo: {
      alcohol: "12.5%",
      grapes: ["Pinot Noir 60%", "Grenache 40%"],
      aging: "30 mois sur lies en bouteille",
      production: "5 000 bouteilles",
    },
    conservation: {
      temperature: "10-12°C",
      duration: "3-4 ans",
      conditions: "Cave de prestige, à l'abri de la lumière",
    },
    foodPairing: {
      appetizers: ["Langoustines", "Saumon gravlax", "Caviar"],
      mainCourses: ["Homard grillé", "Cuisine raffinée", "Volaille noble"],
      cheeses: ["Fromages affinés", "Comté", "Roquefort"],
      desserts: ["Desserts aux fruits rouges", "Macarons", "Pâtisserie fine"],
    },
    servingAdvice: {
      temperature: "8-10°C",
      glassware: "Flûte à champagne premium",
      timing: "Effervescent de prestige pour les grandes occasions",
    },
    composition: {
      terroir: "Sélection de nos meilleures parcelles",
      harvest: "Vendanges manuelles matinales, tri sélectif",
      vinification: "Méthode traditionnelle, dégorgement à la main",
      philosophy: "Créer un effervescent rosé d'exception",
    },
    awards: ["93/100 - Wine Spectator", "Médaille d'Or - Effervescent Trophy"],
    image: "/wine-methode-rose.jpg",
    techSheetPdf: "/fiche-technique/ft-la-methode-rosee-23.pdf",
    inStock: true,
    featured: true,
  },
  
  {
    id: "blanc-minerale-2022",
    name: "Blanc Minérale",
    collection: "classique",
    type: "blanc",
    vintage: 2022,
    price: 24,
    description:
      "Un blanc sec et minéral, expression pure de notre terroir calcaire, aux notes d'agrumes et de fleurs blanches.",
    longDescription:
      "Le Blanc Minérale 2022 est l'expression la plus pure de notre terroir calcaire. Issu de vignes de Chardonnay et Viognier plantées sur les coteaux les mieux exposés, ce vin bénéficie d'une vinification soignée en cuves inox pour préserver toute sa fraîcheur. Un élevage partiel sur lies fines apporte rondeur et complexité à ce blanc d'une grande élégance.",
    tastingNotes: {
      appearance: "Robe dorée brillante aux reflets verts",
      nose: "Arômes d'agrumes, fleurs blanches et notes minérales caractéristiques",
      palate: "Bouche fraîche et vive, belle acidité, saveurs d'agrumes et de pierre à fusil",
      finish: "Finale cristalline et persistante",
    },
    technicalInfo: {
      alcohol: "13%",
      grapes: ["Chardonnay 70%", "Viognier 30%"],
      aging: "6 mois sur lies fines",
      production: "12 000 bouteilles",
    },
    conservation: {
      temperature: "12-14°C",
      duration: "3-5 ans",
      conditions: "Cave tempérée, bouteilles couchées, éviter les variations de température",
    },
    foodPairing: {
      appetizers: ["Foie gras", "Escargots", "Charcuterie fine"],
      mainCourses: ["Poissons en sauce", "Volaille fermière", "Plats épicés"],
      cheeses: ["Roquefort", "Bleu des Causses", "Fromages à pâte persillée"],
    },
    servingAdvice: {
      temperature: "10-12°C",
      glassware: "Verre à vin blanc de Bourgogne",
      timing: "Ouvrir 30 minutes avant dégustation",
    },
    composition: {
      terroir: "Coteaux argilo-calcaires exposés sud-ouest",
      harvest: "Vendanges manuelles, maturité optimale",
      vinification: "Pressurage doux, fermentation contrôlée à 16°C",
      philosophy: "Révéler l'authenticité des cépages gaillacois",
    },
    awards: ["Guide Hachette 2024 - 1 étoile"],
    image: "/wine-blanc-minerale.png",
    inStock: true,
    featured: false,
  },
  {
    id: "cuvee-prestige-2019",
    name: "Cuvée Prestige",
    collection: "methode",
    type: "rouge",
    vintage: 2019,
    price: 65,
    description:
      "Notre cuvée d'exception, assemblage minutieux de nos plus belles parcelles, élevée 18 mois en fûts neufs.",
    longDescription:
      "La Cuvée Prestige 2019 représente l'aboutissement de notre art. Sélectionnée uniquement lors des millésimes exceptionnels, cette cuvée provient de nos parcelles centenaires situées sur les meilleurs coteaux. L'assemblage minutieux de Syrah, Mourvèdre et Grenache, suivi d'un élevage de 18 mois en fûts de chêne français neufs, donne naissance à un vin d'une complexité et d'une élégance rares.",
    tastingNotes: {
      appearance: "Robe pourpre intense, presque noire",
      nose: "Bouquet complexe de fruits noirs, épices, cacao et notes torréfiées",
      palate: "Puissance et élégance, tanins nobles, arômes de cassis, truffe et vanille",
      finish: "Finale exceptionnellement longue et raffinée",
    },
    technicalInfo: {
      alcohol: "15%",
      grapes: ["Syrah 50%", "Mourvèdre 30%", "Grenache 20%"],
      aging: "18 mois en fûts de chêne français neufs",
      production: "3 000 bouteilles",
    },
    conservation: {
      temperature: "14-16°C",
      duration: "5-8 ans",
      conditions: "Cave fraîche et sombre, bouteilles couchées",
    },
    foodPairing: {
      appetizers: ["Charcuterie du terroir", "Pâtés de campagne", "Fromages affinés"],
      mainCourses: ["Cassoulet", "Confit de canard", "Gibier", "Viandes grillées"],
      cheeses: ["Roquefort", "Cantal", "Fromages du terroir"],
    },
    servingAdvice: {
      temperature: "16-18°C",
      decanting: "Carafage recommandé 1h avant service",
      glassware: "Verre à vin rouge de Bordeaux",
      timing: "Optimal après 2-3 ans de garde",
    },
    composition: {
      terroir: "Sols argilo-calcaires et grès, exposition sud",
      harvest: "Vendanges manuelles, tri parcellaire",
      vinification: "Macération longue 21 jours, pigeage traditionnel",
      philosophy: "Exprimer la typicité des cépages gaillacois anciens",
    },
    awards: ["95/100 - Robert Parker", "Médaille d'Or - Concours Mondial de Bruxelles 2022"],
    image: "/wine-cuvee-prestige.png",
    inStock: true,
    featured: true,
  },
  {
    id: "effervescent-methode-2020",
    name: "Effervescent Méthode",
    collection: "methode",
    type: "effervescent",
    vintage: 2020,
    price: 42,
    description: "Un effervescent élaboré selon la méthode traditionnelle, aux bulles fines et persistantes.",
    longDescription:
      "Notre Effervescent Méthode 2020 est élaboré selon la méthode traditionnelle champenoise. Après une première fermentation en cuve, le vin subit une seconde fermentation en bouteille, suivie d'un vieillissement sur lies de 24 mois minimum. Cette méthode ancestrale confère à notre effervescent sa finesse de bulles et sa complexité aromatique exceptionnelle.",
    tastingNotes: {
      appearance: "Robe dorée aux reflets cuivrés, bulles fines et persistantes",
      nose: "Arômes de fruits blancs, brioche et notes de miel",
      palate: "Mousse crémeuse, fraîcheur vive, saveurs de poire et d'amande",
      finish: "Finale élégante et rafraîchissante",
    },
    technicalInfo: {
      alcohol: "12.5%",
      grapes: ["Chardonnay 60%", "Pinot Noir 40%"],
      aging: "24 mois sur lies en bouteille",
      production: "8 000 bouteilles",
    },
    conservation: {
      temperature: "10-12°C",
      duration: "2-3 ans",
      conditions: "Cave fraîche, à l'abri de la lumière, bouteilles couchées",
    },
    foodPairing: {
      appetizers: ["Huîtres", "Saumon fumé", "Tartines de chèvre frais"],
      mainCourses: ["Poissons grillés", "Volaille aux herbes", "Cuisine asiatique"],
      cheeses: ["Rocamadour", "Crottin de Chavignol", "Fromages de chèvre frais"],
      desserts: ["Tarte aux fruits", "Sorbets", "Pâtisseries légères"],
    },
    servingAdvice: {
      temperature: "8-10°C",
      glassware: "Flûte à champagne ou verre à vin blanc",
      timing: "À consommer dans l'année, idéal en apéritif",
    },
    composition: {
      terroir: "Sols argilo-calcaires des coteaux gaillacois",
      harvest: "Vendanges manuelles en septembre, tri sélectif",
      vinification: "Méthode ancestrale, fermentation naturelle en bouteille",
      philosophy: "Respecter la tradition gaillacoise du perlé naturel",
    },
    awards: ["Médaille d'Or - Concours des Effervescents 2023"],
    image: "/wine-effervescent-methode.png",
    inStock: true,
    featured: false,
  },
  {
    id: "rose-gourmand-2023",
    name: "Rosé Gourmand",
    collection: "fruitees",
    type: "rose",
    vintage: 2023,
    price: 18,
    description: "Un rosé expressif et gourmand, aux arômes de fruits rouges frais et de fleurs de garrigue.",
    longDescription:
      "Le Rosé Gourmand 2023 capture toute la fraîcheur et l'exubérance de notre terroir méditerranéen. Élaboré par saignée à partir de nos plus beaux Grenache et Cinsault, ce rosé révèle des arômes intenses de fruits rouges et de fleurs sauvages. Sa vinification à basse température préserve tous les arômes primaires du fruit.",
    tastingNotes: {
      appearance: "Robe rose saumon aux reflets brillants",
      nose: "Explosion de fruits rouges frais, fraise, framboise et notes florales",
      palate: "Attaque fraîche, belle vivacité, saveurs de fruits rouges et d'épices douces",
      finish: "Finale croquante et désaltérante",
    },
    technicalInfo: {
      alcohol: "13%",
      grapes: ["Grenache 70%", "Cinsault 30%"],
      aging: "3 mois en cuve inox",
      production: "20 000 bouteilles",
    },
    conservation: {
      temperature: "10-12°C",
      duration: "1-2 ans",
      conditions: "À consommer jeune, cave fraîche",
    },
    foodPairing: {
      appetizers: ["Salade de chèvre chaud", "Tapenade", "Crudités"],
      mainCourses: ["Grillades", "Poissons", "Cuisine méditerranéenne"],
      cheeses: ["Fromages frais", "Mozzarella", "Feta"],
    },
    servingAdvice: {
      temperature: "8-10°C",
      glassware: "Verre à vin blanc ou rosé",
      timing: "Idéal en apéritif ou repas estival",
    },
    composition: {
      terroir: "Coteaux bien exposés, sols drainants",
      harvest: "Vendanges matinales pour préserver la fraîcheur",
      vinification: "Pressurage direct, fermentation à basse température",
      philosophy: "Capturer la fraîcheur et l'élégance du fruit",
    },
    awards: [],
    image: "/wine-rose-gourmand.png",
    inStock: true,
    featured: true,
  },
  {
    id: "rouge-fruité-2022",
    name: "Rouge Fruité",
    collection: "fruitees",
    type: "rouge",
    vintage: 2022,
    price: 22,
    description: "Un rouge jeune et dynamique, aux tanins souples et aux arômes de fruits noirs éclatants.",
    longDescription:
      "Le Rouge Fruité 2022 incarne la modernité de notre approche viticole. Issu de jeunes vignes de Merlot et Cabernet Sauvignon, ce vin privilégie l'expression du fruit et la souplesse. Une macération courte et un élevage minimal en cuve permettent de conserver toute la fraîcheur et l'intensité aromatique des raisins.",
    tastingNotes: {
      appearance: "Robe rouge rubis éclatante",
      nose: "Arômes intenses de fruits noirs, mûre, cassis et notes épicées",
      palate: "Bouche ronde et fruitée, tanins souples, belle concentration",
      finish: "Finale gourmande sur les fruits noirs",
    },
    technicalInfo: {
      alcohol: "13.5%",
      grapes: ["Merlot 60%", "Cabernet Sauvignon 40%"],
      aging: "6 mois en cuve inox",
      production: "18 000 bouteilles",
    },
    conservation: {
      temperature: "12-14°C",
      duration: "3-5 ans",
      conditions: "Cave fraîche, potentiel de garde exceptionnel pour un rosé",
    },
    foodPairing: {
      appetizers: ["Tartare de thon", "Carpaccio de Saint-Jacques", "Caviar d'aubergine"],
      mainCourses: ["Bouillabaisse", "Agneau aux herbes", "Cuisine fusion"],
      cheeses: ["Fromages de brebis", "Pélardon", "Picodon"],
    },
    servingAdvice: {
      temperature: "10-12°C",
      decanting: "Aération recommandée 30 minutes",
      glassware: "Verre à vin rouge pour révéler la complexité",
      timing: "Rosé de gastronomie, parfait pour les grandes occasions",
    },
    composition: {
      terroir: "Parcelles d'exception sur schistes et calcaires",
      harvest: "Vendanges manuelles, sélection parcellaire stricte",
      vinification: "Macération pelliculaire courte, élevage sur lies",
      philosophy: "Créer un rosé de garde aux arômes complexes",
    },
    awards: ["95/100 - Revue du Vin de France", "Coup de Cœur - Guide Bettane & Desseauve"],
    image: "/wine-rouge-fruité.png",
    inStock: true,
    featured: false,
  },
  {
    id: "perle-blanc-2023",
    name: "Perlé Blanc",
    collection: "domeni",
    type: "blanc",
    vintage: 2023,
    price: 16,
    description:
      "Vin blanc sec au perlant délicat, d'une fraîcheur élégante idéale pour l'apéritif ou pour accompagner les fruits de mer.",
    longDescription:
      "Typiquement gaillacois, ce perlé exprime la gourmandise du Mauzac avec une fine effervescence naturelle. Sa bouche fraîche et désaltérante en fait un compagnon privilégié de l'apéritif et des produits de la mer.",
    tastingNotes: {
      appearance: "Robe jaune pâle aux reflets dorés, fine effervescence naturelle",
      nose: "Arômes délicats de pomme verte, poire, fleurs blanches et notes miellées",
      palate: "Bouche fraîche et vive, bulles fines, saveurs fruitées et minérales",
      finish: "Finale désaltérante aux notes d'agrumes",
    },
    technicalInfo: {
      alcohol: "11.5%",
      grapes: ["Mauzac 100%"],
      aging: "Méthode ancestrale, 4 mois sur lies",
      production: "25 000 bouteilles",
    },
    conservation: {
      temperature: "10-12°C",
      duration: "2-3 ans",
      conditions: "Cave fraîche, à l'abri de la lumière, bouteilles couchées",
    },
    foodPairing: {
      appetizers: ["Huîtres", "Saumon fumé", "Tartines de chèvre frais"],
      mainCourses: ["Poissons grillés", "Volaille aux herbes", "Cuisine asiatique"],
      cheeses: ["Rocamadour", "Crottin de Chavignol", "Fromages de chèvre frais"],
      desserts: ["Tarte aux fruits", "Sorbets", "Pâtisseries légères"],
    },
    servingAdvice: {
      temperature: "8-10°C",
      glassware: "Flûte à champagne ou verre à vin blanc",
      timing: "À consommer dans l'année, idéal en apéritif",
    },
    composition: {
      terroir: "Sols argilo-calcaires des coteaux gaillacois",
      harvest: "Vendanges manuelles en septembre, tri sélectif",
      vinification: "Méthode ancestrale, fermentation naturelle en bouteille",
      philosophy: "Respecter la tradition gaillacoise du perlé naturel",
    },
    awards: ["Médaille d'Argent - Concours Général Agricole 2024"],
    image: "/wine-perle-blanc.jpg",
    techSheetPdf: "/fiche-technique/ft-perle-2023.pdf",
    inStock: true,
    featured: true,
  },
  {
    id: "tradition-blanc-2022",
    name: "Tradition Blanc",
    collection: "domeni",
    type: "blanc",
    vintage: 2022,
    price: 18,
    description:
      "Un blanc sec traditionnel alliant Mauzac et Loin de l'Œil, expression authentique du terroir gaillacois.",
    longDescription:
      "Le Tradition Blanc 2022 célèbre l'authenticité des cépages gaillacois. L'assemblage harmonieux de Mauzac et Loin de l'Œil, cépages autochtones de l'appellation, révèle toute la typicité de notre terroir. Ce vin incarne parfaitement notre philosophie : 'Un bon vin, c'est avant tout celui qu'on aime'.",
    tastingNotes: {
      appearance: "Robe jaune dorée aux reflets brillants",
      nose: "Bouquet expressif de fruits blancs, acacia, miel et notes minérales",
      palate: "Attaque franche, belle rondeur, équilibre parfait entre fraîcheur et richesse",
      finish: "Finale persistante aux arômes de fruits secs et d'épices douces",
    },
    technicalInfo: {
      alcohol: "12.5%",
      grapes: ["Mauzac 60%", "Loin de l'Œil 40%"],
      aging: "8 mois en cuve inox avec bâtonnage",
      production: "20 000 bouteilles",
    },
    conservation: {
      temperature: "12-14°C",
      duration: "3-5 ans",
      conditions: "Cave tempérée, bouteilles couchées, éviter les variations de température",
    },
    foodPairing: {
      appetizers: ["Foie gras", "Escargots", "Charcuterie fine"],
      mainCourses: ["Poissons en sauce", "Volaille fermière", "Plats épicés"],
      cheeses: ["Roquefort", "Bleu des Causses", "Fromages à pâte persillée"],
    },
    servingAdvice: {
      temperature: "10-12°C",
      glassware: "Verre à vin blanc de Bourgogne",
      timing: "Ouvrir 30 minutes avant dégustation",
    },
    composition: {
      terroir: "Coteaux argilo-calcaires exposés sud-ouest",
      harvest: "Vendanges manuelles, maturité optimale",
      vinification: "Pressurage doux, fermentation contrôlée à 16°C",
      philosophy: "Révéler l'authenticité des cépages gaillacois",
    },
    awards: ["Guide Hachette 2024 - 1 étoile"],
    image: "/wine-tradition-blanc.png",
    inStock: true,
    featured: false,
  },
  {
    id: "tradition-rouge-2021",
    name: "Tradition Rouge",
    collection: "domeni",
    type: "rouge",
    vintage: 2021,
    price: 20,
    description: "Un rouge généreux assemblant Duras et Braucol, cépages emblématiques du vignoble gaillacois.",
    longDescription:
      "Le Tradition Rouge 2021 puise sa force dans l'assemblage de deux cépages autochtones exceptionnels : le Duras et le Braucol. Ces variétés anciennes, parfaitement adaptées à notre terroir, donnent naissance à un vin de caractère qui exprime toute la générosité de notre philosophie familiale.",
    tastingNotes: {
      appearance: "Robe rouge profond aux reflets violacés",
      nose: "Arômes complexes de fruits noirs, épices, garrigue et notes animales subtiles",
      palate: "Structure tannique noble, belle concentration, saveurs de mûre et poivre",
      finish: "Finale longue et épicée, caractéristique du Braucol",
    },
    technicalInfo: {
      alcohol: "13.5%",
      grapes: ["Duras 60%", "Braucol 40%"],
      aging: "12 mois en fûts de chêne français",
      production: "18 000 bouteilles",
    },
    conservation: {
      temperature: "14-16°C",
      duration: "5-8 ans",
      conditions: "Cave fraîche et sombre, bouteilles couchées",
    },
    foodPairing: {
      appetizers: ["Charcuterie du terroir", "Pâtés de campagne", "Fromages affinés"],
      mainCourses: ["Cassoulet", "Confit de canard", "Gibier", "Viandes grillées"],
      cheeses: ["Roquefort", "Cantal", "Fromages du terroir"],
    },
    servingAdvice: {
      temperature: "16-18°C",
      decanting: "Carafage recommandé 1h avant service",
      glassware: "Verre à vin rouge de Bordeaux",
      timing: "Optimal après 2-3 ans de garde",
    },
    composition: {
      terroir: "Sols argilo-calcaires et grès, exposition sud",
      harvest: "Vendanges manuelles, tri parcellaire",
      vinification: "Macération longue 21 jours, pigeage traditionnel",
      philosophy: "Exprimer la typicité des cépages gaillacois anciens",
    },
    awards: ["Médaille d'Or - Concours des Vins de Gaillac 2023"],
    image: "/wine-tradition-rouge.png",
    inStock: true,
    featured: true,
  },
  {
    id: "tradition-rose-2023",
    name: "Tradition Rosé",
    collection: "domeni",
    type: "rose",
    vintage: 2023,
    price: 17,
    description: "Un rosé délicat issu de Duras et Syrah, alliant fraîcheur gaillacoise et élégance méditerranéenne.",
    longDescription:
      "Le Tradition Rosé 2023 marie harmonieusement la typicité gaillacoise du Duras à l'élégance de la Syrah. Cette cuvée exprime notre savoir-faire dans l'art délicat de l'élaboration des rosés, privilégiant la finesse et la fraîcheur pour créer un vin de plaisir immédiat.",
    tastingNotes: {
      appearance: "Robe rose pâle aux reflets saumon",
      nose: "Bouquet délicat de fruits rouges, pêche blanche et notes florales",
      palate: "Attaque fraîche, belle vivacité, saveurs de fraise et d'agrumes",
      finish: "Finale croquante et rafraîchissante",
    },
    technicalInfo: {
      alcohol: "12.5%",
      grapes: ["Duras 70%", "Syrah 30%"],
      aging: "4 mois en cuve inox",
      production: "15 000 bouteilles",
    },
    conservation: {
      temperature: "10-12°C",
      duration: "1-2 ans",
      conditions: "À consommer jeune, cave fraîche",
    },
    foodPairing: {
      appetizers: ["Salade de chèvre chaud", "Tapenade", "Crudités"],
      mainCourses: ["Grillades", "Poissons", "Cuisine méditerranéenne"],
      cheeses: ["Fromages frais", "Mozzarella", "Feta"],
    },
    servingAdvice: {
      temperature: "8-10°C",
      glassware: "Verre à vin blanc ou rosé",
      timing: "Idéal en apéritif ou repas estival",
    },
    composition: {
      terroir: "Coteaux bien exposés, sols drainants",
      harvest: "Vendanges matinales pour préserver la fraîcheur",
      vinification: "Pressurage direct, fermentation à basse température",
      philosophy: "Capturer la fraîcheur et l'élégance du fruit",
    },
    awards: [],
    image: "/wine-tradition-rose.png",
    inStock: true,
    featured: false,
  },
  
  
]

export function getWineBySlug(slug: string) {
  return wines.find((wine) => wine.id === slug)
}
