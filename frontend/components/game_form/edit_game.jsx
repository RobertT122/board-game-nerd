import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import GameForm from "./game_form";
import { retrieveGame } from "../../actions/game_actions";


const EditGame = (props) => {
  const history = useHistory()
  const location = useLocation()
  const [pop, setPop] = useState(false)

  useEffect(()=> {
    console.log('start')
    props.retrieveGame()
    setPop(true)
  }, [])

  if(!props.loading && pop){
    // if (props.user_id !== props.game.uploader_id){
    //   history.push(`./game/${props.game.id}`)
    // } else {
      let {
        artist, description, designer, name, year,
        tagLine: tag_line,
        playerCountMax: player_count_max,
        playerCountMin: player_count_min,
        playertimeMax: playtime_max,
        playtimeMin: playtime_min,
        uploaderId: uploader_id
      } = props.game

      let safeGame = {
        artist,
        description,
        designer,
        name,
        player_count_min,
        player_count_max,
        playtime_max,
        playtime_min,
        tag_line,
        year,
        photo: null,
        uploader_id,
      }
      console.log(safeGame)
  
      const artistArr = stringListToArray(props.game.artist)
      const designerArr = stringListToArray(props.game.designer)

  
      return(
        <GameForm 
          submitAction={()=>console.log('edit game')}  
          game={safeGame} 
          designerArr={designerArr} 
          artistArr={artistArr} 
          categoryArr={props.game.categories}
          defaultPhoto={props.game.imageUrl}
        />
      )
    // }
  } else {
    return <></>
  }
}

const stringListToArray = (strList) => {
  return strList.split(', ')
}


const mapSTP = (state, ownProps) => ({
  game: state.entities.games[ownProps.match.params.game_id],
  loading: state.ui.loading.gameLoading, 
  categories: state.entities.categories,
  user_id: state.session.id
})

const mapDTP = (dispatch, ownProps) => ({
  retrieveGame: ()=> dispatch(retrieveGame(ownProps.match.params.game_id)),
})

const EditGameContainer = connect(mapSTP, mapDTP)(EditGame);
export default EditGameContainer