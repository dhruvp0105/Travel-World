import React from 'react'
import './footer.css'
import { Col, Container, ListGroup, ListGroupItem, Row } from 'reactstrap'
import logo from '../../assets/images/logo.png'
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const quick_links = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/about',
    display: 'About'
  },
  {
    path: '/tours',
    display: 'Tours'
  }
]

const quick_links2 = [
  {
    path: '/gallery',
    display: 'Gallery'
  },
  {
    path: '/login',
    display: 'Login'
  },
  {
    path: '/register',
    display: 'Resgister'
  }
]

const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='3'>
            <div className="logo">
              <img src={logo} alt='img' />
              <p>Tourism is generally regarded as traveling to a different location for business or pleasure purposes.</p>
              <div className="social_links d-flex align-items-center gap-4">
                <span>
                  <Link to='#'><YouTubeIcon /></Link>
                </span>
                <span>
                  <Link to='#'><GitHubIcon /></Link>
                </span>
                <span>
                  <Link to='#'><FacebookIcon /></Link>
                </span>
                <span>
                  <Link to='#'><InstagramIcon /></Link>
                </span>
              </div>
            </div>
          </Col>

          <Col lg='3'>
            <h5 className='footer_link-title'>
              Discover
            </h5>
            <ListGroup className='footer_quick-links'>
              {
                quick_links.map((item, index) => (
                  <ListGroupItem key={index} className='ps-0 border-0'>
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>

          <Col lg='3'>
            <h5 className='footer_link-title'>
              Quick Links
            </h5>
            <ListGroup className='footer_quick-links'>
              {
                quick_links2.map((item, index) => (
                  <ListGroupItem key={index} className='ps-0 border-0'>
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>

          <Col lg='3'>
            <h5 className='footer_link-title'>
              Contact
            </h5>
            <ListGroup className='footer_quick-links'>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                <h6 className='mb-0 d-flex align-items-center gap-2'>
                  <span><i><LocationOnIcon /></i></span>
                  Address :
                </h6>
                <p className='mb-0'>Surat, Gujarat, India</p>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                <h6 className='mb-0 d-flex align-items-center gap-2'>
                  <span><i><EmailIcon /></i></span>
                  Email :
                </h6>
                <p className='mb-0'>abc@gmail.com</p>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                <h6 className='mb-0 d-flex align-items-center gap-2'>
                  <span><i><PhoneIcon /></i></span>
                  Phone :
                </h6>
                <p className='mb-0'>+91 7778013500</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg='12' className='text-center pt-5'>
            <p className='copyright'>Copyright {year}, design and develop by Dhruv Panchal. All rights reserved.</p>
          </Col>

        </Row>
      </Container>
    </footer>
  )
}

export default Footer