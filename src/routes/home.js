const express = require('express')
const postCollections = require('../controllers/postCollection')
const router = express.Router()
const auth = require('../middlewares/auth')

//Metodos Post of post
router.post('/', auth, postCollections.Post)

//Metodos Get of post
router.get('/', postCollections.Get)


//Metodos Post of Banner
router.post('/banner', auth, postCollections.PostBanner)

//Metodos Get of Banner
router.put('/banner/:idBanner', auth, postCollections.PutBanner)


module.exports = router;