import React from "react";
import { createNewGame } from "../../util/games_util";
import GameForm from './game_form'

const CreateGame = props => {


  return(
    <GameForm submitAction={createNewGame} />
  )
}

export default CreateGame