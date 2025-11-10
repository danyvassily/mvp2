"use client"

import Image from "next/image"
import { MapPin, Phone, Calendar } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Contact Info Section - Reprend le visuel de la page réservation */}
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
            {/* Badge "Informations pratiques" supprimé comme demandé */}
            <h2 className="text-4xl md:text-5xl font-display mb-6">
              Nous
              <span className="block text-wine-gold">Contacter</span>
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Château Lastours vous accueille dans un cadre d'exception au cœur de l'AOC Gaillac
            </p>
          </div>

          {/* Sections d'information sans cartes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto mb-16">
            <div className="group text-center relative">
              <div className="w-20 h-20 bg-gradient-to-br from-wine-gold to-wine-gold/80 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-wine-gold/30 group-hover:shadow-wine-gold/50 transition-shadow duration-500">
                <MapPin className="w-10 h-10 text-wine-dark" />
              </div>
              <h3 className="text-xl font-heading mb-4 text-wine-gold font-semibold tracking-wide">Adresse</h3>
              <p className="leading-relaxed opacity-95 text-sm">
                Château Lastours
                <br />
                81310 Lisle-sur-Tarn
                <br />
                Tarn, France
                <br />
                <span className="text-wine-gold font-semibold text-base mt-2 inline-block">AOC Gaillac</span>
              </p>
            </div>

            <div className="group text-center relative">
              <div className="w-20 h-20 bg-gradient-to-br from-wine-gold to-wine-gold/80 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-wine-gold/30 group-hover:shadow-wine-gold/50 transition-shadow duration-500">
                <Phone className="w-10 h-10 text-wine-dark" />
              </div>
              <h3 className="text-xl font-heading mb-4 text-wine-gold font-semibold tracking-wide">Contact</h3>
              <p className="leading-relaxed opacity-95 text-sm">
                <a href="tel:+33563570709" className="hover:text-wine-gold transition-colors duration-300 block mb-1">
                  +33 (0)5 63 57 07 09
                </a>
                <a href="mailto:contact@chateau-lastours.com" className="hover:text-wine-gold transition-colors duration-300 block mb-3">
                  contact@chateau-lastours.com
                </a>
                <span className="text-wine-gold font-semibold text-base block mt-3">
                  Lundi au samedi
                  <br />
                  9h - 12h30 • 13h30 - 18h30
                </span>
              </p>
            </div>

            <div className="group text-center relative">
              <div className="w-20 h-20 bg-gradient-to-br from-wine-gold to-wine-gold/80 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-wine-gold/30 group-hover:shadow-wine-gold/50 transition-shadow duration-500">
                <Calendar className="w-10 h-10 text-wine-dark" />
              </div>
              <h3 className="text-xl font-heading mb-4 text-wine-gold font-semibold tracking-wide">Réservation</h3>
              <p className="leading-relaxed opacity-95 text-sm">
                <span className="text-wine-gold font-semibold text-base block mb-2">Réservation obligatoire</span>
                Confirmation rapide
                <br />
                <br />
                Annulation gratuite
                <br />
                jusqu'à 24h avant
              </p>
            </div>
          </div>

          {/* Carte interactive pour localiser le château */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="relative w-full h-[600px] rounded-lg overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps?q=Château+Lastours,+81310+Lisle-sur-Tarn,+France&output=embed"
                width="100%"
                height="600"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation du Château Lastours"
                className="absolute inset-0 w-full border-0 map-iframe"
              />
            </div>
          </div>

          {/* Texte "Une expérience authentique vous attend au Château Lastours" supprimé comme demandé */}
        </div>
      </section>
    </div>
  )
}
