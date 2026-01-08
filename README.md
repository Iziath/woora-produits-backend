# Backend API - Application Produits WOORA

API REST sécurisée avec authentification JWT pour la gestion de produits.

##  Stack Technique

- **Node.js** - Runtime JavaScript
- **Express** - Framework web
- **MongoDB** - Base de données NoSQL (MongoDB Atlas)
- **Mongoose** - ODM pour MongoDB
- **JWT** - Authentification par token
- **Bcryptjs** - Hash des mots de passe
- **Express-validator** - Validation des données
- **CORS** - Gestion cross-origin

##  Installation

```bash
npm install
cp .env.example .env
# Éditez .env avec vos identifiants MongoDB
npm run dev
```

## ⚙️ Configuration

Créez un fichier `.env` à partir de `.env.example` :

```env
PORT=5000
MONGODB_URI=mongodb+srv://aiwasenaiziath_db_user:20LXOaSy1K7aqvSr@cluster0.ujketp0.mongodb.net/woora-products?retryWrites=true&w=majority
JWT_SECRET=votre_cle_secrete
JWT_EXPIRE=7d
```

##  Routes API

### Authentification
- `POST /api/auth/register` - Inscription
- `POST /api/auth/login` - Connexion

### Utilisateurs
- `GET /api/users/profile` - Profil utilisateur (protégé)

### Produits
- `GET /api/products` - Liste des produits (protégé)
- `GET /api/products/:id` - Détail d'un produit (protégé)
- `POST /api/products` - Créer un produit (protégé)
- `PUT /api/products/:id` - Modifier un produit (protégé)
- `DELETE /api/products/:id` - Supprimer un produit (protégé)

##  Sécurité

- Hash des mots de passe avec Bcrypt (10 rounds)
- Authentification JWT avec expiration configurable
- Validation des données avec express-validator
- Protection des routes avec middleware d'authentification
- Isolation des données par utilisateur

## Déploiement

Ce backend peut être déployé sur :
- **Railway** (recommandé)
- **Render**
- **Heroku**
- **Vercel** (Serverless Functions)

Voir le guide de déploiement dans le dépôt principal.

