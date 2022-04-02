const mongoose = require('mongoose')

const Banner = mongoose.Schema({
    title: {
        type: String,
        required: true,
        tim: true
    },
    description: {
        type: String,
        required: true,
        tim: true
    },
    createBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    photo: {
        type: String
    },
    CreateAdd: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Banner', Banner)