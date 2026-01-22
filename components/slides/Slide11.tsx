'use client'

import { motion } from 'framer-motion'
import { technologies, techCategories } from '@/data/technologies'
import { Code, Database, Cloud, Wrench } from 'lucide-react'
import { Logo } from '../Logo'

const categoryIcons = {
  frontend: Code,
  backend: Database,
  infrastructure: Cloud,
  tools: Wrench
}

export function Slide11() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center px-8 py-16 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 max-w-4xl"
      >
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4">
          <span className="text-white">Tecnologias</span>
          <br />
          <span className="text-prospere">por Trás</span>
        </h2>
        <p className="text-gray-400 mt-4">
          Stack moderno e escalável que impulsiona o ecossistema
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl w-full">
        {/* Prospere Technologies */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-prospere/20 rounded-lg flex items-center justify-center">
              <span className="text-prospere font-bold text-xl">P</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Prospere</h3>
              <p className="text-gray-400 text-sm">Apresentação & Ecossistema</p>
            </div>
          </div>

          <div className="space-y-4">
            {technologies.prospere.map((tech, index) => {
              const Icon = categoryIcons[tech.category]
              return (
                <motion.div
                  key={index}
                  className="p-4 bg-white/5 rounded-lg border border-white/5 hover:border-prospere/30 hover:bg-prospere/5 transition-all"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <div className="flex items-start gap-3">
                    <Icon className="w-5 h-5 text-prospere flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold mb-1">{tech.name}</h4>
                      <p className="text-gray-400 text-sm">{tech.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* BidCon Technologies */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-prospere/20 rounded-lg flex items-center justify-center">
              <span className="text-prospere font-bold text-xl">BC</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">BidCon</h3>
              <p className="text-gray-400 text-sm">Marketplace & Plataforma</p>
            </div>
          </div>

          <div className="space-y-4">
            {technologies.bidcon.map((tech, index) => {
              const Icon = categoryIcons[tech.category]
              return (
                <motion.div
                  key={index}
                  className="p-4 bg-white/5 rounded-lg border border-white/5 hover:border-prospere/30 hover:bg-prospere/5 transition-all"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <div className="flex items-start gap-3">
                    <Icon className="w-5 h-5 text-prospere flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold mb-1">{tech.name}</h4>
                      <p className="text-gray-400 text-sm">{tech.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>

      <motion.div
        className="mt-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <p className="text-gray-500 text-sm">
          Stack moderno • Escalável • Seguro • Performance
        </p>
      </motion.div>
    </div>
  )
}
