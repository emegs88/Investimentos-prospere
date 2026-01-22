'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Store, TrendingUp, Calendar, DollarSign, Percent, BarChart3, Zap } from 'lucide-react'
import { formatBRL } from '@/lib/utils'

interface InvestmentSimulatorProps {
  costPerStore?: number
  commissionRate?: number
  paymentMonths?: number
}

export function InvestmentSimulator({
  costPerStore = 500000,
  commissionRate = 0.5,
  paymentMonths = 20
}: InvestmentSimulatorProps) {
  const [numberOfStores, setNumberOfStores] = useState(1)
  const [monthlySales, setMonthlySales] = useState(1000000)
  const [scenarioSales, setScenarioSales] = useState({
    conservative: 500000,
    realistic: 1000000,
    optimistic: 2000000
  })
  const [selectedScenario, setSelectedScenario] = useState<'custom' | 'conservative' | 'realistic' | 'optimistic'>('realistic')

  // Atualizar vendas mensais baseado no cenário selecionado
  const currentMonthlySales = useMemo(() => {
    if (selectedScenario === 'custom') return monthlySales
    return scenarioSales[selectedScenario]
  }, [selectedScenario, monthlySales, scenarioSales])

  const calculations = useMemo(() => {
    const sales = currentMonthlySales
    const totalInvestment = numberOfStores * costPerStore
    const monthlyCommissionPerStore = (sales * commissionRate) / 100
    const totalMonthlyCommission = monthlyCommissionPerStore * numberOfStores
    const paybackMonths = totalMonthlyCommission > 0 ? totalInvestment / totalMonthlyCommission : 0
    const roi = totalInvestment > 0 ? ((totalMonthlyCommission * paymentMonths) / totalInvestment - 1) * 100 : 0
    const totalReturn = totalMonthlyCommission * paymentMonths
    const netProfit = totalReturn - totalInvestment

    return {
      totalInvestment,
      monthlyCommission: monthlyCommissionPerStore,
      totalMonthlyCommission,
      paybackMonths,
      roi,
      totalReturn,
      netProfit,
      monthlySales: sales
    }
  }, [numberOfStores, currentMonthlySales, costPerStore, commissionRate, paymentMonths])

  const chartData = useMemo(() => {
    const maxMonths = 24
    const paybackMonths = calculations.paybackMonths
    const months = Math.min(maxMonths, Math.max(12, Math.ceil(paybackMonths) + 4))
    return Array.from({ length: months }, (_, i) => {
      const month = i + 1
      const accumulated = calculations.totalMonthlyCommission * month
      const balance = accumulated - calculations.totalInvestment
      return {
        month,
        accumulated,
        balance,
        label: `Mês ${month}`
      }
    })
  }, [calculations])

  return (
    <div className="w-full max-w-6xl mx-auto space-y-4 sm:space-y-6">
      {/* Inputs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 sm:p-6 bg-white/5 border border-white/10 rounded-lg sm:rounded-xl"
        >
          <label className="block text-xs sm:text-sm text-gray-400 mb-2">
            Número de Lojas
          </label>
          <div className="flex items-center gap-2 sm:gap-3">
            <Store className="w-4 h-4 sm:w-5 sm:h-5 text-prospere flex-shrink-0" />
            <input
              type="number"
              min="1"
              max="10"
              value={numberOfStores}
              onChange={(e) => setNumberOfStores(Math.max(1, parseInt(e.target.value) || 1))}
              className="flex-1 bg-white/5 border border-white/20 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-white text-base sm:text-lg font-semibold focus:outline-none focus:border-prospere focus:ring-2 focus:ring-prospere/50"
            />
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Custo por loja: {formatBRL(costPerStore)}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="p-4 sm:p-6 bg-white/5 border border-white/10 rounded-lg sm:rounded-xl"
        >
          <label className="block text-xs sm:text-sm text-gray-400 mb-2">
            Cenário de Vendas
          </label>
          <div className="flex items-center gap-2 mb-2 sm:mb-3">
            <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 text-prospere flex-shrink-0" />
            <select
              value={selectedScenario}
              onChange={(e) => {
                const scenario = e.target.value as typeof selectedScenario
                setSelectedScenario(scenario)
                if (scenario !== 'custom') {
                  setMonthlySales(scenarioSales[scenario])
                }
              }}
              className="flex-1 bg-white/5 border border-white/20 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-white text-xs sm:text-sm font-semibold focus:outline-none focus:border-prospere focus:ring-2 focus:ring-prospere/50"
            >
              <option value="conservative">Conservador</option>
              <option value="realistic">Realista</option>
              <option value="optimistic">Otimista</option>
              <option value="custom">Personalizado</option>
            </select>
          </div>
          {selectedScenario !== 'custom' && (
            <p className="text-xs text-prospere font-semibold">
              {formatBRL(scenarioSales[selectedScenario])}/mês
            </p>
          )}
        </motion.div>
      </div>

      {/* Campos de Vendas por Cenário */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="p-4 sm:p-6 bg-white/5 border border-white/10 rounded-lg sm:rounded-xl mb-4 sm:mb-6"
      >
        <div className="flex items-center gap-2 mb-3 sm:mb-4">
          <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-prospere flex-shrink-0" />
          <h3 className="text-base sm:text-lg font-bold text-white">Vendas Mensais por Cenário</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          {/* Conservador */}
          <div>
            <label className="block text-xs text-gray-400 mb-2">
              Conservador
            </label>
            <input
              type="number"
              min="100000"
              step="100000"
              value={scenarioSales.conservative}
              onChange={(e) => {
                const value = Math.max(100000, parseInt(e.target.value) || 100000)
                setScenarioSales({ ...scenarioSales, conservative: value })
                if (selectedScenario === 'conservative') {
                  setMonthlySales(value)
                }
              }}
              className="w-full bg-white/5 border border-white/20 rounded-lg px-3 py-2 text-white text-sm font-semibold focus:outline-none focus:border-prospere focus:ring-2 focus:ring-prospere/50"
            />
            <p className="text-xs text-gray-500 mt-1">
              Cenário mais seguro
            </p>
          </div>

          {/* Realista */}
          <div>
            <label className="block text-xs text-gray-400 mb-2">
              Realista
            </label>
            <input
              type="number"
              min="100000"
              step="100000"
              value={scenarioSales.realistic}
              onChange={(e) => {
                const value = Math.max(100000, parseInt(e.target.value) || 100000)
                setScenarioSales({ ...scenarioSales, realistic: value })
                if (selectedScenario === 'realistic') {
                  setMonthlySales(value)
                }
              }}
              className="w-full bg-white/5 border border-white/20 rounded-lg px-3 py-2 text-white text-sm font-semibold focus:outline-none focus:border-prospere focus:ring-2 focus:ring-prospere/50"
            />
            <p className="text-xs text-gray-500 mt-1">
              Projeção média
            </p>
          </div>

          {/* Otimista */}
          <div>
            <label className="block text-xs text-gray-400 mb-2">
              Otimista
            </label>
            <input
              type="number"
              min="100000"
              step="100000"
              value={scenarioSales.optimistic}
              onChange={(e) => {
                const value = Math.max(100000, parseInt(e.target.value) || 100000)
                setScenarioSales({ ...scenarioSales, optimistic: value })
                if (selectedScenario === 'optimistic') {
                  setMonthlySales(value)
                }
              }}
              className="w-full bg-white/5 border border-white/20 rounded-lg px-3 py-2 text-white text-sm font-semibold focus:outline-none focus:border-prospere focus:ring-2 focus:ring-prospere/50"
            />
            <p className="text-xs text-gray-500 mt-1">
              Melhor cenário
            </p>
          </div>
        </div>

        {/* Campo Personalizado */}
        {selectedScenario === 'custom' && (
          <div className="mt-4 pt-4 border-t border-white/10">
            <label className="block text-xs text-gray-400 mb-2">
              Vendas Mensais Personalizadas
            </label>
            <div className="flex items-center gap-3">
              <DollarSign className="w-5 h-5 text-prospere" />
              <input
                type="number"
                min="100000"
                step="100000"
                value={monthlySales}
                onChange={(e) => setMonthlySales(Math.max(100000, parseInt(e.target.value) || 100000))}
                className="flex-1 bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white text-lg font-semibold focus:outline-none focus:border-prospere focus:ring-2 focus:ring-prospere/50"
              />
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Defina seu próprio valor de vendas mensais
            </p>
          </div>
        )}
      </motion.div>

      {/* Resultados */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="p-4 sm:p-6 bg-gradient-to-br from-prospere/20 to-prospere/10 border-2 border-prospere/50 rounded-lg sm:rounded-xl"
        >
          <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
            <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 text-prospere flex-shrink-0" />
            <span className="text-xs sm:text-sm text-gray-400">Investimento Total</span>
          </div>
          <p className="text-lg sm:text-xl lg:text-2xl font-bold text-white break-words">
            {formatBRL(calculations.totalInvestment)}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="p-4 sm:p-6 bg-white/5 border border-white/10 rounded-lg sm:rounded-xl"
        >
          <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
            <Percent className="w-5 h-5 sm:w-6 sm:h-6 text-prospere flex-shrink-0" />
            <span className="text-xs sm:text-sm text-gray-400">Comissão Mensal</span>
          </div>
          <p className="text-lg sm:text-xl lg:text-2xl font-bold text-white break-words">
            {formatBRL(calculations.totalMonthlyCommission)}
          </p>
          <p className="text-xs text-gray-500 mt-1">
            {commissionRate}% sobre vendas
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="p-4 sm:p-6 bg-white/5 border border-white/10 rounded-lg sm:rounded-xl"
        >
          <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
            <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-prospere flex-shrink-0" />
            <span className="text-xs sm:text-sm text-gray-400">Payback</span>
          </div>
          <p className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
            {calculations.paybackMonths.toFixed(1)} meses
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Retorno do investimento
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="p-4 sm:p-6 bg-white/5 border border-white/10 rounded-lg sm:rounded-xl"
        >
          <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
            <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-prospere flex-shrink-0" />
            <span className="text-xs sm:text-sm text-gray-400">ROI ({paymentMonths}m)</span>
          </div>
          <p className={`text-lg sm:text-xl lg:text-2xl font-bold ${calculations.roi >= 0 ? 'text-green-400' : 'text-red-400'}`}>
            {calculations.roi.toFixed(1)}%
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Retorno em {paymentMonths} meses
          </p>
        </motion.div>
      </div>

      {/* Gráfico de Payback */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="p-4 sm:p-6 bg-white/5 border border-white/10 rounded-lg sm:rounded-xl"
      >
        <h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
          <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-prospere flex-shrink-0" />
          <span>Projeção de Retorno Acumulado</span>
        </h3>
        
        <div className="relative h-48 sm:h-64">
          {/* Linha de investimento */}
          <div className="absolute top-0 left-0 right-0 h-px bg-prospere/50" style={{ top: '50%' }} />
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-xs text-prospere font-semibold">
            {formatBRL(calculations.totalInvestment)}
          </div>

          {/* Barras do gráfico */}
          <div className="flex items-end justify-between h-full gap-1 sm:gap-2 mt-6 sm:mt-8 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-prospere scrollbar-track-transparent">
            {chartData.map((data, index) => {
              const maxValue = Math.max(
                calculations.totalInvestment * 1.5,
                calculations.totalReturn * 1.2
              )
              const heightPercent = Math.min(
                100,
                Math.max(5, (data.accumulated / maxValue) * 100)
              )
              const isPositive = data.balance >= 0
              
              return (
                <motion.div
                  key={index}
                  className="flex-1 min-w-[16px] sm:min-w-[20px] flex flex-col items-center"
                  initial={{ opacity: 0, scaleY: 0 }}
                  animate={{ opacity: 1, scaleY: 1 }}
                  transition={{ delay: 0.7 + index * 0.01, duration: 0.3 }}
                >
                  <div
                    className={`w-full rounded-t transition-all ${
                      isPositive ? 'bg-green-500 hover:bg-green-400' : 'bg-prospere hover:bg-red-600'
                    } relative group cursor-pointer`}
                    style={{ height: `${heightPercent}%` }}
                    title={`Mês ${data.month}: ${formatBRL(data.accumulated)}`}
                  >
                    <div className="absolute -top-8 sm:-top-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/90 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-10 pointer-events-none">
                      {formatBRL(data.accumulated)}
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90"></div>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500 mt-1 sm:mt-2 hidden sm:block">{data.month}</span>
                  <span className="text-xs text-gray-500 mt-1 sm:mt-2 sm:hidden">{data.month % 3 === 0 ? data.month : ''}</span>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Legenda */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-3 sm:mt-4 text-xs sm:text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 sm:w-4 sm:h-4 bg-prospere rounded flex-shrink-0" />
            <span className="text-gray-400">Investimento</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded flex-shrink-0" />
            <span className="text-gray-400">Lucro</span>
          </div>
          <div className="text-gray-500 text-xs ml-auto">
            Payback em {calculations.paybackMonths.toFixed(1)} meses
          </div>
        </div>
      </motion.div>

      {/* Resumo Final */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="p-4 sm:p-6 bg-gradient-to-br from-prospere/20 to-prospere/10 border-2 border-prospere/50 rounded-lg sm:rounded-xl"
      >
        <h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">Resumo do Investimento</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          <div>
            <p className="text-xs sm:text-sm text-gray-400 mb-1">Retorno Total ({paymentMonths} meses)</p>
            <p className="text-lg sm:text-xl font-bold text-white break-words">
              {formatBRL(calculations.totalReturn)}
            </p>
          </div>
          <div>
            <p className="text-xs sm:text-sm text-gray-400 mb-1">Lucro Líquido</p>
            <p className={`text-lg sm:text-xl font-bold ${calculations.netProfit >= 0 ? 'text-green-400' : 'text-red-400'}`}>
              {formatBRL(calculations.netProfit)}
            </p>
          </div>
          <div>
            <p className="text-xs sm:text-sm text-gray-400 mb-1">Comissão por Loja/Mês</p>
            <p className="text-lg sm:text-xl font-bold text-white break-words">
              {formatBRL(calculations.monthlyCommission)}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
