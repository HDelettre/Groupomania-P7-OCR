/* Chargement package express */
const express = require( "express" );

const auth = require( "../config/auth" );

/* chargement package multer */
const multer = require( "../config/multer" );

/* Définition du router */
const router = express.Router();

/* Chemin vers controlers */
const postCtrl = require( "../controllers/post_controllers" );

/* Controllers post */
router.get( "/", auth, postCtrl.getAllPosts );
router.get( "/:id", auth, postCtrl.getOnePost );
router.post( "/newPost", auth, multer, postCtrl.newPost );
router.put( "/:id",  auth, postCtrl.updatePost );
router.delete( "/:id", auth, postCtrl.deletePost );
router.patch( "/like", auth, postCtrl.likePost );

/* exportation router */
module.exports = router;