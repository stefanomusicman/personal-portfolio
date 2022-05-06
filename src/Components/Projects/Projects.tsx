import React from "react";
import styled from "styled-components";
import Macbook from "./Macbook";
import { bounce } from "../HeroSection/HeroSection";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Text2 } from "../HeroSection/HeroSection";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from "swiper";
import { DownArrow } from "../HeroSection/HeroSection";
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
        name: 'Book Tracker',
        techUsed: 'React, Styled Components',
        sourceCodeLink: 'https://github.com/stefanomusicman/first-app',
        demoLink: 'https://book-tracker-3ecf0.web.app/',
        id: 1
    },
    {
        name: 'Food Order App',
        techUsed: 'React, CSS Modules, React Router - Not intended for Mobile',
        sourceCodeLink: 'https://github.com/stefanomusicman/food-order-app',
        demoLink: 'https://food-order-app-d8cc7.web.app/',
        id: 2
    },
    {
        name: 'Password Strength Tester',
        techUsed: 'Next.JS + TypeScript - Progressive Web App/Not intended for mobile',
        sourceCodeLink: 'https://github.com/stefanomusicman/password-strength-verification',
        demoLink: 'https://password-strength-verification.vercel.app/',
        id: 3
    },
    {
        name: 'Band Website',
        techUsed: 'React + TypeScript, Styled Components',
        sourceCodeLink: 'https://github.com/stefanomusicman/amavi-site',
        demoLink: 'https://amavi-site.firebaseapp.com/',
        id: 4
    },
    {
        name: 'Personal Portfolio',
        techUsed: 'React + TypeScript, Styled Components, UI Design - FIGMA',
        sourceCodeLink: 'https://github.com/stefanomusicman/personal-portfolio',
        demoLink: '',
        id: 5
    }
];

const PrimaryContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    justify-content: center;
    margin: auto;
    margin-top: 30px;
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

const CustomSwiper = styled(Swiper)`
    .swiper-button-next, .swiper-button-prev{
        color: white;
    }
`;

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

    const isMobile = window.innerWidth <= 700;

    return(
        <PrimaryContainer id="projects">
            <TitleContainer>
                <Title>Projects</Title>
            </TitleContainer>
            <Carousel>
                <CustomSwiper 
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    navigation={isMobile ? false : true}
                    modules={[Navigation]}
                    className='swiper-button-white'
                >
                {projectInfo.map((item) => 
                    <SwiperSlide className='swiper-button-white' key={item.id}> 
                        <Macbook 
                            demo={item.demoLink} 
                            code={item.sourceCodeLink} 
                            name={item.name} 
                            tech={item.techUsed} 
                            key={item.id}/> 
                    </SwiperSlide>)}
                </CustomSwiper>
            </Carousel>
            <NextSection>
                <Text2>About Me</Text2>
                <ButtonBox>
                    <Link to="about me" spy={true} smooth={true}>
                        <DownArrow/>
                    </Link>
                </ButtonBox>
            </NextSection>
        </PrimaryContainer>
    )
}

export default Projects;