import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { retrieveUserGames } from "../../actions/game_actions";

const UserGames = ({retrieveUserGames, games}) => {
  useEffect(() => retrieveUserGames(), [])

  const tester = () => console.log(userList);

  return (
    <button onClick={tester}>user games</button>
  );
}

const mapSTP = ({entities: {games, lists }}) =>({
  games: lists.userGames.map(id => games[id])
});

const mapDTP = ( dispatch, ownProps ) =>({
  retrieveUserGames: () => dispatch(retrieveUserGames(ownProps.user.id))
});

const UserGamesContainer = connect(mapSTP, mapDTP)(UserGames);

export default UserGamesContainer;