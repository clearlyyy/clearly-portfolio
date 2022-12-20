
import React from 'react'
import {Nav,NavLink,Bars,NavMenu,NavBtn,NavBtnLink} from './NavBarComps';

export default function Navbar() {
  return (
    <>
    <Nav>
        <NavLink to="/">
            <h1 className='Logo'>👨‍💻Clearly</h1>
        </NavLink>
        <Bars/>
        <NavMenu>
            <NavLink to="/about" activeStyle>
                About
            </NavLink>
            <NavLink to="/services" activeStyle>
                Services
            </NavLink>
            <NavBtn>
                <NavBtnLink>Contact Me</NavBtnLink>
            </NavBtn>
        </NavMenu>
    </Nav>
    </>
  )
}
