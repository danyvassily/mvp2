'use client'

import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

/**
 * Page stub pour le paiement (utilisée par /api/checkout)
 * 
 * Cette page est temporaire jusqu'à l'intégration complète de Stripe.
 * Elle affiche simplement un message de confirmation.
 */

function PaiementStubContent() {
  const searchParams = useSearchParams()
  const devisId = searchParams.get('devisId')

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="max-w-2xl w-full space-y-6">
        <h1 className="text-3xl font-bold">Paiement en cours de finalisation</h1>
        <div className="space-y-4">
          <p className="text-lg">
            <strong>Devis ID:</strong> {devisId || 'N/A'}
          </p>
          <p>
            Cette page est un stub. L'intégration Stripe complète sera disponible prochainement.
          </p>
          <p>
            Pour le moment, veuillez contacter le domaine directement pour finaliser votre réservation.
          </p>
          <div className="flex gap-4 pt-4">
            <a 
              href="tel:+33563570709" 
              className="text-primary hover:underline"
            >
              05 63 57 07 09
            </a>
            <span className="text-muted-foreground">|</span>
            <a 
              href="mailto:contact@chateau-lastours.com" 
              className="text-primary hover:underline"
            >
              contact@chateau-lastours.com
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function PaiementStubPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <p>Chargement...</p>
      </div>
    }>
      <PaiementStubContent />
    </Suspense>
  )
}




