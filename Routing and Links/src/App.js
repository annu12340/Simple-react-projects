import React, { Component } from "react";

import "./App.css";
import A from "./A";
import B from "./B";
import C from "./C";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Navigation from "./Navigation";
import Food from "./Food";

class App extends Component {
   render() {
      return (
         <div>
            <Navigation />
            <Switch>
               <Route exact path='/' component={Home} />
               <Route exact path='/A' component={A} />
               <Route exact path='/B' component={B} />
               <Route exact path='/C' component={C} />
               <Route exact path="/food/:name" component={Food} />
               <Route exact path='/food/:name' render={(p) => <Food name={p.match.param.name} />} />
            </Switch>
         </div>
      );
   }
}

export default App;
