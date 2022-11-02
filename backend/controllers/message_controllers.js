const ObjectId = require("mongoose").Types.ObjectId;

const fs = require("fs");

const MessageModel = require("../models/message_model");

const UserModel = require("../models/user_model");

//
// Middleware GET all messages
//
exports.getAllMessages = (req, res) => {
  async function LoadingAllMessages() {
    try {
      const reponse = await MessageModel.find();
      console.log("get all message: ", reponse);
      return res.status(200).json(reponse);
    } catch (error) {
      res.status(400).send(error);
    }
  }
  LoadingAllMessages();
};

//
// Middleware create message
//
exports.createMessage = (req, res) => {
  const newMessage = new MessageModel({
    authorId: req.body.authorId,
    messageTxt: req.body.messageTxt,
  });
  if (req.files.file) {
    const pictName = JSON.parse(JSON.stringify(req.files.file))[0];
    newMessage["messageImg"] = `${pictName.filename}`;
  }

  async function saveMessage() {
    try {
      const reponse = await newMessage.save();

      const messageData = await JSON.parse(JSON.stringify(reponse));

      await UserModel.findByIdAndUpdate(
        { _id: messageData.authorId },
        { $push: { posts: messageData._id } }
      );

      return res.status(201).json({ message: "Le message a été sauvegardé" });
    } catch (error) {
      res.status(400).send(error);
    }
  }
  saveMessage();
};

//
// Middleware update message
//
exports.updateMessage = (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    return res.status(404).json({ message: "Ce message n'existe pas !" });
  }

  if (!ObjectId.isValid(req.body.id)) {
    return res.status(404).json({ message: "Utilisateur inconnu !" });
  }

  async function modifyMessage() {
    const postObject = await MessageModel.findById(req.params.id);

    if (postObject.authorId != req.body.id) {
      return res
        .status(400)
        .json({ message: "Vous n'etes pas autorisé à modifier ce message !" });
    }

    try {
      await MessageModel.findByIdAndUpdate(
        { _id: req.params.id },
        { $set: { messageTxt: req.body.messageTxt } }
      );
      return res
        .status(201)
        .json({ message: "Le message a été modifié avec succès !" });
    } catch (error) {
      res.status(500).send(error);
    }
  }
  modifyMessage();
};

//
// Middleware delete message
//
exports.deleteMessage = (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    return res.status(404).json({ message: "Ce message n'existe pas !" });
  }

  if (!ObjectId.isValid(req.body.id)) {
    return res.status(404).json({ message: "Utilisateur inconnu !" });
  }

  async function deletePost() {
    try {
      const postObject = await MessageModel.findById(req.params.id);

      if (postObject.authorId != req.body.id) {
        return res
          .status(400)
          .json({
            message: "Vous n'etes pas autorisé à supprimer ce message !",
          });
      }

      // Check if picture is include in the post and delete
      if (postObject.messageImg) {
        fs.unlink(`pictures/messages/${postObject.messageImg}`, () => {
          console.log("Image supprimée de la BdD !");
        });
      }

      // Post deleted
      await MessageModel.findByIdAndRemove({ _id: req.params.id });
      console.log("Message supprimé de la BdD !");

      await UserModel.findByIdAndUpdate(
        { _id: req.body.id },
        { $pull: { posts: req.params.id } }
      );
      console.log("Reference du post supprimé du compte du user !");

      return res.status(200).json({ message: "message supprimé avec succès" });
    } catch (error) {
      res.status(500).send(error);
    }
  }
  deletePost();
};
//
// Middleware like message
//
exports.likeMessage = (req, res) => {};
