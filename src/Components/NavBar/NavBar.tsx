import React from "react";
import styled from "styled-components";
import { bounce } from "../HeroSection/HeroSection";
import { IoMusicalNotes } from 'react-icons/io5';
import { FaCoffee } from 'react-icons/fa';
import { HiCode } from 'react-icons/hi';

const NavBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 7.8em;
    margin-right: 7.8em;
`

const NameContainer = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    height: 100%;
`

const Name = styled.h3`
    color: white;
    font-size: 40px;
    font-style: normal;
    font-weight: bold;
    font-family: 'Oswald';
`

const IconsBox = styled.div`
    display: flex;
    height: 100%;
    width: 250px;
    justify-content: space-around;
    align-items: center;
    /* animation: ${bounce} 0.9s infinite linear; */
`

// const ContactButton = styled.button`
//     margin-right: 5em;
//     font-size: 25px;
//     font-weight: bold;
//     font-family: 'Oswald';
//     border-radius: 10px;
//     padding: 5px 20px;
//     border: none;

//     &:hover {
//         cursor: pointer;
//         background-color: black;
//         color: white;
//     }
// `

const NavBar = () => {
    return(
        <NavBarContainer>
            <NameContainer>
                <Name>Stefano Proietti</Name>
            </NameContainer>
            {/* <ContactButton>Contact Me</ContactButton> */}
            <IconsBox>
                <IoMusicalNotes style={{color: 'white', height: '40px', width: '40px', order: '1'}}/>
                <FaCoffee style={{color: 'white', height: '40px', width: '40px', order: '2'}}/>
                <HiCode style={{color: 'white', height: '40px', width: '40px', order: '3'}}/>
            </IconsBox>
        </NavBarContainer>
    )
}

export default NavBar;