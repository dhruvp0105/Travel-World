import React, { useRef } from 'react'
import './searchbar.css'
import { Col, Form, FormGroup } from 'reactstrap'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import DriveEtaOutlinedIcon from '@mui/icons-material/DriveEtaOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Searchbar = () => {

    const locationRef = useRef('');
    const distanceRef = useRef(0);
    const maxGroupSizeRef = useRef(0);

    const searchHandler = () => {
        const location = locationRef.current.value;
        const distance = distanceRef.current.value;
        const maxGroupSize = maxGroupSizeRef.current.value;

        if (location === '' || distance === '' || maxGroupSize === '') {
            return alert("All fields are required!")
        }
    }

    return (
        <>
            <Col lg='12'>
                <div className="search_bar">
                    <Form className='d-flex align-items-center gap-5'>
                        <FormGroup className='form_group form_group-fast d-flex gap-3'>
                            <span>
                                <LocationOnIcon />
                            </span>
                            <div>
                                <h6>Location</h6>
                                <input type='text' placeholder='Where are you going?' ref={locationRef} />
                            </div>
                        </FormGroup>

                        <FormGroup className='form_group form_group-fast d-flex gap-3'>
                            <span>
                                <DriveEtaOutlinedIcon />
                            </span>
                            <div>
                                <h6>Distance</h6>
                                <input type='number' placeholder='Distance k/m' ref={distanceRef} />
                            </div>
                        </FormGroup>

                        <FormGroup className='form_group form_group-last d-flex gap-3'>
                            <span>
                                <PeopleAltOutlinedIcon />
                            </span>
                            <div>
                                <h6>Max People</h6>
                                <input type='number' placeholder='0' ref={maxGroupSizeRef} />
                            </div>
                        </FormGroup>

                        <span className='search_icon' type='submit' onClick={searchHandler}>
                            <SearchOutlinedIcon />
                        </span>
                    </Form>
                </div>
            </Col>
        </>
    )
}

export default Searchbar