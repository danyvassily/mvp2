"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, FormEvent } from "react"

// SVG Icons pour réseaux sociaux (sobres, 20px)
const FacebookIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
    aria-hidden="true"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)

const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
    aria-hidden="true"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)

const TwitterIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
    aria-hidden="true"
  >
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
  </svg>
)

const YoutubeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
    aria-hidden="true"
  >
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
)

// Données des colonnes du footer (3 colonnes seulement)
const footerColumns = [
  {
    title: "Le Domaine",
    links: [
      { label: "Notre Histoire", href: "/domaine/histoire" },
      { label: "Notre Vignoble", href: "/notre-vignoble" },
      { label: "Nos Engagements", href: "/domaine/engagement" },
    ],
  },
  {
    title: "Nos Vins",
    links: [
      { label: "Toutes les cuvées", href: "/les-vins" },
      { label: "Gamme Poussin", href: "/les-vins?collection=poussin" },
      { label: "Gamme Confidentielle", href: "/les-vins?collection=confidentielle" },
    ],
  },
  {
    title: "Expériences",
    links: [
      { label: "Réserver une visite", href: "/reservation" },
      { label: "Événements", href: "/evenements" },
      { label: "Club Lastours", href: "/club" },
    ],
  },
]

// Réseaux sociaux
const socialLinks = [
  {
    name: "Facebook",
    href: "#", // TODO: Remplacer par l'URL réelle
    icon: FacebookIcon,
    ariaLabel: "Facebook Château Lastours",
  },
  {
    name: "Instagram",
    href: "#", // TODO: Remplacer par l'URL réelle
    icon: InstagramIcon,
    ariaLabel: "Instagram Château Lastours",
  },
  {
    name: "Twitter",
    href: "#", // TODO: Remplacer par l'URL réelle
    icon: TwitterIcon,
    ariaLabel: "Twitter Château Lastours",
  },
  {
    name: "Youtube",
    href: "#", // TODO: Remplacer par l'URL réelle
    icon: YoutubeIcon,
    ariaLabel: "Youtube Château Lastours",
  },
]

// Liens légaux (incluant "Nous contacter")
const legalLinks = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "CGV", href: "/cgv" },
  { label: "CGU", href: "/cgu" },
  { label: "Politique de confidentialité", href: "/cookies" },
  { label: "Plan du site", href: "/sitemap" },
  { label: "Nous contacter", href: "/contact" },
]

export function Footer() {
  return (
    <footer className="bg-[#1e1b19] text-[#F3EEE8]" role="contentinfo">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        {/* Bande supérieure : Logo + 3 colonnes liens */}
        <FooterTop />

        {/* Diviseur horizontal discret */}
        <div className="border-t border-[#3a3530]/60" />

        {/* Bande inférieure : Newsletter + Réseaux sociaux + Légal */}
        <FooterBottom />
      </div>
    </footer>
  )
}

// Composant bande supérieure
function FooterTop() {
  return (
    <div className="py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {/* Colonne Logo */}
        <FooterBrand />

        {/* 3 colonnes de liens */}
        {footerColumns.map((column) => (
          <FooterLinks key={column.title} title={column.title} items={column.links} />
        ))}
      </div>
    </div>
  )
}

// Composant Brand (Logo + tagline)
function FooterBrand() {
  return (
    <div className="flex flex-col">
      <Link
        href="/"
        className="inline-block mb-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9AE71] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1e1b19] rounded"
      >
        <Image
          src="/PHOTOS-WEB-LASTOURS/LOGO/logo-chateau-lastours.jpg"
          alt="Château Lastours"
          width={150}
          height={125}
          className="w-[140px] md:w-[150px] h-auto object-contain"
          priority={false}
          loading="lazy"
        />
      </Link>
      <p className="text-[13px] text-[#BFB7AE] leading-[1.5] mt-1 max-w-[200px]">
        Depuis 1847, l'expression d'un terroir d'exception.
      </p>
    </div>
  )
}

// Composant colonne de liens
function FooterLinks({
  title,
  items,
}: {
  title: string
  items: Array<{ label: string; href: string }>
}) {
  return (
    <div>
      <h4 className="text-[12.5px] font-semibold tracking-[0.04em] mb-2 text-[#F3EEE8] uppercase">
        {title}
      </h4>
      <nav className="flex flex-col gap-1.5" aria-label={title}>
        {items.map((item) => (
          <FooterLink key={item.href} href={item.href}>
            {item.label}
          </FooterLink>
        ))}
      </nav>
    </div>
  )
}

// Composant lien footer
function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-[13.5px] leading-[1.5] text-[#F3EEE8] opacity-90 hover:opacity-100 hover:text-[#C9AE71] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9AE71] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1e1b19] rounded min-h-[36px] flex items-center"
    >
      {children}
    </Link>
  )
}

// Composant bande inférieure
function FooterBottom() {
  return (
    <div className="py-5">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        {/* Newsletter compacte inline */}
        <NewsletterCompact />

        {/* Réseaux sociaux + Ligne légale */}
        <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-start sm:items-center lg:items-end xl:items-center gap-4 lg:gap-6">
          {/* Réseaux sociaux */}
          <SocialList items={socialLinks} />

          {/* Ligne légale */}
          <LegalRow items={legalLinks} />
        </div>
      </div>
    </div>
  )
}

// Composant Newsletter compacte
function NewsletterCompact() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!email || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setStatus("error")
      setMessage("Veuillez entrer une adresse email valide.")
      return
    }

    // TODO: Intégrer avec l'API de newsletter
    try {
      // Placeholder pour l'appel API
      // await fetch('/api/newsletter', { method: 'POST', body: JSON.stringify({ email }) })
      
      setStatus("success")
      setMessage("Merci pour votre inscription !")
      setEmail("")
      
      // Réinitialiser le message après 5 secondes
      setTimeout(() => {
        setStatus("idle")
        setMessage("")
      }, 5000)
    } catch (error) {
      setStatus("error")
      setMessage("Une erreur est survenue. Veuillez réessayer.")
    }
  }

  return (
    <div className="flex-1 max-w-[360px] w-full">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <label htmlFor="newsletter-email" className="sr-only">
          Adresse email pour la newsletter
        </label>
        <input
          id="newsletter-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Votre email"
          required
          aria-describedby={message ? "newsletter-message" : undefined}
          className="flex-1 h-11 px-4 bg-[#2a2623] border border-[#3a3530] text-[#F3EEE8] placeholder:text-[#BFB7AE] rounded-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9AE71] focus-visible:border-[#C9AE71] transition-colors text-[13.5px]"
        />
        <button
          type="submit"
          className="h-11 px-6 bg-[#C9AE71] text-[#1e1b19] font-medium whitespace-nowrap hover:brightness-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9AE71] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1e1b19] transition-all text-[13.5px] min-w-[100px]"
        >
          S'inscrire
        </button>
      </form>
      {message && (
        <p
          id="newsletter-message"
          role="status"
          aria-live="polite"
          className={`mt-2 text-[12px] leading-[1.5] ${
            status === "success" ? "text-[#C9AE71]" : "text-[#BFB7AE]"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  )
}

// Composant liste réseaux sociaux
function SocialList({
  items,
}: {
  items: Array<{
    name: string
    href: string
    icon: () => React.ReactNode
    ariaLabel: string
  }>
}) {
  return (
    <nav className="flex items-center gap-3" aria-label="Réseaux sociaux">
      {items.map((item) => {
        const Icon = item.icon
        const isExternal = item.href.startsWith("http") || item.href.startsWith("#")
        return (
          <a
            key={item.name}
            href={item.href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            aria-label={item.ariaLabel}
            className="text-[#F3EEE8] opacity-85 hover:opacity-100 transition-opacity duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9AE71] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1e1b19] rounded p-1 min-w-[36px] min-h-[36px] flex items-center justify-center"
          >
            <Icon />
          </a>
        )
      })}
    </nav>
  )
}

// Composant ligne légale
function LegalRow({ items }: { items: Array<{ label: string; href: string }> }) {
  return (
    <nav
      className="flex flex-wrap items-center justify-center lg:justify-end gap-x-3 gap-y-1 text-[12px] leading-[1.6] text-[#BFB7AE]"
      aria-label="Liens légaux"
    >
      <span className="text-[#BFB7AE] opacity-40">
        © {new Date().getFullYear()} Châteaux Lastours
      </span>
      {items.map((link, index) => (
        <span key={link.href} className="flex items-center gap-3">
          <span className="text-[#BFB7AE] opacity-40" aria-hidden="true">
            ·
          </span>
          <Link
            href={link.href}
            className="text-[#BFB7AE] hover:text-[#F3EEE8] hover:opacity-100 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9AE71] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1e1b19] rounded min-h-[36px] flex items-center"
          >
            {link.label}
          </Link>
        </span>
      ))}
    </nav>
  )
}
