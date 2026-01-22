'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface LogoProps {
  brand: 'prospere' | 'bidcon'
  width?: number
  height?: number
  className?: string
  showFallback?: boolean
}

export function Logo({ brand, width = 200, height = 60, className = '', showFallback = true }: LogoProps) {
  const [imgError, setImgError] = useState(false)
  const [currentSrc, setCurrentSrc] = useState(`/logo/${brand}-logo.svg`)

  const handleError = () => {
    if (currentSrc.endsWith('.svg')) {
      setCurrentSrc(`/logo/${brand}-logo.png`)
    } else {
      setImgError(true)
    }
  }

  if (imgError && showFallback) {
    return (
      <motion.div
        className={`flex items-center justify-center ${className}`}
        style={{ width, height }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-2xl sm:text-3xl font-bold text-prospere">
          {brand === 'prospere' ? 'PROSPERE' : 'BIDCON'}
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      className={`relative ${className}`}
      style={{ width: '100%', maxWidth: width, height }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <img
        src={currentSrc}
        alt={`${brand === 'prospere' ? 'Prospere' : 'BidCon'} Logo`}
        width={width}
        height={height}
        className="object-contain w-full h-auto"
        onError={handleError}
        style={{ maxWidth: '100%', height: 'auto' }}
      />
    </motion.div>
  )
}

export function LogoIcon({ brand, size = 40, className = '' }: { brand: 'prospere' | 'bidcon'; size?: number; className?: string }) {
  const [imgError, setImgError] = useState(false)
  const [currentSrc, setCurrentSrc] = useState(`/logo/${brand}-icon.svg`)

  const handleError = () => {
    if (currentSrc.endsWith('.svg')) {
      setCurrentSrc(`/logo/${brand}-icon.png`)
    } else {
      setImgError(true)
    }
  }

  if (imgError) {
    return (
      <motion.div
        className={`flex items-center justify-center ${className} bg-prospere/20 rounded-lg`}
        style={{ width: size, height: size }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-prospere font-bold text-xs">
          {brand === 'prospere' ? 'P' : 'BC'}
        </span>
      </motion.div>
    )
  }

  return (
    <motion.div
      className={`relative ${className}`}
      style={{ width: size, height: size }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <img
        src={currentSrc}
        alt={`${brand === 'prospere' ? 'Prospere' : 'BidCon'} Icon`}
        width={size}
        height={size}
        className="object-contain"
        onError={handleError}
        style={{ maxWidth: '100%', height: 'auto' }}
      />
    </motion.div>
  )
}
