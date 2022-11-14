/* Chargement du package express */
const express = require('express');

/* Chargement package helmet */
const helmet = require('helmet');

// Chargement package rate-limit
const rateLimit = require("express-rate-limit");

// Paramètre rate Limit
const limiter = rateLimit({
  max: 100,                                 // 100 requêtes maximum
  windowMs: 60 * 60 * 1000,                 // 1 heure
  message: "Vous avez atteint la limite de requête, essayer plus tard !"
});

/* Chargement package dotenv */
require('dotenv').config({
    path : './config/.env'
})

/* Déclaration des routes */
const routesMessages = require('./routes/message_routes');
const routesUsers = require('./routes/users_routes');

// connection mongodb
require('./config/mongodb');

// Création de l'application express
const app = express();

// Gestion des images
app.use('/pictures', express.static(__dirname + '/pictures'));

// Application helmet à application */
app.use(helmet());

// Application package rate-limt
console.log('LIMITER: ', limiter)
//app.use('/api/auth', limiter);

/* CORS */
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

/* Conversion des messages express en json */
app.use(express.json());

/* Appel des routes */
app.use( '/api/auth', routesUsers );
app.use( '/api/message', routesMessages );

/* exportation application vers le serveur */
module.exports = app;