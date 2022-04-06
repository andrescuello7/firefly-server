const express = require('express')
const postCollections = require('../controllers/postCollection')
const router = express.Router()
const auth = require('../middlewares/auth')

//Metodos Get, Post, Delete of post
router.get('/', postCollections.Get)
router.post('/', auth, postCollections.Post)
router.delete('/:idDelete', postCollections.Delete)


//Metodos Get, Post, Put of banner
router.get('/banner', postCollections.GetBanner)
router.post('/banner', auth, postCollections.PostBanner)
router.put('/banner/:idBanner', auth, postCollections.PutBanner)


module.exports = router;