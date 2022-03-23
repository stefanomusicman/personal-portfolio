import React from "react";
import styled from "styled-components";

const LaptopContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`

const Laptop = styled.img`
    width: 1000px;
    height: 600px;
    position: relative;

    @media (max-width: 700px) {
        width: 500px;
        height: 300px;
    }
`

const Title = styled.h3`
    color: white;
    margin-bottom: 10em;
    position: absolute;
    font-size: 40px;
    font-family: 'Asap';

    @media (max-width: 700px) {
        font-size: 20px;
    }
`

const Tech = styled.div`
    color: white;
    margin-bottom: 3em;
    width: 700px;
    position: absolute;
    font-size: 30px;
    text-align: center;
    font-family: 'Asap';

    @media (max-width: 700px) {
        width: 200px;
        font-size: 15px;
    }
`

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    height: 10em;
    width: 100%;
    margin-top: 12em;

    @media (max-width: 700px) {
        margin-top: 8em;
    }
`

const Button = styled.a`
    background-color: hsl(28, 72%, 66%);
    text-align: center;
    text-decoration: none;
    color: white;
    border: none;
    border-radius: 10px;
    padding: 10px 15px;
    width: 10em;
    font-size: 20px;

    @media (max-width: 700px) {
        padding: 3px 7px;
        width: 5em;
    }
`

const Macbook: React.FC<{code: string, name: string, tech: string, demo: string}> = (props) => {
    return(
        <LaptopContainer>
            <Laptop src={require("./../../Images/MacBook2.png")} alt="macbook"/>
            <Title>{props.name}</Title>
            <Tech>Tech Used: {props.tech}</Tech>
            <ButtonContainer>
                <Button href={props.demo} target='_blank'>Demo</Button>
                <Button href={props.code} target='_blank' style={{marginLeft: '40px'}}>{`Code </>`}</Button>
            </ButtonContainer>
        </LaptopContainer>
    )
}

export default Macbook;