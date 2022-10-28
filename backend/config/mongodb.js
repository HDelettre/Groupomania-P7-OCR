/* Chargement package mongoose */
const mongoose = require('mongoose');

/* Chargement package dotenv */
require('dotenv').config({
    path : './config/.env'
})

/* Connection à mongodb */
mongoose.connect(`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER}`)
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));