import React from "react";
import AboutUs from "./Pages/AboutUs";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import ContentUs from "./Pages/ContentUs";
import OurWork from "./Pages/OurWork";
import MovieDetails from "./Pages/MovieDetails";
import styled from "styled-components";
//Router

import { Route, Switch } from "react-router-dom";
const App = () => {
    return (
        <div className="App">
            <GlobalStyle />
            <Nav />
            <Switch>
                <Route exact path="/" component={AboutUs} />
                <Route exact path="/work" component={OurWork} />
                <Route path="/content" component={ContentUs} />
                <Route path="/work/:id" component={MovieDetails} />
                <Route>
                    <H1>Route Not Found</H1>
                </Route>
            </Switch>
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
