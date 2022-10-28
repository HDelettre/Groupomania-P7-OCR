/* Chargement du package express */
const express = require('express');

/* Chargement package dotenv */
require('dotenv').config({
    path : './config/.env'
})

/* chemin vers le dossier image */
//const path = require('path');

/* Déclaration des routes */
const routesMessages = require('./routes/message_routes');
const routesUsers = require('./routes/users_routes');

// connection mongodb
require('./config/mongodb');

/* Création de l'application express */
const app = express();

// Gestion des images
app.use('/pictures', express.static(__dirname + '/pictures'));

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
app.use( '/api/post', routesMessages );

/* exportation application vers le serveur */
module.exports = app;