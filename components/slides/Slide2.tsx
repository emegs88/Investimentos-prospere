'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

export function Slide2() {
  const achievements = [
    'Founder da Prospere',
    'Construção de ecossistema completo',
    'Consórcios + Imóveis + Esportes + Tecnologia',
    'Foco: crescimento com estratégia e confiança'
  ]

  return (
    <div className="relative w-full h-full flex items-center justify-center px-8 py-16">
      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Placeholder para foto */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="h-96 lg:h-full min-h-96 bg-gradient-to-br from-prospere/30 to-red-900/30 rounded-2xl border border-prospere/30 backdrop-blur-sm flex items-center justify-center"
        >
          <div className="text-center">
            <div className="w-24 h-24 bg-prospere/50 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-3xl font-bold text-white">EG</span>
            </div>
            <p className="text-gray-400 font-medium">Emerson Gomes dos Santos</p>
            <p className="text-gray-500 text-sm mt-2">Founder & CEO</p>
          </div>
        </motion.div>

        {/* Conteúdo */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-8 text-white">
            Quem é
            <br />
            <span className="text-prospere">Emerson</span>
          </h2>

          <div className="space-y-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4 p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <Check className="w-6 h-6 text-prospere flex-shrink-0 mt-1" />
                <span className="text-gray-300 font-medium">{achievement}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
