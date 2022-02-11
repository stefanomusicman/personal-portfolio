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
`

const Tech = styled.div`
    color: white;
    margin-bottom: 3em;
    position: absolute;
    font-size: 30px;
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

const Button = styled.button`
    background-color: hsl(28, 72%, 66%);
    color: white;
    border: none;
    border-radius: 10px;
    padding: 10px 15px;
    width: 10em;
    font-size: 20px;

    &:hover {
        cursor: pointer;
    }
`

const Macbook = () => {
    return(
        <LaptopContainer>
            <Laptop src={require("./../../Images/MacBook2.png")} alt="macbook" style={{width: '1000px', height: '600px', position: 'relative'}}/>
            <Title>Title</Title>
            <Tech>Tech Used: React</Tech>
            <ButtonContainer>
                <Button>Demo</Button>
                <Button style={{marginLeft: '40px'}}>{`Code </>`}</Button>
            </ButtonContainer>
        </LaptopContainer>
    )
}

export default Macbook;