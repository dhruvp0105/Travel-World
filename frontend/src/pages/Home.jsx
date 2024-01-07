import React from 'react'
import '../styles/home.css'
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import experienceImg from '../assets/images/experience.png'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import { Col, Container, Row } from 'reactstrap'
import Subtitle from '../shared/Subtitle'
import Searchbar from '../shared/Searchbar'
import ServiceList from '../services/ServiceList'
import FeaturedToursList from '../compononets/featured-tours/FeaturedToursList'
import MasonryImageGallery from '../compononets/Image-gallery/MasonryImageGallery'
import Newsletter from '../shared/Newsletter'
import Testimonial from '../compononets/Testimonial/Testimonial'

const Home = () => {
    return (
        <>
            <section className='main_content'>
                <Container>
                    <Row>
                        <Col lg='6'>
                            <div className="hero_content">
                                <div className="hero_subtitle d-flex align-items-center">
                                    <Subtitle subtitle={'Know Before You Go'}></Subtitle>
                                    <img src={worldImg} alt='img' />
                                </div>

                                <h1>Traveling opens the door to creating
                                    <span className='highlight'> memories</span>
                                </h1>

                                <p>Travelling is an experience that can teach us so many things that you cannot possibly learn while living at home. Firstly, it teaches you how to make new friends. The world is full of people who love interacting. You get to make friends when you travel to new places and spend quality time with them.</p>

                            </div>
                        </Col>

                        <Col lg='2'>
                            <div className="hero_img-box">
                                <img src={heroImg} alt='img' />
                            </div>
                        </Col>

                        <Col lg='2'>
                            <div className="hero_img-box mt-4">
                                <video src={heroVideo} alt='img' controls />
                            </div>
                        </Col>

                        <Col lg='2'>
                            <div className="hero_img-box mt-5">
                                <img src={heroImg02} alt='img' />
                            </div>
                        </Col>

                        <Searchbar />
                    </Row>

                </Container>
            </section>

            <section className='mt-4'>
                <Container>
                    <Row>
                        <Col lg='3'>
                            <h5 className='service_subtitle'>What we serve</h5>
                            <h3 className='service_title'>We offer our best services</h3>
                        </Col>

                        <ServiceList />
                    </Row>
                </Container>
            </section>

            <section className='featured_content'>
                <Container>
                    <Row>
                        <Col lg='12' >
                            <div className="featured_heading">
                                <h5 className='featured_subtitle'>Explore</h5>
                            </div>
                            <h2 className='featured_tour-title'>Our featured tours</h2>
                        </Col>
                        <FeaturedToursList />
                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <Row>
                        <Col lg='6'>
                            <div className="experience_content mt-4">
                                <div className="experience_heading">
                                    <h5 className='experience_subtitle'>Experience</h5>
                                </div>
                                <h2 className='mt-3'>With our all experience <br />we will serve you</h2>
                                <p>Tour guides accompany groups of visitors to tourist attractions, whether on day trips or longer visits, and give them information and insights that help them make the most of the experience.</p>
                            </div>

                            <div className="counter_wrapper d-flex align-items-center gap-5">
                                <div className="counter_box">
                                    <span>12k+</span>
                                    <h6>Successful Trip</h6>
                                </div>
                                <div className="counter_box">
                                    <span>2k+</span>
                                    <h6>Regular clients</h6>
                                </div>
                                <div className="counter_box">
                                    <span>15</span>
                                    <h6>Years experience</h6>
                                </div>
                            </div>
                        </Col>

                        <Col lg='6'>
                            <div className="experience_img">
                                <img src={experienceImg} alt='img' />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <Row>
                        <Col lg='12'>
                            <div className="featured_heading">
                                <h5 className='featured_subtitle'>Gallery</h5>
                            </div>
                            <h2 className='gallery_title'>Visit our customers tour gallery</h2>
                        </Col>
                        <Col lg='12'>
                            <MasonryImageGallery />
                        </Col>
                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <Row>
                        <Col lg='12'>
                            <div className="testimonial_heading">
                                <h5 className='testimonial_subtitle'>Fans Love</h5>
                            </div>
                            <h2 className='testimonial_title'>What our fans say about us</h2>
                        </Col>


                        <Testimonial />
                    </Row>
                </Container>
            </section>

            <Newsletter />
        </>
    )
}

export default Home