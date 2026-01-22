'use client'

import { motion } from 'framer-motion'
import { AlertCircle } from 'lucide-react'

export function Slide3() {
  const problems = [
    {
      title: 'Falta de planejamento financeiro',
      description: 'Clientes sem visão estratégica de longo prazo'
    },
    {
      title: 'Jornada confusa do cliente',
      description: 'Experiências desconexas e fragmentadas'
    },
    {
      title: 'Pouca transparência e experiência',
      description: 'Falta de clareza em processos e resultados'
    },
    {
      title: 'Baixa retenção e pouca escala',
      description: 'Dificuldade em manter e crescer a base'
    }
  ]

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center px-8 py-16">
      <motion.h2
        className="text-4xl sm:text-5xl lg:text-7xl font-black mb-4 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-white">O Problema</span>
      </motion.h2>

      <motion.p
        className="text-lg sm:text-xl text-gray-400 text-center mb-12 sm:mb-16 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Desafios do mercado financeiro e consorciário
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl w-full">
        {problems.map((problem, index) => (
          <motion.div
            key={index}
            className="p-6 sm:p-8 bg-prospere/10 border border-prospere/30 rounded-2xl hover:bg-prospere/20 transition-all"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            whileHover={{ y: -4 }}
          >
            <div className="flex items-start gap-4">
              <AlertCircle className="w-8 h-8 text-prospere flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                  {problem.title}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base">{problem.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
