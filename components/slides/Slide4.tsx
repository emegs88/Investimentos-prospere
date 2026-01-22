'use client'

import { motion } from 'framer-motion'
import { pillars } from '@/data/deck'
import { Building2, Home, Trophy, Zap } from 'lucide-react'

const iconMap: Record<string, React.ReactNode> = {
  Building2: <Building2 className="w-12 h-12" />,
  Home: <Home className="w-12 h-12" />,
  Trophy: <Trophy className="w-12 h-12" />,
  Zap: <Zap className="w-12 h-12" />
}

export function Slide4() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center px-8 py-16">
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
          return (
            <motion.div
              key={index}
              className={`p-6 sm:p-8 rounded-2xl transition-all backdrop-blur-sm ${
                isBidCon
                  ? 'bg-gradient-to-br from-prospere/30 to-prospere/10 border-2 border-prospere/50 shadow-lg shadow-prospere/20'
                  : 'bg-white/5 border border-white/10 hover:border-prospere/50 hover:bg-prospere/5'
              }`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -4, scale: isBidCon ? 1.02 : 1 }}
            >
              <div className="text-prospere mb-4">{iconMap[pillar.icon]}</div>
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {pillar.name}
                </h3>
                {isBidCon && (
                  <a
                    href="https://bidcon.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-prospere hover:text-red-400 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
              <p className="text-gray-400 text-sm sm:text-base">{pillar.description}</p>
              {isBidCon && (
                <p className="text-prospere text-xs mt-3 font-semibold">
                  Marketplace ativo • bidcon.vercel.app
                </p>
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
