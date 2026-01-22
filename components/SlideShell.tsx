'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface SlideShellProps {
  children: ReactNode
  index: number
  isActive: boolean
  direction?: 1 | -1
}

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0
  })
}

export function SlideShell({
  children,
  index,
  isActive,
  direction = 1
}: SlideShellProps) {
  return (
    <motion.div
      key={index}
      custom={direction}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 }
      }}
      className="absolute inset-0 w-full h-full"
    >
      <div className="w-full h-full bg-gradient-to-br from-background via-background to-red-950/30">
        {children}
      </div>
    </motion.div>
  )
}
