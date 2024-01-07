import React from 'react'
import './subtitle.css'

const Subtitle = ({ subtitle }) => {
    return (
        <>
            <div className="heading">
                <h5 className='section_subtitle'>{subtitle}</h5>
            </div>
        </>
    )
}

export default Subtitle