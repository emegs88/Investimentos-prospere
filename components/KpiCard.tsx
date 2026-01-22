'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { formatBRL } from '@/lib/utils'

interface KpiCardProps {
  label: string
  value: string
  suffix?: string
  highlight?: boolean
  delay?: number
}

function CountUp({ value, delay }: { value: string; delay: number }) {
  const [displayValue, setDisplayValue] = useState('0')
  const numValue = parseInt(value.replace(/\D/g, ''))

  useEffect(() => {
    let start = 0
    const duration = 2
    const increment = numValue / (duration * 60)
    let current = start
    let intervalId: NodeJS.Timeout | null = null

    const timer = setTimeout(() => {
      intervalId = setInterval(() => {
        current += increment
        if (current >= numValue) {
          setDisplayValue(numValue.toLocaleString('pt-BR'))
          if (intervalId) clearInterval(intervalId)
        } else {
          setDisplayValue(Math.floor(current).toLocaleString('pt-BR'))
        }
      }, 1000 / 60)
    }, delay * 200)

    return () => {
      clearTimeout(timer)
      if (intervalId) clearInterval(intervalId)
    }
  }, [numValue, delay])

  return <span>{displayValue}</span>
}

export function KpiCard({
  label,
  value,
  suffix = '',
  highlight = false,
  delay = 0
}: KpiCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay * 0.1 }}
      className={`rounded-2xl border p-8 backdrop-blur-sm ${
        highlight
          ? 'bg-prospere/20 border-prospere/50 shadow-lg shadow-prospere/20'
          : 'bg-white/5 border-white/10'
      }`}
    >
      <p className="text-sm text-gray-400 mb-3 font-medium">{label}</p>
      <div className="text-4xl font-bold text-white">
        {suffix && <span className="text-2xl mr-1">{suffix} </span>}
        <CountUp value={value} delay={delay} />
      </div>
    </motion.div>
  )
}
