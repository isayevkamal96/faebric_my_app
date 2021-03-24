import React from 'react'
import Strategy2 from '../../../Img/strategy2.png'

function StrategyArticle() {
    return (
        <div className='services'>
            <img src={Strategy2} alt="Strategy2"/>
            <h2>Strategy development</h2>
            <h3>Design</h3>
            <p>Research, scenarios, strategy models, value creation, system interventions, business planning </p>
            <h3>Getting ready</h3>
            <p>Governance, capabilities, roadmaps, teams, way of working</p>
            <h3>Implementation</h3>
            <p>Design leadership, business owner, value stream management, coaching</p>
            <p>Take a look at our <span>Strategy Development Map</span> for our approach towards the design stage.</p>
        </div>
    )
}

export default StrategyArticle
