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

    // function prevScroll() {
    //     document.body.classList.add('modal-open')
    // }

    const [scroll, setScroll] = useState(false)

    function prevScroll() {
        setScroll(!scroll)
    }


    return (
        <>
            <header>
                <div>
                    <Link to='/'>
                        <img src={Logo} alt="logo" id='logo' />
                    </Link>
                </div>
                <div id='burger' onClick={prevScroll}>
                    {
                        scroll ? document.body.classList.add('modal-open') : document.body.classList.remove('modal-open')
                    }
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
