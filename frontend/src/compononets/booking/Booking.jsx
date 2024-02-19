import React, { useContext, useEffect, useState } from 'react'
import './booking.css'
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import { Button, Form, FormGroup, ListGroup, ListGroupItem } from 'reactstrap';
import CloseIcon from '@mui/icons-material/Close';
import { AuthContext } from '../context/AuthContect';
import { BASE_URL } from '../../utils/config';
import { useNavigate } from 'react-router-dom';

const Booking = ({ tour, avgRating }) => {

  const navigate = useNavigate()
  // console.log("Tour", tour)
  // console.log("AvgRating", avgRating)

  const { price, title } = tour || {};

  const { user } = useContext(AuthContext);

  const [totalcost, setTotalCost] = useState(0);


  const [booking, setBooking] = useState({
    userId: user && user._id,
    userEmail: user && user.email,
    tourName: title,
    fullName: '',
    phone: '',
    guestSize: 1,
    bookAt: '',
    amount: totalcost
  })

  const handleChange = (e) => {
    setBooking((prev) => ({
      ...prev, [e.target.id]: e.target.value
    }))
  }

  const serviceFee = 10

  useEffect(() => {

    const totalAmount = Number(price) * Number(booking.guestSize) + Number(serviceFee);
    setTotalCost(totalAmount);

    setBooking((prev) => ({
      ...prev,
      amount: totalAmount
    }))

  }, [price, booking.guestSize])

  const handleClick = async () => {
    // e.preventDefault();
    try {

      // const key = await fetch('http://localhost:4000/getkey');
      const key = await fetch('https://travel-world-six4.onrender.com/getkey');


      // console.log("Good Morning", key)

      if (!key.ok) {
        alert("failed to fetch key")
      }

      const key1 = await key.json()

      const key2 = key1 || {}
      // console.log("Key2", key2.key)



      // console.log("And the key : ", key1)
      // console.log("Our key is............ ", key);

      // console.log("And the amount is : ", key.amount)

      if (!user || user === undefined || user === null) {
        alert("Please Sign in")
        return navigate('/login')
      }

      const res3 = await fetch(`${BASE_URL}/booking`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(booking)
      })

      const data = await res3.json(); // Parse the JSON data from the response
      if (res3.ok) {

        // console.log("Response from backend is:", data);
        // console.log("Order ID is:", data.orderId); // Access the order ID from the data

        // console.log('Request Payload:', JSON.stringify({ amount: totalcost }));
      } else {
        console.error("Error from backend:", res3.statusText);
        // Handle the error or show an appropriate message to the user
      }
      const options = {
        key: key2.key,
        amount: totalcost * 100,
        currency: "INR",
        name: "Dhruv Panchal",
        description: "Razorpay Integration",
        image: "https://avatars.githubusercontent.com/u/25058652?v=4",
        order_id: data.orderId,
        callback_url: 'http://localhost:4000/api/v1/booking/paymentverification',
        prefill: {
          "name": "Gaurav Kumar",
          "email": "gaurav.kumar@example.com",
          "contact": "6355612098"
        },
        notes: {
          "address": "Razorpay Corporate Office"
        },
        theme: {
          "color": "#3399cc"
        }
      }


      const razor = new window.Razorpay(options);

      // console.log("Hello World")

      razor.open();

      // const result = await res.json()

      // if (!res.ok) {
      //   return alert(result.message)
      // }
    }
    catch (error) {
      alert(error.message)
      console.log("error is", error)
    }
  }

  return (
    <div className='booking'>
      <div className="booking-top d-flex align-items-center justify-content-between">
        <h3>₹{price} <span>/per person</span></h3>
        <span className='tour_rating d-flex align-items-center'>
          <i><StarOutlinedIcon style={{ 'color': 'orange' }} /></i>
          {avgRating === 0 ? null : avgRating}
        </span>
      </div>

      <div className="booking-form">
        <h5>Information</h5>
        <Form className='booking_info-form'>
          <FormGroup>
            <input type='text' placeholder='Full Name' id="fullName" required onChange={handleChange}></input>
          </FormGroup>
          <FormGroup>
            <input type='number' placeholder='Phone' id="phone" required onChange={handleChange}></input>
          </FormGroup>
          <FormGroup className='d-flex align-items-center gap-3'>
            <input type='date' placeholder='' id="bookAt" required onChange={handleChange}></input>
            <input type='number' placeholder='Guest' id="guestSize" required onChange={handleChange}></input>
          </FormGroup>
        </Form>
      </div>

      <div className="booking-bottom">
        <ListGroup>
          <ListGroupItem className='border-0 px-0'>
            <h5 className='d-flex align-items-center'>₹{price} &nbsp;<i><CloseIcon style={{ 'fontSize': '1.1rem' }} /></i> &nbsp;1 person</h5>
            <span>₹{price}</span>
          </ListGroupItem>

          <ListGroupItem className='border-0 px-0'>
            <h5>Service charge</h5>
            <span>₹{serviceFee}</span>
          </ListGroupItem>

          <ListGroupItem className='border-0 px-0 total'>
            <h5>Total</h5>
            <span>₹{totalcost}</span>
          </ListGroupItem>
        </ListGroup>

        <Button className='btn_booking w-100 mt-4' onClick={handleClick}>Book Now</Button>
      </div>
    </div>
  )
}

export default Booking