import React from 'react'
import FaebricNetwork from '../Img/FaebricNetwork.png'

import './SectionFriends.css'

function SectionFriends() {
    return (
        <section className='friends'>
            <h1>Friends and Collaborators</h1>
            <span><a href="https://www.linkedin.com/in/lisette-leuftink-6ba0316/" rel="noreferrer" target='_blank'>Lisette Leufthink</a> | </span>
            <span><a href="https://www.linkedin.com/in/louise-m%C3%B8lholt-990ab19/" rel="noreferrer" target='_blank'>Louise Molholt</a> | </span>
            <span><a href="https://www.linkedin.com/in/xenia-z%C3%BCrn/" rel="noreferrer" target='_blank'>Xenia Zürn</a> | </span>
            <span><a href="https://www.linkedin.com/in/marlies-hendriks-0b37949/" rel="noreferrer" target='_blank'>Marlies Hendriks</a> | </span>
            <span><a href="https://www.linkedin.com/in/christiaansnabel/" rel="noreferrer" target='_blank'>Christiaan Snabel</a> | </span>
            <span><a href="https://www.linkedin.com/in/benjwickham/" rel="noreferrer" target='_blank'>Ben Wickham</a> | </span>
            <span><a href="https://www.linkedin.com/in/aroshabrouwer/" rel="noreferrer" target='_blank'>Arosha Brouwer</a> | </span>
            <span><a href="https://www.linkedin.com/in/loeke-ruijter-38aa81ab/" rel="noreferrer" target='_blank'>Loeke Ruijter</a></span>
            <img src={FaebricNetwork} alt="FaebricNetwork"/>
        </section>
    )
}

export default SectionFriends
