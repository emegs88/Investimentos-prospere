#!/bin/bash

echo "🚀 Configuração do GitHub para Prospere Presentation"
echo ""
echo "Passo 1: Criar repositório no GitHub"
echo "1. Acesse: https://github.com/new"
echo "2. Nome: prospere-presentation (ou outro)"
echo "3. Descrição: Apresentação interativa Prospere"
echo "4. NÃO marque 'Initialize with README'"
echo "5. Clique em 'Create repository'"
echo ""
read -p "Pressione ENTER quando criar o repositório..."

echo ""
read -p "Digite seu usuário do GitHub: " GITHUB_USER
read -p "Digite o nome do repositório (ou Enter para 'prospere-presentation'): " REPO_NAME
REPO_NAME=${REPO_NAME:-prospere-presentation}

echo ""
echo "📦 Conectando ao GitHub..."
git remote add origin https://github.com/$GITHUB_USER/$REPO_NAME.git 2>/dev/null || git remote set-url origin https://github.com/$GITHUB_USER/$REPO_NAME.git

echo "🌿 Configurando branch main..."
git branch -M main

echo "⬆️  Fazendo push..."
git push -u origin main

echo ""
echo "✅ Pronto! Seu código está no GitHub!"
echo "🔗 Acesse: https://github.com/$GITHUB_USER/$REPO_NAME"
echo ""
echo "📝 Próximo passo: Deploy na Vercel"
echo "1. Acesse: https://vercel.com"
echo "2. Importe o repositório do GitHub"
echo "3. Deploy automático!"
