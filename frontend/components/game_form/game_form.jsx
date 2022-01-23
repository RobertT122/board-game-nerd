import React from "react";
import { useState } from "react";


const Game_Form = (props) =>{
  let [state, setState] = useState({

  });

  let [range, setRange] = useState({timeLimit: false, playerCount: false});

  const handleInput = e => {

  }

  const handleSubmit = e => {

  }

  return(
    <form>
      <label htmlFor=""> </label>
      <input 
        id=""
        type="text" 
      />

      <label htmlFor="game-image">Choose game image:</label>
      <input 
        type="file"
        accept="image/png, image/jpeg"
        id="game-image"

      />
    </form>
  )
}

export default Game_Form;

