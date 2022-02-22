import React from "react";
import styled from "styled-components";

const NavBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`

const Name = styled.h3`
    color: white;
    margin-left: 3em;
    font-size: 40px;
    font-style: normal;
    font-weight: bold;
    font-family: 'Oswald';
`

const ContactButton = styled.button`
    margin-right: 5em;
    font-size: 25px;
    font-weight: bold;
    font-family: 'Oswald';
    border-radius: 10px;
    padding: 5px 20px;
    border: none;

    &:hover {
        cursor: pointer;
        background-color: black;
        color: white;
    }
`

const NavBar = () => {
    return(
        <NavBarContainer>
            <Name>Stefano Proietti</Name>
            <ContactButton>Contact Me</ContactButton>
        </NavBarContainer>
    )
}

export default NavBar;