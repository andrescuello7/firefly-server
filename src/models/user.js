const mongoose = require('mongoose')

const User = mongoose.Schema({
    user: {
        type: String,
        required: true,
        tim: true
    },
    email: {
        type: String,
        required: true,
        tim: true
    },
    password: {
        type: String,
        required: true,
        tim: true
    },
    admin: {
        type: Boolean
    },
    move: {
        type: Boolean
    },
    photo: {
        type: String
    },
    collaborator: {
        type: Boolean
    },
    CreateAdd: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('User', User)