// Packages Loading
const multer = require("../config/multer");
const UserModel = require("../models/user_model");
const ObjectId = require("mongoose").Types.ObjectId;

//
// Middleware GET one user
//
exports.getOneUser = (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    return res.status(404).json({ message: "Utilisateur inconnu !" });
  }

  UserModel.findById(req.params.id)
    .then((userData) => {
      res.status(200).json({ userData });
    })
    .catch((error) => res.status(400).json({ message: "Error" + error }));
};

//
// Middleware GET all users
//
exports.getAllUsers = (req, res) => {
  UserModel.find()
    .then((allUsers) => {
      res.status(200).json({ allUsers });
    })
    .catch((error) => res.status(400).send(error));
};

//
// Middleware update user
//
exports.updateUser = (req, res) => {};

//
// Middleware delete user
//
exports.deleteUser = (req, res) => {};

//
// Middleware follow
//
exports.follow = (req, res) => {
  // Test si les 2 users existent
  if (!ObjectId.isValid(req.body.id) || !ObjectId.isValid(req.body.idFollow)) {
    return res
      .status(400)
      .json({ message: " Au moins un utilisateur n'existe pas " });
  }
  // Test même utilisateur
  if (req.body.id === req.body.idFollow) {
    return res
      .status(400)
      .json({ message: "Vous ne pouvez pas vous suivre !" });
  }
  //
  // Function Follow
  async function followUp() {
    try {
      await UserModel.findByIdAndUpdate(
        { _id: req.body.id },
        { $push: { followings: req.body.idFollow } }
      );

      await UserModel.findByIdAndUpdate(
        { _id: req.body.idFollow },
        { $push: { followers: req.body.id } }
      );

      return res.status(200).json({ message: 'follow updated'})
    } catch (error) {
      return res.status(400).send(error);
    }
  }
  // Function Unfollow
  async function followDown() {
    try {
      await UserModel.findByIdAndUpdate(
        { _id: req.body.id },
        { $pull: { followings: req.body.idFollow } }
      );

      await UserModel.findByIdAndUpdate(
        { _id: req.body.idFollow },
        { $pull: { followers: req.body.id } }
      );

      return res.status(200).json({ message: 'unfollow updated'})
    } catch (error) {
      return res.status(400).send(error);
    }
  }
  // Test si déjà suivi
  const userFind = UserModel.findById(req.body.id);
  if (userFind.followings.includes(req.body.idFollow)) {
    followDown();
  } else {
    followUp();
  }
};
