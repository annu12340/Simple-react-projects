import React from "react";
import Key from "./components/Key";


function App() {
  return (
    <div className="App">
      <Key letter="A" description="clap" audio="https://s3-us-west-2.amazonaws.com/s.cdpn.io/330437/clap.wav" />
      <Key letter="S"  description="kick" audio="https://archive.org/download/sample_0_201909/kick.mp3"  />
      <Key letter="D"  description="tink" audio="https://archive.org/download/sample_0_201909/openhat.mp3"  />
      <Key letter="F"  description="boom" audio="https://archive.org/download/sample_0_201909/boom.mp3"  />
      <Key letter="G"  description="ride" audio="https://archive.org/download/sample_0_201909/ride.mp3"  />
      <Key letter="H"  description="tom" audio="https://archive.org/download/sample_0_201909/tom.mp3"  />
    </div>
  );
}

export default App;
