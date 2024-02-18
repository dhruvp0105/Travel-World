import React from 'react'
import CommonSection from '../shared/CommonSection'
import { Col, Container, Row } from 'reactstrap'
import '../styles/ContactUs.css'

const ContactUs = () => {
    return (
        <>
            <CommonSection title="Feel Free To Contact Us" />

            <Container>

                <Row className='sec_sp'>
                    <Col lg="5" className='mb-5'>
                        <h1 className='color_sec py-4 mt-5'>Get in touch</h1>
                        <address>
                            <strong>Email : <span className='content'>abc@gmail.com</span></strong>
                            <br></br>
                            <br></br>
                            <p>
                                <strong>Phone : <span className='content'>+91 9870239345</span></strong>
                            </p>
                        </address>
                        <p>We value your feedback and inquiries. Whether you have a question about our products, need assistance with an order, or simply want to share your thoughts, we're here to help! Our dedicated customer support team is ready to assist you.</p>
                    </Col>

                    <Col lg="7" className='d-flex align-items-center'>
                        <form className='contact_form w-100'>
                            <Row>
                                <Col lg="6">
                                    <input className='form-control' id='name' name='name' placeholder='Username' type='text'></input>
                                </Col>

                                <Col lg="6">
                                    <input className='form-control rounded-o' id='email' name='email' placeholder='Email' type='email'></input>
                                </Col>
                            </Row>

                            <textarea className='form-control rounded-0 mt-4' id='message' name='message' placeholder='Message' rows="5"></textarea>
                            <br></br>
                            <Row>
                                <Col lg="12" className='form-group'>
                                    <button className='sub_btn' type='submit'>Submit</button>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119066.54586608415!2d72.73989449431366!3d21.15918020350202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1708256973434!5m2!1sen!2sin" width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='mt-5'></iframe>

        </>
    )
}

export default ContactUs