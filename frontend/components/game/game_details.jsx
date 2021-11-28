import React, { useEffect, useState } from "react";

const GameDetails = (props) => {

let [game, setGame] = useState({})
useEffect(()=>{
  setGame(props.game)
})

return (
  <div>
    <h1>{game.name}</h1>
    <p>{game.description}</p>
    <p>{game.designer_name}</p>
  </div>
)

}


export default GameDetails
