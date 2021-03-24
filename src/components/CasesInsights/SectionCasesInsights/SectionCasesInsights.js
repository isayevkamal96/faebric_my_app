import React from 'react'
import Resource from './Resource/Resource'
import Resource2 from './Resource2/Resource2'
import Resource3 from './Resource3/Resource3'
import Resource4 from './Resource4/Resource4'
import Perspective1 from './Perspective1/Perspective1'
import Perspective2 from './Perspective2/Perspective2'
import Perspective3 from './Perspective3/Perspective3'
import Perspective4 from './Perspective4/Perspective4'
import Perspective5 from './Perspective5/Perspective5'
import Interview from './Interview/Interview'
import Play from '../../Services/SectionCases/Play/Play'
import NSTrains from '../../Services/SectionCases/NSTrains/NSTrains'
import PortbaseCases from '../../Services/SectionCases/PortbaseCases/PortbaseCases'

import './SectionCasesInsights.css'

function SectionCasesInsights() {
    return (
        <section className='cases casesDesktop insights'>
            <Resource />
            <Perspective1 />
            <Perspective2 />
            <Resource2 />
            <Interview />
            <Play />
            <Perspective3 />
            <Resource3 />
            <Perspective4 />
            <PortbaseCases />
            <Perspective5 />
            <Resource4 />
            <NSTrains />
        </section>
    )
}

export default SectionCasesInsights
