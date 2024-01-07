import React from 'react'
import './newsletter.css'
import maleTourist from '../assets/images/male-tourist.png'
import { Col, Container, Row } from 'reactstrap'

const Newsletter = () => {
    return (
        <section className='newsletter'>
            <Container>
                <Row>
                    <Col lg='6'>
                        <div className="newsletter_content">
                            <h2>Subscribe now to get useful traveling information.</h2>
                            <div className="newsletter_input">
                                <input type='email' placeholder='Enter your email'></input>
                                <button className='btn newsletter_btn'>Subscribe</button>
                            </div>
                            <p>From flight deals and encrypted messaging to translation services and personal health, these apps can help you make more informed and safe decisions before you leave and while you’re away.</p>
                        </div>
                    </Col>

                    <Col lg='6'>
                        <div className="newsletter_img">
                            <img src={maleTourist} alt='img' />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Newsletter