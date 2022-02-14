import React, { useState, useEffect } from "react";
import styled from "styled-components";

const PrimaryContainer = styled.div`
    // display: flex;
    // justify-content: center;
    // align-items: center;
    // height: 75px;
    // max-width: 100px;
    // margin: 0 auto;
    // overflow: hidden;
    margin: 0 auto;
    overflow: hidden;
    max-width: 500px;
    /* padding-top: 4em; */
`

const SlideShowSlider = styled.div`
    white-space: nowrap;
    transition: ease 1500ms;
`

const Slide = styled.div`
    height: 100px;
    width: 100%;
    color: pink;
    display: inline-block;
    text-align: center;
    font-size: 45px;
    font-weight: bold;
`

type Description = {
    name: string,
    color: string
}

const items:Description[] = [{name: 'Front-End Developer', color: 'hsl(155, 70%, 49%)'}, {name: 'Artist', color: 'white'}, {name: 'Coffee Connoisseur', color: 'white'}];
const delay:number = 2500; 

const Slideshow:React.FC = () => {

    const [index, setIndex] = useState(0);

    useEffect(() => {
        setTimeout(() => setIndex((prevIndex):any => prevIndex === items.length - 1 ? 0 : prevIndex + 1),
        delay);
        return () => {};
    }, [index])

    return(
        <PrimaryContainer>
            <SlideShowSlider style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
                {items.map((item, index) => <Slide key={index} style={{color: `${item.color}`}}>{item.name}</Slide>)}
            </SlideShowSlider>
        </PrimaryContainer>
    )
}

export default Slideshow;