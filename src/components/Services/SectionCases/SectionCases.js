import React from 'react'
import Play from './Play/Play'
import PortbaseCases from './PortbaseCases/PortbaseCases'
import NSTrains from './NSTrains/NSTrains'

import './SectionCases.css'

function SectionCases() {
    return (
        <section className='cases'>
            <h1>Cases & insights</h1>
            <div className='casesDesktop'>
                <Play />
                <PortbaseCases />
                <NSTrains />
            </div>
        </section>
    )
}

export default SectionCases
