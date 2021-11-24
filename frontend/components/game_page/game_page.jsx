import React from "react";
import { connect } from "react-redux";
import { retrieveGame } from "../../actions/game_actions";

class GamePage extends React.Component{

  componentDidMount(){
    this.props.retrieveGame()
  }

  render(){
    console.log(this.props)
    const {game} = this.props
    return (
      <div>
        <h1>{game.name}</h1>
        <p>{game.description}</p>
        <p>{game.designer_name}</p>

      </div>
    )
  }
}

const mapSTP = (state, ownProps) => ({
  game: state.entities.games[ownProps.match.params.game_id]
})

const mapDTP = (dispatch, ownProps) => ({
  retrieveGame:()=> dispatch(retrieveGame(ownProps.match.params.game_id))
})

const GamePageController = connect(mapSTP, mapDTP)(GamePage)
export default GamePageController