const express = require('express')
const userCollections = require('../controllers/userCollection')
const childCollections = require('../controllers/childCollection')
const router = express.Router()
const auth = require('../middlewares/auth')

//Metodos Usuario
router.post('/', userCollections.Post)
router.get('/', userCollections.Users)
router.put('/:idUser', auth, userCollections.Put)

//Metodos Child
router.post('/child/', auth, childCollections.PostChild)
router.get('/child/', childCollections.GetChild)
router.put('/child/:idUser', auth, childCollections.PutChild)
router.delete('/child/:idDelete', auth, childCollections.DeleteChild)

module.exports = router;