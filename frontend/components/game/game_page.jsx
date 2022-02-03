import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import { retrieveGame } from "../../actions/game_actions";
import GameDetails from "./game_details";

const GamePage =  (props) => {
  let location = useLocation()
  
  useEffect(() => {
    props.retrieveGame();
  }, [location])

  if (props.loading){
    return <></>
  }
  return <GameDetails game={props.game} categories={props.categories}/>
}

const mapSTP = (state, ownProps) => ({
  game: state.entities.games[ownProps.match.params.game_id],
  loading: state.ui.loading.gameLoading, 
  categories: state.entities.categories, 
})

const mapDTP = (dispatch, ownProps) => ({
  retrieveGame: ()=> dispatch(retrieveGame(ownProps.match.params.game_id)),
})


const GamePageController = connect(mapSTP, mapDTP)(GamePage)
export default GamePageController