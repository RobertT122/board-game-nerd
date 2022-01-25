import React from "react";
import { connect } from "react-redux";
import { createNewGame } from "../../util/games_util";
import GameForm from './game_form'

const CreateGame = props => {
  let game = {
    artist: '',
    description: '',
    designer: '',
    name: '',
    player_count_min: null,
    player_count_max: null,
    playtime_max: null,
    playtime_min: null,
    tag_line: '',
    year: null,
    photo: null,
    uploader_id: props.uploader_id
  }

  return(
    <GameForm submitAction={createNewGame}  game={game}/>
  )
}

const mapSTP = ({session: {id: uploader_id}}) =>({
  uploader_id
})

const CreateGameContainer = connect(mapSTP, null)(CreateGame)

export default CreateGameContainer