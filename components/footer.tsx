import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

// SVG Icons pour réseaux sociaux (sobres, inline)
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

// Données des colonnes du footer
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
  {
    title: "Contact",
    links: [
      { label: "Nous contacter", href: "/contact" },
      { label: "Actualités", href: "/actualites" },
      { label: "Presse", href: "/presse" },
    ],
  },
]

// Réseaux sociaux (placeholders - à remplacer par les URLs réelles)
const socialLinks = [
  {
    name: "Facebook",
    href: "#", // TODO: Remplacer par l'URL réelle
    icon: FacebookIcon,
    ariaLabel: "Facebook Lastours",
  },
  {
    name: "Instagram",
    href: "#", // TODO: Remplacer par l'URL réelle
    icon: InstagramIcon,
    ariaLabel: "Instagram Lastours",
  },
  {
    name: "Twitter",
    href: "#", // TODO: Remplacer par l'URL réelle
    icon: TwitterIcon,
    ariaLabel: "Twitter Lastours",
  },
  {
    name: "Youtube",
    href: "#", // TODO: Remplacer par l'URL réelle
    icon: YoutubeIcon,
    ariaLabel: "Youtube Lastours",
  },
]

// Liens légaux
const legalLinks = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "CGV", href: "/cgv" },
  { label: "CGU", href: "/cgu" },
  { label: "Politique de confidentialité", href: "/cookies" },
  { label: "Plan du site", href: "/sitemap" },
]

export function Footer() {
  return (
    <footer className="bg-wine-dark text-white" role="contentinfo">
      <div className="container mx-auto px-4 lg:px-8 py-8 max-w-[1200px]">
        {/* Grille principale : Logo + 4 colonnes desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {/* Colonne Logo & Description */}
          <div className="md:col-span-2 lg:col-span-1 flex flex-col justify-center">
            <Link href="/" className="inline-block mb-2 focus:outline-none focus:ring-2 focus:ring-wine-gold focus:ring-offset-2 focus:ring-offset-wine-dark rounded">
              <Image
                src="/PHOTOS-WEB-LASTOURS/LOGO/logo-chateau-lastours.jpg"
                alt="Château Lastours, logo"
                width={160}
                height={133}
                className="w-[140px] lg:w-[160px] h-auto object-contain"
                priority={false}
              />
            </Link>
            <p className="text-sm text-white/70 leading-relaxed max-w-xs mt-2">
              Depuis 1847, l'expression d'un terroir d'exception.
            </p>
          </div>

          {/* Colonnes de navigation */}
          {footerColumns.map((column) => (
            <FooterColumn key={column.title} title={column.title} items={column.links} />
          ))}
        </div>

        {/* Section Newsletter */}
        <div className="mt-6 pt-4 border-t border-white/20">
          <div className="max-w-md">
            <h4 className="font-semibold text-base mb-2 text-white/90">Restez informés</h4>
            <p className="text-sm text-white/70 mb-2">Actualités, primeurs et offres exclusives.</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <Input
                type="email"
                placeholder="Votre email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:ring-2 focus:ring-wine-gold focus:border-wine-gold transition flex-1 min-h-[40px]"
                aria-label="Adresse email pour newsletter"
              />
              <Button
                variant="secondary"
                className="bg-wine-gold hover:bg-wine-gold/90 text-wine-dark font-semibold whitespace-nowrap min-h-[40px] focus:outline-none focus:ring-2 focus:ring-wine-gold focus:ring-offset-2 focus:ring-offset-wine-dark"
              >
                S'inscrire
              </Button>
            </div>
          </div>
        </div>

        {/* Footer bas : Copyright, Réseaux sociaux, Liens légaux */}
        <div className="mt-6 pt-4 border-t border-white/20 flex flex-col lg:flex-row justify-between items-center gap-4 text-sm text-white/60">
          <p className="text-center lg:text-left">
            © {new Date().getFullYear()} Châteaux Lastours. Tous droits réservés.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            {/* Réseaux sociaux */}
            <SocialList items={socialLinks} />
            
            {/* Liens légaux */}
            <nav className="flex flex-wrap items-center justify-center gap-3" aria-label="Liens légaux">
              {legalLinks.map((link) => (
                <FooterLink key={link.href} href={link.href}>
                  {link.label}
                </FooterLink>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Composant colonne de footer
function FooterColumn({
  title,
  items,
}: {
  title: string
  items: Array<{ label: string; href: string }>
}) {
  return (
    <div>
      <h4 className="font-semibold text-base mb-3 text-white/90 leading-tight">{title}</h4>
      <nav className="flex flex-col space-y-2" aria-label={title}>
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
      className="text-sm text-white/70 hover:text-wine-gold transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-wine-gold focus:ring-offset-2 focus:ring-offset-wine-dark rounded min-h-[44px] flex items-center"
    >
      {children}
    </Link>
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
        const isExternal = item.href.startsWith("http")
        return (
          <a
            key={item.name}
            href={item.href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            aria-label={item.ariaLabel}
            className="text-white/70 hover:text-wine-gold hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-wine-gold focus:ring-offset-2 focus:ring-offset-wine-dark rounded p-2 min-w-[44px] min-h-[44px] flex items-center justify-center transition-all duration-300"
          >
            <Icon />
          </a>
        )
      })}
    </nav>
  )
}
