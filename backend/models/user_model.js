/* Chargement package mongoose */
const mongoose = require('mongoose');

/* Chargement package unique-validator */
const uniqueValidator = require('mongoose-unique-validator');

// Chargement package validator
const { isEmail } = require('validator');

/* Définition du model User */
const userSchema = mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            validate: [isEmail]
        },
        password: {
            type: String,
            required: true,
            minlength: 8,
            select:false
        },
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        imageUrl: {
            type: String,
            default:'index.png'
        },
        story: {
            type: String,
            maxlength: 800
        },
        followers: {
            type: [String]
        },
        followings: {
            type: [String]
        },
        likes: {
            type: [String]
        },
        posts: {
            type: [String]
        },
        token: {
            type: String
        }
    },
    {
        timestamps: true
    }
);

/* application unique-validator au schema */
userSchema.plugin(uniqueValidator);

/*exportation du model vers le serveur */
module.exports = mongoose.model('User', userSchema);