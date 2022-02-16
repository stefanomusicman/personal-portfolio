import React, { useState } from "react";
import styled from "styled-components";
import Macbook from "./Macbook";
import { BsArrowLeftCircle } from 'react-icons/bs';
import { BsArrowRightCircle } from 'react-icons/bs';

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
`

const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`

const Title = styled.p`
    font-size: 45px;
    color: white;
    font-weight: bold;
`

const ProjectsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`

const Projects = () => {

    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent(current === projectInfo.length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? projectInfo.length - 1 : current - 1)
    }

    return(
        <PrimaryContainer style={{marginTop: '30px'}}>
            <TitleContainer>
                <Title>Projects</Title>
            </TitleContainer>
            <ProjectsContainer>
                <BsArrowLeftCircle onClick={prevSlide} style={{color: 'white', width: '36px', height: '36px', cursor: 'pointer'}}/>
                <div>
                    {projectInfo.map((item) => {
                        return <Macbook key={item.id}/>
                    })}
                </div>
                <BsArrowRightCircle onClick={nextSlide} style={{color: 'white', width: '36px', height: '36px', cursor: 'pointer'}}/>
            </ProjectsContainer>
        </PrimaryContainer>
    )
}

export default Projects;