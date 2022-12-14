# RESEAU SOCIAL D'ENTREPRISE: GROUPOMANIA
-----

DEFINITION DU PROJET:
-
Dans le cadre du septième projet de la formation de développeur web d'OpenClassRoom, il est demandé de créer un réseau social pour l'entreprise fictive Groupomania.

FONCTIONNALITE DU SITE:
-
* Creation d'un nouveau compte utilisateur,
* Connection au site,
* Envoie de message, avec éventuellement une image,
* Modification du texte d'un message envoyé,
* Suppression d'un message déjà envoyé,
* Modification de la photo de profil de l'utilisateur,
* Ajout d'une présentation de l'utilisateur,
* S'abonner, ou se désabonner, à un utilisateur,
* Aimé, ou ne plus aimé, un message,
* Consulté le profil d'autres utilisateurs,
* Compte Administrateur: Il peut modifier ou supprimer tous les messages, gérer le role des utilisateurs, et éventuellement bloquer un compte.

INSTALLATION DU SITE:
-
* Cloner le repository git-hub,
* Dans le répertoire Backend, installer les dépendances avec *npm install*,
* Lancer le serveur backend avec la commande *npm start*,
* Dans le répertoire Frontend, installer les dépendances avec *npm install*,
* Lancer le serveur frontend avec la commande *npm start*

VARIABLES D'ENVIRONNEMENTS:
-
Le site doit cotenir deux fichiers contenant les variables d'environnements.
Côté backend, le fichier *.env* doit contenir, dans le dossier *config*:
* PORT_USED, défini le port utilisé côté backend,
* MONGODB_USER, défini le propriétaire du site MONGO DB,
* MONGODB_PASSWORD, défini le mot de passe d'accès à MONGO DB,
* MONGODB_CLUSTER, défini les paramètres du cluster MONGO DB,
* SECRET_TOKEN, défini la clé de chiffrage utilisée par *jsonwebtoken*,
* CODE_ADMIN, le code de reconnaissance des comptes administrateurs.

Côté Frontend, le fichier *.env.local* doit contenir:
* REACT_APP_API_USER, défini le chemin d'accès aux routes users de l'API,
* REACT_APP_API_MSG, défini le chemin d'accès aux routes de messages de l'API,
* REACT_APP_API_IMG, défini le chemin d'accès aux images côté Backend,
* REACT_APP_API_ADMIN, défini le code admin côté front, il doit être le même que du côté back.

**Pensez à créer un dossier *pictures* côté backend, avec des sous-dossiers *messages* et *profile* pour le stockage des images.**

COMPTE ADMINISTRATEUR:
-
Le premier compte administrateur doit être créé directement dans la base de données, en changeant le rôle de l'utilisateur, et en lui donnant le CODE_ADMIN tel que défini dans les variables d'environnements du Backend.
Par la suite, celui-ci à la possibilité de donner ce rôle à d'autres utilisateurs.

TECHNOLOGIES UTILISEES:
-
* BACKEND : Node JS, Express, Mongo DB, Multer, JsonWebToken.
* FRONTEND : React, React Router Dom V6, React Redux & Redux Toolkit, Sass.