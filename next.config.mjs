/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuration pour déploiement Vercel avec Next.js standard
  
  // Configuration images pour Vercel - Images locales uniquement
  images: {
    // Formats modernes pour optimisation automatique Vercel
    formats: ["image/avif", "image/webp"],
    // Tailles d'images pour responsive
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Pas de remotePatterns nécessaires pour les images locales dans /public
    // Cache TTL pour optimisation Vercel
    minimumCacheTTL: 60,
  },

  // Les vérifications ESLint et TypeScript sont maintenant activées au build
  // pour assurer la qualité du code.
  
  // Optimisations performance
  compress: true,
  poweredByHeader: false,

  // Les headers et redirections sont gérés via vercel.json pour une meilleure 
  // performance sur l'edge.

  // Rewrites pour gérer les différences de casse sur Vercel (Linux = case-sensitive)
  async rewrites() {
    return {
      beforeFiles: [
        // Mappe /photos-web-lastours/ vers /PHOTOS-WEB-LASTOURS/
        {
          source: '/photos-web-lastours/:path*',
          destination: '/PHOTOS-WEB-LASTOURS/:path*',
        },
        // Mappe /asset/ vers /ASSET/
        {
          source: '/asset/:path*',
          destination: '/ASSET/:path*',
        },
        // Mappe /fiche-technique/ vers /Fiche technique/
        {
          source: '/fiche-technique/:path*',
          destination: '/Fiche technique/:path*',
        },
      ],
    };
  },
};

export default nextConfig;
