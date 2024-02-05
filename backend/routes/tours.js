const express = require('express')
const { createTour, updateTour, deleteTour, getSingleTour, getAllTours, getTourBySearch, getFeaturedTours, getTourCount } = require('../controllers/tourController');
const { verifyAdmin } = require('../utils/verifyToken');

const router = express.Router()

//create new tour
router.post('/createTour', verifyAdmin, createTour);

//update Tour
router.put('/updateTour/:id', verifyAdmin, updateTour)

//delet Tour
router.delete('/deleteTour/:id', verifyAdmin, deleteTour)

//get single Tour
router.get('/getSingleTour/:id', getSingleTour)

//get all tour
router.get('/getAllTours', getAllTours)

//search tour
router.get('/search', getTourBySearch)

//get featured tours
router.get('/getFeaturedTours', getFeaturedTours);

//get tour count
router.get('/getTourCount', getTourCount)

module.exports = router;