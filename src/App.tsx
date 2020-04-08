import React, { useState } from "react";
import "./App.css";

const App: React.FC = () => {
  const [triggeredPad, setTriggeredPad] = useState("");

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    let keyElement: any = event.currentTarget.firstChild;
    if (keyElement) {
      keyElement.play();
      setTriggeredPad(event.currentTarget.id);
    }
  };

  const handleKeyUp = (event: any) => {
    let keyElement: any = document.getElementById(event.key.toUpperCase());
    if (keyElement) {
      keyElement.play();
      setTriggeredPad(keyElement.parentElement.id);
    }
  };
  document.body.addEventListener("keyup", handleKeyUp);
  return (
    <div id="drum-machine">
      <button onClick={handleClick} id="Heater-1" className="drum-pad">
        <audio id="Q" src="./audio/Heater-1.mp3" className="clip">
          Your browser does not support audio element
        </audio>
        Q
      </button>
      <button onClick={handleClick} id="Heater-2" className="drum-pad">
        <audio id="W" src="./audio/Heater-2.mp3" className="clip">
          Your browser does not support audio element
        </audio>
        W
      </button>
      <button onClick={handleClick} id="Heater-3" className="drum-pad">
        <audio id="E" src="./audio/Heater-3.mp3" className="clip">
          Your browser does not support audio element
        </audio>
        E
      </button>
      <button onClick={handleClick} id="Heater-4_1" className="drum-pad">
        <audio id="A" src="./audio/Heater-4_1.mp3" className="clip">
          Your browser does not support audio element
        </audio>
        A
      </button>
      <button onClick={handleClick} id="Heater-6" className="drum-pad">
        <audio id="S" src="./audio/Heater-6.mp3" className="clip">
          Your browser does not support audio element
        </audio>
        S
      </button>
      <button onClick={handleClick} id="Kick_n_Hat" className="drum-pad">
        <audio id="D" src="./audio/Kick_n_Hat.mp3" className="clip">
          Your browser does not support audio element
        </audio>
        D
      </button>
      <button onClick={handleClick} id="RP4_KICK_1" className="drum-pad">
        <audio id="Z" src="./audio/RP4_KICK_1.mp3" className="clip">
          Your browser does not support audio element
        </audio>
        Z
      </button>
      <button onClick={handleClick} id="Cev_H2" className="drum-pad">
        <audio id="X" src="./audio/Cev_H2.mp3" className="clip">
          Your browser does not support audio element
        </audio>
        X
      </button>
      <button onClick={handleClick} id="Dsc_Oh" className="drum-pad">
        <audio id="C" src="./audio/Dsc_Oh.mp3" className="clip">
          Your browser does not support audio element
        </audio>
        C
      </button>
      <h4 id="display">{triggeredPad}</h4>
    </div>
  );
};

export default App;
