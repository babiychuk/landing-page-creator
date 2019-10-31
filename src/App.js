import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import LandingPage from "./components/LandingPage/LandingPage";
import LandingEditor from "./components/LandingEditor/LandingEditor";

class App extends Component {

  render () {  
    return (          
      <Switch>        
        <Route exact path='/landing-page-creator/' component={Landing} />       
        <Route exact path='/landing-page-creator/landings' component={Landing} />
        <Route exact path='/landing-page-creator/landingpage/:id' component={LandingPage} />
        <Route exact path='/landing-page-creator/landingeditor/:id' component={LandingEditor} />      
      </Switch>     
    );
  }
}

export default (App);
