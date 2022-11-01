const ObjectId = require('mongoose').Types.ObjectId;

const MessageModel = require('../models/message_model');

const UserModel = require('../models/user_model');

//
// Middleware GET all messages
//
exports.getAllMessages = (req, res) => {
  /*
  async function LoadingAllMessages() {
    try {
      const reponse = await MessageModel.find();
      console.log('reponse get all messages')
      return reponse
    }
    catch (error) {console.log(error)}
  }
  LoadingAllMessages();
  */
 MessageModel.find()
 .then((allPosts) => {res.status(200).json({allPosts})})
 .catch((error)=>res.status(500).send({error}))
}

//
// Middleware create message
//
exports.createMessage = (req, res) => {
  const newMessage = new MessageModel({
    authorId: req.body.authorId,
    messageTxt: req.body.messageTxt
  })
  console.log('req.body: ', req.body)
  console.log('req.files: ', req.files)
  if (req.files.file) {
    console.log('il y a une image')
    const pictName = JSON.parse(JSON.stringify(req.files.file))[0];
    newMessage['messageImg'] = `${pictName.filename}`;
  }

  async function saveMessage() {
    try {
      const reponse = await newMessage.save()
      console.log('reponse savemessage: ', reponse)

      const messageData = await JSON.parse(JSON.stringify(reponse));

      await UserModel.findByIdAndUpdate(
        { _id: messageData.authorId },
        { $push: { posts: messageData._id }}
      )

      return res.status(201).json({message: 'Le message a été sauvegardé'})
    }
    catch(error) {res.status(400).send(error)}
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