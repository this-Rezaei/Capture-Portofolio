import React, { useState } from "react";
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";
import { About, Image, Description } from "../Style";
import styled from "styled-components";

import { useScroll } from "./UseScroll";

import { scrollReveal } from "../Pages/animation";
const ServicesSection = () => {
    const [element, controls] = useScroll();
    return (
        <Services
            variants={scrollReveal}
            initial="hidden"
            animate={controls}
            ref={element}
        >
            <Description>
                <h2>
                    High <span>Quality</span> services
                </h2>

                <Cards>
                    <Card>
                        <div className="icon">
                            <img src={clock} alt="icon" />
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={teamwork} alt="icon" />
                            <h3>TeamWork</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={diaphragm} alt="icon" />
                            <h3>Diaphragm</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={money} alt="icon" />
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                </Cards>
            </Description>
            <Image>
                <img src={home2} alt="pics" />
            </Image>
        </Services>
    );
};
const Services = styled(About)`
    h2 {
        padding-bottom: 3rem;
    }
    p {
        width: 70%;
        padding: 2rem 0rem 4rem 0rem;
    }
`;
const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
`;
const Card = styled.div`
    flex-basis: 15rem;

    .icon {
        display: flex;
        align-items: center;
    }
    h3 {
        margin-left: 1rem;
        background: white;
        color: black;
        padding: 1rem;
        border-radius: 10px;
    }
`;
export default ServicesSection;
