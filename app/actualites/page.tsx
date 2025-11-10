import { Metadata } from "next";
import { getAllArticles } from "@/lib/news-data";
import { HeroStandard } from "@/components/common/HeroStandard";
import { NewsGrid } from "@/components/common/NewsGrid";
import { NewsletterSignup } from "@/components/common/NewsletterSignup";
import { CTAGroup } from "@/components/vignoble/CTAGroup";

export const metadata: Metadata = {
  title: "Actualités | Château Lastours",
  description: "Découvrez l'actualité du Château Lastours : vendanges, nouvelles cuvées, événements et initiatives pour une viticulture durable dans l'appellation Gaillac.",
  openGraph: {
    title: "Actualités | Château Lastours",
    description: "Nouvelles, événements et innovations du Château Lastours",
    images: ["/page/page-actualite-ok/actualites-chateau-lastours-gaillac-france.jpeg"],
  },
};

export default function ActualitesPage() {
  const posts = getAllArticles();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero avec image et texte depuis ASSET */}
      <HeroStandard
        imageSrc="/page/page-actualite-ok/actualites-chateau-lastours-gaillac-france.jpeg"
        title="Notre Actualité"
        subtitle="Suivez l'actualité du Château Lastours : vendanges, nouvelles cuvées, événements et initiatives pour une viticulture durable dans l'appellation Gaillac."
      />

      {/* Liste d'actualités inspirée de Ruinart */}
      <NewsGrid 
        items={posts.map(post => ({
          slug: post.slug,
          title: post.title,
          excerpt: post.excerpt,
          image: post.image,
          date: post.date
        }))} 
        itemsPerPage={9} 
      />

      {/* CTA de fin avec newsletter */}
      <section id="newsletter" className="py-16 lg:py-24 bg-slate-50 scroll-mt-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-slate-900 tracking-[0.02em]">
                Restez Informés
              </h2>
              <p className="text-lg md:text-xl leading-relaxed text-slate-600 font-light">
                Abonnez-vous à notre newsletter pour recevoir nos dernières actualités et invitations exclusives.
              </p>
            </div>

            {/* Module newsletter */}
            <NewsletterSignup 
              className="max-w-2xl mx-auto"
              showConsent={true}
              consentText="J'accepte que mes données soient utilisées pour recevoir la newsletter du Château Lastours"
            />

            {/* CTA additionnels */}
            <CTAGroup
              items={[
                {
                  text: "Rejoindre le Club",
                  href: "/club/inscription",
                  variant: "primary",
                },
                {
                  text: "Découvrir nos Événements",
                  href: "/evenements",
                  variant: "secondary",
                },
              ]}
              className="bg-transparent py-8"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

