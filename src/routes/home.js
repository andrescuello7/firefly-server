const express = require('express')
const postCollections = require('../controllers/postCollection')
const bannerCollections = require('../controllers/bannerCollection')
const calendarCollection = require('../controllers/calendarCollection')
const jobsCollection = require('../controllers/jobsCollection')
const imagesCollections = require('../controllers/imagesCollection')
const router = express.Router()
const auth = require('../middlewares/auth')

//Metodos Get, Post, Delete of post
router.get('/', postCollections.Get)
router.post('/', auth, postCollections.Post)
router.delete('/:idDelete', auth, postCollections.Delete)

//Metodos Get, Post, Put of banner
router.get('/banner', bannerCollections.GetBanner)
router.post('/banner', auth, bannerCollections.PostBanner)
router.put('/banner/:idBanner', auth, bannerCollections.PutBanner)


//Metodos Get, Post, Put of job
router.get('/jobs', jobsCollection.JobGet)
router.post('/jobs', auth, jobsCollection.JobPost)
router.put('/jobs/:idJobs', auth, jobsCollection.JobPut)
router.delete('/jobs/:idDelete', auth, jobsCollection.JobDelete)

//Metodos Get, Post, Put of calendar
router.get('/calendar', calendarCollection.CalendarGet)
router.post('/calendar', auth, calendarCollection.CalendarPost)
router.put('/calendar/:idDate', auth, calendarCollection.CalendarPut)
router.delete('/calendar/:idDelete', auth, calendarCollection.CalendarDelete)

//Metodos Get, Post, Delete of images
router.get('/images', imagesCollections.Get);
router.post('/images', auth, imagesCollections.Post);
router.delete('/images/:idDelete', imagesCollections.Delete);

module.exports = router;