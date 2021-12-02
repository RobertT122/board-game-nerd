import GameListItem from "./game_list_item";
import { connect } from "react-redux";
import React from "react";
import { retrieveAllGames } from "../../actions/game_actions";


class AllGamesList extends React.Component{
  componentDidMount(){
    this.props.retrieveAllGames()
  }

  compareRatings(game1, game2){
    if ((game1.avgRating > game2.avgRating) || (game1.avgRating && !game2.avgRating)){
      return -1
    } else if ((game1.avgRating > game2.avgRating) || (!game1.avgRating && game2.avgRating)){
      return 1
    } else {
      return 0
    }
  }

  render(){
    return (
      <ul>
        {
          this.props.games.sort(this.compareRatings).map( game =>(
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