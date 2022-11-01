/* Chargement package mongoose */
const mongoose = require('mongoose');

/* Définition du model User */
const postSchema = mongoose.Schema(
    {
        authorId: {
            type: String,
            require: true
        },
        messageTxt: {
            type: String,
            maxlength: 1000
        },
        messageImg: {
            type: String
        },
        LikeId: {
            type: [String]
        }
    },
    {
        timestamps: true
    }
);

/*exportation du model vers le serveur */
module.exports = mongoose.model('MessageModel', postSchema);