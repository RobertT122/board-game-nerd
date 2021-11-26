import React from "react";
import { connect } from "react-redux";
import { retrieveGame } from "../../actions/game_actions";
import { withRouter } from "react-router";

class GamePage extends React.Component{

  // componentDidMount(){
  //   console.log("mounting")
  //   this.props.retrieveGame()
  // }

  render(){
    if (!this.props.game){
      this.props.retrieveGame()
      return <h1>loading</h1>
    }
    else {
      const {game} = this.props
      return (
        <div>
          <h1>{game.name}</h1>
          <p>{game.tag_line}</p> 
          {/* fix the jbuilder file to export at camelcase */}
          <p>{game.description}</p>
          <p>{game.designer_name}</p>
          <div></div>
        </div>
      )
    }
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