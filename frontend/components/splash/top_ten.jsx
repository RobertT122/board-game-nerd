import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { retrieveTopTen } from "../../actions/game_actions";
import GameListItem from "../game/game_list_item";


const TopTen = ({games, retrieveTopTen}) => {

  useEffect(()=>retrieveTopTen(), [])

  return (
    <>
      <h2 className="splash-games splash-title">Top 10 Games</h2>
      <div className="game-list">
        <ul>
          {
            games.map( (game, rank) =>(
              <li key={game.id}>
                <GameListItem game={game} rank={rank+1}/>
              </li>
            ))
          }
        </ul>
      </div>
    </>
  );
}

const mapSTP = ({entities}) =>({
  games: entities.lists.topTen.map(id => entities.games[id] )
});

const mapDTP = dispatch =>({
  retrieveTopTen: () => dispatch(retrieveTopTen())
});

const TopTenContainer = connect(mapSTP, mapDTP)(TopTen);

export default TopTenContainer;


// class AllGamesList extends React.Component{
//   componentDidMount(){
//     this.props.retrieveAllGames()
//   }

//   compareRatings(game1, game2){
//     if ((game1.avgRating > game2.avgRating) || (game1.avgRating && !game2.avgRating)){
//       return -1
//     } else if ((game1.avgRating > game2.avgRating) || (!game1.avgRating && game2.avgRating)){
//       return 1
//     } else {
//       return 0
//     }
//   }

//   render(){
//     return (
//       <div className="game-list">
//         <ul>
//           {
//             this.props.games.sort(this.compareRatings).map( (game, rank) =>(
//               <li key={game.id}>
//                 <GameListItem game={game} rank={rank+1}/>
//               </li>
//             ))
//           }
//         </ul>
//       </div>
//     )
//   }
// }
// const mapDTP = dispatch =>({
//   retrieveAllGames: () => dispatch(retrieveAllGames())
// })

// const mapSTP = state => ({
//   games: Object.values(state.entities.games)
// })

// const AllGamesListContainer = connect(mapSTP, mapDTP)(AllGamesList)
// export default AllGamesListContainer