import React from "react";
import { connect } from "react-redux";
import { deleteGame } from "../../actions/game_actions";

const DeleteModal = props => {
  return (
    <div className="delete-modal">
      <h1>Are you sure you want to delete?</h1>
      <p>This action cannot be undone! All reviews and Comments for this game will be erased.</p>
      <div className="buttons">
        <button className="yes-button" onClick={() => props.deleteGame(props.gameId)}>YES</button>
        <button className="no-button" onClick={props.hide}>NO</button>
      </div>
    </div>
      
  )
}

const mapDTP = dispatch => ({
  deleteGame: gameId => dispatch(deleteGame(gameId))
})
const mapSTP = state => ({
  gameId: state.ui.modal.gameId
})

const DeleteModalContainer = connect(mapSTP, mapDTP)(DeleteModal)

export default DeleteModalContainer