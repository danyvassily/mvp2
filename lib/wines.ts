export type Cuvee = {
  title: string;
  slug: string;
  route: string;
  pdf?: string;         // si override, sinon dérivé de slug
  colorTag?: "Blanc" | "Rosé" | "Rouge" | "Effervescent";
  image?: string;
};

export type Gamme = {
  id: string;
  title: string;
  description: string;
  accent: string;
  cover?: string;
  cuvees: Cuvee[];
};

// Map des PDFs avec noms spécifiques (overrides)
const pdfOverrides: Record<string, string> = {
  "claire-de-lune": "/Page/Nos Cuvée-ok/Gamme Confidentiel/Page cuvée Claire de Lune/FT_blanc_claire_de_lune_2023.pdf",
  "domeni-blanc": "/Page/Nos Cuvée-ok/Gamme Domeni/Page Cuvée Domeni blanc/FT_blanc_Domeni 2024.pdf",
  "domeni-rose": "/Page/Nos Cuvée-ok/Gamme Domeni/Page Cuvée domeni Rosé/FT_rosé_Domeni_2024 (1).pdf",
  "domeni-rouge": "/Page/Nos Cuvée-ok/Gamme Domeni/Page Cuvée Domeni Rouge/FT_rouge_Domeni_2022.pdf",
  "opus-blanc": "/Page/Nos Cuvée-ok/Gamme Opus/Page Cuvée Opus Blanc/FT_blanc_Opus_2023.pdf",
  "opus-rouge": "/Page/Nos Cuvée-ok/Gamme Opus/Page Cuvée Opus Rouge/FT_rouge_opus_2021.pdf",
  "petrichor-rouge": "/Page/Nos Cuvée-ok/Gamme Petrichor/Page Cuvée Pertichor Rouge/FT_Rouge_Petrichor_2020.pdf",
  "petrichor-rose": "/Page/Nos Cuvée-ok/Gamme Petrichor/Page Cuvée Petrichor Rosé/FT_Rosé_Petrichor_2024.pdf",
  "pigeonnier": "/Page/Nos Cuvée-ok/Gamme Confidentiel/Page Cuvée Pigeonnier/FT_Rouge_Cuvée_du_Pigeonnier_2022.pdf",
  "perle": "/Page/Nos Cuvée-ok/Gamme perlé/Page cuvée Perlé/FT_perlé_2023.pdf",
  "poussin-blanc": "/Page/Nos Cuvée-ok/Gamme poussin/Page Cuvée poussin Blanc/FT_poussin_moelleux_2024.pdf",
  "poussin-rose": "/Page/Nos Cuvée-ok/Gamme poussin/Page Cuvée Poussin Rosé/FT_poussin rosé_moelleux_2024.pdf",
  "methode-blanc": "/Page/Nos Cuvée-ok/Gamme Méthode Ancestral/Page Méthode Blanche/FT_la_méthode_blanc.pdf",
  "methode-rose": "/Page/Nos Cuvée-ok/Gamme Méthode Ancestral/Page Méthode Rosé/FT_la_méthode_rosée_23.pdf"
};

// Helper pour obtenir le PDF path
export function getPdfPath(slug: string): string {
  return pdfOverrides[slug] || `/fiche-technique/${slug}.pdf`;
}

export const gammes: Gamme[] = [
  {
    id: "domeni",
    title: "Doméni",
    description: "L'expression pure du terroir gaillacois. Cette collection incarne l'authenticité de nos cépages autochtones, révélant la typicité de notre terroir avec élégance et caractère.",
    accent: "#D4AF37", // Or élégant
    cover: "/gamme-domeni.jpg",
    cuvees: [
      {
        title: "Doméni Blanc",
        slug: "domeni-blanc",
        route: "/les-vins/domeni-blanc",
        pdf: getPdfPath("domeni-blanc"),
        colorTag: "Blanc",
        image: "/Page/Nos Cuvée-ok/Gamme Domeni/Page Cuvée Domeni blanc/BLANC_DOMENI_sf.png"
      },
      {
        title: "Doméni Rosé", 
        slug: "domeni-rose",
        route: "/les-vins/domeni-rose",
        pdf: getPdfPath("domeni-rose"),
        colorTag: "Rosé",
        image: "/Page/Nos Cuvée-ok/Gamme Domeni/Page Cuvée domeni Rosé/ROSE DOMENI-sf.png"
      },
      {
        title: "Doméni Rouge",
        slug: "domeni-rouge", 
        route: "/les-vins/domeni-rouge",
        pdf: getPdfPath("domeni-rouge"),
        colorTag: "Rouge",
        image: "/Page/Nos Cuvée-ok/Gamme Domeni/Page Cuvée Domeni Rouge/ROUGE_DOMENI_sf.png"
      }
    ]
  },
  {
    id: "opus",
    title: "Opus",
    description: "L'excellence absolue. Nos cuvées les plus prestigieuses, issues de nos parcelles d'exception et élevées avec un soin méticuleux pour révéler toute la noblesse de notre terroir.",
    accent: "#8B4513", // Bordeaux noble
    cover: "/gamme-opus.jpg",
    cuvees: [
      {
        title: "Opus Blanc",
        slug: "opus-blanc",
        route: "/les-vins/opus-blanc", 
        pdf: getPdfPath("opus-blanc"),
        colorTag: "Blanc",
        image: "/Page/Nos Cuvée-ok/Gamme Opus/Page Cuvée Opus Blanc/BLANC_OPUS_sf.png"
      },
      {
        title: "Opus Rouge",
        slug: "opus-rouge",
        route: "/les-vins/opus-rouge",
        pdf: getPdfPath("opus-rouge"),
        colorTag: "Rouge",
        image: "/Page/Nos Cuvée-ok/Gamme Opus/Page Cuvée Opus Rouge/ROUGE_OPUS_sf.png"
      }
    ]
  },
  {
    id: "methode",
    title: "Méthode Traditionnelle",
    description: "L'art de l'effervescence selon nos traditions. Élaborés selon la méthode ancestrale gaillacoise, ces vins révèlent la finesse de nos bulles et la complexité de nos terroirs.",
    accent: "#4A90E2", // Bleu sophistiqué
    cover: "/gamme-methode.jpg",
    cuvees: [
      {
        title: "Méthode Blanc",
        slug: "methode-blanc",
        route: "/les-vins/methode-blanc",
        pdf: getPdfPath("methode-blanc"), 
        colorTag: "Effervescent",
        image: "/Page/Nos Cuvée-ok/Gamme Méthode Ancestral/Page Méthode Blanche/LA_METHODE_BLANC_st.png"
      },
      {
        title: "Méthode Rosé",
        slug: "methode-rose",
        route: "/les-vins/methode-rose",
        pdf: getPdfPath("methode-rose"),
        colorTag: "Effervescent", 
        image: "/Page/Nos Cuvée-ok/Gamme Méthode Ancestral/Page Méthode Rosé/LA_METHODE_ROSE_SF.png"
      },
      {
        title: "Perlé",
        slug: "perle",
        route: "/les-vins/perle",
        pdf: getPdfPath("perle"),
        colorTag: "Effervescent",
        image: "/Page/Nos Cuvée-ok/Gamme perlé/Page cuvée Perlé/BLANC_PERLE_sf.png"
      }
    ]
  },
  {
    id: "poussin", 
    title: "Poussin",
    description: "Fraîcheur et gourmandise. Cette collection accessible invite à la découverte de nos vins dans un esprit de convivialité, parfaite pour les nouveaux amateurs de vin.",
    accent: "#50C878", // Vert émeraude
    cover: "/gamme-poussin.jpg",
    cuvees: [
      {
        title: "Poussin Blanc",
        slug: "poussin-blanc",
        route: "/les-vins/poussin-blanc",
        pdf: getPdfPath("poussin-blanc"),
        colorTag: "Blanc",
        image: "/Page/Nos Cuvée-ok/Gamme poussin/Page Cuvée poussin Blanc/POUSSIN BLANC-SF.png"
      },
      {
        title: "Poussin Rosé",
        slug: "poussin-rose", 
        route: "/les-vins/poussin-rose",
        pdf: getPdfPath("poussin-rose"),
        colorTag: "Rosé",
        image: "/Page/Nos Cuvée-ok/Gamme poussin/Page Cuvée Poussin Rosé/POUSSIN ROSE-SF.png"
      }
    ]
  },
  {
    id: "petrichor",
    title: "Petrichor",
    description: "Signature de notre savoir-faire. Cette gamme évoque l'odeur si particulière de la terre après la pluie, capturant l'essence même de notre terroir dans des cuvées d'exception.",
    accent: "#8B7355", // Terre cuite
    cover: "/Page/homepage/Nos vins gamme pétrichor.jpg",
    cuvees: [
      {
        title: "Petrichor Rouge",
        slug: "petrichor-rouge",
        route: "/les-vins/petrichor-rouge", 
        pdf: getPdfPath("petrichor-rouge"),
        colorTag: "Rouge",
        image: "/Page/Nos Cuvée-ok/Gamme Petrichor/Page Cuvée Pertichor Rouge/PETRICHOR_st.png"
      },
      {
        title: "Petrichor Rosé",
        slug: "petrichor-rose",
        route: "/les-vins/petrichor-rose",
        pdf: getPdfPath("petrichor-rose"),
        colorTag: "Rosé",
        image: "/Page/Nos Cuvée-ok/Gamme Petrichor/Page Cuvée Petrichor Rosé/PETRICHOR__Ros_SF.png"
      }
    ]
  },
  {
    id: "signatures",
    title: "Signatures",
    description: "Cuvées rares et mystérieuses. Chacune raconte une histoire unique, issue de parcelles sélectionnées et de vinifications d'exception pour les amateurs les plus exigeants.",
    accent: "#9370DB", // Violet mystique
    cover: "/gamme-confidentielle.jpg", 
    cuvees: [
      {
        title: "Claire de Lune",
        slug: "claire-de-lune",
        route: "/les-vins/claire-de-lune",
        pdf: getPdfPath("claire-de-lune"),
        colorTag: "Blanc",
        image: "/Page/Nos Cuvée-ok/Gamme Confidentiel/Page cuvée Claire de Lune/CLAIRE_DE_LUNE_sf.png"
      },
      {
        title: "Pigeonnier",
        slug: "pigeonnier",
        route: "/les-vins/pigeonnier",
        pdf: getPdfPath("pigeonnier"),
        colorTag: "Rouge",
        image: "/Page/Nos Cuvée-ok/Gamme Confidentiel/Page Cuvée Pigeonnier/PIGEONNIER_sf.png"
      }
    ]
  }
];

// Helper pour filtrer par couleur
export function filterCuveesByColor(cuvees: Cuvee[], colorFilter?: string): Cuvee[] {
  if (!colorFilter || colorFilter === "Tous") {
    return cuvees;
  }
  return cuvees.filter(cuvee => cuvee.colorTag === colorFilter);
}

// Helper pour obtenir toutes les couleurs disponibles
export function getAvailableColors(): string[] {
  const colors = new Set<string>();
  gammes.forEach(gamme => {
    gamme.cuvees.forEach(cuvee => {
      if (cuvee.colorTag) {
        colors.add(cuvee.colorTag);
      }
    });
  });
  return ["Tous", ...Array.from(colors).sort()];
}

// Helper pour obtenir les cuvées groupées par couleur (pour le menu navigation)
export function getCuveesByColor() {
  const cuveesByColor: Record<string, Cuvee[]> = {
    "Blanc": [],
    "Rosé": [],
    "Rouge": [],
    "Effervescent": []
  };
  
  const specialites: Cuvee[] = [];
  
  gammes.forEach(gamme => {
    gamme.cuvees.forEach(cuvee => {
      // Les cuvées de la gamme "Signatures" vont dans Spécialités
      if (gamme.id === "signatures") {
        specialites.push(cuvee);
      } else if (cuvee.colorTag && cuveesByColor[cuvee.colorTag]) {
        cuveesByColor[cuvee.colorTag].push(cuvee);
      }
    });
  });
  
  return {
    byColor: cuveesByColor,
    specialites
  };
}
