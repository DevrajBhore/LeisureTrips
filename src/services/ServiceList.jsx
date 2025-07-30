import React from 'react'
import ServiceCard from './ServiceCard' 
import {Col} from "reactstrap";

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const ServiceData = [
    {
        imgUrl: weatherImg,
        title: 'Weather Forecast',
        desc: 'Get the latest weather updates of your destination'
    },
    {
        imgUrl: guideImg,
        title: 'Local Guide',
        desc: 'Get a local guide to explore the hidden gems'
    },
    {
        imgUrl: customizationImg,
        title: 'Customization',
        desc: 'Customize your trip according to your preferences'
    }
]

const ServiceList = () => {
  return (
    <>
     {
        ServiceData.map((item, index) => 
          <Col lg='3' key={index}>
            <ServiceCard item={item}/>
          </Col>)
     }
    </>
  )
}

export default ServiceList
