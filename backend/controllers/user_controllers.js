// Packages Loading
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
    .then((data) => {
      res.status(200).json({ data });
    })
    .catch((error) =>
      res.status(400).json({ message: "Error during getOneUser: " + error })
    );
};

//
// Middleware GET all users
//
exports.getAllUsers = (req, res) => {
  UserModel.find().sort({ lastName: 1 })
    .then((allUsers) => {
      res.status(200).json({ allUsers });
    })
    .catch((error) => res.status(400).send(error));
};

//
// Middleware update user
//
exports.updateUser = (req, res) => {
  if (!ObjectId.isValid(req.auth.userToken)) {
    return res.status(400).json({ message: "L'utilisateur n'existe pas " });
  }

  async function updateUserProfile() {
    try {
      await UserModel.findByIdAndUpdate(
        { _id: req.auth.userToken },
        { $set: { story: req.body.story } }
      );

      if (req.files.profile) {
        const profilePictName = req.files.profile[0].filename;
        await UserModel.findByIdAndUpdate(
          { _id: req.auth.userToken },
          { $set: { imageUrl: profilePictName } }
        );
      }
      return res
        .status(200)
        .json({ message: "Le profil du user a été modifié avec succès !" });
    } catch (error) {
      return res.status(400).send(error);
    }
  }
  updateUserProfile();
};

//
// Middleware change role of user
//
exports.newRoleUser = (req, res) => {
  if (
    !ObjectId.isValid(req.params.id) ||
    !ObjectId.isValid(req.body.idUser)
  ) {
    return res
      .status(400)
      .json({ message: "Au moins un utilisateur n'existe pas !" });
  }
  async function checkAdmin() {
    try {
      await UserModel.findById(req.body.idUser).then((user) => {
        if (user.role != process.env.CODE_ADMIN) {
          return res.status(400).json({
            message:
              "Vous devez être administrateur pour supprimer un compte !",
          });
        } else {
          changeRole();
        }
      });
    } catch (error) {
      return res.status(400).send(error);
    }
  }
  checkAdmin();

  async function changeRole() {
    try {
      await UserModel.findByIdAndUpdate(
        { _id: req.params.id },
        { $set: { role: req.body.newRole } }
      );
      return res.status(201).json({ message: 'Le role du User a été modifié avec succès !'})
    } catch (error) {
      return res.status(500).send(error);
    }
  }
};
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

      return res.status(200).json({ message: "follow updated" });
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

      return res.status(200).json({ message: "unfollow updated" });
    } catch (error) {
      return res.status(400).send(error);
    }
  }
  // Test si déjà suivi
  UserModel.findById(req.body.idFollow)
    .then((userFind) => {
      if (userFind.followings.includes(req.body.idFollow)) {
        followDown();
      } else {
        followUp();
      }
    })
    .catch((error) => console.log(error));
};
