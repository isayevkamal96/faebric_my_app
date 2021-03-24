import React from 'react'
import { Link } from "react-router-dom";
import {animated, useSpring} from 'react-spring'

import './Menu.css'

function Menu(props) {
  
    // const prop = useSpring({ opacity: 1, from: { opacity: 0 }, config: {duration: 200} })
    const anime = useSpring({ opacity: 1, from: { opacity: 0 }, config: {duration: 100} })

    return (
        <div> 
            <animated.ul style={anime} className='mobileMenu'>
                <li onClick={props.close}>
                    <Link to='/services'>
                        services
                    </Link>
                </li>
                <li onClick={props.close}>
                    <Link to='/casesInsights'>
                        cases & insights
                    </Link>
                </li>
            </animated.ul>
        </div>
    )
}

export default Menu
