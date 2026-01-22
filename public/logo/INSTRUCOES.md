# Instruções para Logos

## Arquivos na Pasta

### Prospere
- ✅ `prospere-logo.svg` - Logo SVG (texto simples)
- ✅ `prospere-logo.png` - Logo PNG (copiado de Camada 3.png)
- ✅ `prospere-icon.svg` - Ícone SVG

**Nota:** O arquivo `Camada 3.png` foi copiado como `prospere-logo.png`. Se você tiver um logo melhor, substitua os arquivos.

### BidCon
- ✅ `bidcon-logo.svg` - Logo SVG (texto simples)
- ✅ `bidcon-icon.svg` - Ícone SVG

## Como Substituir

1. **Para usar logos reais:**
   - Substitua os arquivos `.svg` ou `.png` pelos seus logos oficiais
   - Mantenha os nomes dos arquivos exatamente como estão
   - Formatos recomendados: SVG (preferencial) ou PNG com fundo transparente

2. **Tamanhos recomendados:**
   - Logo: mínimo 400x120px (ou proporção similar)
   - Ícone: 40x40px a 128x128px

3. **Os componentes detectam automaticamente:**
   - Primeiro tenta carregar `.svg`
   - Se falhar, tenta `.png`
   - Se ambos falharem, mostra texto como fallback

## Estrutura Final Esperada

```
/public/logo/
├── prospere-logo.svg (ou .png)
├── prospere-icon.svg (ou .png)
├── bidcon-logo.svg (ou .png)
├── bidcon-icon.svg (ou .png)
└── README.md
```
