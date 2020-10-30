import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./index.css";

class A extends Component {
   render() {
      return (
         <div className='content'>
            Inside A
            <br />
            <Link exact to='/Home'>
               <button>Go back</button>
            </Link>
         </div>
      );
   }
}

export default A;
