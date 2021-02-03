import React from "react";
import { BrowserRouter as Router, Switch} from "react-router-dom";
import {PrivateRoute, PublicRoute} from "./hoc";
import Signin from "./pages/Signin/Signin";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import FaithLift from "./pages/FaithLift/FaithLift";
import Socials from "./pages/Socials/Socials";
import Slideshow from "./pages/Slideshow/Slideshow";
import "./App.css";
const App = () =>{
    return(
        <Router>
            <Switch>
                <PublicRoute path="/" exact component={Signin}/>
                <PrivateRoute path="/home" component={Home} />
                <PrivateRoute path="/about" component={About} />
                <PrivateRoute path="/faithlift" component={FaithLift} />
                <PrivateRoute path="/socials" component={Socials} />
                <PrivateRoute path="/slideshow" component={Slideshow} />
            </Switch>
        </Router>
    )
}

export default App;