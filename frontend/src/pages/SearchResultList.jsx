import React, { useState } from 'react'
import CommonSection from '../shared/CommonSection'
import { Col, Container, Row } from 'reactstrap'
import { useLocation } from 'react-router-dom'
import TourCard from '../shared/TourCard'
import Newsletter from '../shared/Newsletter'

const SearchResultList = () => {

  const location = useLocation();
  console.log(location)

  const [data] = useState(location.state)
  console.log(data)
  return (
    <>
      <CommonSection title={'Tour Search Result'} />
      <section>
        <Container>
          <Row>
            {
              data.length === 0 ? <h2 className='text-center mt-5'>No tour found</h2> : data.map((tour) =>
                <Col lg='3' className='mb-4 mt-5' key={tour._id}>
                  <TourCard tour={tour} />
                </Col>
              )
            }
          </Row>
        </Container>
      </section>
      <Newsletter/>

    </>
  )
}

export default SearchResultList