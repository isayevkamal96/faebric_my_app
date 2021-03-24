import React from 'react'

import './OurWorks.css'

function OurWorks(props) {
    return (
        <div>
            <img src={props.image} alt="icons" className='icon' />
        </div>
    )
}

export default OurWorks
