import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

class Navigation extends Component {
   render() {
      return (
         <div className="Navigation">
            <NavLink exact activeClassName='active' to='/'>
               Home
            </NavLink>
            <NavLink exact activeClassName='active' to='/A'>
               A
            </NavLink>
            <NavLink exact activeClassName='active' to='/B'>
               B
            </NavLink>
         </div>
      );
   }
}

export default Navigation;
