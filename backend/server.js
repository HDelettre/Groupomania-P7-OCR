/* Chargement package 'http' de node */
const http = require('http');

/* Chargement package dotenv */
require('dotenv').config({
    path : './config/.env'
})

/* Déclaration variable dotenv */
const PORT_SERVER = process.env.PORT_USED;

/* Appel application express */
const app = require('./app');

/* Lancement de l'application */
app.set(PORT_SERVER);
const server = http.createServer(app);

/* Ecoute du port par le serveur*/
server.listen(PORT_SERVER, () => console.log ('Le server utilise le port: ' + PORT_SERVER));