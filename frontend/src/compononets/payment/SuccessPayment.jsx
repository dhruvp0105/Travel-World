import React from 'react'
import { Button, Col, Container, Row } from 'reactstrap'
import '../../styles/success-payment.css'
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { Link } from 'react-router-dom';

const SuccessPayment = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg='12' className='pt-5 text-center mt-3'>
            <div className="thank-you">
              <span><TaskAltIcon/></span>
              <h1 className='mb-3 fw-semibold'>Thank You</h1>
              <h3 className='mb-4'>Your Tour is Booked.</h3>

              <Button className='btn_home'><Link className='home_link' to='/home'>Back to Home</Link></Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default SuccessPayment