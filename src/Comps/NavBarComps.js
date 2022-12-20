import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import {FaBars} from 'react-icons/fa'

// this dictates how small the window has to be horizontally for the
// nav menu to dissapear and be replaced with a hamburger icon.
var maxW = '600px';

//why are backticks used as syntax wtf.
export const Nav = styled.nav`
  background: rgb(9,9,9);
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
`;

export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    transition: .2s;
    height: 100%;
    cursor: pointer;

    &.active {
        color: #8352FD;
    }

    &:hover {
        transform: scale(1.5) rotate(-2deg);
    }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: ${maxW}) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    margin-top: -8px;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
    animation: NavMenuAnimation 1000ms;
    display: flex;
    align-items: center;
   // margin-right: -24px;

    margin-right: 24px;
    
    @keyframes NavMenuAnimation {
        from {transform: translateX(400%);}
        to {transform: translateX(0%);}
    }

    @media screen and (max-width: ${maxW}) {
        display: none;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: ${maxW}) {
        display: none;
    }
`;

export const NavBtnLink = styled(Link)`
    border-radius: 10px;
    animation-name: ButtonAnimation;
    animation-duration: 1.5s;
    background: #8352FD;
    padding: 10px 22px;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    margin-left: 24px;

    @keyframes ButtonAnimation {
        0% {border-radius: 50px; padding: 0px 22px;}
        100% {border-radius: 10px; padding: 10px 22px;}
    }

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
        transform: scale(1.2) rotate(-2deg);
    }
`;
