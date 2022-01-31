import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { retrieveUserGames } from "../../actions/game_actions";

const UserGames = ({retrieveUserGames, games, loading}) => {
  useEffect(() => retrieveUserGames(), [])
  if(loading){
    return <></>
  }

  return (
    <div className="body-content splash-games">
      <h1 className="context-title">Your Game Contributions</h1>
      <ul className="context-body game-boxes">
        {
          games.map(game => {
            console.log(game.name);
            return(
              <li key={game.id} className="splash-game-container">
                <span className="splash-game-name">{game.name}</span>
                <img className="splash-game-image" src={game.imageUrl} />
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}

const mapSTP = ({entities: {games, lists }, ui: {loading}}) =>({
  games: lists.userGames.map(id => games[id]),
  loading: loading.userGamesLoading
});

const mapDTP = ( dispatch, ownProps ) =>({
  retrieveUserGames: () => dispatch(retrieveUserGames(ownProps.user.id))
});

const UserGamesContainer = connect(mapSTP, mapDTP)(UserGames);

export default UserGamesContainer;