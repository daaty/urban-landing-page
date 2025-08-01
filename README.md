# Urban Mobility Landing Page 🚗

Uma landing page moderna e responsiva para a Urban - plataforma de mobilidade urbana inovadora.

## 🚀 Deploy Status

[![Deploy](https://img.shields.io/badge/deploy-ready-green.svg)](https://github.com/usuario/urban-landing-page)
[![Node.js](https://img.shields.io/badge/node.js-18.x-green.svg)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/express-4.x-blue.svg)](https://expressjs.com/)

## 🌐 Demo

🔗 **[Ver Demo ao Vivo](https://urban-landing.seu-dominio.com)**

## 🚀 Tecnologias

- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
- **Styling:** Tailwind CSS
- **Backend:** Node.js + Express
- **Deploy:** Docker + EasyPanel

## 📋 Recursos

- ✅ Design responsivo e moderno
- ✅ Animações suaves e interativas
- ✅ Seções para passageiros e motoristas
- ✅ Links para apps iOS e Android
- ✅ Integração com WhatsApp
- ✅ Otimizado para SEO
- ✅ Compressão gzip
- ✅ Headers de segurança

## �️ Configuração Local

```bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev

# Executar em produção
npm start
```

## 🐳 Deploy com EasyPanel

### 1. **Preparar projeto:**
```bash
git init
git add .
git commit -m "Initial commit"
git push origin main
```

### 2. **Configurar no EasyPanel:**
- Criar novo projeto
- Conectar repositório Git
- Configurar build settings:
  - **Build Command:** `npm install`
  - **Start Command:** `npm start`
  - **Port:** `3000`

### 3. **Variáveis de ambiente:**
```
NODE_ENV=production
PORT=3000
```

### 4. **Health Check:**
- URL: `/health`
- Intervalo: 30s

## 📱 Estrutura do Projeto

```
├── index.html          # Página principal
├── style.css           # Estilos customizados
├── server.js           # Servidor Express
├── package.json        # Dependências Node.js
├── Dockerfile          # Container Docker
├── docker-compose.yml  # Orquestração
└── README.md          # Documentação
```

## 🌐 URLs Importantes

- **App Passageiro iOS:** `https://apps.apple.com/br/app/urban/id1515298182`
- **App Motorista iOS:** `https://apps.apple.com/br/app/urban-motorista-app/id1515298608`
- **App Passageiro Android:** `production.urban.customer`
- **App Motorista Android:** `production.urban.driver`

## 🔧 Configurações de Produção

- Compressão gzip habilitada
- Headers de segurança (Helmet)
- Cache de arquivos estáticos (1 dia)
- Health check endpoint
- Tratamento de erros 404/500

## 📞 Suporte

WhatsApp: +55 66 99988-7766