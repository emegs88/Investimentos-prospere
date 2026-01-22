'use client'

import { motion } from 'framer-motion'
import { EventsChart } from '../Charts'
import { ExternalLink } from 'lucide-react'

export function Slide8() {
  const experiences = [
    {
      title: 'Camarotes e Experiências',
      description: 'Acesso premium a eventos exclusivos',
      link: 'https://prospereexperiencia.vercel.app/',
      highlight: true
    },
    {
      title: 'Eventos e Ativações',
      description: 'Presença e co-branding garantidos'
    },
    {
      title: 'Conteúdo e Influência Local',
      description: 'Alcance local e engajamento de comunidade'
    }
  ]

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center px-4 sm:px-8 py-8 sm:py-16">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8 sm:mb-12"
      >
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-3">
          <span className="text-white">Experiências &</span>
          <br />
          <span className="text-prospere">Marca</span>
        </h2>
        <p className="text-gray-400 mt-4 text-sm sm:text-base">
          Marca que gera relacionamento e negócios
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-5xl w-full items-center">
        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 gap-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-xl transition-all ${
                exp.highlight
                  ? 'bg-gradient-to-br from-prospere/20 to-prospere/10 border-2 border-prospere/50 hover:border-prospere/70'
                  : 'bg-white/5 border border-white/10 hover:bg-prospere/10 hover:border-prospere/30'
              }`}
              whileHover={{ x: 4, scale: exp.highlight ? 1.02 : 1 }}
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="text-lg font-bold text-white">{exp.title}</h3>
                {exp.link && (
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-prospere hover:text-red-400 transition-colors flex-shrink-0"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
              </div>
              <p className="text-gray-400 text-sm mb-2">{exp.description}</p>
              {exp.link && (
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-prospere text-xs font-semibold hover:underline inline-flex items-center gap-1"
                >
                  Acessar Camarote Prospere
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Chart */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full"
        >
          <EventsChart />
        </motion.div>
      </div>
    </div>
  )
}
