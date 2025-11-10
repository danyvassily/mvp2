import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SectionHero } from "@/components/common/SectionHero"
import { OptimizedImage } from "@/components/common/OptimizedImage"
import { LazyImage } from "@/components/common/LazyImage"
import { ScrollAnimation, PremiumCardAnimation } from "@/components/gsap/ScrollAnimations"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Crown, Gift, Calendar, Truck, Users, Wine, Star, Shield, Sparkles, Award } from "lucide-react"

export default function ClubPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <SectionHero
        title="Club Lastours"
        subtitle="Le Cercle Exclusif des Amoureux du Vin"
        imageSrc="/page/club-ok/vintotheque-anciennes-cuvees-prestiges-chateau-lastours-gaillac-france.jpg"
        height="xl"
        className="mt-20"
      >
        <div className="mt-8">
          <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/club/inscription">
              Rejoindre le Club
              <Crown className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </SectionHero>

      {/* Introduction */}
      <ScrollAnimation animation="fadeIn">
        <section className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-display mb-8">Une Expérience d'Exception</h2>
                <p className="text-xl leading-relaxed text-muted-foreground text-pretty mb-8 max-w-4xl mx-auto">
                  Au Château Lastours, chaque bouteille est une ode à la passion, au terroir et au savoir-faire transmis depuis des générations. 
                  Rejoignez notre Club Privé, un cercle d'initiés réservé uniquement à nos clients les plus passionnés.
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h3 className="text-2xl font-display mb-4">Un monde d'exclusivité</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Plus qu'un programme, une expérience rare — une immersion dans un univers où élégance, 
                    convivialité et exclusivité s'entrelacent avec harmonie. Vous ne devenez pas seulement membre, 
                    vous intégrez une communauté unique, unie par l'amour du vin d'exception.
                  </p>
                  <div className="flex flex-wrap gap-4 pt-4">
                    <div className="flex items-center gap-2 text-accent">
                      <Star className="w-5 h-5" />
                      <span className="text-sm font-medium">Cuvées confidentielles</span>
                    </div>
                    <div className="flex items-center gap-2 text-accent">
                      <Shield className="w-5 h-5" />
                      <span className="text-sm font-medium">Garde personnalisée</span>
                    </div>
                    <div className="flex items-center gap-2 text-accent">
                      <Sparkles className="w-5 h-5" />
                      <span className="text-sm font-medium">Événements privés</span>
                    </div>
                  </div>
                </div>
                <LazyImage
                  src="/exclusive-french-wine-club.png"
                  alt="Club exclusif Château Lastours"
                  containerClassName="h-96 lg:h-[500px] rounded-lg shadow-2xl"
                  className="hover:scale-105 transition-transform duration-700"
                  aspectRatio="landscape"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Statuts du Club */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollAnimation animation="fadeIn">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display mb-6">Statuts & Privilèges</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
                Découvrez votre parcours d'exception à travers quatre niveaux de prestige, 
                chacun offrant des privilèges toujours plus raffinés
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {/* Connaisseur Distingué */}
            <PremiumCardAnimation index={0}>
              <Card className="relative overflow-hidden h-full border-2 hover:border-accent/50 transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-slate-400 to-slate-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Wine className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-display">Connaisseur Distingué</CardTitle>
                  <p className="text-sm text-muted-foreground">Niveau d'entrée</p>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                      <span>Dégustations privées</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                      <span>Tarifs préférentiels</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                      <span>Conseils personnalisés</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                      <span>Newsletter exclusive</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </PremiumCardAnimation>

            {/* Maître de Chai Émérite */}
            <PremiumCardAnimation index={1}>
              <Card className="relative overflow-hidden h-full border-2 border-accent/30 hover:border-accent/70 transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Crown className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-display">Maître de Chai Émérite</CardTitle>
                  <p className="text-sm text-muted-foreground">Niveau intermédiaire</p>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                      <span>Tous les avantages précédents</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                      <span>Événements exclusifs</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                      <span>Service de garde privilégié</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                      <span>Priorité millésimes rares</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                      <span>Rencontres avec le vigneron</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </PremiumCardAnimation>

            {/* Ambassadeur */}
            <PremiumCardAnimation index={2}>
              <Card className="relative overflow-hidden h-full border-2 border-accent hover:border-accent transition-all duration-300">
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-accent/20 to-accent/30 text-center py-1">
                  <Badge className="bg-accent text-accent-foreground text-xs">Recommandé</Badge>
                </div>
                <CardHeader className="text-center pb-4 pt-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-display">Ambassadeur</CardTitle>
                  <p className="text-sm text-muted-foreground">Niveau avancé</p>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                      <span>Tous les avantages précédents</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                      <span>Garde gratuite en cave historique</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                      <span>Visites privées & accords mets-vins</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                      <span>Dîners gastronomiques étoilés</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                      <span>Accès anticipé nouveautés</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </PremiumCardAnimation>

            {/* Ambassadeur Émérite */}
            <PremiumCardAnimation index={3}>
              <Card className="relative overflow-hidden h-full border-2 border-gradient-to-br from-gold-400 to-gold-600 hover:shadow-2xl transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 to-yellow-50/30" />
                <CardHeader className="text-center pb-4 relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-display">Ambassadeur Émérite</CardTitle>
                  <p className="text-sm text-muted-foreground">Niveau ultime</p>
                </CardHeader>
                <CardContent className="pt-0 relative z-10">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                      <span>Tous les avantages précédents</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                      <span>Concierge dédié & service sur-mesure</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                      <span>Millésimes ultra-rares</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                      <span>Invitations VIP internationales</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                      <span>Expériences personnalisées uniques</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </PremiumCardAnimation>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link href="/club/inscription">
                Commencer mon parcours
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Expériences Exclusives */}
      <ScrollAnimation animation="fadeIn">
        <section className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display mb-6">Vivez Château Lastours Autrement</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
                Découvrez l'intimité des vignes baignées de soleil du Sud-Ouest, savourez des accords mets-vins exclusifs 
                lors de dîners étoilés, explorez les coulisses avec des visites personnalisées.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <PremiumCardAnimation index={0}>
                <Card className="text-center h-full hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-accent to-accent/80 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <Wine className="w-10 h-10 text-accent-foreground" />
                    </div>
                    <h3 className="text-xl font-display mb-4">Cuvées Confidentielles</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Accédez en priorité à nos cuvées limitées et millésimes rares, parfois réservés uniquement 
                      aux membres du club. Découvrez des vins d'exception avant leur sortie officielle.
                    </p>
                  </CardContent>
                </Card>
              </PremiumCardAnimation>

              <PremiumCardAnimation index={1}>
                <Card className="text-center h-full hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <Calendar className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-display mb-4">Événements Privés</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Participez à des dégustations exclusives, rencontres privilégiées avec nos vignerons et maîtres de chai, 
                      et des événements spéciaux dans un cadre intimiste.
                    </p>
                  </CardContent>
                </Card>
              </PremiumCardAnimation>

              <PremiumCardAnimation index={2}>
                <Card className="text-center h-full hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <Shield className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-display mb-4">Garde Personnalisée</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Bénéficiez d'un service de garde dans nos caves historiques avec des conditions optimales 
                      de conservation pour vos précieuses bouteilles.
                    </p>
                  </CardContent>
                </Card>
              </PremiumCardAnimation>

              <PremiumCardAnimation index={3}>
                <Card className="text-center h-full hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <Users className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-display mb-4">Communauté d'Exception</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Rejoignez une communauté sélecte de passionnés et échangez avec d'autres connaisseurs 
                      lors d'événements exclusifs et de rencontres privées.
                    </p>
                  </CardContent>
                </Card>
              </PremiumCardAnimation>

              <PremiumCardAnimation index={4}>
                <Card className="text-center h-full hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-rose-500 to-rose-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <Gift className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-display mb-4">Expériences Sur-Mesure</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Profitez d'expériences personnalisées : dîners gastronomiques, visites privées du domaine, 
                      et création de cuvées personnalisées selon vos goûts.
                    </p>
                  </CardContent>
                </Card>
              </PremiumCardAnimation>

              <PremiumCardAnimation index={5}>
                <Card className="text-center h-full hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <Crown className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-display mb-4">Service Concierge</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Bénéficiez d'un service concierge dédié pour vos demandes spéciales, conseils œnologiques personnalisés 
                      et organisation d'événements privés.
                    </p>
                  </CardContent>
                </Card>
              </PremiumCardAnimation>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* FAQ Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollAnimation animation="fadeIn">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display mb-6">Questions Fréquentes</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Tout ce que vous devez savoir sur le Club Lastours
              </p>
            </div>
          </ScrollAnimation>

          <div className="max-w-4xl mx-auto space-y-6">
            <PremiumCardAnimation index={0}>
              <Card className="overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-lg">Comment évolue mon statut au sein du Club ?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Votre statut progresse selon les points accumulés par vos achats et votre participation aux événements. 
                    Chaque palier offre des privilèges supplémentaires et une expérience toujours plus raffinée. 
                    Plus vous participez à la vie du club, plus vous accédez à des avantages exclusifs.
                  </p>
                </CardContent>
              </Card>
            </PremiumCardAnimation>

            <PremiumCardAnimation index={1}>
              <Card className="overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-lg">Comment bénéficier du service de garde des vins ?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Les membres Maître de Chai Émérite et plus bénéficient d'un accès privilégié à la garde avec tarifs préférentiels. 
                    Les Ambassadeurs profitent d'une garde gratuite dans nos caves historiques, dans des conditions optimales 
                    de température et d'humidité pour une conservation parfaite.
                  </p>
                </CardContent>
              </Card>
            </PremiumCardAnimation>

            <PremiumCardAnimation index={2}>
              <Card className="overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-lg">Puis-je partager mon accès au Club avec ma famille ou mes amis ?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Le Club est strictement réservé aux membres inscrits pour préserver son caractère exclusif. 
                    Cependant, vous pouvez inviter des proches à certains événements sur invitation, 
                    leur offrant ainsi un aperçu de l'expérience Club Lastours.
                  </p>
                </CardContent>
              </Card>
            </PremiumCardAnimation>

            <PremiumCardAnimation index={3}>
              <Card className="overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-lg">Quels types d'événements sont organisés pour les membres ?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Nous organisons des dégustations privées, des dîners gastronomiques avec accords mets-vins, 
                    des visites exclusives du domaine, des rencontres avec nos vignerons, et des événements saisonniers 
                    comme les vendanges privées. Les Ambassadeurs Émérites accèdent également à des invitations VIP 
                    en France et à l'étranger.
                  </p>
                </CardContent>
              </Card>
            </PremiumCardAnimation>

            <PremiumCardAnimation index={4}>
              <Card className="overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-lg">Comment accéder aux cuvées confidentielles ?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Tous les membres ont accès à nos sélections spéciales, mais les cuvées les plus rares sont réservées 
                    aux niveaux supérieurs. Les Ambassadeurs bénéficient d'un accès anticipé aux nouveautés, 
                    tandis que les Ambassadeurs Émérites ont accès aux millésimes ultra-rares et aux cuvées 
                    produites en quantités très limitées.
                  </p>
                </CardContent>
              </Card>
            </PremiumCardAnimation>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <ScrollAnimation animation="scale">
        <section className="py-24 relative overflow-hidden">
          {/* Background avec effet parallax */}
          <div className="absolute inset-0">
            <Image
              src="/french-chateau-vineyard-landscape-with-rolling-hil.png"
              alt="Vignobles Château Lastours"
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="text-center text-white">
              <h2 className="text-4xl md:text-6xl font-display mb-6">Rejoignez l'Excellence</h2>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-pretty opacity-90">
                Une promesse d'émotions partagées, un voyage vers l'excellence et le savoir-faire viticole, 
                réservé aux amateurs passionnés en quête d'authenticité et de luxe discret.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg">
                  <Link href="/club/inscription">
                    Devenir Membre
                    <Crown className="ml-2 w-6 h-6" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg">
                  <Link href="/reservation">Découvrir le Domaine</Link>
                </Button>
              </div>
              
              {/* Statistiques du club */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-display mb-2">500+</div>
                  <p className="text-sm opacity-80">Membres Actifs</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-display mb-2">25+</div>
                  <p className="text-sm opacity-80">Événements par An</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-display mb-2">15</div>
                  <p className="text-sm opacity-80">Années d'Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

    </div>
  )
}
