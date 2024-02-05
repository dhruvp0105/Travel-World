import React, { useContext, useRef } from 'react'
import { Button, Container, Row } from 'reactstrap'
import logo from '../../assets/images/logo.png'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import './header.css'
import { useEffect } from 'react';
import { AuthContext } from '../context/AuthContect';

const Header = () => {

    const headerRef = useRef(null);
    const navigate = useNavigate()

    const { user, dispatch } = useContext(AuthContext)

    const logout = () => {
        dispatch({ type: 'LOGOUT' })
        navigate('/')
    }
    const stickyHeaderFunc = () => {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
                headerRef.current.classList.add('sticky_header')
            }
            else {
                headerRef.current.classList.remove('sticky_header')
            }
        })
    }

    useEffect(() => {
        stickyHeaderFunc()
        return window.removeEventListener('scroll', stickyHeaderFunc)
    })

    const nav_links = [
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
    return (
        <header className='header' ref={headerRef}>
            <Container>
                <Row>
                    <div className='nav_wrapper d-flex align-items-center justify-content-between'>

                        <div className="logo">
                            <img src={logo} alt='logo' />
                        </div>

                        <div className="navigation">
                            <ul className='menu d-flex align-items-center gap-5'>
                                {
                                    nav_links.map((item, index) => (
                                        <li className="nav_item" key={index}>
                                            <NavLink to={item.path} className={navClass => navClass.isActive ? "active_link" : ""} >{item.display}</NavLink>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>

                        <div className="nav_right d-flex align-items-center gap-4">
                            <div className="nav_btns d-flex align-items-center gap-4">

                                {
                                    user ? (<>
                                        <h5 className='mb-0'>{user.username}</h5>
                                        <Button className='btn btn-dark' onClick={logout}>LOGOUT</Button>
                                    </>
                                    ) :
                                        (
                                            <>
                                                <Button className='login_btn'><Link to='/login'>Login</Link></Button>
                                                <Button className='reg_btn'><Link to='/register'>Register</Link></Button>
                                            </>
                                        )
                                }

                            </div>

                            <span className='mobile_menu'>
                                <MenuIcon />
                            </span>
                        </div>
                    </div>
                </Row>
            </Container>
        </header>
    )
}

export default Header