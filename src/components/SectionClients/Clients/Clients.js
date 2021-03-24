import React from 'react'

import './Clients.css'

function Clients(props) {
    return (
        <div className='ourClients'>
            <img src={props.image} alt="icons" className='icon'/>
        </div>
    )
}

export default Clients
