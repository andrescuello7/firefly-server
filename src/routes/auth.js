const express = require('express')
const router = express.Router()
const collection = require('../controllers/authCollection')
const auth = require('../middlewares/auth')

//Metodos Get
router.get('/', auth, collection.Get)

//Metodos Post
router.post('/', collection.Post)

module.exports = router;