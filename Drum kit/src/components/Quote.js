import React, { Component } from "react";

export class Quote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quote: "",
      image: "",
    };
  }

  handleClick = () => {
    const quotesArray = [
      "“Be yourself; everyone else is already taken.”",
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe",
      "A room without books is like a body without a soul.",
      "You only live once, but if you do it right, once is enough",
      "Be the change that you wish to see in the world.",
    ];
    let val = Math.floor(Math.random() * 5);
    this.setState({
      quote: quotesArray[val],
      image: `https://picsum.photos/200/300?random=${val}`,
    });
  };

  render() {
    return (
      <div>
        <h1>Quote : </h1>
        <div>
          <h3>{this.state.quote}</h3>
          <img src={this.state.image} alt="" />
        </div>
        <button onClick={this.handleClick}>Generate Quote</button>
      </div>
    );
  }
}

export default Quote;
