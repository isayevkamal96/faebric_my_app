import React, { useState } from 'react'
import Cover from '../Img/cover.jpg'
import { AiOutlinePlayCircle } from 'react-icons/ai';

import './SectionCollaborative.css'

function SectionCollaborative() {

    const [play, setPlay] = useState(false);
    const url = play
        ? `https://video.wixstatic.com/video/786a64_0a1b8b62e6e54919977067a3a0c8c82f/1080p/mp4/file.mp4?autoplay=1`
        : `https://video.wixstatic.com/video/786a64_0a1b8b62e6e54919977067a3a0c8c82f/1080p/mp4/file.mp4`; 

    return (
        <section className='collaborative'>
            <h1>Collaborative transformation with Music Thinking</h1>
            <p>At Faebric we apply Music Thinking and make use of the <a href="https://musicthinking.com/music-thinking-framework/" rel="noreferrer" target='_blank'>Music Thinking Framework</a>We approach challenges and solutions with the six cues. The cues are starting points for interventions and collaboration.</p>
            <div className='cover'>
                <div className='overlay'>
                    <AiOutlinePlayCircle id='play' onClick={() => setPlay(true)} />
                   
                </div>
                {
                        play ?
                            <iframe
                                src={url}
                                frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen>
                            </iframe>
                            :
                            <img src={Cover} alt="cover" />
                    }
            </div>
        </section>
    )
}

export default SectionCollaborative
