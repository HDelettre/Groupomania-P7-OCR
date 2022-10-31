const ObjectId = require('mongoose').Types.ObjectId;

const MessageModel = require('../models/message_model');

const UserModel = require('../models/user_model');

//
// Middleware GET all messages
//
exports.getAllMessages = (req, res) => {

}

//
// Middleware create message
//
exports.createMessage = (req, res) => {
  const newMessage = new MessageModel({
    authorId: req.body.authorId,
    messageTxt: req.body.messageTxt
  })

  if (req.files) {
    const pictName = JSON.parse(JSON.stringify(req.files.file))[0];
    newMessage['messageImg'] = `${pictName.filename}`;
  }

  async function saveMessage() {
    try {
      const reponse = await newMessage.save()

      const messageData = await JSON.parse(JSON.stringify(reponse));

      await UserModel.findByIdAndUpdate(
        { _id: messageData.authorId },
        { $push: { posts: messageData._id }}
      )
    }
    catch(error) {console.log(error)}
  }
  saveMessage();
}

//
// Middleware update message
//
exports.updateMessage = (req, res) => {

}

//
// Middleware delete message
//
exports.deleteMessage = (req, res) => {

}

//
// Middleware like message
//
exports.likeMessage = (req, res) => {

}