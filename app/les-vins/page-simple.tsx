import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos Vins | Collections d'Exception - Château Lastours",
  description: "Découvrez nos gammes de vins d'exception : Doméni, Opus, Méthode Traditionnelle, Poussin et Signatures."
};

export default function WinesPageSimple() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <header className="text-center mb-12 lg:mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight">
              Collections d'Exception
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Découvrez nos gammes de vins d'exception, chacune révélant l'essence unique de notre terroir gaillacois.
            </p>
          </header>
        </div>
      </section>

      {/* Gammes Section */}
      <section className="pb-16 lg:pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-8 lg:space-y-12">
            
            {/* Gamme Doméni */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 p-8 lg:p-10">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-yellow-600">
                Doméni
              </h2>
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-6">
                L'expression pure du terroir gaillacois. Cette collection incarne l'authenticité de nos cépages autochtones, révélant la typicité de notre terroir avec élégance et caractère.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-2">Doméni Blanc</h3>
                  <span className="inline-block bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full mb-3">Blanc</span>
                  <div className="space-y-2">
                    <a href="/les-vins/domeni-blanc" className="block bg-blue-600 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                      Découvrir la cuvée
                    </a>
                    <a href="/page/nos-cuvee-ok/gamme-domeni/page-cuvee-domeni-blanc/FT_blanc_Domeni 2024.pdf" target="_blank" rel="noopener noreferrer" className="block border border-gray-300 text-gray-700 text-center py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors">
                      Fiche technique (PDF)
                    </a>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-2">Doméni Rosé</h3>
                  <span className="inline-block bg-pink-100 text-pink-800 text-sm font-medium px-3 py-1 rounded-full mb-3">Rosé</span>
                  <div className="space-y-2">
                    <a href="/les-vins/domeni-rose" className="block bg-blue-600 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                      Découvrir la cuvée
                    </a>
                    <a href="/page/nos-cuvee-ok/gamme-domeni/page-cuvee-domeni-rose/FT_rosé_Domeni_2024 (1).pdf" target="_blank" rel="noopener noreferrer" className="block border border-gray-300 text-gray-700 text-center py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors">
                      Fiche technique (PDF)
                    </a>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-2">Doméni Rouge</h3>
                  <span className="inline-block bg-red-100 text-red-800 text-sm font-medium px-3 py-1 rounded-full mb-3">Rouge</span>
                  <div className="space-y-2">
                    <a href="/les-vins/domeni-rouge" className="block bg-blue-600 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                      Découvrir la cuvée
                    </a>
                    <a href="/page/nos-cuvee-ok/gamme-domeni/page-cuvee-domeni-rouge/FT_rouge_Domeni_2022.pdf" target="_blank" rel="noopener noreferrer" className="block border border-gray-300 text-gray-700 text-center py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors">
                      Fiche technique (PDF)
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* gamme-opus */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 p-8 lg:p-10">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-amber-800">
                Opus
              </h2>
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-6">
                L'excellence absolue. Nos cuvées les plus prestigieuses, issues de nos parcelles d'exception et élevées avec un soin méticuleux pour révéler toute la noblesse de notre terroir.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-2">Opus Blanc</h3>
                  <span className="inline-block bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full mb-3">Blanc</span>
                  <div className="space-y-2">
                    <a href="/les-vins/opus-blanc" className="block bg-blue-600 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                      Découvrir la cuvée
                    </a>
                    <a href="/page/nos-cuvee-ok/gamme-opus/page-cuvee-opus-blanc/FT_blanc_Opus_2023.pdf" target="_blank" rel="noopener noreferrer" className="block border border-gray-300 text-gray-700 text-center py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors">
                      Fiche technique (PDF)
                    </a>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-2">Opus Rouge</h3>
                  <span className="inline-block bg-red-100 text-red-800 text-sm font-medium px-3 py-1 rounded-full mb-3">Rouge</span>
                  <div className="space-y-2">
                    <a href="/les-vins/opus-rouge" className="block bg-blue-600 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                      Découvrir la cuvée
                    </a>
                    <a href="/page/nos-cuvee-ok/gamme-opus/page-cuvee-opus-rouge/FT_rouge_opus_2021.pdf" target="_blank" rel="noopener noreferrer" className="block border border-gray-300 text-gray-700 text-center py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors">
                      Fiche technique (PDF)
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Autres gammes en version simplifiée */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 p-8 lg:p-10">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-blue-600">
                Méthode Traditionnelle
              </h2>
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-6">
                L'art de l'effervescence selon nos traditions. Élaborés selon la méthode ancestrale gaillacoise.
              </p>
              <div className="flex gap-4 flex-wrap">
                <a href="/les-vins/methode-blanc" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Méthode Blanc
                </a>
                <a href="/les-vins/methode-rose" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Méthode Rosé
                </a>
                <a href="/les-vins/perle" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Perlé
                </a>
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 p-8 lg:p-10">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-green-600">
                Poussin
              </h2>
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-6">
                Fraîcheur et gourmandise. Cette collection accessible invite à la découverte.
              </p>
              <div className="flex gap-4 flex-wrap">
                <a href="/les-vins/poussin-blanc" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Poussin Blanc
                </a>
                <a href="/les-vins/poussin-rose" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Poussin Rosé
                </a>
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 p-8 lg:p-10">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-purple-600">
                Signatures
              </h2>
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-6">
                Cuvées rares et mystérieuses. Chacune raconte une histoire unique.
              </p>
              <div className="flex gap-4 flex-wrap">
                <a href="/les-vins/claire-de-lune" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Claire de Lune
                </a>
                <a href="/les-vins/petrichor-rouge" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Petrichor Rouge
                </a>
                <a href="/les-vins/pigeonnier" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Pigeonnier
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
