import React, { useState } from "react";
import { HeroBtnWrapper, ArrowDownward, ArrowDown } from '../StyledComponents/HomeElements'
import { HomeButton } from '../StyledComponents/HomeButton'
import * as Scroll from 'react-scroll';

export const ScrollButton = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }
    return (
        <HeroBtnWrapper style={{ position: 'absolute', top: "425px" }}>
            <Scroll.Link style={{ textDecoration: 'none' }} to="container" spy={true} smooth={true} duration={250} offset={-80}>
                <HomeButton onMouseEnter={onHover} onMouseLeave={onHover} >
                    {hover ? <ArrowDownward /> : <ArrowDown />}
                </HomeButton>
            </Scroll.Link>
        </HeroBtnWrapper>
    );
};
