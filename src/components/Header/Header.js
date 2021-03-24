import React, { useState } from 'react'
import Logo from '../Img/Logo.png'
import Menu from './Menu/Menu'
import { Link } from "react-router-dom";
import { Fade as Hamburger } from 'hamburger-react'

import './Header.css'

function Header() {

    const [expand, setExpand] = useState(false)

    function closeMenu() {
        setExpand(false)
    }

    return (
        <>
            <header>
                <div>
                    <Link to='/'>
                        <img src={Logo} alt="logo" id='logo' />
                    </Link>
                </div>
                <div id='burger'>
                    <Hamburger toggled={expand} toggle={setExpand} />
                    {
                        expand ?
                            < >
                                <Menu close={closeMenu} />
                                <div className='menuBg' onClick={() => setExpand(false)}></div>
                            </>
                            :
                            null
                    }
                </div>
                <div id='desktop'>
                    <Menu />
                </div>
            </header>
        </>
    )
}

export default Header
