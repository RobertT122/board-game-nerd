//file marked for deletion
//this is a temporary file used to path to game pages


import { connect } from "react-redux";
import React from "react";
import { retrieveAllGames } from "../../actions/game_actions";
import { Link } from "react-router-dom";

class AllGamesList extends React.Component{
  componentDidMount(){
    this.props.retrieveAllGames()
  }

  gameUrl(game){
    return `/game/${game.id}/${game.name.toLowerCase().split(" ").join("-")}`
  }

  render(){
    return (
      <ul>
        {
          this.props.games.map( game =>(
            <li key={game.id}>
              <Link to={this.gameUrl(game)} >{game.name}</Link>
            </li>
          ))
        }
      </ul>
    )
  }
}
const mapDTP = dispatch =>({
  retrieveAllGames: () => dispatch(retrieveAllGames())
})

const mapSTP = state => ({
  games: Object.values(state.entities.games)
})

const AllGamesListContainer = connect(mapSTP, mapDTP)(AllGamesList)
export default AllGamesListContainer