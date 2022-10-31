// Packages Loading
const multer = require('../config/multer');
const UserModel = require('../models/user_model');
const ObjectId = require('mongoose').Types.ObjectId;

//
// Middleware GET one user
//
exports.getOneUser = (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    return res.status(404).json({message: 'Utilisateur inconnu !'})
  }

  UserModel.findById(req.params.id)
  .then((userData) => {
    res.status(200).json({userData})
  })
  .catch((error) => res.status(400).json({message: 'Error' + error}))
}

//
// Middleware GET all users
//
exports.getAllUsers = (req, res) => {

}

//
// Middleware update user
//
exports.updateUser = (req, res) => {

}

//
// Middleware delete user
//
exports.deleteUser = (req, res) => {

}

//
// Middleware follow
//
exports.follow = (req, res) => {

}