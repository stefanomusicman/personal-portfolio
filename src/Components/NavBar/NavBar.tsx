import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { IoMusicalNotes } from 'react-icons/io5';
import { FaCoffee } from 'react-icons/fa';
import { HiCode } from 'react-icons/hi';
import HamburgerMenu from '../NavBar/HamburgerMenu/HamburgerMenu';

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

const NameContainer = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    height: 100%;

    @media (max-width: 700px) {
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

    @media (max-width: 700px) {
        font-size: 25px;
    }
`


const IconsBox = styled.div`
    display: flex;
    height: 100%;
    width: 250px;
    justify-content: space-around;
    align-items: center;

    @media (max-width: 700px) {
        display: none;
    }
`

const HamburgerBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`


const NavBar = () => {
    
    const width = window.innerWidth;
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if(width <= 700) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }, [width]);

    return(
        <NavBarContainer id="nav">
            <NameContainer>
                <Name>Stefano Proietti</Name>
            </NameContainer>
            {!isMobile && <IconsBox>
                <IoMusicalNotes style={{color: 'white', height: '35px', width: '35px', order: '1'}}/>
                <FaCoffee style={{color: 'white', height: '35px', width: '35px', order: '2'}}/>
                <HiCode style={{color: 'white', height: '35px', width: '35px', order: '3'}}/>
            </IconsBox>}
            {isMobile && <HamburgerBox> 
                <HamburgerMenu />
            </HamburgerBox>}
        </NavBarContainer>
    )
}

export default NavBar;