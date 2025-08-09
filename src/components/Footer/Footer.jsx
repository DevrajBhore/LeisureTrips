import React from 'react'
import './footer.css'
import {Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap'

import {Link} from 'react-router-dom'
import logo from '../../assets/images/LTlogo.png';

const quick_links2=[
  {
    path:'/gallery',
    display:'Gallery'
  },
  {
    path:'/login',
    display:'Login'
  },
  {
    path:'/register',
    display:'Register'
  }
]

const quick_links=[
  {
    path:'/home',
    display:'Home'
  },
  {
    path:'/about',
    display:'About'
  },
  {
    path:'/register',
    display:'Register'
  }
]

const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='3'>
            <div className="logo">
              <img src={logo} alt=''/>
              <p>I hope you'll like my project, I used react.js for the frontend and MongoDB, Expressjs for the backend</p>
              <div className="social__links d-flex align-items-center gap-4">
                <span>
                  <a href='https://www.instagram.com/devrajvbhore?igsh=aGhwdmtvYjh2OHht' target='_blank'><i class="ri-instagram-line"></i></a>
                </span>
                <span>
                  <a href='https://youtu.be/oHg5SJYRHA0?list=TLGGOzlLyDY4WSoyMzAzMjAyNQ' target='_blank'><i class="ri-youtube-line"></i></a>
                </span>
                <span>
                  <a href='https://youtu.be/oHg5SJYRHA0?list=TLGGOzlLyDY4WSoyMzAzMjAyNQ' target="_blank"><i class="ri-twitter-x-line"></i></a>
                </span>
              </div>
            </div>
          </Col>
          <Col lg='3'>
              <h5 className="footer_link-title">Discover</h5>
              <ListGroup className="footer__quick-links">
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
              <h5 className="footer_link-title">Quick Links</h5>
                  <ListGroup className="footer__quick-links">
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
            <h5 className="footer_link-title">Contacts</h5>
            <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3 background-color: rgb(187, 187, 238)'>
                <h6 className='mb-0 d-flex align-items-center gap-2'>
                 <span>
                   <i className='ri-map-pin-line'></i>
                 </span>
                   Address:
                </h6>
              <p className='mb-0'>Mumbai, Maharashtra, <b>India</b></p>
            </ListGroupItem>
            <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
               <h6 className='mb-0 d-flex align-items-center gap-2'>
                <span>
                 <i className='ri-mail-line'></i>
                </span>
                 Email:
              </h6>
               <p className='mb-0'>
              <a href="mailto:gothmomrfav@hotmail.com" className="contact-link">
              gothmomrfav@hotmail.com
              </a>
              </p>
              </ListGroupItem>
            <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
              <h6 className='mb-0 d-flex align-items-center gap-2'>
               <span>
            <i className='ri-phone-fill'></i>
            </span>
             Contact No.:
             </h6>
            <p className='mb-0'>
            <a href="tel:6949893869" className="contact-link">
             6949893869
           </a>
           </p>
           </ListGroupItem>

          </Col>
          <Col lg="12" className="text-center">
  <p className="copyright">
    Copyright © {new Date().getFullYear()}, designed and developed by <b>Devraj Bhore</b>. All rights reserved.
  </p>
</Col>

        </Row>
      </Container>
    </footer>
  )
} 

export default Footer