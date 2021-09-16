import React from "react";
import AboutUs from "./Pages/AboutUs";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import ContentUs from "./Pages/ContentUs";
import OurWork from "./Pages/OurWork";
import MovieDetails from "./Pages/MovieDetails";
import styled from "styled-components";
//Router
import { Route, Switch, useLocation } from "react-router-dom";
//Animation
import { AnimatePresence } from "framer-motion";
const App = () => {
    const location = useLocation();
    return (
        <div className="App">
            <GlobalStyle />
            <Nav />
            <AnimatePresence exitBeforeEnter>
                <Switch location={location} key={location.pathname}>
                    <Route exact path="/" component={AboutUs} />
                    <Route exact path="/work" component={OurWork} />
                    <Route path="/content" component={ContentUs} />
                    <Route path="/work/:id" component={MovieDetails} />
                    <Route>
                        <H1>Route Not Found</H1>
                    </Route>
                </Switch>
            </AnimatePresence>
        </div>
    );
};
const H1 = styled.h1`
    display: flex;
    justify-content: center;
    margin-top: 10rem;
    color: #23d997;
`;
export default App;
