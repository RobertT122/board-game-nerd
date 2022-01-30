import React from "react";
import { connect } from "react-redux";


const TopTen = props => {

  return (
    <h1>top ten list</h1>
  );
}

const mapSTP = state =>({
  games: state.games
  // games: state.list.topTen.map(id => {
  //   state.games[id]
  // })

});
const mapDTP = dispatch =>({
  retrieveTopTen: null
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