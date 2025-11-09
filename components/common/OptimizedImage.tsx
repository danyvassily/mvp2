"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { encodeImagePath } from "@/lib/image-utils"

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
  className?: string
  containerClassName?: string
  priority?: boolean
  sizes?: string
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down"
  objectPosition?: string
  fallbackSrc?: string
  aspectRatio?: "square" | "video" | "portrait" | "landscape" | "auto"
  quality?: number
  placeholder?: "blur" | "empty"
  blurDataURL?: string
}

const aspectRatioClasses = {
  square: "aspect-square",
  video: "aspect-video", 
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  auto: ""
}

const objectFitClasses = {
  cover: "object-cover",
  contain: "object-contain",
  fill: "object-fill",
  none: "object-none",
  "scale-down": "object-scale-down"
}

const objectPositionClasses = {
  center: "object-center",
  top: "object-top",
  bottom: "object-bottom",
  left: "object-left",
  right: "object-right",
  "top-left": "object-left-top",
  "top-right": "object-right-top",
  "bottom-left": "object-left-bottom",
  "bottom-right": "object-right-bottom"
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  fill = false,
  className = "",
  containerClassName = "",
  priority = false,
  sizes = "100vw",
  objectFit = "cover",
  objectPosition = "center",
  fallbackSrc = "/placeholder.jpg",
  aspectRatio = "auto",
  quality = 85,
  placeholder = "empty",
  blurDataURL
}: OptimizedImageProps) {
  // Encoder le chemin d'image pour gérer les espaces et caractères spéciaux
  const encodedSrc = encodeImagePath(src)
  const encodedFallback = encodeImagePath(fallbackSrc)
  const [imgSrc, setImgSrc] = useState(encodedSrc)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const handleError = () => {
    if (imgSrc !== encodedFallback) {
      setImgSrc(encodedFallback)
      setHasError(true)
    }
  }

  const handleLoad = () => {
    setIsLoading(false)
  }

  // Utiliser les classes Tailwind appropriées
  const objectFitClass = objectFitClasses[objectFit] || "object-cover"
  const objectPositionClass = objectPositionClasses[objectPosition as keyof typeof objectPositionClasses] || "object-center"

  if (fill) {
    return (
      <div className={cn(
        "relative overflow-hidden",
        aspectRatio !== "auto" && aspectRatioClasses[aspectRatio],
        containerClassName
      )}>
        {isLoading && (
          <div className="absolute inset-0 bg-muted animate-pulse" />
        )}
        <Image
          src={imgSrc}
          alt={alt}
          fill
          className={cn(
            objectFitClass,
            objectPositionClass,
            "transition-opacity duration-300",
            isLoading ? "opacity-0" : "opacity-100",
            hasError && "grayscale",
            className
          )}
          priority={priority}
          sizes={sizes}
          quality={quality}
          placeholder={placeholder}
          blurDataURL={blurDataURL}
          onError={handleError}
          onLoad={handleLoad}
          style={{
            objectFit: objectFit,
            objectPosition: objectPosition
          }}
        />
      </div>
    )
  }

  return (
    <div className={cn(
      "relative overflow-hidden",
      aspectRatio !== "auto" && aspectRatioClasses[aspectRatio],
      containerClassName
    )}>
      {isLoading && (
        <div className="absolute inset-0 bg-muted animate-pulse" />
      )}
      <Image
        src={imgSrc}
        alt={alt}
        width={width}
        height={height}
        className={cn(
          objectFitClass,
          objectPositionClass,
          "transition-opacity duration-300",
          isLoading ? "opacity-0" : "opacity-100",
          hasError && "grayscale",
          className
        )}
        priority={priority}
        sizes={sizes}
        quality={quality}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        onError={handleError}
        onLoad={handleLoad}
        style={{
          objectFit: objectFit,
          objectPosition: objectPosition
        }}
      />
    </div>
  )
}
