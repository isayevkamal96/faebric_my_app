import React from 'react'
import Collaborate from '../Img/collaborate.png'

import './SectionWeAre.css'

function Body() {
    return (
        <article className='weAre'>
            <img src={Collaborate} alt="Collaborate" id='col'/>
            <h2>We are Fæbric: facilitators of change through collaboration and design</h2>
            <p>We help leaders, teams and organisations to interpret and to act upon the signs of the time. We do this through collaborative transformation.</p>
        </article>
    )
}

export default Body
