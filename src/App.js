import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Signin from "./pages/Signin/Signin";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import FaithLift from "./pages/FaithLift/FaithLift";
import "./App.css";
const App = () =>{
    return(
        <Router>
            <Switch>
                <Route path="/" exact component={Signin}/>
                <Route path="/home" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/faithlift" component={FaithLift} />
            </Switch>
        </Router>
    )
}

export default App;