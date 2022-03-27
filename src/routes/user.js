const express = require('express')
const collections = require('../controllers/userCollection')
const router = express.Router()
const auth = require('../middlewares/auth')

//Metodos Post
router.post('/', collections.Post)

//Metodos Get
router.get('/', collections.Users)

//Metodos Put
router.put('/:idUser', auth, collections.Put)

module.exports = router;