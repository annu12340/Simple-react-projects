import React from "react";
import "./App.css";
import SinglePokecard from "./SinglePokecard";
function Pokedex(props) {
  let title;
  if (props.isWinner) {
    title = <h1 className="Pokedex-winner">Winning Hand</h1>;
  } else {
    title = <h1 className="Pokedex-loser">Losing Hand</h1>;
  }

  return (
    <div className="Pokecard1">
      <div className="Pokedex">
        {title}
        <h4>Total Experience: {props.exp}</h4>
        <div className="Pokedex-cards">
          {props.pokemon.map((p) => (
            <SinglePokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pokedex;
