import React from "react";
import styled, { keyframes } from "styled-components";
import { BsArrowDownCircle } from 'react-icons/bs';
import CodeThinker from "./CodeThinkerSVG/CodeThinker";
import { Link } from 'react-scroll'
import SlideShowTwo from "./SlideShowV2/SlideShowTwo";

export const PrimaryContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 7.8em;
    margin-right: 7.8em;

    @media (max-width: 700px) {
        margin-left: 0;
        margin-right: 0;
    }
`

/* Second Container responsible for slogan and GIFS */
export const ContainerTwo = styled.div`
    display: flex;
    width: 100%;
    height: 52vh; //originally 55vh

    @media (max-width: 700px) {
        flex-direction: column;
        height: auto;
    }
`

const SloganBox = styled.div`
    display: flex;
    align-items: center;
    width: 50%;

    @media (max-width: 700px) {
        justify-content: center;
        width: 90%;
        padding: 20px;
        height: auto;
    }
`

const Text = styled.p`
    color: white;
    font-size: 60px;
    font-family: 'Oswald';

    @media (max-width: 700px) {
        font-size: 25px;
    }
`

const GifBox = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    width: 50%;

    @media (max-width: 700px) {
        width: 100%;
        height: 12em;
        justify-content: center;
    }
`

/* Third Container for button and link icons */
const ContainerThree = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`

const NextSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const bounce = keyframes`
    10% {
        transform: translateY(5px);
    }
    30% {
        transform: translateY(12px);
    }
    50% {
        transform: translateY(20px);
    }
    75% {
        transform: translateY(12px);
    }
    100% {
        transform: translateY(0px);
    }
`

const ButtonBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50%;
    animation: ${bounce} 0.9s infinite linear;
    cursor: pointer;
`

const HeroSection = () => {
    return(
        <PrimaryContainer>
            <SlideShowTwo />
            <ContainerTwo>
                <SloganBox>
                    <Text>From making music to building web applications, I love letting my <strong style={{color: '#c04343'}}>creativity</strong> go wild!</Text>
                </SloganBox>
                <GifBox>
                    <CodeThinker />
                </GifBox>
            </ContainerTwo>
            <ContainerThree>
                <NextSection>
                    <Text style={{fontSize: '35px', height: '40px'}}>Projects</Text>
                    <ButtonBox >
                        <Link to="projects" spy={true} smooth={true}><BsArrowDownCircle style={{color: 'white', width: '36px', height: '36px'}} /></Link>
                    </ButtonBox>
                </NextSection>
            </ContainerThree>
        </PrimaryContainer>
    )
}

export default HeroSection;