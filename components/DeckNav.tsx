'use client'

import { useState } from 'react'
import { slides } from '@/data/deck'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

interface DeckNavProps {
  currentSlide: number
  onSelectSlide: (index: number) => void
}

export function DeckNav({ currentSlide, onSelectSlide }: DeckNavProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Desktop Menu - Top Horizontal */}
      <motion.div
        initial={{ y: -60 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="fixed top-1 left-0 right-0 h-14 bg-black/60 backdrop-blur-md border-b border-prospere/20 z-40 hidden md:flex items-center px-4 sm:px-6 lg:px-8"
      >
        <div className="flex items-center gap-1 sm:gap-2 w-full overflow-x-auto scrollbar-thin scrollbar-thumb-prospere scrollbar-track-transparent">
          {slides.map((slide, index) => (
            <motion.button
              key={slide.id}
              onClick={() => onSelectSlide(index)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`px-3 sm:px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2 whitespace-nowrap flex-shrink-0 ${
                currentSlide === index
                  ? 'bg-prospere text-white shadow-lg shadow-prospere/50'
                  : 'text-gray-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              <span className="text-xs font-mono">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="text-xs sm:text-sm font-medium truncate max-w-[120px] sm:max-w-[200px]">
                {slide.title}
              </span>
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Mobile Menu Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="fixed top-1 left-4 z-50 md:hidden p-2 rounded-lg bg-black/60 backdrop-blur-md border border-prospere/20 text-white hover:bg-white/10 transition-colors"
        aria-label="Menu de slides"
      >
        {isMobileMenuOpen ? (
          <X className="w-5 h-5" />
        ) : (
          <Menu className="w-5 h-5" />
        )}
      </motion.button>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-14 left-0 right-0 bg-black/90 backdrop-blur-md border-b border-prospere/20 z-40 md:hidden max-h-[60vh] overflow-y-auto"
          >
            <nav className="p-4 space-y-2">
              {slides.map((slide, index) => (
                <motion.button
                  key={slide.id}
                  onClick={() => {
                    onSelectSlide(index)
                    setIsMobileMenuOpen(false)
                  }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 flex items-center gap-3 ${
                    currentSlide === index
                      ? 'bg-prospere text-white shadow-lg shadow-prospere/50'
                      : 'text-gray-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <span className="text-xs font-mono">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium">{slide.title}</p>
                  </div>
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
