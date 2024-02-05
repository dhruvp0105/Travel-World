const express = require('express')
const { verifyUser, verifyAdmin } = require('../utils/verifyToken')
const { createBooking, paymentVerification,getBooking, getAllBooking} = require('../controllers/bookingController')

const bookingRoute = express.Router()

bookingRoute.post('/', verifyUser, createBooking)

bookingRoute.get('/:id', verifyUser,getBooking)
bookingRoute.get('/', verifyAdmin, getAllBooking)

bookingRoute.post('/paymentverification', paymentVerification);



module.exports = bookingRoute;