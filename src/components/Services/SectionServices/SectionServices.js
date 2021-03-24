import React from 'react'
import StrategyArticle from './StrategyArticle/StrategyArticle'
import OrganizationArticle from './OrganizationArticle/OrganizationArticle'
import PropositionArticle from './PropositionArticle/PropositionArticle'
import IntelligenceArticle from './IntelligenceArticle/IntelligenceArticle'


import './SectionServices.css'

function SectionServices() {
    return (
        <div className='serv'>
            <div className='servicesDesktop'>
                <StrategyArticle />
                <OrganizationArticle />
                <PropositionArticle />
                <IntelligenceArticle />
            </div>
        </div>
    )
}

export default SectionServices
