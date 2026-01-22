'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Download, MessageCircle, ExternalLink } from 'lucide-react'

export function Slide10() {
  const handleDownload = () => {
    window.open('/print', '_blank')
  }

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center px-8 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl text-center z-10"
      >
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-7xl font-black mb-4 leading-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-white">Vamos</span>
          <br />
          <span className="bg-gradient-to-r from-prospere to-red-500 bg-clip-text text-transparent">
            Construir Juntos
          </span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-12 font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Parceria, escala e impacto
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 sm:mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button className="px-6 sm:px-8 py-3 sm:py-4 bg-prospere text-white rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center gap-2 text-sm sm:text-base">
            Quero ser parceiro
            <ArrowRight className="w-5 h-5" />
          </button>

          <a
            href="https://bidcon.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 sm:px-8 py-3 sm:py-4 bg-prospere/20 border-2 border-prospere/50 text-prospere rounded-lg font-semibold hover:bg-prospere/30 transition-colors flex items-center gap-2 text-sm sm:text-base"
          >
            <ExternalLink className="w-5 h-5" />
            BidCon
          </a>

          <button
            onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
            className="px-6 sm:px-8 py-3 sm:py-4 bg-white/5 border border-white/20 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors flex items-center gap-2 text-sm sm:text-base"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp
          </button>

          <button
            onClick={handleDownload}
            className="px-6 sm:px-8 py-3 sm:py-4 bg-white/5 border border-white/20 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors flex items-center gap-2 text-sm sm:text-base"
          >
            <Download className="w-5 h-5" />
            Baixar Material
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

      {/* Background glow */}
      <motion.div
        className="absolute -bottom-40 -right-40 w-80 h-80 bg-prospere/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
    </div>
  )
}
