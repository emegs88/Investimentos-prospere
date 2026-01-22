# 🚀 Como Subir para o GitHub

## Passo 1: Criar Repositório no GitHub

1. Acesse [github.com](https://github.com)
2. Clique no botão **"+"** no canto superior direito
3. Selecione **"New repository"**
4. Preencha:
   - **Repository name**: `prospere-presentation` (ou outro nome)
   - **Description**: "Apresentação interativa Prospere - Deck de slides premium"
   - **Visibility**: Público ou Privado (sua escolha)
   - **NÃO marque** "Initialize with README" (já temos arquivos)
5. Clique em **"Create repository"**

## Passo 2: Conectar e Fazer Push

Execute os comandos abaixo no terminal (substitua `SEU-USUARIO` pelo seu usuário do GitHub):

```bash
# Adicionar remote (substitua SEU-USUARIO pelo seu usuário)
git remote add origin https://github.com/SEU-USUARIO/prospere-presentation.git

# Renomear branch para main (se necessário)
git branch -M main

# Fazer push
git push -u origin main
```

## Passo 3: Deploy na Vercel

Após subir para o GitHub:

1. Acesse [vercel.com](https://vercel.com)
2. Faça login com GitHub
3. Clique em **"New Project"**
4. Importe o repositório `prospere-presentation`
5. Configure:
   - Framework: Next.js (detectado automaticamente)
   - Build Command: `npm run build` (automático)
6. Clique em **"Deploy"**

Pronto! Sua apresentação estará online! 🎉

## Comandos Rápidos

```bash
# Ver status
git status

# Adicionar mudanças
git add .

# Commit
git commit -m "Descrição das mudanças"

# Push
git push
```
