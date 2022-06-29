const express = require('express');
const postCollections = require('../controllers/postCollection');
const imagesCollections = require('../controllers/imagesCollection');
const router = express.Router();
const auth = require('../middlewares/auth');

//Metodos Get, Post, Delete of post
router.get('/', postCollections.Get);
router.post('/', auth, postCollections.Post);
router.delete('/:idDelete', postCollections.Delete);


//Metodos Get, Post, Put of banner
router.get('/banner', postCollections.GetBanner);
router.post('/banner', auth, postCollections.PostBanner);
router.put('/banner/:idBanner', auth, postCollections.PutBanner);

//Metodos Get, Post, Delete of images
router.get('/images', imagesCollections.Get);
router.post('/images', auth, imagesCollections.Post);
router.delete('/images/:idDelete', imagesCollections.Delete);

module.exports = router;