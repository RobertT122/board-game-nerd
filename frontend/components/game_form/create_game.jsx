import React from "react";
import { connect } from "react-redux";
import { createNewGame } from "../../actions/game_actions";
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
    year: 2022,
    photo: null,
    uploader_id: props.uploader_id
  }

  let categoryArr = []

  let designerArr = ['']
  let artistArr = ['']

  return(
    <GameForm 
      submitAction={props.createNewGame}  
      game={game} 
      designerArr={designerArr} 
      artistArr={artistArr} 
      categoryArr={categoryArr}
    />
  )
}

const mapSTP = ({session: {id: uploader_id}}) =>({
  uploader_id
})

const mapDTP = dispatch => ({
  createNewGame: (formData, categoryArr) => dispatch(createNewGame(formData, categoryArr))
})
const CreateGameContainer = connect(mapSTP, mapDTP)(CreateGame)

export default CreateGameContainer