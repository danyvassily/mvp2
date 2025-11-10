import { HeroEvent } from "@/components/events/HeroEvent"
import { EspaceSection } from "@/components/events/EspaceSection"
import { ScrollAnimation } from "@/components/gsap/ScrollAnimations"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { 
  Phone, 
  Mail
} from "lucide-react"

/**
 * Page "Organiser votre événement"
 * 
 * ✅ Conforme aux spécifications :
 * - Hero aligné sous menu sticky (zéro espace)
 * - Titre H1 : "Votre moment à Lastours"
 * - Pas de slogan
 * - CTA principal : "Simuler votre devis" → /evenements/simuler-votre-devis
 * - Espaces en sections pleine largeur (split image/texte)
 * - Images ASSET utilisées
 * - Aucune carte, aucune icône dans les titres
 */
export default function OrganiserEvenementPage() {

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroEvent
        imageSrc="/page/organiser-votre-evenement-ok-et-inclure-cta-pour-renvoyer-ver-vos-evenement/concert-sous-tente-nomade-safari-gaillac-france-chateau-lastours.png"
        title="Votre moment à Lastours"
        primaryCtaLabel="Simuler votre devis"
        primaryCtaHref="/evenements/simuler-votre-devis"
        phoneHref="tel:+33563570709"
      />

      {/* Introduction */}
      <ScrollAnimation animation="fadeIn">
        <section className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <p className="text-xl leading-relaxed text-muted-foreground text-pretty max-w-4xl mx-auto">
                  Situé dans la prestigieuse région viticole de Gaillac, le Château Lastours vous invite à transformer 
                  vos événements en souvenirs inoubliables, mêlant charme, raffinement et authenticité. Que vous 
                  planifiiez un mariage, un séminaire d'entreprise ou une soirée d'été, notre domaine conjugue 
                  élégance à la française et son accueil chaleureux.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Trois Espaces d'Exception - Sections pleine largeur */}
      <section className="relative">
        <ScrollAnimation animation="fadeIn">
          <div className="text-center py-16 bg-muted/30">
            <div className="container mx-auto px-4 lg:px-8">
              <h2 className="text-4xl md:text-5xl font-display mb-6">Trois Espaces d'Exception</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
                Adaptés à vos besoins, nos espaces offrent un cadre unique pour tous vos événements
              </p>
            </div>
          </div>
        </ScrollAnimation>

        {/* La Tente Nomade - Image gauche / Texte droite */}
        <EspaceSection
          imageSrc="/page/organiser-votre-evenement-ok-et-inclure-cta-pour-renvoyer-ver-vos-evenement/recpetion-mariage-tente-nomade-chateau-lastours-gaillac.jpg"
          title="La Tente Nomade"
          subtitle="Un écrin champêtre de 375m²"
          description="Au cœur des jardins à la française et des vignes centenaires, cet espace éphémère, élégamment éclairé et sonorisé, offre une ambiance bucolique et sophistiquée. Parfait pour des mariages romantiques, des team building inspirants ou des soirées estivales conviviales baignées de lumière naturelle."
          surface_m2={375}
          capacite={300}
          reverse={false}
          index={0}
        />

        {/* Salle de Réception - Image droite / Texte gauche */}
        <EspaceSection
          imageSrc="/page/organiser-votre-evenement-ok-et-inclure-cta-pour-renvoyer-ver-vos-evenement/salle-de-reception-evenements-familials-professionnels.jpg"
          title="La Salle de Réception"
          subtitle="Charme historique et confort moderne"
          description="Située dans l'ancien chai à barriques, cette salle climatisée de 100m² allie charme intemporel et élégance contemporaine. Idéale pour galas, réceptions privées et cocktails professionnels, avec un service sur mesure."
          surface_m2={100}
          capacite={80}
          reverse={true}
          index={1}
        />

        {/* Salle de Réunion - Image gauche / Texte droite */}
        <EspaceSection
          imageSrc="/page/organiser-votre-evenement-ok-et-inclure-cta-pour-renvoyer-ver-vos-evenement/salle-seminaire-reunion-video-projecteur.jpg"
          title="La Salle de Réunion"
          subtitle="Un havre lumineux pour la créativité"
          description="À l'étage, équipée d'un vidéoprojecteur et d'un éclairage modulable, cet espace raffiné invite à la concentration et à la collaboration, parfait pour séminaires, conférences et ateliers."
          reverse={false}
          index={2}
        />
      </section>

      {/* Accompagnement Personnalisé - Section texte seule (image identique à Yoga & Vins) */}
      <ScrollAnimation animation="fadeIn" index={7}>
        <section className="relative w-full bg-background">
          <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24">
            <div className="max-w-4xl mx-auto">
              <div className="text-center space-y-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground leading-tight">
                  Un Accompagnement Personnalisé
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty max-w-3xl mx-auto">
                  Au Château Lastours, chaque événement est une création unique. Nos expertes, Mathilde et Fanny, anticipent vos besoins pour orchestrer une expérience alliant excellence, chaleur et authenticité. Invitez vos convives à s'immerger dans l'âme de notre vignoble et à partager des moments d'exception au cœur du Sud-Ouest.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Activités Œnotouristiques - Sections pleine largeur (sans cartes) */}
      <section className="relative bg-muted/30">
        <ScrollAnimation animation="fadeIn">
          <div className="text-center py-16">
            <div className="container mx-auto px-4 lg:px-8">
              <h2 className="text-4xl md:text-5xl font-display mb-6">Activités Œnotouristiques Uniques</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
                Enchantez vos invités avec des expériences immersives au cœur de notre vignoble
              </p>
            </div>
          </div>
        </ScrollAnimation>

        {/* Yoga & Vins */}
        <EspaceSection
          imageSrc="/page/organiser-votre-evenement-ok-et-inclure-cta-pour-renvoyer-ver-vos-evenement/cours-de-yoga-plein-air.jpg"
          title="Yoga & Vins"
          description="Éveillez corps et esprit dans une expérience unique alliant yoga et dégustation."
          reverse={false}
          ctaLabel="En savoir plus"
          ctaHref="https://www.gaillacvisit.fr/activités-tarn/yoga-et-vin/"
          index={3}
        />

        {/* Escape Game Challenge Vigneron - Section texte seule (pas d'image disponible) */}
        <ScrollAnimation animation="fadeIn" index={4}>
          <section className="relative w-full bg-background">
            <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24">
              <div className="max-w-4xl mx-auto">
                <div className="text-center space-y-6">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground leading-tight">
                    Escape Game Challenge Vigneron
                  </h2>
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty max-w-3xl mx-auto">
                    Une aventure immersive pour découvrir les secrets du vignoble.
                  </p>
                  <div className="pt-6">
                    <Button 
                      variant="outline" 
                      asChild
                      className="min-h-[44px] focus:ring-2 focus:ring-accent focus:ring-offset-2"
                    >
                      <Link href="https://www.gaillacvisit.fr/escape-game/">
                        Découvrez
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        {/* Atelier Œnologique */}
        <EspaceSection
          imageSrc="/page/organiser-votre-evenement-ok-et-inclure-cta-pour-renvoyer-ver-vos-evenement/carte-de-menu-mariage-chateau-lastours-gaillac-france.jpg"
          title="Atelier Œnologique"
          description="Une exploration guidée de l'art de la dégustation, menée par des œnologues passionnés."
          reverse={false}
          ctaLabel="Plus d'informations"
          ctaHref="https://www.gaillacvisit.fr/atelier-oenologique/"
          index={5}
        />
      </section>

      {/* Apéro-concerts d'été - Section pleine largeur */}
      <EspaceSection
        imageSrc="/page/organiser-votre-evenement-ok-et-inclure-cta-pour-renvoyer-ver-vos-evenement/festival-de-jazz-chateau-lastours-gaillac-france.jpg"
        title="Apéro-concerts d'Été"
        subtitle="Célébrez avec Élégance"
        description="Chaque été, le domaine s'anime pour deux soirées festives mêlant musique live, gastronomie locale et vins d'exception. Réservez vos dates pour juin [à confirmer] et août [à confirmer] 2025 et partagez des moments authentiques dans un cadre enchanteur."
        reverse={true}
        index={6}
      />

      {/* Contact & CTA */}
      <ScrollAnimation animation="scale">
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden rounded-[11px] lg:rounded-[18px]">
            <Image
              src="/chateau-lastours-hero.jpg"
              alt="Contactez Château Lastours"
              fill
              className="object-cover object-center rounded-[11px] lg:rounded-[18px]"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/60 rounded-[11px] lg:rounded-[18px]" />
          </div>
          
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="text-center text-white max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-display mb-6">Contactez-nous pour Créer votre Événement d'Exception</h2>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Prêt à organiser un événement inoubliable ? Contactez-nous dès maintenant pour un devis personnalisé.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg">
                  <Link href="mailto:contact@chateau-lastours.com">
                    <Mail className="mr-2 w-6 h-6" />
                    contact@chateau-lastours.com
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg">
                  <Link href="tel:+33563570709">
                    <Phone className="mr-2 w-6 h-6" />
                    +33 (0)5 63 57 07 09
                  </Link>
                </Button>
              </div>

              <div className="text-center">
                <p className="text-lg opacity-80 mb-4">
                  <Link 
                    href="https://www.gaillacvisit.fr/contact-renseignements/" 
                    className="hover:text-accent transition-colors underline"
                  >
                    Contactez-nous pour une assistance personnalisée et un devis adapté
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

    </div>
  )
}
