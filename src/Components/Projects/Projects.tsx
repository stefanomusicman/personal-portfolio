import React from "react";
import styled, {  keyframes } from "styled-components";
import Macbook from "./Macbook";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from "swiper";
import { BsArrowDownCircle } from 'react-icons/bs';

type Info = {
    name: string,
    techUsed: string,
    sourceCodeLink: string,
    // demoLink: string
    id: number
}

const projectInfo: Info[] = [
    {
        name: 'Food Order App',
        techUsed: 'React, CSS Modules',
        sourceCodeLink: 'https://github.com/stefanomusicman/food-order-app',
        id: 1
    },
    {
        name: 'Book Tracker',
        techUsed: 'React, Styled Components',
        sourceCodeLink: 'https://github.com/stefanomusicman/first-app',
        id: 2
    },
    {
        name: 'Personal Portfolio',
        techUsed: 'React, TypeScript, Styled Components, UI Design - FIGMA',
        sourceCodeLink: 'https://github.com/stefanomusicman/personal-portfolio',
        id: 3
    }
];

const PrimaryContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    justify-content: center;
    margin: auto;
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

    /* margin: 0 auto;
    overflow: hidden;
    max-width: 1000px;
    position: relative; */
    height: 68vh;
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
    margin-bottom: 40px;
    animation: ${bounce} 0.9s infinite linear;
`

const Projects = () => {

    return(
        <PrimaryContainer style={{marginTop: '30px'}}>
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
                    {projectInfo.map((item) => <SwiperSlide> <Macbook name={item.name} tech={item.techUsed} key={item.id}/> </SwiperSlide>)}
                </Swiper>
            </Carousel>
            <NextSection>
                <Text style={{fontSize: '35px', height: '40px'}}>About Me</Text>
                <ButtonBox>
                    <BsArrowDownCircle style={{color: 'white', width: '36px', height: '36px'}} />
                </ButtonBox>
            </NextSection>
        </PrimaryContainer>
    )
}

export default Projects;