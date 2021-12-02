import React, { useEffect } from "react";
import { connect } from "react-redux";
import { retrieveGame } from "../../actions/game_actions";
import GameDetails from "./game_details";

const GamePage =  (props) => {

  useEffect(() => {
    console.log()
    props.retrieveGame();
  }, [])

  if (props.loading){
    return <h1>loading...</h1>
  }
  return <GameDetails game={props.game} />
}

const mapSTP = (state, ownProps) => ({
  game: state.entities.games[ownProps.match.params.game_id],
  loading: state.ui.loading.gameLoading, 
  recviews: state.entities.reviews
})

const mapDTP = (dispatch, ownProps) => ({
  retrieveGame: ()=> dispatch(retrieveGame(ownProps.match.params.game_id)),
})


const GamePageController = connect(mapSTP, mapDTP)(GamePage)
export default GamePageController