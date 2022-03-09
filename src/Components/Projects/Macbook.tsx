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
    position: relative
`

const Title = styled.h3`
    color: white;
    margin-bottom: 10em;
    position: absolute;
    font-size: 40px;
    font-family: 'Asap';
`

const Tech = styled.div`
    color: white;
    margin-bottom: 3em;
    width: 700px;
    position: absolute;
    font-size: 30px;
    text-align: center;
    font-family: 'Asap';
`

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    height: 10em;
    width: 100%;
    margin-top: 12em;
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
`

const Macbook: React.FC<{code: string, name: string, tech: string}> = (props) => {
    return(
        <LaptopContainer>
            <Laptop src={require("./../../Images/MacBook2.png")} alt="macbook" style={{width: '1000px', height: '600px', position: 'relative'}}/>
            <Title>{props.name}</Title>
            <Tech>Tech Used: {props.tech}</Tech>
            <ButtonContainer>
                <Button>Demo</Button>
                <Button href={props.code} target='_blank' style={{marginLeft: '40px'}}>{`Code </>`}</Button>
            </ButtonContainer>
        </LaptopContainer>
    )
}

export default Macbook;