import React, { useState } from "react";
import "./App.css";

function App() {
  let h = "";
  let c = "";
  let msg = "";
  function computer() {
    console.log("entered");
    let r = Math.floor(Math.random() * 3);
    setcomp((comp = r));
  }

  function handleClick(val) {
    sethuman((human = val));
    computer();

    if (human > comp) {
      sethumanScore((humanScore += 1));
    } else if (human < comp) {
      setcompScore((compScore += 1));
    }
  }
  let [comp, setcomp] = useState(0);
  let [human, sethuman] = useState(0);

  let [humanScore, sethumanScore] = useState(0);
  let [compScore, setcompScore] = useState(0);
  return (
    <div>
      <div className="usercontainer">
        <button onClick={() => handleClick(0)}>
          <i id="rock" class="fa fa-hand-rock-o choice"></i> 0 Rock
        </button>
        <br />
        <br />

        <button onClick={() => handleClick(1)}>
          <i id="paper" class="fa fa-hand-paper-o choice"></i> Paper
        </button>
        <br />
        <br />

        <button onClick={() => handleClick(2)}>
          <i id="scissors" class="fa fa-hand-scissors-o choice"></i> Scissors
        </button>
      </div>

      <div class="score-board">
        <p className="text">
          {" "}
          You choose {human == 0 ? (h = "rock") : human == 1 ? (h = "paper") : (h = "scissors")} <br /> The computer choose{" "}
          {comp == 0 ? (c = "rock") : comp == 1 ? (c = "paper") : (c = "scissors")}
        </p>
        <h6> {human == comp ? (msg = "It's a tie") : human > comp ? (msg = "Yaa :) you won") : (msg = " Ooo :(  computer won")}</h6>
        <br />
        <div id="user-label" class="badge">
          user
        </div>
        <div id="computer-label" class="badge">
          comp
        </div>
        <span id="user-score"> {humanScore}</span> : <span id="computer-score">{compScore}</span>
      </div>
    </div>
  );
}

export default App;
