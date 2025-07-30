import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import CommonSection from '../shared/CommonSection';
import '../styles/tours.css';
import TourCard from './../shared/TourCard';
import SearchBar from './../shared/SearchBar';
import tourData from '../assets/data/tours';

const Tours = () => {
  return (
    <>
      <CommonSection title="All Tours" />

      <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            {tourData.map((tour) => (
              <Col lg="3" className="mb-4" key={tour.id}>
                <TourCard tour={tour} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Tours;
