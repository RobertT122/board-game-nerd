import React from "react";
import { Link } from "react-router-dom";
import RatingIcon from "../reviews/rating_icon";


const GameListItem = ({game}) => {

  const gameUrl = () => {
    return `/game/${game.id}/${game.name.toLowerCase().split(" ").join("-")}`
  }

  return (
    <Link to={gameUrl()} className="game-link">
      <RatingIcon rating={game.avgRating}/>
      <img className="thumbnail" src={game.imageUrl} />
      <span>{game.name}</span>
    </Link>
  )
}

export default GameListItem