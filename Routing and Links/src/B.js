import React, { Component } from "react";
import { Link } from "react-router-dom";
class B extends Component {
   render() {
      return (
         <div className='content'>
            Inside B <br />
            <Link exact to='/Home'>
               <button>Go back</button>
            </Link>
         </div>
      );
   }
}

export default B;
