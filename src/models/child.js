const mongoose = require('mongoose')

const Child = mongoose.Schema({
    user: {
        type: String,
        required: true,
        tim: true
    },
    gender: {
        type: String,
        required: true
    },
    createBy: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'user'
    },
    progress: {
        type: Number
    },
    date: {
        type: Date
    },
    health: {
        type: String
    },
    school: {
        type: String
    },
    photo: {
        type: String
    },
    years: {
        type: Number
    },
    CreateAdd: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Child', Child)