import React, { useContext, useState } from 'react'
import { Button, Col, Container, Form, FormGroup, Row } from 'reactstrap'
import regImg from '../assets/images/register.png'
import userImg from '../assets/images/user.png'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/login.css'
import { AuthContext } from '../compononets/context/AuthContect'
import { BASE_URL } from '../utils/config'

const Register = () => {

  const [credentials, setCredentials] = useState({
    username: undefined,
    email: undefined,
    password: undefined
  })

  const { dispatch } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleChange = (e) => {
    setCredentials((prev) => ({
      ...prev, [e.target.id]: e.target.value
    }))
  }

  const handleclick = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: 'post',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(credentials)
      })
      const result = await res.json();

      console.log(result)

      if (!res.ok) {
        alert(result.message)
      }

      dispatch({ type: 'REGISTER_SUCCESS' })
      navigate('/login')
    }
    catch (error) {
      alert(error.message)
    }
  }
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg='8' className='m-auto'>
              <div className="login_container d-flex justify-content-between">
                <div className="login_img">
                  <img src={regImg} alt='img' />
                </div>

                <div className="login-form">
                  <div className="user">
                    <img src={userImg} alt='img' />
                  </div>
                  <h2>Register</h2>

                  <Form onSubmit={handleclick}>
                    <FormGroup>
                      <input type='text' placeholder='Username' required id="username" onChange={handleChange}></input>
                    </FormGroup>

                    <FormGroup>
                      <input type='email' placeholder='Email' required id="email" onChange={handleChange}></input>
                    </FormGroup>

                    <FormGroup>
                      <input type='password' placeholder='Password' required id='password' onChange={handleChange}></input>
                    </FormGroup>

                    <Button className='login-btn' type='submit'>Create account</Button>
                  </Form>
                  <p>Already have an account? <Link to='/login'>Login</Link></p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Register