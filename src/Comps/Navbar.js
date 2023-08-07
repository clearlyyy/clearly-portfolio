
import React from 'react'
import {Nav,NavLink,Bars,NavMenu,NavBtn,NavBtnLink} from './NavBarComps';

export default function Navbar() {
  return (
    <>
    <Nav class="navbar">
        <NavLink to="/">
            <h1 className='Logo'>👨‍💻Clearly</h1>
        </NavLink>
        <Bars/>
        <NavMenu>
            <NavLink to="/work" activeStyle>
                Work
            </NavLink>
            <NavLink to="/about" activeStyle>
                About Me
            </NavLink>
            <NavBtn>
                <NavBtnLink>Contact Me</NavBtnLink>
            </NavBtn>
        </NavMenu>

    </Nav>
    </>
  )
}
