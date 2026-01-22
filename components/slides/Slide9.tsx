'use client'

import { motion } from 'framer-motion'
import { partnershipPackages } from '@/data/deck'
import { Check, ArrowRight } from 'lucide-react'

export function Slide9() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8 sm:mb-12"
      >
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-3">
          <span className="text-white">Parceria com</span>
          <br />
          <span className="text-prospere">Prospere</span>
        </h2>
        <p className="text-gray-400 mt-4 text-sm sm:text-base">
          Como sua marca entra nesse crescimento
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full">
        {partnershipPackages.map((pkg, index) => (
          <motion.div
            key={index}
            className="p-6 sm:p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-prospere/50 hover:bg-prospere/5 transition-all flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            whileHover={{ y: -4 }}
          >
            <h3 className="text-xl font-bold text-white mb-2">{pkg.name}</h3>
            <p className="text-gray-400 text-sm mb-6">{pkg.description}</p>

            <div className="space-y-3 mb-8 flex-1">
              {pkg.benefits.map((benefit, benefitIndex) => (
                <div key={benefitIndex} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-prospere flex-shrink-0 mt-1" />
                  <span className="text-gray-300 text-sm">{benefit}</span>
                </div>
              ))}
            </div>

            <button className="w-full py-3 px-4 bg-prospere/20 border border-prospere/50 rounded-lg text-prospere font-semibold hover:bg-prospere hover:text-white transition-all flex items-center justify-center gap-2">
              Agendar reunião
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
