'use client'

import {
  LineChart,
  Line,
  BarChart,
  Bar,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'
import { chartData, eventData, bidconData } from '@/data/deck'
import { motion } from 'framer-motion'
import { formatBRL } from '@/lib/utils'

export function RevenueChart() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="w-full h-80 bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-sm"
    >
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={chartData}>
          <defs>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#E50914" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#E50914" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
          <XAxis dataKey="month" stroke="#9CA3AF" />
          <YAxis stroke="#9CA3AF" />
          <Tooltip
            contentStyle={{
              backgroundColor: '#0B0B0F',
              border: '1px solid #E50914',
              borderRadius: '8px',
              color: '#FFFFFF'
            }}
            formatter={(value: number) => formatBRL(value)}
          />
          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#E50914"
            fillOpacity={1}
            fill="url(#colorRevenue)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </motion.div>
  )
}

export function ProjectionChart() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="w-full h-80 bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-sm"
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
          <XAxis dataKey="month" stroke="#9CA3AF" />
          <YAxis stroke="#9CA3AF" />
          <Tooltip
            contentStyle={{
              backgroundColor: '#0B0B0F',
              border: '1px solid #E50914',
              borderRadius: '8px',
              color: '#FFFFFF'
            }}
            formatter={(value: number) => formatBRL(value)}
          />
          <Legend />
          <Bar dataKey="projection" fill="#E50914" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  )
}

export function EventsChart() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="w-full h-80 bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-sm"
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={eventData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
          <XAxis dataKey="month" stroke="#9CA3AF" />
          <YAxis stroke="#9CA3AF" />
          <Tooltip
            contentStyle={{
              backgroundColor: '#0B0B0F',
              border: '1px solid #E50914',
              borderRadius: '8px',
              color: '#FFFFFF'
            }}
          />
          <Line
            type="monotone"
            dataKey="events"
            stroke="#E50914"
            strokeWidth={3}
            dot={{ fill: '#E50914', r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>
  )
}

export function BidConChart() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="w-full h-80 bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-sm"
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={bidconData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
          <XAxis dataKey="month" stroke="#9CA3AF" />
          <YAxis stroke="#9CA3AF" />
          <Tooltip
            contentStyle={{
              backgroundColor: '#0B0B0F',
              border: '1px solid #E50914',
              borderRadius: '8px',
              color: '#FFFFFF'
            }}
            formatter={(value: number) => formatBRL(value)}
          />
          <Legend />
          <Bar dataKey="volume" fill="#E50914" radius={[8, 8, 0, 0]} />
          <Bar dataKey="revenue" fill="#ff4444" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  )
}
