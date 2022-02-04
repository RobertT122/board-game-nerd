import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
// import { useLocation } from "react-router-dom";
import GameForm from "./game_form";
import { retrieveGame } from "../../actions/game_actions";
import OopsPage from "../errors/oops_page";


const EditGame = (props) => {
  // const location = useLocation()
  const [mounted, setMounted] = useState(false)

  useEffect(()=> {
    props.retrieveGame()
    setMounted(true)
  }, [])

  if(!props.loading && mounted){
    if (props.userId !== props.game.uploaderId){
      return <OopsPage/>
    } else {
      let {
        artist, description, designer, name, year,
        tagLine: tag_line, id,
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
        id
      }
      console.log(safeGame)
  
      const artistArr = stringListToArray(props.game.artist)
      const designerArr = stringListToArray(props.game.designer)

  
      return(
        <GameForm 
          submitAction={(formData)=>console.log(formData.get('game[id]'))}  
          game={safeGame} 
          designerArr={designerArr} 
          artistArr={artistArr} 
          categoryArr={props.game.categories}
          defaultPhoto={props.game.imageUrl}
        />
      )
    }
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
  userId: state.session.id
})

const mapDTP = (dispatch, ownProps) => ({
  retrieveGame: ()=> dispatch(retrieveGame(ownProps.match.params.game_id)),
})

const EditGameContainer = connect(mapSTP, mapDTP)(EditGame);
export default EditGameContainer