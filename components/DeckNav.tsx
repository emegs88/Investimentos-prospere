'use client'

import { slides } from '@/data/deck'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'

interface DeckNavProps {
  currentSlide: number
  onSelectSlide: (index: number) => void
}

export function DeckNav({ currentSlide, onSelectSlide }: DeckNavProps) {
  return (
    <motion.div
      initial={{ x: -320 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="fixed left-0 top-0 w-80 h-screen bg-black/40 backdrop-blur-md border-r border-prospere/20 overflow-y-auto z-40 hidden lg:block"
    >
      <div className="p-8 space-y-4">
        <h3 className="text-xs font-bold text-prospere uppercase tracking-widest">
          Slides
        </h3>
        <nav className="space-y-2">
          {slides.map((slide, index) => (
            <motion.button
              key={slide.id}
              onClick={() => onSelectSlide(index)}
              whileHover={{ x: 4 }}
              className={`w-full text-left px-4 py-3 rounded-lg transition-all flex items-center gap-3 ${
                currentSlide === index
                  ? 'bg-prospere text-white'
                  : 'text-gray-300 hover:bg-white/5'
              }`}
            >
              <span className="text-xs font-mono">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{slide.title}</p>
              </div>
              {currentSlide === index && (
                <ChevronRight className="w-4 h-4 flex-shrink-0" />
              )}
            </motion.button>
          ))}
        </nav>
      </div>
    </motion.div>
  )
}
