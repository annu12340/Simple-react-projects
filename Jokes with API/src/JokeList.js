import React, { Component } from "react";
import axios from "axios";
import Joke from "./Joke";

const uuidv4 = require("uuid/v4");

class JokeList extends Component {
   static defaultProps = {
      numJokesToGet: 5,
   };
   constructor(props) {
      super(props);
      this.state = {
         jokes: JSON.parse(window.localStorage.getItem("jokes") || "[]"),
         loading: false,
      };
      this.seenJokes = new Set(this.state.jokes.map((joke) => joke.text));
      console.log(this.seenJokes);
   }

   componentDidMount() {
      if (this.state.jokes.length === 0) this.getJokes();
   }

   getJokes = async () => {
      try {
         let jokes = [];
         while (jokes.length < this.props.numJokesToGet) {
            let res = await axios.get("https://icanhazdadjoke.com/", {
               headers: {
                  Accept: "application/json",
               },
            });
            let newJoke = res.data.joke;
            if (!this.seenJokes.has(newJoke)) {
               jokes.push({ id: uuidv4(), text: newJoke, votes: 0 });
            } else {
               console.log("found dup");
               console.log(newJoke);
            }
         }
         this.setState(
            (st) => ({
               loading: false,
               jokes: [...st.jokes, ...jokes],
            }),
            () => window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes))
         );
      } catch (e) {
         alert(e);
         this.setState({
            loading: false,
         });
      }
   };

   handleVote = (id, delta) => {
      this.setState(
         (st) => ({
            jokes: st.jokes.map((joke) => (joke.id === id ? { ...joke, votes: joke.votes + delta } : joke)),
         }),
         () => window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes))
      );
   };

   handleClick = () => {
      this.setState(
         {
            loading: true,
         },
         this.getJokes
      );
   };

   render() {
      if (this.state.loading) {
         return (
            <div className='JokeList-spinner'>
               <i className='far fa-8x fa-laugh fa-spin'></i>
               <h1 className='JokeList-title'>loading</h1>
            </div>
         );
      }
      let jokes = this.state.jokes.sort((a, b) => b.votes - a.votes);
      return (
         <div className='JokeList'>
            <div className='JokeList-sidebar'>
               <h1 className='JokeList-title'>
                  <span>Dad</span> Jokes
               </h1>
               <img src='https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg' alt='icon' />
               <button className='JokeList-btn' onClick={this.handleClick}>
                  New Jokes
               </button>
            </div>
            <div className='JokeList-jokes'>
               {jokes.map((joke) => (
                  <Joke key={joke.id} votes={joke.votes} text={joke.text} upVote={() => this.handleVote(joke.id, 1)} downVote={() => this.handleVote(joke.id, -1)} />
               ))}
            </div>
         </div>
      );
   }
}

export default JokeList;
