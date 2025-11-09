import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { AuthProvider } from "@/lib/auth-context"
import { CartProvider } from "@/lib/cart-context"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingAuthButton } from "@/components/floating-auth-button"
import { Toaster } from "@/components/ui/toaster"
import { ClientLayout } from "@/components/ClientLayout"
import { ConditionalMainPadding } from "@/components/ConditionalMainPadding"

// Fonction helper pour obtenir l'URL de base
function getBaseUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`
  }
  return 'https://chateau-lastours.vercel.app'
}

export const metadata: Metadata = {
  // Utilisation d'une URL dynamique qui s'adapte au domaine de déploiement
  // Vercel fournira automatiquement le bon domaine via VERCEL_URL
  metadataBase: new URL(getBaseUrl()),
  title: "Châteaux Lastours - Domaine Viticole de Prestige",
  description:
    "Découvrez l'excellence viticole du sud de la France avec Châteaux Lastours. Vins d'exception, terroir unique, tradition et savoir-faire.",
  generator: "Next.js",
  openGraph: {
    title: "Châteaux Lastours - Domaine Viticole de Prestige",
    description: "Découvrez l'excellence viticole du sud de la France avec Châteaux Lastours. Vins d'exception, terroir unique, tradition et savoir-faire.",
    url: getBaseUrl(),
    siteName: 'Châteaux Lastours',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Châteaux Lastours - Domaine Viticole de Prestige",
    description: "Découvrez l'excellence viticole du sud de la France avec Châteaux Lastours. Vins d'exception, terroir unique, tradition et savoir-faire.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="light">
      <body suppressHydrationWarning className="antialiased light-theme">
        <AuthProvider>
          <CartProvider>
            {/* Header en dehors du ScrollSmootherWrapper pour fonctionner avec fixed */}
            <Header />
            <ClientLayout>
              <ConditionalMainPadding>{children}</ConditionalMainPadding>
              <Footer />
              <FloatingAuthButton />
            </ClientLayout>
            <Toaster />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
