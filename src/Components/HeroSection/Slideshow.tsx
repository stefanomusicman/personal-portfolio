import React from "react";
import styled from "styled-components";

const PrimaryContainer = styled.div`
    // display: flex;
    // justify-content: center;
    // align-items: center;
    // height: 75px;
    // max-width: 100px;
    // margin: 0 auto;
    // overflow: hidden;
    margin: 0;
    overflow: hidden;
    max-width: 500px;
`

const SlideShowSlider = styled.div`

`

const Slide = styled.div`
    height: 50px;
    width: 100%;
`

const Slideshow:React.FC = () => {

    const items:string[] = ['Front-End Developer', 'Artist', 'Coffee Connoisseur'] 

    return(
        <PrimaryContainer>
            <SlideShowSlider>
                {items.map((index) => <Slide key={index} />)}
            </SlideShowSlider>
        </PrimaryContainer>
    )
}

export default Slideshow;