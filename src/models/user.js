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
    date: {
        type: Date
    },
    locate: {
        type: String
    },
    school: {
        type: String
    },
    health: {
        type: String
    },
    photo: {
        type: String
    },
    years: {
        type: Number
    },
    likes: {
        type: String
    },
    admin: {
        type: Boolean
    },
    CreateAdd: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('User', User)