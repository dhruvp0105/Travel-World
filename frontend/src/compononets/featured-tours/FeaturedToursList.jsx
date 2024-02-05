import React from 'react'
import tourData from '../../assets/data/Tours'
import { Col } from 'reactstrap'
import TourCard from '../../shared/TourCard'
import useFetch from '../../hooks/useFetch'
import { BASE_URL } from '../../utils/config'

const FeaturedToursList = () => {

    const { data: featuredTours, error, loading } = useFetch(`${BASE_URL}/tour/getFeaturedTours`);

    return (
        <>
            {
                loading && <h4>Loading........</h4>
            }
            {
                error && <h4>{error}</h4>
            }
            {!loading && !error &&
                featuredTours.map((tour) =>
                (
                    <Col lg='3' className='mb-4' key={tour._id}>
                        <TourCard tour={tour} />
                    </Col>
                ))
            }
        </>
    )
}

export default FeaturedToursList