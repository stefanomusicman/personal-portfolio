import React from "react";
import styled, { keyframes } from "styled-components";
import { bounce } from "../HeroSection/HeroSection";
import VersionControl from "./VersionControlSVG/VersionControl";
import { PrimaryContainer } from "../HeroSection/HeroSection";
import { TitleContainer } from "../Projects/Projects";
import { Title } from "../Projects/Projects";
import { BsFillHeartFill } from 'react-icons/bs';
import { BsArrowUpCircle } from 'react-icons/bs';
import { Link } from 'react-scroll';

const ContainerTwo = styled.div`
    display: flex;
    width: 100%;
    height: 80vh;
`

const AnimationContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
`

const InfoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
`

const gradient = keyframes`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`

const hover = keyframes`
    0% {
        transform: translateY(0px);
    }
    30% {
        transform: translateY(5px);
    }
    50% {
        transform: translateY(10px);
    }
    75% {
        transform: translateY(5px);
    }
    100% {
        transform: translateY(0px);
    }
`

const InfoBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 75%;
    height: 70%;
    justify-content: space-around;
    box-shadow: 0 0 8px 3px #606060;
    border: none;
    border-radius: 10px;
    padding: 30px;
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	background-size: 400% 400%;
	animation: ${gradient} 10s ease infinite, ${hover} 3s infinite linear;
	/* height: 100vh; */
`

const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 20px;
`

const Question = styled.h2`
    margin-bottom: auto;
    color: white;
    font-family: 'Oxygen';
`

const Answer = styled.p`
    font-size: 25px;
    color: white;
    font-family: 'Dosis';
`

const Footer = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: relative;
`

const FooterMessage = styled.p`
    color: white;
    font-size: 15px;
`

const Back2TopContainer = styled.div`
    display: flex;
    width: 7.8em;
    height: 11em;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 0px; bottom: 0px;
    /* animation: ${bounce} 0.9s infinite linear; */
    cursor: pointer;
`

const AboutMe = () => {
    return(
        <div style={{position: 'relative'}}>
            <PrimaryContainer id="about me">
                <TitleContainer>
                    <Title>About Me</Title>
                </TitleContainer>
                <ContainerTwo>
                    <AnimationContainer>
                        <VersionControl />
                    </AnimationContainer>
                    <InfoContainer>
                        <InfoBox>
                            <TextBox>
                                <Question>Why Web Development?</Question>
                                <Answer>I enjoy learning things that are technical, allow for free-flowing creativity and encourage self expression making web dev a solid fit!</Answer>
                            </TextBox>
                            <TextBox>
                                <Question>How do I spend my free time?</Question>
                                <Answer>I make music, play gigs around town, play golf, hang with friends and frequent coffee shops that I admire.</Answer>
                            </TextBox>
                            <TextBox>
                                <Question>What do I wish to achieve in life?</Question>
                                <Answer>Balance, it sounds simple but I’ve found that it’s harder than it seems.</Answer>
                            </TextBox>
                        </InfoBox>
                    </InfoContainer>
                </ContainerTwo>
                <Footer>
                    <FooterMessage>Made with <BsFillHeartFill style={{color: 'red'}}/> by Stefano Proietti</FooterMessage>
                </Footer>
            </PrimaryContainer>
            <Back2TopContainer>
                    <Link to="nav" spy={true} smooth={true}><BsArrowUpCircle style={{width: '40px', height: '40px', color: 'white', margin: 'auto'}}/></Link>
            </Back2TopContainer>
        </div>
    )
}

export default AboutMe;