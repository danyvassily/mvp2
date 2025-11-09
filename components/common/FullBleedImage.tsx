"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import type { StaticImageData } from "next/image";
import { encodeImagePath } from "@/lib/image-utils";

interface FullBleedImageProps {
  src: string | StaticImageData;
  alt: string;
  priority?: boolean;
  className?: string;
  portraitSrc?: string;
  landscapeSrc?: string;
  sizes?: string;
}

/**
 * Composant FullBleedImage
 * Image plein écran avec gestion portrait/paysage et optimisation Next/Image
 */
export function FullBleedImage({
  src,
  alt,
  priority = false,
  className,
  portraitSrc,
  landscapeSrc,
  sizes = "(max-width: 768px) 100vw, 100vw",
}: FullBleedImageProps) {
  // Encoder les chemins d'images (seulement pour les chaînes de caractères, pas pour StaticImageData)
  const encodedSrc = typeof src === "string" ? encodeImagePath(src) : src;
  
  // Helper pour obtenir le srcSet d'une source
  const getSrcSet = (source: string | StaticImageData | undefined): string | undefined => {
    if (!source) return undefined;
    return typeof source === "string" ? source : source.src;
  };
  
  const encodedPortraitSrc = portraitSrc ? (typeof portraitSrc === "string" ? encodeImagePath(portraitSrc) : portraitSrc) : undefined;
  const encodedLandscapeSrc = landscapeSrc ? (typeof landscapeSrc === "string" ? encodeImagePath(landscapeSrc) : landscapeSrc) : undefined;

  // Si on a des sources différentes pour portrait/paysage, utiliser <picture>
  if (portraitSrc || landscapeSrc) {
    return (
      <div className={cn("relative w-full overflow-hidden", className)}>
        <picture>
          {encodedPortraitSrc && (
            <source media="(orientation: portrait)" srcSet={getSrcSet(encodedPortraitSrc)} />
          )}
          {encodedLandscapeSrc && (
            <source media="(orientation: landscape)" srcSet={getSrcSet(encodedLandscapeSrc)} />
          )}
          <div className="relative w-full h-full min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh]">
            <Image
              src={encodedSrc}
              alt={alt}
              fill
              sizes={sizes}
              className="object-cover object-center"
              priority={priority}
            />
          </div>
        </picture>
      </div>
    );
  }

  // Sinon, image simple avec fill
  return (
    <div className={cn("relative w-full overflow-hidden", className)}>
      <div className="relative w-full h-full min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh]">
        <Image
          src={encodedSrc}
          alt={alt}
          fill
          sizes={sizes}
          className="object-cover object-center"
          priority={priority}
        />
      </div>
    </div>
  );
}

