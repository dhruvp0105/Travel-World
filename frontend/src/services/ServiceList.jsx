import React from 'react'
import { Col } from 'reactstrap'

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'
import ServiceCard from './ServiceCard'

const serviceData = [
  {
    imgUrl: weatherImg,
    title: "Calculate Weather",
    desc: "We collect and process weather data from different sources such as global and local weather models, satellites, radars and a vast network of weather stations."
  },
  {
    imgUrl: guideImg,
    title: "Best Tour Guide",
    desc: "A perfect guide will be attentive and respectful to everyone in the group, making sure that everyone can see and hear well."
  },
  {
    imgUrl: customizationImg,
    title: "Customization",
    desc: "What is a Custom Tour ? A completely customized itinerary that is built accordingly to the wishes and necessities of a customer or group."
  },
]

const ServiceList = () => {
  return (
    <>
      {
        serviceData.map((item, index) =>
        (
          <Col lg='3' key={index}>
            <ServiceCard item={item} />
          </Col>
        )
        )
      }
    </>
  )
}

export default ServiceList