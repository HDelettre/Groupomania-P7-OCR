/* Chargement package express */
const express = require( "express" );

const auth = require( "../config/jwt" );

/* chargement package multer */
const multer = require( "../config/multer" );

/* Définition du router */
const router = express.Router();

/* Chemin vers controlers */
const postCtrl = require( "../controllers/message_controllers" );

/* Controllers post */
router.get( "/", auth, postCtrl.getAllMessages );
router.post( "/newPost", auth, multer, postCtrl.createMessage );
router.put( "/:id",  auth, postCtrl.updateMessage );
router.delete( "/:id", auth, postCtrl.deleteMessage );
router.patch( "/like", auth, postCtrl.likeMessage );

/* exportation router */
module.exports = router;