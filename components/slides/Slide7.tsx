'use client'

import { motion } from 'framer-motion'
import { BidConChart } from '../Charts'
import { Check, ExternalLink, Shield, Zap, TrendingUp } from 'lucide-react'
import { Logo } from '../Logo'

export function Slide7() {
  const features = [
    'Marketplace para cotas contempladas',
    'Processo seguro e transparente',
    'Integração e validações estruturadas',
    'Experiência digital premium para comprador e vendedor'
  ]

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8 sm:mb-12 max-w-4xl"
      >
        {/* Logo BidCon */}
        <motion.div
          className="mb-6 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Logo brand="bidcon" width={180} height={54} />
        </motion.div>

        <motion.div
          className="inline-block mb-4"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="px-6 py-2 bg-prospere/20 border border-prospere/50 rounded-full inline-flex items-center gap-2">
            <Zap className="w-5 h-5 text-prospere" />
            <span className="text-prospere font-bold text-sm">MARKETPLACE ATIVO</span>
          </div>
        </motion.div>
        
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-3">
          <span className="text-prospere">BidCon:</span>
          <br />
          <span className="text-white">Tecnologia que Escala</span>
        </h2>
        <p className="text-gray-400 mt-4 text-sm sm:text-base mb-6">
          A camada de tecnologia que escala confiança
        </p>
        
        {/* Link destacado */}
        <motion.a
          href="https://bidcon.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-prospere hover:bg-red-700 text-white rounded-lg font-semibold transition-colors group"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
        >
          <span>Acessar BidCon</span>
          <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </motion.a>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-5xl w-full items-start">
        {/* Features */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-3 p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              <Check className="w-5 h-5 text-prospere flex-shrink-0 mt-1" />
              <span className="text-gray-300 text-sm sm:text-base">{feature}</span>
            </motion.div>
          ))}
          
          {/* Card de destaque */}
          <motion.div
            className="p-6 bg-gradient-to-br from-prospere/20 to-prospere/10 border-2 border-prospere/50 rounded-xl mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <div className="flex items-start gap-3 mb-3">
              <Shield className="w-6 h-6 text-prospere flex-shrink-0" />
              <div>
                <h3 className="text-white font-bold mb-1">100% Seguro e Transparente</h3>
                <p className="text-gray-300 text-sm">
                  Marketplace que organiza, protege e profissionaliza o mercado de cotas contempladas
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Chart */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full"
        >
          <div className="mb-4 flex items-center gap-2 text-sm text-gray-400">
            <TrendingUp className="w-4 h-4" />
            <span>Volume transacionado x Receita (take rate)</span>
          </div>
          <BidConChart />
        </motion.div>
      </div>
    </div>
  )
}
