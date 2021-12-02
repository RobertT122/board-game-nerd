import React from "react";
import { Link } from "react-router-dom";
import RatingIcon from "../reviews/rating_icon";


const GameListItem = ({game, rank}) => {

  const gameUrl = () => {
    return `/game/${game.id}/${game.name.toLowerCase().split(" ").join("-")}`
  }

  return (
    <Link to={gameUrl()} className="game-link">
      <div className="rank"><span>{rank}</span></div>
      <img className="thumbnail" src={game.imageUrl} />
      <span>{game.name}</span>
      <RatingIcon rating={game.avgRating}/>
    </Link>
  )
}

export default GameListItem