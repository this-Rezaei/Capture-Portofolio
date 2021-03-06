import React from "react";
import home1 from "../img/home1.png";
import { About, Image, Description, Hide } from "../Style";
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../Pages/animation";
import Wave from "./Wave";
const AboutSection = () => {
    return (
        <About>
            <Description>
                <motion.div>
                    <Hide>
                        <motion.h2 variants={titleAnim}>
                            We Work to make
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>
                            your <span>dreams</span> come
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>true .</motion.h2>
                    </Hide>
                </motion.div>

                <motion.p variants={fade}>
                    Contact us for any photography or videography ideas that you
                    have. We have professionals with amazing skills to help you
                    achieve it.
                </motion.p>
                <motion.button variants={fade}>Contact Us</motion.button>
            </Description>

            <Image>
                <motion.img variants={photoAnim} src={home1} alt="Photo" />
            </Image>
            <Wave />
        </About>
    );
};

export default AboutSection;
