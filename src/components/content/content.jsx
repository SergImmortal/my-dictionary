import React from "react";
import {Route, Switch} from "react-router-dom";
import Home from "../../pages/home/home";
import Dictionary from "../../pages/dictionary/dictionary";
import Info from "../../pages/info/info";
import Training from "../../pages/training/training";
import SignUp from "../signUp/signUp";

const Content = () => {
    return(
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/dictionary" component={Dictionary}/>
            <Route path="/info" component={Info}/>
            <Route path="/training" component={Training}/>
            <Route path="/sign-up" component={SignUp}/>
        </Switch>
    )
};

export default Content;