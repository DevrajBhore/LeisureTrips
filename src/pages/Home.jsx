import React from 'react'
import '../styles/home.css';
import { Container, Row, Col } from 'reactstrap';
import Subtitle from '../shared/Subtitle';
import hero1 from '../assets/images/hero1.mp4'
import hero2 from '../assets/images/hero2.mp4'
import hero3 from '../assets/images/hero3.mp4'
import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';
import MumImagesGallery from '../components/images-gallery/MumImagesGallery';

const Home = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d=flex align-items-center">
                  <Subtitle subtitle="Welcome to Leisure Trips" />
                </div>
                <h1>Enjoy the pleasure of traveling with us and create your own <span className='highlight'>memories</span></h1>
                <p id='para'>Travel opens the door to new experiences, cultures, and unforgettable memories. Through LeisureTrips, we can explore alots of hidden gems and explore more without compromising luxury and comfort!</p>
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero__img-box " >
                <video src={hero2} alt='video' autoPlay loop muted />
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero__img-box mt-4">
                <video src={hero1} alt='video' autoPlay loop muted />
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero__img-box mt-5">
                <video src={hero3} alt='video' autoPlay loop muted />
              </div>
            </Col>
            <SearchBar />
          </Row>
        </Container>

      </section>
      <section>
        <Container>
          <Row>
            <Col lg='3'>
              <h5 className='services__subtitle'>What we serve</h5>
              <h2 className='services__title'>We offer our best sevices</h2>
            </Col>
            < ServiceList />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-5'>
              <Subtitle subtitle={'Explore'} />
              <h2 className='featured__tour-title'>Our fratured tours</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Gallery'} />
              <h2 className="gallery">Veiw our tour gallery</h2>
            </Col>
            <Col lg='12'>
              <MumImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col>

            </Col>
          </Row>
        </Container>
      </section>

    </>
  )
}

export default Home  