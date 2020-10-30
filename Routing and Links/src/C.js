import React, { Component } from "react";
import { Link } from "react-router-dom";
class C extends Component {
   render() {
      return (
         <div className='content'>
            Inside C <br />
            <Link exact to='/Home'>
               <button>Go back</button>
            </Link>
         </div>
      );
   }
}

export default C;
