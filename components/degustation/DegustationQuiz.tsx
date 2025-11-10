"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface QuizQuestion {
  question: string
  answers: Array<{
    label: string
    score: number
  }>
}

const quizQuestions: QuizQuestion[] = [
  {
    question: "Quel moment préférez-vous pour boire un verre ?",
    answers: [
      { label: "À l'apéritif, en toute légèreté", score: 1 },
      { label: "Pendant un dîner gastronomique", score: 3 },
      { label: "En terrasse avec des amis", score: 2 },
    ],
  },
  {
    question: "Quel profil aromatique vous attire le plus ?",
    answers: [
      { label: "Fruité et vif", score: 1 },
      { label: "Boisé et structuré", score: 3 },
      { label: "Gourmand et moelleux", score: 2 },
    ],
  },
  {
    question: "Avec quel plat associeriez-vous votre vin ?",
    answers: [
      { label: "Fromages frais ou fruits de mer", score: 1 },
      { label: "Viandes rouges ou plats mijotés", score: 3 },
      { label: "Apéritif ou dessert", score: 2 },
    ],
  },
]

const getResult = (totalScore: number): string => {
  if (totalScore <= 4) {
    return "Vous aimez la fraîcheur et la légèreté. Essayez notre <strong>Blanc Perlé</strong>, <strong>Domeni Blanc</strong> ou <strong>Rosé Domeni</strong>."
  } else if (totalScore <= 6) {
    return "Votre goût vous guide vers des vins fruités et conviviaux. Le <strong>Poussin Rosé</strong>, <strong>Poussin Blanc</strong>, <strong>Méthode Ancestrale Blanc</strong>, <strong>Méthode Ancestrale Rosé</strong> ou le <strong>Domeni Rouge</strong> devraient vous plaire."
  } else {
    return "Vous appréciez les vins puissants et complexes. Découvrez notre <strong>Opus Rouge</strong>, <strong>Opus Blanc</strong>, <strong>Petrichor Rosé</strong>, <strong>Pétrichor Rouge</strong>, <strong>Pigeonnier</strong> ou <strong>Claire de Lune</strong>."
  }
}

export function DegustationQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [totalScore, setTotalScore] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [resultMessage, setResultMessage] = useState("")

  const handleAnswer = (score: number) => {
    const newScore = totalScore + score
    setTotalScore(newScore)

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      const result = getResult(newScore)
      setResultMessage(result)
      setShowResult(true)
    }
  }

  const handleReset = () => {
    setCurrentQuestion(0)
    setTotalScore(0)
    setShowResult(false)
    setResultMessage("")
  }

  return (
    <section
      className="py-[calc(var(--rhythm)*2)] lg:py-[calc(var(--rhythm)*3)] bg-white relative scroll-mt-[var(--header-height)]"
      id="quiz"
      aria-labelledby="quiz-title"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[#F3EEE8] border border-black/5 rounded-2xl p-6 md:p-8 shadow-sm">
            <h2
              id="quiz-title"
              className="text-2xl md:text-3xl font-serif font-semibold text-gray-900 mb-6 text-center text-balance"
            >
              Quel vin est fait pour vous ?
            </h2>

            {!showResult ? (
              <div className="space-y-6">
                <div className="space-y-4">
                  <p className="text-lg font-semibold text-gray-900 mb-4">
                    {currentQuestion + 1}. {quizQuestions[currentQuestion].question}
                  </p>
                  <div className="space-y-3">
                    {quizQuestions[currentQuestion].answers.map((answer, index) => (
                      <button
                        key={index}
                        onClick={() => handleAnswer(answer.score)}
                        className={cn(
                          "w-full text-left px-6 py-4 bg-white border border-gray-200 rounded-lg",
                          "hover:bg-[#F6F0E8] hover:border-gray-300",
                          "transition-all duration-200",
                          "focus:outline-none focus:ring-2 focus:ring-accent-600 focus:ring-offset-2",
                          "min-h-[44px] flex items-center"
                        )}
                        aria-label={`Réponse ${String.fromCharCode(65 + index)}: ${answer.label}`}
                      >
                        <span className="text-gray-900 leading-relaxed">
                          {String.fromCharCode(65 + index)}. {answer.label}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-6 text-center">
                <h3 className="text-xl md:text-2xl font-serif font-semibold text-gray-900 mb-4">
                  Votre profil sensoriel
                </h3>
                <div
                  className="text-lg text-gray-700 leading-relaxed mb-6"
                  dangerouslySetInnerHTML={{ __html: resultMessage }}
                  aria-live="polite"
                />
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-accent-600 hover:bg-accent-700 text-white min-h-[44px] focus-visible:ring-2 focus-visible:ring-accent-600 focus-visible:outline-none"
                  >
                    <Link href="/reservation">Réserver votre dégustation</Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={handleReset}
                    className="min-h-[44px] focus-visible:ring-2 focus-visible:ring-accent-600 focus-visible:outline-none"
                  >
                    Recommencer
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

