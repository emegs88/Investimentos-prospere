'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Store, Percent, DollarSign, Target, ArrowRight } from 'lucide-react'
import { InvestmentSimulator } from '../InvestmentSimulator'

export function Slide11() {
  const investmentBenefits = [
    {
      icon: Store,
      title: 'Expansão de Lojas',
      description: 'Abertura de novas unidades de consórcio em regiões estratégicas',
      value: 'Multiplicação de pontos de venda'
    },
    {
      icon: Percent,
      title: 'Percentual sobre Vendas',
      description: 'Participação nos resultados de cada loja investida',
      value: 'Receita recorrente garantida'
    },
    {
      icon: TrendingUp,
      title: 'Crescimento Escalável',
      description: 'Modelo replicável e comprovado de sucesso',
      value: 'ROI atrativo e previsível'
    },
    {
      icon: Target,
      title: 'Mercado em Expansão',
      description: 'Setor de consórcios em crescimento constante',
      value: 'Oportunidade de mercado'
    }
  ]

  const investmentModel = {
    title: 'Modelo de Investimento',
    description: 'Participação nos resultados de cada loja',
    structure: [
      {
        label: 'Investimento Inicial',
        value: 'R$ 500.000',
        detail: 'Por loja (estruturação e operação)'
      },
      {
        label: 'Participação',
        value: '0,5% sobre vendas',
        detail: 'Comissão mensal recorrente'
      },
      {
        label: 'Pagamento',
        value: '20 meses',
        detail: 'Período de comissão garantida'
      }
    ]
  }

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center px-4 sm:px-8 py-8 sm:py-16 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 max-w-4xl"
      >
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4">
          <span className="text-white">Estratégia de</span>
          <br />
          <span className="text-prospere">Expansão & Investimento</span>
        </h2>
        <p className="text-gray-400 mt-4 text-lg">
          Captação de investidores para expansão de lojas de consórcio
        </p>
        <p className="text-prospere mt-2 font-semibold">
          Percentual sobre vendas de cada loja investida
        </p>
      </motion.div>

      {/* Modelo de Investimento */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-4xl w-full mb-12"
      >
        <div className="p-8 bg-gradient-to-br from-prospere/20 to-prospere/10 border-2 border-prospere/50 rounded-2xl">
          <div className="flex items-center gap-4 mb-6">
            <DollarSign className="w-10 h-10 text-prospere" />
            <div>
              <h3 className="text-2xl font-bold text-white">{investmentModel.title}</h3>
              <p className="text-gray-300">{investmentModel.description}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {investmentModel.structure.map((item, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white/5 rounded-xl border border-white/10"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <p className="text-gray-400 text-sm mb-2">{item.label}</p>
                <p className="text-prospere font-bold text-xl mb-1">{item.value}</p>
                <p className="text-gray-300 text-sm">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Simulador Interativo */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="w-full mb-12"
      >
        <InvestmentSimulator
          costPerStore={500000}
          commissionRate={0.5}
          paymentMonths={20}
        />
      </motion.div>

      {/* Benefícios */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl w-full">
        {investmentBenefits.map((benefit, index) => {
          const Icon = benefit.icon
          return (
            <motion.div
              key={index}
              className="p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-prospere/10 hover:border-prospere/30 transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-prospere/20 rounded-lg">
                  <Icon className="w-6 h-6 text-prospere" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-white mb-2">{benefit.title}</h4>
                  <p className="text-gray-400 text-sm mb-2">{benefit.description}</p>
                  <p className="text-prospere text-sm font-semibold">{benefit.value}</p>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* CTA */}
      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <button 
          onClick={() => window.open('https://wa.me/5511999999999?text=Olá! Tenho interesse em investir na expansão de lojas Prospere.', '_blank')}
          className="px-8 py-4 bg-prospere text-white rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center gap-2 mx-auto"
        >
          Quero Investir
          <ArrowRight className="w-5 h-5" />
        </button>
        <p className="text-gray-500 text-sm mt-4">
          Oportunidade de participar do crescimento do ecossistema Prospere
        </p>
      </motion.div>
    </div>
  )
}
