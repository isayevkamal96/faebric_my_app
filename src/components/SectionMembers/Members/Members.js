import React from 'react'

import './Members.css'

function Members(props) {
    return (
        <div className='member'>
            <img src={props.image} alt="Member" />
            <h2>{props.name}</h2>
            <p>{props.email}</p>
            <p>{props.number}</p>
        </div>
    )
}

export default Members
