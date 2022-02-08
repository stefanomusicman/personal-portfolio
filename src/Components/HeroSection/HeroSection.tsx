import React from "react";
import styled from "styled-components";

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
    padding: 20px 10px;
`

const DevWord = styled.div`
    color: hsl(155, 70%, 49%);
    font-size: 40px;
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
    font-size: 50px;
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
            </ContainerTwo>
        </PrimaryContainer>
    )
}

export default HeroSection;