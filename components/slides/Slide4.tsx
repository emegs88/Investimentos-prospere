'use client'

import { motion } from 'framer-motion'
import { pillars } from '@/data/deck'
import { Building2, Home, Trophy, Zap, Tag, Target, Code } from 'lucide-react'
import { ExternalLink } from 'lucide-react'

const iconMap: Record<string, React.ReactNode> = {
  Building2: <Building2 className="w-12 h-12" />,
  Home: <Home className="w-12 h-12" />,
  Trophy: <Trophy className="w-12 h-12" />,
  Zap: <Zap className="w-12 h-12" />
}

export function Slide4() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center px-4 sm:px-8 py-8 sm:py-16">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 sm:mb-16"
      >
        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-4">
          <span className="text-white">A Solução:</span>
          <br />
          <span className="text-prospere">Ecossistema Prospere</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl w-full">
        {pillars.map((pillar, index) => {
          const isBidCon = pillar.name === 'BidCon'
          const isProspereEsportes = pillar.name === 'Prospere Esportes'
          const isProspereConsorcios = pillar.name === 'Prospere Consórcios'
          return (
            <motion.div
              key={index}
              className={`p-6 sm:p-8 rounded-2xl transition-all backdrop-blur-sm ${
                isBidCon
                  ? 'bg-gradient-to-br from-prospere/30 to-prospere/10 border-2 border-prospere/50 shadow-lg shadow-prospere/20'
                  : isProspereEsportes
                  ? 'bg-gradient-to-br from-prospere/20 to-prospere/5 border-2 border-prospere/30'
                  : isProspereConsorcios
                  ? 'bg-gradient-to-br from-prospere/20 to-prospere/5 border-2 border-prospere/30'
                  : 'bg-white/5 border border-white/10 hover:border-prospere/50 hover:bg-prospere/5'
              }`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -4, scale: isBidCon || isProspereEsportes || isProspereConsorcios ? 1.02 : 1 }}
            >
              <div className="text-prospere mb-4">{iconMap[pillar.icon]}</div>
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {pillar.name}
                </h3>
                {(isBidCon || isProspereEsportes) && (
                  <a
                    href={isBidCon ? 'https://bidcon.vercel.app/' : 'https://prospereexperiencia.vercel.app/'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-prospere hover:text-red-400 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
              </div>
              <p className="text-gray-400 text-sm sm:text-base mb-3">{pillar.description}</p>
              
              {/* Detalhes específicos do Prospere Consórcios */}
              {isProspereConsorcios && pillar.details && (
                <div className="mt-4 space-y-2 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2 text-xs">
                    <Tag className="w-4 h-4 text-prospere" />
                    <span className="text-gray-300">
                      <span className="font-semibold text-white">Administrado por:</span> {pillar.details.administrator}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <Tag className="w-4 h-4 text-prospere" />
                    <span className="text-gray-300">
                      <span className="font-semibold text-white">Modelo:</span> {pillar.details.model}
                    </span>
                  </div>
                  <div className="flex items-start gap-2 text-xs mt-3">
                    <Target className="w-4 h-4 text-prospere mt-0.5" />
                    <div>
                      <span className="font-semibold text-white">Foco:</span>
                      <span className="text-gray-300 ml-1">{pillar.details.focus}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 text-xs">
                    <Code className="w-4 h-4 text-prospere mt-0.5" />
                    <div>
                      <span className="text-gray-300">{pillar.details.value}</span>
                    </div>
                  </div>
                </div>
              )}

              {isBidCon && (
                <p className="text-prospere text-xs mt-3 font-semibold">
                  Marketplace ativo • bidcon.vercel.app
                </p>
              )}
              {isProspereEsportes && (
                <a
                  href="https://prospereexperiencia.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-prospere text-xs mt-3 font-semibold hover:underline inline-flex items-center gap-1"
                >
                  Camarote Prospere • prospereexperiencia.vercel.app
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </motion.div>
          )
        })}
      </div>

      {/* Linhas conectoras (visual apenas) */}
      <motion.svg
        className="absolute inset-0 w-full h-full pointer-events-none hidden md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 1 }}
      >
        <line
          x1="25%"
          y1="50%"
          x2="75%"
          y2="50%"
          stroke="#E50914"
          strokeWidth="1"
          strokeDasharray="5,5"
        />
        <line
          x1="50%"
          y1="20%"
          x2="50%"
          y2="80%"
          stroke="#E50914"
          strokeWidth="1"
          strokeDasharray="5,5"
        />
      </motion.svg>
    </div>
  )
}
