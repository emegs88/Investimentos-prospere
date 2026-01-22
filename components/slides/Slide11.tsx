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
    <div className="relative w-full h-full flex flex-col items-center justify-start px-4 sm:px-6 lg:px-8 py-6 sm:py-8 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-6 sm:mb-8 max-w-4xl w-full"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-3 sm:mb-4">
          <span className="text-white">Estratégia de</span>
          <br />
          <span className="text-prospere">Expansão & Investimento</span>
        </h2>
        <p className="text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base lg:text-lg">
          Captação de investidores para expansão de lojas de consórcio
        </p>
        <p className="text-prospere mt-1 sm:mt-2 text-sm sm:text-base font-semibold">
          Percentual sobre vendas de cada loja investida
        </p>
      </motion.div>

      {/* Modelo de Investimento */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-4xl w-full mb-6 sm:mb-8"
      >
        <div className="p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-prospere/20 to-prospere/10 border-2 border-prospere/50 rounded-xl sm:rounded-2xl">
          <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <DollarSign className="w-8 h-8 sm:w-10 sm:h-10 text-prospere flex-shrink-0" />
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">{investmentModel.title}</h3>
              <p className="text-gray-300 text-sm sm:text-base">{investmentModel.description}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {investmentModel.structure.map((item, index) => (
              <motion.div
                key={index}
                className="p-4 sm:p-6 bg-white/5 rounded-lg sm:rounded-xl border border-white/10"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <p className="text-gray-400 text-xs sm:text-sm mb-2">{item.label}</p>
                <p className="text-prospere font-bold text-lg sm:text-xl mb-1">{item.value}</p>
                <p className="text-gray-300 text-xs sm:text-sm">{item.detail}</p>
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
        className="w-full mb-6 sm:mb-8"
      >
        <InvestmentSimulator
          costPerStore={500000}
          commissionRate={0.5}
          paymentMonths={20}
        />
      </motion.div>

      {/* Benefícios */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-5xl w-full mb-6 sm:mb-8">
        {investmentBenefits.map((benefit, index) => {
          const Icon = benefit.icon
          return (
            <motion.div
              key={index}
              className="p-4 sm:p-6 bg-white/5 border border-white/10 rounded-lg sm:rounded-xl hover:bg-prospere/10 hover:border-prospere/30 transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 bg-prospere/20 rounded-lg flex-shrink-0">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-prospere" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2">{benefit.title}</h4>
                  <p className="text-gray-400 text-xs sm:text-sm mb-1 sm:mb-2">{benefit.description}</p>
                  <p className="text-prospere text-xs sm:text-sm font-semibold">{benefit.value}</p>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* CTA */}
      <motion.div
        className="mt-6 sm:mt-8 text-center pb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <button 
          onClick={() => window.open('https://wa.me/5519997561909?text=Olá! Tenho interesse em investir na expansão de lojas Prospere.', '_blank')}
          className="px-6 sm:px-8 py-3 sm:py-4 bg-prospere text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 flex items-center gap-2 mx-auto text-sm sm:text-base shadow-lg hover:shadow-prospere/50 hover:scale-105 active:scale-95 group"
          title="Falar no WhatsApp: (19) 99756-1909"
        >
          Quero Investir
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
        </button>
        <p className="text-gray-500 text-xs sm:text-sm mt-3 sm:mt-4">
          Oportunidade de participar do crescimento do ecossistema Prospere
        </p>
      </motion.div>
    </div>
  )
}
