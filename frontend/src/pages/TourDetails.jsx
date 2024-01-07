import React, { useRef, useState } from 'react'
import '../styles/tour-details.css'
import { useParams } from 'react-router-dom'
import tours from '../assets/data/Tours'
import { Button, Col, Container, Form, ListGroup, Row } from 'reactstrap'
import calculateAvgRating from '../utils/avgRating'
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SocialDistanceIcon from '@mui/icons-material/SocialDistance';
import GroupsIcon from '@mui/icons-material/Groups';
import avatar from '../assets/images/avatar.jpg';

const TourDetails = () => {

  const { id } = useParams()
  const reviewMsgRef = useRef();
  const [tourrating, setTourRating] = useState(null);

  const tour = tours.find((tour) => tour.id === id)
  const { photo, title, desc, price, address, reviews, city, distance, maxGroupSize } = tour;
  const { totalRating, avgRating } = calculateAvgRating(reviews);
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  const submitHandler = (e) => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;
  }

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg='8'>
              <div className="tour_content">
                <img src={photo} alt='img' />
                <div className="tour_info">
                  <h2>{title}</h2>
                  <div className='d-flex align-items-center gap-5'>
                    <span className='tour_rating d-flex align-items-center gap-1'>
                      <i ><StarOutlinedIcon style={{ 'color': 'orange' }} /></i>
                      {calculateAvgRating === 0 ? null : avgRating}
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
                    <span><i><AttachMoneyIcon /></i>{price} /per person</span>
                    <span><i><SocialDistanceIcon /></i>{distance} k/m</span>
                    <span><i><GroupsIcon /></i>{maxGroupSize} people</span>
                  </div>

                  <h5>Description</h5>
                  <p>{desc}</p>
                </div>

                <div className='tour_reviews mt-4'>
                  <h4>Reviews ({reviews?.length} reviews)</h4>
                  <Form onSubmit={submitHandler()}>
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
                      reviews.map((review) => (
                        <div className="review_item">
                          <img src={avatar} alt='img' />
                          <div className="w-100">
                            <div className="d-flex align-items-center justify-content-between">
                              <div>
                                <h5>Muhib</h5>
                                <p>{new Date('01-18-2023').toLocaleDateString('en-US', options)}</p>
                              </div>
                              <span className='d-flex align-items-center'>
                                5<i><StarOutlinedIcon /></i>
                              </span>
                            </div>
                            <h6>Amazing tour</h6>
                          </div>
                        </div>
                      ))
                    }
                  </ListGroup>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default TourDetails