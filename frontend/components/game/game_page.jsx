import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { retrieveGame } from "../../actions/game_actions";
import GameDetails from "./game_details";

const GamePage =  (props) => {
  let location = useLocation()
  let history = useHistory()
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    props.retrieveGame();
    setMounted(true)
  }, [location])

  const editButton = (userA, userB) => {
    if (userA === userB){
      return(
      <button 
        className="edit-button" 
        onClick={()=>{
          history.push(`/game/edit/${props.game.id}`)
        }}
      > EDIT </button>
      )
    }
    return <></>
  }

  if (!props.loading && mounted){
    return (
      <>
        {editButton(props.currentUserId, props.game.uploaderId)}
        <GameDetails game={props.game} categories={props.categories}/>
      </>
    )
  } else {
    return <></>
  }
}

const mapSTP = (state, ownProps) => ({
  game: state.entities.games[ownProps.match.params.game_id],
  loading: state.ui.loading.gameLoading, 
  categories: state.entities.categories,
  currentUserId: state.session.id,
})

const mapDTP = (dispatch, ownProps) => ({
  retrieveGame: ()=> dispatch(retrieveGame(ownProps.match.params.game_id)),
})


const GamePageController = connect(mapSTP, mapDTP)(GamePage)
export default GamePageController