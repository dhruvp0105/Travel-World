import React, { useContext, useState } from 'react'
import '../styles/login.css'
import loginImg from '../assets/images/login.png'
import userImg from '../assets/images/user.png'
import { Button, Col, Container, Form, FormGroup, Row } from 'reactstrap'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../compononets/context/AuthContect'
import { BASE_URL } from '../utils/config'

const Login = () => {

  const [credentials, setCredentials] = useState({
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

    dispatch({ type: 'LOGIN_START' })
    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: 'post',
        headers: {
          'content-type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(credentials)
      })

      const result = await res.json()
      console.log(result.data)

      if (!res.ok) {
        alert(result.message)
      }

      dispatch({ type: 'LOGIN_SUCCESS', payload: result.data })
      navigate('/')
    }
    catch (error) {
      dispatch({ type: 'LOGIN_FAILED', payload: error.message })
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
                  <img src={loginImg} alt='img' />
                </div>

                <div className="login-form">
                  <div className="user">
                    <img src={userImg} alt='img' />
                  </div>
                  <h2>Login</h2>

                  <Form onSubmit={handleclick}>
                    <FormGroup>
                      <input type='email' placeholder='Email' required id="email" onChange={handleChange}></input>
                    </FormGroup>

                    <FormGroup>
                      <input type='password' placeholder='Password' required id='password' onChange={handleChange}></input>
                    </FormGroup>

                    <Button className='login-btn' type='submit'>Login</Button>
                  </Form>
                  <p>Don't have an account? <Link to='/register'>Create</Link></p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Login