import React, { useEffect, useState } from "react";


const GameDetails = (props) => {
  let [game, setGame] = useState({})
  useEffect(()=>{
    setGame(props.game)
  })

  let playTime = playtimeString(game.playtimeMin, game.playtimeMax)
  let playerCount = playerCountString(game.playerCountMin, game.playerCountMax)

  return (
    <>
      <div className="details-box">
        <img src={game.imageUrl} />
        <div>
          <div className="basic-info">
            <div className="rating"></div>
            <h1 className="title"> {game.name} <span className="year">({game.year})</span></h1>
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
          
        </div>
      </div>
      <nav>
        navbar
      </nav>
      <div>
        context sensative display
      {/* <p>{game.description}</p> */}
      </div>
    </>
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
