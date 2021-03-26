import React, {useState} from 'react'
import NS from '../Img/NS.png'
import Portbase from '../Img/Portbase.png'
import Sunweb from '../Img/Sunweb.png'
import Ocean from '../Img/Ocean.png'
import Clients from './Clients/Clients'

import './SectionClients.css'

function SectionClients() {

    const [clients] = useState([
        {
            image: NS
        },
        {
            image: Portbase
        },
        {
            image: Sunweb
        },
        {
            image: Ocean
        }
    ])
    return (
        <section className='clients container2'>
            <h1>A selection of our clients</h1>
            <div className='icons'>
                {
                    clients.map(
                        (c, index1) => {return <Clients image={c.image} key={index1} />}
                    )
                }
            </div>
        </section>
    )
}

export default SectionClients
