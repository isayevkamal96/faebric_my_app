import React, { useState } from 'react'
import Roy from '../Img/RoyScheerder.jpg'
import Wolter from '../Img/Wolter.jpg'
import Karmen from '../Img/KarmenKekic.jpg'
import Christof from '../Img/Christof.jpg'
import Norbet from '../Img/NorbetZoet.jpeg'
import Saskia from '../Img/Saskia.jpg'
import Members from './Members/Members'

import './SectionMembers.css'

function SectionMembers() {

    const [members] = useState([
        {
            image: Roy,
            name: "Roy Scheerder",
            email: "roy.scheerder@faebric.com",
            number: '+31 6 22 39 56 93',
            id: 1
        },
        {
            image: Wolter,
            name: "Wolter van Haersma Buma",
            email: "wolter.buma@faebric.com",
            number: '+31 6 54 26 06 71',
            id: 2
        },
        {
            image: Karmen,
            name: "Karmen Kekic",
            email: "karmen.kekic@faebric.com",
            number: '+31 6 57 76 68 08',
            id: 3
        },
        {
            image: Christof,
            name: "Christof Zürn",
            email: "christof.zuern@faebric.com",
            number: '+31 6 14 69 72 51',
            id: 4
        },
        {
            image: Norbet,
            name: "Norbert Zoet",
            email: "norbert.zoet@faebric.com",
            number: '+31 6 82 88 82 88',
            id: 5
        },
        {
            image: Saskia,
            name: "Saskia Kloostra",
            email: "saskia.kloostra@faebric.com",
            number: '+31 6 55 69 96 87',
            id: 6
        }
    ])
    return (
        <section className='members container2'>
            <h1>The six Members</h1>
            <div className='membersInfo'>
                {
                    members.map(
                        (m, id) => {return <Members image={m.image} name={m.name} email={m.email} number={m.number} key={id} />}
                    )
                }
            </div>
        </section>
    )
}

export default SectionMembers
