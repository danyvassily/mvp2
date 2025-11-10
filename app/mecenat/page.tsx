import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Mail } from "lucide-react"

export default function MecenatPage() {
  // Contenu strictement depuis ASSET/mecenat - Texte Page Mécenat FR.docx
  const axesMecenat = [
    "La restauration et la sauvegarde du patrimoine architectural du domaine et de ses jardins.",
    "La promotion des arts et de la culture, au travers d'expositions, de concerts et d'événements ouverts à tous.",
    "Le soutien aux artistes en résidence, accompagnés dans leur création et leur diffusion.",
    "Le développement durable du vignoble, par la préservation de la biodiversité et l'innovation œnologique responsable.",
    "L'ouverture pédagogique et touristique, pour partager avec le public l'histoire vivante d'un terroir d'exception.",
  ]

  const typesMecenat = [
    "Dons financiers ou en nature (compétences, matériel, savoir-faire).",
    "Soutien d'événements culturels, associant votre image à des projets valorisants.",
    "Avantages fiscaux attractifs, conformes aux dispositifs nationaux (jusqu'à 66 % pour les particuliers et 60 % pour les entreprises).",
  ]

  return (
    <div className="min-h-screen bg-black relative">
      {/* Grain overlay pour effet cinématique */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none texture-grain-fine z-10"></div>
      
      <Header />

      <main className="pt-0">
        {/* Hero Section - Collé au menu sticky */}
        <section 
          className="relative flex items-center justify-center overflow-hidden"
          style={{
            minHeight: "calc(100vh - 80px)",
            marginTop: 0,
          }}
        >
          <div className="absolute inset-0">
            <Image
              src="/asset/mecenat/musiciens-concert-de-jazz-chateau-lastours-gaillac-france.jpg"
              alt="Concert de jazz au Château Lastours - Mécénat culturel"
              fill
              priority
              className="object-cover hover:scale-105 transition-transform duration-700"
              sizes="100vw"
              quality={90}
            />
          </div>
          {/* Overlay gradient cinématique */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60" />
          {/* Grain texture */}
          <div className="absolute inset-0 opacity-[0.02] texture-grain-fine" />
          
          <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
            <div className="mb-6">
              <span className="inline-block px-6 py-3 bg-white/10 backdrop-blur-md text-white text-xs font-bold tracking-[0.2em] uppercase border border-white/20">
                MÉCÉNAT
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light text-white tracking-[0.02em] leading-[1.1] mb-8 drop-shadow-lg">
              Soutenir l'âme d'un lieu,<br />transmettre un héritage
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-light text-white/90 tracking-wide max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              Au cœur du vignoble gaillacois dans le sud-ouest de la France, le Château Lastours incarne plus de cinq siècles d'histoire, de passion et d'art de vivre à la Française.
            </p>
          </div>
        </section>

        {/* Introduction - Section panoramique */}
        <section className="relative z-10 mb-6 lg:mb-8">
          <div className="relative h-[70vh] lg:h-[80vh] xl:h-[85vh] overflow-hidden">
            {/* Fond gradient - Pas d'image ASSET pour cette section */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900" />
            
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/60" />
            
            {/* Grain texture */}
            <div className="absolute inset-0 opacity-[0.03] texture-grain-fine" />

            {/* Texte en overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="p-8 lg:p-16 xl:p-20 max-w-4xl mx-auto text-center">
                <div className="space-y-6 text-lg md:text-xl text-white/90 leading-relaxed font-light tracking-wide">
                  <p>
                    Chaque pierre, chaque cep, chaque millésime raconte une aventure humaine et culturelle profondément enracinée dans son terroir.
                  </p>
                  <p>
                    Devenir mécène du Château Lastours, c'est participer à la préservation d'un patrimoine vivant, à la vitalité d'un domaine viticole d'exception et à la transmission d'un art de vivre français aux générations futures.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Un engagement partagé - Section panoramique */}
        <section className="relative z-10 mb-6 lg:mb-8">
          <div className="relative h-[65vh] lg:h-[75vh] xl:h-[85vh] overflow-hidden">
            {/* Fond gradient - Pas d'image ASSET pour cette section */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900" />
            
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            
            {/* Grain texture */}
            <div className="absolute inset-0 opacity-[0.03] texture-grain-fine" />

            {/* Texte en overlay */}
            <div className="absolute inset-0 flex items-end justify-start">
              <div className="p-8 lg:p-16 xl:p-20 max-w-2xl text-left">
                <div className="mb-6">
                  <span className="inline-block px-6 py-3 bg-white/10 backdrop-blur-md text-white text-xs font-bold tracking-[0.2em] uppercase border border-white/20">
                    ENGAGEMENT
                  </span>
                </div>
                
                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-serif font-light text-white tracking-[0.02em] leading-[1.1] mb-8">
                  Un engagement partagé
                </h2>
                
                <div className="space-y-6 text-lg lg:text-xl leading-relaxed text-white/90 font-light tracking-wide max-w-xl">
                  <p>
                    Le Château Lastours n'accueille pas seulement des mécènes : il est lui-même un mécène actif. Par conviction et par vocation, le domaine soutient la création artistique contemporaine, accueille des résidences d'artistes et offre un espace privilégié à l'expression et au dialogue entre art, nature et patrimoine.
                  </p>
                  <p>
                    Les œuvres présentées lors des différents événements au château sont vendues à but non lucratif, afin de valoriser directement le travail des artistes et de favoriser leur rayonnement. Cette approche s'inscrit dans une démarche d'économie culturelle respectueuse et solidaire.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Les axes du mécénat - Section panoramique */}
        <section className="relative z-10 mb-6 lg:mb-8">
          <div className="relative h-[75vh] lg:h-[85vh] xl:h-[90vh] overflow-hidden">
            {/* Fond gradient - Pas d'image ASSET pour cette section */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900" />
            
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            
            {/* Grain texture */}
            <div className="absolute inset-0 opacity-[0.03] texture-grain-fine" />

            {/* Texte en overlay */}
            <div className="absolute inset-0 flex items-end justify-end">
              <div className="p-8 lg:p-16 xl:p-20 max-w-2xl text-right">
                <div className="mb-6">
                  <span className="inline-block px-6 py-3 bg-white/10 backdrop-blur-md text-white text-xs font-bold tracking-[0.2em] uppercase border border-white/20">
                    AXES
                  </span>
                </div>
                
                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-serif font-light text-white tracking-[0.02em] leading-[1.1] mb-8">
                  Les axes du mécénat<br />au Château Lastours
                </h2>
                
                <p className="text-lg lg:text-xl leading-relaxed text-white/90 font-light tracking-wide max-w-xl mb-8">
                  Votre soutien contribue à :
                </p>

                <div className="space-y-4 mt-8">
                  {axesMecenat.map((axe, idx) => (
                    <div key={idx} className="flex items-start justify-end">
                      <span className="text-base lg:text-lg text-white/80 font-light tracking-wide text-right max-w-xl">
                        {axe}
                      </span>
                      <div className="w-1 h-1 bg-white/60 rounded-full ml-3 mt-2 flex-shrink-0"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Restauration et Projets - Image ASSET 1 */}
        <section className="relative z-10 mb-6 lg:mb-8">
          <div className="relative h-[70vh] lg:h-[80vh] xl:h-[85vh] overflow-hidden">
            <div className="absolute inset-0">
              <Image
                src="/asset/mecenat/renovation-toiture-pigeonnier-chateau-lastours-gaillac-france.jpg"
                alt="Rénovation de la toiture du pigeonnier du Château Lastours"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="100vw"
                quality={85}
              />
            </div>
            
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            
            {/* Grain texture */}
            <div className="absolute inset-0 opacity-[0.03] texture-grain-fine" />
          </div>
        </section>

        {/* Restauration et Projets - Image ASSET 2 */}
        <section className="relative z-10 mb-6 lg:mb-8">
          <div className="relative h-[60vh] lg:h-[70vh] xl:h-[75vh] overflow-hidden">
            <div className="absolute inset-0">
              <Image
                src="/asset/mecenat/restauration-facade-piegonnier-sud-ouest-gaillac-france.jpg"
                alt="Restauration de la façade sud-ouest du pigeonnier du Château Lastours"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="100vw"
                quality={85}
              />
            </div>
            
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            
            {/* Grain texture */}
            <div className="absolute inset-0 opacity-[0.03] texture-grain-fine" />
          </div>
        </section>

        {/* Mécénat individuel et d'entreprise - Section panoramique */}
        <section className="relative z-10 mb-6 lg:mb-8">
          <div className="relative h-[70vh] lg:h-[80vh] xl:h-[85vh] overflow-hidden">
            {/* Fond gradient - Pas d'image ASSET pour cette section */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900" />
            
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/60" />
            
            {/* Grain texture */}
            <div className="absolute inset-0 opacity-[0.03] texture-grain-fine" />

            {/* Texte en overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="p-8 lg:p-16 xl:p-20 max-w-5xl mx-auto w-full">
                <div className="text-center mb-12">
                  <div className="mb-6">
                    <span className="inline-block px-6 py-3 bg-white/10 backdrop-blur-md text-white text-xs font-bold tracking-[0.2em] uppercase border border-white/20">
                      MÉCÉNAT
                    </span>
                  </div>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-white tracking-[0.02em] leading-[1.1] mb-6">
                    Mécénat individuel<br />et d'entreprise
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto mb-8"></div>
                  <p className="text-lg md:text-xl text-white/90 font-light tracking-wide mb-8">
                    Le mécénat au Château Lastours se veut un partenariat d'émotion et de sens, ouvert à toutes et à tous :
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                  {typesMecenat.map((type, index) => (
                    <div key={index} className="text-center">
                      <div className="w-1 h-1 bg-white/60 rounded-full mx-auto mb-4"></div>
                      <p className="text-base md:text-lg text-white/80 font-light leading-relaxed">
                        {type}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Rejoignez la communauté - Section panoramique */}
        <section className="relative z-10 mb-6 lg:mb-8">
          <div className="relative h-[60vh] lg:h-[70vh] xl:h-[75vh] overflow-hidden">
            {/* Fond gradient - Pas d'image ASSET pour cette section */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900" />
            
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/60" />
            
            {/* Grain texture */}
            <div className="absolute inset-0 opacity-[0.03] texture-grain-fine" />

            {/* Texte en overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="p-8 lg:p-16 xl:p-20 max-w-3xl mx-auto text-center">
                <div className="mb-6">
                  <span className="inline-block px-6 py-3 bg-white/10 backdrop-blur-md text-white text-xs font-bold tracking-[0.2em] uppercase border border-white/20">
                    REJOIGNEZ-NOUS
                  </span>
                </div>
                
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-white tracking-[0.02em] leading-[1.1] mb-8">
                  Rejoignez la communauté<br />des mécènes du Château Lastours
                </h2>
                
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto mb-8"></div>
                
                <p className="text-lg md:text-xl text-white/90 font-light leading-relaxed tracking-wide mb-10">
                  En rejoignant cette aventure, vous contribuez à faire vivre un lieu qui croise mémoire, art et innovation viticole, et vous devenez à votre tour porteur de sens, passeur de culture et bâtisseur de l'avenir.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    asChild 
                    className="min-h-[44px] px-8 bg-white text-black hover:bg-white/90 border-2 border-white transition-all duration-300 font-light tracking-wide"
                  >
                    <a href="mailto:mécénat@chateau-lastours.com" className="flex items-center justify-center">
                      <Mail className="mr-2 w-5 h-5" />
                      Contact
                    </a>
                  </Button>
                </div>
                
                <p className="mt-6 text-base text-white/70 font-light">
                  mécénat@chateau-lastours.com
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

    </div>
  )
}
