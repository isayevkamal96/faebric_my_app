import React from 'react'
import Proposition2 from '../../../Img/proposition2.png'

function PropositionArticle() {
    return (
        <div className='services'>
            <img src={Proposition2} alt="Proposition2"/>
            <h2>Proposition development</h2>
            <h3>Design</h3>
            <p>Research, personas, customer journeys, service blueprints, business model generation</p>
            <h3>Getting ready</h3>
            <p>Governance, capabilities, roadmaps, teams, way of working</p>
            <h3>Implementation</h3>
            <p>Go-to-market tactics, prototyping, customer journey operations</p>
            <p>Take a look at our <span>Proposition Development Map</span> for our approach towards the design stage</p>
        </div>
    )
}

export default PropositionArticle
