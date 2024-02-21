import React, { useContext, useEffect, useRef, useState } from 'react'
import '../styles/tour-details.css'
import { useNavigate, useParams } from 'react-router-dom'
import tours from '../assets/data/Tours'
import { Button, Col, Container, Form, ListGroup, Row } from 'reactstrap'
import calculateAvgRating from '../utils/avgRating'
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import SocialDistanceIcon from '@mui/icons-material/SocialDistance';
import GroupsIcon from '@mui/icons-material/Groups';
import avatar from '../assets/images/avatar.jpg';
import Booking from '../compononets/booking/Booking'
import useFetch from '../hooks/useFetch'
import { BASE_URL } from '../utils/config'
import { AuthContext } from '../compononets/context/AuthContect'

const TourDetails = () => {

  const navigate = useNavigate();

  const { _id } = useParams();

  const reviewMsgRef = useRef("");
  const [tourRating, setTourRating] = useState(null);

  const { user } = useContext(AuthContext)

  const { data: tour, error, loading } = useFetch(`${BASE_URL}/tour/getSingleTour/${_id}`);

  const [tourData] = tour || []; // Destructure the first object from the array, defaulting to an empty array
  const { address, city, desc, distance, maxGroupSize, photo, price, reviews, title } = tourData || {}; // Destructure properties, defaulting to an empty object

  // const [reviewData] = reviews || [];

  // console.log("Review Data",reviewData)

  // console.log("TourData review", tourData)
  // console.log("Reviews is ", reviews);
  const { totalRating, avgRating } = calculateAvgRating(reviews);

  // console.log("total",totalRating);
  // console.log("Avg",avgRating);


  const options = { day: 'numeric', month: 'long', year: 'numeric' };

  const submitHandler = async (e) => {
    e.preventDefault();
    const reviewtext = reviewMsgRef.current.value;



    try {
      if (!user || user === undefined || user === null) {
        alert("Please sign in")
        navigate('/login')
      }
      else {
        const reviewObj = {
          username: user.username,
          reviewtext,
          rating: tourRating
        }

        const res = await fetch(`${BASE_URL}/review/${_id}`, {
          method: 'post',
          headers: {
            'content-type': 'application/json'
          },
          credentials: 'include',
          body: JSON.stringify(reviewObj)
        })

        const result = await res.json();
        if (!res.ok) {
          return alert(result.message)
        }

        alert('review Submitted')
      }

      // console.log(result.message)
      // return alert(result.message)

    }
    catch (error) {
      alert(error.message)
      // console.log("Why error", error.message)
    }

    // alert(`${reviewtext},${tourRating}`);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [tour])

  return (
    <>
      <section>
        <Container>
          {
            loading &&
            <h4 className='text-center pt-5'>Loading....</h4>
          }
          {
            error &&
            <h4 className='text-center pt-5'>{error}</h4>
          }
          {
            !loading && !error &&
            <Row>
              <Col lg='8'>
                <div className="tour_content">
                  <img src={photo} alt='img' />
                  <div className="tour_info">
                    <h2>{title}</h2>
                    <div className='d-flex align-items-center gap-5'>
                      <span className='tour_rating d-flex align-items-center gap-1'>
                        <i ><StarOutlinedIcon style={{ 'color': 'orange' }} /></i>
                        {avgRating === 0 ? null : avgRating}
                        {
                          totalRating === 0 ? ("Not rated") : (<span>({reviews.length})</span>)
                        }
                      </span>

                      <span>
                        <LocationOnIcon />
                        {address}
                      </span>
                    </div>

                    <div className="tour_extra-details">
                      <span><i><LocationCityIcon /></i>{city}</span>
                      <span><i><CurrencyRupeeIcon /></i>{price} /per person</span>
                      <span><i><SocialDistanceIcon /></i>{distance} k/m</span>
                      <span><i><GroupsIcon /></i>{maxGroupSize} people</span>
                    </div>

                    <h5>Description</h5>
                    <p>{desc}</p>
                  </div>

                  <div className='tour_reviews mt-4'>
                    <h4>Reviews ({reviews?.length} reviews)</h4>
                    <Form onSubmit={submitHandler}>
                      <div className='d-flex align-items-center gap-3 mb-4 rating_group'>
                        <span onClick={() => setTourRating(1)}>1 <i><StarOutlinedIcon /></i></span>
                        <span onClick={() => setTourRating(2)}>2 <i><StarOutlinedIcon /></i></span>
                        <span onClick={() => setTourRating(3)}>3 <i><StarOutlinedIcon /></i></span>
                        <span onClick={() => setTourRating(4)}>4 <i><StarOutlinedIcon /></i></span>
                        <span onClick={() => setTourRating(5)}>5 <i><StarOutlinedIcon /></i></span>
                      </div>

                      <div className="review_input">
                        <input type='text' ref={reviewMsgRef} placeholder='share your thoughts' required></input>
                        <Button className='submit_btn text-white' type='submit'>Submit</Button>
                      </div>
                    </Form>

                    <ListGroup className='user_reviews'>
                      {
                        reviews && reviews.map((review) => (
                          <div className="review_item">
                            <img src={avatar} alt='img' />
                            <div className="w-100">
                              <div className="d-flex align-items-center justify-content-between">
                                <div>
                                  <h5>{review.username}</h5>
                                  <p>{new Date(review.createdAt).toLocaleDateString('en-US', options)}</p>
                                </div>
                                <span className='d-flex align-items-center'>
                                  {review.rating}<i><StarOutlinedIcon /></i>
                                </span>
                              </div>
                              <h6>{review.reviewtext}</h6>
                            </div>
                          </div>
                        ))
                      }
                    </ListGroup>
                  </div>
                </div>
              </Col>

              <Col lg='4'>
                <Booking tour={tourData} avgRating={avgRating} />
              </Col>
            </Row>
          }
        </Container>
      </section>
    </>
  )
}

export default TourDetails