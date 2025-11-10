"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CalendarWidget } from "@/components/calendar-widget"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, Users, MapPin, Phone, Wine, Star, CheckCircle, ArrowRight } from "lucide-react"

export default function ReservationPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    experience: "visite-degustation",
    message: "",
  })

  const experiences = {
    "visite-degustation": {
      name: "Visite & Dégustation Classique",
      duration: "1h30",
      price: "10€",
      description: "Visite guidée du domaine avec découverte de nos chais traditionnels, jardins à la française et dégustation commentée de nos vins d'exception",
      image: "/chateau-lastours-hero.jpg",
      highlights: ["Visite des chais", "Jardins à la française", "Dégustation de 5 vins", "Découverte du terroir"],
      popular: true
    },
    "visite-prestige": {
      name: "Visite Prestige & Cuvées Spéciales",
      duration: "2h30",
      price: "25€",
      description: "Expérience approfondie avec visite privée, dégustation de nos cuvées prestige et rencontre avec notre œnologue",
      image: "/wine-tasting-event.png",
      highlights: ["Visite privée", "Cuvées prestige", "Rencontre œnologue", "Accord mets-vins"],
      popular: false
    },
    "degustation-privee": {
      name: "Dégustation Privée Exclusive",
      duration: "2h",
      price: "45€",
      description: "Dégustation exclusive dans notre salon privé avec présentation personnalisée de notre gamme complète",
      image: "/french-chateau-wine-cellar.png",
      highlights: ["Salon privé", "Gamme complète", "Service personnalisé", "Ambiance intimiste"],
      popular: false
    },
    "atelier-assemblage": {
      name: "Atelier Création de Cuvée",
      duration: "3h",
      price: "75€",
      description: "Créez votre propre assemblage sous les conseils de notre maître de chai et repartez avec votre bouteille personnalisée",
      image: "/wine-education-workshop.png",
      highlights: ["Création personnalisée", "Conseils du maître de chai", "Bouteille à emporter", "Certificat d'authenticité"],
      popular: false
    },
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // console.log("Reservation submitted:", formData) // Disabled in production
  }

  const updateFormData = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden" style={{ minHeight: 'calc(100vh - var(--header-height, 80px))' }}>
        <div className="absolute inset-0">
          <Image
            src="/chateau-lastours-hero.jpg"
            alt="Château Lastours - Réservation"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-display mb-6 text-balance leading-tight">
            Réservez votre
            <span className="block text-wine-gold">Visite</span>
          </h1>
          <p className="text-xl md:text-2xl text-pretty opacity-90 max-w-3xl mx-auto leading-relaxed">
            Savourez l'instant Lastours : un voyage, une découverte, une dégustation où le plaisir et l'élégance se rencontrent
          </p>
          <div className="mt-8 flex justify-center">
            <Button 
              size="lg" 
              className="bg-wine-gold hover:bg-wine-gold/90 text-wine-dark font-semibold px-8 py-3 min-h-[44px]"
              onClick={() => {
                const target = document.getElementById('experiences')
                if (target) {
                  const headerHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height')) || 80
                  const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight
                  window.scrollTo({ top: targetPosition, behavior: 'smooth' })
                  target.focus()
                }
              }}
            >
              Découvrir nos expériences
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Experiences */}
      <section id="experiences" className="py-24 bg-gradient-to-b from-wine-cream/30 to-white scroll-mt-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <div className="mb-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-wine-gold/10 rounded-full text-wine-gold font-medium text-sm">
                <Star className="w-4 h-4" />
                Nos expériences
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display mb-6 text-wine-dark">
              Choisissez votre
              <span className="block text-wine-gold">Expérience</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Du lundi au samedi, de 9h à 12h30 puis de 13h30 à 18h30, 
              découvrez l'univers du Château Lastours à travers nos expériences sur mesure
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {Object.entries(experiences).map(([key, experience]) => (
              <Card key={key} className="group overflow-hidden hover:shadow-xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={experience.image}
                    alt={experience.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  {experience.popular && (
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-wine-gold text-wine-dark text-xs font-semibold rounded-full">
                        <Star className="w-3 h-3" />
                        Populaire
                      </span>
                    </div>
                  )}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-end justify-between text-white">
                      <div>
                        <h3 className="text-xl font-heading mb-1">{experience.name}</h3>
                        <div className="flex items-center gap-4 text-sm opacity-90">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {experience.duration}
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            par personne
                          </div>
                        </div>
                      </div>
                      <div className="text-2xl font-display text-wine-gold">{experience.price}</div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4 leading-relaxed">{experience.description}</p>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-wine-dark">Cette expérience comprend :</p>
                    <div className="grid grid-cols-2 gap-2">
                      {experience.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-wine-gold flex-shrink-0" />
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>
                  <Button 
                    className="w-full mt-6 bg-wine-gold hover:bg-wine-gold/90 text-wine-dark font-semibold min-h-[44px]"
                    onClick={() => {
                      updateFormData("experience", key)
                      const target = document.getElementById('reservation-form')
                      if (target) {
                        const headerHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height')) || 80
                        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight
                        window.scrollTo({ top: targetPosition, behavior: 'smooth' })
                        target.focus()
                      }
                    }}
                  >
                    Choisir cette expérience
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Informations pratiques */}
          <div className="bg-wine-dark/5 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-heading mb-4 text-wine-dark">Informations importantes</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-muted-foreground">
              <div className="flex items-center justify-center gap-2">
                <Calendar className="w-5 h-5 text-wine-gold" />
                <span>Réservation obligatoire</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Users className="w-5 h-5 text-wine-gold" />
                <span>Gratuit pour les -13 ans</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Phone className="w-5 h-5 text-wine-gold" />
                <span>+33 (0)5 63 57 07 09</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation Form */}
      <section id="reservation-form" className="py-24 bg-gradient-to-b from-white to-wine-cream/20 scroll-mt-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="mb-4">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-wine-gold/10 rounded-full text-wine-gold font-medium text-sm">
                  <Calendar className="w-4 h-4" />
                  Réservation
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display mb-6 text-wine-dark">
                Réservez votre
                <span className="block text-wine-gold">Visite</span>
              </h2>
              <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
                Complétez le formulaire ci-dessous pour réserver votre expérience au Château Lastours. 
                Nous vous confirmerons votre réservation dans les plus brefs délais.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Experience Selection */}
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2 text-wine-dark">
                    <Wine className="w-5 h-5 text-wine-gold" />
                    Choisissez votre expérience
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Select value={formData.experience} onValueChange={(value) => updateFormData("experience", value)}>
                    <SelectTrigger className="h-12 text-base">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(experiences).map(([key, experience]) => (
                        <SelectItem key={key} value={key} className="py-3">
                          <div className="flex items-center justify-between w-full">
                            <span className="font-medium">{experience.name}</span>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground ml-4">
                              <span className="text-wine-gold font-semibold">{experience.price}</span>
                              <span>•</span>
                              <span>{experience.duration}</span>
                            </div>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {formData.experience && (
                    <div className="mt-4 p-4 bg-wine-gold/5 rounded-lg border border-wine-gold/20">
                      <p className="text-sm text-muted-foreground">
                        {experiences[formData.experience as keyof typeof experiences]?.description}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Personal Information */}
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2 text-wine-dark">
                    <Users className="w-5 h-5 text-wine-gold" />
                    Vos informations
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-wine-dark font-medium">Prénom *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => updateFormData("firstName", e.target.value)}
                        required
                        className="h-12 border-wine-gold/20 focus:border-wine-gold focus:ring-wine-gold/20"
                        placeholder="Votre prénom"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-wine-dark font-medium">Nom *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => updateFormData("lastName", e.target.value)}
                        required
                        className="h-12 border-wine-gold/20 focus:border-wine-gold focus:ring-wine-gold/20"
                        placeholder="Votre nom"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-wine-dark font-medium">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => updateFormData("email", e.target.value)}
                        required
                        className="h-12 border-wine-gold/20 focus:border-wine-gold focus:ring-wine-gold/20"
                        placeholder="votre.email@exemple.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-wine-dark font-medium">Téléphone *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => updateFormData("phone", e.target.value)}
                        required
                        className="h-12 border-wine-gold/20 focus:border-wine-gold focus:ring-wine-gold/20"
                        placeholder="+33 6 12 34 56 78"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Date & Time with Calendar Widget */}
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2 text-wine-dark">
                    <Calendar className="w-5 h-5 text-wine-gold" />
                    Date et heure
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <Label className="text-base font-medium mb-4 block text-wine-dark">
                        Sélectionnez une date disponible
                      </Label>
                      <div className="bg-wine-cream/20 rounded-lg p-4">
                        <CalendarWidget />
                      </div>
                    </div>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="time" className="text-wine-dark font-medium">Heure *</Label>
                        <Select value={formData.time} onValueChange={(value) => updateFormData("time", value)}>
                          <SelectTrigger className="h-12 border-wine-gold/20 focus:border-wine-gold focus:ring-wine-gold/20">
                            <SelectValue placeholder="Choisir l'heure" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="09:00">09:00 - Matinée</SelectItem>
                            <SelectItem value="10:00">10:00 - Matinée</SelectItem>
                            <SelectItem value="11:00">11:00 - Matinée</SelectItem>
                            <SelectItem value="14:00">14:00 - Après-midi</SelectItem>
                            <SelectItem value="15:00">15:00 - Après-midi</SelectItem>
                            <SelectItem value="16:00">16:00 - Après-midi</SelectItem>
                            <SelectItem value="17:00">17:00 - Fin d'après-midi</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="guests" className="text-wine-dark font-medium">Nombre de personnes *</Label>
                        <Select value={formData.guests} onValueChange={(value) => updateFormData("guests", value)}>
                          <SelectTrigger className="h-12 border-wine-gold/20 focus:border-wine-gold focus:ring-wine-gold/20">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                              <SelectItem key={num} value={num.toString()}>
                                {num} personne{num > 1 ? "s" : ""}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="p-4 bg-wine-gold/5 rounded-lg border border-wine-gold/20">
                        <h4 className="font-medium text-wine-dark mb-2">Horaires d'ouverture</h4>
                        <p className="text-sm text-muted-foreground">
                          Du lundi au samedi<br />
                          9h - 12h30 et 13h30 - 18h30<br />
                          <span className="text-wine-gold font-medium">Fermé le dimanche</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Message */}
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2 text-wine-dark">
                    <MapPin className="w-5 h-5 text-wine-gold" />
                    Message (optionnel)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => updateFormData("message", e.target.value)}
                    placeholder="Demandes particulières, allergies, questions, besoins d'accessibilité..."
                    rows={4}
                    className="border-wine-gold/20 focus:border-wine-gold focus:ring-wine-gold/20 resize-none"
                  />
                  <p className="text-xs text-muted-foreground mt-2">
                    N'hésitez pas à nous faire part de vos préférences ou besoins spécifiques
                  </p>
                </CardContent>
              </Card>

              {/* Submit */}
              <div className="text-center space-y-4">
                <Button 
                  type="submit" 
                  size="lg"
                  className="bg-wine-gold hover:bg-wine-gold/90 text-wine-dark font-semibold px-12 py-4 text-lg h-auto"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Confirmer la Réservation
                </Button>
                <p className="text-sm text-muted-foreground">
                  Vous recevrez une confirmation par email dans les plus brefs délais
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-24 bg-wine-dark text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/chateau-lastours-hero.jpg"
            alt="Château Lastours"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="absolute inset-0 bg-wine-dark/80" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="mb-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-wine-gold/20 rounded-full text-wine-gold font-medium text-sm">
                <MapPin className="w-4 h-4" />
                Informations pratiques
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display mb-6">
              Nous
              <span className="block text-wine-gold">Contacter</span>
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Château Lastours vous accueille dans un cadre d'exception au cœur de l'AOC Gaillac
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center bg-white/10 backdrop-blur-sm border-wine-gold/20 text-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-wine-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-8 h-8 text-wine-dark" />
                </div>
                <h3 className="text-xl font-heading mb-4 text-wine-gold">Adresse</h3>
                <p className="leading-relaxed opacity-90">
                  Château Lastours
                  <br />
                  81150 Florentin
                  <br />
                  Tarn, France
                  <br />
                  <span className="text-wine-gold font-medium">AOC Gaillac</span>
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-white/10 backdrop-blur-sm border-wine-gold/20 text-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-wine-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-8 h-8 text-wine-dark" />
                </div>
                <h3 className="text-xl font-heading mb-4 text-wine-gold">Contact</h3>
                <p className="leading-relaxed opacity-90">
                  <a href="tel:+33563570709" className="hover:text-wine-gold transition-colors">
                    +33 (0)5 63 57 07 09
                  </a>
                  <br />
                  <a href="mailto:contact@chateau-lastours.com" className="hover:text-wine-gold transition-colors">
                    contact@chateau-lastours.com
                  </a>
                  <br />
                  <br />
                  <span className="text-wine-gold font-medium">
                    Lundi au samedi
                    <br />
                    9h - 12h30 • 13h30 - 18h30
                  </span>
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-white/10 backdrop-blur-sm border-wine-gold/20 text-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-wine-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <Calendar className="w-8 h-8 text-wine-dark" />
                </div>
                <h3 className="text-xl font-heading mb-4 text-wine-gold">Réservation</h3>
                <p className="leading-relaxed opacity-90">
                  <span className="text-wine-gold font-medium">Réservation obligatoire</span>
                  <br />
                  Confirmation rapide
                  <br />
                  <br />
                  Annulation gratuite
                  <br />
                  jusqu'à 24h avant
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-4 px-6 py-3 bg-wine-gold/10 backdrop-blur-sm rounded-full">
              <Wine className="w-5 h-5 text-wine-gold" />
              <span className="text-wine-gold font-medium">
                Une expérience authentique vous attend au Château Lastours
              </span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
