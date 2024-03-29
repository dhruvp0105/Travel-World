import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import Tours from '../pages/Tours'
import TourDetails from '../pages/TourDetails'
import Login from '../pages/Login'
import Register from '../pages/Register'
import SearchResultList from '../pages/SearchResultList'
import SuccessPayment from '../compononets/payment/SuccessPayment'
import ContactUs from '../pages/ContactUs'

const Routers = () => {
    return (
        <Routes>
            <Route exact path='/' element={<Navigate to='/home' />} />
            <Route exact path='/home' element={<Home />} />
            <Route exact path='/tours' element={<Tours />} />
            <Route exact path='/tour/:_id' element={<TourDetails />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/register' element={<Register />} />
            <Route exact path='/tour/search' element={<SearchResultList />} />
            <Route exact path='/paymentsuccess' element={<SuccessPayment />} />
            <Route exact path='/contact' element={<ContactUs />} />

        </Routes>
    )
}

export default Routers