# 🚀 Guia de Deploy - Prospere Presentation

## Deploy na Vercel (Recomendado)

### Passo 1: Preparar o Repositório

```bash
# Inicializar git (se ainda não foi feito)
git init
git add .
git commit -m "Initial commit - Prospere Presentation"

# Criar repositório no GitHub e conectar
git remote add origin https://github.com/seu-usuario/prospere-presentation.git
git branch -M main
git push -u origin main
```

### Passo 2: Deploy na Vercel

1. Acesse [vercel.com](https://vercel.com)
2. Faça login com sua conta GitHub
3. Clique em **"New Project"**
4. Importe o repositório `prospere-presentation`
5. Configure:
   - **Framework Preset**: Next.js
   - **Build Command**: `npm run build` (automático)
   - **Output Directory**: `.next` (automático)
6. Clique em **"Deploy"**

### Passo 3: Configurar Domínio (Opcional)

1. No dashboard da Vercel, vá em **Settings** > **Domains**
2. Adicione seu domínio customizado
3. Configure os registros DNS conforme instruções

## 📱 Compartilhar Apresentação

Após o deploy, você terá uma URL como:
```
https://prospere-presentation.vercel.app
```

### Compartilhar via:
- **WhatsApp**: Envie o link diretamente
- **Email**: Inclua o link na assinatura ou corpo do email
- **Botão Compartilhar**: Use o botão na apresentação (copia o link automaticamente)

## 🔧 Variáveis de Ambiente

Este projeto não requer variáveis de ambiente, mas você pode adicionar:

```env
NEXT_PUBLIC_SITE_URL=https://seu-dominio.com
NEXT_PUBLIC_WHATSAPP=5511999999999
```

## 📊 Rotas Disponíveis

- `/` - Apresentação principal
- `/apresentacao` - Alias (redireciona para `/`)
- `/print` - Versão para impressão/PDF

## ✅ Checklist Pós-Deploy

- [ ] Testar navegação por teclado (← →, N/P, F)
- [ ] Testar em mobile (swipe)
- [ ] Verificar todos os 10 slides
- [ ] Testar botão de compartilhar
- [ ] Testar modo fullscreen
- [ ] Verificar responsividade no iPhone
- [ ] Testar rota `/print` para PDF

## 🐛 Troubleshooting

### Build falha
- Verifique se todas as dependências estão no `package.json`
- Execute `npm install` localmente para testar

### Animações não funcionam
- Verifique se `framer-motion` está instalado
- Limpe o cache: `rm -rf .next && npm run build`

### Gráficos não aparecem
- Verifique se `recharts` está instalado
- Verifique se os dados em `/data/deck.ts` estão corretos

---

**Pronto para apresentar!** 🎉
