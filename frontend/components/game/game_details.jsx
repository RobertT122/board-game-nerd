import React, { useEffect, useState } from "react";


const GameDetails = (props) => {
  let [game, setGame] = useState({})
  useEffect(()=>{
    setGame(props.game)
  })

  let playTime = playtimeString(game.playtimeMin, game.playtimeMax)
  let playerCount = playerCountString(game.playerCountMin, game.playerCountMax)

  return (
    <div>
      <div className="rating"></div>
      <h1 className="name"> {game.name} </h1>
      <span className="year">({game.year})</span>
      <img src={game.imageUrl} />
      <p className="tagline">{game.tagline}</p>
      <div>{playTime}</div>
      <div>{playerCount}</div>
      <div>{game.designerName}</div>
      <div>{game.artist}</div>
      {/* <p>{game.description}</p> */}
    </div>
  )

}

const playerCountString = (min, max)  => {
  if(max){
    return `${min} - ${max}`
  }
  if (min === 1){
    return 'Solo'
  }
  return `${min}`
}

const playtimeString = (min, max) => {
  if(max){
    return `${min}-${max} minutes`
  }
  return `${min} minutes`
}


export default GameDetails
