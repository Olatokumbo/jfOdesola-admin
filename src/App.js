import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Signin from "./pages/Signin/Signin";
import "./App.css";
const App = () =>{
    return(
        <Router>
            <Switch>
                <Route exact component={Signin}/>
            </Switch>
        </Router>
    )
}

export default App;