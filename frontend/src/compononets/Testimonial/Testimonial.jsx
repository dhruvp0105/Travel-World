import React from 'react'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Col } from 'reactstrap';

const Testimonial = () => {

    const data = [
        {
            name: 'John Morgan',
            image: ava01,
            review: 'We traveled to Bhutan from 14-23 December, 2023. It was one of the best trips ever. Bhutan Maitreya Tusita travels did a fantastic job of organising this trip for us. Everything was planned, meticulous, customised, comfortable.'
        },
        {
            name: 'Ellie Anderson',
            image: ava02,
            review: 'We had an exciting trip with all the best management from Tripenure. Our advisor Mr. Altaf was really good and supportive all the time.'
        },
        {
            name: 'Rigo Louie',
            image: ava03,
            review: 'We planned the trip with TRAVELUP SOLUTIONS for Europe.. it was very wonderful trip and we well organized. Special thanks to Ajay who were actively available for my queries.'
        },
        {
            name: 'Nia Adebayo',
            image: ava02,
            review: 'Awesome experience of North East. This services help me to really enjoy with my family. I spend some memorable time and cherish it.'
        }
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };

    return (
        <>
            <div className="mt-20" style={{ background: 'rgb(255, 250, 162)', borderRadius: '50px',border:'1px solid orange' }}>
                <Slider {...settings} >
                    {
                        data.map((item) => (
                            <Col lg='3' className="px-4">
                                <div className='gap-1'>
                                    <div className='mt-3'>
                                        <img src={item.image} alt='img' style={{ width: '50%', borderRadius: '100px', marginLeft: 'auto', marginRight: 'auto' }} />
                                    </div>
                                    <div className='mt-2'>
                                        <h4 className='text-center'>{item.name}</h4>
                                        <p style={{ fontSize: '0.9rem' }} className="mt-3">{item.review}</p>
                                    </div>
                                </div>
                            </Col>
                        ))
                    }
                </Slider>
            </div>
        </>
    )
}

export default Testimonial