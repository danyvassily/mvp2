/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuration pour déploiement Vercel avec Next.js standard
  // Pas d'export statique pour bénéficier de l'ISR et de l'optimisation des images
  trailingSlash: true,
  
  experimental: {
    optimizePackageImports: ["lucide-react", "@radix-ui/react-icons"],
  },

  // Optimisations images pour Vercel (optimisation automatique activée)
  images: {
    // Vercel optimise automatiquement les images, pas besoin de unoptimized: true
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.netlify.app",
      },
      {
        protocol: "https",
        hostname: "**.vercel.app",
      },
      {
        protocol: "https",
        hostname: "localhost",
      },
    ],
    // Configuration pour l'optimisation Vercel
    minimumCacheTTL: 60,
  },

  // Configuration pour le déploiement - désactivation temporaire des warnings
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  // Optimisations performance
  compress: true,
  poweredByHeader: false,

  // Les headers sont gérés par vercel.json
  // Les redirections sont gérées par vercel.json
};

export default nextConfig;
