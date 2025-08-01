const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3080;

// Servir arquivos estáticos simplesmente
app.use(express.static('.', {
  maxAge: '1h',
  etag: true
}));

// Rota principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Rota para health check
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Middleware para capturar 404 - retorna index.html (SPA)
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Urban Landing Page rodando em http://localhost:${PORT}`);
  console.log(`📱 Ambiente: ${process.env.NODE_ENV || 'development'}`);
});
