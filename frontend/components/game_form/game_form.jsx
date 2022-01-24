import React from "react";
import { useState } from "react";


const Game_Form = (props) =>{
  let [game, setGame] = useState({


  });

  let [range, setRange] = useState({timeLimit: false, playerCount: false});

  const handleInput = (type) => (
    e => {
      setGame({[type]: e.currentTarget.value})
    }
  )

  const handleSubmit = e => {
    e.preventDefalut();
    const formData = new FormData();
    Object.keys(game).forEach(key => {
      formData.append(`game[${key}]`, game[key])
    });
    props.submitAction(formData)
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

export default GameForm;

