'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Logo } from '../Logo'

export function Slide1() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center px-8 overflow-hidden">
      {/* Logo no topo */}
      <motion.div
        className="absolute top-8 left-8 z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Logo brand="prospere" width={150} height={45} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl text-center z-10"
      >
        <motion.h1
          className="text-5xl sm:text-6xl lg:text-8xl font-black mb-6 leading-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-white">Prospere:</span>
          <br />
          <span className="bg-gradient-to-r from-prospere to-red-500 bg-clip-text text-transparent">
            estratégia, patrimônio e escala
          </span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-12 font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Um ecossistema para crescer com inteligência
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button className="px-8 py-4 bg-prospere text-white rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center gap-2">
            Vamos construir juntos
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>

        <motion.div
          className="text-gray-500 text-sm font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p>Emerson da Prospere</p>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <div className="w-1 h-8 border-l-2 border-prospere" />
      </motion.div>
    </div>
  )
}
