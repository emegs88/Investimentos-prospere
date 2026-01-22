'use client'

import { motion } from 'framer-motion'
import { KpiCard } from '../KpiCard'
import { kpis } from '@/data/deck'

export function Slide5() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center px-4 sm:px-8 py-8 sm:py-16">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 sm:mb-16"
      >
        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-4">
          <span className="text-prospere">Números</span>
          <br />
          <span className="text-white">que Falam</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl w-full">
        {kpis.map((kpi, index) => (
          <KpiCard
            key={index}
            label={kpi.label}
            value={kpi.value}
            suffix={kpi.suffix}
            highlight={kpi.highlight}
            delay={index}
          />
        ))}
      </div>

      <motion.p
        className="text-gray-500 text-xs mt-12 sm:mt-16 font-mono"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        Base: valuation interno/relatório 22/01/2026
      </motion.p>
    </div>
  )
}
