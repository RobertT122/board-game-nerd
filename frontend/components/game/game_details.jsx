import React, { useEffect, useState } from "react";
import ContextSelectionBar from "./context_selection_bar";
import ContextSwitch from "./context_switch";
import RatingIcon from "../reviews/rating_icon";
import RatingLauncher from "../reviews/ratingLauncher";

const GameDetails = (props) => {
  let [game, setGame] = useState({})
  let [categories, setCategories] = useState([])

  useEffect(()=>{
    setGame(props.game)
    if(props.game && props.game.categories){
      setCategories(props.game.categories.map(id => props.categories[id]))
    }
  }, [props.game])

  let playTime = playtimeString(game.playtimeMin, game.playtimeMax)
  let playerCount = playerCountString(game.playerCountMin, game.playerCountMax)
  return (
    <div className="body">
      <div className="details-box">
        <img src={game.imageUrl} />
        <div>
          <div className="basic-info">
            <div className="title-block">
              <RatingIcon rating={game.avgRating}/>
              <h1 className="title"> {game.name} <span className="year">({game.year})</span></h1>
            </div>
              <p className="tagLine">{game.tagLine}</p>
          </div>

          <div className="metrics">
            <div>{playerCount}</div>
            <div >{playTime}</div>
          </div>

          <div className="credits">
            <div>Designer: {game.designer}</div>
            <div>Artist: {game.artist}</div>
          </div>

          <label htmlFor="category-game-list" className="category-title">Categories:</label>
          <ul id="category-game-list">
            {
              categories.map(category => (
                <li  key={category.name} className="category-game-item">
                  {category.name}
                </li>
              ))
            }
          </ul>

          <RatingLauncher />
        </div>
      </div>
      <ContextSelectionBar name={game.name} id={game.id}/>
      <div className="body-content">
        <ContextSwitch game={game}/>
      </div>
    </div>
  )

}

const playerCountString = (min, max)  => {
  if(max){
    return `${min} - ${max} Players`
  }
  if (min === 1){
    return 'Solo'
  }
  return `${min} Players`
}

const playtimeString = (min, max) => {
  if(max){
    return `${min}-${max} Min`
  }
  return `${min} Min`
}



export default GameDetails
