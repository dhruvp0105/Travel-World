const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const Connection = require('./database/db');
const router = require('./routes/tours');
const userRoute = require('./routes/users');
const authRoute = require('./routes/auth');
const reviewRoute = require('./routes/reviews');
const bookingRoute = require('./routes/booking');

dotenv.config();
const app = express();
const port = process.env.PORT || 8000

const corsOptions = {
    origin: true,
    credentials: true
}

Connection();

//middleware
app.use(express.json());
app.use(cors(corsOptions))
app.use(cookieParser())

app.get('/getkey', (req, res) => {
    res.status(200).json({ key: process.env.RAZORPAY_ID_KEY });
})

app.use('/api/v1/tour', router);
app.use('/api/v1/user', userRoute)
app.use('/api/v1/auth', authRoute)
app.use('/api/v1/review', reviewRoute)
app.use('/api/v1/booking', bookingRoute)

app.listen(port, () => {
    console.log('server listening on port ', port)
})

