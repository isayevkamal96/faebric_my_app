import React from 'react'
import SectionServices from './SectionServices/SectionServices'
import SectionApproach from './SectionApproach/SectionApproach'
import SectionCases from './SectionCases/SectionCases'

import './Services.css'

function Services() {
    return (
        <div className='servicePage'>
            <h1>Services</h1>
            <SectionServices />
            <SectionApproach />
            <SectionCases />
            <h6>If you are interested to learn more please contact Roy Scheerder or Wolter Buma.</h6>
            <div id='Roy'>
                <a href="https://www.linkedin.com/in/royscheerder/">Roy Scheerder</a>
                <p>roy.scheerder@faebric.com</p>
                <p>+31 6 22 39 56 93</p>
            </div>
            <div id='Wolter'>
                <a href="https://www.linkedin.com/in/woltervanhaersmabuma/">Wolter van Haersma Buma</a>
                <p>wolter.buma@faebric.com</p>
                <p>+31 6 54 26 06 71</p>
            </div>
        </div>
    )
}

export default Services
