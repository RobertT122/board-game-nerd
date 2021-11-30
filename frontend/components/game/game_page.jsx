import React, { useEffect } from "react";
import { connect } from "react-redux";
import { retrieveGame } from "../../actions/game_actions";
import { showLoginModal } from "../../actions/ui_actions";
import GameDetails from "./game_details";

const GamePage =  (props) => {

  useEffect(() => {
    props.retrieveGame();
  }, [])

  if (props.loading){
    return <h1>loading...</h1>
  }
  return <GameDetails game={props.game} currentUser={props.currentUser} showLogin={props.showLogin}/>
}

const mapSTP = (state, ownProps) => ({
  game: state.entities.games[ownProps.match.params.game_id],
  loading: state.ui.loading.gameLoading, 
  currentUser: state.entities.users[state.session.id]
})

const mapDTP = (dispatch, ownProps) => ({
  retrieveGame: ()=> dispatch(retrieveGame(ownProps.match.params.game_id)),
  showLogin: () => dispatch(showLoginModal()),
})


const GamePageController = connect(mapSTP, mapDTP)(GamePage)
export default GamePageController