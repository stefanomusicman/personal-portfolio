import React from "react";
import Slideshow from "./Slideshow";
import styled, { keyframes } from "styled-components";
import { BsArrowDownCircle } from 'react-icons/bs';
import CodeThinker from "./CodeThinkerSVG/CodeThinker";
// import Phone from "./PhoneSVG/Phone";

export const PrimaryContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 7.8em;
    margin-right: 7.8em;
`

/* Second Container responsible for slogan and GIFS */
export const ContainerTwo = styled.div`
    display: flex;
    width: 100%;
    height: 55vh;
    /* margin-bottom: 20px; */
`

const SloganBox = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
`

const Text = styled.p`
    color: white;
    font-size: 60px;
    font-family: 'Oswald';
`

const GifBox = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    width: 50%;
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
        /* height: 35px;
        width: 35px; */
        transform: translateY(5px);
    }
    30% {
        /* height: 35px;
        width: 35px; */
        transform: translateY(12px);

    }
    50% {
        /* height: 35px;
        width: 35px; */
        transform: translateY(20px);
    }
    75% {
        /* height: 35px;
        width: 35px; */
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
`

const HeroSection = () => {
    return(
        <PrimaryContainer>
            <Slideshow />
            <ContainerTwo>
                <SloganBox>
                    <Text>From making music to building web applications, I love letting my <strong style={{color: 'hsl(360, 50%, 60%)'}}>creativity</strong> go wild!</Text>
                </SloganBox>
                <GifBox>
                    <CodeThinker />
                </GifBox>
            </ContainerTwo>
            <ContainerThree>
                <NextSection>
                    <Text style={{fontSize: '35px', height: '40px'}}>Projects</Text>
                    <ButtonBox >
                        <BsArrowDownCircle style={{color: 'white', width: '36px', height: '36px'}} />
                    </ButtonBox>
                </NextSection>
            </ContainerThree>
        </PrimaryContainer>
    )
}

export default HeroSection;