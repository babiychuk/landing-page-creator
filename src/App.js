import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NotFound from "./components/NotFound";
import Landing from "./components/Landing/Landing";
import LandingPage from "./components/LandingPage/LandingPage";
import LandingEditor from "./components/LandingEditor/LandingEditor";

class App extends Component {

  render () {  
    return (          
      <Switch>        
        <Route exact path='/' component={Landing} />       
        <Route exact path='/landings' component={Landing} />
        <Route exact path='/landingpage/:id' component={LandingPage} />
        <Route exact path='/landingeditor/:id' component={LandingEditor} /> 
        <Route exact path="/notfound" component={NotFound} status={404} />
        <Route path="*" component={NotFound} status={404} />
        <Redirect to="/" />        
      </Switch>     
    );
  }
}

export default (App);
