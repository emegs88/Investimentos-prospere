export interface Technology {
  name: string
  description: string
  category: 'frontend' | 'backend' | 'infrastructure' | 'tools'
  icon?: string
}

export const technologies = {
  prospere: [
    {
      name: 'Next.js 14',
      description: 'Framework React com App Router para performance e SEO',
      category: 'frontend'
    },
    {
      name: 'TypeScript',
      description: 'Tipagem estática para código mais seguro e manutenível',
      category: 'frontend'
    },
    {
      name: 'Tailwind CSS',
      description: 'Framework CSS utility-first para design rápido e consistente',
      category: 'frontend'
    },
    {
      name: 'Framer Motion',
      description: 'Biblioteca de animações para experiências fluidas',
      category: 'frontend'
    },
    {
      name: 'Recharts',
      description: 'Biblioteca de gráficos responsivos e interativos',
      category: 'frontend'
    },
    {
      name: 'Vercel',
      description: 'Plataforma de deploy e hosting com edge functions',
      category: 'infrastructure'
    }
  ],
  bidcon: [
    {
      name: 'Next.js 14',
      description: 'Framework React com App Router',
      category: 'frontend'
    },
    {
      name: 'TypeScript',
      description: 'Tipagem estática',
      category: 'frontend'
    },
    {
      name: 'Tailwind CSS',
      description: 'Design system moderno',
      category: 'frontend'
    },
    {
      name: 'Prisma',
      description: 'ORM type-safe para banco de dados',
      category: 'backend'
    },
    {
      name: 'PostgreSQL',
      description: 'Banco de dados relacional robusto',
      category: 'backend'
    },
    {
      name: 'NextAuth.js',
      description: 'Autenticação segura e completa',
      category: 'backend'
    },
    {
      name: 'Stripe',
      description: 'Pagamentos seguros e transações protegidas',
      category: 'backend'
    },
    {
      name: 'Vercel',
      description: 'Deploy automático e edge computing',
      category: 'infrastructure'
    },
    {
      name: 'AWS S3',
      description: 'Armazenamento de documentos e arquivos',
      category: 'infrastructure'
    }
  ]
}

export const techCategories = {
  frontend: 'Frontend',
  backend: 'Backend',
  infrastructure: 'Infraestrutura',
  tools: 'Ferramentas'
}
