import React from "react";
import { pageAnimation } from "./animation";
import { motion } from "framer-motion";
const ContentUs = () => {
    return (
        <motion.div
            exit="exit"
            variants={pageAnimation}
            initial="hidden"
            animate="show"
        >
            <h1>ContentUs</h1>
        </motion.div>
    );
};

export default ContentUs;
