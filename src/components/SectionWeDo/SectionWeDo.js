import React, { useState } from 'react'
import OurWorks from './OurWorks/OurWorks'
import Strategy from '../Img/strategy.png'
import Organizational from '../Img/organizational.png'
import Proposition from '../Img/proposition.png'
import Intelligence from '../Img/intelligence.png'
import { Link } from "react-router-dom";

import './SectionWeDo.css'

function SectionWeDo() {

    const [ourWorks] = useState([
        {
            image: Strategy
        },
        {
            image: Organizational
        },
        {
            image: Proposition
        },
        {
            image: Intelligence
        }
    ])
    return (
        <section className='weDo container2'>
            <h1>What we do</h1>
            <p>In the rising societal challenges and technological opportunities change is imminent. This asks for adaptive strategies, customer-centric approaches and new ways of operating; within your organization or within your eco-system. But how do you take up this challenge?</p>
            <p>With collaboration and design, we help you to stay relevant. We translate your challenge into new opportunities for your business.</p>
            <div className='icons'>
                {
                    ourWorks.map(
                        (w, index) => { return <OurWorks image={w.image} key={index} /> }
                    )
                }
            </div>
            <p className='readMore'>Read more about what we do on our
                <Link exact to='/services'>
                    services page
                </Link>
            </p>
        </section>
    )
}

export default SectionWeDo
