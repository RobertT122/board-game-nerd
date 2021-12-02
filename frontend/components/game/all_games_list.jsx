import GameListItem from "./game_list_item";
import { connect } from "react-redux";
import React from "react";
import { retrieveAllGames } from "../../actions/game_actions";


class AllGamesList extends React.Component{
  componentDidMount(){
    this.props.retrieveAllGames()
  }

  render(){
    return (
      <ul>
        {
          this.props.games.map( game =>(
            <li key={game.id}>
              <GameListItem game={game}/>
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