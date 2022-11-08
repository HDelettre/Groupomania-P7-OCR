// Packages Loading
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const ObjectId = require("mongoose").Types.ObjectId;

const UserModel = require("../models/user_model");

//
//Middleware for create a new user
//
exports.createUser = (req, res) => {
  // checking email
  if (ObjectId.isValid(req.body.email)) {
    return res.status(404).json({ message: "Utilisateur déjà enregistré !" });
  }
  // checking password length
  if (req.body.password.length < 8) {
    return res.status(400).json({ message: "Mot de passe trop court !" });
  }

  // Hash password
  const hashPasswordFunction = async function () {
    
      const passwordHashed = await bcrypt.hash(req.body.password, 10);

      // Create new user model
      const newUser = new UserModel({
        email: req.body.email,
        password: passwordHashed,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
      });

      // New user save in BDD
      
        try {
          await newUser.save();
          return res
            .status(201)
            .json({ message: "Compte nouvel utilisateur créé avec succès" });
        } catch (error) {
          res.status(500).send('Error during new user saving: ', error);
        }
  };
  hashPasswordFunction();
};

//
//Middleware for login an user
//
exports.loginUser = (req, res) => {
  // Check if user is in BDD
  const findUser = async function () {
    try {
      const user = await UserModel.findOne({ email: req.body.email }).select(
        "+password"
      );

      // Password checking
      const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!validPassword) {
        return res.status(400).json({ message: 'Mot de passe incorrect !'});
      }
      // Create token
      const token = jwt.sign({ id: user.id }, process.env.SECRET_TOKEN);

      // Save token in BDD
      await UserModel.findByIdAndUpdate(
        { _id: user._id },
        { $set: { token: token } }
      );

      return res.status(200).json(user.id);
    } catch (error) {
      return res.status(400).json({ message: "Login: Utilisateur non trouvé: ", error});
    }
  };
  findUser();
};

//
//Middleware for logout an user
//
exports.logoutUser = (req, res) => {
  console.log("id: ", req.params.id);
  const exitUser = async function () {
    try {
      await UserModel.findByIdAndUpdate(
        { _id: req.params.id },
        { $set: { token: "" } }
      );
    } catch (error) {
      console.log("Logout: Utilisateur non trouvé: ", error);
    } finally {
      return res.status(200).json({ message: "Utilisateur déconnecté" });
    }
  };
  exitUser();
};
