'use client'

import { useState, useCallback } from 'react'
import { AnimatePresence } from 'framer-motion'
import { ProgressBar } from '@/components/ProgressBar'
import { DeckNav } from '@/components/DeckNav'
import { SlideShell } from '@/components/SlideShell'
import { useDeckNavigation } from '@/lib/useDeckNavigation'
import { slides } from '@/data/deck'
import { Slide1 } from '@/components/slides/Slide1'
import { Slide2 } from '@/components/slides/Slide2'
import { Slide3 } from '@/components/slides/Slide3'
import { Slide4 } from '@/components/slides/Slide4'
import { Slide5 } from '@/components/slides/Slide5'
import { Slide6 } from '@/components/slides/Slide6'
import { Slide7 } from '@/components/slides/Slide7'
import { Slide8 } from '@/components/slides/Slide8'
import { Slide9 } from '@/components/slides/Slide9'
import { Slide10 } from '@/components/slides/Slide10'
import { Slide11 } from '@/components/slides/Slide11'
import { ChevronLeft, ChevronRight, Share2, Maximize2 } from 'lucide-react'
import { motion } from 'framer-motion'

const slideComponents = [
  Slide1,
  Slide2,
  Slide3,
  Slide4,
  Slide5,
  Slide6,
  Slide7,
  Slide8,
  Slide9,
  Slide10,
  Slide11
]

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState<1 | -1>(1)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const handleNext = useCallback(() => {
    if (currentSlide < slides.length - 1) {
      setDirection(1)
      setCurrentSlide(currentSlide + 1)
    }
  }, [currentSlide])

  const handlePrev = useCallback(() => {
    if (currentSlide > 0) {
      setDirection(-1)
      setCurrentSlide(currentSlide - 1)
    }
  }, [currentSlide])

  const handleToggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {
        // Ignore errors
      })
      setIsFullscreen(true)
    } else {
      document.exitFullscreen().catch(() => {
        // Ignore errors
      })
      setIsFullscreen(false)
    }
  }, [])

  const handleShare = useCallback(() => {
    if (navigator.share) {
      navigator.share({
        title: 'Prospere - Apresentação',
        text: 'Conheça o ecossistema Prospere',
        url: window.location.href
      }).catch(() => {
        // Fallback to clipboard
        navigator.clipboard.writeText(window.location.href).then(() => {
          // Show toast notification instead of alert
          const toast = document.createElement('div')
          toast.className = 'fixed bottom-20 left-1/2 transform -translate-x-1/2 bg-prospere text-white px-6 py-3 rounded-lg shadow-lg z-50'
          toast.textContent = 'Link copiado!'
          document.body.appendChild(toast)
          setTimeout(() => {
            toast.remove()
          }, 2000)
        })
      })
    } else {
      navigator.clipboard.writeText(window.location.href).then(() => {
        const toast = document.createElement('div')
        toast.className = 'fixed bottom-20 left-1/2 transform -translate-x-1/2 bg-prospere text-white px-6 py-3 rounded-lg shadow-lg z-50'
        toast.textContent = 'Link copiado!'
        document.body.appendChild(toast)
        setTimeout(() => {
          toast.remove()
        }, 2000)
      })
    }
  }, [])

  useDeckNavigation({
    currentSlide,
    totalSlides: slides.length,
    onNext: handleNext,
    onPrev: handlePrev,
    onToggleFullscreen: handleToggleFullscreen
  })

  const CurrentSlide = slideComponents[currentSlide]

  return (
    <div className="w-full h-screen bg-background overflow-hidden relative">
      <ProgressBar current={currentSlide} total={slides.length} />

      <DeckNav
        currentSlide={currentSlide}
        onSelectSlide={(index) => {
          setDirection(index > currentSlide ? 1 : -1)
          setCurrentSlide(index)
        }}
      />

      {/* Main slide area */}
      <div className="w-full h-full relative lg:pl-80">
        <AnimatePresence mode="wait" custom={direction}>
          <SlideShell
            key={currentSlide}
            index={currentSlide}
            isActive={true}
            direction={direction}
          >
            <CurrentSlide />
          </SlideShell>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="fixed bottom-20 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-2 sm:gap-4 z-40 lg:left-auto lg:right-8 lg:transform-none">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handlePrev}
          disabled={currentSlide === 0}
          className="p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed border border-white/20"
          aria-label="Slide anterior"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </motion.button>

        <div className="px-4 sm:px-6 py-2 bg-white/5 border border-white/20 rounded-full text-white font-mono text-xs sm:text-sm">
          {String(currentSlide + 1).padStart(2, '0')} /{' '}
          {String(slides.length).padStart(2, '0')}
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleNext}
          disabled={currentSlide === slides.length - 1}
          className="p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed border border-white/20"
          aria-label="Próximo slide"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </motion.button>
      </div>

      {/* Top right actions */}
      <div className="fixed top-4 sm:top-8 right-4 sm:right-8 flex items-center gap-2 sm:gap-3 z-40">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleShare}
          className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors border border-white/20"
          title="Compartilhar (copiar link)"
          aria-label="Compartilhar"
        >
          <Share2 className="w-5 h-5 text-white" />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleToggleFullscreen}
          className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors border border-white/20"
          title="Tela cheia (F)"
          aria-label="Tela cheia"
        >
          <Maximize2 className="w-5 h-5 text-white" />
        </motion.button>
      </div>

      {/* Footer */}
      <div className="fixed bottom-0 left-0 right-0 h-14 sm:h-16 flex items-center justify-between px-4 sm:px-8 border-t border-white/10 bg-black/50 backdrop-blur-sm lg:pl-96 z-30">
        <div className="text-gray-600 text-xs sm:text-sm font-mono">
          Prospere {new Date().getFullYear()}
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/5519997561909"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-green-400 transition-colors text-xs sm:text-sm hidden sm:flex items-center gap-1"
            title="WhatsApp: (19) 99756-1909"
          >
            <span className="hidden md:inline">WhatsApp:</span> (19) 99756-1909
          </a>
          <div className="text-gray-600 text-xs hidden md:block">
            Use ← → ou N/P para navegar | F para tela cheia
          </div>
        </div>
      </div>
    </div>
  )
}
