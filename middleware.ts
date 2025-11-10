import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Ne pas intercepter les requêtes d'images et autres assets statiques
  const pathname = request.nextUrl.pathname
  
  // Exclure les images, fichiers statiques, API routes, etc.
  if (
    pathname.startsWith('/api/') ||
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/favicon.ico') ||
    pathname.startsWith('/robots.txt') ||
    pathname.startsWith('/sitemap.xml') ||
    /\.(png|jpg|jpeg|gif|webp|svg|ico|woff|woff2|ttf|eot)$/i.test(pathname)
  ) {
    return NextResponse.next()
  }

  // Votre logique de middleware ici si nécessaire
  // Pour l'instant, on laisse passer toutes les autres requêtes
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - robots.txt (robots file)
     * - sitemap.xml (sitemap file)
     * - files with image extensions (png, jpg, jpeg, gif, webp, svg, ico)
     * - files with font extensions (woff, woff2, ttf, eot)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico|woff|woff2|ttf|eot)$).*)',
  ],
}

