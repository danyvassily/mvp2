"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, Users, MapPin, Phone, ArrowRight, CheckCircle } from "lucide-react"
import { HeroStandard } from "@/components/common/HeroStandard"
import { getAllEvents } from "@/lib/events-data"
import Link from "next/link"

export default function EvenementsReservationPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    eventId: "",
    guests: "2",
    message: "",
  })

  const events = getAllEvents()

  const selectedEvent = events.find((e) => e.id === formData.eventId)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // console.log("Event reservation submitted:", formData) // Disabled in production
  }

  const updateFormData = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroStandard
        imageSrc="/page/nos-evenements-ok/concert-musicale-sous-tente-nomade-gaillac-france.jpg"
        title="Réservez votre Événement"
        subtitle="Rejoignez-nous pour des moments d'exception au Château Lastours"
        className="-mt-20"
      />

      {/* Formulaire de réservation */}
      <section className="py-24 bg-gradient-to-b from-white to-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-display mb-4">Réservez votre place</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Complétez le formulaire ci-dessous pour réserver votre place à l'un de nos événements
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Formulaire */}
              <div className="lg:col-span-2">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl font-display">Informations de réservation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Sélection de l'événement */}
                      <div className="space-y-2">
                        <Label htmlFor="eventId" className="text-base font-medium">
                          Choisissez un événement <span className="text-red-500">*</span>
                        </Label>
                        <Select
                          value={formData.eventId}
                          onValueChange={(value) => updateFormData("eventId", value)}
                          required
                        >
                          <SelectTrigger id="eventId" className="min-h-[44px] focus:ring-2 focus:ring-accent">
                            <SelectValue placeholder="Sélectionnez un événement" />
                          </SelectTrigger>
                          <SelectContent>
                            {events.map((event) => (
                              <SelectItem key={event.id} value={event.id} className="min-h-[44px]">
                                <div className="flex items-center justify-between w-full">
                                  <span>{event.title}</span>
                                  <span className="text-sm text-muted-foreground ml-4">
                                    {new Date(event.date).toLocaleDateString("fr-FR", {
                                      day: "numeric",
                                      month: "short",
                                    })}
                                  </span>
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Informations sur l'événement sélectionné */}
                      {selectedEvent && (
                        <Card className="bg-muted/50 border-accent/20">
                          <CardContent className="pt-6">
                            <div className="space-y-3">
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Calendar className="w-4 h-4" />
                                {new Date(selectedEvent.date).toLocaleDateString("fr-FR", {
                                  weekday: "long",
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                })}
                              </div>
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Clock className="w-4 h-4" />
                                {selectedEvent.time}
                              </div>
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Users className="w-4 h-4" />
                                {selectedEvent.spots}
                              </div>
                              <div className="text-lg font-heading text-accent pt-2">
                                {selectedEvent.price}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      )}

                      {/* Nom et Prénom */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName" className="text-base font-medium">
                            Prénom <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            id="firstName"
                            type="text"
                            value={formData.firstName}
                            onChange={(e) => updateFormData("firstName", e.target.value)}
                            required
                            className="min-h-[44px] focus:ring-2 focus:ring-accent"
                            placeholder="Votre prénom"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName" className="text-base font-medium">
                            Nom <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            id="lastName"
                            type="text"
                            value={formData.lastName}
                            onChange={(e) => updateFormData("lastName", e.target.value)}
                            required
                            className="min-h-[44px] focus:ring-2 focus:ring-accent"
                            placeholder="Votre nom"
                          />
                        </div>
                      </div>

                      {/* Email et Téléphone */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-base font-medium">
                            Email <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => updateFormData("email", e.target.value)}
                            required
                            className="min-h-[44px] focus:ring-2 focus:ring-accent"
                            placeholder="votre@email.com"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-base font-medium">
                            Téléphone <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => updateFormData("phone", e.target.value)}
                            required
                            className="min-h-[44px] focus:ring-2 focus:ring-accent"
                            placeholder="06 12 34 56 78"
                          />
                        </div>
                      </div>

                      {/* Nombre de personnes */}
                      <div className="space-y-2">
                        <Label htmlFor="guests" className="text-base font-medium">
                          Nombre de personnes <span className="text-red-500">*</span>
                        </Label>
                        <Select
                          value={formData.guests}
                          onValueChange={(value) => updateFormData("guests", value)}
                          required
                        >
                          <SelectTrigger id="guests" className="min-h-[44px] focus:ring-2 focus:ring-accent">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                              <SelectItem key={num} value={num.toString()} className="min-h-[44px]">
                                {num} {num === 1 ? "personne" : "personnes"}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Message */}
                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-base font-medium">
                          Message (optionnel)
                        </Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => updateFormData("message", e.target.value)}
                          rows={4}
                          className="focus:ring-2 focus:ring-accent"
                          placeholder="Informations complémentaires, allergies, demandes spéciales..."
                        />
                      </div>

                      {/* Bouton de soumission */}
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full min-h-[44px] focus:ring-2 focus:ring-accent focus:ring-offset-2"
                      >
                        Confirmer la réservation
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Informations complémentaires */}
              <div className="space-y-6">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl font-display">Informations pratiques</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Château Lastours</p>
                        <p className="text-sm text-muted-foreground">
                          Domaine viticole de Gaillac
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Contact</p>
                        <Link
                          href="tel:+33563570709"
                          className="text-sm text-accent hover:underline focus:outline-none focus:ring-2 focus:ring-accent rounded"
                        >
                          05 63 57 07 09
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg bg-accent/5">
                  <CardContent className="pt-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-accent" />
                        <span className="text-sm font-medium">Confirmation immédiate</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-accent" />
                        <span className="text-sm font-medium">Paiement sécurisé</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-accent" />
                        <span className="text-sm font-medium">Annulation possible</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

