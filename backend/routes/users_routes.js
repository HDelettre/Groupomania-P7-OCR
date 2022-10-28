/* Chargement package express */
const express = require("express");

/* chargement package multer */
const multer = require( "../config/multer" );
const auth = require( "../config/auth" );

/* Définition du router */
const router = express.Router();

/* Chemin vers controllers */
const authCtrl = require( "../controllers/auth_controllers" );
const userCtrl = require( "../controllers/user_controllers" );

/* Controllers authentification */
router.post( "/signup", authCtrl.signup );
router.post( "/login", authCtrl.login );
router.get( "/logout/:id", auth, authCtrl.logout );

// Controllers Users
router.get( "/", auth, userCtrl.getAllUser);
router.put( "/:id", auth, multer, userCtrl.update );
router.delete( "/:id", auth, userCtrl.delete );
router.patch( "/follow", auth, userCtrl.follow );

/* exportation router */
module.exports = router;