import React from "react";
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
    pageAnimation,
    sliderContainer,
    slider,
    lineAnim,
    fade,
    photoAnim,
} from "./animation";
import { motion } from "framer-motion";
import { useScroll } from "../components/UseScroll";
import { scrollReveal } from "../Pages/animation";
const OurWork = () => {
    const [element, controls] = useScroll();
    const [element1, controls2] = useScroll();
    return (
        <Work
            exit="exit"
            variants={pageAnimation}
            initial="hidden"
            animate="show"
        >
            <motion.div variants={sliderContainer}>
                <Frame1 variants={slider}></Frame1>
                <Frame2 variants={slider}></Frame2>
                <Frame3 variants={slider}></Frame3>
                <Frame4 variants={slider}></Frame4>
            </motion.div>
            <Movie>
                <motion.h2 variants={fade}>Good Times</motion.h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/good-times">
                    <motion.img
                        variants={photoAnim}
                        src={goodtimes}
                        alt="Good Times"
                    />
                </Link>
            </Movie>

            <Movie
                variants={scrollReveal}
                initial="hidden"
                animate={controls}
                ref={element}
            >
                <h2>The Athlete</h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/the-athlete">
                    <img src={athlete} alt="Athlete"></img>
                </Link>
            </Movie>

            <Movie
                variants={scrollReveal}
                initial="hidden"
                animate={controls2}
                ref={element1}
            >
                <h2>The Racer</h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/the-racer">
                    <img src={theracer} alt="Theracer"></img>
                </Link>
            </Movie>
        </Work>
    );
};

const Work = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    background: #1b1b1b;
    h2 {
        color: white;
        padding: 1rem 0rem;
    }
`;
const Movie = styled(motion.div)`
    padding-bottom: 10rem;
    .line {
        border-radius: 7px;
        height: 0.4rem;
        background: #23d997;
        margin-bottom: 3rem;
    }
    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
        border-radius: 10px;
    }
`;

//Frame Anima
const Frame1 = styled(motion.div)`
    position: fixed;
    left: 0;
    top: 10%;
    width: 100%;
    height: 100vh;
    background: #fffebf;
    z-index: 2;
`;
const Frame2 = styled(Frame1)`
    background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
    background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
    background: #8effa0;
`;
export default OurWork;
