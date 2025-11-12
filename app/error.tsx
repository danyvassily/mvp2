'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log l'erreur pour le débogage
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-serif mb-6 text-gray-900">
          Oups, une erreur est survenue
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          {error.message || 'Une erreur inattendue s\'est produite'}
        </p>
        <div className="flex gap-4 justify-center">
          <Button
            onClick={reset}
            className="px-8 py-4 bg-gray-900 text-white uppercase tracking-wider text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            Réessayer
          </Button>
          <Button
            asChild
            variant="outline"
            className="px-8 py-4 uppercase tracking-wider text-sm font-medium"
          >
            <Link href="/">
              Retour à l'accueil
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

