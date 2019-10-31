import React, { Component } from "react";
import { Route, HashRouter } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import LandingPage from "./components/LandingPage/LandingPage";
import LandingEditor from "./components/LandingEditor/LandingEditor";

class App extends Component {

  render () {  
    return (          
      <HashRouter basename='/'>        
        <Route exact path='/' component={Landing} />       
        <Route exact path='/landings' component={Landing} />
        <Route exact path='/landingpage/:id' component={LandingPage} />
        <Route exact path='/landingeditor/:id' component={LandingEditor} />      
      </HashRouter>     
    );
  }
}

export default (App);
