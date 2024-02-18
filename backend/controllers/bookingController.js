const booking = require('../models/booking')
const Razorpay = require('razorpay')
// const crypto = require('crypto')

// const express = require('express');
// const app = express();
// app.use(express.json())

const dotenv = require('dotenv')

dotenv.config();

const RAZORPAY_ID_KEY = process.env.RAZORPAY_ID_KEY;
const RAZORPAY_SECRET_KEY = process.env.RAZORPAY_SECRET_KEY


const razorpayInstance = new Razorpay({
    key_id: RAZORPAY_ID_KEY,
    key_secret: RAZORPAY_SECRET_KEY
})


const createBooking = async (req, res) => {

    // console.log("Request is : ", req.body)

    // console.log("razorpay id is", RAZORPAY_ID_KEY)
    // console.log("Razorpay secret key is", RAZORPAY_SECRET_KEY)

    // console.log("Amt : ", req.body.amount)

    try {
        const options = {
            amount: Number(req.body.amount) * 100,
            currency: "INR"
        }

        const order = await razorpayInstance.orders.create(options);
        // console.log("Order is", order.id)

        const newBooking = new booking(req.body)
        try {
            const savedBooking = await newBooking.save();
            res.status(200).json({ success: true, message: "Your tour is booked", data: savedBooking ,orderId: order.id})
        }
        catch (error) {
            res.status(500).json({ success: false, message: "Failed to Book tour" })
        }


        // res.status(200).json({ orderId: order.id });
    }
    catch (error) {
        res.status(500).json({ error: error.message })
        // console.log("errpr", error)
    }

    // const newBooking = new booking(req.body)
    // try {
    //     const savedBooking = await newBooking.save();
    //     res.status(200).json({ success: true, message: "Your tour is booked", data: savedBooking })
    // }
    // catch (error) {
    //     res.status(500).json({ success: false, message: "Failed to Book tour" })
    // }
}


const paymentVerification = async (req, res) => {

    res.redirect('http://localhost:3000/paymentsuccess');

    // try {
    //     // console.log("Ok");
    //     // res.status(200).json(req.body);
    //     console.log(req.body);
    //     const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;


    //     const body = razorpay_order_id + "|" + razorpay_payment_id;

    //     const expectedSignature = crypto.createHmac("sha256", RAZORPAY_SECRET_KEY).update(body.toString()).digest("hex");

    //     // console.log("sign receives", razorpay_signature);
    //     // console.log("sign generated", expectedSignature);

    //     const isAuthentic = expectedSignature === razorpay_signature;


    //     if (isAuthentic) {

    //         await booking.create({
    //             razorpay_order_id,
    //             razorpay_payment_id,
    //             razorpay_signature,

    //         });
    //     } else {

    //         res.status(400).json({
    //             success: false,
    //         });
    //     }
    // }
    // catch (error) {
    //     res.status(500).json({ error: "Why" });
    // }
}


const getBooking = async (req, res) => {
    const id = req.params.id

    try {
        const book = await booking.findById(id);
        res.status(200).json({ success: true, message: "Successfull", data: book })
    }

    catch (error) {
        res.status(500).json({ success: true, message: "not found" })
    }
}

const getAllBooking = async (req, res) => {

    try {
        const book = await booking.findById();
        res.status(200).json({ success: true, message: "Successfull", data: book })
    }

    catch (error) {
        res.status(500).json({ success: true, message: "not found" })
    }
}


module.exports = { createBooking, paymentVerification, getBooking, getAllBooking, };