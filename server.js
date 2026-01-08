const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route de base
app.get('/', (req, res) => {
  res.json({ 
    message: 'API WOORA Products - Backend',
    version: '1.0.0',
    endpoints: {
      health: '/api/health',
      auth: '/api/auth',
      users: '/api/users',
      products: '/api/products'
    }
  });
});

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/users', require('./routes/users'));
app.use('/api/products', require('./routes/products'));

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'API WOORA Products is running' });
});

// Connexion MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/woora-products')
.then(() => console.log('MongoDB connecté'))
.catch(err => console.error('Erreur MongoDB:', err));

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});

// Gestion de la fermeture propre
process.on('SIGTERM', () => {
  console.log('SIGTERM reçu, fermeture du serveur...');
  server.close(() => {
    console.log('Serveur fermé');
    mongoose.connection.close();
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  console.log('SIGINT reçu, fermeture du serveur...');
  server.close(() => {
    console.log('Serveur fermé');
    mongoose.connection.close();
    process.exit(0);
  });
});

