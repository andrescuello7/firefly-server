const mongoose = require('mongoose')

const Images = mongoose.Schema({
    createBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    photo: {
        required: true,
        type: String
    },
    CreateAdd: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Images', Images)