'use client'

import { motion } from 'framer-motion'
import { RevenueChart } from '../Charts'

export function Slide6() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8 sm:mb-12"
      >
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-3">
          <span className="text-white">Crescimento e</span>
          <br />
          <span className="text-prospere">Projeção</span>
        </h2>
        <p className="text-gray-400 mt-4 text-sm sm:text-base">
          Trajetória com base em expansão e novas frentes
        </p>
      </motion.div>

      <div className="w-full max-w-5xl">
        <RevenueChart />
      </div>
    </div>
  )
}
