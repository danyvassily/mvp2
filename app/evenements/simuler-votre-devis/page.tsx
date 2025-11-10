"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { ScrollAnimation } from "@/components/gsap/ScrollAnimations"
import { HeroEvent } from "@/components/events/HeroEvent"
import { SummaryBlock } from "@/components/events/SummaryBlock"
import { InlineNotice } from "@/components/events/InlineNotice"
import { ArrowRight, ArrowLeft, CheckCircle2, Phone, Mail, AlertCircle } from "lucide-react"
import { Espace } from "@/app/api/espaces/route"
import type { Option } from "@/app/api/options/route"
import type { DevisResponse, DevisLigne } from "@/app/api/devis/route"
import Link from "next/link"

/**
 * Page "Simuler votre devis"
 * 
 * Formulaire multi-étapes avec calcul temps réel :
 * 1. Date + Nombre d'invités
 * 2. Espaces (checkbox)
 * 3. Options (checkbox + quantités)
 * 4. Coordonnées
 * 5. Validation et Paiement
 */

interface QuoteFormData {
  dateEvenement: string
  invites: number
  espaces: string[]
  options: Array<{ id: string; quantite: number }>
  contact: {
    nom: string
    email: string
    tel: string
  }
}

const CONTACT_PHONE = "+33563570709"
const CONTACT_EMAIL = "contact@chateau-lastours.com"
const DEBOUNCE_DELAY = 300

export default function SimulerDevisPage() {
  const [step, setStep] = useState(1)
  const [espaces, setEspaces] = useState<Espace[]>([])
  const [options, setOptions] = useState<Option[]>([])
  const [loading, setLoading] = useState(true)
  const [calculating, setCalculating] = useState(false)
  const [disponibilite, setDisponibilite] = useState<{ disponible: boolean; message?: string } | null>(null)
  
  const [formData, setFormData] = useState<QuoteFormData>({
    dateEvenement: "",
    invites: 0,
    espaces: [],
    options: [],
    contact: {
      nom: "",
      email: "",
      tel: ""
    }
  })
  
  const [devis, setDevis] = useState<DevisResponse | null>(null)
  const [submitLoading, setSubmitLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null)

  // Charger les espaces et options depuis l'API
  useEffect(() => {
    async function loadData() {
      try {
        const [espacesRes, optionsRes] = await Promise.all([
          fetch("/api/espaces"),
          fetch("/api/options")
        ])
        
        if (espacesRes.ok) {
          const espacesData = await espacesRes.json()
          setEspaces(espacesData)
        }
        
        if (optionsRes.ok) {
          const optionsData = await optionsRes.json()
          setOptions(optionsData)
        }
      } catch (error) {
        console.error("Erreur chargement données:", error)
      } finally {
        setLoading(false)
      }
    }
    loadData()
  }, [])

  // Vérifier la disponibilité quand la date change
  useEffect(() => {
    if (!formData.dateEvenement) {
      setDisponibilite(null)
      return
    }

    async function checkDisponibilite() {
      try {
        const response = await fetch(`/api/disponibilites?date=${formData.dateEvenement}`)
        if (response.ok) {
          const data = await response.json()
          setDisponibilite(data)
        }
      } catch (error) {
        console.error("Erreur vérification disponibilité:", error)
      }
    }

    checkDisponibilite()
  }, [formData.dateEvenement])

  // Calcul du devis en temps réel avec debounce
  const calculateDevis = useCallback(async () => {
    if (!formData.dateEvenement || !formData.invites || formData.espaces.length === 0) {
      setDevis(null)
      return
    }

    // Nettoyer le timer précédent
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current)
    }

    // Débounce
    debounceTimerRef.current = setTimeout(async () => {
      setCalculating(true)
      try {
        const response = await fetch("/api/devis", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            dateEvenement: formData.dateEvenement,
            invites: formData.invites,
            espaces: formData.espaces,
            options: formData.options,
            contact: formData.contact
          })
        })

        if (response.ok) {
          const data = await response.json()
          setDevis(data)
        } else {
          const error = await response.json()
          console.error("Erreur calcul devis:", error)
          setDevis(null)
        }
      } catch (error) {
        console.error("Erreur calcul devis:", error)
        setDevis(null)
      } finally {
        setCalculating(false)
      }
    }, DEBOUNCE_DELAY)
  }, [formData])

  // Recalculer le devis quand les données changent
  useEffect(() => {
    if (step >= 3) {
      calculateDevis()
    }
  }, [formData, step, calculateDevis])

  // Calculer la capacité totale des espaces sélectionnés
  const capaciteTotale = formData.espaces.reduce((sum, id) => {
    const espace = espaces.find(e => e.id === id)
    return sum + (espace?.capaciteMax || espace?.capacite || 0)
  }, 0)

  const handleNext = () => {
    // Validation par étape
    if (step === 1) {
      if (!formData.dateEvenement || !formData.invites || formData.invites < 1) {
        setErrors({
          dateEvenement: !formData.dateEvenement ? "Date requise" : "",
          invites: !formData.invites || formData.invites < 1 ? "Nombre d'invités requis (minimum 1)" : ""
        })
        return
      }
      setErrors({})
    }
    
    if (step === 2 && formData.espaces.length === 0) {
      setErrors({ espaces: "Au moins un espace doit être sélectionné" })
      return
    }
    
    if (step === 4) {
      if (!formData.contact.nom || !formData.contact.email || !formData.contact.tel) {
        setErrors({
          nom: !formData.contact.nom ? "Nom requis" : "",
          email: !formData.contact.email ? "Email requis" : "",
          tel: !formData.contact.tel ? "Téléphone requis" : ""
        })
        return
      }
      // Validation email
      if (!formData.contact.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        setErrors({ email: "Email invalide" })
        return
      }
      setErrors({})
    }

    if (step < 5) {
      setStep(step + 1)
    }
  }

  const handlePrev = () => {
    if (step > 1) {
      setStep(step - 1)
      setErrors({})
    }
  }

  const handleSubmit = async () => {
    if (!devis || !devis.payementEligible) {
      return
    }

    setSubmitLoading(true)
    
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          devisId: devis.devisId
        })
      })

      if (response.ok) {
        const data = await response.json()
        // Rediriger vers la page de paiement
        window.location.href = data.checkoutUrl
      } else {
        const error = await response.json()
        setErrors({ submit: error.error || "Erreur lors de l'initialisation du paiement" })
      }
    } catch (error) {
      setErrors({ submit: "Erreur lors de l'initialisation du paiement" })
    } finally {
      setSubmitLoading(false)
    }
  }

  const handleOptionToggle = (optionId: string) => {
    const existingIndex = formData.options.findIndex(o => o.id === optionId)
    const option = options.find(o => o.id === optionId)
    
    if (!option) return

    if (existingIndex >= 0) {
      // Retirer l'option
      setFormData({
        ...formData,
        options: formData.options.filter(o => o.id !== optionId)
      })
    } else {
      // Ajouter l'option avec quantité par défaut
      let quantite = 1
      if (option.type === "par_personne") {
        quantite = formData.invites
      }
      
      setFormData({
        ...formData,
        options: [...formData.options, { id: optionId, quantite }]
      })
    }
  }

  const handleOptionQuantityChange = (optionId: string, quantite: number) => {
    setFormData({
      ...formData,
      options: formData.options.map(o => 
        o.id === optionId ? { ...o, quantite } : o
      )
    })
  }

  // Vérifier si une option nécessite un contact direct
  const hasCustomOption = false // À implémenter si besoin

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroEvent
        imageSrc="/page/organiser-votre-evenement-ok-et-inclure-cta-pour-renvoyer-ver-vos-evenement/concert-sous-tente-nomade-safari-gaillac-france-chateau-lastours.png"
        title="Simuler votre devis"
        primaryCtaHref="/evenements/organiser"
        primaryCtaLabel="← Retour"
      />

      {/* Barre de progression */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between">
              {[1, 2, 3, 4, 5].map((s) => (
                <div key={s} className="flex items-center flex-1">
                  <div 
                    className={`flex items-center justify-center w-10 h-10 rounded-full transition-colors ${
                      step >= s ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground"
                    }`}
                    aria-current={step === s ? "step" : undefined}
                  >
                    {step > s ? <CheckCircle2 className="w-6 h-6" /> : s}
                  </div>
                  {s < 5 && (
                    <div className={`flex-1 h-1 mx-2 transition-colors ${
                      step > s ? "bg-accent" : "bg-muted"
                    }`} />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-2 text-sm text-muted-foreground">
              <span>Date & Invités</span>
              <span>Espaces</span>
              <span>Options</span>
              <span>Contact</span>
              <span>Validation</span>
            </div>
          </div>
        </div>
      </section>

      {/* Formulaire multi-étapes */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Colonne principale - Formulaire */}
              <div className="lg:col-span-2 space-y-12">
                
                {/* Étape 1 : Date + Nombre d'invités */}
                {step === 1 && (
                  <ScrollAnimation animation="fadeIn">
                    <div className="space-y-6">
                      <h2 className="text-3xl md:text-4xl font-display mb-8">Informations sur votre événement</h2>
                      
                      <div className="space-y-6">
                        <div>
                          <Label htmlFor="dateEvenement">Date de l'événement *</Label>
                          <Input
                            id="dateEvenement"
                            type="date"
                            value={formData.dateEvenement}
                            onChange={(e) => {
                              setFormData({ ...formData, dateEvenement: e.target.value })
                              setErrors({ ...errors, dateEvenement: "" })
                            }}
                            className="min-h-[44px] mt-2"
                            min={new Date().toISOString().split('T')[0]}
                            aria-invalid={!!errors.dateEvenement}
                            aria-describedby={errors.dateEvenement ? "error-date" : undefined}
                          />
                          {errors.dateEvenement && (
                            <p id="error-date" className="text-sm text-destructive mt-2" role="alert">
                              {errors.dateEvenement}
                            </p>
                          )}
                          {disponibilite && !disponibilite.disponible && (
                            <InlineNotice variant="warning" className="mt-4">
                              <AlertCircle className="w-4 h-4 inline mr-2" />
                              {disponibilite.message || "Cette date n'est pas disponible"}
                            </InlineNotice>
                          )}
                        </div>

                        <div>
                          <Label htmlFor="invites">Nombre d'invités *</Label>
                          <Input
                            id="invites"
                            type="number"
                            value={formData.invites || ""}
                            onChange={(e) => {
                              const value = parseInt(e.target.value) || 0
                              setFormData({ ...formData, invites: value })
                              setErrors({ ...errors, invites: "" })
                            }}
                            className="min-h-[44px] mt-2"
                            min="1"
                            max="1000"
                            aria-invalid={!!errors.invites}
                            aria-describedby={errors.invites ? "error-invites" : undefined}
                          />
                          {errors.invites && (
                            <p id="error-invites" className="text-sm text-destructive mt-2" role="alert">
                              {errors.invites}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="flex justify-end pt-6">
                        <Button
                          onClick={handleNext}
                          disabled={!formData.dateEvenement || !formData.invites || formData.invites < 1}
                          className="min-h-[44px] focus:ring-2 focus:ring-accent"
                        >
                          Suivant
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </ScrollAnimation>
                )}

                {/* Étape 2 : Espaces */}
                {step === 2 && (
                  <ScrollAnimation animation="fadeIn">
                    <div className="space-y-6">
                      <h2 className="text-3xl md:text-4xl font-display mb-8">Sélectionnez vos espaces</h2>
                      
                      {loading ? (
                        <div className="text-center py-12">Chargement des espaces...</div>
                      ) : (
                        <>
                          <div className="space-y-4">
                            {espaces.map((espace) => (
                              <div
                                key={espace.id}
                                className={`p-6 border-b cursor-pointer transition-all ${
                                  formData.espaces.includes(espace.id)
                                    ? "border-accent bg-accent/5"
                                    : "border-border hover:border-accent/30 hover:bg-muted/30"
                                }`}
                                onClick={() => {
                                  const newEspaces = formData.espaces.includes(espace.id)
                                    ? formData.espaces.filter((e) => e !== espace.id)
                                    : [...formData.espaces, espace.id]
                                  setFormData({ ...formData, espaces: newEspaces })
                                  setErrors({ ...errors, espaces: "" })
                                }}
                              >
                                <div className="flex items-start gap-4">
                                  <Checkbox
                                    checked={formData.espaces.includes(espace.id)}
                                    className="mt-1 min-h-[44px] min-w-[44px]"
                                    aria-label={`Sélectionner ${espace.titre}`}
                                  />
                                  <div className="flex-1">
                                    <h3 className="text-xl font-display mb-2">{espace.titre}</h3>
                                    <p className="text-muted-foreground mb-2">{espace.description}</p>
                                    {(espace.capaciteMax || espace.capacite) && (
                                      <div className="flex gap-4 text-sm text-muted-foreground">
                                        <span>Capacité : {espace.capaciteMax || espace.capacite} personnes</span>
                                        {espace.surface_m2 && <span>Surface : {espace.surface_m2}m²</span>}
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                          
                          {formData.espaces.length > 0 && formData.invites > capaciteTotale && (
                            <InlineNotice variant="warning">
                              <AlertCircle className="w-4 h-4 inline mr-2" />
                              Le nombre d'invités ({formData.invites}) dépasse la capacité totale des espaces sélectionnés ({capaciteTotale} personnes).
                              Veuillez contacter le domaine pour discuter des options disponibles.
                            </InlineNotice>
                          )}
                          
                          {errors.espaces && (
                            <p className="text-sm text-destructive" role="alert">{errors.espaces}</p>
                          )}
                        </>
                      )}

                      <div className="flex justify-between pt-6">
                        <Button
                          variant="outline"
                          onClick={handlePrev}
                          className="min-h-[44px] focus:ring-2 focus:ring-accent"
                        >
                          <ArrowLeft className="mr-2 w-4 h-4" />
                          Précédent
                        </Button>
                        <Button
                          onClick={handleNext}
                          disabled={formData.espaces.length === 0}
                          className="min-h-[44px] focus:ring-2 focus:ring-accent"
                        >
                          Suivant
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </ScrollAnimation>
                )}

                {/* Étape 3 : Options */}
                {step === 3 && (
                  <ScrollAnimation animation="fadeIn">
                    <div className="space-y-6">
                      <h2 className="text-3xl md:text-4xl font-display mb-8">Options supplémentaires</h2>
                      
                      {loading ? (
                        <div className="text-center py-12">Chargement des options...</div>
                      ) : (
                        <>
                          <div className="space-y-4">
                            {options.map((option) => {
                              const isSelected = formData.options.some(o => o.id === option.id)
                              const selectedOption = formData.options.find(o => o.id === option.id)
                              const quantite = selectedOption?.quantite || 1
                              
                              return (
                                <div
                                  key={option.id}
                                  className={`p-6 border-b transition-all ${
                                    isSelected
                                      ? "border-accent bg-accent/5"
                                      : "border-border hover:border-accent/30 hover:bg-muted/30"
                                  }`}
                                >
                                  <div className="flex items-start gap-4">
                                    <Checkbox
                                      checked={isSelected}
                                      onCheckedChange={() => handleOptionToggle(option.id)}
                                      className="mt-1 min-h-[44px] min-w-[44px]"
                                      aria-label={`Sélectionner ${option.titre}`}
                                    />
                                    <div className="flex-1">
                                      <div className="flex items-start justify-between gap-4 mb-2">
                                        <div className="flex-1">
                                          <h3 className="text-xl font-display mb-1">{option.titre}</h3>
                                          {option.description && (
                                            <p className="text-sm text-muted-foreground mb-2">{option.description}</p>
                                          )}
                                        </div>
                                        <div className="text-right font-medium whitespace-nowrap">
                                          {option.prixHT.toFixed(2)} € HT
                                          {option.type === "par_personne" && <span className="text-xs text-muted-foreground block">/ personne</span>}
                                        </div>
                                      </div>
                                      
                                      {isSelected && option.type === "par_unite" && (
                                        <div className="mt-4">
                                          <Label htmlFor={`qty-${option.id}`}>Quantité</Label>
                                          <Input
                                            id={`qty-${option.id}`}
                                            type="number"
                                            min="1"
                                            value={quantite}
                                            onChange={(e) => {
                                              const qty = parseInt(e.target.value) || 1
                                              handleOptionQuantityChange(option.id, qty)
                                            }}
                                            className="min-h-[44px] w-32 mt-2"
                                          />
                                        </div>
                                      )}
                                      
                                      {isSelected && option.type === "par_personne" && (
                                        <InlineNotice variant="info" className="mt-4">
                                          Quantité automatique : {formData.invites} {option.unite || "personne"}
                                        </InlineNotice>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              )
                            })}
                          </div>
                          
                          {/* Message si option non listée */}
                          <InlineNotice variant="info">
                            <Mail className="w-4 h-4 inline mr-2" />
                            Option non listée ? Contactez-nous au{" "}
                            <a href={`tel:${CONTACT_PHONE}`} className="underline focus:outline-none focus:ring-2 focus:ring-accent rounded">
                              {CONTACT_PHONE.replace(/(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, "$1 $2 $3 $4 $5")}
                            </a>
                            {" "}ou{" "}
                            <a href={`mailto:${CONTACT_EMAIL}`} className="underline focus:outline-none focus:ring-2 focus:ring-accent rounded">
                              {CONTACT_EMAIL}
                            </a>
                          </InlineNotice>
                        </>
                      )}

                      <div className="flex justify-between pt-6">
                        <Button
                          variant="outline"
                          onClick={handlePrev}
                          className="min-h-[44px] focus:ring-2 focus:ring-accent"
                        >
                          <ArrowLeft className="mr-2 w-4 h-4" />
                          Précédent
                        </Button>
                        <Button
                          onClick={handleNext}
                          className="min-h-[44px] focus:ring-2 focus:ring-accent"
                        >
                          Suivant
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </ScrollAnimation>
                )}

                {/* Étape 4 : Coordonnées */}
                {step === 4 && (
                  <ScrollAnimation animation="fadeIn">
                    <div className="space-y-6">
                      <h2 className="text-3xl md:text-4xl font-display mb-8">Vos coordonnées</h2>
                      
                      <div className="space-y-6">
                        <div>
                          <Label htmlFor="nom">Nom complet *</Label>
                          <Input
                            id="nom"
                            type="text"
                            value={formData.contact.nom}
                            onChange={(e) => {
                              setFormData({
                                ...formData,
                                contact: { ...formData.contact, nom: e.target.value }
                              })
                              setErrors({ ...errors, nom: "" })
                            }}
                            className="min-h-[44px] mt-2"
                            aria-invalid={!!errors.nom}
                            aria-describedby={errors.nom ? "error-nom" : undefined}
                          />
                          {errors.nom && (
                            <p id="error-nom" className="text-sm text-destructive mt-2" role="alert">
                              {errors.nom}
                            </p>
                          )}
                        </div>

                        <div>
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.contact.email}
                            onChange={(e) => {
                              setFormData({
                                ...formData,
                                contact: { ...formData.contact, email: e.target.value }
                              })
                              setErrors({ ...errors, email: "" })
                            }}
                            className="min-h-[44px] mt-2"
                            aria-invalid={!!errors.email}
                            aria-describedby={errors.email ? "error-email" : undefined}
                          />
                          {errors.email && (
                            <p id="error-email" className="text-sm text-destructive mt-2" role="alert">
                              {errors.email}
                            </p>
                          )}
                        </div>

                        <div>
                          <Label htmlFor="tel">Téléphone *</Label>
                          <Input
                            id="tel"
                            type="tel"
                            value={formData.contact.tel}
                            onChange={(e) => {
                              setFormData({
                                ...formData,
                                contact: { ...formData.contact, tel: e.target.value }
                              })
                              setErrors({ ...errors, tel: "" })
                            }}
                            className="min-h-[44px] mt-2"
                            aria-invalid={!!errors.tel}
                            aria-describedby={errors.tel ? "error-tel" : undefined}
                          />
                          {errors.tel && (
                            <p id="error-tel" className="text-sm text-destructive mt-2" role="alert">
                              {errors.tel}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="flex justify-between pt-6">
                        <Button
                          variant="outline"
                          onClick={handlePrev}
                          className="min-h-[44px] focus:ring-2 focus:ring-accent"
                        >
                          <ArrowLeft className="mr-2 w-4 h-4" />
                          Précédent
                        </Button>
                        <Button
                          onClick={handleNext}
                          disabled={!formData.contact.nom || !formData.contact.email || !formData.contact.tel}
                          className="min-h-[44px] focus:ring-2 focus:ring-accent"
                        >
                          Valider mon devis
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </ScrollAnimation>
                )}

                {/* Étape 5 : Validation et Paiement */}
                {step === 5 && (
                  <ScrollAnimation animation="fadeIn">
                    <div className="space-y-6">
                      <h2 className="text-3xl md:text-4xl font-display mb-8">Valider et payer</h2>
                      
                      {devis && devis.payementEligible ? (
                        <>
                          <div className="space-y-4">
                            <p className="text-lg text-muted-foreground">
                              Votre devis est prêt. Vous pouvez procéder au paiement de l'acompte pour confirmer votre réservation.
                            </p>
                            
                            {errors.submit && (
                              <InlineNotice variant="warning">
                                <AlertCircle className="w-4 h-4 inline mr-2" />
                                {errors.submit}
                              </InlineNotice>
                            )}
                            
                            <div className="flex flex-col sm:flex-row gap-4 pt-6">
                              <Button
                                onClick={handleSubmit}
                                disabled={submitLoading}
                                className="min-h-[44px] flex-1 focus:ring-2 focus:ring-accent"
                              >
                                {submitLoading ? "Traitement..." : "Valider et payer l'acompte"}
                                <ArrowRight className="ml-2 w-4 h-4" />
                              </Button>
                              
                              <Button
                                variant="outline"
                                asChild
                                className="min-h-[44px] focus:ring-2 focus:ring-accent"
                              >
                                <Link href={`tel:${CONTACT_PHONE}`}>
                                  <Phone className="mr-2 w-4 h-4" />
                                  Nous contacter
                                </Link>
                              </Button>
                            </div>
                          </div>
                        </>
                      ) : (
                        <div className="space-y-4">
                          <InlineNotice variant="info">
                            <AlertCircle className="w-4 h-4 inline mr-2" />
                            Votre devis nécessite une personnalisation. Contactez-nous directement pour discuter de votre projet.
                          </InlineNotice>
                          
                          <div className="flex flex-col sm:flex-row gap-4 pt-6">
                            <Button
                              variant="outline"
                              asChild
                              className="min-h-[44px] focus:ring-2 focus:ring-accent"
                            >
                              <Link href={`mailto:${CONTACT_EMAIL}`}>
                                <Mail className="mr-2 w-4 h-4" />
                                {CONTACT_EMAIL}
                              </Link>
                            </Button>
                            
                            <Button
                              variant="outline"
                              asChild
                              className="min-h-[44px] focus:ring-2 focus:ring-accent"
                            >
                              <Link href={`tel:${CONTACT_PHONE}`}>
                                <Phone className="mr-2 w-4 h-4" />
                                {CONTACT_PHONE.replace(/(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, "$1 $2 $3 $4 $5")}
                              </Link>
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>
                  </ScrollAnimation>
                )}

              </div>

              {/* Colonne latérale - Résumé (collant sur desktop) */}
              {(step >= 3 && devis) && (
                <div className="lg:col-span-1">
                  <SummaryBlock
                    lignes={devis.lignes}
                    sousTotalHT={devis.sousTotalHT}
                    tva={devis.tva}
                    totalTTC={devis.totalTTC}
                    isLoading={calculating}
                  />
                </div>
              )}

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
