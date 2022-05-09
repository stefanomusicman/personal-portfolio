import React from "react";
import styled, { keyframes } from "styled-components";
import { MdLocationOn } from 'react-icons/md';
import HamburgerMenu from '../NavBar/HamburgerMenu/HamburgerMenu';

/* Primary Container */
const NavBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 7.8em;
    margin-right: 7.8em;

    @media (max-width: 700px) {
        justify-content: center;
        width: 100%;
        margin-left: 0;
        margin-right: 0;
    }
`

/* Name Container */
const NameContainer = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    height: 100%;

    @media (max-width: 800px) {
        width: 100%;
        justify-content: center;
    }
`

const Name = styled.h3`
    color: white;
    font-size: 40px;
    font-style: normal;
    font-weight: bold;
    font-family: 'Oswald';

    @media (max-width: 800px) {
        font-size: 25px;
    }
`

/* Icons Container */ 
const LocationBox = styled.div`
    display: flex;
    height: 100%;
    width: 250px;
    justify-content: space-around;
    align-items: center;

    @media (max-width: 800px) {
        display: none;
    }
`

const Location = styled.h3`
    color: white;
    font-size: 40px;
    font-style: normal;
    font-family: 'Dosis';
`

const rotateAnimation = keyframes`
    from {transform: rotateY(45deg);}
	to {transform: rotateY(225deg);}
`

const LocationIcon = styled(MdLocationOn)`
    color: white;
    width: 40px;
    height: 40px;
    transform: rotateY(45deg);
    animation: ${rotateAnimation} 2s linear infinite;
`

const HamburgerBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`


const NavBar = () => {
    
    const isMobile: boolean = window.innerWidth <= 800;

    return(
        <NavBarContainer id="nav">
            <NameContainer>
                <Name>Stefano Proietti</Name>
            </NameContainer>
            {!isMobile && 
            <LocationBox>
                <Location>Montreal, QC</Location>
                <LocationIcon />
            </LocationBox>}
            {isMobile && 
            <HamburgerBox> 
                <HamburgerMenu />
            </HamburgerBox>}
        </NavBarContainer>
    )
}

export default NavBar;