/* Chargement package express */
const express = require("express");

/* chargement package multer */
const multer = require( "../config/multer" );
const auth = require( "../config/jwt" );

/* Définition du router */
const router = express.Router();

/* Chemin vers controllers */
const authCtrl = require( "../controllers/auth_controllers" );
const userCtrl = require( "../controllers/user_controllers" );

/* Controllers authentification */
router.post( "/signup", authCtrl.createUser );
router.post( "/login", authCtrl.loginUser );
router.get( "/logout/:id", auth, authCtrl.logoutUser );

// Controllers Users
router.get("/:id", userCtrl.getOneUser);
router.get( "/", userCtrl.getAllUsers);
router.put( "/:id", auth, multer, userCtrl.updateUser );
router.put( "/:id", auth, userCtrl.newRoleUser );
router.patch( "/follow", auth, userCtrl.follow );

/* exportation router */
module.exports = router;