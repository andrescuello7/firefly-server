const mongoose = require('mongoose')

const Calendar = mongoose.Schema({
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
    CreateDateTime: {
        type: Date,
        required: true
    },
    createBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    CreateAdd: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Calendar', Calendar)