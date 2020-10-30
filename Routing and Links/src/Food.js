import React, { Component } from "react";

class Food extends Component {
   render() {
      const url = `https://source.unsplash.com/1600x900/?${this.props.match.params.name}`;
      return (
         <div className='Food'>
            {
               <div>
                  <h1>I love to eat {this.props.match.params.name}</h1>
                  <img src={url} alt={this.props.match.params.name} width='500'/>
               </div>
            }
         </div>
      );
   }
}

export default Food;
