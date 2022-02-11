import React from "react";
import styled from "styled-components";
import Macbook from "./Macbook";

type Info = {
    name: string,
    techUsed: string,
    sourceCodeLink: string,
    // demoLink: string
}

const projectInfo: Info[] = [
    {
        name: 'Food Order App',
        techUsed: 'React, CSS Modules',
        sourceCodeLink: 'https://github.com/stefanomusicman/food-order-app'
    },
    {
        name: 'Book Tracker',
        techUsed: 'React, Styled Components',
        sourceCodeLink: 'https://github.com/stefanomusicman/first-app'
    },
    {
        name: 'Personal Portfolio',
        techUsed: 'React, TypeScript, Styled Components, UI Design - FIGMA',
        sourceCodeLink: 'https://github.com/stefanomusicman/personal-portfolio'
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
    width: 100%;
`

const Projects = () => {
    return(
        <PrimaryContainer style={{marginTop: '30px'}}>
            <TitleContainer>
                <Title>Projects</Title>
            </TitleContainer>
            <ProjectsContainer>
                <Macbook />
            </ProjectsContainer>
        </PrimaryContainer>
    )
}

export default Projects;