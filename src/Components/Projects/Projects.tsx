import React from "react";
import styled, {  keyframes } from "styled-components";
import Macbook from "./Macbook";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from "swiper";
import { BsArrowDownCircle } from 'react-icons/bs';
import { Link } from 'react-scroll';

type Info = {
    name: string,
    techUsed: string,
    sourceCodeLink: string,
    demoLink: string
    id: number
}

const projectInfo: Info[] = [
    {
        name: 'Food Order App',
        techUsed: 'React, CSS Modules, React Router',
        sourceCodeLink: 'https://github.com/stefanomusicman/food-order-app',
        demoLink: 'https://food-order-app-d8cc7.web.app/',
        id: 1
    },
    {
        name: 'Book Tracker',
        techUsed: 'React, Styled Components',
        sourceCodeLink: 'https://github.com/stefanomusicman/first-app',
        demoLink: 'https://book-tracker-3ecf0.web.app/',
        id: 2
    },
    {
        name: 'Personal Portfolio',
        techUsed: 'React, TypeScript, Styled Components, UI Design - FIGMA',
        sourceCodeLink: 'https://github.com/stefanomusicman/personal-portfolio',
        demoLink: '',
        id: 3
    }
];

const PrimaryContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    justify-content: center;
    margin: auto;
    position: relative;

    @media (max-width: 700px) {
        width: 100%;
    }
`

export const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`

export const Title = styled.p`
    font-size: 45px;
    color: white;
    font-weight: bold;
    font-family: 'Asap';
`



const Carousel = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 65vh;

    @media (max-width: 700px) {
        height: 50vh;
    }
`

const NextSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Text = styled.p`
    font-size: '60px';
    color: white;
    font-family: 'Oswald';
`

const bounce = keyframes`
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
    margin-bottom: 40px;
    animation: ${bounce} 0.9s infinite linear;
    cursor: pointer;
`

const Projects = () => {

    return(
        <PrimaryContainer id="projects" style={{marginTop: '30px'}}>
            <TitleContainer>
                <Title>Projects</Title>
            </TitleContainer>
            <Carousel>
                <Swiper 
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    navigation={true}
                    modules={[Navigation]}
                    className='mySwiper'
                >
                    {projectInfo.map((item) => <SwiperSlide key={item.id}> <Macbook demo={item.demoLink} code={item.sourceCodeLink} name={item.name} tech={item.techUsed} key={item.id}/> </SwiperSlide>)}
                </Swiper>
            </Carousel>
            <NextSection>
                <Text style={{fontSize: '35px', height: '40px'}}>About Me</Text>
                <ButtonBox>
                    <Link to="about me" spy={true} smooth={true}><BsArrowDownCircle style={{color: 'white', width: '36px', height: '36px'}} /></Link>
                </ButtonBox>
            </NextSection>
        </PrimaryContainer>
    )
}

export default Projects;