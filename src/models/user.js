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
    photo: {
        type: String
    },
    years: {
        type: Number
    },
    likes: {
        type: String
    },
    CreateAdd: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('User', User)