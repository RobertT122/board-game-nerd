import React, { useEffect } from "react";
import { useState } from "react";


const GameForm = (props) =>{
  let [game, setGame] = useState(props.game);
  
  let [timeRange, setTimeRange] = useState(false);
  const toggleTimeRange = e => {
    e.preventDefault();
    if(timeRange) {
      setGame(Object.assign({}, game, {playtime_max: null}));
      setTimeRange(false);
    } else {
      setTimeRange(true);
    }
  }

  let [countRange, setCountRange] = useState(false);
  const toggleCountRange = e => {
    e.preventDefault();
    if(countRange) {
      setGame(Object.assign({}, game, {player_count_max: null}));
      setCountRange(false);
    } else {
      setCountRange(true);
    }
  }



  const handleInput = (type) => (
    e => {
      setGame(Object.assign({}, game, {[type]: e.currentTarget.value}))
    }
  )

  const handlePhoto = e => {
    console.log(URL.createObjectURL(e.currentTarget.files[0]))
    return setGame(Object.assign({}, game, {photo: e.currentTarget.files[0]}))
  }

  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(game).forEach(key => {
      formData.append(`game[${key}]`, game[key])
    });
    props.submitAction(formData)
  }

  const playerCountRange = () => {
    if (countRange){
      return(
        <>
          <span> - </span>
          <input 
            id="game-player-count-max-input"
            type="number" 
            min={`${1 + parseInt(game.player_count_min, 10)}`} 
            max="100" step="1"
            onChange={handleInput('player_count_max')}
          />
        </>
      )
    } else {
      return <></>
    }
  }

  const  playTimeRange = () => {
    if(timeRange){
      return(
        <>
          <span> - </span>
          <input 
            id="game-playtime-max-input"
            type="number" 
            min={`${1 + parseInt(game.playtime_min, 10)}`} 
            max="10000" step="1"
            onChange={handleInput('playtime_max')}
          />
        </>
      )
    } else {
      return <></>
    }
  }

  return(
    <form onSubmit={handleSubmit} className="game-form">
      <div className="game-form-top">
        <label htmlFor="game-name-input"> Title: </label>
        <input 
          id="game-name-input"
          type="text" 
          onChange={handleInput('name')}
        />

        <label htmlFor="game-year-input"> Year: </label>
        <input 
          id="game-year-input"
          type="number" 
          min="0" max="3000" step="1"
          onChange={handleInput('year')}
        />
      </div>

      <div className="image-container">
        <label htmlFor="game-photo-input" className="game-photo-input-label" >Choose game image:</label>
        <input 
          type="file"
          accept="image/png, image/jpeg"
          id="game-photo-input"
          onChange={handlePhoto}
        />
        <img src={game.photo? URL.createObjectURL(game.photo) : window.noImage}  className="preview-image"/>
      </div>


      <label htmlFor="game-designer-input"> Designer(s): </label>
      <input 
        id="game-designer-input"
        type="text" 
        onChange={handleInput('designer')}
      />

      <label htmlFor="game-artist-input"> Artist(s): </label>
      <input 
        id="game-artist-input"
        type="text" 
        onChange={handleInput('artist')}
      />

      <label htmlFor="game-tagline-input"> Tagline: </label>
      <textarea
        id="game-tagline-input"
        onChange={handleInput('tag_line')}
      />
      <label htmlFor="game-description-input"> Description: </label>
      <textarea 
        id="game-description-input"
        onChange={handleInput('description')}
      />

      <label htmlFor="game-player-count-input ">Player Count</label>
      <div id="game-player-count-input">
        <input 
          id="game-player-count-min-input"
          type="number" 
          min="1" max="100" step="1"
          onChange={handleInput('player_count_min')}
        />
        {
          playerCountRange()
        }
        <button onClick={toggleCountRange} className="range-button">{countRange? "absolute" : "range"}</button>
      </div>


      <label htmlFor="game-playtime-input">Play Time (minutes) </label>
      <div id="game-playtime-input">
        <input 
          id="game-playtime-min-input"
          type="number" 
          min="1" max="10000" step="1"
          onChange={handleInput('playtime_min')}
        />
        {
          playTimeRange()
        }
        <button onClick={toggleTimeRange} className="range-button">{timeRange? "absolute" : "range"}</button>
      </div>

      <button type="submit" className="submit-button">Create New game</button>

    </form>
  )
}

export default GameForm;

