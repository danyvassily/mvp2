import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-6xl md:text-8xl font-serif mb-6 text-gray-900">
          404
        </h1>
        <h2 className="text-2xl md:text-4xl font-serif mb-4 text-gray-800">
          Page introuvable
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          La page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <div className="flex gap-4 justify-center">
          <Button
            asChild
            className="px-8 py-4 bg-gray-900 text-white uppercase tracking-wider text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            <Link href="/">
              Retour à l'accueil
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="px-8 py-4 uppercase tracking-wider text-sm font-medium"
          >
            <Link href="/les-vins">
              Découvrir nos vins
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

