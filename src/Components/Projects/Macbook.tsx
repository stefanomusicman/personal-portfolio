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

    @media (max-width: 1000px) {
        width: 400px;
        height: 250px;
    }
`

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
`

const Title = styled.h3`
    color: white;
    font-size: 40px;
    font-family: 'Asap';

    @media (max-width: 1000px) {
        font-size: 20px;
    }
`

const Tech = styled.div`
    color: white;
    width: 65%;
    font-size: 30px;
    text-align: center;
    font-family: 'Asap';

    @media (max-width: 1000px) {
        width: 200px;
        font-size: 15px;
    }
`

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10em;
    width: 100%;

    @media (max-width: 1000px) {
        height: 4em;
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

    @media (max-width: 1000px) {
        padding: 2px 5px;
        width: 5em;
        font-size: 15px;
    }
`

const Macbook: React.FC<{code: string, name: string, tech: string, demo: string}> = (props) => {
    return(
        <LaptopContainer>
            <Laptop src={require("./../../Images/MacBook2.png")} alt="macbook"/>
            <InfoContainer>
                <Title>{props.name}</Title>
                <Tech>Tech Used: {props.tech}</Tech>
                <ButtonContainer>
                    <Button href={props.demo} target='_blank' style={{visibility: props.name === 'Personal Portfolio' ? 'hidden' : 'visible'}}>Demo</Button>
                    <Button href={props.code} target='_blank' style={{marginLeft: '40px'}}>{`Code </>`}</Button>
                </ButtonContainer>
            </InfoContainer>
        </LaptopContainer>
    )
}

export default Macbook;