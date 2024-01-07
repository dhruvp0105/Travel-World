import React, { useEffect, useState } from 'react'
import CommonSection from '../shared/CommonSection'
import '../styles/tour.css'
import { Col, Container, Row } from 'reactstrap'
import Searchbar from '../shared/Searchbar'
import tours from '../assets/data/Tours'
import TourCard from '../shared/TourCard'
import Newsletter from '../shared/Newsletter'

const Tours = () => {

  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const pages = Math.ceil(5 / 4)
    setPageCount(pages)
  }, [page])

  return (
    <>
      <CommonSection title="All Tours" />
      <section>
        <Container>
          <Row>
            <Searchbar />
          </Row>
        </Container>
      </section>

      <section className='pt-0'>
        <Container>
          <Row>
            {
              tours.map((tour) => (
                <Col lg='3' key={tour.id} className='mb-4'>
                  <TourCard tour={tour} />
                </Col>
              ))
            }

            <Col lg='12'>
              <div className='pagination d-flex align-items-center justify-content-center mt-4 gap-3'>
                {
                  [...Array(pageCount).keys()].map((number) => (
                    <span key={number} onClick={() => setPage(number)} className={page === number ? 'active_page' : ""}>
                      {number + 1}
                    </span>
                  ))
                }
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Newsletter/>
    </>
  )
}

export default Tours