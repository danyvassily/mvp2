// Utility functions to recover the best image path for a wine
// Works on the client without accessing the filesystem by trying
// a series of likely filenames present in /public.

import type { Wine } from "@/lib/wines-data"

function slugify(input: string): string {
  return input
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // remove diacritics
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "")
}

export function wineImageCandidates(wine: Wine): string[] {
  const provided = wine.image?.trim() || ""
  const hasExt = /\.(png|jpg|jpeg|webp|avif)$/i.test(provided)
  const baseProvided = provided.replace(/\.(png|jpg|jpeg|webp|avif)$/i, "")

  const slug = slugify(wine.name)
  const preferredBases = [
    baseProvided || "",
    `/wine-${slug}`,
    `/${slug}`,
  ].filter(Boolean)

  const exts = [".png", ".jpg", ".jpeg", ".webp", ".avif"]

  const list: string[] = []
  if (provided) list.push(provided)
  // swap extension variants for provided path
  if (hasExt) {
    for (const ext of exts) {
      const candidate = baseProvided + ext
      if (candidate !== provided) list.push(candidate)
    }
  }

  // Try canonical names like /wine-domeni-blanc.png, etc.
  for (const base of preferredBases) {
    for (const ext of exts) list.push(base + ext)
  }

  // Fallback
  list.push("/wine-bottle-default.png")

  // Remove duplicates while preserving order
  return Array.from(new Set(list))
}

/**
 * Encode un chemin d'image pour qu'il soit compatible avec les URLs
 * Gère les espaces et caractères spéciaux pour Vercel/Next.js
 * Encode chaque segment séparément pour préserver les slashes
 */
export function encodeImagePath(path: string): string {
  // Si le chemin commence par /, on le garde
  const isAbsolute = path.startsWith('/')
  const pathWithoutSlash = isAbsolute ? path.slice(1) : path
  
  // Encoder chaque segment du chemin séparément (sans encoder les slashes)
  const segments = pathWithoutSlash.split('/')
  const encodedSegments = segments.map(segment => {
    // Encoder les espaces et caractères spéciaux dans chaque segment
    // encodeURIComponent encode tout, donc on doit remplacer les slashes après
    return encodeURIComponent(segment)
  })
  
  // Reconstruire le chemin avec le slash initial si nécessaire
  return isAbsolute ? '/' + encodedSegments.join('/') : encodedSegments.join('/')
}

