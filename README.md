# Prospere Presentation

Apresentação web interativa premium para Emerson da Prospere.

## 🚀 Tecnologias

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animações)
- **Recharts** (gráficos)
- **Lucide React** (ícones)

## 📦 Instalação

```bash
npm install
```

## 🏃 Desenvolvimento

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000)

## 🏗️ Build

```bash
npm run build
npm start
```

## 📄 Rotas

- `/` - Apresentação principal (deck)
- `/apresentacao` - Alias para `/`
- `/print` - Versão estática para impressão/PDF

## ⌨️ Navegação

- **← →** ou **N/P** - Navegar entre slides
- **F** - Modo tela cheia
- **Swipe** - Navegação no mobile

## 🎨 Identidade Visual

- **Cores**: Preto (#0B0B0F), Branco (#FFFFFF), Vermelho Prospere (#E50914)
- **Tema**: Premium, moderno, fintech, elegante
- **Responsivo**: Perfeito no iPhone e desktop

## 📊 Estrutura

```
/
├── app/              # Páginas Next.js
├── components/       # Componentes React
│   ├── slides/      # Slides individuais
│   └── ...          # Componentes base
├── data/            # Dados e configurações
└── lib/             # Utilitários e hooks
```

## 🚢 Deploy (Vercel)

1. Conecte seu repositório GitHub à Vercel
2. Configure o build automaticamente
3. Deploy!

## 📝 Notas

- Todos os dados estão em `/data/deck.ts` (facilmente editáveis)
- Sem dependências de API externa
- Zero menções a "Kayo" (removidas completamente)
- Protagonista: Emerson da Prospere (Emerson Gomes dos Santos)

---

**Prospere** - Ecossistema de crescimento inteligente
