import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, Clock, Users, Wine, Music, Utensils } from "lucide-react"
import { getAllEvents, getUpcomingEvents } from "@/lib/events-data"
import { HeroStandard } from "@/components/common/HeroStandard"

/**
 * Page "Nos Événements"
 * 
 * ✅ Textes extraits depuis ASSET : /public/Page/Nos evenements - ok/Page nos evenement Fr.docx
 * ✅ Images depuis ASSET : /public/Page/Nos evenements - ok/
 */

export default function EvenementsPage() {
  // Filtrer les événements passés (nous sommes en novembre 2024)
  const today = new Date()
  today.setHours(0, 0, 0, 0) // Remettre à minuit pour comparer les dates seulement
  const events = getUpcomingEvents(today)

  const getEventIcon = (type: string) => {
    switch (type) {
      case "Festival":
        return Music
      case "Dégustation":
        return Wine
      case "Formation":
        return Users
      case "Dîner romantique":
        return Utensils
      case "Événement familial":
        return Users
      default:
        return Calendar
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroStandard
        imageSrc="/page/nos-evenements-ok/soiree-partenaire-rugby-chateau-lastours-gaillac-france.jpg"
        title="Au Fil des Saisons – Les Rendez-vous du Château Lastours"
        subtitle="Joyau viticole et patrimonial du Sud-Ouest et de Gaillac, le Domaine Lastours vous invite à vivre une immersion authentique dans l'art de vivre à la française."
        className="-mt-20"
      />

      {/* Introduction */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty mb-8">
              Niché au cœur de paysages viticoles d'exception, notre domaine est un lieu de partage où chaque saison révèle des moments conviviaux et riches en émotions.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
              Tout au long de l'année, nous vous proposons une diversité d'expériences soigneusement conçues pour célébrer la richesse de notre terroir et la passion qui anime notre équipe.
            </p>
          </div>
        </div>
      </section>

      {/* Types d'événements */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display mb-6">Découvrez notre Calendrier d'Événements</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="text-center overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative h-48 bg-muted">
                <Image
                  src="/page/nos-evenements-ok/jeune-pianiste-dans-jardins-a-la-francaise-chateau-lastours-gaillac-france.jpg"
                  alt="Dégustations de vins d'exception au Château Lastours"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <CardContent className="p-8">
                <Wine className="w-12 h-12 mx-auto mb-4 text-accent" />
                <h3 className="text-xl font-heading mb-4">Dégustations de vins d'exception</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Explorez nos crus emblématiques et nos cuvées élaborées avec soin, accompagnés par nos sommeliers multilingues.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative h-48 bg-muted">
                <Image
                  src="/page/nos-evenements-ok/pigeonnier-renove-domaine-viticole-gaillac-france.jpg"
                  alt="Visites guidées du château et des vignobles"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <CardContent className="p-8">
                <Users className="w-12 h-12 mx-auto mb-4 text-accent" />
                <h3 className="text-xl font-heading mb-4">Visites guidées du château et des vignobles</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Laissez-vous conter l'histoire et les secrets de notre domaine, dans un cadre naturel et élégant.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative h-48 bg-muted">
                <Image
                  src="/page/nos-evenements-ok/concert-musicale-sous-tente-nomade-gaillac-france.jpg"
                  alt="Concerts en plein air et marchés locaux"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <CardContent className="p-8">
                <Music className="w-12 h-12 mx-auto mb-4 text-accent" />
                <h3 className="text-xl font-heading mb-4">Concerts en plein air & marchés locaux</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Profitez de soirées festives alliant musique, convivialité et saveurs authentiques de la région.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display mb-6">Programmation et Réservations en Ligne</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              Pour vous offrir la meilleure expérience, notre programmation détaillée est directement consultable ici, sur cette même page. Chaque événement est accompagné d'informations précises — horaires, descriptifs, intervenants — ainsi que d'un système de réservation simple et sécurisé.
            </p>
          </div>

          <div className="space-y-8">
            {events
              .filter((event) => event.featured)
              .map((event) => {
                const IconComponent = getEventIcon(event.type)
                return (
                  <Card key={event.id} className="overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                      <div className="relative aspect-[4/3] lg:aspect-auto bg-muted">
                        <Image
                          src={event.image || "/Page/Nos evenements - ok/jeune-pianiste-dans-jardins-a-la-francaise-chateau-lastours-gaillac-france.jpg"}
                          alt={event.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                      </div>
                      <div className="p-8 flex flex-col justify-center">
                        <div className="flex items-center gap-2 mb-4">
                          <Badge variant="secondary">{event.type}</Badge>
                          {event.featured && (
                            <Badge className="bg-accent text-accent-foreground">À ne pas manquer</Badge>
                          )}
                        </div>

                        <h3 className="text-3xl font-display mb-4">
                          <Link href={`/evenements/${event.id}`} className="hover:text-accent">
                            {event.title}
                          </Link>
                        </h3>

                        <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(event.date).toLocaleDateString("fr-FR", {
                              weekday: "long",
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {event.time}
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {event.spots}
                          </div>
                        </div>

                        <p className="text-muted-foreground leading-relaxed mb-6">{event.description}</p>

                        <div className="flex items-center justify-between">
                          <div className="text-2xl font-display text-accent">{event.price}</div>
                          <Button asChild className="min-h-[44px] focus:ring-2 focus:ring-accent focus:ring-offset-2">
                            <Link href="/evenements/reservation">
                              Réserver
                              <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                )
              })}
          </div>
        </div>
      </section>

      {/* All Events */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display mb-6">Tous nos Événements</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              Vous pouvez réserver vos places à tout moment, en toute tranquillité, depuis n'importe où dans le monde. Que vous cherchiez à approfondir vos connaissances œnologiques, à savourer un moment artistique ou simplement à partager une belle soirée avec vos proches, vous trouverez l'événement qui vous correspond parfaitement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => {
              const IconComponent = getEventIcon(event.type)
              return (
                <Card key={event.id} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="relative aspect-[4/3] bg-muted">
                    <Image
                      src={event.image || "/Page/Nos evenements - ok/jeune-pianiste-dans-jardins-a-la-francaise-chateau-lastours-gaillac-france.jpg"}
                      alt={event.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="outline" className="text-xs">
                        <IconComponent className="w-3 h-3 mr-1" />
                        {event.type}
                      </Badge>
                      {event.featured && <Badge className="text-xs bg-accent text-accent-foreground">Featured</Badge>}
                    </div>

                    <h3 className="text-xl font-heading mb-3">
                      <Link href={`/evenements/${event.id}`} className="hover:text-accent">
                        {event.title}
                      </Link>
                    </h3>

                    <div className="space-y-2 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {new Date(event.date).toLocaleDateString("fr-FR")}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {event.time}
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        {event.spots}
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                      {event.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="text-lg font-heading text-accent">{event.price}</div>
                      <Button size="sm" asChild className="min-h-[44px] focus:ring-2 focus:ring-accent focus:ring-offset-2">
                        <Link href="/evenements/reservation">Réserver</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Private Events */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display mb-6">Une Expérience Accessible à Tous</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              Notre équipe multilingue est disponible pour vous accompagner et répondre à vos besoins, qu'importe votre origine ou vos attentes. Le Château Lastours, c'est l'alliance d'un patrimoine historique exceptionnel avec une ouverture moderne et chaleureuse.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative h-48 bg-muted">
                <Image
                  src="/page/nos-evenements-ok/pigeonnier-renove-domaine-viticole-gaillac-france.jpg"
                  alt="Séminaires d'Entreprise au Château Lastours"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <CardContent className="p-8">
                <Users className="w-12 h-12 mx-auto mb-4 text-accent" />
                <h3 className="text-xl font-heading mb-4">Séminaires d'Entreprise</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Organisez vos séminaires et team building dans un cadre unique avec dégustation et activités sur mesure.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative h-48 bg-muted">
                <Image
                  src="/page/nos-evenements-ok/soiree-partenaire-rugby-chateau-lastours-gaillac-france.jpg"
                  alt="Mariages & Réceptions au Château Lastours"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <CardContent className="p-8">
                <Utensils className="w-12 h-12 mx-auto mb-4 text-accent" />
                <h3 className="text-xl font-heading mb-4">Mariages & Réceptions</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Célébrez les moments les plus importants de votre vie dans la magie de nos vignobles et chais historiques.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative h-48 bg-muted">
                <Image
                  src="/page/nos-evenements-ok/concert-musicale-sous-tente-nomade-gaillac-france.jpg"
                  alt="Dégustations Privées au Château Lastours"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <CardContent className="p-8">
                <Wine className="w-12 h-12 mx-auto mb-4 text-accent" />
                <h3 className="text-xl font-heading mb-4">Dégustations Privées</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Organisez des dégustations privées pour vos invités avec l'accompagnement de nos experts.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8 text-pretty">
              Nous vous invitons à parcourir notre calendrier et à réserver dès aujourd'hui votre prochaine expérience parmi nous. Chaque visite est une promesse de découvertes, d'échanges et de moments précieux dans un écrin d'authenticité et d'élégance.
            </p>
            <Button size="lg" asChild className="min-h-[44px] focus:ring-2 focus:ring-accent focus:ring-offset-2">
              <Link href="/evenements/organiser">
                Demander un Devis
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action Final */}
      <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl md:text-2xl font-display text-foreground leading-relaxed text-pretty">
              Vivez avec nous la passion du vin, l'émerveillement culturel et la beauté du terroir – au Château Lastours, chaque saison est une célébration de la vie.
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}
