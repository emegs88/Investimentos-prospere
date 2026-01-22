'use client'

import { useCallback, useEffect } from 'react'

interface UseDeckNavigationProps {
  currentSlide: number
  totalSlides: number
  onNext: () => void
  onPrev: () => void
  onToggleFullscreen: () => void
}

export function useDeckNavigation({
  currentSlide,
  totalSlides,
  onNext,
  onPrev,
  onToggleFullscreen
}: UseDeckNavigationProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'n' || e.key === 'N') {
        e.preventDefault()
        if (currentSlide < totalSlides - 1) onNext()
      } else if (e.key === 'ArrowLeft' || e.key === 'p' || e.key === 'P') {
        e.preventDefault()
        if (currentSlide > 0) onPrev()
      } else if (e.key === 'f' || e.key === 'F') {
        e.preventDefault()
        onToggleFullscreen()
      }
    },
    [currentSlide, totalSlides, onNext, onPrev, onToggleFullscreen]
  )

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  // Swipe support for mobile
  useEffect(() => {
    let touchStartX = 0
    let touchEndX = 0

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.changedTouches[0].screenX
    }

    const handleTouchEnd = (e: TouchEvent) => {
      touchEndX = e.changedTouches[0].screenX
      handleSwipe()
    }

    const handleSwipe = () => {
      const swipeThreshold = 50
      const diff = touchStartX - touchEndX

      if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0 && currentSlide < totalSlides - 1) {
          onNext()
        } else if (diff < 0 && currentSlide > 0) {
          onPrev()
        }
      }
    }

    window.addEventListener('touchstart', handleTouchStart)
    window.addEventListener('touchend', handleTouchEnd)

    return () => {
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchend', handleTouchEnd)
    }
  }, [currentSlide, totalSlides, onNext, onPrev])
}
