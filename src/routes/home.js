const express = require('express')
const collections = require('../controllers/postCollection')
const router = express.Router()
const auth = require('../middlewares/auth')

//Metodos Post
router.post('/', auth, collections.Post)

//Metodos Get
router.get('/', collections.Get)

module.exports = router;