export interface Slide {
  id: number
  title: string
  subtitle?: string
  type: 'title' | 'content' | 'kpi' | 'chart' | 'partnership'
}

export interface KPI {
  label: string
  value: string
  suffix?: string
  highlight?: boolean
}

export const slides: Slide[] = [
  {
    id: 1,
    title: 'Prospere: estratégia, patrimônio e escala.',
    subtitle: 'Um ecossistema para crescer com inteligência.',
    type: 'title'
  },
  {
    id: 2,
    title: 'Quem é Emerson',
    type: 'content'
  },
  {
    id: 3,
    title: 'O Problema',
    subtitle: 'Desafios do Mercado',
    type: 'content'
  },
  {
    id: 4,
    title: 'A Solução: Ecossistema Prospere',
    type: 'content'
  },
  {
    id: 5,
    title: 'Números que Falam',
    subtitle: 'Performance e Projeção',
    type: 'kpi'
  },
  {
    id: 6,
    title: 'Crescimento e Projeção',
    subtitle: 'Trajetória de Expansão',
    type: 'chart'
  },
  {
    id: 7,
    title: 'BidCon: Marketplace Ativo',
    subtitle: 'Tecnologia que Escala Confiança • bidcon.vercel.app',
    type: 'content'
  },
  {
    id: 8,
    title: 'Experiências & Marca',
    subtitle: 'Prospere Esportes e Eventos',
    type: 'chart'
  },
  {
    id: 9,
    title: 'Parceria com Prospere',
    subtitle: 'Pacotes de Colaboração',
    type: 'partnership'
  },
  {
    id: 10,
    title: 'Vamos Construir Juntos',
    subtitle: 'Parceria, Escala e Impacto',
    type: 'title'
  },
  {
    id: 11,
    title: 'Tecnologias por Trás',
    subtitle: 'Stack Moderno e Escalável',
    type: 'content'
  }
]

export const kpis: KPI[] = [
  {
    label: 'Receita LTM',
    value: '4000000',
    suffix: 'R$',
    highlight: true
  },
  {
    label: 'Projeção NTM',
    value: '12000000',
    suffix: 'R$',
    highlight: true
  },
  {
    label: 'EBITDA Estimado',
    value: '2800000',
    suffix: 'R$'
  },
  {
    label: 'Valuation Estimado',
    value: '48500000',
    suffix: 'R$'
  }
]

export const chartData = [
  { month: 'Jan', revenue: 800000, projection: 900000 },
  { month: 'Fev', revenue: 1200000, projection: 1350000 },
  { month: 'Mar', revenue: 1600000, projection: 1800000 },
  { month: 'Abr', revenue: 2000000, projection: 2400000 },
  { month: 'Mai', revenue: 2500000, projection: 3000000 },
  { month: 'Jun', revenue: 3200000, projection: 3800000 },
  { month: 'Jul', revenue: 3800000, projection: 4500000 },
  { month: 'Ago', revenue: 4200000, projection: 5200000 },
  { month: 'Set', revenue: 4600000, projection: 6000000 },
  { month: 'Out', revenue: 5100000, projection: 7000000 },
  { month: 'Nov', revenue: 5600000, projection: 8200000 },
  { month: 'Dez', revenue: 6200000, projection: 9500000 }
]

export const eventData = [
  { month: 'Jan', events: 3 },
  { month: 'Fev', events: 5 },
  { month: 'Mar', events: 7 },
  { month: 'Abr', events: 6 },
  { month: 'Mai', events: 8 },
  { month: 'Jun', events: 10 },
  { month: 'Jul', events: 12 },
  { month: 'Ago', events: 9 },
  { month: 'Set', events: 11 },
  { month: 'Out', events: 13 },
  { month: 'Nov', events: 14 },
  { month: 'Dez', events: 15 }
]

export const pillars = [
  {
    name: 'Prospere Consórcios',
    description: 'Aquisição e Patrimônio',
    icon: 'Building2'
  },
  {
    name: 'Prospere Imóveis',
    description: 'Originação e Oportunidades',
    icon: 'Home'
  },
  {
    name: 'Prospere Esportes',
    description: 'Marca + Comunidade + Eventos',
    icon: 'Trophy'
  },
  {
    name: 'BidCon',
    description: 'Marketplace ativo • Tecnologia + Segurança • bidcon.vercel.app',
    icon: 'Zap'
  }
]

export const partnershipPackages = [
  {
    name: 'Parceiro Estratégico',
    description: 'Integração completa no ecossistema',
    benefits: [
      'Co-branding em todas as frentes',
      'Participação em eventos premium',
      'Conteúdo e influência local',
      'Dashboard de performance'
    ]
  },
  {
    name: 'Parceiro de Performance',
    description: 'Foco em resultados mensuráveis',
    benefits: [
      'Take rate customizado',
      'Relatórios mensais detalhados',
      'Suporte técnico dedicado',
      'Acesso ao marketplace BidCon'
    ]
  },
  {
    name: 'Parceiro de Experiência',
    description: 'Ativação de marca e relacionamento',
    benefits: [
      'Camarotes e experiências exclusivas',
      'Eventos de ativação customizados',
      'Mídia e presença garantida',
      'Community building'
    ]
  }
]

export const bidconData = [
  { month: 'Jan', volume: 500000, revenue: 25000 },
  { month: 'Fev', volume: 750000, revenue: 37500 },
  { month: 'Mar', volume: 1000000, revenue: 50000 },
  { month: 'Abr', volume: 1200000, revenue: 60000 },
  { month: 'Mai', volume: 1500000, revenue: 75000 },
  { month: 'Jun', volume: 1800000, revenue: 90000 },
  { month: 'Jul', volume: 2000000, revenue: 100000 },
  { month: 'Ago', volume: 2200000, revenue: 110000 },
  { month: 'Set', volume: 2500000, revenue: 125000 },
  { month: 'Out', volume: 2800000, revenue: 140000 },
  { month: 'Nov', volume: 3000000, revenue: 150000 },
  { month: 'Dez', volume: 3200000, revenue: 160000 }
]
