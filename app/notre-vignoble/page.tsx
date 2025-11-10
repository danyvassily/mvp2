import { Metadata } from "next";
import { HeroVignoble } from "@/components/vignoble/HeroVignoble";
import { Encadre } from "@/components/vignoble/Encadre";
import { QuizVignoble } from "@/components/vignoble/QuizVignoble";
import { CTAGroup } from "@/components/vignoble/CTAGroup";

export const metadata: Metadata = {
  title: "Notre Vignoble | Château Lastours",
  description: "Bienvenue au cœur du Sud-Ouest de la France, où l'histoire et la nature se rencontrent pour offrir l'un des terroirs viticoles les plus anciens et prestigieux au monde.",
  openGraph: {
    title: "Notre Vignoble | Château Lastours",
    description: "Bienvenue au cœur du Sud-Ouest de la France, où l'histoire et la nature se rencontrent pour offrir l'un des terroirs viticoles les plus anciens et prestigieux au monde.",
  },
};

// Données du quiz depuis l'ASSET
const quizData = [
  {
    question: "Depuis quelle année le Château Lastours perpétue-t-il la tradition viticole ?",
    options: ["1579", "1620", "1492", "1701"],
    correctIndex: 0,
  },
  {
    question: "Quelle rivière le Château Lastours surplombe-t-il ?",
    options: ["La Garonne", "Le Tarn", "La Dordogne", "La Loire"],
    correctIndex: 1,
  },
  {
    question: "Quelle pratique est mise en avant au Château Lastours ?",
    options: [
      "Viticulture durable et respectueuse de la biodiversité",
      "Utilisation intensive d'engrais chimiques",
      "Irrigation automatique intensive",
      "Vignoble bio uniquement",
    ],
    correctIndex: 0,
  },
  {
    question: "Quel type d'expérience le domaine propose-t-il aux visiteurs ?",
    options: [
      "Dégustations privées et ateliers œnologiques",
      "Excursions en bateau",
      "Concerts en plein air uniquement",
      "Randonnées pédestres sans dégustation",
    ],
    correctIndex: 0,
  },
  {
    question: "Comment les vins de Gaillac sont-ils décrits ?",
    options: [
      "Puissants, fins ou effervescents",
      "Légers et sucrés",
      "Uniquement rouges",
      "Sans bulles et très acides",
    ],
    correctIndex: 0,
  },
];

export default function NotreVignoblePage() {
  return (
    <div className="min-h-screen bg-white" data-page="notre-vignoble">
      {/* Hero Section */}
      <HeroVignoble
        imageSrc="/page/notre-vignoble-manque-1-photo/vignes-ciel-bleu-gaillac-france.jpg"
        title="Le vignoble de Gaillac : un voyage millénaire au cœur du Sud-Ouest"
        description="Bienvenue au cœur du Sud-Ouest de la France, où l'histoire et la nature se rencontrent pour offrir l'un des terroirs viticoles les plus anciens et prestigieux au monde."
      />

      {/* Section 1: Histoire millénaire */}
      <Encadre
        title="Deux mille ans d'histoire, gravés dans la vigne"
        content={
          <>
            <p className="text-lg md:text-xl leading-relaxed text-slate-700 mb-4">
              Aux confins du Sud-Ouest de la France, entre Toulouse et Albi, s'étend un vignoble ancestral, vibrant d'histoire et de mémoire : le terroir de Gaillac. Ici, la vigne pousse depuis plus de deux millénaires. Dès l'époque gallo-romaine, ces terres baignées de soleil virent les premiers ceps prendre racine. Chaque pierre, chaque grappe, chaque souffle de vent y murmure une histoire.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-slate-700">
              Dans cette région où l'on cultive l'art de vivre aussi bien que celui du vin, le vin de Gaillac est bien plus qu'une boisson : c'est un héritage vivant.
            </p>
          </>
        }
        imageSrc="/page/notre-vignoble-manque-1-photo/vieille-vigne-tronc-tordu.jpg"
        imageAlt="Vignoble ancien en France, vignoble de Gaillac"
        imagePosition="left"
      />

      {/* Section 2: Les Bénédictins */}
      <Encadre
        title="Les Bénédictins : les artisans du vin effervescent"
        content={
          <>
            <p className="text-lg md:text-xl leading-relaxed text-slate-700 mb-4">
              Bien avant l'an mille, les moines bénédictins vinrent s'établir le long de la rivière Tarn. Avec patience et savoir, ils façonnèrent les premières grandes pages de l'histoire viticole du Sud-Ouest. Leurs cloîtres abritaient des secrets de fermentation, leurs mains bénissaient chaque vendange.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-slate-700">
              C'est à eux que l'on doit la méthode ancestrale — première technique de vin effervescent au monde — précurseur oublié du champagne, née ici, à Gaillac. Un vin à la bulle fine, au charme brut, reflet d'un savoir-faire sacré transmis à travers les siècles.
            </p>
          </>
        }
        imageSrc="/page/notre-vignoble-manque-1-photo/allee-de-platane-hiver-gaillac-france.jpeg"
        imageAlt="Ancien monastère bénédictin au bord de la rivière Tarn, Sud-Ouest"
        imagePosition="right"
      />

      {/* Section 3: Un terroir d'exception */}
      <Encadre
        title="Un terroir d'exception, entre ciel et terre"
        content={
          <>
            <p className="text-lg md:text-xl leading-relaxed text-slate-700 mb-4">
              Ici, la nature est généreuse et contrastée. Le climat de Gaillac se situe à la croisée des influences atlantiques et méditerranéennes, offrant des étés ensoleillés et des nuits rafraîchies par les brumes du Tarn. Les sols argilo-calcaires, riches en minéraux, donnent profondeur et caractère aux raisins.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-slate-700 mb-4">
              Ce terroir vivant, vibrant, offre une expression rare de cépages autochtones :
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg md:text-xl leading-relaxed text-slate-700 mb-4">
              <li><strong>Mauzac</strong>, frais, évoquant la pomme verte et les fleurs blanches,</li>
              <li><strong>Loin de l'oeil</strong>, un raisin blanc rare, quasi uniquement cultivé à Gaillac, connu pour produire des vins frais et fruités,</li>
              <li><strong>Duras</strong>, puissant, épicé et fruité,</li>
              <li><strong>Braucol</strong>, intense et sauvage, aux arômes de fruits noirs et d'épices,</li>
              <li><strong>Prunelard</strong>, puissant aux notes de fruits noirs, de pruneaux et de violettes.</li>
            </ul>
            <p className="text-lg md:text-xl leading-relaxed text-slate-700">
              Des variétés que l'on ne trouve nulle part ailleurs, et qui font toute l'identité unique des vins de Gaillac.
            </p>
          </>
        }
        imageSrc="/page/notre-vignoble-manque-1-photo/vignes-allee-de-platane-gaillac-france.jpg"
        imageAlt="Sols argilo-calcaires dans vignoble de Gaillac"
        imagePosition="left"
      />

      {/* Section 4: Château Lastours - SANS titre additionnel (noTitle=true) */}
      <Encadre
        title="Château Lastours : la mémoire des siècles dans chaque bouteille"
        content={
          <>
            <p className="text-lg md:text-xl leading-relaxed text-slate-700 mb-4">
              Parmi les joyaux de ce terroir, le Château Lastours incarne l'alliance parfaite entre tradition et innovation. Notre domaine, guidé par la passion et le respect de la nature, cultive ces cépages rares en viticulture durable.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-slate-700">
              Chaque bouteille est une invitation à un voyage sensoriel authentique, qui célèbre la richesse du Sud-Ouest et la finesse des vins de Gaillac.
            </p>
          </>
        }
        imageSrc="/page/notre-vignoble-manque-1-photo/vignes-vue-de-haut-fille-qui-marche.jpg"
        imageAlt="Vignoble Château Lastours, vin de Gaillac bio"
        imagePosition="right"
        ctaText="Explorez notre gamme"
        ctaHref="/les-vins"
      />

      {/* Section 5: Goûtez au Sud-Ouest */}
      <Encadre
        title="Goûtez au Sud-Ouest, où que vous soyez"
        content={
          <>
            <p className="text-lg md:text-xl leading-relaxed text-slate-700 mb-4">
              Les vins de Gaillac, puissants, fins ou effervescents, sont une ode au Sud-Ouest. Dans chaque verre, vous retrouverez la chaleur de l'été, la fraîcheur des matinées de brume, et l'empreinte du sol sur nos trois terroirs (La rive droite, la rive gauche et le plateau cordais).
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-slate-700">
              Le Château Lastours vous propose la livraison, pour que le goût de Gaillac voyage jusqu'à vous.
            </p>
          </>
        }
        imageSrc="/page/notre-vignoble-manque-1-photo/verre-de-methode-blanc-lastours-gaillac-france.jpg"
        imageAlt="Verres de vin rouge et blanc"
        imagePosition="left"
        ctaText="Commander en ligne"
        ctaHref="/panier"
      />

      {/* Section 6: Un terroir rare */}
      <Encadre
        title="Un terroir rare, une invitation à l'émerveillement"
        content={
          <>
            <p className="text-lg md:text-xl leading-relaxed text-slate-700 mb-4">
              Qu'on vienne de New York, de Tokyo ou de Paris, le vignoble de Gaillac est une découverte inoubliable. Ses vins parlent un langage universel : celui de la passion, du travail bien fait, de la terre aimée et respectée.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-slate-700">
              Visitez-nous, goûtez, explorez. Laissez-vous séduire par un terroir millénaire… et emportez chez vous un fragment de ce Sud-Ouest éternel.
            </p>
          </>
        }
        imageSrc="/page/notre-vignoble-manque-1-photo/vignes-ciel-bleu-gaillac-france.jpg"
        imageAlt="Paysage vignoble Gaillac au coucher de soleil"
        imagePosition="right"
      />

      {/* Section 7: Visite */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-slate-900 tracking-[0.02em] leading-[1.1]">
              Vivez l'expérience Château Lastours
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-slate-700">
              Nous vous accueillons toute l'année pour des visites guidées du domaine, des dégustations privées et des ateliers œnologiques. Immergez-vous dans le cœur vivant de Gaillac.
            </p>
          </div>
        </div>
      </section>

      {/* Section Quiz - Accessible en 1 clic */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-slate-900 tracking-[0.02em] leading-[1.1]">
              Testez vos connaissances
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-slate-700">
              Découvrez le terroir de Gaillac et participez à notre tirage au sort mensuel
            </p>
            <div className="flex justify-center">
              <QuizVignoble
                questions={quizData}
                title="Découvrez le Terroir de Gaillac - Testez vos connaissances et gagnez !"
                footerText="Participez au tirage au sort mensuel ! Pour être éligible, partagez votre résultat sur vos réseaux sociaux avec le hashtag #GaillacQuiz. Seuls les participants ayant partagé seront retenus."
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Fin de page */}
      <CTAGroup
        items={[
          {
            text: "Réservez votre visite maintenant",
            href: "/reservation",
            variant: "primary",
          },
          {
            text: "Découvrir nos vins",
            href: "/les-vins",
            variant: "secondary",
          },
        ]}
      />
    </div>
  );
}
