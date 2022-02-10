import React from "react";
import styled, { keyframes } from "styled-components";
import { ImGithub } from 'react-icons/im';
import { BsLinkedin } from 'react-icons/bs';
import { IoIosDocument } from 'react-icons/io';

const IconsContainer = styled.div`
    display: flex;
    width: 7.8em;
    height: 11em;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    right: 0px; bottom: 0px;
`

const wiggle = keyframes`
    10% {
        height: 33%;
        width: 100%;
    }
    30% {
        height: 33%;
        width: 100%;
    }
    50% {
        height: 33%;
        width: 100%;
        transform: translateX(-15px);
    }
    75% {
        height: 33%;
        width: 100%;
    }
    100% {
        transform: translateX(0px);
    }
`

const Anchor = styled.a`
    height: 33%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        animation: ${wiggle} 0.9s infinite;
    }
`

const IconsBar = () => {
    return(
        <IconsContainer>
            <Anchor href="https://github.com/stefanomusicman" target='_blank' rel="noopener noreferrer"><ImGithub style={{width: '40px', height: '40px', padding: '10px', color: 'white'}}/></Anchor>
            <Anchor><BsLinkedin style={{width: '40px', height: '40px', padding: '10px', color: 'white'}}/></Anchor>
            <Anchor><IoIosDocument style={{width: '40px', height: '40px', padding: '10px', color: 'white'}}/></Anchor>
        </IconsContainer>
    )   
}

export default IconsBar;