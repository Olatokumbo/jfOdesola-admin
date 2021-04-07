import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { PrivateRoute, PublicRoute } from "./hoc";
import Signin from "./pages/Signin/Signin";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import FaithLift from "./pages/FaithLift/FaithLift";
import Socials from "./pages/Socials/Socials";
import Slideshow from "./pages/Slideshow/Slideshow";
import Articles from "./pages/Articles/Articles";
import NewArticle from "./pages/NewArticle/NewArticle";
import ArticleInfo from "./pages/ArticleInfo/ArticleInfo";

import "./App.css";
const App = () => {
  return (
    <Router>
      <Switch>
        <PublicRoute path="/" exact component={Signin} />
        <PrivateRoute path="/home" component={Home} />
        <PrivateRoute path="/about" component={About} />
        <PrivateRoute path="/faithlift" component={FaithLift} />
        <PrivateRoute path="/socials" component={Socials} />
        <PrivateRoute path="/slideshow" component={Slideshow} />
        <PrivateRoute path="/articles" component={Articles} />
        <PrivateRoute path="/new/article" component={NewArticle} />
        <PrivateRoute path="/article/:id" component={ArticleInfo} />
      </Switch>
    </Router>
  );
};

export default App;
