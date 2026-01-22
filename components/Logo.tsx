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
  const [imgSrc, setImgSrc] = useState(`/logo/${brand}-logo.svg`)
  const [hasError, setHasError] = useState(false)

  const handleError = () => {
    if (imgSrc.endsWith('.svg')) {
      setImgSrc(`/logo/${brand}-logo.png`)
    } else {
      setHasError(true)
    }
  }

  if (hasError && showFallback) {
    return (
      <motion.div
        className={`flex items-center justify-center ${className}`}
        style={{ width, height }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-2xl font-bold text-prospere">
          {brand === 'prospere' ? 'PROSPERE' : 'BIDCON'}
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      className={`relative ${className}`}
      style={{ width, height }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Image
        src={imgSrc}
        alt={`${brand === 'prospere' ? 'Prospere' : 'BidCon'} Logo`}
        width={width}
        height={height}
        className="object-contain"
        onError={handleError}
        unoptimized
        priority={brand === 'prospere'}
      />
    </motion.div>
  )
}

export function LogoIcon({ brand, size = 40, className = '' }: { brand: 'prospere' | 'bidcon'; size?: number; className?: string }) {
  const [imgSrc, setImgSrc] = useState(`/logo/${brand}-icon.svg`)

  const handleError = () => {
    if (imgSrc.endsWith('.svg')) {
      setImgSrc(`/logo/${brand}-icon.png`)
    }
  }

  return (
    <motion.div
      className={`relative ${className}`}
      style={{ width: size, height: size }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Image
        src={imgSrc}
        alt={`${brand === 'prospere' ? 'Prospere' : 'BidCon'} Icon`}
        width={size}
        height={size}
        className="object-contain"
        onError={handleError}
        unoptimized
      />
    </motion.div>
  )
}
