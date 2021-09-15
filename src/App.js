import React from "react";
import AboutUs from "./Pages/AboutUs";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import ContentUs from "./Pages/ContentUs";
import OurWork from "./Pages/OurWork";

//Router
import { Route, Switch } from "react-router-dom";
const App = () => {
    return (
        <div className="App">
            <GlobalStyle />
            <Nav />
            <Switch>
                <Route exact path="/" component={AboutUs} />
                <Route path="/work" component={OurWork} />
                <Route path="/content" component={ContentUs} />
                <Route>
                    <h1>Route Not Found</h1>
                </Route>
            </Switch>
        </div>
    );
};

export default App;
