"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ChevronDown, ChevronUp, Search } from "lucide-react"

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [openItems, setOpenItems] = useState<number[]>([])

  const faqCategories = [
    {
      title: "Visites & Dégustations",
      questions: [
        {
          question: "Comment réserver une visite du domaine ?",
          answer:
            "Vous pouvez réserver directement en ligne sur notre site dans la section 'Réservation' ou nous appeler au 05 63 56 32 75. Nous recommandons de réserver au moins 48h à l'avance, surtout en haute saison.",
        },
        {
          question: "Combien de temps dure une visite ?",
          answer:
            "Nos visites durent entre 1h30 et 2h selon la formule choisie. La visite classique (1h30) comprend la découverte du domaine et une dégustation de 4 vins. La visite prestige (2h) inclut en plus la visite des chais et une dégustation de nos cuvées d'exception.",
        },
        {
          question: "Les visites sont-elles adaptées aux enfants ?",
          answer:
            "Oui, nous accueillons les familles avec plaisir ! Nous proposons des jus de raisin pour les enfants pendant les dégustations et adaptons le discours selon l'âge. Le domaine dispose d'espaces extérieurs sécurisés.",
        },
        {
          question: "Peut-on visiter sans réservation ?",
          answer:
            "Nous acceptons les visites sans réservation selon nos disponibilités, mais nous recommandons fortement de réserver pour garantir votre accueil dans les meilleures conditions.",
        },
      ],
    },
    {
      title: "Nos Vins",
      questions: [
        {
          question: "Quels sont vos cépages principaux ?",
          answer:
            "Nous cultivons les cépages traditionnels gaillacois : Mauzac, Loin de l'Œil, Braucol (Fer Servadou), Duras pour les vins authentiques, ainsi que Syrah, Merlot et Cabernet Sauvignon pour nos cuvées modernes.",
        },
        {
          question: "Vos vins sont-ils bio ?",
          answer:
            "Nous sommes certifiés HVE (Haute Valeur Environnementale) et pratiquons une viticulture durable. Nous utilisons la confusion sexuelle et limitons les intrants chimiques. Certaines de nos parcelles sont en conversion bio.",
        },
        {
          question: "Comment conserver vos vins ?",
          answer:
            "Nos vins se conservent dans une cave à température constante (12-14°C), à l'abri de la lumière, bouteilles couchées. Les blancs et rosés se boivent dans les 2-3 ans, les rouges peuvent se garder 5-8 ans selon les cuvées.",
        },
        {
          question: "Proposez-vous des vins sans sulfites ?",
          answer:
            "Nous minimisons l'usage des sulfites dans tous nos vins. Notre cuvée 'Perlé' est élaborée selon la méthode ancestrale avec très peu de sulfites ajoutés.",
        },
      ],
    },
    {
      title: "Commandes & Livraisons",
      questions: [
        {
          question: "Comment passer commande ?",
          answer:
            "Vous pouvez commander directement sur notre site, par téléphone au 05 63 56 32 75, ou lors de votre visite au domaine. Nous acceptons les paiements par carte bancaire, chèque et virement.",
        },
        {
          question: "Quels sont vos délais de livraison ?",
          answer:
            "Nous expédions sous 2-3 jours ouvrés. La livraison prend ensuite 24-48h en France métropolitaine. Pour les commandes importantes, nous proposons la livraison directe par nos soins dans un rayon de 100km.",
        },
        {
          question: "Livrez-vous à l'international ?",
          answer:
            "Oui, nous livrons dans toute l'Europe. Les frais et délais varient selon la destination. Contactez-nous pour un devis personnalisé pour les livraisons hors Europe.",
        },
        {
          question: "Y a-t-il un minimum de commande ?",
          answer:
            "Aucun minimum pour les retraits au domaine. Pour les livraisons, le minimum est de 6 bouteilles. Les frais de port sont offerts à partir de 120€ d'achat en France métropolitaine.",
        },
      ],
    },
    {
      title: "Événements & Privatisation",
      questions: [
        {
          question: "Peut-on privatiser le domaine ?",
          answer:
            "Oui, nous proposons la privatisation totale ou partielle du domaine pour vos événements : mariages, séminaires, anniversaires. Contactez-nous pour étudier votre projet et établir un devis personnalisé.",
        },
        {
          question: "Proposez-vous un service traiteur ?",
          answer:
            "Nous travaillons avec des traiteurs partenaires sélectionnés pour leur qualité. Nous pouvons organiser des cocktails, buffets ou repas assis selon vos besoins et votre budget.",
        },
        {
          question: "Quelle est la capacité d'accueil ?",
          answer:
            "Nos espaces peuvent accueillir jusqu'à 150 personnes en cocktail et 80 personnes en repas assis. Nous disposons de plusieurs espaces : chais historiques, terrasse panoramique et jardins.",
        },
        {
          question: "Organisez-vous des événements publics ?",
          answer:
            "Oui, nous organisons régulièrement des événements : vendanges participatives, soirées dégustation, masterclass, concerts. Consultez notre agenda dans la section 'Événements'.",
        },
      ],
    },
  ]

  const allQuestions = faqCategories.flatMap((category, categoryIndex) =>
    category.questions.map((q, questionIndex) => ({
      ...q,
      categoryTitle: category.title,
      id: categoryIndex * 100 + questionIndex,
    })),
  )

  const filteredQuestions = searchTerm
    ? allQuestions.filter(
        (item) =>
          item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.categoryTitle.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    : []

  const toggleItem = (id: number) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/wine-education-workshop.png')",
            }}
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-display mb-6 text-balance">Questions Fréquentes</h1>
            <p className="text-xl md:text-2xl text-pretty opacity-90">
              Trouvez rapidement les réponses à vos questions
            </p>
          </div>
        </section>

        {/* Search */}
        <section className="py-8 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Rechercher dans la FAQ..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 py-3 text-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {searchTerm ? (
                // Search Results
                <div className="space-y-4">
                  <h2 className="text-2xl font-display mb-6">Résultats de recherche ({filteredQuestions.length})</h2>
                  {filteredQuestions.length === 0 ? (
                    <Card>
                      <CardContent className="p-8 text-center">
                        <p className="text-muted-foreground">
                          Aucun résultat trouvé pour "{searchTerm}". Essayez avec d'autres mots-clés.
                        </p>
                      </CardContent>
                    </Card>
                  ) : (
                    filteredQuestions.map((item) => (
                      <Card key={item.id} className="overflow-hidden">
                        <button
                          onClick={() => toggleItem(item.id)}
                          className="w-full p-6 text-left hover:bg-muted/50 transition-colors"
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-sm text-muted-foreground mb-1">{item.categoryTitle}</div>
                              <h3 className="text-lg font-medium">{item.question}</h3>
                            </div>
                            {openItems.includes(item.id) ? (
                              <ChevronUp className="w-5 h-5 text-muted-foreground" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-muted-foreground" />
                            )}
                          </div>
                        </button>
                        {openItems.includes(item.id) && (
                          <CardContent className="px-6 pb-6 pt-0">
                            <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                          </CardContent>
                        )}
                      </Card>
                    ))
                  )}
                </div>
              ) : (
                // Categories
                <div className="space-y-8">
                  {faqCategories.map((category, categoryIndex) => (
                    <div key={categoryIndex}>
                      <h2 className="text-2xl font-display mb-6 text-foreground">{category.title}</h2>
                      <div className="space-y-4">
                        {category.questions.map((item, questionIndex) => {
                          const itemId = categoryIndex * 100 + questionIndex
                          return (
                            <Card key={questionIndex} className="overflow-hidden">
                              <button
                                onClick={() => toggleItem(itemId)}
                                className="w-full p-6 text-left hover:bg-muted/50 transition-colors"
                              >
                                <div className="flex items-center justify-between">
                                  <h3 className="text-lg font-medium pr-4">{item.question}</h3>
                                  {openItems.includes(itemId) ? (
                                    <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                                  ) : (
                                    <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                                  )}
                                </div>
                              </button>
                              {openItems.includes(itemId) && (
                                <CardContent className="px-6 pb-6 pt-0">
                                  <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                                </CardContent>
                              )}
                            </Card>
                          )
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-display mb-6 text-foreground">Vous ne trouvez pas votre réponse ?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Notre équipe est à votre disposition pour répondre à toutes vos questions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="text-center">
                  <p className="font-medium">Téléphone</p>
                  <p className="text-muted-foreground">05 63 56 32 75</p>
                </div>
                <div className="text-center">
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">contact@chateau-lastours.com</p>
                </div>
                <div className="text-center">
                  <p className="font-medium">Horaires</p>
                  <p className="text-muted-foreground">9h-18h du lundi au samedi</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

    </div>
  )
}
