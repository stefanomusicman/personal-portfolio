import React from "react";
import styled, { keyframes } from "styled-components";
import { BsArrowDownCircle } from 'react-icons/bs';

const PrimaryContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 7.8em;
    margin-right: 7.8em;
`

/* First Container responsible for spinning words */
const ContainerOne = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 0px;
`

const DevWord = styled.div`
    color: hsl(155, 70%, 49%);
    font-size: 45px;
    font-weight: bold;
`

/* Second Container responsible for slogan and GIFS */
const ContainerTwo = styled.div`
    display: flex;
    width: 100%;
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
    justify-content: center;
    align-items: center;
    width: 50%;
    padding-left: 20px;
`

/* Third Container for button and link icons */
const ContainerThree = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    padding-top: 20px;
`

const NextSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const bounce = keyframes`
    10% {
        height: 35px;
        width: 35px;
    }
    30% {
        height: 35px;
        width: 35px;
    }
    50% {
        height: 35px;
        width: 35px;
        transform: translateY(20px);
    }
    75% {
        height: 35px;
        width: 35px;
    }
    100% {
        transform: translateY(0px);
    }
`

const ButtonBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center
    width: 50px;
    height: 50%;
    animation: ${bounce} 0.9s infinite
`

const HeroSection = () => {
    return(
        <PrimaryContainer>
            <ContainerOne>
                <DevWord>Front-End Developer</DevWord>
            </ContainerOne>
            <ContainerTwo>
                <SloganBox>
                    <Text>From making music to building web applications, I love letting my <strong style={{color: 'hsl(360, 50%, 60%)'}}>creativity</strong> go wild!</Text>
                </SloganBox>
                <GifBox>
                    <img src={require("./../../Images/tablet-gif.gif")} alt="devices" style={{width: '475px', height: '475px'}}/>
                    <img src={require("./../../Images/search-gif.gif")} alt="search" style={{width: '475px', height: '475px'}}/>
                </GifBox>
            </ContainerTwo>
            <ContainerThree>
                <NextSection>
                    <Text style={{fontSize: '35px'}}>Projects</Text>
                    <ButtonBox >
                        <BsArrowDownCircle style={{color: 'white', width: '35px', height: '35px', cursor: 'pointer'}} />
                    </ButtonBox>
                </NextSection>
            </ContainerThree>
        </PrimaryContainer>
    )
}

export default HeroSection;