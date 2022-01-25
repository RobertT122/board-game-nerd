import React, { useEffect } from "react";
import { useState } from "react";


const GameForm = (props) =>{
  let [game, setGame] = useState(props.game);
  console.log(game)
  
  let [range, setRange] = useState({timeLimit: false, playerCount: false});

  const handleInput = (type) => (
    e => {
      setGame(Object.assign({}, game, {[type]: e.currentTarget.value}))
    }
  )

  const handlePhoto = e => (
    setGame(Object.assign({}, game, {photo: e.currentTarget.files[0]}))
  )

  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(game).forEach(key => {
      formData.append(`game[${key}]`, game[key])
    });
    props.submitAction(formData)
  }

  return(
    <form onSubmit={handleSubmit} className="game-form">
      <label htmlFor="game-name-input"> title: </label>
      <input 
        id="game-name-input"
        type="text" 
        onChange={handleInput('name')}
      />

      <label htmlFor="game-year-input"> year of release: </label>
      <input 
        id="game-year-input"
        type="number" 
        min="1900" max="2099" step="1"
        onChange={handleInput('year')}
      />

      <label htmlFor="game-designer-input"> "designer(s):" </label>
      <input 
        id="game-designer-input"
        type="text" 
        onChange={handleInput('designer')}
      />

      <label htmlFor="game-artist-input"> "artist(s):" </label>
      <input 
        id="game-artist-input"
        type="text" 
        onChange={handleInput('artist')}
      />

      <label htmlFor="game-tagline-input"> tagline: </label>
      <input 
        id="game-tagline-input"
        type="text" 
        onChange={handleInput('tag_line')}
      />

      <label htmlFor="game-description-input"> detailed description: </label>
      <input 
        id="game-description-input"
        type="text" 
        onChange={handleInput('description')}
      />

      <label htmlFor="game-player-count-min-input"> "player count minimum: "</label>
      <input 
        id="game-player-count-min-input"
        type="number" 
        min="1" max="100" step="1"
        onChange={handleInput('player_count_min')}
      />

      <label htmlFor="game-player-count-max-input"> "player count maximum (optional): "</label>
      <input 
        id="game-player-count-max-input"
        type="number" 
        min="2" max="100" step="1"
        onChange={handleInput('player_count_max')}
      />

      <label htmlFor="game-playtime-min-input"> "playtime minimum (min): "</label>
      <input 
        id="game-playtime-min-input"
        type="number" 
        min="1" max="10000" step="1"
        onChange={handleInput('playtime_min')}
      />

      <label htmlFor="game-playtime-max-input"> "playtime maximum (optional): "</label>
      <input 
        id="game-playtime-max-input"
        type="number" 
        min="2" max="10000" step="1"
        onChange={handleInput('playtime_max')}
      />


      <label htmlFor="game-photo-input">Choose game image:</label>
      <input 
        type="file"
        accept="image/png, image/jpeg"
        id="game-photo-input"
        onChange={handlePhoto}
      />

      <button type="submit">Create New game</button>

    </form>
  )
}

export default GameForm;

