import React from 'react'
import Organizational2 from '../../../Img/organizational2.png'

function OrganizationArticle() {
    return (
        <div className='services'>
             <img src={Organizational2} alt="Organizational2"/>
            <h2>Organizational change</h2>
            <h3>Design</h3>
            <p>Research, co-creation, structure, operating model, performance, employee experience</p>
            <h3>Getting ready</h3>
            <p>Reviews and audits, prototyping, workers councils and unions facilitation, organization onboarding</p>
            <h3>Implementation</h3>
            <p>Leadership development, value stream kick-starts, enabling tooling, work force operations</p>
            <p>Take a look at our <span>Organizational Change Map</span> for our approach towards the design and getting ready stage.</p>
        </div>
    )
}

export default OrganizationArticle
