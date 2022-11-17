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
  // Vérification firstName/lastName

  const regexRequirement = /^[A-Za-zéèêùçà-]+$/;
  const checkFirstName = regexRequirement.test(req.body.firstName);
  const checkLastName = regexRequirement.test(req.body.lastName);
  
  if (!checkFirstName || !checkLastName) {
    return res.status(400).json({ message: 'Revoir le format Prénom/Nom !'})
  }
  console.log('check: ', checkFirstName, ' / ', checkLastName);

  // Formatage FirstName/LastName
  let bddFirstName = req.body.firstName.toLowerCase();
  let bddLastName = req.body.lastName.toLowerCase();

  const tiretFirstName = bddFirstName.search(/\-/);
  const tiretLastName = bddLastName.search(/\-/);

  if (tiretFirstName > -1) {
    bddFirstName = bddFirstName.charAt(0).toUpperCase() +
    bddFirstName.slice(1, tiretFirstName + 1) +
    bddFirstName.charAt(tiretFirstName + 1).toUpperCase() +
    bddFirstName.slice(tiretFirstName + 2);
  }else {
    bddFirstName = bddFirstName.charAt(0).toUpperCase() + bddFirstName.slice(1);
  }

  if (tiretLastName > -1) {
    bddLastName = bddLastName.charAt(0).toUpperCase() +
    bddLastName.slice(1, tiretLastName + 1) +
    bddLastName.charAt(tiretLastName + 1).toUpperCase() +
    bddLastName.slice(tiretLastName + 2);
  }else {
    bddLastName = bddLastName.charAt(0).toUpperCase() + bddLastName.slice(1);
  }

  // Hash password
  const hashPasswordFunction = async function () {
    
      const passwordHashed = await bcrypt.hash(req.body.password, 10);

      // Create new user model
      const newUser = new UserModel({
        email: req.body.email,
        password: passwordHashed,
        firstName: bddFirstName, // req.body.firstName,
        lastName: bddLastName // req.body.lastName
      });
      // New user save in BDD
        try {
          await newUser.save();
          return res
            .status(201)
            .json({ message: "Compte nouvel utilisateur créé avec succès" });
        } catch (error) {
          return res.status(500).send('Error during new user saving: ', error);
        }
  };
  hashPasswordFunction();
};


//
//Middleware for login an user
//
exports.loginUser = (req, res) => {
  const findUser = async function () {
    try {
      const user = await UserModel.findOne({ email: req.body.email }).select(
        "+password"
      );
      // Checking role
      if (user.role === 'BLOCKED') {
        return res.status(402).json({ message: 'Connexion refusée, Compte bloqué !'});
      }

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
  if (!ObjectId.isValid(req.params.id)) {
    return res.status(404).json({ message: "Utilisateur inexistant !" });
  }
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
