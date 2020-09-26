import React from "react";

function Key(props) {
  const handleClick = () => {
    console.log("entered");
    console.log(`clicked on ${props.letter}`);
    var audio = new Audio(`${props.audio}`);
    audio.play();
  };
  return (
    <button className="key" onClick={handleClick}>
      <span className="key_name">{props.letter}</span>
      <p>{props.description}</p>
    </button>
  );
}

export default Key;
