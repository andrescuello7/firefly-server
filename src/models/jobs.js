const mongoose = require('mongoose')

const Jobs = mongoose.Schema({
    user: {
        type: String,
    },
    photo: {
        type: String
    },
    title: {
        type: String,
        tim: true
    },
    description: {
        type: String,
        tim: true
    },
    child: {
        type: String,
        required: true,
    },
    inWeek: {
        type: String,
    },
    inDay: {
        type: String,
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

module.exports = mongoose.model('Jobs', Jobs)