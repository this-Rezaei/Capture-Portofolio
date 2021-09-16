import React from "react";
import { About } from "../Style";
import styled from "styled-components";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
const FaqSection = () => {
    return (
        <Faq>
            <h2>
                Any Questions <span>FAQ</span>
            </h2>
            <AnimateSharedLayout>
                <Toggle title="How Do I Start?">
                    {/* <h4>How Do I Start?</h4> */}
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Asperiores doloremque nam
                        </p>
                    </div>
                </Toggle>
                <Toggle title="Daily Schedule?">
                    {/* <h4>Daily Schedule?</h4> */}
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Asperiores doloremque nam
                        </p>
                    </div>
                </Toggle>
                <Toggle title="Diferrent Payment Methods?">
                    {/* <h4>Diferrent Payment Methods?</h4> */}
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Asperiores doloremque nam
                        </p>
                    </div>
                </Toggle>
                <Toggle title="What Products do you offer?">
                    {/* <h4>What Products do you offer?</h4> */}
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Asperiores doloremque nam
                        </p>
                    </div>
                </Toggle>
            </AnimateSharedLayout>
        </Faq>
    );
};
const Faq = styled(About)`
    display: block;
    span {
        display: block;
    }
    h2 {
        padding-bottom: 2rem;
        font-weight: lighter;
    }
    .faq-line {
        background: #cccccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }
    .question {
        padding: 1.5rem 0rem;
        cursor: pointer;
    }
    .answer {
        padding: 1rem 0rem;
        p {
            padding: 1rem 0rem;
        }
    }
`;
export default FaqSection;
